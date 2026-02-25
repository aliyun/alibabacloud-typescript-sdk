// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebNASMountPoint extends $dara.Model {
  /**
   * @remarks
   * The local mount directory.
   * 
   * @example
   * /test/consumer/log
   */
  mountDir?: string;
  /**
   * @remarks
   * The mount target.
   * 
   * @example
   * /home
   */
  nasAddr?: string;
  /**
   * @remarks
   * The mount directory.
   * 
   * @example
   * /
   */
  nasPath?: string;
  static names(): { [key: string]: string } {
    return {
      mountDir: 'MountDir',
      nasAddr: 'NasAddr',
      nasPath: 'NasPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountDir: 'string',
      nasAddr: 'string',
      nasPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

