// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account.
   * - Cannot start with `http://` or `https://`.
   * - Cannot exceed 256 characters in length.
   * 
   * @example
   * Database connection test account
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account. The name must meet the following requirements:
   * - Starts with a lowercase letter and ends with a lowercase letter or digit.
   * - Contains only lowercase letters, digits, or underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the database account.
   * - Must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * - Special characters include: `!@#$%^&*()_+-=`
   * - Must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Test_accout1
   */
  accountPassword?: string;
  /**
   * @remarks
   * The type of the account. Valid values:
   * - **Normal**: standard account.
   * - **Super**: privileged account.
   * 
   * This parameter is required.
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * - **AnalyticDB** (default): the AnalyticDB for MySQL engine.
   * - **Clickhouse**: the wide table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  promqlInsertPrivileges?: string[];
  promqlSelectNodePercentage?: number;
  promqlSelectPrivileges?: string[];
  /**
   * @remarks
   * The list of Alibaba Cloud RAM user IDs to bind. Currently, only one RAM user can be bound.
   */
  ramUserList?: string[];
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountType: 'AccountType',
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
      promqlInsertPrivileges: 'PromqlInsertPrivileges',
      promqlSelectNodePercentage: 'PromqlSelectNodePercentage',
      promqlSelectPrivileges: 'PromqlSelectPrivileges',
      ramUserList: 'RamUserList',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountType: 'string',
      DBClusterId: 'string',
      engine: 'string',
      promqlInsertPrivileges: { 'type': 'array', 'itemType': 'string' },
      promqlSelectNodePercentage: 'number',
      promqlSelectPrivileges: { 'type': 'array', 'itemType': 'string' },
      ramUserList: { 'type': 'array', 'itemType': 'string' },
      resourceGroupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.promqlInsertPrivileges)) {
      $dara.Model.validateArray(this.promqlInsertPrivileges);
    }
    if(Array.isArray(this.promqlSelectPrivileges)) {
      $dara.Model.validateArray(this.promqlSelectPrivileges);
    }
    if(Array.isArray(this.ramUserList)) {
      $dara.Model.validateArray(this.ramUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

