// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyInstanceReadOnlyResourceLogDiskSize extends $dara.Model {
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
   * The information about the log disk space of the cluster.
   * 
   * @example
   * 400
   */
  totalDiskSize?: number;
  /**
   * @remarks
   * The log disk space of each replica node in the cluster, in GB.
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
      totalDiskSize: 'TotalDiskSize',
      unitDiskSize: 'UnitDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logAssignedSize: 'string',
      maxLogAssignedObServer: { 'type': 'array', 'itemType': 'string' },
      maxLogAssignedPercent: 'string',
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

