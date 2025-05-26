// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResultExportJobHistoryRequestOrder } from "./ListResultExportJobHistoryRequestOrder";


export class ListResultExportJobHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-7xv5ty5m9o4v****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * test1
   */
  databaseUser?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time.
   * 
   * @example
   * 2023-05-25T06:54:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The order in which to sort the SQL statements by field, which contains the `Field` and `Type` fields. Specify the order in the JSON format. Example: `[{"Field":"CreateTimee", "Type": "desc" }]`.
   * 
   * *   `Field` specifies the field that is used to sort the SQL statements. Valid values:
   * 
   *     *   `CreateTime`: the time when the result set export job was created.
   *     *   `Status`: the execution status.
   *     *   `DatabaseUser`: the name of the database account.
   *     *   `TimeCost`: the execution duration.
   *     *   `ResourceGroup`: the name of the resource group.
   *     *   `ExportRows`: the number of exported rows.
   *     *   `Progress`: the export progress.
   * 
   * *   `Type` specifies the sorting order. Valid values (case-insensitive):
   * 
   *     *   `Desc`: descending order.
   *     *   `Asc`: ascending order.
   */
  order?: ListResultExportJobHistoryRequestOrder;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
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
  pageSize?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the resource group that runs the result set export jobs. You can use this parameter to query the execution records of export jobs that are run in a specific resource group.
   * 
   * @example
   * user_default
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * @example
   * 2022-01-01T12:01:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The execution status of result set export jobs. You can use this parameter to query the execution records of export jobs that are in a specific state.
   */
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      databaseUser: 'DatabaseUser',
      endTime: 'EndTime',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroup: 'ResourceGroup',
      startTime: 'StartTime',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      databaseUser: 'string',
      endTime: 'string',
      order: ListResultExportJobHistoryRequestOrder,
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      resourceGroup: 'string',
      startTime: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.order && typeof (this.order as any).validate === 'function') {
      (this.order as any).validate();
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

