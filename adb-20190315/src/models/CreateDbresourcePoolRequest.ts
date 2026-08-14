// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBResourcePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL cluster.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL clusters in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The number of nodes. The default value is 0.
   * 
   * - A single node provides 16 cores and 64 GB of memory.
   * 
   * - The total resources, calculated as (Number of nodes × 16 cores and 64 GB of memory), cannot exceed the total resources of the cluster.
   * 
   * @example
   * 2
   */
  nodeNum?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * - The name can be up to 255 characters in length.
   * 
   * - It must start with a digit, an uppercase letter, or a lowercase letter.
   * 
   * - It can contain digits, uppercase letters, lowercase letters, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  poolName?: string;
  /**
   * @remarks
   * The execution mode of the SQL query. Valid values:
   * 
   * - **batch**: batch processing mode.
   * 
   * - **interactive** (default): interactive mode.
   * 
   * > For more information, see [Query execution modes](https://help.aliyun.com/document_detail/189502.html).
   * 
   * @example
   * interactive
   */
  queryType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      nodeNum: 'NodeNum',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      poolName: 'PoolName',
      queryType: 'QueryType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      nodeNum: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      poolName: 'string',
      queryType: 'string',
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

