// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunRCInstancesRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The type of the system disk. Set the value to **cloud_essd**, which indicates ESSDs.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Only performance level 1 (PL1) ESSDs are supported. Valid values: 20 to 2048.
   * 
   * @example
   * 20
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

