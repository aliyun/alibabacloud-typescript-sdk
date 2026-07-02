// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformInstanceChargeTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the instance.
   * 
   * > This parameter is returned only when you change the billing method of an instance from pay-as-you-go to subscription.
   * 
   * @example
   * 2021-05-13T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 20881824000****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
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

