// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCDiskRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can create up to N tag keys at a time. Valid values of N: **1** to **20**. The tag key cannot be an empty string.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value that corresponds to the tag key. You can specify up to N tag values at a time. Valid values of N: **1** to **20**. The tag value can be an empty string.
   * 
   * @example
   * testvalue1
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

export class CreateRCDiskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true** (default): Automatic payment is enabled. Make sure that your account balance is sufficient.
   * - **false**: Only an order is generated and no payment is made.
   * 
   * > If your payment method has insufficient balance, you can set this parameter to false. In this case, an unpaid order is generated, and you can log on to the ApsaraDB RDS console to complete the payment.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter is valid only when you create a subscription data cloud disk. Valid values:
   * - **true**: yes.
   * - **false**: no.
   * 
   *  > If you purchase the cloud disk on a monthly basis, the auto-renewal epoch is one month. If you purchase the cloud disk on a yearly basis, the auto-renewal epoch is one year.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The description of the cloud disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The category of the data cloud disk. Valid values:
   * 
   * - **cloud_efficiency**: ultra disk.
   * - **cloud_ssd**: standard SSD.
   * - **cloud_essd**: ESSD.
   * - **cloud_auto** (default): premium performance disk.
   * 
   * @example
   * cloud_auto
   */
  diskCategory?: string;
  /**
   * @remarks
   * The name of the cloud disk. The name must be 2 to 128 characters in length and can contain letters and digits in the Unicode Letter category. It can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * testDisk
   */
  diskName?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go. Cloud disks of this billing method do not need to be mounted to instances. You can also mount a pay-as-you-go cloud disk to an instance of any billing method when you create it as needed.
   * - **Prepaid**: subscription. Cloud disks of this billing method must be mounted to subscription instances. You must specify the **InstanceId** parameter, which is the instance ID of a subscription instance.
   * 
   * @example
   * Postpaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * Instance ID of the instance to which the cloud disk is attached. If **InstanceChargeType** is set to **Prepaid**, you must specify instance ID of a subscription instance.
   * 
   * @example
   * rc-v28c6k3jupp61m2t****
   */
  instanceId?: string;
  /**
   * @remarks
   * The performance level of the ESSD cloud disk. Valid values:
   * 
   * - **PL0**: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * - **PL1** (default): A single ESSD can deliver up to 50,000 random read/write IOPS.
   * - **PL2**: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * - **PL3**: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For more information about how to select the performance level of an ESSD, see [ESSDs](https://help.aliyun.com/document_detail/2859916.html).
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
   * The region ID. You can call the DescribeRegions operation to query region IDs.
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
   * The size of the cloud disk. Unit: GiB. You must specify this parameter. Valid values:
   * 
   * - **cloud_efficiency**: 20 to 32,768.
   * - **cloud_ssd**: 20 to 32,768.
   * - **cloud_auto**: 1 to 65,536.
   * - **cloud_essd**: The valid values vary based on the value of **PerformanceLevel**.
   *   - PL0: 1 to 65,536.
   *   - PL1: 20 to 65,536.
   *   - PL2: 461 to 65,536.
   *   - PL3: 1,261 to 65,536.
   * 
   * If you specify the **SnapshotId** parameter and the size of the snapshot is greater than the value of **Size**, the created cloud disk is the same size as the snapshot. If the snapshot size is smaller than the value of **Size**, the created cloud disk is the size specified by **Size**.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot used to create the cloud disk.
   * 
   * - You can use RDS Custom snapshots and ECS snapshots (excluding shared snapshots).
   * - If the size of the snapshot specified by **SnapshotId** is greater than the value of **Size**, the created cloud disk is the same size as the snapshot. If the snapshot size is smaller than the value of **Size**, the created cloud disk is the size specified by **Size**.
   * - You cannot use snapshots to create ephemeral disks.
   * - Snapshots created on or before July 15, 2013 cannot be used to create cloud disks.
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
   * This parameter is required when you do not specify the **InstanceId** parameter, which is the instance ID of the instance to which the cloud disk is mounted.
   * 
   * @example
   * cn-hangzhou-h
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

