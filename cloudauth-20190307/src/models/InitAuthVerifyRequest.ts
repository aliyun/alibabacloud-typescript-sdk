// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitAuthVerifyRequest extends $dara.Model {
  /**
   * @example
   * NMjvQanQgplBSaEI0sL86WnQplB
   */
  callbackToken?: string;
  /**
   * @example
   * https://www.aliyun.com?callbackToken=100000****&certifyId=shaxxxx&subCode=200
   */
  callbackUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  cardPageNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * IDENTITY_CARD
   */
  cardType?: string;
  /**
   * @example
   * shoot
   */
  docScanMode?: string;
  /**
   * @example
   * Y
   */
  idSpoof?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c******
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ID_OCR
   */
  productCode?: string;
  /**
   * @remarks
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

