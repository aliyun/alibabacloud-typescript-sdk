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
   * 研发部
   */
  clientName?: string;
  /**
   * @example
   * member
   */
  roleCode?: string;
  /**
   * @example
   * 成员
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

