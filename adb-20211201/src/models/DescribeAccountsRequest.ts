// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The database account.
   * > If you do not specify this parameter, the information about all database accounts is returned by default.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * <props="china">The ID of the cluster. The cluster can be of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition.
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
   * - **AnalyticDB** (default): AnalyticDB for MySQL engine
   * - **Clickhouse**: wide-table engine
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  ownerId?: string;
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
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
      ownerId: 'OwnerId',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      engine: 'string',
      ownerId: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

