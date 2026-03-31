// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLogDeliveryConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the log delivery configuration.
   * 
   * @example
   * test1
   */
  deliveryName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 26E46541-7AAB-5565-801D-F14DBDC5****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryName: 'DeliveryName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryName: 'string',
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

