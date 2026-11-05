// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsResponseBodyEventList extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group associated with the event. This parameter may be empty if the event is not associated with a delivery group.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the delivery group associated with the event. This parameter may be empty if the event is not associated with a delivery group.
   * 
   * @example
   * R&D workstation group
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The event detail text. The content varies with `EventType` and may be empty. For example, a session release event can return JSON text to describe the release reason.
   * 
   * @example
   * {"Reason":"ByUser"}
   */
  detailInfo?: string;
  /**
   * @remarks
   * The unique identifier of the event.
   * 
   * @example
   * evt-9ciijz60n4xsv****
   */
  eventId?: string;
  /**
   * @remarks
   * The event type identifier. Different products may return different values. You can use this value for subsequent accurate filtering.
   * 
   * @example
   * SessionDisconnected
   */
  eventType?: string;
  /**
   * @remarks
   * The private IP address of the member ENI of the cloud resource associated with the event. This parameter may be empty if it is not applicable.
   * 
   * @example
   * 192.168.1.10
   */
  memberEniIp?: string;
  /**
   * @remarks
   * The time when the event occurred. Format: `yyyy-MM-dd HH:mm:ss`. Time zone: UTC+8 (Asia/Shanghai).
   * 
   * @example
   * 2026-09-29 14:17:33
   */
  occurredTime?: string;
  /**
   * @remarks
   * The ID of the office network associated with the event. This parameter may be empty if it is not applicable.
   * 
   * @example
   * cn-shanghai+dir-123456****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The product type to which the event belongs. This field is an open string and may be extended as supported event sources increase. Callers should not limit the value to the products currently listed in the `ProductType` request parameter.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the end user who generated the event. This parameter may be empty if the event is not associated with an end user.
   * 
   * @example
   * user01
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      detailInfo: 'DetailInfo',
      eventId: 'EventId',
      eventType: 'EventType',
      memberEniIp: 'MemberEniIp',
      occurredTime: 'OccurredTime',
      officeSiteId: 'OfficeSiteId',
      productType: 'ProductType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      detailInfo: 'string',
      eventId: 'string',
      eventType: 'string',
      memberEniIp: 'string',
      occurredTime: 'string',
      officeSiteId: 'string',
      productType: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of events on the current page, returned in descending order of the event log time.
   */
  eventList?: DescribeEventsResponseBodyEventList[];
  /**
   * @remarks
   * The compatibility field. The current version does not set this field. Do not rely on its value.
   * 
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @remarks
   * The compatibility field. The current version does not generate a next page token. Do not use this field for pagination.
   * 
   * @example
   * unused
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number corresponding to the current response.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of events per page used in the current response.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the request, which can be used to troubleshoot the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of events that meet all filter conditions within the retrievable window of the last 30 days. Unit: events.
   * 
   * @example
   * 36
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': DescribeEventsResponseBodyEventList },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventList)) {
      $dara.Model.validateArray(this.eventList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

