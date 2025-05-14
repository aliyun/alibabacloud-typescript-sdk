// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRolesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  buId?: number;
  /**
   * @example
   * admin
   */
  code?: string;
  /**
   * @example
   * 2020-01-03T20:25:33Z
   */
  createTime?: string;
  /**
   * @example
   * Admin
   */
  description?: string;
  /**
   * @example
   * 0
   */
  roleGroupId?: number;
  roleGroupName?: string;
  /**
   * @example
   * 1
   */
  roleId?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      buId: 'BuId',
      code: 'Code',
      createTime: 'CreateTime',
      description: 'Description',
      roleGroupId: 'RoleGroupId',
      roleGroupName: 'RoleGroupName',
      roleId: 'RoleId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buId: 'number',
      code: 'string',
      createTime: 'string',
      description: 'string',
      roleGroupId: 'number',
      roleGroupName: 'string',
      roleId: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

