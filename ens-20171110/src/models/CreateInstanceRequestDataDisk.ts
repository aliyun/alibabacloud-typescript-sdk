// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The capacity of the first data disk. Unit: GiB. The capacity is at least 20 GiB and is a multiple of 10 GiB.
   * 
   * @example
   * 50
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

