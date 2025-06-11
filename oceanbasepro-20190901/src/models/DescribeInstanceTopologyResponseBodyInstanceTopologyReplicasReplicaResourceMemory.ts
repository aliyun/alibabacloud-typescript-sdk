// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceMemory extends $dara.Model {
  /**
   * @remarks
   * The total memory size of the replica, in GB.
   * 
   * @example
   * 32
   */
  totalMemory?: number;
  /**
   * @remarks
   * The size of memory used by the replica, in GB.
   * 
   * @example
   * 16
   */
  usedMemory?: number;
  static names(): { [key: string]: string } {
    return {
      totalMemory: 'TotalMemory',
      usedMemory: 'UsedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalMemory: 'number',
      usedMemory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

