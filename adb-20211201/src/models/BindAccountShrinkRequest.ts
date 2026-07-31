// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAccountShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A standard database account.
   * 
   * This parameter is required.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * ID of the cluster. Applies to Enterprise Edition, Basic Edition, or Data Lakehouse Edition clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz99d9nh532****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * ID of the Alibaba Cloud RAM user to bind.
   * 
   * @example
   * 1444832459****
   */
  ramUser?: string;
  /**
   * @remarks
   * List of Alibaba Cloud RAM user IDs to bind. You can bind only one RAM user at a time. If you specify this parameter, the RamUser parameter is ignored.
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

