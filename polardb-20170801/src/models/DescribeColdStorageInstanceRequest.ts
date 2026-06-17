// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColdStorageInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB cluster.
   * 
   * @example
   * pc-wz9062015ly7526jc
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test_db
   */
  DBName?: string;
  /**
   * @remarks
   * The type of the supported engine. The return value is the sum of the values of the supported engine types.
   * 
   * - 1: Search engine
   * 
   * - 2: LindormTSDB
   * 
   * - 4: LindormTable
   * 
   * - 8: File engine
   * 
   * > For example, if \\`EngineType\\` is 15 (8 + 4 + 2 + 1), the instance supports the search engine, LindormTSDB, LindormTable, and file engine. If \\`EngineType\\` is 6 (4 + 2), the instance supports LindormTSDB and LindormTable.
   * 
   * @example
   * 2
   */
  engineType?: string;
  /**
   * @remarks
   * The expiration time of the cluster. Note: This parameter is returned only for subscription clusters. An empty value is returned for pay-as-you-go clusters.
   * 
   * @example
   * 2020-11-14T16:00:00Z
   */
  expireTime?: number;
  /**
   * @remarks
   * - If you do not specify the **MaxResults** parameter, the query is not paged. The value of the **MaxResults** parameter in the response indicates the total number of entries.
   * 
   * - If you specify the **MaxResults** parameter, the query is paged. **MaxResults** specifies the number of entries to return on each page. Valid values: **1** to **100**. The value of the **MaxResults** parameter in the response indicates the number of entries on the current page. The recommended value is **20**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A token to retrieve the next page of results. Set this parameter to the \\`NextToken\\` value from a previous call. You do not need to specify this parameter for the first call.
   * 
   * @example
   * c2FpXzIwMjIwNjI5X2Jhay9zYWlfc3VtbWVyX3RyZWFzdXJlX3Bvb2xfbG9nLkNTVg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The object type. Valid values: \\`TABLE\\`, \\`PARTITION_TABLE\\`, and \\`LOB\\`.
   * 
   * @example
   * TABLE
   */
  objectType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > - For more information, see [DescribeRegions](https://help.aliyun.com/document_detail/98041.html).
   * 
   * - If you do not specify this parameter, the operation queries scheduled tasks in all regions within your account.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the data table.
   * 
   * @example
   * account_log
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      engineType: 'EngineType',
      expireTime: 'ExpireTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      objectType: 'ObjectType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBName: 'string',
      engineType: 'string',
      expireTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
      objectType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

