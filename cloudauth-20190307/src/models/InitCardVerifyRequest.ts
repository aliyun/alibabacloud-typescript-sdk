// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitCardVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The security token used for anti-replay and anti-tampering verification. If you specify this parameter, the CallbackToken field is displayed in the callback URL.
   * 
   * @example
   * NMjvQanQgplBSaEI0sL86WnQplB
   */
  callbackToken?: string;
  /**
   * @remarks
   * The callback URL for authentication results. The URL must start with https. After the authentication is completed, the platform calls back this URL and automatically adds the certifyId and passed fields. Example: https://www.aliyun.com?certifyId=xxxx&passed=T.
   * Warning: The callback is triggered only when the authentication is completed. If the authentication is abandoned, abnormally interrupted, or not performed, no notification is sent. When you receive the callback notification, call the query API to obtain the authentication details if needed.
   * 
   * @example
   * https://www.aliyun.com
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The number of pages of the ID document collected by the SDK. Valid values:
   * - 1: collects the front side.
   * - 2: collects the front and back sides.
   * If the verification type is the validity period of the ID document (VerifyMeta is set to ID_PERIOD), you must set this parameter to 2.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  cardPageNumber?: string;
  /**
   * @remarks
   * The type of the ID document. Valid values:
   * - IDENTITY_CARD: second-generation resident ID card.
   * 
   * This parameter is required.
   * 
   * @example
   * IDENTITY_CARD
   */
  cardType?: string;
  /**
   * @remarks
   * The photo capture mode. Valid values:
   * - shoot: photo capture.
   * - scan: scanning.
   * - auto: automatic switchover.
   * 
   * @example
   * shoot
   */
  docScanMode?: string;
  /**
   * @remarks
   * The custom unique business identifier used for subsequent troubleshooting. The value must be a unique combination of up to 32 letters and digits.
   * 
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The MetaInfo environment parameter, which must be obtained by using the client SDK.
   * 
   * This parameter is required.
   * 
   * @example
   * {"zimVer":"3.0.0","appVersion": "1","bioMetaInfo": "4.1.0:1150****,0","appName": "com.aliyun.antcloudauth","deviceType": "ios","osVersion": "iOS 10.3.2","apdidToken": "","deviceModel": "iPhone9,1"}
   */
  metaInfo?: string;
  /**
   * @remarks
   * The verification method. Valid values:
   * - OCR_VERIFY: OCR recognition and authentication mode.
   * 
   * This parameter is required.
   * 
   * @example
   * OCR_VERIFY
   */
  model?: string;
  /**
   * @remarks
   * Specifies whether to temporarily store the image information collected by the app. Valid values:
   * - Y: yes. If you select this value, the query API can return the image information of the ID document.
   * - N: no.
   * 
   * This parameter is required.
   * 
   * @example
   * Y
   */
  pictureSave?: string;
  /**
   * @remarks
   * The verification type. Valid values:
   * - ID_2_META: two identity elements (name and ID number).
   * 
   * This parameter is required.
   * 
   * @example
   * ID_2_META
   */
  verifyMeta?: string;
  static names(): { [key: string]: string } {
    return {
      callbackToken: 'CallbackToken',
      callbackUrl: 'CallbackUrl',
      cardPageNumber: 'CardPageNumber',
      cardType: 'CardType',
      docScanMode: 'DocScanMode',
      merchantBizId: 'MerchantBizId',
      metaInfo: 'MetaInfo',
      model: 'Model',
      pictureSave: 'PictureSave',
      verifyMeta: 'VerifyMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackToken: 'string',
      callbackUrl: 'string',
      cardPageNumber: 'string',
      cardType: 'string',
      docScanMode: 'string',
      merchantBizId: 'string',
      metaInfo: 'string',
      model: 'string',
      pictureSave: 'string',
      verifyMeta: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

