// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitAuthVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The security token that you generate for anti-replay and anti-tampering verification.
   * If this parameter is specified, the CallbackToken field is included in the callback request sent to CallbackUrl.
   * 
   * @example
   * NMjvQanQgplBSaEI0sL86WnQplB
   */
  callbackToken?: string;
  /**
   * @remarks
   * The callback URL for OCR results. The default callback request method is GET. The callback URL must start with https. After OCR recognition is completed, a callback request is sent to this URL, and the certifyId and subcode fields are automatically appended.
   * Warning
   * - The accessibility of this URL is verified before the API is invoked. If the specified URL does not support public network access, a 400 error is returned.
   * - The callback is executed immediately after the OCR recognition is invoked, but may be delayed due to network or other issues. Accept the request completion notification on the client side first, and then invoke the query API to obtain the result details.
   * 
   * @example
   * https://www.aliyun.com?callbackToken=100000****&certifyId=shaxxxx&subCode=200
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The number of pages of the identity document to be collected by the SDK. Valid values:
   * - 1: the front side.
   * - 2: both the front and back sides.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  cardPageNumber?: string;
  /**
   * @remarks
   * The type of the identity document. Valid values: IDENTITY_CARD.
   * 
   * This parameter is required.
   * 
   * @example
   * IDENTITY_CARD
   */
  cardType?: string;
  /**
   * @remarks
   * The OCR identity document scanning pattern. Valid values:
   * - shoot: takes a photo. This is the default value.
   * - scan: scans the document.
   * - auto: automatic switchover between photo and scan patterns.
   * 
   * @example
   * shoot
   */
  docScanMode?: string;
  /**
   * @remarks
   * Specifies whether to enable the anti-counterfeiting detection feature for the identity document. Valid values:
   * - Y: Enabled.
   * - N: Disabled. This is the default value.
   * 
   * @example
   * Y
   */
  idSpoof?: string;
  /**
   * @remarks
   * The MetaInfo environment parameter, which must be obtained through the client SDK.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "zimVer": "3.0.0",
   *   "appVersion": "1",
   *   "bioMetaInfo": "4.1.0:1150****,0",
   *   "appName": "com.aliyun.antcloudauth",
   *   "deviceType": "ios",
   *   "osVersion": "iOS 10.3.2",
   *   "apdidToken": "",
   *   "deviceModel": "iPhone9,1"
   * }
   */
  metaInfo?: string;
  /**
   * @remarks
   * The custom unique business identifier used for subsequent troubleshooting.
   * 
   * The value can contain uppercase and lowercase letters and digits, and can be up to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c******
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * The product solution to be integrated. Valid values: ID_OCR.
   * 
   * This parameter is required.
   * 
   * @example
   * ID_OCR
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the authentication scene.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000002996
   */
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      callbackToken: 'CallbackToken',
      callbackUrl: 'CallbackUrl',
      cardPageNumber: 'CardPageNumber',
      cardType: 'CardType',
      docScanMode: 'DocScanMode',
      idSpoof: 'IdSpoof',
      metaInfo: 'MetaInfo',
      outerOrderNo: 'OuterOrderNo',
      productCode: 'ProductCode',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackToken: 'string',
      callbackUrl: 'string',
      cardPageNumber: 'string',
      cardType: 'string',
      docScanMode: 'string',
      idSpoof: 'string',
      metaInfo: 'string',
      outerOrderNo: 'string',
      productCode: 'string',
      sceneId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

