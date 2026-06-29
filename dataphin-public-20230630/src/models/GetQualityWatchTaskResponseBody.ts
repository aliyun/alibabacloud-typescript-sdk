// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityWatchTaskResponseBodyWatchTaskInfoRuleCountInfoStrongRuleCount extends $dara.Model {
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

export class GetQualityWatchTaskResponseBodyWatchTaskInfoRuleCountInfoValidateRuleCount extends $dara.Model {
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

export class GetQualityWatchTaskResponseBodyWatchTaskInfoRuleCountInfoWeakRuleCount extends $dara.Model {
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

export class GetQualityWatchTaskResponseBodyWatchTaskInfoRuleCountInfo extends $dara.Model {
  /**
   * @remarks
   * The strong rule count.
   */
  strongRuleCount?: GetQualityWatchTaskResponseBodyWatchTaskInfoRuleCountInfoStrongRuleCount;
  /**
   * @remarks
   * The validation rule count.
   */
  validateRuleCount?: GetQualityWatchTaskResponseBodyWatchTaskInfoRuleCountInfoValidateRuleCount;
  /**
   * @remarks
   * The weak rule count.
   */
  weakRuleCount?: GetQualityWatchTaskResponseBodyWatchTaskInfoRuleCountInfoWeakRuleCount;
  static names(): { [key: string]: string } {
    return {
      strongRuleCount: 'StrongRuleCount',
      validateRuleCount: 'ValidateRuleCount',
      weakRuleCount: 'WeakRuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strongRuleCount: GetQualityWatchTaskResponseBodyWatchTaskInfoRuleCountInfoStrongRuleCount,
      validateRuleCount: GetQualityWatchTaskResponseBodyWatchTaskInfoRuleCountInfoValidateRuleCount,
      weakRuleCount: GetQualityWatchTaskResponseBodyWatchTaskInfoRuleCountInfoWeakRuleCount,
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

export class GetQualityWatchTaskResponseBodyWatchTaskInfo extends $dara.Model {
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
   * The end time. Time format: yyyy-MM-dd HH:mm:ss.
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
  ruleCountInfo?: GetQualityWatchTaskResponseBodyWatchTaskInfoRuleCountInfo;
  /**
   * @remarks
   * The list of quality rule IDs.
   */
  ruleIdList?: number[];
  /**
   * @remarks
   * The start time. Time format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-06-30 08:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - NOT_RUN: not executed.
   * - WAITING: waiting.
   * - RUNNING: executing.
   * - SUCCESS: executed successfully.
   * - FAILED: execution failed.
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
      ruleCountInfo: GetQualityWatchTaskResponseBodyWatchTaskInfoRuleCountInfo,
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

export class GetQualityWatchTaskResponseBody extends $dara.Model {
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
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
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
  /**
   * @remarks
   * The details of the monitoring node task object.
   */
  watchTaskInfo?: GetQualityWatchTaskResponseBodyWatchTaskInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      watchTaskInfo: 'WatchTaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      watchTaskInfo: GetQualityWatchTaskResponseBodyWatchTaskInfo,
    };
  }

  validate() {
    if(this.watchTaskInfo && typeof (this.watchTaskInfo as any).validate === 'function') {
      (this.watchTaskInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

