// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTenantUserRolesRequest extends $dara.Model {
  globalPermissions?: string;
  /**
   * @remarks
   * The type of the privilege modification operation.   
   * Valid values:  
   * update: updates all privileges. This is the default value.  
   * add: adds a privilege.  
   * delete: deletes a privilege.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * update
   */
  modifyType?: string;
  /**
   * @remarks
   * The operation that you want to perform.   
   * Set the value to **ModifyTenantUserRoles**.
   * 
   * This parameter is required.
   * 
   * @example
   * ob2mr3oae0****
   */
  tenantId?: string;
  /**
   * @remarks
   * The role of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * pay_test
   */
  userName?: string;
  /**
   * @remarks
   * The type of the account. Valid values:   
   * - Admin: the super administrator account.   
   * - Normal: a general account.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"Database":"20210824160559","Role":"readwrite"}]
   */
  userRole?: string;
  /**
   * @example
   * Normal
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      globalPermissions: 'GlobalPermissions',
      instanceId: 'InstanceId',
      modifyType: 'ModifyType',
      tenantId: 'TenantId',
      userName: 'UserName',
      userRole: 'UserRole',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalPermissions: 'string',
      instanceId: 'string',
      modifyType: 'string',
      tenantId: 'string',
      userName: 'string',
      userRole: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

