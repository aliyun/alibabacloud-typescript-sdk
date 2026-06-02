// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobGroupsAsyncResponseBodyJobGroupsExportProgress extends $dara.Model {
  /**
   * @example
   * http://
   */
  fileHttpUrl?: string;
  /**
   * @example
   * 50
   */
  progress?: string;
  /**
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
   * @example
   * 10
   */
  cancelledNum?: number;
  /**
   * @example
   * 1000
   */
  duration?: number;
  /**
   * @example
   * 20
   */
  executingNum?: number;
  /**
   * @example
   * 10
   */
  failedNum?: number;
  /**
   * @example
   * 10
   */
  pausedNum?: number;
  /**
   * @example
   * 20
   */
  scheduling?: number;
  /**
   * @example
   * 1640316786259
   */
  startTime?: number;
  status?: string;
  /**
   * @example
   * 10
   */
  totalCompleted?: number;
  /**
   * @example
   * 100
   */
  totalJobs?: number;
  /**
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
   * @example
   * 1640316786259
   */
  endTime?: number;
  /**
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
   * @example
   * 1640316786259
   */
  creationTime?: number;
  /**
   * @example
   * {}
   */
  exportProgress?: ListJobGroupsAsyncResponseBodyJobGroupsExportProgress;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  jobDataParsingTaskId?: string;
  /**
   * @example
   * xxx
   */
  jobGroupDescription?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  jobGroupId?: string;
  /**
   * @example
   * xxx
   */
  jobGroupName?: string;
  minConcurrency?: number;
  /**
   * @example
   * 1640316786259
   */
  modifyTime?: string;
  /**
   * @example
   * {}
   */
  progress?: ListJobGroupsAsyncResponseBodyJobGroupsProgress;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  scriptId?: string;
  /**
   * @example
   * xxxx
   */
  scriptName?: string;
  /**
   * @example
   * 111
   */
  scriptVersion?: string;
  /**
   * @example
   * Scheduling
   */
  status?: string;
  /**
   * @example
   * {}
   */
  strategy?: ListJobGroupsAsyncResponseBodyJobGroupsStrategy;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  jobGroups?: ListJobGroupsAsyncResponseBodyJobGroups[];
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * true
   */
  timeout?: boolean;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  /**
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

