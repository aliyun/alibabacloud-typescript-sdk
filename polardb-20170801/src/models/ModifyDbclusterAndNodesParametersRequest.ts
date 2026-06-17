// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterAndNodesParametersRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to clear binlog. This parameter is valid only when binlog is disabled.
   */
  clearBinlog?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**********
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The IDs of the nodes. By setting this parameter, you can modify the parameters of the cluster and specified nodes. Separate multiple node IDs with commas (,).
   * 
   * > If this parameter is not specified, only the cluster parameters are modified.
   * 
   * @example
   * pi-**********,pi-**********
   */
  DBNodeIds?: string;
  /**
   * @remarks
   * Specifies whether to immediately or scheduledly modify parameters and restart the cluster. Valid values:
   * 
   * - **false** (default): scheduled execution
   * 
   * - **true**: immediate execution
   * 
   * @example
   * false
   */
  fromTimeService?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the parameter template.
   * 
   * @example
   * pcpg-**********
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The JSON string that consists of parameters and their values.
   * 
   * @example
   * {"wait_timeout":"86","innodb_old_blocks_time":"10"}
   */
  parameters?: string;
  /**
   * @remarks
   * The latest time to start the scheduled task. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * > - The latest start time must be 30 minutes or more later than the earliest start time.
   * >
   * > - If you specify `PlannedStartTime` but not this parameter, the latest start time of the task is `the earliest start time + 30 minutes` by default. For example, if you set `PlannedStartTime` to `2021-01-14T09:00:00Z` and leave this parameter empty, the task will start no later than `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2021-01-14T09:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The earliest time to start the scheduled task. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * > - The start time can be any time within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, you can specify a time that ranges from `2021-01-14T09:00:00Z` to `2021-01-15T09:00:00Z`.
   * >
   * > - If you leave this parameter empty, the task is immediately executed.
   * 
   * @example
   * 2021-01-14T09:00:00Z
   */
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of GDN standby clusters to which you want to synchronize the parameter settings.
   * 
   * @example
   * gdn-**********,gdn-**********
   */
  standbyClusterIdListNeedToSync?: string;
  static names(): { [key: string]: string } {
    return {
      clearBinlog: 'ClearBinlog',
      DBClusterId: 'DBClusterId',
      DBNodeIds: 'DBNodeIds',
      fromTimeService: 'FromTimeService',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parameterGroupId: 'ParameterGroupId',
      parameters: 'Parameters',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      standbyClusterIdListNeedToSync: 'StandbyClusterIdListNeedToSync',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clearBinlog: 'boolean',
      DBClusterId: 'string',
      DBNodeIds: 'string',
      fromTimeService: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      parameterGroupId: 'string',
      parameters: 'string',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      standbyClusterIdListNeedToSync: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

