// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsResponseBodyEventItems extends $dara.Model {
  /**
   * @example
   * 50421290
   */
  eventId?: number;
  /**
   * @example
   * ModifySecurityIps
   */
  eventName?: string;
  /**
   * @example
   * {\\"Domain\\": \\"rds-cn-hangzhou.aliyuncs.com\\"}
   */
  eventPayload?: string;
  /**
   * @example
   * FROM_USER
   */
  eventReason?: string;
  /**
   * @example
   * 2021-10-15T06:39:49Z
   */
  eventRecordTime?: string;
  /**
   * @example
   * 2021-10-15T06:35:00Z
   */
  eventTime?: string;
  /**
   * @example
   * SecurityManagement
   */
  eventType?: string;
  /**
   * @example
   * USRE
   */
  eventUserType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * px-bp1v8udesc89g156g
   */
  resourceName?: string;
  /**
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
  eventItems?: DescribeEventsResponseBodyEventItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 4748127A-6D50-432C-B635-433467074C27
   */
  requestId?: string;
  /**
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

