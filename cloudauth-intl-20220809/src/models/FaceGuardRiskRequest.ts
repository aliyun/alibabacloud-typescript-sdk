// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceGuardRiskRequest extends $dara.Model {
  /**
   * @remarks
   * The customer business ID.
   * 
   * @example
   * LMALL20******001
   */
  bizId?: string;
  /**
   * @remarks
   * The device token obtained from the Face Guard SDK.
   * 
   * @example
   * Tk9SSUQuMS*****************ZDNmNWY5NzQxOW1o
   */
  deviceToken?: string;
  /**
   * @remarks
   * The merchant-defined unique business identifier, used for subsequent troubleshooting. The value can contain letters and digits with a maximum length of 32 characters. Make sure the value is unique.
   * 
   * @example
   * 0c83ce0101d34eff886b1f7d1cdef67f
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The product code. Set the value to FACE_GUARD.
   * 
   * @example
   * FACE_GUARD
   */
  productCode?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      deviceToken: 'DeviceToken',
      merchantBizId: 'MerchantBizId',
      productCode: 'ProductCode',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      deviceToken: 'string',
      merchantBizId: 'string',
      productCode: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

