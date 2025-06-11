// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceResponseBodyInstanceResourceCapacityUnit } from "./DescribeInstanceResponseBodyInstanceResourceCapacityUnit";
import { DescribeInstanceResponseBodyInstanceResourceCpu } from "./DescribeInstanceResponseBodyInstanceResourceCpu";
import { DescribeInstanceResponseBodyInstanceResourceDiskSize } from "./DescribeInstanceResponseBodyInstanceResourceDiskSize";
import { DescribeInstanceResponseBodyInstanceResourceLogDiskSize } from "./DescribeInstanceResponseBodyInstanceResourceLogDiskSize";
import { DescribeInstanceResponseBodyInstanceResourceMemory } from "./DescribeInstanceResponseBodyInstanceResourceMemory";


export class DescribeInstanceResponseBodyInstanceResource extends $dara.Model {
  /**
   * @remarks
   * The information about capacity units.
   */
  capacityUnit?: DescribeInstanceResponseBodyInstanceResourceCapacityUnit;
  /**
   * @remarks
   * The information about the CPU resources of the cluster.
   */
  cpu?: DescribeInstanceResponseBodyInstanceResourceCpu;
  /**
   * @remarks
   * The information about the storage resources of the cluster.
   */
  diskSize?: DescribeInstanceResponseBodyInstanceResourceDiskSize;
  /**
   * @remarks
   * The information about the log disk space of the cluster.
   */
  logDiskSize?: DescribeInstanceResponseBodyInstanceResourceLogDiskSize;
  /**
   * @remarks
   * The information about the memory resources of the cluster.
   */
  memory?: DescribeInstanceResponseBodyInstanceResourceMemory;
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
      logDiskSize: 'LogDiskSize',
      memory: 'Memory',
      unitCount: 'UnitCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: DescribeInstanceResponseBodyInstanceResourceCapacityUnit,
      cpu: DescribeInstanceResponseBodyInstanceResourceCpu,
      diskSize: DescribeInstanceResponseBodyInstanceResourceDiskSize,
      logDiskSize: DescribeInstanceResponseBodyInstanceResourceLogDiskSize,
      memory: DescribeInstanceResponseBodyInstanceResourceMemory,
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
    if(this.logDiskSize && typeof (this.logDiskSize as any).validate === 'function') {
      (this.logDiskSize as any).validate();
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

