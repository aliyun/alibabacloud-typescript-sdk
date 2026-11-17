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
   * The device token obtained through the Face Guard SDK.
   * 
   * @example
   * Tk9SSUQuMS*****************ZDNmNWY5NzQxOW1o
   */
  deviceToken?: string;
  /**
   * @remarks
   * The custom unique business identifier on the merchant side, used for subsequent troubleshooting. It supports a combination of letters and digits and can be up to 32 characters in length. Ensure that the value is unique.
   * 
   * @example
   * 0c83ce0101d34eff886b1f7d1cdef67f
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The product code. Valid values: FACE_GUARD and FACE_GUARD_PRO.
   * 
   * @example
   * FACE_GUARD_PRO
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the risk scenario detected by Device Assistant.
   * 
   * @example
   * Face
   */
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

