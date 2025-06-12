// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountAuthorityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * Databases to which permissions have been granted.
   */
  allowDatabases?: string[];
  /**
   * @remarks
   * Dictionaries to which permissions have been granted.
   */
  allowDictionaries?: string[];
  /**
   * @remarks
   * Indicates whether the database account has DDL permissions. Valid values:
   * 
   * *   **true**: has DDL permissions.
   * *   **false**: does not have DDL permissions.
   * 
   * @example
   * true
   */
  ddlAuthority?: boolean;
  /**
   * @remarks
   * Indicates whether the database account has DML permissions. Valid values:
   * 
   * *   **all**
   * *   **readOnly,modify**
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
   * All databases.
   */
  totalDatabases?: string[];
  /**
   * @remarks
   * All dictionaries.
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

