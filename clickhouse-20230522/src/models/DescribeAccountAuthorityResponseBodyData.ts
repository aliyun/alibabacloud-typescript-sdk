// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountAuthorityResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * test1
   */
  account?: string;
  /**
   * @remarks
   * The databases on which permissions are granted.
   */
  allowDatabases?: string[];
  /**
   * @remarks
   * The dictionaries on which permissions are granted.
   */
  allowDictionaries?: string[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Indicates whether the DDL permissions are granted to the database account. Valid values:
   * 
   * *   **true**: The account has the permissions to execute DDL statements.
   * *   **false**: The account does not have the permissions to execute DDL statements.
   * 
   * @example
   * true
   */
  ddlAuthority?: boolean;
  /**
   * @remarks
   * Indicates whether the DML permissions are granted to the database account. Valid values:
   * 
   * *   0: The account has the permissions to read data from the database, write data to the database, and modify the settings of the database.
   * *   1: The account only has the permissions to read data from the database.
   * *   2: The account only has the permissions to read data from the database and modify the settings of the database.
   * 
   * @example
   * 0
   */
  dmlAuthority?: number;
  /**
   * @remarks
   * All databases.
   */
  totalDatabases?: string[];
  /**
   * @remarks
   * The database.
   */
  totalDictionaries?: string[];
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      allowDatabases: 'AllowDatabases',
      allowDictionaries: 'AllowDictionaries',
      DBInstanceId: 'DBInstanceId',
      ddlAuthority: 'DdlAuthority',
      dmlAuthority: 'DmlAuthority',
      totalDatabases: 'TotalDatabases',
      totalDictionaries: 'TotalDictionaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      allowDatabases: { 'type': 'array', 'itemType': 'string' },
      allowDictionaries: { 'type': 'array', 'itemType': 'string' },
      DBInstanceId: 'string',
      ddlAuthority: 'boolean',
      dmlAuthority: 'number',
      totalDatabases: { 'type': 'array', 'itemType': 'string' },
      totalDictionaries: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.allowDatabases)) {
      $dara.Model.validateArray(this.allowDatabases);
    }
    if(Array.isArray(this.allowDictionaries)) {
      $dara.Model.validateArray(this.allowDictionaries);
    }
    if(Array.isArray(this.totalDatabases)) {
      $dara.Model.validateArray(this.totalDatabases);
    }
    if(Array.isArray(this.totalDictionaries)) {
      $dara.Model.validateArray(this.totalDictionaries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

