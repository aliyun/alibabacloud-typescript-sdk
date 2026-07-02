// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformToPrePaidResponseBody extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the instance\\"s new subscription.
   * 
   * @example
   * 2019-01-18T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 111111111111111
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 426F1356-B6EF-4DAD-A1C3-DE53B9DAF586
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

