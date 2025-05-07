// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCNodePoolResponseBodyNodePoolListSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The type of the system disk. Set the value to **cloud_essd**, which indicates ESSDs.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * The performance level of the ESSD. Valid values:
   * 
   * *   **PL0**: A single ESSD delivers up to 10,000 random read/write IOPS.
   * *   **PL1**: A single ESSD delivers up to 50,000 random read/write IOPS.
   * *   **PL2**: A single ESSD delivers up to 100,000 random read/write IOPS.
   * *   **PL3**: A single ESSD delivers up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
   * 
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
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

