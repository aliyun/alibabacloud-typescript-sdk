// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsResponseBodyEventItemsEventItems extends $dara.Model {
  callerUid?: number;
  eventId?: number;
  eventName?: string;
  eventPayload?: string;
  eventReason?: string;
  eventRecordTime?: string;
  eventTime?: string;
  eventType?: string;
  eventUserType?: string;
  regionId?: string;
  resourceName?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      callerUid: 'CallerUid',
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
      callerUid: 'number',
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

export class DescribeEventsResponseBodyEventItems extends $dara.Model {
  eventItems?: DescribeEventsResponseBodyEventItemsEventItems[];
  static names(): { [key: string]: string } {
    return {
      eventItems: 'EventItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventItems: { 'type': 'array', 'itemType': DescribeEventsResponseBodyEventItemsEventItems },
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

export class DescribeEventsResponseBody extends $dara.Model {
  eventItems?: DescribeEventsResponseBodyEventItems;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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
      eventItems: DescribeEventsResponseBodyEventItems,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.eventItems && typeof (this.eventItems as any).validate === 'function') {
      (this.eventItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

