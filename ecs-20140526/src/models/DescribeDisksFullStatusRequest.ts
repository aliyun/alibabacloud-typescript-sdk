// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDisksFullStatusRequestEventTime } from "./DescribeDisksFullStatusRequestEventTime";
import { DescribeDisksFullStatusRequestTag } from "./DescribeDisksFullStatusRequestTag";


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

