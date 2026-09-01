// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterParametersRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to clear binlogs. This parameter takes effect only when binlog is disabled.
   */
  clearBinlog?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query information about all clusters in the specified region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to immediately or schedule the parameter modification and cluster restart. Valid values:  
   * 
   * - false (default): Scheduled execution.
   *  
   * - true: Immediate execution.
   * 
   * @example
   * false
   */
  fromTimeService?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The parameter template ID.
   * 
   * 
   * > * You can call the [DescribeParameterGroups](https://help.aliyun.com/document_detail/207178.html) operation to query the parameter template ID.
   * > * You must specify either this parameter or the `Parameters` parameter.
   * > * Only PolarDB for MySQL supports this parameter.
   * 
   * @example
   * pcpg-**************
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * A JSON string that consists of parameters and their values. Parameter values are of the STRING type. Example: `{"wait_timeout":"86","innodb_old_blocks_time":"10"}`.
   * 
   * > * You can call the [DescribeDBClusterParameters](https://help.aliyun.com/document_detail/98122.html) operation to query the parameters of a PolarDB cluster.
   * > * If the cluster runs PolarDB for PostgreSQL or PolarDB for PostgreSQL (Compatible with Oracle), this parameter is required.
   * > * If the cluster runs PolarDB for MySQL, you must specify either this parameter or the `ParameterGroupId` parameter.
   * 
   * @example
   * {"wait_timeout":"86","innodb_old_blocks_time":"10"}
   */
  parameters?: string;
  /**
   * @remarks
   * The latest time to start running the scheduled task. The time is in the `YYYY-MM-DDThh:mm:ssZ` format (UTC).
   * > * The latest time must be at least 30 minutes later than the start time.
   * > * If you specify `PlannedStartTime` but do not specify this parameter, the latest time defaults to `start time + 30 minutes`. For example, if `PlannedStartTime` is set to `2021-01-14T09:00:00Z` and this parameter is left empty, the task starts no later than `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2022-04-28T14:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The earliest time to start running the scheduled task within the specified time range. The time is in the `YYYY-MM-DDThh:mm:ssZ` format (UTC).
   * > * The start time must be within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, the start time can range from `2021-01-14T09:00:00Z` to `2021-01-15T09:00:00Z`.
   * > * If this parameter is left empty, the task is immediately executed.
   * 
   * @example
   * 2022-04-28T14:00:00Z
   */
  plannedStartTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clearBinlog: 'ClearBinlog',
      DBClusterId: 'DBClusterId',
      fromTimeService: 'FromTimeService',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parameterGroupId: 'ParameterGroupId',
      parameters: 'Parameters',
      plannedEndTime: 'PlannedEndTime',
      plannedStartTime: 'PlannedStartTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clearBinlog: 'boolean',
      DBClusterId: 'string',
      fromTimeService: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      parameterGroupId: 'string',
      parameters: 'string',
      plannedEndTime: 'string',
      plannedStartTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

