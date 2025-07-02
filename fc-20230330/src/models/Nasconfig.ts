// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NASMountConfig } from "./NasmountConfig";


export class NASConfig extends $dara.Model {
  /**
   * @example
   * 100
   */
  groupId?: number;
  mountPoints?: NASMountConfig[];
  /**
   * @example
   * 100
   */
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
      mountPoints: { 'type': 'array', 'itemType': NASMountConfig },
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

