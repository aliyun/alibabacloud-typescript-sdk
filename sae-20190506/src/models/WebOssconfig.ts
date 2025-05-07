// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WebOSSMountPoint } from "./WebOssmountPoint";


export class WebOSSConfig extends $dara.Model {
  mountPoints?: WebOSSMountPoint[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'MountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': WebOSSMountPoint },
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

