// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterParametersRequest extends $dara.Model {
  clearBinlog?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to view information about all clusters in the destination region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to immediately modify the parameters and restart the cluster. Valid values:
   * 
   * - false (default): The modification is scheduled.
   * 
   * - true: The modification is performed immediately.
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
   * > - Call the [DescribeParameterGroups](https://help.aliyun.com/document_detail/207178.html) operation to view the ID of the parameter template.
   * >
   * > - You must specify this parameter or the `Parameters` parameter.
   * >
   * > - This parameter is supported only by PolarDB for MySQL.
   * 
   * @example
   * pcpg-**************
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * A JSON string that consists of parameters and their values. The parameter values must be strings. For example: `{"wait_timeout":"86","innodb_old_blocks_time":"10"}`.
   * 
   * > - Call the [DescribeDBClusterParameters](https://help.aliyun.com/document_detail/98122.html) operation to view the parameters of a PolarDB cluster.
   * >
   * > - This parameter is required if the destination cluster is a PolarDB for PostgreSQL or PolarDB for PostgreSQL (Oracle compatible) cluster.
   * >
   * > - If the destination cluster is a PolarDB for MySQL cluster, you must specify this parameter or the `ParameterGroupId` parameter.
   * 
   * @example
   * {"wait_timeout":"86","innodb_old_blocks_time":"10"}
   */
  parameters?: string;
  /**
   * @remarks
   * The latest time to start the scheduled task. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * > - The latest start time must be at least 30 minutes later than the earliest start time.
   * >
   * > - If you specify `PlannedStartTime` but not this parameter, the latest time to start the task is `PlannedStartTime + 30 minutes` by default. For example, if you set `PlannedStartTime` to `2021-01-14T09:00:00Z` and leave this parameter empty, the task starts no later than `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2022-04-28T14:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The earliest time to start the scheduled task. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * > - The start time can be any point in time within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, you can set the start time to a value in the range of `2021-01-14T09:00:00Z` to `2021-01-15T09:00:00Z`.
   * >
   * > - If you leave this parameter empty, the task is executed immediately.
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

