// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessKeyLastUsedProductsResponseBodyProducts extends $dara.Model {
  /**
   * @remarks
   * The event details.
   * 
   * @example
   * {
   *   "eventId": "239EB588-CD24-522E-B0B5-174A1A58****",
   *   "eventVersion": 1,
   *   "eventSource": "ecs.cn-hangzhou.aliyuncs.com",
   *   "sourceIpAddress": "``10.10.**.**``",
   *   "eventType": "ApiCall",
   *   "userIdentity": {
   *     "accountId": "104758519118****",
   *     "principalId": "24549429003625****",
   *     "type": "ram-user",
   *     "userName": "alice"
   *   },
   *   "serviceName": "Ecs",
   *   "apiVersion": "2016-01-20",
   *   "requestId": "239EB588-CD24-522E-B0B5-174A1A588BE0",
   *   "eventTime": "2021-08-05T09:21:32Z",
   *   "isGlobal": false,
   *   "acsRegion": "cn-hangzhou",
   *   "eventName": "DescribeInstances"
   * }
   */
  detail?: string;
  /**
   * @remarks
   * The Alibaba Cloud service.
   * 
   * @example
   * Ecs
   */
  serviceName?: string;
  /**
   * @remarks
   * The Chinese name of the Alibaba Cloud service.
   * 
   * @example
   * Elastic Compute Service (ECS)
   */
  serviceNameCn?: string;
  /**
   * @remarks
   * The English name of the Alibaba Cloud service.
   * 
   * @example
   * Elastic Compute Service
   */
  serviceNameEn?: string;
  /**
   * @remarks
   * The event source.
   * 
   * Valid values:
   * 
   * *   Internal
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     other events
   * 
   *     <!-- -->
   * 
   * *   ManagementEvent
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     management events
   * 
   *     <!-- -->
   * 
   * *   DataEvent
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     data events
   * 
   *     <!-- -->
   * 
   * @example
   * ManagementEvent
   */
  source?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Unit: millisecond.
   * 
   * @example
   * 1657247532000
   */
  usedTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      serviceName: 'ServiceName',
      serviceNameCn: 'ServiceNameCn',
      serviceNameEn: 'ServiceNameEn',
      source: 'Source',
      usedTimestamp: 'UsedTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      serviceName: 'string',
      serviceNameCn: 'string',
      serviceNameEn: 'string',
      source: 'string',
      usedTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyLastUsedProductsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned Alibaba Cloud services.
   * 
   * This parameter is required.
   */
  products?: GetAccessKeyLastUsedProductsResponseBodyProducts[];
  /**
   * @remarks
   * The request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 145318BE-DEE1-4C57-AA7C-5BE7D34A6AE0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      products: 'Products',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      products: { 'type': 'array', 'itemType': GetAccessKeyLastUsedProductsResponseBodyProducts },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

