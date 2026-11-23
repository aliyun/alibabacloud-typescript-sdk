// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountAuthorityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database account.
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
   * - **true**: DDL is allowed.
   * - **false**: DDL is not allowed.
   * 
   * @example
   * true
   */
  ddlAuthority?: boolean;
  /**
   * @remarks
   * Indicates whether the account has DML permissions. Valid values:
   * 
   * - **all**: Read, write, and settings permissions.
   * - **readOnly,modify**: Read and settings permissions.
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
   * The list of all databases.
   */
  totalDatabases?: string[];
  /**
   * @remarks
   * The list of all dictionaries.
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

