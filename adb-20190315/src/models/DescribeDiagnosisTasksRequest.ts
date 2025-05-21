// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The IP address from which the query was initiated.
   * 
   * @example
   * 192.168.XX.XX
   */
  host?: string;
  /**
   * @remarks
   * The order in which to sort the tasks by field. Specify the value in the JSON format. Example: `[{"Field":"CreateTime", "Type":"desc"}]`.
   * 
   * > 
   * 
   * *   `Field` specifies the field that is used to sort the tasks. Valid values of Field: `State`, `CreateTime`, `DBName`, `ProcessID`, `UpdateTime`, `JobName`, and `ProcessRows`.
   * 
   * *   `Type` specifies the sort order. Valid values of Type: `Desc` and `Asc`. The values are case-insensitive.
   * 
   * @example
   * [{"Field":"StartTime", "Type": "desc" }]
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
   * The number of entries per page. Valid values:
   * 
   * *   30 (default)
   * *   50
   * *   100
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The query ID.
   * 
   * > You can call the [DescribeProcessList](https://help.aliyun.com/document_detail/190092.html) operation to query the IDs of queries that are being executed.
   * 
   * This parameter is required.
   * 
   * @example
   * 202011191048151921681492420315100****
   */
  processId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of a stage in the query that is specified by the `ProcessId` parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * Stage[26]
   */
  stageId?: string;
  /**
   * @remarks
   * The state of the asynchronous import or export task to be queried. Valid values:
   * 
   * *   **RUNNING**
   * *   **FINISHED**
   * *   **FAILED**
   * 
   * @example
   * RUNNING
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      host: 'Host',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      processId: 'ProcessId',
      regionId: 'RegionId',
      stageId: 'StageId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      host: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      processId: 'string',
      regionId: 'string',
      stageId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

