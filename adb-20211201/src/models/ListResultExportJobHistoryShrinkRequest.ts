// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResultExportJobHistoryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (3.0) clusters in the specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-7xv5ty5m9o4v****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database user.
   * 
   * @example
   * test1
   */
  databaseUser?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2023-05-25T06:54:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The sorting conditions for SQL statements based on specified fields. The value is in JSON format and is an ordered JSON array that specifies composite sorting based on the sequence of the input array. The array contains the `Field` and `Type` fields. Example: `[{"Field":"CreateTimee", "Type": "desc" }]`. Details:
   * 
   * - `Field`: the name of the field by which to sort the statements. Valid values:
   *     - `CreateTime`: the execution start time.
   *     - `Status`: the execution status.
   *     - `DatabaseUser`: the username.
   *     - `TimeCost`: the execution duration.
   *     - `ResourceGroup`: the resource group.
   *     - `ExportRows`: the number of exported rows.
   *     - `Progress`: the export progress.
   * 
   * 
   * - `Type`: the sorting type. Valid values (case-insensitive):
   *     - `Desc`: descending order.
   *     - `Asc`: ascending order.
   */
  orderShrink?: string;
  /**
   * @remarks
   * The page number. The value must be an integer greater than 0 and less than or equal to the maximum value of the Integer data type.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * - **30** (default)
   * - **50**
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the regions and zones supported by AnalyticDB for MySQL, including region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group in which the task is executed. You can filter tasks by resource group.
   * 
   * @example
   * user_default
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the <i>yyyy-MM-ddTHH:mm:ssZ</i> format. The time must be in UTC.
   * 
   * @example
   * 2022-01-01T12:01:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The list of task execution statuses. You can filter tasks by status.
   */
  statusListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      databaseUser: 'DatabaseUser',
      endTime: 'EndTime',
      orderShrink: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroup: 'ResourceGroup',
      startTime: 'StartTime',
      statusListShrink: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      databaseUser: 'string',
      endTime: 'string',
      orderShrink: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      resourceGroup: 'string',
      startTime: 'string',
      statusListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

