// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobGroupsResponseBodyJobGroupsListExportProgress extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * http://www.xxx.com/xxx
   */
  fileHttpUrl?: string;
  /**
   * @remarks
   * The progress.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The status of the export task. Valid values:
   * 
   * - **PENDING**: Pending.
   * - **IN_PROGRESS**: In progress.
   * - **FINISHED**: Finished.
   * - **FAILED**: Failed.
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
   * The number of cancelled jobs.
   * 
   * @example
   * 5
   */
  cancelledNum?: number;
  /**
   * @remarks
   * **[Deprecated]** The total execution duration up to the current time.
   * 
   * @example
   * 1578550074361
   */
  duration?: number;
  /**
   * @remarks
   * The number of executing jobs.
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
   * The number of jobs being scheduled.
   * 
   * @example
   * 10
   */
  scheduling?: number;
  /**
   * @remarks
   * **[Deprecated]** The start time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1578550074361
   */
  startTime?: number;
  /**
   * @remarks
   * > This parameter is no longer returned.
   * 
   * The execution status. Valid values:
   * 
   * - **Draft**: Draft.
   * - **Scheduling**: Scheduling.
   * - **Executing**: Executing.
   * - **Completed**: Completed.
   * - **Paused**: Paused.
   * - **Failed**: Failed.
   * - **Cancelled**: Cancelled.
   * - **Initializing**: Initializing.
   * 
   * @example
   * Scheduling
   */
  status?: string;
  /**
   * @remarks
   * The number of completed jobs up to the current time.
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
   * **[Deprecated]**
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
   * The end time of the strategy. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 2209702074000
   */
  endTime?: number;
  /**
   * @remarks
   * The start time of the strategy. This value is a UNIX timestamp in milliseconds.
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
   * The creation time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1578550074361
   */
  creationTime?: number;
  /**
   * @remarks
   * The export progress.
   * 
   * @example
   * {}
   */
  exportProgress?: ListJobGroupsResponseBodyJobGroupsListExportProgress;
  /**
   * @remarks
   * **[Deprecated]** The ID of the jobFile parsing task.
   * 
   * @example
   * c62e6789-28a8-41db-941e-171a01d3b3b9
   */
  jobDataParsingTaskId?: string;
  /**
   * @remarks
   * The job group description.
   * 
   * @example
   * Collection job group
   */
  jobGroupDescription?: string;
  /**
   * @remarks
   * The job group ID.
   * 
   * @example
   * c62e6789-28a8-41db-941e-171a01d3b3b9
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The job group name.
   * 
   * @example
   * Collection job group
   */
  jobGroupName?: string;
  /**
   * @remarks
   * The number of valid tasks with a minimum concurrency guarantee.
   * 
   * @example
   * 1
   */
  minConcurrency?: number;
  /**
   * @remarks
   * The modification time in milliseconds.
   * 
   * @example
   * 1578550074361
   */
  modifyTime?: string;
  /**
   * @remarks
   * The node statistics information.
   * 
   * @example
   * {}
   */
  progress?: ListJobGroupsResponseBodyJobGroupsListProgress;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * c62e6789-28a8-41db-941e-171a01d3b3b9
   */
  scriptId?: string;
  /**
   * @remarks
   * The script name.
   * 
   * @example
   * Script name
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
   * The execution status. Valid values:
   * 
   * - **Draft**: Draft.
   * - **Scheduling**: Scheduling.
   * - **Executing**: Executing.
   * - **Completed**: Completed.
   * - **Paused**: Paused.
   * - **Failed**: Failed.
   * - **Cancelled**: Cancelled.
   * - **Initializing**: Initializing.
   * 
   * @example
   * Draft
   */
  status?: string;
  /**
   * @remarks
   * **[Deprecated]** The strategy.
   * 
   * > To view the job strategy information, call the DescribeJobGroup operation.
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
   * The array.
   */
  list?: ListJobGroupsResponseBodyJobGroupsList[];
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
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
   * The ID of the asynchronous query. If the query is asynchronous, you can use this ID to obtain the query results.
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
   * The error message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
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

