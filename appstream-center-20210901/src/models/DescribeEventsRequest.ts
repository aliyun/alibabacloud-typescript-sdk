// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The app instance group ID. This parameter is used to filter app instance group events. If this parameter is not specified, events are not filtered by app instance group. You can call the [ListAppInstanceGroup](~~ListAppInstanceGroup~~) operation to obtain the ID.
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
   * The ID of the application instance. This parameter is used to filter events associated with the instance. If this parameter is not specified, events are not filtered by application instance. To obtain this value, call [ListAppInstanceGroup](~~ListAppInstanceGroup~~) to obtain the app instance group ID, and then specify the ID as `AppInstanceGroupId` when calling [ListAppInstances](~~ListAppInstances~~).
   * 
   * @example
   * ai-azn3kmwruh1vl****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The business region ID of the event, which is used for exact filtering. If you do not specify this parameter, events are not filtered by business region. You can call the [ListRegions](~~ListRegions~~) operation to obtain the ID.
   * 
   * @example
   * cn-shanghai
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The end time of the query. **Required**. The format is the same as `StartTime`. We recommend that you always include the time zone offset. The query includes this time, and the end time cannot be earlier than `StartTime`. A time range later than the call time does not generate future events.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-29T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The optional list of user IDs. If you specify multiple user IDs, events are filtered by using the OR logic. If you specify both `EndUserIds` and `UserId`, the intersection is used. If you do not specify this parameter, the original query is retained. If you specify an empty list or a list that contains only blank user IDs, an empty result is returned. The caller must convert usernames or display names to user IDs before calling this operation.
   * 
   * @example
   * ["user-1","user-2"]
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The event ID, which is used to query a single event. If you do not specify this parameter, events are not filtered by event ID.
   * 
   * @example
   * evt-9ciijz60n4xsv****
   */
  eventId?: string;
  /**
   * @remarks
   * The event type identifier, which is used to filter events. Different products may generate different event types. This operation does not restrict the values to a fixed enumeration. You should use the `EventList.EventType` values obtained from previous queries as filter values.
   * 
   * @example
   * SessionDisconnected
   */
  eventType?: string;
  /**
   * @remarks
   * The compatibility field. The current version does not read this parameter. Use `PageSize` to control the number of records on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The private IP address of the member elastic network interface (ENI) of the cloud resource, which is used to filter related events. If you do not specify this parameter, events are not filtered by IP address.
   * 
   * @example
   * 192.168.1.10
   */
  memberEniIp?: string;
  /**
   * @remarks
   * The compatibility field. The current version does not read this parameter and does not support token-based pagination. Use `PageNumber`.
   * 
   * @example
   * unused
   */
  nextToken?: string;
  /**
   * @remarks
   * The office network ID, which is used to filter events generated within the office network. If you do not specify this parameter, events are not filtered by office network.
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
   * The product type. Values are not case-sensitive. If you specify an unsupported value, the request fails. If you do not specify this parameter, events are not filtered by product type. Valid values:
   * 
   * - `CloudApp`: Wuying Cloud App.
   * - `CloudBrowser`: Cloud Browser.
   * - `WuyingServer`: Enterprise Edition workstation.
   * - `WuyingWorkstation`: Personal Edition Linggou container workstation.
   * - `WuyingWorkstationTeam`: Linggou Team Edition container workstation.
   * - `WuyingWorkstationBusiness`: Linggou Dedicated Edition container workstation.
   * - `AndroidCloud`: Cloud Phone.
   * - `AIAgent`: AgentBay (AI agent).
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The start time of the query. **Required**. Specify the time in the ISO 8601 format: `yyyy-MM-dd\\"T\\"HH:mm:ss`. You can include three-digit milliseconds and use `Z` or `±HH:mm` to specify the time zone. We recommend that you always include the time zone offset. The query includes this time, and the start time must be earlier than or equal to `EndTime`. The service only retains and retrieves events that occurred within 30 days before the call time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-28T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The end user ID, which is used to filter events generated by the user. If you do not specify this parameter, events are not filtered by user.
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

