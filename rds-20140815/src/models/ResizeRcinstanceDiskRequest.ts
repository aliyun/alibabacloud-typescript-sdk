// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeRCInstanceDiskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * - **true** (default): Automatic payment is enabled. Make sure that your account balance is sufficient.
   * - **false**: Only an order is generated. No payment is made.
   * > If your payment method has an insufficient balance, set AutoPay to false. An unpaid order is generated. You can log on to the ApsaraDB RDS console to complete the payment.
   * >
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The cloud disk ID.
   * 
   * @example
   * rcd-x4462840nwinu6rr61m5o
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * * **true**: performs a dry run without creating the instance. The system checks items such as the request parameters, request format, service limits, and available resources.
   * * **false** (default): sends the request. If the request passes the check, the instance is created.
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
   * The size of the disk after expansion. Unit: GiB.
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
   * The method used to expand the disk. Valid values:
   * - **offline** (default): Offline expansion. You must restart the instance for the expansion to take effect.
   * - **online**: Online expansion. The expansion takes effect without restarting the instance.
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

