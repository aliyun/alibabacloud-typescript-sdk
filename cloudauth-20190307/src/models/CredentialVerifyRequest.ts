// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialVerifyRequestMerchantDetail extends $dara.Model {
  /**
   * @remarks
   * The private key of the certificate.
   * 
   * >  If this parameter is specified, you must also specify **CertName** and **Cert**. If **CertName**, **Cert**, and **Key** are specified, you do not need to specify **CertId**.
   * 
   * @example
   * keyword
   */
  key?: string;
  /**
   * @remarks
   * Keyword value.
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

export class CredentialVerifyRequest extends $dara.Model {
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
   *   - **0101**: ID card
   *   - **0102**: Bank card
   *   - **0104**: Teacher qualification certificate
   *   - **0107**: Student ID card
   * - 02: Business scenario
   *   - **0201**: Storefront photo
   *   - **0202**: Counter photo
   *   - **0203**: Scene photo
   * - 03: Corporate qualifications
   *   - **0301**: Business license
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
   * ID number:
   * 
   * Note
   * Only supports the ID numbers of second-generation resident IDs and Hong Kong, Macao, and Taiwan residence permits.
   * 
   * - When paramType is normal: enter the plaintext ID number.
   * 
   * - When paramType is md5: first 6 digits of the ID number (plaintext) + date of birth (ciphertext) + last 4 digits of the ID number (plaintext).
   * 
   * @example
   * 429001********8211
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
   * Whether to enable OCR recognition.
   * 
   * - **0**: No
   * - **1**: Yes
   * 
   * > IsOCR can be set to 1 only when **CredType** is 01.
   * 
   * @example
   * 1
   */
  isOCR?: string;
  /**
   * @remarks
   * Merchant details:
   * 
   * 
   * > This field is required when PromptModel is set to DEFAULT.
   */
  merchantDetail?: CredentialVerifyRequestMerchantDetail[];
  /**
   * @remarks
   * Merchant ID. 
   * 
   * > This field is required when ****CredName**** is set to **02**.
   * 
   * @example
   * 913100********KW8P
   */
  merchantId?: string;
  /**
   * @remarks
   * Invocation mode:
   * 
   * - **ANTI_FAKE_CHECK**: Image anti-forgery check
   * 
   * - **ANTI_FAKE_VL**: Image anti-forgery check and semantic understanding
   * 
   * - **IMAGE_VL_COG**: Image semantic understanding
   * 
   * Default value: ANTI_FAKE_CHECK
   * 
   * > When **CredType** is set to 02, **ProductCode** can only be ANTI_FAKE_VL or IMAGE_VL_COG.
   * 
   * @example
   * ANTI_FAKE_CHECK
   */
  productCode?: string;
  /**
   * @remarks
   * Customer-defined prompt content for image semantic understanding.
   * 
   * 
   * > This field is required when PromptModel is set to CUSTOM.
   * 
   * @example
   * -
   */
  prompt?: string;
  /**
   * @remarks
   * Prompt acquisition method for image semantic understanding:
   * 
   * - **DEFAULT**: System default
   * 
   * - **CUSTOM**: Customer-defined
   * 
   * > When **ProductCode** is set to **ANTI_FAKE_VL** or **IMAGE_VL_COG**, this parameter must be provided.
   * 
   * @example
   * DEFAULT
   */
  promptModel?: string;
  /**
   * @remarks
   * UserName
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

