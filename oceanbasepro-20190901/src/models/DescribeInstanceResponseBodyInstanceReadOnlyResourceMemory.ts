// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyInstanceReadOnlyResourceMemory extends $dara.Model {
  /**
   * @remarks
   * The original memory size of the cluster.
   * 
   * @example
   * 72
   */
  originalTotalMemory?: number;
  /**
   * @remarks
   * The total memory size of the cluster, in GB.
   * 
   * @example
   * 70
   */
  totalMemory?: number;
  /**
   * @remarks
   * The memory size of each replica node in the cluster, in GB.
   * 
   * @example
   * 10
   */
  unitMemory?: number;
  /**
   * @remarks
   * The size of memory used by the cluster, in GB.
   * 
   * @example
   * 10
   */
  usedMemory?: number;
  static names(): { [key: string]: string } {
    return {
      originalTotalMemory: 'OriginalTotalMemory',
      totalMemory: 'TotalMemory',
      unitMemory: 'UnitMemory',
      usedMemory: 'UsedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalTotalMemory: 'number',
      totalMemory: 'number',
      unitMemory: 'number',
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

