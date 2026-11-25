// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID. This parameter is used to filter events of a specific delivery group. If you do not specify this parameter, events are not filtered by delivery group. You can call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain the ID.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The delivery group name. If the name contains only letters, digits, underscores, or hyphens, events are filtered by name prefix. If the name contains spaces or other special characters, events are filtered by the exact value. If you do not specify this parameter, events are not filtered by name.
   * 
   * @example
   * R&D workstation group
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The application instance ID. This parameter is used to filter events associated with a specific instance. If you do not specify this parameter, events are not filtered by application instance. To obtain this value, first call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain the delivery group ID, and then use the ID as `AppInstanceGroupId` to call the [ListAppInstances](~~ListAppInstances~~) operation.
   * 
   * @example
   * ai-azn3kmwruh1vl****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The business region ID of the event. This parameter is used to filter events precisely. If you do not specify this parameter, events are not filtered by business region. You can call the [ListRegions](~~ListRegions~~) operation to obtain the ID.
   * 
   * @example
   * cn-shanghai
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The end time of the query. **Required**. The format is the same as that of `StartTime`. We recommend that you always include the time zone offset. The query includes this exact time, and the end time cannot be earlier than the `StartTime`. A time range later than the call time does not generate future events.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-29T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The list of user IDs.
   * 
   * @example
   * ["user-1","user-2"]
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The event ID. This parameter is used to query a specific event. If you do not specify this parameter, events are not filtered by event ID.
   * 
   * @example
   * evt-9ciijz60n4xsv****
   */
  eventId?: string;
  /**
   * @remarks
   * The event type identifier. This parameter is used to filter events precisely. Different products may generate different event types, and this operation does not restrict the value to a fixed enumeration. You should use the `EventList.EventType` values obtained from previous queries as the filter value.
   * 
   * @example
   * SessionDisconnected
   */
  eventType?: string;
  /**
   * @remarks
   * A compatibility field. The current version does not read this parameter. Use `PageSize` to control the number of records on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The private IP address of the member elastic network interface (ENI) of the cloud resource. This parameter is used to filter related events precisely. If you do not specify this parameter, events are not filtered by IP address.
   * 
   * @example
   * 192.168.1.10
   */
  memberEniIp?: string;
  /**
   * @remarks
   * A compatibility field. The current version does not read this parameter and does not support token-based pagination. Use `PageNumber`.
   * 
   * @example
   * unused
   */
  nextToken?: string;
  /**
   * @remarks
   * The office network ID. This parameter is used to filter events generated within a specific office network. If you do not specify this parameter, events are not filtered by office network.
   * 
   * @example
   * cn-shanghai+dir-123456****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The page number to query. Pages start from `1`. Default value: 1. This parameter is used together with `PageSize`.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of events to return on each page. Default value: 10. The current operation does not declare a fixed upper limit. We recommend that you set this parameter to a reasonable positive integer based on your actual needs.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. The value is case-insensitive. The request fails if an unsupported value is specified. If this parameter is not specified, results are not filtered by product type. Only the following public product values are supported:
   * 
   * - `CloudApp`: WUYING Cloud App.
   * - `CloudBrowser`: Cloud Browser.
   * - `WuyingServer`: Enterprise Edition workstation.
   * - `WuyingWorkstation`: Personal Edition Linggou container workstation.
   * - `WuyingWorkstationTeam`: Team Edition Linggou container workstation.
   * - `WuyingWorkstationBusiness`: Dedicated Edition Linggou container workstation.
   * - `AndroidCloud`: Cloud Phone.
   * - `AIAgent`: AgentBay (AI agent).
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The start time of the query. **Required**. Specify the time in the ISO 8601 standard: `yyyy-MM-dd\"T\"HH:mm:ss`. You can include three digits for milliseconds and use `Z` or `±HH:mm` to specify the time zone. We recommend that you always include the time zone offset. The query includes this exact time, and the start time must be earlier than or equal to the `EndTime`. The service retains and retrieves only events that occurred within 30 days before the call time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-28T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The end user ID. This parameter is used to filter events generated by a specific user. If you do not specify this parameter, events are not filtered by user.
   * 
   * @example
   * user01
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      appInstanceId: 'AppInstanceId',
      bizRegionId: 'BizRegionId',
      endTime: 'EndTime',
      endUserIds: 'EndUserIds',
      eventId: 'EventId',
      eventType: 'EventType',
      maxResults: 'MaxResults',
      memberEniIp: 'MemberEniIp',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      startTime: 'StartTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      appInstanceId: 'string',
      bizRegionId: 'string',
      endTime: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      eventId: 'string',
      eventType: 'string',
      maxResults: 'number',
      memberEniIp: 'string',
      nextToken: 'string',
      officeSiteId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
      startTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

