// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatabaseObjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp1565u55p32****
   */
  DBClusterId?: string;
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
   * The database name.
   * 
   * @example
   * test_db
   */
  filterSchemaName?: string;
  /**
   * @remarks
   * The sort field.
   * Valid values for Type:
   * - Asc
   * - Desc
   * 
   * Valid values for Field:
   * - DatabseName
   * - CreateTime
   * - UpdateTime
   * 
   * Default value: {"Type": "Desc","Field": "DatabaseName"}.
   * 
   * @example
   * {
   *       "Type": "Desc",
   *       "Field": "DatabaseName"
   * }
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0 and no greater than the maximum value of the Integer data type. Default value: **1**.
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
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      filterOwner: 'FilterOwner',
      filterSchemaName: 'FilterSchemaName',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      filterOwner: 'string',
      filterSchemaName: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

