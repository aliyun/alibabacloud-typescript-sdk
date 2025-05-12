// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImAuditResponseBodyImageResultsResultResultsFrames } from "./ImAuditResponseBodyImageResultsResultResultsFrames";
import { ImAuditResponseBodyImageResultsResultResultsHintWordsInfo } from "./ImAuditResponseBodyImageResultsResultResultsHintWordsInfo";
import { ImAuditResponseBodyImageResultsResultResultsLogoData } from "./ImAuditResponseBodyImageResultsResultResultsLogoData";
import { ImAuditResponseBodyImageResultsResultResultsProgramCodeData } from "./ImAuditResponseBodyImageResultsResultResultsProgramCodeData";
import { ImAuditResponseBodyImageResultsResultResultsQrcodeLocations } from "./ImAuditResponseBodyImageResultsResultResultsQrcodeLocations";
import { ImAuditResponseBodyImageResultsResultResultsSfaceData } from "./ImAuditResponseBodyImageResultsResultResultsSfaceData";


export class ImAuditResponseBodyImageResultsResultResults extends $dara.Model {
  /**
   * @remarks
   * The category of the moderation results. Valid values vary based on the specified moderation scenario.
   * 
   * *   If the Scenes parameter is set to porn, the valid values are:
   * 
   *     *   normal: no pornographic content
   *     *   sexy: sexy content
   *     *   porn: pornographic content
   * 
   * *   If the Scenes parameter is set to terrorism, the valid values are:
   * 
   *     *   normal: no pornographic content
   *     *   bloody: bloody content
   *     *   explosion: explosions and smoke
   *     *   outfit: special costume
   *     *   logo: special logo
   *     *   weapon: weapon
   *     *   politics: political content
   *     *   violence: violence
   *     *   crowd: crowd
   *     *   parade: parade
   *     *   carcrash: car accident
   *     *   flag: flag
   *     *   location: landmark
   *     *   others: other content
   * 
   * *   If the Scenes parameter is set to ad, the valid values are:
   * 
   *     *   normal: no pornographic content
   *     *   ad: ad violation
   *     *   politics: politically sensitive content in text
   *     *   porn: pornographic content in text
   *     *   abuse: abuse in text
   *     *   terrorism: terrorist content in text
   *     *   contraband: prohibited content in text
   *     *   spam: junk content in text
   *     *   npx: illegal ad
   *     *   qrcode: QR code
   *     *   programCode: mini program code
   * 
   * *   If the Scenes parameter is set to qrcode, the valid values are:
   * 
   *     *   normal: no pornographic content
   *     *   qrcode: QR code
   *     *   programCode: mini program code
   * 
   * *   If the Scenes parameter is set to live, the valid values are:
   * 
   *     *   normal: no pornographic content
   *     *   meaningless: no content in the image, such as black or white screen
   *     *   PIP: picture-in-picture
   *     *   smoking: smoking
   *     *   drivelive: live broadcasting in a running vehicle
   * 
   * *   If the Scenes parameter is set to logo, the valid values are:
   * 
   *     *   normal: no pornographic content
   *     *   TV: controlled logo
   *     *   trademark: trademark
   * 
   * @example
   * sexy
   */
  label?: string;
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. A greater value indicates a higher confidence level. If a value of pass is returned for the suggestion parameter, a higher confidence level indicates a higher probability that the content is normal. If a value of review or block is returned for the suggestion parameter, a higher confidence level indicates a higher probability that the content contains violations.
   * 
   * >  This score is for reference only. We strongly recommend that you do not use this score in your business. We recommend that you use the values that are returned for the suggestion, label, and sublabel parameters to determine whether the content contains violations. The sublabel parameter is returned by some operations.
   * 
   * @example
   * 91.54
   */
  rate?: number;
  /**
   * @remarks
   * The image moderation scenario. Valid values:
   * 
   * *   porn: pornography
   * *   terrorism: terrorist content
   * *   ad: ad violation
   * *   qrcode: QR code
   * *   live: undesirable scene
   * *   logo: special logo
   * 
   * @example
   * porn
   */
  scene?: string;
  /**
   * @remarks
   * The recommended subsequent operation. Valid values:
   * 
   * *   pass: The content passes the moderation. No further actions are required.
   * *   review: The moderation object contains suspected violations and requires human review.
   * *   block: The moderation object contains violations. We recommend that you delete or block the object.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * If the temporary access URL of the image is too long, a truncated temporary access URL is returned for each frame.
   */
  frames?: ImAuditResponseBodyImageResultsResultResultsFrames[];
  /**
   * @remarks
   * The information about the term hit by the ad or violation text detected in the moderated image.
   */
  hintWordsInfo?: ImAuditResponseBodyImageResultsResultResultsHintWordsInfo[];
  /**
   * @remarks
   * The information about the logo detected in the moderated image.
   */
  logoData?: ImAuditResponseBodyImageResultsResultResultsLogoData[];
  /**
   * @remarks
   * ocrData
   */
  ocrData?: string[];
  /**
   * @remarks
   * The location information of the mini program code detected in the moderated image.
   */
  programCodeData?: ImAuditResponseBodyImageResultsResultResultsProgramCodeData[];
  /**
   * @remarks
   * The information about the text that is included in the QR code detected in the moderated image.
   */
  qrcodeData?: string[];
  /**
   * @remarks
   * The coordinates of the QR code detected in the image.
   */
  qrcodeLocations?: ImAuditResponseBodyImageResultsResultResultsQrcodeLocations[];
  /**
   * @remarks
   * The information about the terrorist content detected in the moderated image.
   */
  sfaceData?: ImAuditResponseBodyImageResultsResultResultsSfaceData[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
      frames: 'frames',
      hintWordsInfo: 'hintWordsInfo',
      logoData: 'logoData',
      ocrData: 'ocrData',
      programCodeData: 'programCodeData',
      qrcodeData: 'qrcodeData',
      qrcodeLocations: 'qrcodeLocations',
      sfaceData: 'sfaceData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'number',
      scene: 'string',
      suggestion: 'string',
      frames: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsFrames },
      hintWordsInfo: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsHintWordsInfo },
      logoData: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsLogoData },
      ocrData: { 'type': 'array', 'itemType': 'string' },
      programCodeData: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsProgramCodeData },
      qrcodeData: { 'type': 'array', 'itemType': 'string' },
      qrcodeLocations: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsQrcodeLocations },
      sfaceData: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResultsSfaceData },
    };
  }

  validate() {
    if(Array.isArray(this.frames)) {
      $dara.Model.validateArray(this.frames);
    }
    if(Array.isArray(this.hintWordsInfo)) {
      $dara.Model.validateArray(this.hintWordsInfo);
    }
    if(Array.isArray(this.logoData)) {
      $dara.Model.validateArray(this.logoData);
    }
    if(Array.isArray(this.ocrData)) {
      $dara.Model.validateArray(this.ocrData);
    }
    if(Array.isArray(this.programCodeData)) {
      $dara.Model.validateArray(this.programCodeData);
    }
    if(Array.isArray(this.qrcodeData)) {
      $dara.Model.validateArray(this.qrcodeData);
    }
    if(Array.isArray(this.qrcodeLocations)) {
      $dara.Model.validateArray(this.qrcodeLocations);
    }
    if(Array.isArray(this.sfaceData)) {
      $dara.Model.validateArray(this.sfaceData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

