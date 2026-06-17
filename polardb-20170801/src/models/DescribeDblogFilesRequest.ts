// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBLogFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the node in the PolarDB cluster.
   * 
   * @example
   * pi-*************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The mode to query simulation records. Valid values:
   * 
   * - **0**: Queries the simulation records of a logical instance. You can specify the simulation ID.
   * 
   * - **1**: Queries the simulation records of a physical instance based on a specified `SimulateListId`.
   * 
   * - **2**: Queries the records of the most recent simulation in progress.
   * 
   * @example
   * 0
   */
  describeSimulateSwitchMode?: string;
  /**
   * @remarks
   * The end of the time range to query. The time must be in UTC and formatted as `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2023-09-20T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The log type. Valid values:
   * 
   * - **HaSwitchLogList**: A list of failover logs.
   * 
   * - **HaSwitchLogInfo**: Details of a failover log.
   * 
   * - **SimulateSwitchLogs**: Failover simulation logs.
   * 
   * This parameter is required.
   * 
   * @example
   * HaSwitchLogList
   */
  logType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Valid values: 5 to 50. The default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of a logical instance simulation record.
   * 
   * @example
   * "95"
   */
  simulateListId?: string;
  /**
   * @remarks
   * Filters the results by one or more simulation modes. Specify multiple modes as a comma-separated string. Valid values:
   * 
   * - **0**: Fault is injected into the primary availability zone.
   * 
   * - **1**: Fault is injected into the DB instance.
   * 
   * - **2**: Fault is injected into the disaster recovery data center.
   * 
   * @example
   * 0,1,2
   */
  simulateModeList?: string;
  /**
   * @remarks
   * Filters the results by one or more simulation statuses. Specify multiple statuses as a comma-separated string. Valid values:
   * 
   * - **0**: Waiting for scheduling
   * 
   * - **1**: Succeeded
   * 
   * - **2**: Running
   * 
   * - **3**: Failed
   * 
   * - **4**: Interrupted
   * 
   * - **5**: Waiting for switchback
   * 
   * - **6**: Canceled
   * 
   * @example
   * "0,1,2,3,4,5"
   */
  simulateStatusList?: string;
  /**
   * @remarks
   * The start of the time range to query. The time must be in UTC and formatted as `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2023-08-20T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBNodeId: 'DBNodeId',
      describeSimulateSwitchMode: 'DescribeSimulateSwitchMode',
      endTime: 'EndTime',
      logType: 'LogType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      simulateListId: 'SimulateListId',
      simulateModeList: 'SimulateModeList',
      simulateStatusList: 'SimulateStatusList',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBNodeId: 'string',
      describeSimulateSwitchMode: 'string',
      endTime: 'string',
      logType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      simulateListId: 'string',
      simulateModeList: 'string',
      simulateStatusList: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

