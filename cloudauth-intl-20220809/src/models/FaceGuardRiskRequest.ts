// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceGuardRiskRequest extends $dara.Model {
  /**
   * @example
   * LMALL20******001
   */
  bizId?: string;
  /**
   * @example
   * Tk9SSUQuMS*****************ZDNmNWY5NzQxOW1o
   */
  deviceToken?: string;
  /**
   * @example
   * 0c83ce0101d34eff886b1f7d1cdef67f
   */
  merchantBizId?: string;
  /**
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

