// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SystemDisk extends $dara.Model {
  /**
   * @remarks
   * The system cloud disk type, such as cloud_essd.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * The performance level of the ESSD cloud disk, such as PL0 and PL1.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system cloud disk, in GiB.
   * 
   * @example
   * 200
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

