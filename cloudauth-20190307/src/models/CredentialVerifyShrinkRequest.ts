// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialVerifyShrinkRequest extends $dara.Model {
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
   * - 01: Personal cards and certificates
   *   - 0101: ID card
   *   - 0102: Bank card
   *   - 0104: Teacher qualification certificate
   *   - 0107: Student ID card
   * - 02: Business scenarios
   *   - 0201: Storefront photo
   *   - 0202: Counter photo
   *   - 0203: Scene photo
   * - 03: Enterprise qualifications
   *   - 0301: Business license
   * 
   * @example
   * 0104
   */
  credName?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * 
   * - 01: Personal cards and certificates.
   * - 02: Business scenarios.
   * - 03: Enterprise qualifications.
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
   * The Base64-encoded image content. You must specify either imageUrl or imageContext.
   * 
   * @example
   * base64
   */
  imageContext?: string;
  /**
   * @remarks
   * The image URL. You must specify either imageUrl or imageContext.
   * 
   * @example
   * http://marry.momocdn.com/avatar/3B/B6/3BB6527E-7467-926E-1048-B43614F20CC420230803_L.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies whether to enable authoritative verification. Valid values:
   * 
   * - ****0****: No.
   * - **1**: Yes.
   * 
   * @example
   * 0
   */
  isCheck?: string;
  /**
   * @remarks
   * Specifies whether to enable optical character recognition (OCR). Valid values:
   * 
   * - **0**: No.
   * - **1**: Yes.
   * 
   * You can set this parameter to **1** only when **CredType** is set to **01**.
   * 
   * @example
   * 1
   */
  isOCR?: string;
  /**
   * @remarks
   * The merchant details. This parameter is required when PromptModel is set to DEFAULT.
   */
  merchantDetailShrink?: string;
  /**
   * @remarks
   * The merchant ID. This parameter is required when ****CredName**** is set to **02**.
   * 
   * @example
   * None
   */
  merchantId?: string;
  /**
   * @remarks
   * The call mode. Valid values:
   * 
   * * ANTI_FAKE_CHECK: Image anti-counterfeiting detection.
   * 
   * * ANTI_FAKE_VL: Image anti-counterfeiting detection and semantic understanding.
   * 
   * * IMAGE_VL_COG: Image semantic understanding.
   * 
   * Default value: ANTI_FAKE_CHECK.
   * 
   * You can set this parameter to ANTI_FAKE_VL or IMAGE_VL_COG only when CredType is set to 02.
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
   * None
   */
  prompt?: string;
  /**
   * @remarks
   * The method to obtain the prompt for image semantic understanding. Valid values:
   * 
   * * DEFAULT: System default.
   * 
   * * CUSTOM: Custom.
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
   * Zhang*
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
      merchantDetailShrink: 'MerchantDetail',
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
      merchantDetailShrink: 'string',
      merchantId: 'string',
      productCode: 'string',
      prompt: 'string',
      promptModel: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

