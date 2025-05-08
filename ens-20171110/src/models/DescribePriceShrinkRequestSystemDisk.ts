// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceShrinkRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The size of the system disk. Unit: GB.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

