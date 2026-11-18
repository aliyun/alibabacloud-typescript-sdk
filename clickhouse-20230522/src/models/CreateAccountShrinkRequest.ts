// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountShrinkRequest extends $dara.Model {
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
  dmlAuthSettingShrink?: string;
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
      dmlAuthSettingShrink: 'DmlAuthSetting',
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
      dmlAuthSettingShrink: 'string',
      password: 'string',
      product: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

