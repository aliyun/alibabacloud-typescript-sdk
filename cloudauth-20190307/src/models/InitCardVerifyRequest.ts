// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitCardVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The security token used for anti-replay and anti-tampering verification. If you specify this parameter, the CallbackToken field is included in the callback URL.
   * 
   * @example
   * NMjvQanQgplBSaEI0sL86WnQplB
   */
  callbackToken?: string;
  /**
   * @remarks
   * The callback URL for authentication results. The URL must start with https. After the authentication is complete, the system sends a callback to this URL with the certifyId and passed fields automatically appended. Example: https://www.aliyun.com?certifyId=xxxx&passed=T
   * 
   * > **Warning** The callback is triggered only when the authentication is complete. No notification is sent if the authentication is abandoned, interrupted, or not performed. After you receive the callback notification, call the query operation to obtain the authentication details if needed.
   * 
   * @example
   * https://www.aliyun.com
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The number of card pages to be collected by the SDK. Valid values:
   * - 1: collects the front side only.
   * - 2: collects both the front and back sides.
   * 
   * - If the verification type is ID card validity period (VerifyMeta is set to ID_PERIOD), set this parameter to 2.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  cardPageNumber?: string;
  /**
   * @remarks
   * The document type. Valid values:
   * - IDENTITY_CARD: resident identity card.
   * 
   * This parameter is required.
   * 
   * @example
   * IDENTITY_CARD
   */
  cardType?: string;
  /**
   * @remarks
   * The photo capture mode (manual or automatic). Valid values:
   * - shoot: manual capture
   * - scan: scan mode 
   * - auto: automatic switchover.
   * 
   * @example
   * shoot
   */
  docScanMode?: string;
  /**
   * @remarks
   * A custom business unique identifier that you define for subsequent troubleshooting. The value is a combination of letters and digits up to 32 characters in length. Make sure the value is unique.
   * 
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The MetaInfo environment parameter. Obtain this value by using the client SDK.
   * 
   * This parameter is required.
   * 
   * @example
   * {"zimVer":"3.0.0","appVersion": "1","bioMetaInfo": "4.1.0:1150****,0","appName": "com.aliyun.antcloudauth","deviceType": "ios","osVersion": "iOS 10.3.2","apdidToken": "","deviceModel": "iPhone9,1"}
   */
  metaInfo?: string;
  /**
   * @remarks
   * The verification mode. Valid values:
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
   * Specifies whether to temporarily store images collected by the app. Valid values:
   * - Y: Yes.
   * - N: No.
   * - If you set this parameter to Y, the query operation returns card image information.
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
   * - ID_2_META: two-factor identity verification (name + ID card number).
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

