// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeErrorLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp12c5b040dc****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * mongodbtest
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time and within 24 hours from the start time. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-01-02T12:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The logical relationship between multiple keywords. Valid values:
   * 
   * *   **or**
   * *   **and** (default value)
   * 
   * @example
   * and
   */
  logicalOperator?: string;
  /**
   * @remarks
   * The ID of the mongos node or shard node whose error logs you want to query in the instance. If the instance is a sharded cluster instance, you must specify this parameter.
   * 
   * >  This parameter is valid only when **DBInstanceId** is set to the ID of a sharded cluster instance.
   * 
   * @example
   * d-bp128a003436****
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30** to **100**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The keywords used for query. You can enter up to 10 keywords at a time. If you enter multiple keywords, separate the keywords with spaces.
   * 
   * @example
   * test test1
   */
  queryKeywords?: string;
  /**
   * @remarks
   * The ID of the resource group. For more information, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The role of the node whose error logs you want to query in the instance. Valid values:
   * 
   * *   **primary**
   * *   **secondary**
   * 
   * >  If you set the **NodeId** parameter to the ID of a mongos node, the RoleType parameter must be set to **primary**.
   * 
   * @example
   * primary
   */
  roleType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-01-01T12:10Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      endTime: 'EndTime',
      logicalOperator: 'LogicalOperator',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeywords: 'QueryKeywords',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleType: 'RoleType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBName: 'string',
      endTime: 'string',
      logicalOperator: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeywords: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleType: 'string',
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

