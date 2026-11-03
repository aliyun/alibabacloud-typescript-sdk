// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CredentialVerifyV2AdvanceRequestMerchantDetail extends $dara.Model {
  /**
   * @remarks
   * This feature has been retired and the parameter no longer takes effect.
   * 
   * @example
   * -
   */
  key?: string;
  /**
   * @remarks
   * This feature has been retired and the parameter no longer takes effect.
   * 
   * @example
   * -
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialVerifyV2AdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The relevant certificate number.
   * 
   * @example
   * 4601*****
   */
  certNum?: string;
  /**
   * @remarks
   * The credential name. Valid values:
   * 
   * - 01: personal cards and certificates
   *   - 0101: ID card
   *   - 0102: bank card
   *   - 0104: teacher qualification certificate
   *   - 0107: student ID card
   * - 02: business scenarios
   *   - 0201: storefront photo
   *   - 0202: counter photo
   *   - 0203: scenario photo
   * - 03: enterprise qualifications
   *   - 0301: business license
   * 
   * @example
   * 0104
   */
  credName?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * 
   * - 01: personal cards and certificates
   * - 02: business scenarios
   * - 03: enterprise qualifications
   * 
   * @example
   * 01
   */
  credType?: string;
  /**
   * @remarks
   * The ID card number.
   * 
   * @example
   * 4****************1
   */
  identifyNum?: string;
  /**
   * @remarks
   * The Base64-encoded image. Specify one of imageUrl, imageFile, and imageContext.
   * 
   * @example
   * None
   */
  imageContext?: string;
  /**
   * @remarks
   * The image input stream. Specify one of imageUrl, imageFile, and imageContext.
   * 
   * @example
   * None
   */
  imageFileObject?: Readable;
  /**
   * @remarks
   * The image URL. Specify one of imageUrl, imageFile, and imageContext.
   * 
   * @example
   * http://marry.momocdn.com/avatar/3B/B6/3BB6527E-7467-926E-1048-B43614F20CC420230803_L.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies whether to enable authoritative verification. Valid values:
   * 
   * - ****0****: no
   * - **1**: yes
   * >Danger: **[Deprecated]**</danger>
   * 
   * @example
   * 0
   */
  isCheck?: string;
  /**
   * @remarks
   * Specifies whether to perform OCR.
   * >Danger: **[Deprecated]**</danger>
   * 
   * @example
   * 0
   */
  isOcr?: string;
  /**
   * @remarks
   * This feature has been retired and the parameter no longer takes effect.
   */
  merchantDetail?: CredentialVerifyV2AdvanceRequestMerchantDetail[];
  /**
   * @remarks
   * The merchant ID. This field is required when ****CredName**** is set to **02**.
   * 
   * @example
   * None
   */
  merchantId?: string;
  /**
   * @remarks
   * The call mode. Valid values:
   * 
   * - ANTI_FAKE_CHECK (default): image anti-counterfeiting detection
   * 
   * @example
   * ANTI_FAKE_CHECK
   */
  productCode?: string;
  /**
   * @remarks
   * This feature has been retired and the parameter no longer takes effect.
   * 
   * @example
   * -
   */
  prompt?: string;
  /**
   * @remarks
   * This feature has been retired and the parameter no longer takes effect.
   * 
   * @example
   * -
   */
  promptModel?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Zhang San
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      certNum: 'CertNum',
      credName: 'CredName',
      credType: 'CredType',
      identifyNum: 'IdentifyNum',
      imageContext: 'ImageContext',
      imageFileObject: 'ImageFile',
      imageUrl: 'ImageUrl',
      isCheck: 'IsCheck',
      isOcr: 'IsOcr',
      merchantDetail: 'MerchantDetail',
      merchantId: 'MerchantId',
      productCode: 'ProductCode',
      prompt: 'Prompt',
      promptModel: 'PromptModel',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNum: 'string',
      credName: 'string',
      credType: 'string',
      identifyNum: 'string',
      imageContext: 'string',
      imageFileObject: 'Readable',
      imageUrl: 'string',
      isCheck: 'string',
      isOcr: 'string',
      merchantDetail: { 'type': 'array', 'itemType': CredentialVerifyV2AdvanceRequestMerchantDetail },
      merchantId: 'string',
      productCode: 'string',
      prompt: 'string',
      promptModel: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.merchantDetail)) {
      $dara.Model.validateArray(this.merchantDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

