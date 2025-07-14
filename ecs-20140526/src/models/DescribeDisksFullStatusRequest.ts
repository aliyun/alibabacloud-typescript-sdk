// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisksFullStatusRequestEventTime extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query occurred events.
   * 
   * Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2018-05-08T02:48:52Z
   */
  end?: string;
  /**
   * @remarks
   * The beginning of the time range to query occurred events.
   * 
   * Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2018-05-06T02:43:10Z
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

export class DescribeDisksFullStatusRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the EBS device. A key-value pair consists of a key specified by the Tag.N.Key parameter and a value specified by the `Tag.N.Value` parameter. The two parameters are associated with each other. Valid values of N: 1 to 20.
   * 
   * Up to 1,000 resources with the specified tags can be returned in the response.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the EBS device. A key-value pair consists of a key specified by the `Tag.N.Key` parameter and a value specified by the Tag.N.Value parameter. The two parameters are associated with each other. Valid values of N: 1 to 20.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksFullStatusRequest extends $dara.Model {
  eventTime?: DescribeDisksFullStatusRequestEventTime;
  /**
   * @remarks
   * The ID of EBS device N. Valid values of N: 1 to 100.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string[];
  /**
   * @remarks
   * The ID of event N. Valid values of N: 1 to 100.
   * 
   * @example
   * e-bp67acfmxazb4p****
   */
  eventId?: string[];
  /**
   * @remarks
   * The event type of the EBS device. Valid values:
   * 
   * *   Degraded: The performance of the EBS device is degraded.
   * *   SeverelyDegraded: The performance of the EBS device is severely degraded.
   * *   Stalled: The performance of the EBS device is severely affected.
   * *   ErrorDetected: The local disk is damaged.
   * 
   * @example
   * Stalled
   */
  eventType?: string;
  /**
   * @remarks
   * The health status of the EBS device. Valid values:
   * 
   * *   Impaired: The EBS device is damaged.
   * *   Warning: The performance of the EBS device is degraded.
   * *   Initializing: The EBS device is being initialized.
   * *   InsufficientData: The status cannot be determined due to insufficient data.
   * *   NotApplicable: The EBS device cannot be used.
   * 
   * @example
   * Warning
   */
  healthStatus?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. The value must be a positive integer.
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
   * The region ID of the EBS device. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the EBS device belongs. If you configure this parameter to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
   * 
   * @example
   * rg-aek2kkmhmhs****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The lifecycle status of the EBS device. For more information, see [Disk status](https://help.aliyun.com/document_detail/25689.html). Valid values:
   * 
   * *   In_use: The EBS device is in use.
   * *   Available: The EBS device can be attached.
   * *   Attaching: The EBS device is being attached.
   * *   Detaching: The EBS device is being detached.
   * *   Creating: The EBS device is being created.
   * *   ReIniting: The EBS device is being initialized.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tags to add to the EBS device.
   */
  tag?: DescribeDisksFullStatusRequestTag[];
  static names(): { [key: string]: string } {
    return {
      eventTime: 'EventTime',
      diskId: 'DiskId',
      eventId: 'EventId',
      eventType: 'EventType',
      healthStatus: 'HealthStatus',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTime: DescribeDisksFullStatusRequestEventTime,
      diskId: { 'type': 'array', 'itemType': 'string' },
      eventId: { 'type': 'array', 'itemType': 'string' },
      eventType: 'string',
      healthStatus: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDisksFullStatusRequestTag },
    };
  }

  validate() {
    if(this.eventTime && typeof (this.eventTime as any).validate === 'function') {
      (this.eventTime as any).validate();
    }
    if(Array.isArray(this.diskId)) {
      $dara.Model.validateArray(this.diskId);
    }
    if(Array.isArray(this.eventId)) {
      $dara.Model.validateArray(this.eventId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

