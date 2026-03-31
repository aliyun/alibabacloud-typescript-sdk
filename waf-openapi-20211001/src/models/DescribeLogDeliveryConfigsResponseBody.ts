// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogDeliveryConfigsResponseBodyDeliveryConfigs extends $dara.Model {
  /**
   * @remarks
   * The content of the log delivery configuration. The value is a JSON string that contains multiple parameters.
   * 
   * >  This parameter is the same as the **DeliveryDetail** parameter of the **CreateLogDeliveryConfig** operation. For more information, see **Parameter description for log delivery configuration** of the [CreateLogDeliveryConfig](~~CreateLogDeliveryConfig~~) operation.
   */
  deliveryDetail?: string;
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
   * The type of the log delivery configuration. Valid values:
   * 
   * *   **syslog**: Logs are delivered to a syslog service.
   * *   **kafka**: Logs are delivered to a Kafka service.
   * 
   * @example
   * kafka
   */
  deliveryType?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryDetail: 'DeliveryDetail',
      deliveryName: 'DeliveryName',
      deliveryType: 'DeliveryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryDetail: 'string',
      deliveryName: 'string',
      deliveryType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogDeliveryConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the log delivery configuration.
   */
  deliveryConfigs?: DescribeLogDeliveryConfigsResponseBodyDeliveryConfigs[];
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2EFCFE18-78F8-5079-B312-07***48B
   */
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deliveryConfigs: 'DeliveryConfigs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryConfigs: { 'type': 'array', 'itemType': DescribeLogDeliveryConfigsResponseBodyDeliveryConfigs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
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

