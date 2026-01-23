// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterParametersRequest extends $dara.Model {
  clearBinlog?: boolean;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query information about all clusters that are deployed in a specified region, such as the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies an immediate or scheduled task to modify parameters and restart the cluster. Valid values:
   * 
   * *   false: scheduled task
   * *   true: immediate task
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
   * > 
   * 
   * *   You can call the [DescribeParameterGroups](https://help.aliyun.com/document_detail/207178.html) operation to query the parameter template ID.
   * 
   * *   You must specify this parameter or the `Parameters` parameter.
   * *   This parameter is valid only for a PolarDB for MySQL cluster.
   * 
   * @example
   * pcpg-**************
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The JSON string that consists of parameters and values. The parameter values are strings, for example, `{"wait_timeout":"86","innodb_old_blocks_time":"10"}`.
   * 
   * > 
   * 
   * *   You can call the [DescribeDBClusterParameters](https://help.aliyun.com/document_detail/98122.html) operation to query the parameters of the PolarDB cluster.
   * 
   * *   This parameter is required for a PolarDB for Oracle or PolarDB for PostgreSQL cluster.
   * *   For PolarDB for MySQL clusters, you must specify this parameter or the `ParameterGroupId` parameter.
   * 
   * @example
   * {"wait_timeout":"86","innodb_old_blocks_time":"10"}
   */
  parameters?: string;
  /**
   * @remarks
   * The latest start time to run the task. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * > 
   * 
   * *   The value of this parameter must be at least 30 minutes later than the value of the PlannedStartTime parameter.
   * 
   * *   By default, if you specify the `PlannedStartTime` parameter but do not specify the PlannedEndTime parameter, the latest start time of the task is set to a value that is calculated by using the following formula: `Value of the PlannedEndTime parameter + 30 minutes`. For example, if you set the `PlannedStartTime` parameter to `2021-01-14T09:00:00Z` and you do not specify the PlannedEndTime parameter, the latest start time of the task is set to `2021-01-14T09:30:00Z`.
   * 
   * @example
   * 2022-04-28T14:30:00Z
   */
  plannedEndTime?: string;
  /**
   * @remarks
   * The earliest time to upgrade the specifications within the scheduled time period. Specify the time in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC.
   * 
   * > 
   * 
   * *   The earliest start time of the task can be a point in time within the next 24 hours. For example, if the current time is `2021-01-14T09:00:00Z`, you can specify a point in the time range from `2021-01-14T09:00:00Z` to `2021-01-15T09:00:00Z`.
   * 
   * *   If this parameter is empty, the upgrade task is immediately performed.
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

