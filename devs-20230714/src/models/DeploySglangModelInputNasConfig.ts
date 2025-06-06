// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeploySGLangModelInputNasConfigMountPoints } from "./DeploySglangModelInputNasConfigMountPoints";


export class DeploySGLangModelInputNasConfig extends $dara.Model {
  groupId?: number;
  mountPoints?: DeploySGLangModelInputNasConfigMountPoints[];
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
      mountPoints: { 'type': 'array', 'itemType': DeploySGLangModelInputNasConfigMountPoints },
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

