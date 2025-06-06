// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialVerifyV2ShrinkRequest extends $dara.Model {
  /**
   * @example
   * 4601*****
   */
  certNum?: string;
  /**
   * @example
   * 0104
   */
  credName?: string;
  /**
   * @example
   * 01
   */
  credType?: string;
  /**
   * @example
   * 4****************1
   */
  identifyNum?: string;
  imageFile?: string;
  /**
   * @example
   * http://marry.momocdn.com/avatar/3B/B6/3BB6527E-7467-926E-1048-B43614F20CC420230803_L.jpg
   */
  imageUrl?: string;
  /**
   * @example
   * 0
   */
  isCheck?: string;
  /**
   * @example
   * 0
   */
  isOcr?: string;
  merchantDetailShrink?: string;
  merchantId?: string;
  /**
   * @example
   * ANTI_FAKE_CHECK
   */
  productCode?: string;
  prompt?: string;
  /**
   * @example
   * DEFAULT
   */
  promptModel?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      certNum: 'CertNum',
      credName: 'CredName',
      credType: 'CredType',
      identifyNum: 'IdentifyNum',
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

