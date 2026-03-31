// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyResourceLogDeliveryStatusResponseBody extends $dara.Model {
  /**
   * @example
   * test1
   */
  deliveryName?: string;
  /**
   * @example
   * sls
   */
  deliveryType?: string;
  /**
   * @example
   * D7861F61-5B61-46CE-A47C-6B19******
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      deliveryName: 'DeliveryName',
      deliveryType: 'DeliveryType',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryName: 'string',
      deliveryType: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

