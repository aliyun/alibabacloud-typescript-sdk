// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTablePartitionDiagnoseRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The order by which to sort query results. Specify the parameter value in the JSON string format. Example: `[{"Field":"TotalSize","Type":"Desc"}]`.
   * 
   * *   `Field` specifies the field by which to sort the query results. Valid values:
   * 
   *     *   `SchemaName`: the name of the database to which the table belongs.
   *     *   `TableName`: the name of the table.
   *     *   `TotalSize`: the total data size of the table.
   *     *   `SpaceRatio`: the storage percentage of the table.
   * 
   * *   `Type` specifies the sorting order. Valid values:
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * >  If you do not specify this parameter, the query results are sorted by the TotalSize field in descending order.
   * 
   * @example
   * [{\\"Field\\":\\"TotalSize\\",\\"Type\\":\\"Desc\\"}]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   30
   * *   50
   * *   100
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      lang: 'Lang',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      lang: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

