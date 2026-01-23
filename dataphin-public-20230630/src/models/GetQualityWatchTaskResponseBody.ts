// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityWatchTaskResponseBodyWatchTaskInfoRuleCountInfoStrongRuleCount extends $dara.Model {
  /**
   * @example
   * 0
   */
  errorRuleCount?: number;
  /**
   * @example
   * 1
   */
  finishedRuleCount?: number;
  /**
   * @example
   * 1
   */
  successRuleCount?: number;
  /**
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
   * @example
   * 0
   */
  errorRuleCount?: number;
  /**
   * @example
   * 1
   */
  finishedRuleCount?: number;
  /**
   * @example
   * 1
   */
  successRuleCount?: number;
  /**
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
   * @example
   * 0
   */
  errorRuleCount?: number;
  /**
   * @example
   * 1
   */
  finishedRuleCount?: number;
  /**
   * @example
   * 1
   */
  successRuleCount?: number;
  /**
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
  strongRuleCount?: GetQualityWatchTaskResponseBodyWatchTaskInfoRuleCountInfoStrongRuleCount;
  validateRuleCount?: GetQualityWatchTaskResponseBodyWatchTaskInfoRuleCountInfoValidateRuleCount;
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
   * @example
   * 2025-06-30
   */
  bizDate?: string;
  /**
   * @example
   * yyyy-MM-dd
   */
  bizDateFormat?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @example
   * 2025-06-30 20:00:00
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 30012011
   */
  modifier?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @example
   * 30012011
   */
  qualityOwner?: string;
  /**
   * @example
   * test
   */
  qualityOwnerName?: string;
  ruleCountInfo?: GetQualityWatchTaskResponseBodyWatchTaskInfoRuleCountInfo;
  ruleIdList?: number[];
  /**
   * @example
   * 2025-06-30 08:00:00
   */
  startTime?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
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
  success?: boolean;
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

