// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunInstancesRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The category of the system disk.
   * 
   * @example
   * local_ssd
   */
  category?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
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

