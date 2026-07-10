// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitAuthVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * A security token that you generate to prevent replay attacks and data tampering.
   * If this value is set, the CallbackToken field is included in the callback to CallbackUrl.
   * 
   * @example
   * NMjvQanQgplBSaEI0sL86WnQplB
   */
  callbackToken?: string;
  /**
   * @remarks
   * The callback URL for OCR results. The callback request method is GET by default. The callback URL must start with https. After OCR is completed, a callback is sent to this URL with the certifyId and subcode fields automatically appended.
   * > Warning
   * - The URL is validated for public network access before the API is invoked. If the URL is not publicly accessible, a 400 error is returned.
   * - The callback is executed immediately after the OCR invocation is completed, but may be delayed due to network issues. Accept the request completion notification from the client side first, and then invoke the query API to obtain the result details.
   * 
   * @example
   * https://www.aliyun.com?callbackToken=100000****&certifyId=shaxxxx&subCode=200
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The number of card pages collected by the SDK. Valid values:
   * - "1": front side only
   * - "2": both front and back sides.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  cardPageNumber?: string;
  /**
   * @remarks
   * The document type. Set the value to IDENTITY_CARD.
   * 
   * This parameter is required.
   * 
   * @example
   * IDENTITY_CARD
   */
  cardType?: string;
  /**
   * @remarks
   * The OCR document scan pattern. Valid values:
   * - shoot (default): photo capture
   * - scan: scan
   * - auto: automatic switchover between photo capture and scan.
   * 
   * @example
   * shoot
   */
  docScanMode?: string;
  /**
   * @remarks
   * Specifies whether to enable the document anti-forgery detection feature. Valid values:
   * - Y: Enabled.
   * - N: Disabled. This is the default value.
   * 
   * @example
   * Y
   */
  idSpoof?: string;
  /**
   * @remarks
   * The MetaInfo environment parameter, which must be obtained from the client SDK.
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
   * A custom business unique identifier that you specify for subsequent troubleshooting.
   * 
   * The value can contain letters (both uppercase and lowercase) and digits, with a maximum length of 32 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c******
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * The product solution to use. Set the value to ID_OCR.
   * 
   * This parameter is required.
   * 
   * @example
   * ID_OCR
   */
  productCode?: string;
  /**
   * @remarks
   * The China Chinese authentication scenario ID.
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

