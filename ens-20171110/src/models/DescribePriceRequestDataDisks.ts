// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequestDataDisks extends $dara.Model {
  /**
   * @remarks
   * The category of the disk.
   * 
   * @example
   * cloud_efficiency
   */
  category?: string;
  /**
   * @remarks
   * The size of the data disk. Unit: GB.
   * 
   * @example
   * 50
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
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

