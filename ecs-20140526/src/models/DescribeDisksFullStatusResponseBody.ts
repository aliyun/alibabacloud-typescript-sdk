// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventTypeEventType extends $dara.Model {
  /**
   * @remarks
   * The code of the event type.
   * 
   * @example
   * 7
   */
  code?: number;
  /**
   * @remarks
   * The name of the event type. Valid values:
   * 
   * *   Degraded: The performance of the EBS device is degraded.
   * *   SeverelyDegraded: The performance of the EBS device is severely degraded.
   * *   Stalled: The performance of the EBS device is severely affected.
   * *   ErrorDetected: The local disk is damaged.
   * 
   * @example
   * Stalled
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

export class DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventType extends $dara.Model {
  /**
   * @remarks
   * The time when the event ended.
   * 
   * @example
   * 2018-05-06T02:48:52Z
   */
  eventEndTime?: string;
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * e-bp67acfmxazb4p****
   */
  eventId?: string;
  /**
   * @remarks
   * The time when the event occurred.
   * 
   * @example
   * 2018-05-08T02:43:10Z
   */
  eventTime?: string;
  /**
   * @remarks
   * The type of the event.
   */
  eventType?: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventTypeEventType;
  /**
   * @remarks
   * The impact level of the event.
   * 
   * @example
   * 100
   */
  impactLevel?: string;
  static names(): { [key: string]: string } {
    return {
      eventEndTime: 'EventEndTime',
      eventId: 'EventId',
      eventTime: 'EventTime',
      eventType: 'EventType',
      impactLevel: 'ImpactLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventEndTime: 'string',
      eventId: 'string',
      eventTime: 'string',
      eventType: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventTypeEventType,
      impactLevel: 'string',
    };
  }

  validate() {
    if(this.eventType && typeof (this.eventType as any).validate === 'function') {
      (this.eventType as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSet extends $dara.Model {
  diskEventType?: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventType[];
  static names(): { [key: string]: string } {
    return {
      diskEventType: 'DiskEventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskEventType: { 'type': 'array', 'itemType': DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventType },
    };
  }

  validate() {
    if(Array.isArray(this.diskEventType)) {
      $dara.Model.validateArray(this.diskEventType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeHealthStatus extends $dara.Model {
  /**
   * @remarks
   * The code of the health status of the EBS device.
   * 
   * @example
   * 128
   */
  code?: number;
  /**
   * @remarks
   * The name of the health status of the EBS device.
   * 
   * @example
   * Impaired
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

export class DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeStatus extends $dara.Model {
  /**
   * @remarks
   * The code of the lifecycle status of the EBS device.
   * 
   * @example
   * 129
   */
  code?: number;
  /**
   * @remarks
   * The name of the lifecycle status of the EBS device.
   * 
   * @example
   * Available
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

export class DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusType extends $dara.Model {
  /**
   * @remarks
   * The name of the EBS device that is attached to an instance. Example: /dev/xvdb.
   * 
   * This parameter has a value only when the value of `Status` is `In_use`.
   * 
   * > This parameter will be deprecated in the future. To ensure future compatibility, we recommend that you do not use this parameter.
   * 
   * @example
   * null
   */
  device?: string;
  /**
   * @remarks
   * The events about the EBS device.
   */
  diskEventSet?: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSet;
  /**
   * @remarks
   * The EBS device ID.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The health status of the EBS device.
   */
  healthStatus?: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeHealthStatus;
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
   * The lifecycle status of the EBS device.
   */
  status?: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeStatus;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      diskEventSet: 'DiskEventSet',
      diskId: 'DiskId',
      healthStatus: 'HealthStatus',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: 'string',
      diskEventSet: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSet,
      diskId: 'string',
      healthStatus: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeHealthStatus,
      instanceId: 'string',
      status: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeStatus,
    };
  }

  validate() {
    if(this.diskEventSet && typeof (this.diskEventSet as any).validate === 'function') {
      (this.diskEventSet as any).validate();
    }
    if(this.healthStatus && typeof (this.healthStatus as any).validate === 'function') {
      (this.healthStatus as any).validate();
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

export class DescribeDisksFullStatusResponseBodyDiskFullStatusSet extends $dara.Model {
  diskFullStatusType?: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusType[];
  static names(): { [key: string]: string } {
    return {
      diskFullStatusType: 'DiskFullStatusType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskFullStatusType: { 'type': 'array', 'itemType': DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusType },
    };
  }

  validate() {
    if(Array.isArray(this.diskFullStatusType)) {
      $dara.Model.validateArray(this.diskFullStatusType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksFullStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of full status information of the EBS devices.
   */
  diskFullStatusSet?: DescribeDisksFullStatusResponseBodyDiskFullStatusSet;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of EBS devices for which full status information is returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      diskFullStatusSet: 'DiskFullStatusSet',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskFullStatusSet: DescribeDisksFullStatusResponseBodyDiskFullStatusSet,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.diskFullStatusSet && typeof (this.diskFullStatusSet as any).validate === 'function') {
      (this.diskFullStatusSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

