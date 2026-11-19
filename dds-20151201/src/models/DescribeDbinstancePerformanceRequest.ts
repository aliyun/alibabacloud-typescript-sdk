// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancePerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * > If you specify the ID of a sharded cluster instance for this parameter, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp2635****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-06-13T11:58Z
   */
  endTime?: string;
  /**
   * @remarks
   * The data granularity. Valid values: 5, 30, 60, 600, 1800, 3600, and 86400.
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The performance metrics. For more information, see [Monitoring metrics](https://help.aliyun.com/document_detail/216973.html).
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
   * Instance ID of the mongos or shard node in a sharded cluster instance. You can use this parameter to query the performance of a single node.
   * 
   * > This parameter is available only when you specify instance ID of a sharded cluster instance for the **DBInstanceId** parameter.
   * 
   * @example
   * d-bp2287****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The role of the node in a standalone instance or replica set instance. Valid values:
   * - **Primary**: The primary node.
   * - **Secondary**: The secondary node.
   * 
   * > - This parameter is available only when you specify instance ID of a standalone instance or replica set instance for the **DBInstanceId** parameter.
   * > - When you specify instance ID of a standalone instance for the **DBInstanceId** parameter, you can set this parameter only to **Primary**.
   * 
   * @example
   * Primary
   */
  replicaSetRole?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The instance ID of the node in a standalone instance or replica set instance. You can call the [DescribeReplicaSetRole](https://help.aliyun.com/document_detail/62134.html) operation to query the instance ID.
   * > This parameter is available only when you specify the ID of a standalone instance or replica set instance for the **DBInstanceId** parameter.
   * 
   * @example
   * 6025****
   */
  roleId?: string;
  /**
   * @remarks
   * The ID of the search node.
   * > - This parameter is available only when the search feature is enabled for the instance.
   * 
   * @example
   * dds-2zec12675c9e****-search
   */
  searchId?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
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

