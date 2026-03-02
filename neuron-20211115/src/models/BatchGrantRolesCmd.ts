// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGrantRolesCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  accountId?: string;
  roleIds?: number[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      roleIds: 'roleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      roleIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.roleIds)) {
      $dara.Model.validateArray(this.roleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

