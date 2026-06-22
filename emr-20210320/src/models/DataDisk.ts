// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataDisk extends $dara.Model {
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * - `cloud_efficiency`: Ultra Disk.
   * 
   * - `cloud_ssd`: Standard SSD.
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
   * The number of data disks.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The performance level of an ESSD. This parameter applies only when the `Category` parameter is set to `cloud_essd`. Valid values:
   * 
   * - PL0: A maximum of 10,000 random read/write IOPS per disk.
   * 
   * - PL1: A maximum of 50,000 random read/write IOPS per disk.
   * 
   * - PL2: A maximum of 100,000 random read/write IOPS per disk.
   * 
   * - PL3: A maximum of 1,000,000 random read/write IOPS per disk.
   * 
   * Default value: PL1.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of each data disk, in GB.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
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

