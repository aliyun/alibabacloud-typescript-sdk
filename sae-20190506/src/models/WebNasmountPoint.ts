// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebNASMountPoint extends $dara.Model {
  mountDir?: string;
  nasAddr?: string;
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

