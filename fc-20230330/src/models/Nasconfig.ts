// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NASMountConfig } from "./NasmountConfig";


export class NASConfig extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * 100
   */
  groupId?: number;
  /**
   * @remarks
   * The mount targets.
   */
  mountPoints?: NASMountConfig[];
  /**
   * @remarks
   * The account ID.
   * 
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

