// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIJobsResponseBodyDIJobPagingDIJobs extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 16626
   */
  DIJobId?: number;
  /**
   * @remarks
   * The destination data source type. Valid values: Hologres.
   * 
   * @example
   * Hologres
   */
  destinationDataSourceType?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * mysql_to_holo_sync_8772
   */
  jobName?: string;
  /**
   * @remarks
   * The synchronization status. Valid values:
   * - Finished: Completed successfully.
   * - Initialized: Initialization completed.
   * - Stopped: Stopped.
   * - Failed: Failed.
   * - Running: Running.
   * - Stopping: Stopping.
   * 
   * @example
   * Finished
   */
  jobStatus?: string;
  /**
   * @remarks
   * The synchronization type. Valid values:
   * - FullAndRealtimeIncremental: Full and real-time incremental.
   * - RealtimeIncremental: Real-time incremental.
   * - Full: Full.
   * 
   * @example
   * Full
   */
  migrationType?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 1967
   */
  projectId?: number;
  /**
   * @remarks
   * The source data source type. Valid values: MySQL.
   * 
   * @example
   * MySQL
   */
  sourceDataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      destinationDataSourceType: 'DestinationDataSourceType',
      jobName: 'JobName',
      jobStatus: 'JobStatus',
      migrationType: 'MigrationType',
      projectId: 'ProjectId',
      sourceDataSourceType: 'SourceDataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      destinationDataSourceType: 'string',
      jobName: 'string',
      jobStatus: 'string',
      migrationType: 'string',
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

export class ListDIJobsResponseBodyDIJobPaging extends $dara.Model {
  /**
   * @remarks
   * The task list.
   */
  DIJobs?: ListDIJobsResponseBodyDIJobPagingDIJobs[];
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
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 6
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
      DIJobs: { 'type': 'array', 'itemType': ListDIJobsResponseBodyDIJobPagingDIJobs },
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
   * The paginated task results.
   */
  DIJobPaging?: ListDIJobsResponseBodyDIJobPaging;
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
      DIJobPaging: 'DIJobPaging',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobPaging: ListDIJobsResponseBodyDIJobPaging,
      requestId: 'string',
    };
  }

  validate() {
    if(this.DIJobPaging && typeof (this.DIJobPaging as any).validate === 'function') {
      (this.DIJobPaging as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

