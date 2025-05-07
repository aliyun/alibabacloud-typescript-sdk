// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeRCInstanceDiskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the automatic payment feature for the instance. Valid values:
   * 
   * *   **true** (default): enables the feature. Make sure that your account balance is sufficient.
   * *   **false**: disables the feature. An unpaid order is generated.
   * 
   * >  If your account balance is insufficient, you can set AutoPay to false. In this case, an unpaid order is generated. You can complete the payment in the Expenses and Costs console.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  diskId?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and insufficient inventory errors.
   * *   **false**: performs a dry run and performs the actual request. If the request passes the dry run, the instance is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf62br2491p5l****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new disk size. Unit: GiB.
   * 
   * @example
   * 100
   */
  newSize?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The method that you want to use to resize the disk. Valid values:
   * 
   * *   **offline** (default): resizes disks offline. After you resize a disk offline, you must restart the instance for the resizing operation to take effect.
   * *   **online**: resizes disks online. After you resize a disk online, the resizing operation takes effect immediately and you do not need to restart the instance.
   * 
   * @example
   * online
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      diskId: 'DiskId',
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      newSize: 'NewSize',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      diskId: 'string',
      dryRun: 'boolean',
      instanceId: 'string',
      newSize: 'number',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

