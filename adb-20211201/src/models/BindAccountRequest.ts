// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The standard account of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz99d9nh532****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * 1444832459****
   */
  ramUser?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      ramUser: 'RamUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      ramUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

