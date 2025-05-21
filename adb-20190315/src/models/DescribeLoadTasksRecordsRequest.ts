// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadTasksRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters in a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp2590j****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database that is involved in the import or export task.
   * 
   * @example
   * adb_demo
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-05-18T06:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The order in which to sort the tasks by field. Specify the field and the sort order in the JSON format. Example: `[{"Field":"CreateTime", "Type":"desc"}]`.
   * 
   * > 
   * 
   * *   `Field` specifies the field that is used to sort the tasks. Valid values of Field: `State`, `CreateTime`, `DBName`, `ProcessID`, `UpdateTime`, `JobName`, and `ProcessRows`.
   * 
   * *   `Type` specifies the sort order. Valid values of Type: `Desc` and `Asc`. The values are case-insensitive.
   * 
   * @example
   * [{"Field":"CreateTime", "Type":"desc"}]
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
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * > We recommend that you set the query start time to any point in time within 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-05-18T06:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the asynchronous import or export task to be queried. Valid values:
   * 
   * *   **INIT**: The task is being initialized.
   * *   **RUNNING**: The task is running.
   * *   **FINISH**: The task is successful.
   * *   **FAILED**: The task fails.
   * 
   * @example
   * FINISH
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      endTime: 'EndTime',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBName: 'string',
      endTime: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
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

