// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundAppInstanceForPartnerRequest extends $dara.Model {
  /**
   * @remarks
   * Website building business ID
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Idempotent token
   * 
   * @example
   * c6f7e8b9-a0b1-4c2d-9e0f-1a2b3c4d5e6f
   */
  clientToken?: string;
  /**
   * @remarks
   * Refund reason
   * 
   * @example
   * 渠道商退款
   */
  refundReason?: string;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 123456
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      clientToken: 'ClientToken',
      refundReason: 'RefundReason',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      clientToken: 'string',
      refundReason: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

