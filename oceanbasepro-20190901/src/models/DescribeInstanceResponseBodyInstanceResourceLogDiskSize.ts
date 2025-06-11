// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyInstanceResourceLogDiskSize extends $dara.Model {
  /**
   * @remarks
   * The allocated disk space for log storage, in GB.
   * 
   * @example
   * 0.0
   */
  logAssignedSize?: string;
  /**
   * @remarks
   * The maximum storage space allocated for.
   */
  maxLogAssignedObServer?: string[];
  /**
   * @remarks
   * The maximum percentage of space allocated for log storage.
   * 
   * @example
   * 6.68
   */
  maxLogAssignedPercent?: string;
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
   * The total log disk space of the cluster, in GB.
   * 
   * @example
   * 400
   */
  totalDiskSize?: number;
  /**
   * @remarks
   * The log disk space of each replica node in the cluster. Unit: GB.
   * 
   * @example
   * 200
   */
  unitDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      logAssignedSize: 'LogAssignedSize',
      maxLogAssignedObServer: 'MaxLogAssignedObServer',
      maxLogAssignedPercent: 'MaxLogAssignedPercent',
      originalTotalDiskSize: 'OriginalTotalDiskSize',
      totalDiskSize: 'TotalDiskSize',
      unitDiskSize: 'UnitDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logAssignedSize: 'string',
      maxLogAssignedObServer: { 'type': 'array', 'itemType': 'string' },
      maxLogAssignedPercent: 'string',
      originalTotalDiskSize: 'number',
      totalDiskSize: 'number',
      unitDiskSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.maxLogAssignedObServer)) {
      $dara.Model.validateArray(this.maxLogAssignedObServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

