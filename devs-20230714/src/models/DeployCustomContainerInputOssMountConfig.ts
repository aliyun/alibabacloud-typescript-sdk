// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployCustomContainerInputOssMountConfigMountPoints } from "./DeployCustomContainerInputOssMountConfigMountPoints";


export class DeployCustomContainerInputOssMountConfig extends $dara.Model {
  mountPoints?: DeployCustomContainerInputOssMountConfigMountPoints[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'mountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': DeployCustomContainerInputOssMountConfigMountPoints },
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

