// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CredentialProductVerifyV2AdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0501
   */
  credName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 05
   */
  credType?: string;
  /**
   * @example
   * https://aliyundoc.com/picture*****.jpeg
   */
  imageFileObject?: Readable;
  /**
   * @example
   * https://aliyundoc.com/picture*****.jpeg
   */
  imageUrl?: string;
  merchantId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ANTI_FAKE_CHECK
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      credName: 'CredName',
      credType: 'CredType',
      imageFileObject: 'ImageFile',
      imageUrl: 'ImageUrl',
      merchantId: 'MerchantId',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credName: 'string',
      credType: 'string',
      imageFileObject: 'Readable',
      imageUrl: 'string',
      merchantId: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

