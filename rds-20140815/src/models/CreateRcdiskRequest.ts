// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRCDiskRequestTag } from "./CreateRcdiskRequestTag";


export class CreateRCDiskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true** (default): enables automatic payment. Make sure that your account balance is sufficient.
   * *   **false**: does not automatically complete the payment. An unpaid order is generated.
   * 
   * >  If your account balance is insufficient, you can set the parameter to false. In this case, an unpaid order is generated. You can complete the payment in the Expenses and Costs console.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. You must specify this parameter only when the data disk uses the subscription billing method. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  The auto-renewal cycle is one month for a monthly subscription. The auto-renewal cycle is one year for a yearly subscription.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The disk description. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The data disk type. Valid values:
   * 
   * *   **cloud_efficiency**: ultra disk.
   * *   **cloud_ssd**: standard SSD
   * *   **cloud_essd**: ESSD
   * *   **cloud_auto** (default): Premium ESSD
   * 
   * @example
   * cloud_ssd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The name of the data disk. The name must be 2 to 128 characters in length and can contain letters and digits. The name can contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * ZStack-Hybrid-Test-ECS-Instance
   */
  diskName?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go Pay-as-you-go disks do not require to be attached. You can also attach the pay-as-you-go disk to an instance of any billing method based on your business requirements.
   * *   **Prepaid**: subscription Subscription disks must be attached to a subscription instance. Set **InstanceId** to the ID of a subscription instance.
   * 
   * @example
   * Postpaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The ID of the instance to which you want to attach the disk. If you set **InstanceChargeType** to **Prepaid**, you must set InstanceId to the ID of a subscription instance.
   * 
   * @example
   * rc-v28c6k3jupp61m2t****
   */
  instanceId?: string;
  /**
   * @remarks
   * The performance level (PL) of ESSDs. Valid values:
   * 
   * *   **PL0**: A single ESSD delivers up to 10,000 random read/write IOPS.
   * *   **PL1: An ESSD delivers up to 50,000 random read/write IOPS.**
   * *   **PL2**: A single ESSD delivers up to 100,000 random read/write IOPS.
   * *   **PL3**: A single ESSD delivers up to 1,000,000 random read/write IOPS.
   * 
   * For information about ESSD PLs, see [ESSDs](https://help.aliyun.com/document_detail/2859916.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * none
   */
  period?: number;
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * none
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-ac****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The disk size. Unit: GiB. This parameter is required. Valid values:
   * 
   * *   Valid values if you set DiskCategory to **cloud_efficiency**: 20 to 32768.
   * 
   * *   Valid values if you set DiskCategory to **cloud_ssd**: 20 to 32768.
   * 
   * *   Valid values if you set DiskCategory to **cloud_auto**: 1 to 65536.
   * 
   * *   Valid values when DiskCategory is set to cloud_essd: depending on the value of **PerformanceLevel**.****
   * 
   *     *   Valid values if PerformanceLevel is set to PL0: 1 to 65536
   *     *   Valid values if PerformanceLevel is set to PL1: 20 to 65536
   *     *   Valid values if PerformanceLevel is set to PL2: 461 to 65536
   *     *   Valid values if PerformanceLevel is set to PL3: 1261 to 65536
   * 
   * If **SnapshotId** is specified and the size of the corresponding snapshot is greater than the **Size** value, the size of the created disk is the same as that of the snapshot. If the snapshot size is less than the **Size** value, the size of the created disk is equal to the **Size** value.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The snapshot that you want to use to create the disk.
   * 
   * *   The snapshots of RDS Custom instances and the non-shared snapshots of ECS instances are supported.
   * *   If the size of the snapshot specified by **SnapshotId** is greater than the value of **Size**, the size of the created disk is equal to the specified snapshot size. If the snapshot size is less than the **Size** value, the size of the created disk is equal to the **Size** value.
   * *   You cannot create elastic ephemeral disks from snapshots.
   * *   Snapshots that were created on or before July 15, 2013 cannot be used to create disks.
   * 
   * @example
   * rcds-umtnkvevqbu****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateRCDiskRequestTag[];
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is required if you do not specify **InstanceId**.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      description: 'Description',
      diskCategory: 'DiskCategory',
      diskName: 'DiskName',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      performanceLevel: 'PerformanceLevel',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      size: 'Size',
      snapshotId: 'SnapshotId',
      tag: 'Tag',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      description: 'string',
      diskCategory: 'string',
      diskName: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      performanceLevel: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      size: 'number',
      snapshotId: 'string',
      tag: { 'type': 'array', 'itemType': CreateRCDiskRequestTag },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

