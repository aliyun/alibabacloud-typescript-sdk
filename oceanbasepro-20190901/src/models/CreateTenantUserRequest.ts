// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTenantUserRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the database.
   * 
   * @example
   * this is a test database
   */
  description?: string;
  /**
   * @remarks
   * 加密方式。
   * 
   * @example
   * RAS
   */
  encryptionType?: string;
  /**
   * @example
   * Encrypt,Decrypt
   */
  globalPermissions?: string;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The role of the user account.  In Oracle mode, this parameter unspecified is left unspecified.  In MySQL mode, the super administrator account has ALL PRIVILEGES, and you can leave this parameter unspecified.  You need to specify the account information for a general user account. By default, the account information is a JSON array that contains the information of the role and the schema (Oracle mode) or database (MySQL mode).  Valid values: ReadWrite: a role that has the read and write privileges, namely ALL PRIVILEGES. ReadOnly: a role that has only the read-only privilege SELECT. DDL: a role that has DDL privileges such as CREATE, DROP, ALTER, SHOW VIEW, and CREATE VIEW. DML: a role that has DML privileges such as SELECT, INSERT, UPDATE, DELETE, and SHOW VIEW.
   * 
   * @example
   * [{"Database":"oceanbase1","Role":"readwrite"},{"Database":"oceanbase2","Role":"readonly"}]
   */
  roles?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * ob2mr3oae0****
   */
  tenantId?: string;
  /**
   * @remarks
   * The name of the database account.  You cannot use reserved keywords, such as SYS and root.
   * 
   * This parameter is required.
   * 
   * @example
   * pay_test
   */
  userName?: string;
  /**
   * @remarks
   * The password of the database account.  It must be 10 to 32 characters in length and contain three types of the following characters: uppercase letters, lowercase letters, digits, and special characters. The special characters are ! @ # $ % \\ ^ \\ & \\ * ( ) _ + - =
   * 
   * This parameter is required.
   * 
   * @example
   * !Aliyun4Oceanbase
   */
  userPassword?: string;
  /**
   * @remarks
   * The type of the database account. Valid values: Admin: the super administrator account. Normal: a general account.
   * 
   * This parameter is required.
   * 
   * @example
   * Normal
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      encryptionType: 'EncryptionType',
      globalPermissions: 'GlobalPermissions',
      instanceId: 'InstanceId',
      roles: 'Roles',
      tenantId: 'TenantId',
      userName: 'UserName',
      userPassword: 'UserPassword',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      encryptionType: 'string',
      globalPermissions: 'string',
      instanceId: 'string',
      roles: 'string',
      tenantId: 'string',
      userName: 'string',
      userPassword: 'string',
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

