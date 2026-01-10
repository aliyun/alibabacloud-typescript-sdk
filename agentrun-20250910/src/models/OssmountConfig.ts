// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OSSMountPoint } from "./OssmountPoint";


export class OSSMountConfig extends $dara.Model {
  mountPoints?: OSSMountPoint[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'mountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': OSSMountPoint },
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

