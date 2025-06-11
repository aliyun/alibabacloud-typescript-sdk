// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTenantUsersResponseBodyTenantUsersDatabases } from "./DescribeTenantUsersResponseBodyTenantUsersDatabases";


export class DescribeTenantUsersResponseBodyTenantUsers extends $dara.Model {
  databases?: DescribeTenantUsersResponseBodyTenantUsersDatabases[];
  /**
   * @example
   * use for test
   */
  description?: string;
  /**
   * @example
   * Encrypt,Decrypt
   */
  globalPermissions?: string;
  /**
   * @remarks
   * 所属集群Id
   * 
   * @example
   * obshc32****
   */
  instanceId?: string;
  /**
   * @remarks
   * 所属租户Id
   * 
   * @example
   * tshfs3****
   */
  tenantId?: string;
  /**
   * @example
   * pay_test
   */
  userName?: string;
  /**
   * @example
   * NORMAL
   */
  userStatus?: string;
  /**
   * @example
   * NORMAL
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      description: 'Description',
      globalPermissions: 'GlobalPermissions',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
      userName: 'UserName',
      userStatus: 'UserStatus',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': DescribeTenantUsersResponseBodyTenantUsersDatabases },
      description: 'string',
      globalPermissions: 'string',
      instanceId: 'string',
      tenantId: 'string',
      userName: 'string',
      userStatus: 'string',
      userType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

