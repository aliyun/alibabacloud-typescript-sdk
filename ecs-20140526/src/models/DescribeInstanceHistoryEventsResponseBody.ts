// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeEventCycleStatus extends $dara.Model {
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

export class DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeEventType extends $dara.Model {
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

export class DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisksInactiveDisk extends $dara.Model {
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
  canAccept?: string;
  code?: string;
  device?: string;
  diskId?: string;
  hostId?: string;
  hostType?: string;
  inactiveDisks?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeInactiveDisks;
  metricName?: string;
  metricValue?: string;
  migrationOptions?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttributeMigrationOptions;
  onlineRepairPolicy?: string;
  punishDomain?: string;
  punishType?: string;
  punishUrl?: string;
  rack?: string;
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
      metricName: 'MetricName',
      metricValue: 'MetricValue',
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
      metricName: 'string',
      metricValue: 'string',
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
  eventCycleStatus?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeEventCycleStatus;
  eventFinishTime?: string;
  eventId?: string;
  eventPublishTime?: string;
  eventType?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeEventType;
  extendedAttribute?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSetInstanceSystemEventTypeExtendedAttribute;
  impactLevel?: string;
  instanceId?: string;
  notBefore?: string;
  reason?: string;
  reasonCode?: string;
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
  instanceSystemEventSet?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSet;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * >  If the NextToken parameter is not returned when you use the MaxResults and NextToken parameters to perform a paged query, no more data is returned.
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

