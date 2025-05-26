// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableObjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1565u55p32****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The description of the table.
   * 
   * @example
   * description
   */
  filterDescription?: string;
  /**
   * @remarks
   * The owner of the table.
   * 
   * @example
   * admin
   */
  filterOwner?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_tbl
   */
  filterTblName?: string;
  /**
   * @remarks
   * The type of the table.
   * 
   * Valid values:
   * 
   * DIMENSION_TABLE
   * 
   * FACT_TABLE
   * 
   * EXTERNAL_TABLE
   * 
   * Default value: null.
   * 
   * @example
   * FACT_TABLE
   */
  filterTblType?: string;
  /**
   * @remarks
   * The order in which the fields to be returned are sorted.
   * 
   * Valid values:
   * 
   * *   Asc
   * *   Desc
   * 
   * Values for fields:
   * 
   * TableName
   * 
   * TableSize
   * 
   * CreateTime
   * 
   * UpdateTime
   * 
   * Default value: {"Type": "Desc","Field": "TableName"};
   * 
   * @example
   * {"Type": "Desc","Field": "TableName"}
   */
  orderBy?: string;
  /**
   * @remarks
   * The number of the page to return. The value is an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
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
   * The ID of the region in which the cluster resides.
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
   * adb_demo
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      filterDescription: 'FilterDescription',
      filterOwner: 'FilterOwner',
      filterTblName: 'FilterTblName',
      filterTblType: 'FilterTblType',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      filterDescription: 'string',
      filterOwner: 'string',
      filterTblName: 'string',
      filterTblType: 'string',
      orderBy: 'string',
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

