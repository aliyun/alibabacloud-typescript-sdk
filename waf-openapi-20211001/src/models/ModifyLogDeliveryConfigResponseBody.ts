// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLogDeliveryConfigResponseBody extends $dara.Model {
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
   * D7861F61-5B61-46CE-A47C-6B19****5EB0
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

