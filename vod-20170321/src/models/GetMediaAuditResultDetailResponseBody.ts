// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaAuditResultDetailResponseBodyMediaAuditResultDetailList extends $dara.Model {
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * *   **normal**: normal content.
   * *   **ad**: other ads.
   * *   **politics**: political content in text.
   * *   **porn**: pornographic content in text.
   * *   **abuse**: verbal abuse in text.
   * *   **terrorism**: terrorist content in text.
   * *   **contraband**: prohibited content in text.
   * *   **spam**: spam content in text.
   * *   **npx**: illegal ad
   * *   **qrcode**: QR code.
   * *   **programCode**: mini program code.
   * 
   * @example
   * normal
   */
  adLabel?: string;
  /**
   * @remarks
   * The score of the video snapshot in the ad review result. Valid values: `[0,100]`. The value is rounded down to 10 decimal places. The score is representative of the confidence.
   * 
   * @example
   * 100
   */
  adScore?: string;
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * *   **normal**: normal content.
   * *   **meaningless**: meaningless content, such as a black or white screen.
   * *   **PIP**: picture-in-picture.
   * *   **smoking**: smoking.
   * *   **drivelive**: live broadcasting in a running vehicle.
   * 
   * @example
   * normal
   */
  liveLabel?: string;
  /**
   * @remarks
   * The score of the video snapshot in the undesirable content review result. Valid values: `[0,100]`. The value is rounded down to 10 decimal places. The score is representative of the confidence.
   * 
   * @example
   * 100
   */
  liveScore?: string;
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * *   **normal**: normal content.
   * *   **TV**: controlled TV station logo.
   * *   **trademark**: trademark.
   * 
   * @example
   * normal
   */
  logoLabel?: string;
  /**
   * @remarks
   * The score of the video snapshot in the logo review result. Valid values: `[0,100]`. The value is rounded down to 10 decimal places. The score is representative of the confidence.
   * 
   * @example
   * 100
   */
  logoScore?: string;
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * *   **normal**
   * *   **porn**
   * *   **sexy**
   * 
   * @example
   * normal
   */
  pornLabel?: string;
  /**
   * @remarks
   * The score of the video snapshot in the pornographic content review result. Valid values: `[0,100]`. The value is rounded down to 10 decimal places. The score is representative of the confidence.
   * 
   * @example
   * 100.00
   */
  pornScore?: string;
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * *   **normal**
   * *   **bloody**
   * *   **explosion**
   * *   **outfit**
   * *   **logo**
   * *   **weapon**
   * *   **politics**
   * *   **violence**
   * *   **crowd**
   * *   **parade**
   * *   **carcrash**
   * *   **flag**
   * *   **location**
   * *   **others**
   * 
   * @example
   * normal
   */
  terrorismLabel?: string;
  /**
   * @remarks
   * The score of the video snapshot in the terrorist content review result. Valid values: `[0,100]`. The value is rounded down to 10 decimal places. The score is representative of the confidence.
   * 
   * @example
   * 100.00
   */
  terrorismScore?: string;
  /**
   * @remarks
   * The timestamp of the snapshot in the video. Unit: milliseconds.
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
   * The review results returned.
   */
  list?: GetMediaAuditResultDetailResponseBodyMediaAuditResultDetailList[];
  /**
   * @remarks
   * The total number of snapshots returned.
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
   * Details about review results.
   */
  mediaAuditResultDetail?: GetMediaAuditResultDetailResponseBodyMediaAuditResultDetail;
  /**
   * @remarks
   * The ID of the request.
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

