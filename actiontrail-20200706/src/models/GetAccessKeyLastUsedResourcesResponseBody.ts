// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessKeyLastUsedResourcesResponseBodyResources extends $dara.Model {
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
   * The resource name.
   * 
   * @example
   * i-bp1ltva99x1a****
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
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
   * The timestamp when the resource was used. Unit: millisecond.
   * 
   * @example
   * 1657247532000
   */
  usedTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      source: 'Source',
      usedTimestamp: 'UsedTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      resourceName: 'string',
      resourceType: 'string',
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

export class GetAccessKeyLastUsedResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * eyJhY2NvdW50IjoiMTQyNDM3OTU4NjM4NzE2MSIsImV2ZW50SWQiOiI3MkJDRTExRi02OTU3LTQ0NUItQjY0MC1CNEUyMkM4NUEwQzgiLCJsb2dJZCI6IjgyLTE0MjQzNzk1ODYzODcxNjEiLCJ0aW1lIjoxNjAyMzExNTQwMD****
   */
  nextToken?: string;
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
  /**
   * @remarks
   * The list of returned resources.
   * 
   * This parameter is required.
   */
  resources?: GetAccessKeyLastUsedResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': GetAccessKeyLastUsedResourcesResponseBodyResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

