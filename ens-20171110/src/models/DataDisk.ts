// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataDisk extends $dara.Model {
  /**
   * @example
   * 60
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

