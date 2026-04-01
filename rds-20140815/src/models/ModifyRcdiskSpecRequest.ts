// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCDiskSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true (default)**: automatically completes the payment. Make sure that your account balance is sufficient.
   * *   **false**: does not automatically complete the payment. An unpaid order is generated.
   * 
   * >  If your account balance is insufficient, you can set the AutoPay parameter to false. In this case, an unpaid order is generated. You can complete the payment in the Expenses and Costs console.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The new disk type. Valid values:
   * 
   * *   **cloud_essd**: ESSD.
   * *   **cloud_auto**: ESSD AutoPL disk
   * 
   * This parameter is empty by default.
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
   * Specifies whether to perform a dry run. Valid values: Valid values:
   * 
   * *   **true**: performs a dry run and does not perform the actual request. The system checks the request parameters, request syntax, limits, and available resources.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The PL of the disk. Valid values:
   * 
   * *   **PL1** (default): A single ESSD can deliver up to 50,000 random read/write IOPS.
   * *   **PL2**: A single ESSD delivers up to 100,000 random read/write IOPS.
   * *   **PL3**: A single ESSD delivers up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * PL2
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
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

