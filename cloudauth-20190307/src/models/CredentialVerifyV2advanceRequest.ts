// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';
import { CredentialVerifyV2AdvanceRequestMerchantDetail } from "./CredentialVerifyV2advanceRequestMerchantDetail";


export class CredentialVerifyV2AdvanceRequest extends $dara.Model {
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
  imageFileObject?: Readable;
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
  merchantDetail?: CredentialVerifyV2AdvanceRequestMerchantDetail[];
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

