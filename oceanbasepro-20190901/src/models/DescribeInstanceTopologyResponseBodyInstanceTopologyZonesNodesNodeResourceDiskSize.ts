// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceDiskSize extends $dara.Model {
  /**
   * @remarks
   * The total storage space of the node, in GB.
   * 
   * @example
   * 100
   */
  totalDiskSize?: number;
  /**
   * @remarks
   * The size of storage space used by the node, in GB.
   * 
   * @example
   * 50
   */
  usedDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalDiskSize: 'TotalDiskSize',
      usedDiskSize: 'UsedDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalDiskSize: 'number',
      usedDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

