// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialProductVerifyV2Request extends $dara.Model {
  /**
   * @remarks
   * The credential name. Only the following value is supported: 0501 (product image).
   * 
   * This parameter is required.
   * 
   * @example
   * 0501
   */
  credName?: string;
  /**
   * @remarks
   * The credential type. Only the following value is supported: 05 (product image).
   * 
   * This parameter is required.
   * 
   * @example
   * 05
   */
  credType?: string;
  /**
   * @remarks
   * The InputStream object of the image.
   * 
   * @example
   * https://aliyundoc.com/picture*****.jpeg
   */
  imageFile?: string;
  /**
   * @remarks
   * The URL of the image.
   * 
   * @example
   * https://aliyundoc.com/picture*****.jpeg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The merchant ID.
   * 
   * @example
   * 无。
   */
  merchantId?: string;
  /**
   * @remarks
   * The call mode. Only the following value is supported: ANTI_FAKE_CHECK.
   * 
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
      imageFile: 'ImageFile',
      imageUrl: 'ImageUrl',
      merchantId: 'MerchantId',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credName: 'string',
      credType: 'string',
      imageFile: 'string',
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

