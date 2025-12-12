// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequestDmlAuthSetting extends $dara.Model {
  /**
   * @remarks
   * The databases on which you want to grant permissions. Separate multiple databases with commas (,).
   */
  allowDatabases?: string[];
  /**
   * @remarks
   * The dictionaries on which you want to grant permissions. Separate multiple dictionaries with commas (,).
   */
  allowDictionaries?: string[];
  /**
   * @remarks
   * Specifies whether to grant the DDL permissions to the database account. Valid values:
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
   * Specifies whether to grant the DML permissions to the database account. Valid values:
   * 
   * *   **0**: The account has the permissions to read data from the database, write data to the database, and modify the settings of the database.
   * *   **1**: The account only has the permissions to read data from the database.
   * *   **2**: The account only has the permissions to read data from the database and modify the settings of the database.
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

export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  account?: string;
  /**
   * @remarks
   * The type of the database account. Valid values:
   * 
   * *   **NormalAccount**: standard account
   * *   **SuperAccount**: privileged account
   * 
   * This parameter is required.
   * 
   * @example
   * NormalAccount
   */
  accountType?: string;
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
   * The description of the account.
   * 
   * @example
   * Used for account
   */
  description?: string;
  /**
   * @remarks
   * The information about permissions.
   */
  dmlAuthSetting?: CreateAccountRequestDmlAuthSetting;
  /**
   * @remarks
   * The password of the database account. The password must meet the following requirements:
   * 
   * - The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * - The following special characters are supported: ! @ # $ % ^ & * ( ) _ + - =
   * - The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * a1b2c3d4@
   */
  password?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * clickhouse
   */
  product?: string;
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
      accountType: 'AccountType',
      DBInstanceId: 'DBInstanceId',
      description: 'Description',
      dmlAuthSetting: 'DmlAuthSetting',
      password: 'Password',
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      accountType: 'string',
      DBInstanceId: 'string',
      description: 'string',
      dmlAuthSetting: CreateAccountRequestDmlAuthSetting,
      password: 'string',
      product: 'string',
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

