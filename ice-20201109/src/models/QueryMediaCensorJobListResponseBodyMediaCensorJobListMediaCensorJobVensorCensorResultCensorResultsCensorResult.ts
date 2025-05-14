// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultCensorResultsCensorResult extends $dara.Model {
  /**
   * @remarks
   * The label of the moderation result. Separate multiple labels with commas (,).
   * 
   * *   Valid values in the pornographic content moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **sexy**: sexy content.
   *     *   **porn**: pornographic content.
   * 
   * *   Valid values in the terrorist content moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **bloody**: bloody content.
   *     *   **explosion**: explosion and smoke.
   *     *   **outfit**: special costume.
   *     *   **logo**: special logo.
   *     *   **weapon**: weapon.
   *     *   **politics**: political content.
   *     *   **violence**: violence.
   *     *   **crowd**: crowd.
   *     *   **parade**: parade.
   *     *   **carcrash**: car accident.
   *     *   **flag**: flag.
   *     *   **location**: landmark.
   *     *   **others**: other content.
   * 
   * *   Valid values in the ad moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **ad**: other ads.
   *     *   **politics**: political content in text.
   *     *   **porn**: pornographic content in text.
   *     *   **abuse**: abuse in text.
   *     *   **terrorism**: terrorist content in text.
   *     *   **contraband**: prohibited content in text.
   *     *   **spam**: spam in text.
   *     *   **npx**: illegal ad.
   *     *   **qrcode**: QR code.
   *     *   **programCode**: mini program code.
   * 
   * *   Valid values in the undesirable scene moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **meaningless**: meaningless content, such as a black or white screen.
   *     *   **PIP**: picture-in-picture.
   *     *   **smoking**: smoking.
   *     *   **drivelive**: live streaming in a running vehicle.
   * 
   * *   Valid values in the logo moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **TV**: controlled logo.
   *     *   **trademark**: trademark.
   * 
   * @example
   * meaningless
   */
  label?: string;
  /**
   * @remarks
   * The score. Valid values: 0 to 100.
   * 
   * @example
   * 100
   */
  rate?: string;
  /**
   * @remarks
   * The moderation scenario. Valid values:
   * 
   * *   **porn**: pornographic content moderation.
   * *   **terrorism**: terrorist content moderation.
   * *   **ad**: ad moderation.
   * *   **live**: undesirable scene moderation.
   * *   **logo**: logo moderation.
   * 
   * @example
   * ad
   */
  scene?: string;
  /**
   * @remarks
   * The recommended subsequent operation. Valid values:
   * 
   * *   **pass**: The content passes the moderation.
   * *   **review**: The content needs to be manually reviewed.
   * *   **block**: The content needs to be blocked.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

