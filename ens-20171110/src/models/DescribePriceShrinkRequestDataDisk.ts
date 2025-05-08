// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceShrinkRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The size of the data disk. Unit: GB. If you specify this parameter, this parameter takes precedence over the Size property in DataDisks.
   * 
   * @example
   * 50
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

