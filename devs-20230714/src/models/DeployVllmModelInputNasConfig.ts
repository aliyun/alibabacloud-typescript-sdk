// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployVllmModelInputNasConfigMountPoints } from "./DeployVllmModelInputNasConfigMountPoints";


export class DeployVllmModelInputNasConfig extends $dara.Model {
  groupId?: number;
  mountPoints?: DeployVllmModelInputNasConfigMountPoints[];
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
      mountPoints: { 'type': 'array', 'itemType': DeployVllmModelInputNasConfigMountPoints },
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

