// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesResourceDiskSize extends $dara.Model {
  /**
   * @remarks
   * The original size of the disk.
   * 
   * @example
   * 200
   */
  originalTotalDiskSize?: number;
  /**
   * @remarks
   * The total storage space of the cluster, in GB.
   * 
   * @example
   * 200
   */
  totalDiskSize?: number;
  /**
   * @remarks
   * The storage space of each replica node in the cluster, in GB.
   * 
   * @example
   * 200
   */
  unitDiskSize?: number;
  /**
   * @remarks
   * The size of used storage space of the cluster, in GB.
   * 
   * @example
   * 100
   */
  usedDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      originalTotalDiskSize: 'OriginalTotalDiskSize',
      totalDiskSize: 'TotalDiskSize',
      unitDiskSize: 'UnitDiskSize',
      usedDiskSize: 'UsedDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalTotalDiskSize: 'number',
      totalDiskSize: 'number',
      unitDiskSize: 'number',
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

