// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeHealthStatus extends $dara.Model {
  /**
   * @remarks
   * The code of the health state.
   * 
   * @example
   * 64
   */
  code?: number;
  /**
   * @remarks
   * The name of the health state.
   * 
   * @example
   * Warning
   */
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
  /**
   * @remarks
   * The code of the system event state.
   * 
   * @example
   * 24
   */
  code?: number;
  /**
   * @remarks
   * The name of the system event state.
   * 
   * @example
   * Scheduled
   */
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
  /**
   * @remarks
   * The code of the system event type.
   * 
   * @example
   * 1
   */
  code?: number;
  /**
   * @remarks
   * The name of the system event type.
   * 
   * @example
   * SystemMaintenance.Reboot
   */
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
  /**
   * @remarks
   * The time when the disk was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-27T13:53:25Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The category of the disk. Valid values:
   * 
   * *   cloud: basic disk
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   cloud_essd: Enterprise SSD (ESSD)
   * *   local_ssd_pro: I/O-intensive local disk
   * *   local_hdd_pro: throughput-intensive local disk
   * *   ephemeral: retired local disk
   * *   ephemeral_ssd: retired local SSD
   * 
   * @example
   * cloud_ssd
   */
  deviceCategory?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 80
   */
  deviceSize?: string;
  /**
   * @remarks
   * The type of the disk. Valid values:
   * 
   * *   system
   * *   data
   * 
   * @example
   * system
   */
  deviceType?: string;
  /**
   * @remarks
   * The time when the disk was released. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-07-27T13:53:25Z
   */
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
  /**
   * @remarks
   * The device name of the local disk.
   * 
   * @example
   * /dev/vdb
   */
  device?: string;
  /**
   * @remarks
   * The ID of the local disk.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The inactive disks that have been released and must be cleared.
   */
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
  /**
   * @remarks
   * The state of the system event.
   */
  eventCycleStatus?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventCycleStatus;
  /**
   * @remarks
   * The system event ID.
   * 
   * @example
   * e-bp1hygp5b04o56l0****
   */
  eventId?: string;
  /**
   * @remarks
   * The time when the system event was published. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-30T06:32:31Z
   */
  eventPublishTime?: string;
  /**
   * @remarks
   * The type of the system event.
   */
  eventType?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeEventType;
  /**
   * @remarks
   * The extended attributes of system events generated for instances that have local disks attached.
   * 
   * The return values vary based on the system event type.
   * 
   * If the system event type is not one of the following types, this parameter is empty:
   * 
   * *   SystemMaintenance.StopAndRepair
   * *   SystemMaintenance.CleanInactiveDisks
   * *   SecurityPunish.Locked
   * *   SecurityPunish.WebsiteBanned
   * *   SystemUpgrade.Migrate
   * *   SystemMaintenance.RebootAndIsolateErrorDisk
   * *   SystemMaintenance.RebootAndReInitErrorDisk
   * *   SystemMaintenance.ReInitErrorDisk
   * *   SystemMaintenance.IsolateErrorDisk
   */
  extendedAttribute?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSetScheduledSystemEventTypeExtendedAttribute;
  /**
   * @remarks
   * The impact level of the system event.
   * 
   * >  If the user is not in a whitelist, this parameter is empty.
   * 
   * @example
   * 100
   */
  impactLevel?: string;
  /**
   * @remarks
   * The scheduled time at which to execute the O\\&M task related to the system event. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-07T00:00:00Z
   */
  notBefore?: string;
  /**
   * @remarks
   * The reason why the system event was scheduled.
   * 
   * >  If the exception cause is not detected, this parameter is empty.
   * 
   * @example
   * A simulated event.
   */
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
  /**
   * @remarks
   * The code of the instance lifecycle state.
   * 
   * @example
   * 1
   */
  code?: number;
  /**
   * @remarks
   * The name of the instance lifecycle state.
   * 
   * @example
   * Running
   */
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
  /**
   * @remarks
   * The health state of the instance.
   */
  healthStatus?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeHealthStatus;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The system events that are in the Scheduled or Inquiring state.
   */
  scheduledSystemEventSet?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusTypeScheduledSystemEventSet;
  /**
   * @remarks
   * The lifecycle state of the instance.
   */
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
  /**
   * @remarks
   * The queried instances.
   * 
   * >  If no instances exist, this parameter is empty.
   */
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

