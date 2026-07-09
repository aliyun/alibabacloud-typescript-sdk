// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrderDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The UID of the enterprise multi-account member managed by the current account. Leave this parameter empty if this scenario does not apply.
   * 
   * @example
   * 1715322405372273
   */
  memberUid?: number;
  /**
   * @remarks
   * The order ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 233501558440169
   */
  orderId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      memberUid: 'MemberUid',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberUid: 'number',
      orderId: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

