// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DepartmentRoleCmd extends $dara.Model {
  /**
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @example
   * member
   */
  roleCode?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      roleCode: 'roleCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'number',
      roleCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

