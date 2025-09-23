// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBLogFilesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @example
   * pi-*************
   */
  DBNodeId?: string;
  describeSimulateSwitchMode?: string;
  /**
   * @example
   * 2023-09-20T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The log type. Valid values:
   * 
   * *   **HaSwitchLogList**: failover logs.
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  simulateListId?: string;
  simulateModeList?: string;
  simulateStatusList?: string;
  /**
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

