// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeHealthStatus extends $dara.Model {
  code?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventCycleStatus extends $dara.Model {
  code?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventType extends $dara.Model {
  code?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttributeInactiveDisksInactiveDisk extends $dara.Model {
  creationTime?: string;
  deviceCategory?: string;
  deviceSize?: string;
  deviceType?: string;
  releaseTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      deviceCategory: 'DeviceCategory',
      deviceSize: 'DeviceSize',
      deviceType: 'DeviceType',
      releaseTime: 'ReleaseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      deviceCategory: 'string',
      deviceSize: 'string',
      deviceType: 'string',
      releaseTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttributeInactiveDisks extends $dara.Model {
  inactiveDisk?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttributeInactiveDisksInactiveDisk[];
  static names(): { [key: string]: string } {
    return {
      inactiveDisk: 'InactiveDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inactiveDisk: { 'type': 'array', 'itemType': DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttributeInactiveDisksInactiveDisk },
    };
  }

  validate() {
    if(Array.isArray(this.inactiveDisk)) {
      $dara.Model.validateArray(this.inactiveDisk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttribute extends $dara.Model {
  device?: string;
  diskId?: string;
  inactiveDisks?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttributeInactiveDisks;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      diskId: 'DiskId',
      inactiveDisks: 'InactiveDisks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: 'string',
      diskId: 'string',
      inactiveDisks: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttributeInactiveDisks,
    };
  }

  validate() {
    if(this.inactiveDisks && typeof (this.inactiveDisks as any).validate === 'function') {
      (this.inactiveDisks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventType extends $dara.Model {
  eventCycleStatus?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventCycleStatus;
  eventId?: string;
  eventPublishTime?: string;
  eventType?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventType;
  extendedAttribute?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttribute;
  impactLevel?: string;
  notBefore?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      eventCycleStatus: 'EventCycleStatus',
      eventId: 'EventId',
      eventPublishTime: 'EventPublishTime',
      eventType: 'EventType',
      extendedAttribute: 'ExtendedAttribute',
      impactLevel: 'ImpactLevel',
      notBefore: 'NotBefore',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCycleStatus: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventCycleStatus,
      eventId: 'string',
      eventPublishTime: 'string',
      eventType: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventType,
      extendedAttribute: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttribute,
      impactLevel: 'string',
      notBefore: 'string',
      reason: 'string',
    };
  }

  validate() {
    if(this.eventCycleStatus && typeof (this.eventCycleStatus as any).validate === 'function') {
      (this.eventCycleStatus as any).validate();
    }
    if(this.eventType && typeof (this.eventType as any).validate === 'function') {
      (this.eventType as any).validate();
    }
    if(this.extendedAttribute && typeof (this.extendedAttribute as any).validate === 'function') {
      (this.extendedAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSet extends $dara.Model {
  scheduledSystemEventType?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventType[];
  static names(): { [key: string]: string } {
    return {
      scheduledSystemEventType: 'ScheduledSystemEventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduledSystemEventType: { 'type': 'array', 'itemType': DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventType },
    };
  }

  validate() {
    if(Array.isArray(this.scheduledSystemEventType)) {
      $dara.Model.validateArray(this.scheduledSystemEventType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeStatus extends $dara.Model {
  code?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusType extends $dara.Model {
  healthStatus?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeHealthStatus;
  instanceId?: string;
  scheduledSystemEventSet?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSet;
  status?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeStatus;
  static names(): { [key: string]: string } {
    return {
      healthStatus: 'HealthStatus',
      instanceId: 'InstanceId',
      scheduledSystemEventSet: 'ScheduledSystemEventSet',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthStatus: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeHealthStatus,
      instanceId: 'string',
      scheduledSystemEventSet: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSet,
      status: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeStatus,
    };
  }

  validate() {
    if(this.healthStatus && typeof (this.healthStatus as any).validate === 'function') {
      (this.healthStatus as any).validate();
    }
    if(this.scheduledSystemEventSet && typeof (this.scheduledSystemEventSet as any).validate === 'function') {
      (this.scheduledSystemEventSet as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSet extends $dara.Model {
  instanceFullStatusType?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusType[];
  static names(): { [key: string]: string } {
    return {
      instanceFullStatusType: 'InstanceFullStatusType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceFullStatusType: { 'type': 'array', 'itemType': DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusType },
    };
  }

  validate() {
    if(Array.isArray(this.instanceFullStatusType)) {
      $dara.Model.validateArray(this.instanceFullStatusType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusResponseBody extends $dara.Model {
  instanceFullStatusSet?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSet;
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
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceFullStatusSet: 'InstanceFullStatusSet',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceFullStatusSet: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSet,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instanceFullStatusSet && typeof (this.instanceFullStatusSet as any).validate === 'function') {
      (this.instanceFullStatusSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

