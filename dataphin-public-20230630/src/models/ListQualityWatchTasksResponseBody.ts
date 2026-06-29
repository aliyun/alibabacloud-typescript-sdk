// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityWatchTasksResponseBodyPageResultQualityWatchTaskListRuleCountInfoStrongRuleCount extends $dara.Model {
  /**
   * @remarks
   * The number of rules that failed to execute.
   * 
   * @example
   * 0
   */
  errorRuleCount?: number;
  /**
   * @remarks
   * The number of rules that have been executed.
   * 
   * @example
   * 1
   */
  finishedRuleCount?: number;
  /**
   * @remarks
   * The number of rules that were executed successfully.
   * 
   * @example
   * 1
   */
  successRuleCount?: number;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 1
   */
  totalRuleCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorRuleCount: 'ErrorRuleCount',
      finishedRuleCount: 'FinishedRuleCount',
      successRuleCount: 'SuccessRuleCount',
      totalRuleCount: 'TotalRuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorRuleCount: 'number',
      finishedRuleCount: 'number',
      successRuleCount: 'number',
      totalRuleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityWatchTasksResponseBodyPageResultQualityWatchTaskListRuleCountInfoValidateRuleCount extends $dara.Model {
  /**
   * @remarks
   * The number of rules that failed to execute.
   * 
   * @example
   * 0
   */
  errorRuleCount?: number;
  /**
   * @remarks
   * The number of rules that have been executed.
   * 
   * @example
   * 1
   */
  finishedRuleCount?: number;
  /**
   * @remarks
   * The number of rules that were executed successfully.
   * 
   * @example
   * 1
   */
  successRuleCount?: number;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 1
   */
  totalRuleCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorRuleCount: 'ErrorRuleCount',
      finishedRuleCount: 'FinishedRuleCount',
      successRuleCount: 'SuccessRuleCount',
      totalRuleCount: 'TotalRuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorRuleCount: 'number',
      finishedRuleCount: 'number',
      successRuleCount: 'number',
      totalRuleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityWatchTasksResponseBodyPageResultQualityWatchTaskListRuleCountInfoWeakRuleCount extends $dara.Model {
  /**
   * @remarks
   * The number of rules that failed to execute.
   * 
   * @example
   * 0
   */
  errorRuleCount?: number;
  /**
   * @remarks
   * The number of rules that have been executed.
   * 
   * @example
   * 1
   */
  finishedRuleCount?: number;
  /**
   * @remarks
   * The number of rules that were executed successfully.
   * 
   * @example
   * 1
   */
  successRuleCount?: number;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 1
   */
  totalRuleCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorRuleCount: 'ErrorRuleCount',
      finishedRuleCount: 'FinishedRuleCount',
      successRuleCount: 'SuccessRuleCount',
      totalRuleCount: 'TotalRuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorRuleCount: 'number',
      finishedRuleCount: 'number',
      successRuleCount: 'number',
      totalRuleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityWatchTasksResponseBodyPageResultQualityWatchTaskListRuleCountInfo extends $dara.Model {
  /**
   * @remarks
   * The strong rule count.
   */
  strongRuleCount?: ListQualityWatchTasksResponseBodyPageResultQualityWatchTaskListRuleCountInfoStrongRuleCount;
  /**
   * @remarks
   * The validation rule count.
   */
  validateRuleCount?: ListQualityWatchTasksResponseBodyPageResultQualityWatchTaskListRuleCountInfoValidateRuleCount;
  /**
   * @remarks
   * The weak rule count.
   */
  weakRuleCount?: ListQualityWatchTasksResponseBodyPageResultQualityWatchTaskListRuleCountInfoWeakRuleCount;
  static names(): { [key: string]: string } {
    return {
      strongRuleCount: 'StrongRuleCount',
      validateRuleCount: 'ValidateRuleCount',
      weakRuleCount: 'WeakRuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strongRuleCount: ListQualityWatchTasksResponseBodyPageResultQualityWatchTaskListRuleCountInfoStrongRuleCount,
      validateRuleCount: ListQualityWatchTasksResponseBodyPageResultQualityWatchTaskListRuleCountInfoValidateRuleCount,
      weakRuleCount: ListQualityWatchTasksResponseBodyPageResultQualityWatchTaskListRuleCountInfoWeakRuleCount,
    };
  }

  validate() {
    if(this.strongRuleCount && typeof (this.strongRuleCount as any).validate === 'function') {
      (this.strongRuleCount as any).validate();
    }
    if(this.validateRuleCount && typeof (this.validateRuleCount as any).validate === 'function') {
      (this.validateRuleCount as any).validate();
    }
    if(this.weakRuleCount && typeof (this.weakRuleCount as any).validate === 'function') {
      (this.weakRuleCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityWatchTasksResponseBodyPageResultQualityWatchTaskList extends $dara.Model {
  /**
   * @remarks
   * The business date.
   * 
   * @example
   * 2025-06-30
   */
  bizDate?: string;
  /**
   * @remarks
   * The business date format.
   * 
   * @example
   * yyyy-MM-dd
   */
  bizDateFormat?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @remarks
   * The end time, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2025-06-30 20:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The quality watchtask ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The user ID of the last modifier.
   * 
   * @example
   * 30012011
   */
  modifier?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The user ID of the quality owner.
   * 
   * @example
   * 30012011
   */
  qualityOwner?: string;
  /**
   * @remarks
   * The name of the quality owner.
   * 
   * @example
   * test
   */
  qualityOwnerName?: string;
  /**
   * @remarks
   * The quality rule count information.
   */
  ruleCountInfo?: ListQualityWatchTasksResponseBodyPageResultQualityWatchTaskListRuleCountInfo;
  /**
   * @remarks
   * The quality rule IDs.
   */
  ruleIdList?: number[];
  /**
   * @remarks
   * The start time, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2025-06-30 08:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The task statuses. Valid values:
   * - NOT_RUN: not executed.
   * - WAITING: waiting.
   * - RUNNING: running.
   * - SUCCESS: succeeded.
   * - FAILED: failed.
   * - CANCEL: canceled.
   * - TIMEOUT: timed out.
   * - OFFLINE: offline.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The monitored object ID.
   * 
   * @example
   * 1
   */
  watchId?: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      bizDateFormat: 'BizDateFormat',
      createTime: 'CreateTime',
      creator: 'Creator',
      endTime: 'EndTime',
      id: 'Id',
      modifier: 'Modifier',
      modifyTime: 'ModifyTime',
      qualityOwner: 'QualityOwner',
      qualityOwnerName: 'QualityOwnerName',
      ruleCountInfo: 'RuleCountInfo',
      ruleIdList: 'RuleIdList',
      startTime: 'StartTime',
      status: 'Status',
      watchId: 'WatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      bizDateFormat: 'string',
      createTime: 'string',
      creator: 'string',
      endTime: 'string',
      id: 'number',
      modifier: 'string',
      modifyTime: 'string',
      qualityOwner: 'string',
      qualityOwnerName: 'string',
      ruleCountInfo: ListQualityWatchTasksResponseBodyPageResultQualityWatchTaskListRuleCountInfo,
      ruleIdList: { 'type': 'array', 'itemType': 'number' },
      startTime: 'string',
      status: 'string',
      watchId: 'number',
    };
  }

  validate() {
    if(this.ruleCountInfo && typeof (this.ruleCountInfo as any).validate === 'function') {
      (this.ruleCountInfo as any).validate();
    }
    if(Array.isArray(this.ruleIdList)) {
      $dara.Model.validateArray(this.ruleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityWatchTasksResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The list of quality watchtasks.
   */
  qualityWatchTaskList?: ListQualityWatchTasksResponseBodyPageResultQualityWatchTaskList[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      qualityWatchTaskList: 'QualityWatchTaskList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityWatchTaskList: { 'type': 'array', 'itemType': ListQualityWatchTasksResponseBodyPageResultQualityWatchTaskList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qualityWatchTaskList)) {
      $dara.Model.validateArray(this.qualityWatchTaskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityWatchTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
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
   * The error details from the backend.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The paged query result.
   */
  pageResult?: ListQualityWatchTasksResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListQualityWatchTasksResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

