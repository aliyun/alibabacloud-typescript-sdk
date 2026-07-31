// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNetInfoRequest extends $dara.Model {
  /**
   * @remarks
   * <props="china">The ID of an Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the details of clusters in a specific region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9dqvn0o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * - **AnalyticDB** (default): the AnalyticDB for MySQL engine.
   * 
   * - **ClickHouse**: the wide table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      engine: 'string',
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

