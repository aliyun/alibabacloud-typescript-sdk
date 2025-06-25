// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetViewObjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The owner of the view.
   * 
   * @example
   * admin
   */
  filterOwner?: string;
  /**
   * @remarks
   * The name of the view.
   * 
   * @example
   * test_filter
   */
  filterViewName?: string;
  /**
   * @remarks
   * The type of the view.
   * 
   * Valid values:
   * 
   * \\-VIRTUAL_VIEW
   * 
   * \\-MATERIALIZED_VIEW
   * 
   * Default value: null.
   * 
   * @example
   * VIRTUAL_VIEW
   */
  filterViewType?: string;
  /**
   * @remarks
   * The order in which you want to sort the query results. Valid values for Type:
   * 
   * *   Asc
   * *   Desc
   * 
   * Valid values for Field: -ViewName
   * 
   * \\-CreateTime
   * 
   * \\-UpdateTime
   * 
   * Default value: {"Type": "Desc","Field": "ViewName"}.
   * 
   * @example
   * {"Type": "Desc","Field": "ViewName"}
   */
  orderBy?: string;
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
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
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
  /**
   * @example
   * true
   */
  showMvBaseTable?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      filterOwner: 'FilterOwner',
      filterViewName: 'FilterViewName',
      filterViewType: 'FilterViewType',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
      showMvBaseTable: 'ShowMvBaseTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      filterOwner: 'string',
      filterViewName: 'string',
      filterViewType: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      schemaName: 'string',
      showMvBaseTable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

