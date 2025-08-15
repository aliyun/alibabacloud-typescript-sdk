// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessKeyLastUsedIpsResponseBodyIps extends $dara.Model {
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
   * The IP address.
   * 
   * @example
   * ``10.10.**.**``
   */
  ip?: string;
  /**
   * @remarks
   * The event source.
   * 
   * Valid values:
   * 
   * *   Internal: other events.
   * *   ManagementEvent: management events.
   * *   DataEvent: data events.
   * 
   * @example
   * ManagementEvent
   */
  source?: string;
  /**
   * @remarks
   * The timestamp when the IP address was used. Unit: milliseconds.
   * 
   * @example
   * 1657247532000
   */
  usedTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      ip: 'Ip',
      source: 'Source',
      usedTimestamp: 'UsedTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      ip: 'string',
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

export class GetAccessKeyLastUsedIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP addresses.
   * 
   * This parameter is required.
   */
  ips?: GetAccessKeyLastUsedIpsResponseBodyIps[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
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
  static names(): { [key: string]: string } {
    return {
      ips: 'Ips',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ips: { 'type': 'array', 'itemType': GetAccessKeyLastUsedIpsResponseBodyIps },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

