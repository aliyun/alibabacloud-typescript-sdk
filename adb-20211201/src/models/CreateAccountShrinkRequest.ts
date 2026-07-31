// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the account.
   * - Cannot start with `http://` or `https://`.
   * - Cannot exceed 256 characters in length.
   * 
   * @example
   * 数据库连接测试账号
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
   * - **AnalyticDB** (default): AnalyticDB for MySQL engine.
   * - **Clickhouse**: wide table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  /**
   * @remarks
   * The list of Alibaba Cloud Resource Access Management (RAM) user IDs to attach. Currently, only one RAM user can be attached.
   */
  ramUserListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountType: 'AccountType',
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
      ramUserListShrink: 'RamUserList',
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
      ramUserListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

