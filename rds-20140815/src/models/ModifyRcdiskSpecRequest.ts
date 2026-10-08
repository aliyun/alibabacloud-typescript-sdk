// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCDiskSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * - **true** (default): Automatic payment is enabled. Make sure that your account balance is sufficient.
   * - **false**: Only an order is generated. No payment is made.
   * 
   * > If your payment method has an insufficient balance, set AutoPay to false. An unpaid order is generated. You can log on to the ApsaraDB RDS console to complete the payment.
   * >
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The type of the cloud disk. Valid values:
   * - **cloud_essd** (default): ESSD cloud disk.
   * - **cloud_auto**: ESSD AutoPL cloud disk.
   * - **cloud_ssd**: standard SSD.
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The cloud disk ID.
   * 
   * @example
   * rcd-wz9f3peueu5npsl****
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this operation. Valid values:
   * * **true**: A dry run is performed without executing the change. The check items include request parameters, request format, business limits, and inventory.
   * * **false** (default): A normal request is sent. After the check is passed, the change is directly executed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The performance level (PL) of the ESSD cloud disk. Valid values:
   * 
   * - **PL1** (default): A maximum of 50,000 random read/write IOPS per disk.
   * 
   * - **PL2**: A maximum of 100,000 random read/write IOPS per disk.
   * 
   * - **PL3**: A maximum of 1,000,000 random read/write IOPS per disk.
   * 
   * @example
   * PL2
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      diskCategory: 'DiskCategory',
      diskId: 'DiskId',
      dryRun: 'DryRun',
      performanceLevel: 'PerformanceLevel',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      diskCategory: 'string',
      diskId: 'string',
      dryRun: 'boolean',
      performanceLevel: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

