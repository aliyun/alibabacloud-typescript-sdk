// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformInstanceChargeTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * >  A value is returned for this parameter only if the instance was changed from pay-as-you-go to subscription.
   * 
   * @example
   * 2021-05-13T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 20881824000****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 82C791FB-8979-489E-853D-706D7743****
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

