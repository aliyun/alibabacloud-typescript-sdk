// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessKeyLastUsedEventsResponseBodyEvents extends $dara.Model {
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
   * The event name.
   * 
   * @example
   * DescribeInstances
   */
  eventName?: string;
  /**
   * @remarks
   * The source of the last usage record.
   * 
   * @example
   * ManagementEvent
   */
  source?: string;
  /**
   * @remarks
   * The timestamp when the event was generated. Unit: milliseconds.
   * 
   * @example
   * 1657247532000
   */
  usedTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      eventName: 'EventName',
      source: 'Source',
      usedTimestamp: 'UsedTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      eventName: 'string',
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

export class GetAccessKeyLastUsedEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned events.
   * 
   * This parameter is required.
   */
  events?: GetAccessKeyLastUsedEventsResponseBodyEvents[];
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. If the value of this parameter is not empty, the next page exists. You must set the value to the NextToken value returned from the last call.
   * 
   * colspan="1" rowspan="1">
   * 
   * eyJhY2NvdW50IjoiMTQyNDM3OTU4NjM4NzE2MSIsImV2ZW50SWQiOiI3MkJDRTExRi02OTU3LTQ0NUItQjY0MC1CNEUyMkM4NUEwQzgiLCJsb2dJZCI6IjgyLTE0MjQzNzk1ODYzODcxNjEiLCJ0aW1lIjoxNjAyMzExNTQwMD\\*\\*\\*\\*
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
      events: 'Events',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': GetAccessKeyLastUsedEventsResponseBodyEvents },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

