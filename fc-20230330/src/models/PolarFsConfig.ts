// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PolarFsMountConfig } from "./PolarFsMountConfig";


export class PolarFsConfig extends $dara.Model {
  groupId?: number;
  mountPoints?: PolarFsMountConfig[];
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
      mountPoints: { 'type': 'array', 'itemType': PolarFsMountConfig },
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

