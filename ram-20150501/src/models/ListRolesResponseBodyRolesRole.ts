// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRolesResponseBodyRolesRoleTags } from "./ListRolesResponseBodyRolesRoleTags";


export class ListRolesResponseBodyRolesRole extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role.
   * 
   * @example
   * acs:ram::123456789012****:role/ECSAdmin
   */
  arn?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the RAM role.
   * 
   * @example
   * ECS administrator
   */
  description?: string;
  /**
   * @remarks
   * The maximum session duration of the RAM role.
   * 
   * @example
   * 3600
   */
  maxSessionDuration?: number;
  /**
   * @remarks
   * The ID of the RAM role.
   * 
   * @example
   * 901234567890****
   */
  roleId?: string;
  /**
   * @remarks
   * The name of the RAM role.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListRolesResponseBodyRolesRoleTags;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      createDate: 'CreateDate',
      description: 'Description',
      maxSessionDuration: 'MaxSessionDuration',
      roleId: 'RoleId',
      roleName: 'RoleName',
      tags: 'Tags',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      createDate: 'string',
      description: 'string',
      maxSessionDuration: 'number',
      roleId: 'string',
      roleName: 'string',
      tags: ListRolesResponseBodyRolesRoleTags,
      updateDate: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

