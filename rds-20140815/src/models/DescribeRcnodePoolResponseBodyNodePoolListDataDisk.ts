// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCNodePoolResponseBodyNodePoolListDataDisk extends $dara.Model {
  /**
   * @remarks
   * The type of the data disk. Set the value to **cloud_essd**, which indicates Enterprise SSDs (ESSDs).
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * Indicates whether to encrypt the cloud disk. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  encrypted?: string;
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
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The data disk size. Unit: GiB.
   * 
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      encrypted: 'Encrypted',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteWithInstance: 'boolean',
      encrypted: 'string',
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

