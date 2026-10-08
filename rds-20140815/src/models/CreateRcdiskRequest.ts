// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCDiskRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to N tag keys at a time. Valid values of N: **1 to 20**. The tag key cannot be an empty string.
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
   * - **true** (default): enables automatic payment. Make sure that your account balance is sufficient.
   * - **false**: generates an order without charging.
   * 
   * 
   * 
   * 
   * > If your payment method has insufficient balance, set this parameter to false. An unpaid order is generated, and you can log on to the ApsaraDB RDS console to complete the payment.
   * >
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter is valid only when you create a subscription data cloud disk. Valid values:
   * - **true**: enables auto-renewal.
   * - **false**: disables auto-renewal.
   * 
   *  > If you purchase the cloud disk on a monthly basis, the auto-renewal epoch is one month.
   *  If you purchase the cloud disk on a yearly basis, the auto-renewal epoch is one year.
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
   * - **cloud_efficiency**: ultra cloud disk.
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
   * The name of the cloud disk. The name must be 2 to 128 characters in length and can contain characters that are categorized as letter in Unicode, including Chinese characters, English letters, and digits. The name can also contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * testDisk
   */
  diskName?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go. Cloud disks with this billing method do not need to be mounted to an instance. You can also mount them to an instance of any billing method during creation as needed.
   * - **Prepaid**: subscription. Cloud disks with this billing method must be mounted to a subscription instance. You must specify the **InstanceId** (instance ID) of a subscription instance.
   * 
   * @example
   * Postpaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * Instance ID of the instance to which the cloud disk is attached. If **InstanceChargeType** is set to **Prepaid** (subscription), you must specify instance ID of a subscription instance.
   * 
   * @example
   * rc-v28c6k3jupp61m2t****
   */
  instanceId?: string;
  /**
   * @remarks
   * The performance level (PL) of the ESSD cloud disk. Valid values:
   * 
   * - **PL0**: A single cloud disk can deliver up to 10,000 random read/write IOPS.
   * - **PL1** (default): A single cloud disk can deliver up to 50,000 random read/write IOPS.
   * - **PL2**: A single cloud disk can deliver up to 100,000 random read/write IOPS.
   * - **PL3**: A single cloud disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * For more information about how to select an ESSD performance level, see [ESSD cloud disk](https://help.aliyun.com/document_detail/2859916.html).
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
   * The resource group ID.
   * 
   * @example
   * rg-ac****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The capacity size. Unit: GiB. You must specify a value for this parameter. Valid values:
   * 
   * - **cloud_efficiency**: 20 to 32,768.
   * - **cloud_ssd**: 20 to 32,768.
   * - **cloud_auto**: 1 to 65,536.
   * - **cloud_essd**: The valid value range depends on the value of **PerformanceLevel**.
   *   - PL0: 1 to 65,536.
   *   - PL1: 20 to 65,536.
   *   - PL2: 461 to 65,536.
   *   - PL3: 1,261 to 65,536.
   * 
   * If **SnapshotId** is specified and the capacity of the corresponding snapshot is greater than the value of **Size**, snapshot size of the created cloud disk is the same as the snapshot capacity. If the snapshot capacity is less than the value of **Size**, snapshot size of the created cloud disk is the value of **Size**.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The snapshot that is used to create the cloud disk.
   * 
   * - RDS Custom snapshots and ECS snapshots (non-shared type) are supported.
   * - If the capacity of the snapshot specified by **SnapshotId** is greater than the value of **Size**, snapshot size of the created cloud disk is the same as the snapshot capacity. If the snapshot capacity is less than the value of **Size**, snapshot size of the created cloud disk is the value of **Size**.
   * - Creating elastic ephemeral disks from snapshots is not supported.
   * - Snapshots created on or before July 15, 2013 cannot be used to create cloud disks.
   * 
   * @example
   * rcds-umtnkvevqbu****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateRCDiskRequestTag[];
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is required if the **InstanceId** parameter (the instance ID of the instance to which the cloud disk is mounted) is not specified.
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

