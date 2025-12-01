// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesFullStatusRequestEventPublishTime extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which system events are published. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-12-07T00:00:00Z
   */
  end?: string;
  /**
   * @remarks
   * The beginning of the time range during which system events are published. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-11-30T00:00:00Z
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusRequestNotBefore extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which O\\&M tasks related to scheduled system events are executed. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-11-30T00:00:00Z
   */
  end?: string;
  /**
   * @remarks
   * The beginning of the time range during which O\\&M tasks related to scheduled system events are executed. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-12-07T00:00:00Z
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesFullStatusRequest extends $dara.Model {
  eventPublishTime?: DescribeInstancesFullStatusRequestEventPublishTime;
  notBefore?: DescribeInstancesFullStatusRequestNotBefore;
  /**
   * @remarks
   * The IDs of the system events. You can specify up to 100 event IDs in a single request.
   * 
   * @example
   * e-bp1hygp5b04o56l0****
   */
  eventId?: string[];
  /**
   * @remarks
   * The type of the system event. This parameter is valid only when InstanceEventType.N is not specified. Valid values:
   * 
   * *   SystemMaintenance.Reboot: The instance is restarted due to system maintenance.
   * *   SystemFailure.Reboot: The instance is restarted due to a system failure.
   * *   InstanceFailure.Reboot: The instance is restarted due to an instance failure.
   * *   InstanceExpiration.Stop: The subscription instance is stopped due to expiration.
   * *   InstanceExpiration.Delete: The subscription instance is released due to expiration.
   * *   AccountUnbalanced.Stop: The pay-as-you-go instance is stopped due to an overdue payment.
   * *   AccountUnbalanced.Delete: The pay-as-you-go instance is released due to an overdue payment.
   * 
   * @example
   * InstanceExpiration.Stop
   */
  eventType?: string;
  /**
   * @remarks
   * The health status of the instance. Valid values:
   * 
   * *   Impaired
   * *   Warning: The instance performance may be degraded due to maintenance or technical issues.
   * *   Maintaining
   * *   Initializing
   * *   InsufficientData
   * *   NotApplicable
   * 
   * All the values are case-sensitive.
   * 
   * @example
   * Maintaining
   */
  healthStatus?: string;
  /**
   * @remarks
   * The types of system events. You can specify up to 30 event types in a single request.
   * 
   * @example
   * InstanceExpiration.Stop
   */
  instanceEventType?: string[];
  /**
   * @remarks
   * The IDs of the instances. You can specify up to 100 instance IDs in a single request.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be a positive integer.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The lifecycle status of the instance. Valid values:
   * 
   * *   Starting
   * *   Running
   * *   Stopped
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      eventPublishTime: 'EventPublishTime',
      notBefore: 'NotBefore',
      eventId: 'EventId',
      eventType: 'EventType',
      healthStatus: 'HealthStatus',
      instanceEventType: 'InstanceEventType',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventPublishTime: DescribeInstancesFullStatusRequestEventPublishTime,
      notBefore: DescribeInstancesFullStatusRequestNotBefore,
      eventId: { 'type': 'array', 'itemType': 'string' },
      eventType: 'string',
      healthStatus: 'string',
      instanceEventType: { 'type': 'array', 'itemType': 'string' },
      instanceId: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  validate() {
    if(this.eventPublishTime && typeof (this.eventPublishTime as any).validate === 'function') {
      (this.eventPublishTime as any).validate();
    }
    if(this.notBefore && typeof (this.notBefore as any).validate === 'function') {
      (this.notBefore as any).validate();
    }
    if(Array.isArray(this.eventId)) {
      $dara.Model.validateArray(this.eventId);
    }
    if(Array.isArray(this.instanceEventType)) {
      $dara.Model.validateArray(this.instanceEventType);
    }
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

