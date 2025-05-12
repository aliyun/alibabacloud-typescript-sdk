// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateResourceRequestSelfManagedResourceOptions } from "./CreateResourceRequestSelfManagedResourceOptions";


export class CreateResourceRequest extends $dara.Model {
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
   * The billing method. Valid values:
   * 
   * *   PrePaid: the subscription billing method.
   * *   PostPaid: the pay-as-you-go billing method.
   * 
   * >  This parameter is required when the ResourceType parameter is set to Dedicated.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of ECS instances.
   * 
   * >  This parameter is required when the ResourceType parameter is set to Dedicated.
   * 
   * @example
   * 5
   */
  ecsInstanceCount?: number;
  /**
   * @remarks
   * The type of the Elastic Compute Service (ECS) instance.
   * 
   * >  This parameter is required when the ResourceType parameter is set to Dedicated.
   * 
   * @example
   * ecs.c6.8xlarge
   */
  ecsInstanceType?: string;
  /**
   * @remarks
   * The labels.
   */
  labels?: { [key: string]: string };
  /**
   * @example
   * MyResource
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   Dedicated: the dedicated resource group.
   * *   SelfManaged: the self-managed resource group.
   * 
   * >  If you use a self-managed resource group, you must configure a whitelist.
   * 
   * @example
   * Dedicated
   */
  resourceType?: string;
  /**
   * @remarks
   * The configurations of the self-managed resource group.
   */
  selfManagedResourceOptions?: CreateResourceRequestSelfManagedResourceOptions;
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
   * The ID of the zone in which the instance resides.
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
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      selfManagedResourceOptions: 'SelfManagedResourceOptions',
      systemDiskSize: 'SystemDiskSize',
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
      resourceName: 'string',
      resourceType: 'string',
      selfManagedResourceOptions: CreateResourceRequestSelfManagedResourceOptions,
      systemDiskSize: 'number',
      zone: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.selfManagedResourceOptions && typeof (this.selfManagedResourceOptions as any).validate === 'function') {
      (this.selfManagedResourceOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

