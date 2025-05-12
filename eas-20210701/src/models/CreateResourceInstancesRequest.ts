// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   false (default)
   * *   true
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   PrePaid: subscription.
   * *   PostPaid: pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of instances that you want to create. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  ecsInstanceCount?: number;
  /**
   * @remarks
   * The type of the Elastic Compute Service (ECS) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.s6-c1m2.xlarge
   */
  ecsInstanceType?: string;
  /**
   * @remarks
   * The custom service tag.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values: 200 to 2000. Default value: 200.
   * 
   * @example
   * 200
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The user-defined information. This parameter is not in use.
   * 
   * @example
   * x112223333
   * 
   * @deprecated
   */
  userData?: string;
  /**
   * @remarks
   * The zone to which the instance belongs.
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

