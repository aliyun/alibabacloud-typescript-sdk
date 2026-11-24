// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeViewJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * am-bp1ub9grke1****
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
   * The name of the view.
   * 
   * @example
   * test_mv
   */
  filterViewName?: string;
  /**
   * @remarks
   * The view type. Valid values:
   * - VIRTUAL_VIEW
   * - MATERIALIZED_VIEW
   * Default value: empty.
   * 
   * @example
   * MATERIALIZED_VIEW
   */
  filterViewType?: string;
  /**
   * @remarks
   * The sort field. Valid values for the sort order:
   * - Asc
   * - Desc
   * Valid values for the field:
   * - StartTime
   * - EndTime
   * - ScheduledStartTime
   * 
   * @example
   * {\\"Field\\":\\"StartTime\\",\\"Type\\":\\"Desc\\"}
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
   * The number of entries per page.
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
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * demo_db
   */
  schemaName?: string;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

