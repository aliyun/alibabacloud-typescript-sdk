// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesResourceCapacityUnit } from "./DescribeInstancesResponseBodyInstancesResourceCapacityUnit";
import { DescribeInstancesResponseBodyInstancesResourceCpu } from "./DescribeInstancesResponseBodyInstancesResourceCpu";
import { DescribeInstancesResponseBodyInstancesResourceDiskSize } from "./DescribeInstancesResponseBodyInstancesResourceDiskSize";
import { DescribeInstancesResponseBodyInstancesResourceMemory } from "./DescribeInstancesResponseBodyInstancesResourceMemory";


export class DescribeInstancesResponseBodyInstancesResource extends $dara.Model {
  /**
   * @remarks
   * The information about capacity units.
   */
  capacityUnit?: DescribeInstancesResponseBodyInstancesResourceCapacityUnit;
  /**
   * @remarks
   * The information about the CPU resources of the cluster.
   */
  cpu?: DescribeInstancesResponseBodyInstancesResourceCpu;
  /**
   * @remarks
   * The information about the storage resources of the cluster.
   */
  diskSize?: DescribeInstancesResponseBodyInstancesResourceDiskSize;
  /**
   * @remarks
   * The information about the memory resources of the cluster.
   */
  memory?: DescribeInstancesResponseBodyInstancesResourceMemory;
  /**
   * @remarks
   * The number of resource units in the cluster.
   * 
   * @example
   * 1
   */
  unitCount?: number;
  static names(): { [key: string]: string } {
    return {
      capacityUnit: 'CapacityUnit',
      cpu: 'Cpu',
      diskSize: 'DiskSize',
      memory: 'Memory',
      unitCount: 'UnitCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: DescribeInstancesResponseBodyInstancesResourceCapacityUnit,
      cpu: DescribeInstancesResponseBodyInstancesResourceCpu,
      diskSize: DescribeInstancesResponseBodyInstancesResourceDiskSize,
      memory: DescribeInstancesResponseBodyInstancesResourceMemory,
      unitCount: 'number',
    };
  }

  validate() {
    if(this.capacityUnit && typeof (this.capacityUnit as any).validate === 'function') {
      (this.capacityUnit as any).validate();
    }
    if(this.cpu && typeof (this.cpu as any).validate === 'function') {
      (this.cpu as any).validate();
    }
    if(this.diskSize && typeof (this.diskSize as any).validate === 'function') {
      (this.diskSize as any).validate();
    }
    if(this.memory && typeof (this.memory as any).validate === 'function') {
      (this.memory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

