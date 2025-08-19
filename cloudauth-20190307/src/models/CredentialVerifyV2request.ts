// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialVerifyV2RequestMerchantDetail extends $dara.Model {
  /**
   * @remarks
   * Keyword key.
   * 
   * @example
   * MerchantName
   */
  key?: string;
  /**
   * @remarks
   * Keyword value.
   * 
   * @example
   * ***
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

export class CredentialVerifyV2Request extends $dara.Model {
  /**
   * @remarks
   * Relevant certificate number.
   * 
   * @example
   * 4601*****
   */
  certNum?: string;
  /**
   * @remarks
   * - 01: Personal ID cards
   *   - 0101: ID card
   *   - 0102: Bank card
   *   - 0104: Teacher qualification certificate
   *   - 0107: Student ID card
   * - 02: Business scenario
   *   - 0201: Storefront photo
   *   - 0202: Counter photo
   *   - 0203: Scene photo
   * - 03: Corporate qualifications
   *   - 0301: Business license
   * 
   * @example
   * 0104
   */
  credName?: string;
  /**
   * @remarks
   * Credential type:
   * 
   * - 01: Personal ID cards
   * - 02: Business scenario
   * - 03: Corporate qualifications
   * 
   * @example
   * 01
   */
  credType?: string;
  /**
   * @remarks
   * ID number.
   * 
   * @example
   * 4****************1
   */
  identifyNum?: string;
  /**
   * @remarks
   * Base64 encoded image, choose one from `imageUrl`, `imageFile`, or `imageContext`.
   * 
   * @example
   * base64
   */
  imageContext?: string;
  /**
   * @remarks
   * Image input stream, choose one from `imageUrl`, `imageFile`, or `imageContext`.
   * 
   * @example
   * none
   */
  imageFile?: string;
  /**
   * @remarks
   * Image URL, choose one from `imageUrl`, `imageFile`, or `imageContext`.
   * 
   * @example
   * http://marry.momocdn.com/avatar/3B/B6/3BB6527E-7467-926E-1048-B43614F20CC420230803_L.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Whether to enable authoritative authentication
   * 
   * - ****0****: No
   * - **1**: Yes
   * 
   * @example
   * 0
   */
  isCheck?: string;
  /**
   * @remarks
   * Whether to use OCR
   * 
   * @example
   * 0
   */
  isOcr?: string;
  /**
   * @remarks
   * Merchant details:
   * 
   * MerchantName: Merchant name
   * 
   * BusinessType: Industry information
   * 
   * BusinessContent: Business content
   * 
   * This field is required when PromptModel is set to DEFAULT.
   */
  merchantDetail?: CredentialVerifyV2RequestMerchantDetail[];
  /**
   * @remarks
   * Merchant ID. This field is required when ****CredName**** is set to **02**.
   * 
   * @example
   * none
   */
  merchantId?: string;
  /**
   * @remarks
   * Invocation mode:
   * 
   * - ANTI_FAKE_CHECK: Image anti-forgery check
   * 
   * - ANTI_FAKE_VL: Image anti-forgery check and semantic understanding
   * 
   * - IMAGE_VL_COG: Image semantic understanding
   * 
   * Default value: ANTI_FAKE_CHECK
   * 
   * When CredType is set to 02, ProductCode can only be ANTI_FAKE_VL or IMAGE_VL_COG.
   * 
   * @example
   * ANTI_FAKE_CHECK
   */
  productCode?: string;
  /**
   * @remarks
   * Customer-defined prompt content for image semantic understanding.
   * 
   * This field is required when PromptModel is set to CUSTOM.
   * 
   * @example
   * none
   */
  prompt?: string;
  /**
   * @remarks
   * Prompt acquisition method for image semantic understanding:
   * 
   * - DEFAULT: System default
   * 
   * - CUSTOM: Customer-defined
   * 
   * Note: When ProductCode is set to ANTI_FAKE_VL or IMAGE_VL_COG, this parameter must be provided.
   * 
   * @example
   * DEFAULT
   */
  promptModel?: string;
  /**
   * @remarks
   * Name.
   * 
   * @example
   * 张三
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      certNum: 'CertNum',
      credName: 'CredName',
      credType: 'CredType',
      identifyNum: 'IdentifyNum',
      imageContext: 'ImageContext',
      imageFile: 'ImageFile',
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
      imageFile: 'string',
      imageUrl: 'string',
      isCheck: 'string',
      isOcr: 'string',
      merchantDetail: { 'type': 'array', 'itemType': CredentialVerifyV2RequestMerchantDetail },
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

