// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceGuardRiskRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the current business authentication. It is used with FACE_GUARD for verification during queries.
   * 
   * @example
   * LMALL20******001
   */
  bizId?: string;
  /**
   * @remarks
   * The deviceToken obtained from the client SDK.
   * 
   * @example
   * Tk9SSUQuMS*****************ZDNmNWY5NzQxOW1o
   */
  deviceToken?: string;
  /**
   * @remarks
   * A custom unique business identifier. It is used to locate and troubleshoot issues. The identifier can be a combination of letters and digits up to 32 characters long. Ensure that it is unique.
   * 
   * @example
   * 0c83ce0101d34eff886b1f7d1cdef67f
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The product code. Set this to the static field **FACE_GUARD**.
   * 
   * @example
   * FACE_GUARD
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      deviceToken: 'DeviceToken',
      merchantBizId: 'MerchantBizId',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      deviceToken: 'string',
      merchantBizId: 'string',
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

