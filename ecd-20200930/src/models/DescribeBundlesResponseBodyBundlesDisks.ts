// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBundlesResponseBodyBundlesDisks extends $dara.Model {
  /**
   * @remarks
   * The PL of the disk.
   * 
   * Valid values:
   * 
   * *   PL1
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   PL0
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   PL3
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   PL2
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * PL0
   */
  diskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 150
   */
  diskSize?: number;
  /**
   * @remarks
   * The type of the disk.
   * 
   * Valid values:
   * 
   * *   SYSTEM: system disk
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DATA: data disk
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * SYSTEM
   */
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      diskPerformanceLevel: 'DiskPerformanceLevel',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskPerformanceLevel: 'string',
      diskSize: 'number',
      diskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

