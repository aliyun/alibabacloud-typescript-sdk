// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSyncJobListResponseBodySyncJobs extends $dara.Model {
  /**
   * @remarks
   * The ID of the Spark job.
   * 
   * @example
   * dts-xxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The description of the source instance or cluster.
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
   * The database type of the source instance or cluster.
   * 
   * @example
   * polardb
   */
  sourceDBType?: string;
  /**
   * @remarks
   * The storage size of the source instance or cluster.
   * 
   * @example
   * 100
   */
  sourceStorageSize?: number;
  /**
   * @remarks
   * The number of tables in the source instance or cluster.
   * 
   * @example
   * 100
   */
  sourceTableNumber?: number;
  /**
   * @remarks
   * The synchronization platform.
   * 
   * @example
   * ADB-CDC
   */
  syncPlatform?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      regionId: 'RegionId',
      sourceDBClusterDescription: 'SourceDBClusterDescription',
      sourceDBClusterId: 'SourceDBClusterId',
      sourceDBType: 'SourceDBType',
      sourceStorageSize: 'SourceStorageSize',
      sourceTableNumber: 'SourceTableNumber',
      syncPlatform: 'SyncPlatform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      regionId: 'string',
      sourceDBClusterDescription: 'string',
      sourceDBClusterId: 'string',
      sourceDBType: 'string',
      sourceStorageSize: 'number',
      sourceTableNumber: 'number',
      syncPlatform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncJobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-j6c22lubl8d9l3989
   */
  DBClusterId?: number;
  /**
   * @remarks
   * The page number.
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
   * The request ID.
   * 
   * @example
   * 482B8BAE-6EC0-5C0E-B2AF-FD42A3FC5B67
   */
  requestId?: string;
  /**
   * @remarks
   * The queried synchronization jobs.
   */
  syncJobs?: DescribeSyncJobListResponseBodySyncJobs[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      syncJobs: 'SyncJobs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      syncJobs: { 'type': 'array', 'itemType': DescribeSyncJobListResponseBodySyncJobs },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.syncJobs)) {
      $dara.Model.validateArray(this.syncJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

