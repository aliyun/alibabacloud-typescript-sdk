// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRbacRolePermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WS20250731233102000001
   */
  bizId?: string;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * @example
   * gmtCreated
   */
  orderColumn?: string;
  /**
   * @remarks
   * The sort order. Valid values: ASC and DESC.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The organization role ID, including predefined roles and custom roles:
   * 
   * - Organization administrator (predefined role): 111111111
   * - Permission management administrator (predefined role): 111111112
   * - Regular user (predefined role): 111111113
   * - Custom role: the role ID of the custom role
   * 
   * @example
   * 75b2f16f-35a5-4e90-949f-295ea14a4dc8
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      orderColumn: 'OrderColumn',
      orderType: 'OrderType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      orderColumn: 'string',
      orderType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      roleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

