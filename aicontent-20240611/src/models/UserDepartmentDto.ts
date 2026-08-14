// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserDepartmentDTO extends $dara.Model {
  /**
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @example
   * R&D Department
   */
  clientName?: string;
  /**
   * @example
   * member
   */
  roleCode?: string;
  /**
   * @example
   * Member
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      clientName: 'clientName',
      roleCode: 'roleCode',
      roleName: 'roleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'number',
      clientName: 'string',
      roleCode: 'string',
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

