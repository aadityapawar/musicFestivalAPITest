import {
  validateMusicFestivals,
  validateBands,
  validateThrottling,
} from "../../support/util";
import {
  SUCCESS,
  THROTTLING,
  THROTTLING_MESSAGE,
} from "../../constants/festivalResponseParams";

describe("Validate Music Festival API Response", () => {
  it("GET /festivals - Validate festivals details", () => {
    cy.request({
      method: "GET",
      url: "/festivals",
      timeout: 5000,
      failOnStatusCode: false,
    }).should((res) => {
      if (res.status === THROTTLING) {
        validateThrottling(res, THROTTLING_MESSAGE);
      } else {
        expect(res.status).to.equal(SUCCESS);
        expect(res.body).to.not.be.null;
        validateMusicFestivals(res);
      }
    });
  }),
    it("GET /festivals - Validate band details", () => {
      cy.request({
        method: "GET",
        url: "/festivals",
        failOnStatusCode: false,
      }).should((res) => {
        if (res.status === THROTTLING) {
          validateThrottling(res, THROTTLING_MESSAGE);
        } else {
          expect(res.status).to.equal(SUCCESS);
          validateBands(res);
        }
      });
    }),
    it("GET /festivals - Throttling condition of API", () => {
      cy.request({
        method: "GET",
        url: "/festivals",
        failOnStatusCode: false,
      }).should((res) => {
        validateThrottling(res, THROTTLING_MESSAGE);
      });
    });
});
