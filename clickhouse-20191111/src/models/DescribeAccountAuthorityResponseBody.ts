// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountAuthorityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database account name.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The list of authorized databases.
   */
  allowDatabases?: string[];
  /**
   * @remarks
   * The list of authorized dictionaries.
   */
  allowDictionaries?: string[];
  /**
   * @remarks
   * Indicates whether the account has DDL permissions. Valid values:
   * 
   * - **true**: DDL permissions are granted.
   * 
   * - **false**: DDL permissions are denied.
   * 
   * @example
   * true
   */
  ddlAuthority?: boolean;
  /**
   * @remarks
   * The DML permission level for the account. Valid values:
   * 
   * - **all**: read, write, and settings permissions.
   * 
   * - **readOnly,modify**: read and settings permissions.
   * 
   * @example
   * all
   */
  dmlAuthority?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  /**
   * @remarks
   * A list of all databases in the cluster.
   */
  totalDatabases?: string[];
  /**
   * @remarks
   * A list of all dictionaries in the cluster.
   */
  totalDictionaries?: string[];
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      allowDatabases: 'AllowDatabases',
      allowDictionaries: 'AllowDictionaries',
      ddlAuthority: 'DdlAuthority',
      dmlAuthority: 'DmlAuthority',
      requestId: 'RequestId',
      totalDatabases: 'TotalDatabases',
      totalDictionaries: 'TotalDictionaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      allowDatabases: { 'type': 'array', 'itemType': 'string' },
      allowDictionaries: { 'type': 'array', 'itemType': 'string' },
      ddlAuthority: 'boolean',
      dmlAuthority: 'string',
      requestId: 'string',
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

