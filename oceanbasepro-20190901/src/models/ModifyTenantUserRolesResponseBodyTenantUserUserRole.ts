// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTenantUserRolesResponseBodyTenantUserUserRole extends $dara.Model {
  /**
   * @remarks
   * ```
   * http(s)://[Endpoint]/?Action=ModifyTenantUserRoles
   * &UserName=pay_test
   * &TenantId=ob2mr3oae0****
   * &UserRole=[{"Database":"20210824160559","Role":"readwrite"}]
   * &InstanceId=ob317v4uif****
   * &ModifyType=update
   * &Common request parameters
   * ```
   * 
   * @example
   * db_pay1
   */
  database?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * You can call this operation to modify the database privileges of a specified account in a tenant.
   * 
   * @example
   * ReadOnly
   */
  role?: string;
  /**
   * @example
   * tbl_pay1
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      isSuccess: 'IsSuccess',
      role: 'Role',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      isSuccess: 'boolean',
      role: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

