// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy search by table name is supported.
   * 
   * @example
   * you_table_name
   */
  keyword?: string;
  /**
   * @remarks
   * The sorting rule for a specified field. The value is a JSON array. The array is ordered. Specify the fields to be sorted and the sorting order in sequence:
   * 
   * For example:
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
   * Field specifies the name of the field to be sorted. Only the Name field is supported.
   * Type specifies the sorting order. Desc indicates descending order, and Asc indicates ascending order.
   * 
   * Both parameters are case-insensitive.
   * 
   * @example
   * [{"Field":"SchemaName","Type":"Desc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/612393.html) operation to query the region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * test
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      keyword: 'Keyword',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      keyword: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      schemaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

