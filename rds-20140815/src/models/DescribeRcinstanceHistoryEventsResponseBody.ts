// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventCycleStatus extends $dara.Model {
  /**
   * @remarks
   * The state code of the system event.
   * 
   * @example
   * 0
   */
  code?: string;
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
      code: 'string',
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

export class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventType extends $dara.Model {
  /**
   * @remarks
   * The code of the system event type.
   * 
   * @example
   * 34
   */
  code?: string;
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
      code: 'string',
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

export class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks extends $dara.Model {
  /**
   * @remarks
   * The time when the disk was created. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2025-03-26T03:33:56Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The category of the cloud disk or local disk. Valid values:
   * 
   * *   **cloud_efficiency**: ultra disk
   * *   **cloud_ssd**: standard SSD
   * *   **cloud_essd**: ESSD
   * *   **cloud_auto**: Premium ESSD
   * 
   * @example
   * cloud_auto
   */
  deviceCategory?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 40
   */
  deviceSize?: string;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * *   **system**: system disk.
   * *   **data**: data disk.
   * 
   * @example
   * data
   */
  deviceType?: string;
  /**
   * @remarks
   * The time when the disk was released. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2025-03-26T03:33:56Z
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

export class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute extends $dara.Model {
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
   * rcd-****
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
   * *   **ddh**: dedicated host
   * *   **managehost**: physical machine in a smart hosting pool
   * 
   * @example
   * ddh
   */
  hostType?: string;
  /**
   * @remarks
   * The inactive disks that have been released and whose data must be cleared.
   */
  inactiveDisks?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks[];
  /**
   * @remarks
   * The migration solutions of the instance.
   */
  migrationOptions?: string[];
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
   * *   **true**: the event was handled.
   * *   **false**: the event failed to be handled.
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
      inactiveDisks: { 'type': 'array', 'itemType': DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks },
      migrationOptions: { 'type': 'array', 'itemType': 'string' },
      onlineRepairPolicy: 'string',
      punishDomain: 'string',
      punishType: 'string',
      punishUrl: 'string',
      rack: 'string',
      responseResult: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inactiveDisks)) {
      $dara.Model.validateArray(this.inactiveDisks);
    }
    if(Array.isArray(this.migrationOptions)) {
      $dara.Model.validateArray(this.migrationOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSet extends $dara.Model {
  /**
   * @remarks
   * The lifecycle state of the system event.
   */
  eventCycleStatus?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventCycleStatus;
  /**
   * @remarks
   * The time when the system event ended. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2025-04-01T06:32:31Z
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
   * The time when the system event was published. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2025-03-30T06:32:31Z
   */
  eventPublishTime?: string;
  /**
   * @remarks
   * The type of the system event.
   */
  eventType?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventType;
  /**
   * @remarks
   * The extended attribute of the system event.
   */
  extendedAttribute?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute;
  /**
   * @remarks
   * The impact level of the event.
   * 
   * @example
   * 100
   */
  impactLevel?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rc-yuf59nplc45t2tzn****
   */
  instanceId?: string;
  /**
   * @remarks
   * The start time of the scheduled execution of the system event. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2025-04-01T06:32:31Z
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
   * The resource type. The value is fixed to INSTANCE.
   * 
   * @example
   * custom
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
      eventCycleStatus: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventCycleStatus,
      eventFinishTime: 'string',
      eventId: 'string',
      eventPublishTime: 'string',
      eventType: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventType,
      extendedAttribute: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute,
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

export class DescribeRCInstanceHistoryEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the instance system event.
   */
  instanceSystemEventSet?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSet[];
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number of the returned page.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 866F5EB8-4650-4061-87F0-379F6F968BCE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instance events.
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
      instanceSystemEventSet: { 'type': 'array', 'itemType': DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSet },
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceSystemEventSet)) {
      $dara.Model.validateArray(this.instanceSystemEventSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

