// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployTensorRtModelInputNasConfigMountPoints } from "./DeployTensorRtModelInputNasConfigMountPoints";


export class DeployTensorRtModelInputNasConfig extends $dara.Model {
  groupId?: number;
  mountPoints?: DeployTensorRtModelInputNasConfigMountPoints[];
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      mountPoints: 'mountPoints',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      mountPoints: { 'type': 'array', 'itemType': DeployTensorRtModelInputNasConfigMountPoints },
      userId: 'number',
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

