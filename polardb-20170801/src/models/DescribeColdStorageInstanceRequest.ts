// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColdStorageInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The PolarDB cluster ID.
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
   * The supported engine types. The return value is the sum of the following engine type values:
   * 
   * - 1: search engine
   * - 2: time series engine
   * - 4: wide table engine
   * - 8: file engine
   * 
   * > For example, if the EngineType value is 15, 15 = 8 + 4 + 2 + 1, which indicates that the instance supports the search engine, time series engine, wide table engine, and file engine. If the EngineType value is 6, 6 = 4 + 2, which indicates that the instance supports the time series engine and wide table engine.
   * 
   * @example
   * 2
   */
  engineType?: string;
  /**
   * @remarks
   * The expiration time of the cluster. Note: A specific value is returned only for clusters whose billing method is Prepaid (subscription). For Postpaid (pay-as-you-go) clusters, a null value is returned.
   * 
   * @example
   * 2020-11-14T16:00:00Z
   */
  expireTime?: number;
  /**
   * @remarks
   * - If you do not specify the **MaxResults** parameter, batch query is not required. The value of the **MaxResults** parameter returned after the API call indicates the total number of list entries.
   * - If you specify the **MaxResults** parameter, batch query is required. The value of **MaxResults** indicates the number of entries displayed per batch. Valid values: **1** to **100**. The value of the **MaxResults** parameter returned after the API call indicates the number of list entries in the current query batch. Set the **MaxResults** parameter to **20**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned from the previous API call. If there are no more queries, do not specify this parameter.
   * 
   * @example
   * c2FpXzIwMjIwNjI5X2Jhay9zYWlfc3VtbWVyX3RyZWFzdXJlX3Bvb2xfbG9nLkNTVg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The object type. Valid values: TABLE, PARTITION_TABLE, and LOB.
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
   * > * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the region information of all clusters under the target account.
   * * If this parameter is left empty, scheduled tasks in all regions under the current account are queried by default.
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

