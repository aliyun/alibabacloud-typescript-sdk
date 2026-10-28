// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account. The description must meet the following requirements:
   * - It cannot start with `http://` or `https://`.
   * - It can be up to 256 characters in length.
   * 
   * @example
   * Database connection test account
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account. The name must meet the following requirements:
   * - It must start with a lowercase letter and end with a lowercase letter or a digit.
   * - It can contain only lowercase letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the database account. The password must meet the following requirements:
   * - It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * - Special characters include: `!@#$%^&*()_+-=`
   * - It must be 8 to 32 characters in length.
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
   * - **AnalyticDB** (default): AnalyticDB for MySQL engine.
   * - **Clickhouse**: wide table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  /**
   * @remarks
   * The list of PromQL write permissions.
   */
  promqlInsertPrivileges?: string[];
  /**
   * @remarks
   * The percentage of PromQL query nodes.
   * 
   * @example
   * 0.6
   */
  promqlSelectNodePercentage?: number;
  /**
   * @remarks
   * The list of PromQL query permissions.
   */
  promqlSelectPrivileges?: string[];
  /**
   * @remarks
   * The IDs of the Alibaba Cloud Resource Access Management (RAM) users to bind. Currently, only one RAM user can be bound.
   */
  ramUserList?: string[];
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test_group
   */
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

