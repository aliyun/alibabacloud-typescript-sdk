// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAccountShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The standard database account.
   * 
   * This parameter is required.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz99d9nh532****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud RAM user to bind.
   * 
   * @example
   * 1444832459****
   */
  ramUser?: string;
  /**
   * @remarks
   * The list of IDs of the Alibaba Cloud RAM users to bind. Currently, only one RAM user can be bound. If you specify this parameter, the RamUser parameter does not take effect.
   */
  ramUserListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      ramUser: 'RamUser',
      ramUserListShrink: 'RamUserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      ramUser: 'string',
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

