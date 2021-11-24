import { BAND, MusicFestival } from "../constants/festivalResponseParams";

export function validateMusicFestivals(res) {
  Cypress._.each(res.body, (musicFestival) => {
    expect(musicFestival).to.have.all.keys(
      MusicFestival.NAME,
      MusicFestival.BAND
    );
    expect(musicFestivals)
      .to.have.property(MusicFestival.NAME)
      .and.be.a("string");
    expect(musicFestivals)
      .to.have.property(MusicFestival.BAND)
      .and.be.a("string");
    cy.log(musicFestival.name);
  });
}

export function validateBands(res) {
  Cypress._.each(res.body, (musicFestival) => {
    Cypress._.each(musicFestival.bands, (band) => {
      expect(band).to.have.all.keys(BAND.NAME, BAND.RECORDLABEL);
      expect(musicFestival).to.have.property(BAND.NAME).and.be.a("string");
      expect(musicFestival)
        .to.have.property(BAND.RECORDLABEL)
        .and.be.a("string");
    });
  });
}

export async function validateThrottling(res, message ) {
    expect(res.body).to.equal(message);
}
