// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialVerifyRequestMerchantDetail } from "./CredentialVerifyRequestMerchantDetail";


export class CredentialVerifyRequest extends $dara.Model {
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
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @example
   * base64
   */
  imageContext?: string;
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
   * 1
   */
  isOCR?: string;
  merchantDetail?: CredentialVerifyRequestMerchantDetail[];
  merchantId?: string;
  productCode?: string;
  prompt?: string;
  promptModel?: string;
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

