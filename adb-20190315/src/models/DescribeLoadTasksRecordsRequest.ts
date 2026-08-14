// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadTasksRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the details of all Data Warehouse Edition clusters in a specified region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp2590j****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database involved in the import or export task.
   * 
   * @example
   * adb_demo
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-ddTHH:mm:ssZ</i> format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-05-18T06:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Sorts tasks in ascending or descending order based on a specified field. The value must be a JSON string. Example: `[{"Field":"CreateTime", "Type":"desc"}]`
   * 
   * > * `Field` specifies the field by which to sort. Valid fields: `State`, `CreateTime`, `DBName`, `ProcessID`, `UpdateTime`, `JobName`, and `ProcessRows`.
   * > * `Type` specifies the sort order. Valid values: `Desc` (descending) and `Asc` (ascending). The values are case-insensitive.
   * 
   * @example
   * [{"Field":"CreateTime", "Type":"desc"}]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page. Valid values:
   * * **30** (default).
   * * **50**.
   * * **100**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the region IDs supported by a specified Data Warehouse Edition.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the <i>yyyy-MM-ddTHH:mm:ssZ</i> format (UTC).
   * > Set the query start time to a point in time within the last 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-05-18T06:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the asynchronous import or export task to query. Valid values:
   * * **INIT**: The task is being initialized.
   * * **RUNNING**: The task is running.
   * * **FINISH**: The task is successful.
   * * **FAILED**: The task failed.
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

