// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogDeliveryConfigsResponseBodyDeliveryConfigs extends $dara.Model {
  /**
   * @remarks
   * The details of the log delivery configuration, returned as a JSON string.
   * 
   * > The structure of this parameter is the same as the **DeliveryDetail** request parameter of the [CreateLogDeliveryConfig](~~CreateLogDeliveryConfig~~) operation.
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
   * - **syslog**: Log delivery to a syslog server.
   * 
   * - **kafka**: Log delivery to a Kafka cluster.
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
   * The log delivery configurations.
   */
  deliveryConfigs?: DescribeLogDeliveryConfigsResponseBodyDeliveryConfigs[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * > If this parameter is not empty, more results are available. Use the value of **NextToken** in the next request to retrieve the next page of results. If the value is empty, all results have been returned.
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
   * The total number of log delivery configurations returned.
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

