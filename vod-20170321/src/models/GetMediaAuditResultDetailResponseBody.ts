// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaAuditResultDetailResponseBodyMediaAuditResultDetailList extends $dara.Model {
  /**
   * @remarks
   * The classification of the ad review result. Valid values:
   * - **normal**: Normal.
   * - **ad**: Other ads.
   * - **politics**: Text contains politically sensitive content.
   * - **porn**: Text contains pornographic content.
   * - **abuse**: Text contains abusive content.
   * - **terrorism**: Text contains terrorism-related content.
   * - **contraband**: Text contains prohibited content.
   * - **spam**: Text contains other spam content.
   * - **npx**: Psoriasis ads.
   * - **qrcode**: Contains a QR code.
   * - **programCode**: Contains a mini program code.
   * 
   * @example
   * normal
   */
  adLabel?: string;
  /**
   * @remarks
   * The hit score of the video screenshot for the ad review result. Value range: `[0-100]`, with a precision of 10 decimal places. The hit result indicates the probability of the corresponding classification label. A higher value indicates higher accuracy.
   * 
   * @example
   * 100
   */
  adScore?: string;
  /**
   * @remarks
   * The classification of the undesirable scene review result. Valid values:
   * - **normal**: Normal.
   * - **meaningless**: The image has no content (for example, a black screen or white screen).
   * - **PIP**: Picture-in-Picture (PiP).
   * - **smoking**: Smoking.
   * - **drivelive**: In-car live streaming.
   * 
   * @example
   * normal
   */
  liveLabel?: string;
  /**
   * @remarks
   * The hit score of the video screenshot for the undesirable scene review result. Value range: `[0-100]`, with a precision of 10 decimal places. The hit result indicates the probability of the corresponding classification label. A higher value indicates higher accuracy.
   * 
   * @example
   * 100
   */
  liveScore?: string;
  /**
   * @remarks
   * The classification of the logo review result. Valid values:
   * - **normal**: Normal.
   * - **TV**: Contains a regulated logo.
   * - **trademark**: Contains a trademark.
   * 
   * @example
   * normal
   */
  logoLabel?: string;
  /**
   * @remarks
   * The hit score of the video screenshot for the logo review result. Value range: `[0-100]`, with a precision of 10 decimal places. The hit result indicates the probability of the corresponding classification label. A higher value indicates higher accuracy.
   * 
   * @example
   * 100
   */
  logoScore?: string;
  /**
   * @remarks
   * The classification of the pornography review result. Valid values:
   * 
   * - **normal**: Normal.
   * - **porn**: Pornographic.
   * - **sexy**: Sexy.
   * 
   * @example
   * normal
   */
  pornLabel?: string;
  /**
   * @remarks
   * The hit score of the video screenshot for the pornography review result. Value range: `[0-100]`, with a precision of 10 decimal places. The hit result indicates the probability of the corresponding classification label. A higher value indicates higher accuracy.
   * 
   * @example
   * 100.00
   */
  pornScore?: string;
  /**
   * @remarks
   * The classification of the terrorism review result. Valid values:
   * 
   * - **normal**: Normal.
   * - **bloody**: Bloody.
   * - **explosion**: Explosion and smoke.
   * - **outfit**: Special attire.
   * - **logo**: Special logo.
   * - **weapon**: Weapon.
   * - **politics**: Politically sensitive.
   * - **violence**: Fighting.
   * - **crowd**: Crowd gathering.
   * - **parade**: Parade.
   * - **carcrash**: Car crash scene.
   * - **flag**: Flag.
   * - **location**: Landmark.
   * - **others**: Others.
   * 
   * @example
   * normal
   */
  terrorismLabel?: string;
  /**
   * @remarks
   * The hit score of the video screenshot for the terrorism review result. Value range: `[0-100]`, with a precision of 10 decimal places. The hit result indicates the probability of the corresponding classification label. A higher value indicates higher accuracy.
   * 
   * @example
   * 100.00
   */
  terrorismScore?: string;
  /**
   * @remarks
   * The position of the video screenshot in the video. Unit: milliseconds.
   * 
   * @example
   * 3005
   */
  timestamp?: string;
  /**
   * @remarks
   * The URL of the video screenshot.
   * 
   * @example
   * http://temp-testbucket.oss-cn-shanghai.aliyuncs.com/aivideocensor/****.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      adLabel: 'AdLabel',
      adScore: 'AdScore',
      liveLabel: 'LiveLabel',
      liveScore: 'LiveScore',
      logoLabel: 'LogoLabel',
      logoScore: 'LogoScore',
      pornLabel: 'PornLabel',
      pornScore: 'PornScore',
      terrorismLabel: 'TerrorismLabel',
      terrorismScore: 'TerrorismScore',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adLabel: 'string',
      adScore: 'string',
      liveLabel: 'string',
      liveScore: 'string',
      logoLabel: 'string',
      logoScore: 'string',
      pornLabel: 'string',
      pornScore: 'string',
      terrorismLabel: 'string',
      terrorismScore: 'string',
      timestamp: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultDetailResponseBodyMediaAuditResultDetail extends $dara.Model {
  /**
   * @remarks
   * The list of video review result details.
   */
  list?: GetMediaAuditResultDetailResponseBodyMediaAuditResultDetailList[];
  /**
   * @remarks
   * The total number of video review result screenshots.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetMediaAuditResultDetailResponseBodyMediaAuditResultDetailList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the review results.
   */
  mediaAuditResultDetail?: GetMediaAuditResultDetailResponseBodyMediaAuditResultDetail;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6438BD76-D523-46FC-956F-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaAuditResultDetail: 'MediaAuditResultDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaAuditResultDetail: GetMediaAuditResultDetailResponseBodyMediaAuditResultDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaAuditResultDetail && typeof (this.mediaAuditResultDetail as any).validate === 'function') {
      (this.mediaAuditResultDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

