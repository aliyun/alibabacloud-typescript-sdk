// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabasesResponseBodyDatabasesUsers extends $dara.Model {
  /**
   * @remarks
   * If you have granted custom privileges on the database, this parameter indicates the custom privileges, separated by commas (,). Otherwise, no data is returned for this parameter.
   * 
   * @example
   * select,delete,update
   */
  privileges?: string;
  /**
   * @remarks
   * The role of the account.    
   * In MySQL mode, a role is a database-level role. Valid values:  
   * - ReadWrite: a role that has the read and write privileges, namely ALL PRIVILEGES.  
   * - ReadOnly: a role that has only the read-only privilege SELECT.   
   * - DDL: a role that has the DDL privileges such as CREATE, DROP, ALTER, SHOW VIEW, and CREATE VIEW.   
   * - DML: a role that has the DML privileges such as SELECT, INSERT, UPDATE, DELETE, and SHOW VIEW.
   * 
   * @example
   * ReadOnly
   */
  role?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * user_pay_ro
   */
  userName?: string;
  /**
   * @remarks
   * The type of the account. Valid values:  
   * - Admin: the super administrator account. 
   * - Normal: a general account.
   * 
   * @example
   * Normal
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      privileges: 'Privileges',
      role: 'Role',
      userName: 'UserName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privileges: 'string',
      role: 'string',
      userName: 'string',
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

