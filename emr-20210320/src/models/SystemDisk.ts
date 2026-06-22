// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SystemDisk extends $dara.Model {
  /**
   * @remarks
   * The type of the system disk. Valid values:
   * 
   * - `cloud_efficiency`: Ultra Disk.
   * 
   * - `cloud_ssd`: SSD Cloud Disk.
   * 
   * - `cloud_essd`: ESSD.
   * 
   * - `cloud`: Basic Disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * Specifies the number of system disks on each node. Default value: 1.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The performance level of the ESSD. This parameter is valid only when `Category` is set to `cloud_essd`. Valid values:
   * 
   * - `PL0`: Up to 10,000 random read/write IOPS per disk.
   * 
   * - `PL1` (default): Up to 50,000 random read/write IOPS per disk.
   * 
   * - `PL2`: Up to 100,000 random read/write IOPS per disk.
   * 
   * - `PL3`: Up to 1,000,000 random read/write IOPS per disk.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk, in GB.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      count: 'Count',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      count: 'number',
      performanceLevel: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

