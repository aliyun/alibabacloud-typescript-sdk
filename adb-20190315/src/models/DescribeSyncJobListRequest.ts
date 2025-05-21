// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSyncJobListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-8vb39udfi356l9psq
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to obtain details about the source instance or cluster.
   * 
   * @example
   * true
   */
  getSourceDetail?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The description of the source cluster.
   * 
   * @example
   * test
   */
  sourceDBClusterDescription?: string;
  /**
   * @remarks
   * The ID of the source cluster. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query backup set IDs.
   * 
   * >  If you want to restore the data of an ApsaraDB for ClickHouse cluster, this parameter is required.
   * 
   * @example
   * pc-t4n766v2llx852n81
   */
  sourceDBClusterId?: string;
  /**
   * @remarks
   * The source database type.
   * 
   * @example
   * sls
   */
  sourceDBType?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      getSourceDetail: 'GetSourceDetail',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceDBClusterDescription: 'SourceDBClusterDescription',
      sourceDBClusterId: 'SourceDBClusterId',
      sourceDBType: 'SourceDBType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      getSourceDetail: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceDBClusterDescription: 'string',
      sourceDBClusterId: 'string',
      sourceDBType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

