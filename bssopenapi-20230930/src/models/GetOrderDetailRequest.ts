// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrderDetailRequest extends $dara.Model {
  /**
   * @example
   * 1715322405372273
   */
  memberUid?: number;
  /**
   * @remarks
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

