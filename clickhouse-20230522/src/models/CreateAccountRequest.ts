// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequestDmlAuthSetting extends $dara.Model {
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
   * Specifies whether to grant Data Definition Language (DDL) permissions to the database account. Valid values:
   * 
   * - **true**: Allows DDL operations.
   * - **false**: Prohibits DDL operations.
   * 
   * @example
   * true
   */
  ddlAuthority?: boolean;
  /**
   * @remarks
   * Specifies whether to grant Data Manipulation Language (DML) permissions to the database account. Valid values:
   * - **0**: Allows queries for reading, writing, and changing settings.
   * - **1**: Allows only queries for reading data.
   * - **2**: Allows queries for reading data and changing settings.
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
   * The database account. The name must meet the following requirements:
   * - The name must be unique.
   * - The name can contain lowercase letters, digits, and underscores (_).
   * - The name must start with a lowercase letter and end with a lowercase letter or a digit.
   * - The name must be 2 to 64 characters in length.
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
   * - **NormalAccount**: standard account.
   * - **SuperAccount**: privileged account.
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
   * The description.
   * 
   * @example
   * For testing purposes
   */
  description?: string;
  /**
   * @remarks
   * The authorization information.
   */
  dmlAuthSetting?: CreateAccountRequestDmlAuthSetting;
  /**
   * @remarks
   * The password of the database account. The password must meet the following requirements:
   * 
   * - The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * - Special characters include !@#$%^&*()_+-=.
   * 
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
   * The product code.
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

