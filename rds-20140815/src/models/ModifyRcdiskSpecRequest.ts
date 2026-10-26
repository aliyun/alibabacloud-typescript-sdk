// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCDiskSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * - **true** (default): Automatic payment is enabled. Make sure that your account balance is sufficient.
   * - **false**: Only an order is generated, and no payment is made.
   * 
   * > If the balance of your payment method is insufficient, you can change the Settings of the parameter AutoPay to false. An unpaid order is generated. You can logon to the ApsaraDB RDS console to complete the payment.
   * >
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The new category of the cloud disk. Valid values:
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
   * The ID of the cloud disk.
   * 
   * @example
   * rcd-wz9f3peueu5npsl****
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this operation. Valid values:
   * * **true**: A dry run is performed, and the modification is not executed. The check items include request parameters, request format, business limits, and inventory.
   * * **false** (default): A normal request is sent, and the modification is executed after the check is passed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The new performance level (PL) of the ESSD cloud disk. Valid values:
   * 
   * - **PL1** (default): A single disk delivers up to 50,000 random read/write IOPS.
   * 
   * - **PL2**: A single disk delivers up to 100,000 random read/write IOPS.
   * 
   * - **PL3**: A single disk delivers up to 1,000,000 random read/write IOPS.
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

