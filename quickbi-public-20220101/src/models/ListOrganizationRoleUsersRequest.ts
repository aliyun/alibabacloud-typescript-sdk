// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationRoleUsersRequest extends $dara.Model {
  /**
   * @remarks
   * Keyword for the nickname of the organization member.
   * 
   * @example
   * zhangsan
   */
  keyword?: string;
  /**
   * @remarks
   * Page number.
   * 
   * - Default value is 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of items per page.
   * - Default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Organization role ID, including predefined roles and custom roles:
   * 
   * - Organization Administrator (predefined role): 111111111
   * - Permission Administrator (predefined role): 111111112
   * - Regular User (predefined role): 111111113
   * - Custom Role: The corresponding role ID for a custom role
   * 
   * This parameter is required.
   * 
   * @example
   * 111111111
   */
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      roleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

