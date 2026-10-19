// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRunningLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The shard type of the cluster instance. Valid values:
   * * **proxy**: proxy node
   * * **db**: data node
   * * **cs**: config server node
   * 
   * > If you specify this parameter, you must also specify the **NodeId** parameter.
   * 
   * @example
   * proxy
   */
  characterType?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * 0
   */
  DBName?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time, and the time span between the start time and end time cannot exceed one day. We recommend that you set the time span to one hour. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-12-03T08:01Z
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the node in the instance. Specify this parameter to query the running logs of a specific node.
   * 
   * > * This parameter is available only when the instance uses the read/write splitting or cluster architecture.
   * > * If you specify this parameter, you must also specify the **CharacterType** parameter.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The sort order of the query results. Valid values:
   * * **asc**: ascending order
   * * **desc**: descending order
   * 
   * @example
   * asc
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be greater than **0** and cannot exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: **30**, **50**, and **100**. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword used to query the running logs.
   * 
   * @example
   * aof
   */
  queryKeyword?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role type of the data shard. Valid values:
   * * **master** (default): primary node
   * * **slave**: secondary node
   * 
   * @example
   * master
   */
  roleType?: string;
  securityToken?: string;
  /**
   * @remarks
   * The start time of the query. You can view the running logs generated within the last 72 hours. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-12-03T07:01Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      characterType: 'CharacterType',
      DBName: 'DBName',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeyword: 'QueryKeyword',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleType: 'RoleType',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterType: 'string',
      DBName: 'string',
      endTime: 'string',
      instanceId: 'string',
      nodeId: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeyword: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleType: 'string',
      securityToken: 'string',
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

