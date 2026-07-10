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
   * A list of authorized databases.
   */
  allowDatabases?: string[];
  /**
   * @remarks
   * A list of authorized dictionaries.
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
   * Indicates whether DDL permissions are granted to the database account. Valid values:
   * 
   * - **true**: DDL operations are allowed.
   * 
   * - **false**: DDL operations are prohibited.
   * 
   * @example
   * true
   */
  ddlAuthority?: boolean;
  /**
   * @remarks
   * The DML permissions that are granted to the database account. Valid values:
   * 
   * - 0: Read, write, and change settings queries are allowed.
   * 
   * - 1: Only read data queries are allowed.
   * 
   * - 2: Read data and change settings queries are allowed.
   * 
   * @example
   * 0
   */
  dmlAuthority?: number;
  /**
   * @remarks
   * A list of all databases.
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

export class DescribeAccountAuthorityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeAccountAuthorityResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC911****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeAccountAuthorityResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

