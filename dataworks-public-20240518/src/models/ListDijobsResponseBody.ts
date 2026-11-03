// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIJobsResponseBodyPagingInfoDIJobs extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated. Use the Id field instead.
   * 
   * @example
   * 32599
   * 
   * @deprecated
   */
  DIJobId?: number;
  /**
   * @remarks
   * The type of the destination data source. Valid values: Hologres, OSS-HDFS, OSS, MaxCompute, Loghub, STARROCKS, DataHub, ANALYTICDB_FOR_MYSQL, Kafka, and Hive.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * The ID of the data integration task.
   * 
   * @example
   * 32599
   */
  id?: number;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * mysql_to_holo_sync_35197
   */
  jobName?: string;
  /**
   * @remarks
   * The synchronization status. Valid values:
   * - Finished: finished successfully
   * - Initialized: initialized
   * - Stopped: stopped
   * - Failed: failed
   * - Running: running
   * - Stopping: stopping
   * 
   * @example
   * Running
   */
  jobStatus?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * - FullAndRealtimeIncremental: full and real-time incremental synchronization
   * - RealtimeIncremental: real-time incremental synchronization
   * - Full: full synchronization
   * - OfflineIncremental: batch incremental synchronization
   * - FullAndOfflineIncremental: full and batch incremental synchronization
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  /**
   * @remarks
   * The owner of the task.
   * 
   * @example
   * 3726346
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the task belongs.
   * 
   * @example
   * 26442
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the source data source. Valid values: PolarDB, MySQL, Kafka, Loghub, Hologres, Oracle, OceanBase, MongoDB, RedShift, Hive, SqlServer, Doris, and ClickHouse.
   * 
   * @example
   * Mysql
   */
  sourceDataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      destinationDataSourceType: 'DestinationDataSourceType',
      id: 'Id',
      jobName: 'JobName',
      jobStatus: 'JobStatus',
      migrationType: 'MigrationType',
      owner: 'Owner',
      projectId: 'ProjectId',
      sourceDataSourceType: 'SourceDataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      destinationDataSourceType: 'string',
      id: 'number',
      jobName: 'string',
      jobStatus: 'string',
      migrationType: 'string',
      owner: 'string',
      projectId: 'number',
      sourceDataSourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The data integration tasks.
   */
  DIJobs?: ListDIJobsResponseBodyPagingInfoDIJobs[];
  /**
   * @remarks
   * The page number of the returned data.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries that meet the conditions.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobs: 'DIJobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobs: { 'type': 'array', 'itemType': ListDIJobsResponseBodyPagingInfoDIJobs },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.DIJobs)) {
      $dara.Model.validateArray(this.DIJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListDIJobsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7263E4AC-9D2E-5B29-B8AF-7C5012E92A41
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDIJobsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

