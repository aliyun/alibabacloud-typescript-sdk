// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceAttributeResponseBodyDataDisksDataDisk extends $dara.Model {
  /**
   * @remarks
   * The category of the data disk.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * Indicates whether the data disk is released when the instance is released. Valid values:
   * 
   * *   **true**: The data disk is released when the instance is released.
   * *   **false**: The data disk is reserved when the instance is released.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * Indicates whether the data disk is encrypted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  encrypted?: string;
  /**
   * @remarks
   * The performance level of data disk. This parameter is available when the data disk is an Enterprise SSD (ESSD).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB.
   * 
   * @example
   * 40
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

