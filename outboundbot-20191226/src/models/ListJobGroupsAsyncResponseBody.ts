// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobGroupsAsyncResponseBodyJobGroupsExportProgress extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** The download URL.
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
   * 50
   */
  progress?: string;
  /**
   * @remarks
   * The status.
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

export class ListJobGroupsAsyncResponseBodyJobGroupsProgress extends $dara.Model {
  /**
   * @remarks
   * The number of canceled jobs.
   * 
   * @example
   * 10
   */
  cancelledNum?: number;
  /**
   * @remarks
   * **[Deprecated]** The total execution duration up to the current time.
   * 
   * @example
   * 1000
   */
  duration?: number;
  /**
   * @remarks
   * The number of jobs being executed.
   * 
   * @example
   * 20
   */
  executingNum?: number;
  /**
   * @remarks
   * The number of failed jobs.
   * 
   * @example
   * 10
   */
  failedNum?: number;
  /**
   * @remarks
   * The number of paused jobs.
   * 
   * @example
   * 10
   */
  pausedNum?: number;
  /**
   * @remarks
   * The number of jobs being scheduled.
   * 
   * @example
   * 20
   */
  scheduling?: number;
  /**
   * @remarks
   * **[Deprecated]** The start time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1640316786259
   */
  startTime?: number;
  /**
   * @remarks
   * The execution status. Valid values:
   * 
   * - Draft: The job group is a draft.
   * - Scheduling: The job group is being scheduled.
   * - Executing: The job group is being executed.
   * - Completed: The job group is completed.
   * - Paused: The job group is paused.
   * - Failed: The job group failed.
   * - Cancelled: The job group is canceled.
   * - Initializing: The job group is being initialized.
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
   * 10
   */
  totalCompleted?: number;
  /**
   * @remarks
   * The total number of jobs.
   * 
   * @example
   * 100
   */
  totalJobs?: number;
  /**
   * @remarks
   * **[Deprecated]** The number of unanswered jobs.
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

export class ListJobGroupsAsyncResponseBodyJobGroupsStrategy extends $dara.Model {
  /**
   * @remarks
   * The end time of the strategy. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1640316786259
   */
  endTime?: number;
  /**
   * @remarks
   * The start time of the strategy. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1640316786259
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

export class ListJobGroupsAsyncResponseBodyJobGroups extends $dara.Model {
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1640316786259
   */
  creationTime?: number;
  /**
   * @remarks
   * The export progress.
   * 
   * @example
   * {}
   */
  exportProgress?: ListJobGroupsAsyncResponseBodyJobGroupsExportProgress;
  /**
   * @remarks
   * **[Deprecated]** The ID of the jobFile parsing task.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  jobDataParsingTaskId?: string;
  /**
   * @remarks
   * The description of the job group.
   * 
   * @example
   * xxx
   */
  jobGroupDescription?: string;
  /**
   * @remarks
   * The ID of the job group.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The name of the job group.
   * 
   * @example
   * xxx
   */
  jobGroupName?: string;
  /**
   * @remarks
   * The minimum concurrency.
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
   * 1640316786259
   */
  modifyTime?: string;
  /**
   * @remarks
   * The node statistics information.
   * 
   * @example
   * {}
   */
  progress?: ListJobGroupsAsyncResponseBodyJobGroupsProgress;
  /**
   * @remarks
   * The ID of the script.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  scriptId?: string;
  /**
   * @remarks
   * The name of the script.
   * 
   * @example
   * xxxx
   */
  scriptName?: string;
  /**
   * @remarks
   * The version of the script.
   * 
   * @example
   * 111
   */
  scriptVersion?: string;
  /**
   * @remarks
   * The status of the job group.
   * 
   * @example
   * Scheduling
   */
  status?: string;
  /**
   * @remarks
   * **[Deprecated]** The strategy.
   * 
   * > To view the strategy information of the job group, call the DescribeJobGroup operation.
   * 
   * @example
   * {}
   */
  strategy?: ListJobGroupsAsyncResponseBodyJobGroupsStrategy;
  /**
   * @remarks
   * The total number of calls.
   * 
   * @example
   * 100
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
      exportProgress: ListJobGroupsAsyncResponseBodyJobGroupsExportProgress,
      jobDataParsingTaskId: 'string',
      jobGroupDescription: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      minConcurrency: 'number',
      modifyTime: 'string',
      progress: ListJobGroupsAsyncResponseBodyJobGroupsProgress,
      scriptId: 'string',
      scriptName: 'string',
      scriptVersion: 'string',
      status: 'string',
      strategy: ListJobGroupsAsyncResponseBodyJobGroupsStrategy,
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

export class ListJobGroupsAsyncResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
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
  jobGroups?: ListJobGroupsAsyncResponseBodyJobGroups[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
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
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates whether the request timed out.
   * 
   * @example
   * true
   */
  timeout?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * Indicates whether the request is valid.
   * 
   * @example
   * true
   */
  vaild?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroups: 'JobGroups',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      timeout: 'Timeout',
      totalCount: 'TotalCount',
      vaild: 'Vaild',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobGroups: { 'type': 'array', 'itemType': ListJobGroupsAsyncResponseBodyJobGroups },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      timeout: 'boolean',
      totalCount: 'number',
      vaild: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.jobGroups)) {
      $dara.Model.validateArray(this.jobGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

