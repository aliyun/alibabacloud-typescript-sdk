// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialVerifyV2ShrinkRequest extends $dara.Model {
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
   * - 01: personal card or certificate
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
   * - 01: personal card or certificate
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
   * 4****************1
   */
  identifyNum?: string;
  /**
   * @remarks
   * The Base64-encoded image. Specify one of imageUrl, imageFile, or imageContext.
   * 
   * @example
   * 无
   */
  imageContext?: string;
  /**
   * @remarks
   * The input stream of the image. Specify one of imageUrl, imageFile, or imageContext.
   * 
   * @example
   * 无
   */
  imageFile?: string;
  /**
   * @remarks
   * The URL of the image. Specify one of imageUrl, imageFile, or imageContext.
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
   * >Danger: Deprecated.
   * 
   * @example
   * 0
   */
  isCheck?: string;
  /**
   * @remarks
   * Specifies whether to enable OCR.
   * >Danger: Deprecated.
   * 
   * @example
   * 0
   */
  isOcr?: string;
  /**
   * @remarks
   * This feature is offline. This parameter no longer takes effect.
   */
  merchantDetailShrink?: string;
  /**
   * @remarks
   * The merchant ID. This parameter is required when CredName is set to 02.
   * 
   * @example
   * 无。
   */
  merchantId?: string;
  /**
   * @remarks
   * The call mode. Valid values:
   * 
   * - ANTI_FAKE_CHECK (default): image anti-forgery detection.
   * 
   * @example
   * ANTI_FAKE_CHECK
   */
  productCode?: string;
  /**
   * @remarks
   * This feature is offline. This parameter no longer takes effect.
   * 
   * @example
   * -
   */
  prompt?: string;
  /**
   * @remarks
   * This feature is offline. This parameter no longer takes effect.
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
      imageFile: 'string',
      imageUrl: 'string',
      isCheck: 'string',
      isOcr: 'string',
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

