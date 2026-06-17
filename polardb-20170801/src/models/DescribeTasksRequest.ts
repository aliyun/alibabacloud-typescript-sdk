// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Specify either `DBNodeId` or `DBClusterId`. Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters in your account, including cluster IDs.
   * 
   * @example
   * pc-***************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * > Specify either `DBNodeId` or `DBClusterId`. Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters in your account, including node IDs.
   * 
   * @example
   * pi-***************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the `YYYY-MM-DDThh:mmZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-12-02T03:00Z
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0 and does not exceed the maximum value of the Integer data type.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30**, **50**, and **100**.
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the `YYYY-MM-DDThh:mmZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-11-30T00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **Waiting**: The task is waiting to be executed.
   * 
   * - **Running**: The task is running.
   * 
   * - **Finished**: The task is complete.
   * 
   * - **Closed**: The task is closed.
   * 
   * - **Pause**: The task is paused.
   * 
   * - **Stop**: The task is interrupted.
   * 
   * > * If you leave this parameter empty, the details of all tasks in the **Waiting** or **Running** state for the current cluster or node are returned.
   * >
   * > * To query tasks in multiple states, separate the state names with a comma (,).
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBNodeId: 'DBNodeId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBNodeId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

