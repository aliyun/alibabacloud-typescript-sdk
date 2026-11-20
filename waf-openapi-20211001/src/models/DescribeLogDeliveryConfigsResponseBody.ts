// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogDeliveryConfigsResponseBodyDeliveryConfigs extends $dara.Model {
  /**
   * @remarks
   * The content of the delivery configuration. The content is a JSON string constructed from a series of parameters.
   * 
   * > This parameter is the same as the **DeliveryDetail** request parameter of the [CreateLogDeliveryConfig](~~CreateLogDeliveryConfig~~) operation. For more information, see the **Delivery configuration content parameters** section of the [CreateLogDeliveryConfig](~~CreateLogDeliveryConfig~~) operation.
   * 
   * @example
   * {
   *   "rfcVersion": "rfc3164",
   *   "protocol": "tcp",
   *   "servers": [
   *     {
   *       "address": "1.1.1.1",
   *       "port": 20
   *     }
   *   ]
   * }
   */
  deliveryDetail?: string;
  /**
   * @remarks
   * The name of the delivery configuration.
   * 
   * @example
   * test1
   */
  deliveryName?: string;
  /**
   * @remarks
   * The type of the delivery configuration. Valid values:
   * 
   * - **syslog**: Delivers logs to a Syslog service.
   * - **kafka**: Delivers logs to a Kafka service.
   * 
   * @example
   * syslog
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
   * The delivery configuration information.
   */
  deliveryConfigs?: DescribeLogDeliveryConfigsResponseBodyDeliveryConfigs[];
  /**
   * @remarks
   * The number of entries to return per page during paging in a paged query. Valid values: 1 to 50. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for querying the next page. If a next page exists, this field returns a value.
   * 
   * > If this parameter returns a value, it indicates that more pages exist. You can use the returned **NextToken** value as a request parameter to obtain the data on the next page. Repeat this process until no value is returned, which indicates that all data has been retrieved.
   * 
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2EFCFE18-78F8-5079-B312-07***48B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 5
   */
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

