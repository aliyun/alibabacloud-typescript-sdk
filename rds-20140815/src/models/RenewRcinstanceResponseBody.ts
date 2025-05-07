// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewRCInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the RDS Custom instance.
   * 
   * @example
   * rc-dh2jf9n6j4s14926****
   */
  DBInstanceId?: string;
  orderId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 23202700556****
   */
  orderIds?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EFFC7565-B3CF-5CFA-9E1F-164DD1E1F498
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      orderId: 'OrderId',
      orderIds: 'OrderIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      orderId: 'string',
      orderIds: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

