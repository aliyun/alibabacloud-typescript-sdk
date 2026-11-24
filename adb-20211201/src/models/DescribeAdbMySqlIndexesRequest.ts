// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdbMySqlIndexesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster ID of the Data Warehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/612393.html) operation to query the region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * tpch_oss
   */
  schema?: string;
  /**
   * @remarks
   * The name of the target table.
   * > If this parameter is left empty, the usage frequency data of all tables in the target cluster on the current day is returned.
   * 
   * @example
   * orders
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      schema: 'Schema',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      schema: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

