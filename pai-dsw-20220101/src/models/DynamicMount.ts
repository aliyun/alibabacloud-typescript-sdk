// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DynamicMountPoint } from "./DynamicMountPoint";


export class DynamicMount extends $dara.Model {
  enable?: boolean;
  mountPoints?: DynamicMountPoint[];
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      mountPoints: 'MountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      mountPoints: { 'type': 'array', 'itemType': DynamicMountPoint },
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

