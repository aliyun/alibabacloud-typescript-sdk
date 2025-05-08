// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values: **20** and **40**. The value cannot be smaller than the size of the image and must be a multiple of 10 GiB.
   * 
   * @example
   * 40
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

