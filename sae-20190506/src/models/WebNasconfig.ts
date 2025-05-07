// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WebNASMountPoint } from "./WebNasmountPoint";


export class WebNASConfig extends $dara.Model {
  mountPoints?: WebNASMountPoint[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'MountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': WebNASMountPoint },
    };
  }

  validate() {
    if(Array.isArray(this.mountPoints)) {
      $dara.Model.validateArray(this.mountPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

