// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyInstanceReadOnlyResourceDiskSize extends $dara.Model {
  /**
   * @remarks
   * The size of the data disk, in GB.
   * 
   * @example
   * 200
   */
  dataUsedSize?: number;
  /**
   * @remarks
   * The maximum disk size that can be created.
   * 
   * @example
   * 80000
   */
  maxDiskSize?: number;
  /**
   * @remarks
   * The maximum disk usage of the OBServer node.
   */
  maxDiskUsedObServer?: string[];
  /**
   * @remarks
   * The maximum disk usage, in percentage.
   * 
   * @example
   * 0.14
   */
  maxDiskUsedPercent?: number;
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
      dataUsedSize: 'DataUsedSize',
      maxDiskSize: 'MaxDiskSize',
      maxDiskUsedObServer: 'MaxDiskUsedObServer',
      maxDiskUsedPercent: 'MaxDiskUsedPercent',
      originalTotalDiskSize: 'OriginalTotalDiskSize',
      totalDiskSize: 'TotalDiskSize',
      unitDiskSize: 'UnitDiskSize',
      usedDiskSize: 'UsedDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataUsedSize: 'number',
      maxDiskSize: 'number',
      maxDiskUsedObServer: { 'type': 'array', 'itemType': 'string' },
      maxDiskUsedPercent: 'number',
      originalTotalDiskSize: 'number',
      totalDiskSize: 'number',
      unitDiskSize: 'number',
      usedDiskSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.maxDiskUsedObServer)) {
      $dara.Model.validateArray(this.maxDiskUsedObServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

