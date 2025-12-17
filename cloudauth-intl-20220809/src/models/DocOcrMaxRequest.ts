// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocOcrMaxRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable verification with an authoritative data source to enhance document anti-spoofing capabilities.
   * 
   * - **T**: Enable
   * 
   * - **F**: Disable (default)
   * 
   * > 
   * > - **Applicable document types**: Chinese resident ID cards (CHN01001) and Chinese mainland driver\\"s licenses (CHN02001).
   * > - **Data transfer declaration**: If you enable this parameter, you agree to transfer the user\\"s name and certificate number to an authoritative data source in the Chinese mainland for consistency verification.
   * > - **Performance impact:** After you enable this feature, the response time of the API operation increases by 1 to 2 seconds. Adjust the timeout setting.
   * 
   * @example
   * T
   */
  authorize?: string;
  /**
   * @remarks
   * Page expected to be recognized
   * 
   * - 01 (default): ID portrait.
   * 
   * - 02: Back of the certificate
   * 
   * @example
   * 01
   */
  docPage?: string;
  /**
   * @remarks
   * Document type.
   * Format: Country (region) code + document type abbreviation + page (optional)
   * Note: If provided, it will automatically check if it matches the model recognition result; if empty, the document type will be returned after model recognition.
   * 
   * @example
   * CNSSC01
   */
  docType?: string;
  /**
   * @remarks
   * Document image, base64 encoded binary stream
   * 
   * @example
   * base64
   */
  idOcrPictureBase64?: string;
  /**
   * @remarks
   * Document image URL
   * 
   * @example
   * https://***********.oss-cn-hangzhou.aliyuncs.com/1669520556530-expo/default/face/20221127114236530_w3kx2e6t.jpg
   */
  idOcrPictureUrl?: string;
  /**
   * @remarks
   * Whether to turn on the certificate anti-counterfeiting function:
   * 
   * - T: open
   * 
   * - F (default): not turned on.
   * 
   * @example
   * F
   */
  idSpoof?: string;
  /**
   * @remarks
   * Custom OCR quality detection threshold mode:
   * 
   * - 0: System default
   * - 1: Strict mode
   * - 2: Lenient mode
   * - 3 (default): Disable quality detection
   * 
   * @example
   * 0
   */
  idThreshold?: string;
  /**
   * @remarks
   * A unique business identifier defined by the merchant, used for subsequent problem localization and troubleshooting. It supports a combination of letters and numbers, with a maximum length of 32 characters. Please ensure its uniqueness.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c******
   */
  merchantBizId?: string;
  /**
   * @remarks
   * Your custom user ID or other identifiers that can uniquely identify a specific user, such as a phone number or email address. It is strongly recommended to pre-desensitize the value of this field, for example, by hashing it.
   * 
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @remarks
   * OCR recognition mode.
   * 0: General document mode.
   * 1: Custom mode.
   * 
   * @example
   * 0
   */
  ocrModel?: string;
  /**
   * @remarks
   * Specifies whether to return additional OCR fields in a standardized format:
   * 
   * - **0**: No (default)
   * 
   * - **1**: Yes
   * 
   * @example
   * 0
   */
  ocrValueStandard?: string;
  /**
   * @remarks
   * The product solution to be integrated.
   * 
   * Value: ID_OCR_MAX
   * 
   * @example
   * ID_OCR_MAX
   */
  productCode?: string;
  /**
   * @remarks
   * Prompt (for custom mode)
   * 
   * @example
   * xxxocr识别
   */
  prompt?: string;
  /**
   * @remarks
   * Custom scene code, used to distinguish business scenarios, a 10-digit number.
   * 
   * @example
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @remarks
   * Whether to enable document anti-counterfeiting function, default is not enabled.
   * 
   * - T: Enable document anti-counterfeiting function.
   * - F: Do not enable.
   * 
   * @example
   * F
   */
  spoof?: string;
  static names(): { [key: string]: string } {
    return {
      authorize: 'Authorize',
      docPage: 'DocPage',
      docType: 'DocType',
      idOcrPictureBase64: 'IdOcrPictureBase64',
      idOcrPictureUrl: 'IdOcrPictureUrl',
      idSpoof: 'IdSpoof',
      idThreshold: 'IdThreshold',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      ocrModel: 'OcrModel',
      ocrValueStandard: 'OcrValueStandard',
      productCode: 'ProductCode',
      prompt: 'Prompt',
      sceneCode: 'SceneCode',
      spoof: 'Spoof',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorize: 'string',
      docPage: 'string',
      docType: 'string',
      idOcrPictureBase64: 'string',
      idOcrPictureUrl: 'string',
      idSpoof: 'string',
      idThreshold: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      ocrModel: 'string',
      ocrValueStandard: 'string',
      productCode: 'string',
      prompt: 'string',
      sceneCode: 'string',
      spoof: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

