// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisksFullStatusRequestEventTime extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which to query events.
   * 
   * Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2018-05-08T02:48:52Z
   */
  end?: string;
  /**
   * @remarks
   * The start of the time range during which to query events.
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
   * The tag key attached to the block storage resource. N specifies that you can set one or more tag keys. The value of N in this parameter corresponds to the value of N in the `Tag.N.Value` parameter to form a key-value pair. Valid values of N: 1 to 20.
   * 
   * If you use a single tag to filter resources, the number of resources with the tag cannot exceed 1,000. If you use multiple tags to filter resources, the number of resources that are attached to all specified tags cannot exceed 1,000.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value attached to the block storage resource. N specifies that you can set one or more tag values. The value of N in this parameter corresponds to the value of N in the `Tag.N.Key` parameter to form a key-value pair. Valid values of N: 1 to 20.
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
   * The block storage ID. Valid values of N: 1 to 100.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string[];
  /**
   * @remarks
   * The event ID. Valid values of N: 1 to 100.
   * 
   * @example
   * e-bp67acfmxazb4p****
   */
  eventId?: string[];
  /**
   * @remarks
   * The event type of the block storage device. Valid values: 
   * 
   * - Degraded: The block storage performance is degraded.
   * - SeverelyDegraded: The block storage performance is severely degraded.
   * - Stalled: The block storage performance is severely impacted.
   * - ErrorDetected: A local disk is damaged.
   * 
   * @example
   * Stalled
   */
  eventType?: string;
  /**
   * @remarks
   * The health status of the block storage device. Valid values: 
   * 
   * - Impaired: temporarily unreadable and unwritable.
   * - Warning: degraded service.
   * - Initializing: being initialized.
   * - InsufficientData: insufficient data.
   * - NotApplicable: not applicable.
   * 
   * @example
   * Warning
   */
  healthStatus?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the query result. Valid values: positive integers.
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
   * The region ID of the block storage device. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the block storage resource belongs. When you use this parameter to filter resources, the resource count cannot exceed 1,000.
   * 
   * @example
   * rg-aek2kkmhmhs****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The lifecycle status of the block storage device. For more information, see [Disk status table](https://help.aliyun.com/document_detail/25689.html). Valid values: 
   * 
   * - In_use: in use.
   * - Available: to be attached.
   * - Attaching: being attached.
   * - Detaching: being detached.
   * - Creating: being created.
   * - ReIniting: being initialized.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tags.
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

