// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancePerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > **NodeId** is required when specifying a sharded cluster instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2635****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-06-13T11:58Z
   */
  endTime?: string;
  /**
   * @remarks
   * The data granularity of the performance metrics in seconds. Valid values: 5, 30, 60, 600, 1800, 3600, and 86400.
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The performance metrics. For more information, see [Metrics](https://help.aliyun.com/document_detail/216973.html).
   * 
   * > To specify multiple metrics, separate them with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * CpuUsage
   */
  key?: string;
  /**
   * @remarks
   * The ID of a mongos or shard node in the sharded cluster instance. This parameter lets you query the performance of a single node.
   * 
   * > Available only when **DBInstanceId** is set to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bp2287****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The role of a node in a standalone or replica set instance. Valid values:
   * 
   * - **Primary**: The primary node.
   * 
   * - **Secondary**: A secondary node.
   * 
   * > * Available only when **DBInstanceId** is set to the ID of a standalone or replica set instance.
   * >
   * > * If **DBInstanceId** is set to the ID of a standalone instance, this parameter only supports the value **Primary**.
   * 
   * @example
   * Primary
   */
  replicaSetRole?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role ID of a node in a standalone or replica set instance. To query the role ID, call the [DescribeReplicaSetRole](https://help.aliyun.com/document_detail/62134.html) operation.
   * 
   * > Available only when **DBInstanceId** is set to the ID of a standalone or replica set instance.
   * 
   * @example
   * 6025****
   */
  roleId?: string;
  /**
   * @remarks
   * The Search node ID.
   * 
   * > Available only after the Search feature is enabled for the instance.
   * 
   * @example
   * dds-2zec12675c9e****-search
   */
  searchId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-06-13T10:58Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      interval: 'Interval',
      key: 'Key',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      replicaSetRole: 'ReplicaSetRole',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleId: 'RoleId',
      searchId: 'SearchId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      interval: 'string',
      key: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      replicaSetRole: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleId: 'string',
      searchId: 'string',
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

