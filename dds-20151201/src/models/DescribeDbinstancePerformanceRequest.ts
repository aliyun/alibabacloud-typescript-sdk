// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancePerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * >  If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2635****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC. The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-06-13T11:58Z
   */
  endTime?: string;
  /**
   * @remarks
   * The interval at which performance data is collected. Valid values: 5, 30, 60, 600, 1800, 3600, 86400.
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The performance metric. For more information about valid values, see [Monitoring items and metrics](https://help.aliyun.com/document_detail/216973.html).
   * 
   * >  If you need to specify multiple metrics, separate the metrics with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * CpuUsage
   */
  key?: string;
  /**
   * @remarks
   * The ID of the mongos or shard node in a sharded cluster instance. You can specify this parameter to view the performance data of a single node.
   * 
   * >  This parameter is valid when you set the **DBInstanceId** parameter to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bp2287****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The role of the node in the standalone or replica set instance. Valid values:
   * 
   * *   **Primary**
   * *   **Secondary**
   * 
   * >  *  This parameter is valid only when you specify the **DBInstanceId** parameter to the ID of a standalone instance or a replica set instance.
   * > *  This parameter can be set only to **Primary** when you specify the **DBInstanceId** parameter to the ID of a standalone instance.
   * 
   * @example
   * Primary
   */
  replicaSetRole?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role ID of the node in a standalone or replica set instance. You can call the [DescribeReplicaSetRole](https://help.aliyun.com/document_detail/62134.html) operation to query the role ID of the node.
   * 
   * >  This parameter is available when you set the **DBInstanceId** parameter to the ID of a standalone instance or a replica set instance.
   * 
   * @example
   * 6025****
   */
  roleId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
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

