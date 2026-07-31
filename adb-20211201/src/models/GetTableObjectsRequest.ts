// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableObjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1565u55p32****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * description
   */
  filterDescription?: string;
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * admin
   */
  filterOwner?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * test_tbl
   */
  filterTblName?: string;
  /**
   * @remarks
   * The table type.
   * Valid values:
   * 
   * - DIMENSION_TABLE
   * - FACT_TABLE
   * - EXTERNAL_TABLE
   * 
   * Default value: null.
   * 
   * @example
   * FACT_TABLE
   */
  filterTblType?: string;
  /**
   * @remarks
   * The sorting field.
   * 
   * Valid values for Type:
   * - Asc
   * - Desc
   * 
   * Valid values for Field:
   * - TableName
   * - TableSize
   * - CreateTime
   * - UpdateTime
   * 
   * Default value: {"Type": "Desc","Field": "TableName"}.
   * 
   * @example
   * {"Type": "Desc","Field": "TableName"}
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - 30
   * - 50
   * - 100
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

