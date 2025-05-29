// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * testuser
   */
  accountName?: string;
  /**
   * @remarks
   * The type of the database account that you want to query. Valid values: Super, Normal, and All. Default value: Super. If you set this parameter to Super, the information about the privileged account is returned. If you set this parameter to Normal, the information about all standard accounts is returned. If you set this parameter to All, the information about all database accounts is returned.
   * 
   * @example
   * Super
   */
  accountType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'string',
      DBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

