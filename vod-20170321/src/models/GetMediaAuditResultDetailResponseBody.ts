// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaAuditResultDetailResponseBodyMediaAuditResultDetailList extends $dara.Model {
  /**
   * @remarks
   * The category of the ad review result. Valid values:
   * - **normal**: Normal.
   * - **ad**: Other ads.
   * - **politics**: Political content in text.
   * - **porn**: Pornographic content in text.
   * - **abuse**: Abusive content in text.
   * - **terrorism**: Terrorism content in text.
   * - **contraband**: Contraband content in text.
   * - **spam**: Other spam content in text.
   * - **npx**: Psoriasis ads.
   * - **qrcode**: QR code included.
   * - **programCode**: Mini program code included.
   * 
   * @example
   * normal
   */
  adLabel?: string;
  /**
   * @remarks
   * The hit score of the video snapshot for the ad review result. Valid values: `[0-100]`. The value is accurate to 10 decimal places. The hit score indicates the probability that the snapshot matches the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  adScore?: string;
  /**
   * @remarks
   * The category of the undesirable scene review result. Valid values:
   * - **normal**: Normal.
   * - **meaningless**: No content in the image, such as a black or white screen.
   * - **PIP**: Picture-in-Picture (PiP).
   * - **smoking**: Smoking.
   * - **drivelive**: Live streaming in a car.
   * 
   * @example
   * normal
   */
  liveLabel?: string;
  /**
   * @remarks
   * The hit score of the video snapshot for the undesirable scene review result. Valid values: `[0-100]`. The value is accurate to 10 decimal places. The hit score indicates the probability that the snapshot matches the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  liveScore?: string;
  /**
   * @remarks
   * The category of the logo review result. Valid values:
   * - **normal**: Normal.
   * - **TV**: Restricted logo included.
   * - **trademark**: Trademark included.
   * 
   * @example
   * normal
   */
  logoLabel?: string;
  /**
   * @remarks
   * The hit score of the video snapshot for the logo review result. Valid values: `[0-100]`. The value is accurate to 10 decimal places. The hit score indicates the probability that the snapshot matches the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  logoScore?: string;
  /**
   * @remarks
   * The category of the pornography review result. Valid values:
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
   * The hit score of the video snapshot for the pornography review result. Valid values: `[0-100]`. The value is accurate to 10 decimal places. The hit score indicates the probability that the snapshot matches the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100.00
   */
  pornScore?: string;
  /**
   * @remarks
   * The terrorism and political content review result. Valid values:
   * 
   * - **normal**: Normal.
   * - **bloody**: Bloody.
   * - **explosion**: Explosion and smoke.
   * - **outfit**: Special outfit.
   * - **logo**: Special logo.
   * - **weapon**: Weapon.
   * - **politics**: Political content.
   * - **violence**: Violence.
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
   * The hit score of the video snapshot for the terrorism and political content review result. Valid values: `[0-100]`. The value is accurate to 10 decimal places. The hit score indicates the probability that the snapshot matches the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100.00
   */
  terrorismScore?: string;
  /**
   * @remarks
   * The position of the video snapshot in the video. Unit: milliseconds.
   * 
   * @example
   * 3005
   */
  timestamp?: string;
  /**
   * @remarks
   * The URL of the video snapshot.
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
   * The total number of snapshots in the video review results.
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

