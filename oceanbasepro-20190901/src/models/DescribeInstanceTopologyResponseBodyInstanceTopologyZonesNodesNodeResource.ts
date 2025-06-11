// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceCpu } from "./DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceCpu";
import { DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceDiskSize } from "./DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceDiskSize";
import { DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceMemory } from "./DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceMemory";


export class DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResource extends $dara.Model {
  /**
   * @remarks
   * The information about the CPU resources of the node.
   */
  cpu?: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceCpu;
  /**
   * @remarks
   * The information about the storage resources of the node.
   */
  diskSize?: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceDiskSize;
  /**
   * @remarks
   * The information about the memory resources of the node.
   */
  memory?: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceMemory;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      diskSize: 'DiskSize',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceCpu,
      diskSize: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceDiskSize,
      memory: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceMemory,
    };
  }

  validate() {
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

