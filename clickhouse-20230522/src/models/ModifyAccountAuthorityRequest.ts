// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountAuthorityRequestDmlAuthSetting extends $dara.Model {
  /**
   * @remarks
   * The list of databases to be authorized. Separate multiple databases with commas (,).
   */
  allowDatabases?: string[];
  /**
   * @remarks
   * The list of dictionaries to be authorized. Separate multiple dictionaries with commas (,).
   */
  allowDictionaries?: string[];
  /**
   * @remarks
   * Specifies whether to grant DDL permissions to the database account. Valid values:
   * 
   * - **true**: DDL is allowed.
   * - **false**: DDL is not allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  ddlAuthority?: boolean;
  /**
   * @remarks
   * Specifies whether to grant DML permissions to the database account. Valid values:
   * 
   * - **0**: Read, write, and change settings queries are allowed.
   * 
   * - **1**: Only read data queries are allowed.
   * 
   * - **2**: Read data and change settings queries are allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  dmlAuthority?: number;
  static names(): { [key: string]: string } {
    return {
      allowDatabases: 'AllowDatabases',
      allowDictionaries: 'AllowDictionaries',
      ddlAuthority: 'DdlAuthority',
      dmlAuthority: 'DmlAuthority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowDatabases: { 'type': 'array', 'itemType': 'string' },
      allowDictionaries: { 'type': 'array', 'itemType': 'string' },
      ddlAuthority: 'boolean',
      dmlAuthority: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.allowDatabases)) {
      $dara.Model.validateArray(this.allowDatabases);
    }
    if(Array.isArray(this.allowDictionaries)) {
      $dara.Model.validateArray(this.allowDictionaries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountAuthorityRequest extends $dara.Model {
  /**
   * @remarks
   * The database account.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  account?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The authorization information.
   * 
   * This parameter is required.
   */
  dmlAuthSetting?: ModifyAccountAuthorityRequestDmlAuthSetting;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      DBInstanceId: 'DBInstanceId',
      dmlAuthSetting: 'DmlAuthSetting',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      DBInstanceId: 'string',
      dmlAuthSetting: ModifyAccountAuthorityRequestDmlAuthSetting,
      regionId: 'string',
    };
  }

  validate() {
    if(this.dmlAuthSetting && typeof (this.dmlAuthSetting as any).validate === 'function') {
      (this.dmlAuthSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

