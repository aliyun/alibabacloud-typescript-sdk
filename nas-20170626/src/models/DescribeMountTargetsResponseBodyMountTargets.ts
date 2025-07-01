// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMountTargetsResponseBodyMountTargetsMountTarget } from "./DescribeMountTargetsResponseBodyMountTargetsMountTarget";


export class DescribeMountTargetsResponseBodyMountTargets extends $dara.Model {
  mountTarget?: DescribeMountTargetsResponseBodyMountTargetsMountTarget[];
  static names(): { [key: string]: string } {
    return {
      mountTarget: 'MountTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTarget: { 'type': 'array', 'itemType': DescribeMountTargetsResponseBodyMountTargetsMountTarget },
    };
  }

  validate() {
    if(Array.isArray(this.mountTarget)) {
      $dara.Model.validateArray(this.mountTarget);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

