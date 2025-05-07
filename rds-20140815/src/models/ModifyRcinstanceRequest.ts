// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the automatic payment feature. Valid values:
   * 
   * *   **true** (default): enables the feature. You must make sure that your account balance is sufficient.
   * *   **false**: disables the feature. An unpaid order is generated.
   * 
   * >  If your account balance is insufficient, you can set AutoPay to false. In this case, an unpaid order is generated. You can complete the payment in the Expenses and Costs console.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The type of the change that you want to perform on the instance. Valid values:
   * 
   * >  This parameter is optional. The system can automatically determine whether the instance change is an upgrade or a downgrade. If you want to specify this parameter, take note of the following items:
   * 
   * *   **Upgrade** (default): upgrades the instance type. Make sure that your account balance is sufficient.
   * *   **Down**: downgrades the instance type. If the new instance type specified by InstanceType has lower specifications than the current instance type, set Direction to Down.
   * 
   * @example
   * Up
   */
  direction?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and resource inventory.
   * *   **false**: performs a dry run and performs the actual request. If the request passes the dry run, the operation is performed.
   * 
   * @example
   * true
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
   * The new instance type. For more information about the instance types that are supported by RDS Custom instances, see [Instance types of RDS Custom instances](https://help.aliyun.com/document_detail/2844823.html).
   * 
   * @example
   * mysql.i8.large.2cm
   */
  instanceType?: string;
  rebootTime?: string;
  rebootWhenFinished?: boolean;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hagnzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      direction: 'Direction',
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      rebootTime: 'RebootTime',
      rebootWhenFinished: 'RebootWhenFinished',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      direction: 'string',
      dryRun: 'boolean',
      instanceId: 'string',
      instanceType: 'string',
      rebootTime: 'string',
      rebootWhenFinished: 'boolean',
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

