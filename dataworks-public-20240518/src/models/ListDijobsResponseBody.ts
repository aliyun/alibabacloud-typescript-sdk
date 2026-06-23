// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIJobsResponseBodyPagingInfoDIJobs extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use the `Id` parameter instead.
   * 
   * @example
   * 32599
   * 
   * @deprecated
   */
  DIJobId?: number;
  /**
   * @remarks
   * The type of the destination data source. Valid values: `Hologres`, `OSS-HDFS`, `OSS`, `MaxCompute`, `LogHub`, `StarRocks`, `DataHub`, `AnalyticDB_For_MySQL`, `Kafka`, and `Hive`.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * The ID of the Data Integration job.
   * 
   * @example
   * 32599
   */
  id?: number;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * mysql_to_holo_sync_35197
   */
  jobName?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - `Finished`: The job completed successfully.
   * 
   * - `Initialized`: The job is initialized.
   * 
   * - `Stopped`: The job is stopped.
   * 
   * - `Failed`: The job failed.
   * 
   * - `Running`: The job is running.
   * 
   * - `Stopping`: The job is being stopped.
   * 
   * @example
   * Running
   */
  jobStatus?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * 
   * - `FullAndRealtimeIncremental`: full and real-time incremental synchronization
   * 
   * - `RealtimeIncremental`: real-time incremental synchronization
   * 
   * - `Full`: full synchronization
   * 
   * - `OfflineIncremental`: offline incremental synchronization
   * 
   * - `FullAndOfflineIncremental`: full and offline incremental synchronization
   * 
   * @example
   * FullAndRealtimeIncremental
   */
  migrationType?: string;
  owner?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace that contains the job.
   * 
   * @example
   * 26442
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the source data source. Valid values: `PolarDB`, `MySQL`, `Kafka`, `LogHub`, `Hologres`, `Oracle`, `OceanBase`, `MongoDB`, `RedShift`, `Hive`, `SQLServer`, `Doris`, and `ClickHouse`.
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
   * A list of Data Integration jobs.
   */
  DIJobs?: ListDIJobsResponseBodyPagingInfoDIJobs[];
  /**
   * @remarks
   * The returned page number.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries that meet the filter criteria.
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
   * The paging information.
   */
  pagingInfo?: ListDIJobsResponseBodyPagingInfo;
  /**
   * @remarks
   * The ID of the request.
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

