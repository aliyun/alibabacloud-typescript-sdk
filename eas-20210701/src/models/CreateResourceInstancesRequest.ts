// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - false (default): Auto-renewal is disabled.
   * 
   * - true: Auto-renewal is enabled.
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - PrePaid: subscription.
   * 
   * - PostPaid: pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of new instances to create. The value must be between 1 and 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  ecsInstanceCount?: number;
  /**
   * @remarks
   * The instance type. This corresponds to an ECS instance type.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.s6-c1m2.xlarge
   */
  ecsInstanceType?: string;
  /**
   * @remarks
   * The user-defined tags.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The size of the system disk, in GiB. The value must be between 200 and 2,000. If you do not configure this parameter, the default value is 200 GiB.
   * 
   * @example
   * 200
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The custom user data. This parameter is not currently used.
   * 
   * @example
   * x112223333
   * 
   * @deprecated
   */
  userData?: string;
  /**
   * @remarks
   * The zone where the instance belongs.
   * 
   * @example
   * cn-shanghai-f
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      chargeType: 'ChargeType',
      ecsInstanceCount: 'EcsInstanceCount',
      ecsInstanceType: 'EcsInstanceType',
      labels: 'Labels',
      systemDiskSize: 'SystemDiskSize',
      userData: 'UserData',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      chargeType: 'string',
      ecsInstanceCount: 'number',
      ecsInstanceType: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      systemDiskSize: 'number',
      userData: 'string',
      zone: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

