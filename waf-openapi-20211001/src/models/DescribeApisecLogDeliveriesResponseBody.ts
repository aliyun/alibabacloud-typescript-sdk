// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisecLogDeliveriesResponseBodyDeliveryConfigs } from "./DescribeApisecLogDeliveriesResponseBodyDeliveryConfigs";


export class DescribeApisecLogDeliveriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of API security log subscription.
   */
  deliveryConfigs?: DescribeApisecLogDeliveriesResponseBodyDeliveryConfigs[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2EFCFE18-78F8-5079-B312-07***48B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryConfigs: 'DeliveryConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryConfigs: { 'type': 'array', 'itemType': DescribeApisecLogDeliveriesResponseBodyDeliveryConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deliveryConfigs)) {
      $dara.Model.validateArray(this.deliveryConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

