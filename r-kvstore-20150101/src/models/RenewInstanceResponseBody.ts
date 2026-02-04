// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end time of the order.
   * 
   * @example
   * 2019-02-19T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 111111111111111
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2222245-222A-4155-9349-E22222****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      orderId: 'string',
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

