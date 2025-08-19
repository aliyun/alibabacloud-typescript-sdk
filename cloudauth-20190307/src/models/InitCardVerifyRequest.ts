// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitCardVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * Security Token, used for anti-replay and anti-tampering checks. If this parameter is passed, the CallbackToken field will be displayed in the callback address.
   * 
   * @example
   * NMjvQanQgplBSaEI0sL86WnQplB
   */
  callbackToken?: string;
  /**
   * @remarks
   * - The callback notification address for the authentication result, which must start with https.
   * - The platform will call back this address after completing the authentication and automatically add the certifyId and passed fields, example: https://www.aliyun.com?certifyId=xxxx&passed=T
   * - Warning
   * The callback is triggered only when the authentication is completed. If the authentication is abandoned, interrupted abnormally, or not performed, no notification will be sent. It is recommended that when you receive the callback notification, if necessary, you can obtain detailed authentication information through the query interface.
   * 
   * @example
   * https://www.aliyun.com
   */
  callbackUrl?: string;
  /**
   * @remarks
   * Number of card pages collected by the SDK
   * - You can input 1 or 2; input 1 to collect the front side, input 2 to collect both the front and back sides.
   * 
   * - If the verification type is ID period (VerifyMeta value is ID_PERIOD), you must input 2.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  cardPageNumber?: string;
  /**
   * @remarks
   * Type of identification
   * - Resident Second Generation ID Card: IDENTITY_CARD
   * 
   * This parameter is required.
   * 
   * @example
   * IDENTITY_CARD
   */
  cardType?: string;
  /**
   * @remarks
   * Enumeration of photo-taking methods (manual/auto)
   * - Take a photo: shoot
   * - Scan: scan 
   * - Auto switch: auto
   * 
   * @example
   * shoot
   */
  docScanMode?: string;
  /**
   * @remarks
   * A unique business identifier you define, used for subsequent troubleshooting.
   * Supports a combination of 32 alphanumeric characters, please ensure uniqueness.
   * 
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @remarks
   * MetaInfo environment parameter, which needs to be obtained through the client SDK.
   * 
   * This parameter is required.
   * 
   * @example
   * {"zimVer":"3.0.0","appVersion": "1","bioMetaInfo": "4.1.0:1150****,0","appName": "com.aliyun.antcloudauth","deviceType": "ios","osVersion": "iOS 10.3.2","apdidToken": "","deviceModel": "iPhone9,1"}
   */
  metaInfo?: string;
  /**
   * @remarks
   * Verification method, value:
   * - OCR_VERIFY: OCR recognition and verification mode.
   * 
   * This parameter is required.
   * 
   * @example
   * OCR_VERIFY
   */
  model?: string;
  /**
   * @remarks
   * Whether to temporarily store the images collected by the app.
   * - Y: Yes
   * - N: No
   * - If \\"Yes\\" is selected here, the query interface will support returning the card image information.
   * 
   * This parameter is required.
   * 
   * @example
   * Y
   */
  pictureSave?: string;
  /**
   * @remarks
   * Verification type, value:
   * - Identity two elements (name + ID number): ID_2_META
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

