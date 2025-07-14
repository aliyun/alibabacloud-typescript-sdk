// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeEventCycleStatus extends $dara.Model {
  /**
   * @remarks
   * The state code of the system event.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The state name of the system event.
   * 
   * @example
   * Executed
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

export class DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeEventType extends $dara.Model {
  /**
   * @remarks
   * The code of the system event type.
   * 
   * @example
   * 34
   */
  code?: number;
  /**
   * @remarks
   * The name of the system event type.
   * 
   * @example
   * InstanceExpiration.Stop
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

export class DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisksInactiveDisk extends $dara.Model {
  /**
   * @remarks
   * The time when the disk was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-11-30T06:32:31Z
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
   * cloud_efficiency
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
   * *   system: system disk
   * *   data: data disk
   * 
   * @example
   * data
   */
  deviceType?: string;
  /**
   * @remarks
   * The time when the disk was released. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-11-30T06:32:31Z
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

export class DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisks extends $dara.Model {
  inactiveDisk?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisksInactiveDisk[];
  static names(): { [key: string]: string } {
    return {
      inactiveDisk: 'InactiveDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inactiveDisk: { 'type': 'array', 'itemType': DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisksInactiveDisk },
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

export class DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeMigrationOptions extends $dara.Model {
  migrationOption?: string[];
  static names(): { [key: string]: string } {
    return {
      migrationOption: 'MigrationOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrationOption: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.migrationOption)) {
      $dara.Model.validateArray(this.migrationOption);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttribute extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the event can be handled.
   * 
   * @example
   * true
   */
  canAccept?: string;
  /**
   * @remarks
   * The code of the security violation.
   * 
   * @example
   * PR111
   */
  code?: string;
  /**
   * @remarks
   * The device name of the local disk.
   * 
   * @example
   * /dev/vda
   */
  device?: string;
  /**
   * @remarks
   * The ID of the local disk.
   * 
   * @example
   * d-diskid1
   */
  diskId?: string;
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * dh-bp1ewce1gk3iwv2****
   */
  hostId?: string;
  /**
   * @remarks
   * The type of the host. Valid values:
   * 
   * *   ddh: dedicated host
   * *   managehost: physical machine in a smart hosting pool
   * 
   * @example
   * ddh
   */
  hostType?: string;
  /**
   * @remarks
   * The inactive disks that were released and whose data must be cleared.
   */
  inactiveDisks?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisks;
  /**
   * @remarks
   * The migration solution of the instance. Valid value: MigrationPlan. Instances can be migrated only by using migration plans.
   */
  migrationOptions?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeMigrationOptions;
  /**
   * @remarks
   * The online repair policy for the damaged disk. Valid value: IsolateOnly, which indicates that damaged disks are isolated but not repaired.
   * 
   * @example
   * IsolateOnly
   */
  onlineRepairPolicy?: string;
  /**
   * @remarks
   * The illegal domain name.
   * 
   * @example
   * 1228.test.com
   */
  punishDomain?: string;
  /**
   * @remarks
   * The type of the penalty.
   * 
   * @example
   * ecs_message_alert
   */
  punishType?: string;
  /**
   * @remarks
   * The illegal URL.
   * 
   * @example
   * http://1228.test.com/1
   */
  punishUrl?: string;
  /**
   * @remarks
   * The rack number of the cloud box.
   * 
   * @example
   * A01
   */
  rack?: string;
  /**
   * @remarks
   * The response result of the event. Valid values:
   * 
   * *   true: The event was handled.
   * *   false: The event failed to be handled.
   * 
   * @example
   * true
   */
  responseResult?: string;
  static names(): { [key: string]: string } {
    return {
      canAccept: 'CanAccept',
      code: 'Code',
      device: 'Device',
      diskId: 'DiskId',
      hostId: 'HostId',
      hostType: 'HostType',
      inactiveDisks: 'InactiveDisks',
      migrationOptions: 'MigrationOptions',
      onlineRepairPolicy: 'OnlineRepairPolicy',
      punishDomain: 'PunishDomain',
      punishType: 'PunishType',
      punishUrl: 'PunishUrl',
      rack: 'Rack',
      responseResult: 'ResponseResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canAccept: 'string',
      code: 'string',
      device: 'string',
      diskId: 'string',
      hostId: 'string',
      hostType: 'string',
      inactiveDisks: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisks,
      migrationOptions: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeMigrationOptions,
      onlineRepairPolicy: 'string',
      punishDomain: 'string',
      punishType: 'string',
      punishUrl: 'string',
      rack: 'string',
      responseResult: 'string',
    };
  }

  validate() {
    if(this.inactiveDisks && typeof (this.inactiveDisks as any).validate === 'function') {
      (this.inactiveDisks as any).validate();
    }
    if(this.migrationOptions && typeof (this.migrationOptions as any).validate === 'function') {
      (this.migrationOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventType extends $dara.Model {
  /**
   * @remarks
   * The lifecycle status of the system event.
   */
  eventCycleStatus?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeEventCycleStatus;
  /**
   * @remarks
   * The time when the system event ended. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-01T06:35:31Z
   */
  eventFinishTime?: string;
  /**
   * @remarks
   * The ID of the system event.
   * 
   * @example
   * e-uf64yvznlao4jl2c****
   */
  eventId?: string;
  /**
   * @remarks
   * The time when the system event was published. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-30T06:32:31Z
   */
  eventPublishTime?: string;
  /**
   * @remarks
   * The type of the system event.
   */
  eventType?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeEventType;
  /**
   * @remarks
   * The extended attribute of the system event.
   */
  extendedAttribute?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttribute;
  /**
   * @remarks
   * The impact level of the system event.
   * 
   * @example
   * 100
   */
  impactLevel?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-uf678mass4zvr9n1****
   */
  instanceId?: string;
  /**
   * @remarks
   * The scheduled start time of the system event. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-06T00:00:00Z
   */
  notBefore?: string;
  /**
   * @remarks
   * The reason why the system event occurred.
   * 
   * @example
   * System maintenance is scheduled due to ***.
   */
  reason?: string;
  /**
   * @remarks
   * The reason code category for the system event.
   * 
   * @example
   * VPCMigrationEcs
   */
  reasonCode?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   instance: ECS instance
   * *   ddh: dedicated host
   * *   managehost: physical machine in a smart hosting pool
   * 
   * @example
   * instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      eventCycleStatus: 'EventCycleStatus',
      eventFinishTime: 'EventFinishTime',
      eventId: 'EventId',
      eventPublishTime: 'EventPublishTime',
      eventType: 'EventType',
      extendedAttribute: 'ExtendedAttribute',
      impactLevel: 'ImpactLevel',
      instanceId: 'InstanceId',
      notBefore: 'NotBefore',
      reason: 'Reason',
      reasonCode: 'ReasonCode',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCycleStatus: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeEventCycleStatus,
      eventFinishTime: 'string',
      eventId: 'string',
      eventPublishTime: 'string',
      eventType: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeEventType,
      extendedAttribute: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttribute,
      impactLevel: 'string',
      instanceId: 'string',
      notBefore: 'string',
      reason: 'string',
      reasonCode: 'string',
      resourceType: 'string',
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

export class DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSet extends $dara.Model {
  instanceSystemEventType?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventType[];
  static names(): { [key: string]: string } {
    return {
      instanceSystemEventType: 'InstanceSystemEventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSystemEventType: { 'type': 'array', 'itemType': DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventType },
    };
  }

  validate() {
    if(Array.isArray(this.instanceSystemEventType)) {
      $dara.Model.validateArray(this.instanceSystemEventType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceHistoryEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the instance system events.
   */
  instanceSystemEventSet?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSet;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * f1c9fa9de5752***
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * > 
   * 
   * *   If MaxResults and NextToken are used to query results by page, ignore this parameter.
   * 
   * *   This parameter will be removed in the future. We recommend that you use the NextToken and MaxResults parameters for a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * > 
   * 
   * *   If MaxResults and NextToken are used to query results by page, ignore this parameter.
   * 
   * *   This parameter will be removed in the future. We recommend that you use the NextToken and MaxResults parameters for a paged query.
   * 
   * @example
   * 10
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
   * The total number of instances.
   * 
   * >  If you specify the MaxResults and NextToken request parameters to perform a paged query, the value of the TotalCount response parameter is invalid.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceSystemEventSet: 'InstanceSystemEventSet',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSystemEventSet: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSet,
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instanceSystemEventSet && typeof (this.instanceSystemEventSet as any).validate === 'function') {
      (this.instanceSystemEventSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

