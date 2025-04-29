// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityAvailableInstanceTypesAvailableInstanceType extends $dara.Model {
  /**
   * @remarks
   * The available capacity of the ECS instance type.
   * 
   * @example
   * 0
   */
  availableInstanceCapacity?: number;
  /**
   * @remarks
   * The ECS instance type.
   * 
   * @example
   * ecs.c6.26xlarge
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      availableInstanceCapacity: 'AvailableInstanceCapacity',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableInstanceCapacity: 'number',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

