// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobGroupsResponseBodyJobGroupsListExportProgress extends $dara.Model {
  /**
   * @example
   * http://www.xxx.com/xxx
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

export class ListJobGroupsResponseBodyJobGroupsListProgress extends $dara.Model {
  /**
   * @example
   * 5
   */
  cancelledNum?: number;
  /**
   * @example
   * 1578550074361
   */
  duration?: number;
  /**
   * @example
   * 10
   */
  executingNum?: number;
  /**
   * @example
   * 5
   */
  failedNum?: number;
  /**
   * @example
   * 5
   */
  pausedNum?: number;
  /**
   * @example
   * 10
   */
  scheduling?: number;
  /**
   * @example
   * 1578550074361
   */
  startTime?: number;
  status?: string;
  /**
   * @example
   * 3
   */
  totalCompleted?: number;
  /**
   * @example
   * 20
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

export class ListJobGroupsResponseBodyJobGroupsListStrategy extends $dara.Model {
  endTime?: number;
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
   * @example
   * 1578550074361
   */
  creationTime?: number;
  /**
   * @example
   * {}
   */
  exportProgress?: ListJobGroupsResponseBodyJobGroupsListExportProgress;
  /**
   * @example
   * c62e6789-28a8-41db-941e-171a01d3b3b9
   */
  jobDataParsingTaskId?: string;
  jobGroupDescription?: string;
  /**
   * @example
   * c62e6789-28a8-41db-941e-171a01d3b3b9
   */
  jobGroupId?: string;
  jobGroupName?: string;
  minConcurrency?: number;
  /**
   * @example
   * 1578550074361
   */
  modifyTime?: string;
  /**
   * @example
   * {}
   */
  progress?: ListJobGroupsResponseBodyJobGroupsListProgress;
  /**
   * @example
   * c62e6789-28a8-41db-941e-171a01d3b3b9
   */
  scriptId?: string;
  scriptName?: string;
  scriptVersion?: string;
  /**
   * @example
   * Draft
   */
  status?: string;
  /**
   * @example
   * {}
   */
  strategy?: ListJobGroupsResponseBodyJobGroupsListStrategy;
  /**
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
  list?: ListJobGroupsResponseBodyJobGroupsList[];
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
   * @example
   * 2bb0cf15-2126-4c9b-bc30-bb5301b96284
   */
  asyncTaskId?: string;
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
  jobGroups?: ListJobGroupsResponseBodyJobGroups;
  /**
   * @example
   * Success
   */
  message?: string;
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

