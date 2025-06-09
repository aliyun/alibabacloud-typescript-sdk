// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitCardVerifyRequest extends $dara.Model {
  /**
   * @example
   * NMjvQanQgplBSaEI0sL86WnQplB
   */
  callbackToken?: string;
  /**
   * @example
   * https://www.aliyun.com
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"zimVer":"3.0.0","appVersion": "1","bioMetaInfo": "4.1.0:1150****,0","appName": "com.aliyun.antcloudauth","deviceType": "ios","osVersion": "iOS 10.3.2","apdidToken": "","deviceModel": "iPhone9,1"}
   */
  metaInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OCR_VERIFY
   */
  model?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * T
   */
  pictureSave?: string;
  /**
   * @remarks
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

