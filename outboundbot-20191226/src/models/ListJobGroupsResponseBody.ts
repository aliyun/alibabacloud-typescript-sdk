// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobGroupsResponseBodyJobGroupsListExportProgress extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * http://www.xxx.com/xxx
   */
  fileHttpUrl?: string;
  /**
   * @remarks
   * The progress of the export task.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The status of the export task. Valid values:
   * 
   * - **PENDING**: The task is pending.
   * 
   * - **IN_PROGRESS**: The task is in progress.
   * 
   * - **FINISHED**: The task is finished.
   * 
   * - **FAILED**: The task failed.
   * 
   * @example
   * PENDING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileHttpUrl: 'FileHttpUrl',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileHttpUrl: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBodyJobGroupsListProgress extends $dara.Model {
  /**
   * @remarks
   * The number of canceled jobs.
   * 
   * @example
   * 5
   */
  cancelledNum?: number;
  /**
   * @remarks
   * The total runtime. This parameter is deprecated.
   * 
   * @example
   * 1578550074361
   */
  duration?: number;
  /**
   * @remarks
   * The number of running jobs.
   * 
   * @example
   * 10
   */
  executingNum?: number;
  /**
   * @remarks
   * The number of failed jobs.
   * 
   * @example
   * 5
   */
  failedNum?: number;
  /**
   * @remarks
   * The number of paused jobs.
   * 
   * @example
   * 5
   */
  pausedNum?: number;
  /**
   * @remarks
   * The number of jobs that are being scheduled.
   * 
   * @example
   * 10
   */
  scheduling?: number;
  /**
   * @remarks
   * The start time. This parameter is deprecated.
   * 
   * @example
   * 1578550074361
   */
  startTime?: number;
  /**
   * @remarks
   * > This parameter is no longer returned.
   * 
   * The status of the job. Valid values:
   * 
   * - **Draft**: The job is a draft.
   * 
   * - **Scheduling**: The job is being scheduled.
   * 
   * - **Executing**: The job is running.
   * 
   * - **Completed**: The job is completed.
   * 
   * - **Paused**: The job is paused.
   * 
   * - **Failed**: The job failed.
   * 
   * - **Cancelled**: The job is canceled.
   * 
   * - **Initializing**: The job is being initialized.
   * 
   * @example
   * Scheduling
   */
  status?: string;
  /**
   * @remarks
   * The number of completed jobs.
   * 
   * @example
   * 3
   */
  totalCompleted?: number;
  /**
   * @remarks
   * The total number of jobs.
   * 
   * @example
   * 20
   */
  totalJobs?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  totalNotAnswered?: number;
  static names(): { [key: string]: string } {
    return {
      cancelledNum: 'CancelledNum',
      duration: 'Duration',
      executingNum: 'ExecutingNum',
      failedNum: 'FailedNum',
      pausedNum: 'PausedNum',
      scheduling: 'Scheduling',
      startTime: 'StartTime',
      status: 'Status',
      totalCompleted: 'TotalCompleted',
      totalJobs: 'TotalJobs',
      totalNotAnswered: 'TotalNotAnswered',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelledNum: 'number',
      duration: 'number',
      executingNum: 'number',
      failedNum: 'number',
      pausedNum: 'number',
      scheduling: 'number',
      startTime: 'number',
      status: 'string',
      totalCompleted: 'number',
      totalJobs: 'number',
      totalNotAnswered: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBodyJobGroupsListStrategy extends $dara.Model {
  /**
   * @remarks
   * The end time of the calling window.
   * 
   * @example
   * 2209702074000
   */
  endTime?: number;
  /**
   * @remarks
   * The start time of the calling window.
   * 
   * @example
   * 1578550074000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBodyJobGroupsList extends $dara.Model {
  /**
   * @remarks
   * The time when the job group was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1578550074361
   */
  creationTime?: number;
  /**
   * @remarks
   * The progress of the export task.
   * 
   * @example
   * {}
   */
  exportProgress?: ListJobGroupsResponseBodyJobGroupsListExportProgress;
  /**
   * @remarks
   * The ID of the task that parses the job data file. This parameter is deprecated.
   * 
   * @example
   * c62e6789-28a8-41db-941e-171a01d3b3b9
   */
  jobDataParsingTaskId?: string;
  /**
   * @remarks
   * The description of the job group.
   * 
   * @example
   * 催收的作业组
   */
  jobGroupDescription?: string;
  /**
   * @remarks
   * The ID of the job group.
   * 
   * @example
   * c62e6789-28a8-41db-941e-171a01d3b3b9
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The name of the job group.
   * 
   * @example
   * 催收作业组
   */
  jobGroupName?: string;
  /**
   * @remarks
   * The minimum number of concurrent calls.
   * 
   * @example
   * 1
   */
  minConcurrency?: number;
  /**
   * @remarks
   * The time when the job group was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1578550074361
   */
  modifyTime?: string;
  /**
   * @remarks
   * The progress of the job group.
   * 
   * @example
   * {}
   */
  progress?: ListJobGroupsResponseBodyJobGroupsListProgress;
  /**
   * @remarks
   * The ID of the script.
   * 
   * @example
   * c62e6789-28a8-41db-941e-171a01d3b3b9
   */
  scriptId?: string;
  /**
   * @remarks
   * The name of the script.
   * 
   * @example
   * 话术名称
   */
  scriptName?: string;
  /**
   * @remarks
   * The script version.
   * 
   * @example
   * d9e828ac-744b-4dd3-848a-17a3da9167b8
   */
  scriptVersion?: string;
  /**
   * @remarks
   * The status of the job group. Valid values:
   * 
   * - **Draft**: The job group is a draft.
   * 
   * - **Scheduling**: The job group is being scheduled.
   * 
   * - **Executing**: The job group is running.
   * 
   * - **Completed**: The job group is completed.
   * 
   * - **Paused**: The job group is paused.
   * 
   * - **Failed**: The job group failed.
   * 
   * - **Cancelled**: The job group is canceled.
   * 
   * - **Initializing**: The job group is being initialized.
   * 
   * @example
   * Draft
   */
  status?: string;
  /**
   * @remarks
   * The calling strategy. This parameter is deprecated.
   * 
   * > To view the strategy for a job group, call the `DescribeJobGroup` operation.
   * 
   * @example
   * {}
   */
  strategy?: ListJobGroupsResponseBodyJobGroupsListStrategy;
  /**
   * @remarks
   * The total number of calls.
   * 
   * @example
   * 10
   */
  totalCallNum?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      exportProgress: 'ExportProgress',
      jobDataParsingTaskId: 'JobDataParsingTaskId',
      jobGroupDescription: 'JobGroupDescription',
      jobGroupId: 'JobGroupId',
      jobGroupName: 'JobGroupName',
      minConcurrency: 'MinConcurrency',
      modifyTime: 'ModifyTime',
      progress: 'Progress',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      scriptVersion: 'ScriptVersion',
      status: 'Status',
      strategy: 'Strategy',
      totalCallNum: 'TotalCallNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      exportProgress: ListJobGroupsResponseBodyJobGroupsListExportProgress,
      jobDataParsingTaskId: 'string',
      jobGroupDescription: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      minConcurrency: 'number',
      modifyTime: 'string',
      progress: ListJobGroupsResponseBodyJobGroupsListProgress,
      scriptId: 'string',
      scriptName: 'string',
      scriptVersion: 'string',
      status: 'string',
      strategy: ListJobGroupsResponseBodyJobGroupsListStrategy,
      totalCallNum: 'number',
    };
  }

  validate() {
    if(this.exportProgress && typeof (this.exportProgress as any).validate === 'function') {
      (this.exportProgress as any).validate();
    }
    if(this.progress && typeof (this.progress as any).validate === 'function') {
      (this.progress as any).validate();
    }
    if(this.strategy && typeof (this.strategy as any).validate === 'function') {
      (this.strategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBodyJobGroups extends $dara.Model {
  /**
   * @remarks
   * The list of job groups.
   */
  list?: ListJobGroupsResponseBodyJobGroupsList[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListJobGroupsResponseBodyJobGroupsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task. You can use this ID to query the status of the task.
   * 
   * @example
   * 6243d904-939d-42ce-a8e4-886a139e77a3
   */
  asyncTaskId?: string;
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of job groups.
   */
  jobGroups?: ListJobGroupsResponseBodyJobGroups;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: `true` and `false`.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroups: 'JobGroups',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      code: 'string',
      httpStatusCode: 'number',
      jobGroups: ListJobGroupsResponseBodyJobGroups,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.jobGroups && typeof (this.jobGroups as any).validate === 'function') {
      (this.jobGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

