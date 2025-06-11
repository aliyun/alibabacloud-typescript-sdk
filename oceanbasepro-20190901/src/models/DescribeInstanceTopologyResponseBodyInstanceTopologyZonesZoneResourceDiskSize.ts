// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTopologyResponseBodyInstanceTopologyZonesZoneResourceDiskSize extends $dara.Model {
  /**
   * @remarks
   * The IDs of OBServer nodes that use the maximum disk space.
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
  static names(): { [key: string]: string } {
    return {
      maxDiskUsedObServer: 'MaxDiskUsedObServer',
      maxDiskUsedPercent: 'MaxDiskUsedPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxDiskUsedObServer: { 'type': 'array', 'itemType': 'string' },
      maxDiskUsedPercent: 'number',
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

