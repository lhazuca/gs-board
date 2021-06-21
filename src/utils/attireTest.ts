import { AttireJSON } from '../components/Attire';
export const attireTest :AttireJSON = {
    enabled: true,
    rules: [
      {
        when: { blue: "*", black: 0, red: 0, green: 0 },
        image: "https://cloud.githubusercontent.com/assets/1631752/19217961/ef2e0d4c-8dea-11e6-960d-69585778f89d.png"
      },
      {
        when: { blue: 3, black: 0, red: 1, green: 0 },
        image: "https://cloud.githubusercontent.com/assets/1631752/19217961/ef2e0d4c-8dea-11e6-960d-69585778f89d.png"
      },
      {
        when: { blue: 0, black: 0, red: 0, green: 0 },
        image: "https://cloud.githubusercontent.com/assets/1631752/19217956/ef1d928c-8dea-11e6-8b53-8d2495cdd3e9.png",
      },
      {
        when: { blue: 0, black: 0, red: 0, green: 1 },
        image: "https://cloud.githubusercontent.com/assets/1631752/19217959/ef27e822-8dea-11e6-9bb0-57892593c9d8.png",
        text:"Verde"
      },
      {
        when: { blue: 1, black: 0, red: 0, green: 0 },
        image: "https://cloud.githubusercontent.com/assets/1631752/19217958/ef245892-8dea-11e6-80f4-aeb5d1862b1c.png"
      },
      {
        when: { blue: 0, black: 1, red: 0, green: 0 },
        image: "https://cloud.githubusercontent.com/assets/1631752/19217957/ef20120a-8dea-11e6-825c-23e7773269b0.png"
      },
      {
        when: { blue: 0, black: 0, red: 1, green: 0 },
        image: "data:image/png;base64,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"
      },
      {
        when: { blue: 0, black: 0, red:2, green: 0 },
        image: "https://thumbs.dreamstime.com/b/rojo-de-la-letra-u-d-en-blanco-91808368.jpg"
      },
      {
        when: { blue: 0, black: 0, red:3, green: 0 },
        image: "https://thumbs.dreamstime.com/z/rojo-de-la-letra-n-d-en-blanco-91808366.jpg"
      },
      {
        when: { blue: 0, black: 0, red:4, green: 0 },
        image: "https://thumbs.dreamstime.com/z/rojo-de-la-letra-q-d-en-blanco-91808445.jpg"
      }
    ],
    "borders": {
      "bottom": "https://user-images.githubusercontent.com/1631752/37176696-c8628ea0-2325-11e8-9fb0-39805f2b810d.png",
      "bottomLeft": "https://user-images.githubusercontent.com/1631752/37176696-c8628ea0-2325-11e8-9fb0-39805f2b810d.png",
      "bottomRight": "https://user-images.githubusercontent.com/1631752/37176696-c8628ea0-2325-11e8-9fb0-39805f2b810d.png",
      "left": "https://user-images.githubusercontent.com/1631752/37176696-c8628ea0-2325-11e8-9fb0-39805f2b810d.png",
      "right": "https://user-images.githubusercontent.com/1631752/37176696-c8628ea0-2325-11e8-9fb0-39805f2b810d.png",
      "top": "https://user-images.githubusercontent.com/1631752/37176696-c8628ea0-2325-11e8-9fb0-39805f2b810d.png",
      "topLeft": "https://user-images.githubusercontent.com/1631752/37176696-c8628ea0-2325-11e8-9fb0-39805f2b810d.png",
      "topRight": "https://user-images.githubusercontent.com/1631752/37176696-c8628ea0-2325-11e8-9fb0-39805f2b810d.png"
    }
  }