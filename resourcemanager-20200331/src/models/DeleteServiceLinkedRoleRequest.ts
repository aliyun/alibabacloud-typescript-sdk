// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServiceLinkedRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the role.
   * 
   * This parameter is required.
   * 
   * @example
   * AliyunServiceRoleForPolarDB
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

