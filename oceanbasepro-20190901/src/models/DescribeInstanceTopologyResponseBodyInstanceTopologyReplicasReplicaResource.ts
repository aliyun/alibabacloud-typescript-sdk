// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceCpu } from "./DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceCpu";
import { DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceDiskSize } from "./DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceDiskSize";
import { DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceMemory } from "./DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceMemory";


export class DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResource extends $dara.Model {
  /**
   * @remarks
   * The information about the CPU resources of the replica.
   */
  cpu?: DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceCpu;
  /**
   * @remarks
   * The information about the data disk of the replica.
   */
  diskSize?: DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceDiskSize;
  /**
   * @remarks
   * The information about the memory resources of the replica.
   */
  memory?: DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceMemory;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      diskSize: 'DiskSize',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceCpu,
      diskSize: DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceDiskSize,
      memory: DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceMemory,
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

