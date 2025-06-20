// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeGroupRequestNodeGroupSystemDisk extends $dara.Model {
  /**
   * @remarks
   * *
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * *
   * *
   * 
   * @example
   * PL!
   */
  performanceLevel?: string;
  /**
   * @example
   * 250
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

