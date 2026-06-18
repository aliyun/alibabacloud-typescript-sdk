// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsResponseBodyEventItems extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 50421290
   */
  eventId?: number;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * ModifySecurityIps
   */
  eventName?: string;
  /**
   * @remarks
   * The supplementary information.
   * 
   * @example
   * {\\"Domain\\": \\"rds-cn-hangzhou.aliyuncs.com\\"}
   */
  eventPayload?: string;
  /**
   * @remarks
   * The reason.
   * 
   * @example
   * FROM_USER
   */
  eventReason?: string;
  /**
   * @remarks
   * The record time.
   * 
   * @example
   * 2021-10-15T06:39:49Z
   */
  eventRecordTime?: string;
  /**
   * @remarks
   * The event time.
   * 
   * @example
   * 2021-10-15T06:35:00Z
   */
  eventTime?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * SecurityManagement
   */
  eventType?: string;
  /**
   * @remarks
   * The event user type.
   * 
   * @example
   * USRE
   */
  eventUserType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * px-bp1v8udesc89g156g
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      eventName: 'EventName',
      eventPayload: 'EventPayload',
      eventReason: 'EventReason',
      eventRecordTime: 'EventRecordTime',
      eventTime: 'EventTime',
      eventType: 'EventType',
      eventUserType: 'EventUserType',
      regionId: 'RegionId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'number',
      eventName: 'string',
      eventPayload: 'string',
      eventReason: 'string',
      eventRecordTime: 'string',
      eventTime: 'string',
      eventType: 'string',
      eventUserType: 'string',
      regionId: 'string',
      resourceName: 'string',
      resourceType: 'string',
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
   * The event items.
   */
  eventItems?: DescribeEventsResponseBodyEventItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4748127A-6D50-432C-B635-433467074C27
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 20
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventItems: 'EventItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventItems: { 'type': 'array', 'itemType': DescribeEventsResponseBodyEventItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventItems)) {
      $dara.Model.validateArray(this.eventItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

