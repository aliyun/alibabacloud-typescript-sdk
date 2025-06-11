// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTenantUsersResponseBodyTenantUsers } from "./DescribeTenantUsersResponseBodyTenantUsers";


export class DescribeTenantUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the database account. Valid values:    
   * - Admin: the super administrator account.   
   * - NORMAL: a general account.
   */
  tenantUsers?: DescribeTenantUsersResponseBodyTenantUsers[];
  /**
   * @remarks
   * The role of the account.   
   * In Oracle mode, a role is a schema-level role. Valid values:  
   * - ReadWrite: a role that has the read and write privileges, including: CREATE TABLE, CREATE VIEW, CREATE PROCEDURE, CREATE SYNONYM, CREATE SEQUENCE, CREATE TRIGGER, CREATE TYPE, CREATE SESSION, EXECUTE ANY PROCEDURE, CREATE ANY OUTLINE, ALTER ANY OUTLINE, DROP ANY OUTLINE, CREATE ANY PROCEDURE, ALTER ANY PROCEDURE, DROP ANY PROCEDURE, CREATE ANY SEQUENCE, ALTER ANY SEQUENCE, DROP ANY SEQUENCE, CREATE ANY TYPE, ALTER ANY TYPE, DROP ANY TYPE, SYSKM, CREATE ANY TRIGGER, ALTER ANY TRIGGER, DROP ANY TRIGGER, CREATE PROFILE, ALTER PROFILE, and DROP PROFILE.  
   * - ReadOnly: a role that has only the read-only privilege SELECT.
   * In MySQL mode, a role is a database-level role. Valid values: 
   * - ReadWrite: a role that has the read and write privileges, namely ALL PRIVILEGES.   
   * - ReadOnly: a role that has only the read-only privilege SELECT.   
   * - DDL: a role that has the DDL privileges such as CREATE, DROP, ALTER, SHOW VIEW, and CREATE VIEW.   
   * - DML: a role that has the DML privileges such as SELECT, INSERT, UPDATE, DELETE, and SHOW VIEW.   
   * 
   * > <br>By default, an Oracle account has the read and write privileges on its own schema, which are not listed here.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantUsers: 'TenantUsers',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantUsers: { 'type': 'array', 'itemType': DescribeTenantUsersResponseBodyTenantUsers },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tenantUsers)) {
      $dara.Model.validateArray(this.tenantUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

