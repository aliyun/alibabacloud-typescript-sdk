// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialVerifyRequestMerchantDetail extends $dara.Model {
  /**
   * @remarks
   * The replacement keyword key.
   * 
   * @example
   * keyword
   */
  key?: string;
  /**
   * @remarks
   * The replacement keyword value.
   * 
   * @example
   * 关键字
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

export class CredentialVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate number.
   * 
   * @example
   * 4601*****
   */
  certNum?: string;
  /**
   * @remarks
   * The credential name. Valid values:
   * 
   * - 01: personal card and certificate
   *   - 0101: ID card
   *   - 0102: bank card
   *   - 0104: teacher qualification certificate
   *   - 0107: student ID card
   * - 02: business scenario
   *   - 0201: storefront photo
   *   - 0202: counter photo
   *   - 0203: scene photo
   * - 03: enterprise qualification
   *   - 0301: business license.
   * 
   * @example
   * 0104
   */
  credName?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * 
   * - 01: personal card and certificate
   * - 02: business scenario
   * - 03: enterprise qualification.
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
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @remarks
   * The Base64-encoded image. Specify either imageUrl or imageContext.
   * 
   * @example
   * base64
   */
  imageContext?: string;
  /**
   * @remarks
   * The image URL. Specify either imageUrl or imageContext.
   * 
   * @example
   * http://marry.momocdn.com/avatar/3B/B6/3BB6527E-7467-926E-1048-B43614F20CC420230803_L.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies whether to enable authoritative verification. Valid values:
   * 
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * @example
   * 0
   */
  isCheck?: string;
  /**
   * @remarks
   * Specifies whether to enable optical character recognition (OCR). Valid values:
   * 
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * You can set **isOCR** to **1** only when **CredType** is set to **01**.
   * 
   * @example
   * 1
   */
  isOCR?: string;
  /**
   * @remarks
   * This parameter is required when PromptModel is set to DEFAULT.
   */
  merchantDetail?: CredentialVerifyRequestMerchantDetail[];
  /**
   * @remarks
   * The merchant ID. This parameter is required when **CredName** is set to **02**.
   * 
   * @example
   * 无。
   */
  merchantId?: string;
  /**
   * @remarks
   * The call mode. Valid values:
   * 
   * * ANTI_FAKE_CHECK: image anti-forgery detection.
   * 
   * * ANTI_FAKE_VL: image anti-forgery detection and semantic understanding.
   * 
   * * IMAGE_VL_COG: image semantic understanding.
   * 
   * Default value: ANTI_FAKE_CHECK.
   * 
   * ProductCode can be set to ANTI_FAKE_VL or IMAGE_VL_COG only when CredType is set to 02.
   * 
   * @example
   * ANTI_FAKE_CHECK
   */
  productCode?: string;
  /**
   * @remarks
   * The custom prompt content for image semantic understanding.
   * 
   * This parameter is required when PromptModel is set to CUSTOM.
   * 
   * @example
   * 无
   */
  prompt?: string;
  /**
   * @remarks
   * The method to obtain the prompt for image semantic understanding. Valid values:
   * 
   * * DEFAULT: system default.
   * 
   * * CUSTOM: custom.
   * 
   * Note: This parameter is required when ProductCode is set to ANTI_FAKE_VL or IMAGE_VL_COG.
   * 
   * @example
   * DEFAULT
   */
  promptModel?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * 张*
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      certNum: 'CertNum',
      credName: 'CredName',
      credType: 'CredType',
      identifyNum: 'IdentifyNum',
      imageContext: 'ImageContext',
      imageUrl: 'ImageUrl',
      isCheck: 'IsCheck',
      isOCR: 'IsOCR',
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
      imageUrl: 'string',
      isCheck: 'string',
      isOCR: 'string',
      merchantDetail: { 'type': 'array', 'itemType': CredentialVerifyRequestMerchantDetail },
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

