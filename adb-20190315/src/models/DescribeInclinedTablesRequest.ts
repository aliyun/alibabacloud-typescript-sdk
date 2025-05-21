// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInclinedTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-k2jofo4pi5zhd****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The language in which you want to send requests and receive messages. Default value: zh. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The order by which to sort query results. Specify the parameter value in the JSON format.
   * 
   * Example:
   * 
   * ```
   * [
   * 
   *     {
   * 
   *         "Field":"Name",
   * 
   *         "Type":"Asc"
   * 
   *     }
   * 
   * ]
   * ```
   * 
   * Field specifies the field by which to sort the query results. Set the value to Name. Type specifies the sorting order. Valid values: Desc and Asc.
   * 
   * Field and Type are case-insensitive.
   * 
   * @example
   * [      {          "Field":"Name",          "Type":"Asc"      }  ]
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
   * - 30；
   * - 50；
   * - 100；
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
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the table. Valid values:
   * 
   * 
   * - **FactTable**: the partitioned table.
   * - **DimensionTable**: the dimension table.
   * 
   * This parameter is required.
   * 
   * @example
   * FactTable
   */
  tableType?: string;
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
      tableType: 'TableType',
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
      tableType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

