// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCDiskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true**: enables the feature. You must make sure that your account balance is sufficient.
   * *   **false**: disables the feature. An unpaid order is generated.
   * 
   * >  Default value: true. If your account balance is insufficient, you can set AutoPay to false to generate an unpaid order. Then, you can log on to the ApsaraDB RDS console to complete the payment.
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
   * The disk description. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`. By default, this parameter is left empty.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The category of the data disk. Valid values:
   * 
   * *   **cloud_efficiency**: ultra disk.
   * *   **cloud_ssd**: standard SSD.
   * *   **cloud_essd**: ESSD.
   * *   **cloud_auto**: ESSD AutoPL disk.
   * 
   * @example
   * cloud_ssd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The name of the data disk. The name must be 2 to 128 characters in length and can contain letters and digits. The name can contain colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * By default, this parameter is left empty.
   * 
   * @example
   * ZStack-Hybrid-Test-ECS-Instance
   */
  diskName?: string;
  /**
   * @remarks
   * The billing method. Set the value to **Postpaid**, which specifies the pay-as-you-go billing method.
   * 
   * @example
   * Postpaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The ID of the instance to which you want to attach the disk.
   * 
   * @example
   * rc-v28c6k3jupp61m2t****
   */
  instanceId?: string;
  /**
   * @remarks
   * The performance level (PL) of the disk if the disk is an ESSD. Valid values:
   * 
   * *   **PL0**: A single ESSD delivers up to 10,000 random read/write IOPS.
   * *   **PL1** (default): A single ESSD can deliver up to 50,000 random read/write IOPS.
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
   * The disk size. Unit: GiB. This parameter is required. Valid values:
   * 
   * *   Valid values if you set DiskCategory to **cloud_essd_entry**: 10 to 32768.
   * 
   * *   Valid values if you set DiskCategory to **cloud_ssd**: 20 to 32768.
   * 
   * *   Valid values if you set DiskCategory to **cloud_essd**: depend on the value of PerformanceLevel.
   * 
   *     *   Valid values if PerformanceLevel is set to PL0: 1 to 65536
   *     *   Valid values if PerformanceLevel is set to PL1: 20 to 65536
   *     *   Valid values if PerformanceLevel is set to PL2: 461 to 65536
   *     *   Valid values if PerformanceLevel is set to PL3: 1261 to 65536
   * 
   * *   Valid values if you set DiskCategory to **cloud_auto**: 1 to 65536.
   * 
   * If `SnapshotId` is specified, the following limits apply to `SnapshotId` and `Size`:
   * 
   * *   If the size of the snapshot specified by `SnapshotId` is larger than the value of `Size`, the size of the created disk is equal to the size of the snapshot.
   * *   If the size of the snapshot specified by `SnapshotId` is smaller than the value of `Size`, the size of the created disk is equal to the value of `Size`.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The snapshot that you want to use to create the disk. Snapshots that were created on or before July 15, 2013 cannot be used to create disks. The following limits apply to `SnapshotId` and `Size`:
   * 
   * *   If the size of the snapshot specified by `SnapshotId` is larger than the value of `Size`, the size of the created disk is equal to the specified snapshot size.
   * *   If the size of the snapshot specified by `SnapshotId` is smaller than the value of `Size`, the size of the created disk is equal to the value of `Size`.
   * *   You cannot create elastic ephemeral disks from snapshots.
   * 
   * @example
   * rcds-umtnkvevqbu****
   */
  snapshotId?: string;
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
      size: 'Size',
      snapshotId: 'SnapshotId',
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
      size: 'number',
      snapshotId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

