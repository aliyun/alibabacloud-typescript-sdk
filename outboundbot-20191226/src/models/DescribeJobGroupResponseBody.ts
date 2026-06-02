// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobGroupResponseBodyJobGroupExportProgress extends $dara.Model {
  /**
   * @example
   * https://oss-cn-shanghai.aliyuncs.com/xx.zip
   */
  fileHttpUrl?: string;
  /**
   * @example
   * 1
   */
  progress?: string;
  /**
   * @example
   * FINISHED
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

export class DescribeJobGroupResponseBodyJobGroupFlashSmsExtras extends $dara.Model {
  configId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroupProgressBriefs extends $dara.Model {
  /**
   * @example
   * score
   */
  key?: string;
  /**
   * @example
   * 5
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroupProgressCategories extends $dara.Model {
  /**
   * @example
   * success
   */
  key?: string;
  /**
   * @example
   * 10
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroupProgress extends $dara.Model {
  briefs?: DescribeJobGroupResponseBodyJobGroupProgressBriefs[];
  /**
   * @example
   * 0
   */
  cancelled?: number;
  categories?: DescribeJobGroupResponseBodyJobGroupProgressCategories[];
  /**
   * @example
   * 1000
   */
  duration?: number;
  /**
   * @example
   * 2
   */
  executing?: number;
  /**
   * @example
   * 0
   */
  failed?: number;
  /**
   * @example
   * 0
   */
  paused?: number;
  /**
   * @example
   * 5
   */
  scheduling?: number;
  /**
   * @example
   * 1578881227404
   */
  startTime?: number;
  /**
   * @example
   * Executing
   */
  status?: string;
  /**
   * @example
   * 2
   */
  totalCompleted?: number;
  /**
   * @example
   * 10
   */
  totalJobs?: number;
  /**
   * @example
   * 1
   */
  totalNotAnswered?: number;
  static names(): { [key: string]: string } {
    return {
      briefs: 'Briefs',
      cancelled: 'Cancelled',
      categories: 'Categories',
      duration: 'Duration',
      executing: 'Executing',
      failed: 'Failed',
      paused: 'Paused',
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
      briefs: { 'type': 'array', 'itemType': DescribeJobGroupResponseBodyJobGroupProgressBriefs },
      cancelled: 'number',
      categories: { 'type': 'array', 'itemType': DescribeJobGroupResponseBodyJobGroupProgressCategories },
      duration: 'number',
      executing: 'number',
      failed: 'number',
      paused: 'number',
      scheduling: 'number',
      startTime: 'number',
      status: 'string',
      totalCompleted: 'number',
      totalJobs: 'number',
      totalNotAnswered: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.briefs)) {
      $dara.Model.validateArray(this.briefs);
    }
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroupRecallStrategy extends $dara.Model {
  /**
   * @example
   * false
   */
  emptyNumberIgnore?: boolean;
  /**
   * @example
   * false
   */
  inArrearsIgnore?: boolean;
  /**
   * @example
   * false
   */
  outOfServiceIgnore?: boolean;
  static names(): { [key: string]: string } {
    return {
      emptyNumberIgnore: 'EmptyNumberIgnore',
      inArrearsIgnore: 'InArrearsIgnore',
      outOfServiceIgnore: 'OutOfServiceIgnore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emptyNumberIgnore: 'boolean',
      inArrearsIgnore: 'boolean',
      outOfServiceIgnore: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroupResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  clientHangupNum?: number;
  /**
   * @example
   * 1
   */
  finishedNum?: number;
  /**
   * @example
   * 1
   */
  noInteractNum?: number;
  /**
   * @example
   * 1
   */
  timeoutHangupNum?: number;
  /**
   * @example
   * 1
   */
  unrecognizedNum?: number;
  static names(): { [key: string]: string } {
    return {
      clientHangupNum: 'ClientHangupNum',
      finishedNum: 'FinishedNum',
      noInteractNum: 'NoInteractNum',
      timeoutHangupNum: 'TimeoutHangupNum',
      unrecognizedNum: 'UnrecognizedNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientHangupNum: 'number',
      finishedNum: 'number',
      noInteractNum: 'number',
      timeoutHangupNum: 'number',
      unrecognizedNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroupStrategyWorkingTime extends $dara.Model {
  /**
   * @example
   * 09:00:00
   */
  beginTime?: string;
  /**
   * @example
   * 12:00:00
   */
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroupStrategy extends $dara.Model {
  /**
   * @example
   * {}
   */
  customized?: string;
  /**
   * @example
   * 1579881227404
   */
  endTime?: number;
  /**
   * @example
   * NONE
   */
  followUpStrategy?: string;
  /**
   * @example
   * false
   */
  isTemplate?: boolean;
  /**
   * @example
   * 2
   */
  maxAttemptsPerDay?: number;
  /**
   * @example
   * 10
   */
  minAttemptInterval?: number;
  /**
   * @example
   * Once
   */
  repeatBy?: string;
  repeatDays?: string[];
  repeatable?: boolean;
  /**
   * @example
   * LocalFirst
   */
  routingStrategy?: string;
  /**
   * @example
   * 1578881227404
   */
  startTime?: number;
  strategyDescription?: string;
  /**
   * @example
   * a2bff22c-2604-4df2-83d6-5952e2438c5a
   */
  strategyId?: string;
  strategyName?: string;
  /**
   * @example
   * Repeatable
   */
  type?: string;
  workingTime?: DescribeJobGroupResponseBodyJobGroupStrategyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      customized: 'Customized',
      endTime: 'EndTime',
      followUpStrategy: 'FollowUpStrategy',
      isTemplate: 'IsTemplate',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
      repeatDays: 'RepeatDays',
      repeatable: 'Repeatable',
      routingStrategy: 'RoutingStrategy',
      startTime: 'StartTime',
      strategyDescription: 'StrategyDescription',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      type: 'Type',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customized: 'string',
      endTime: 'number',
      followUpStrategy: 'string',
      isTemplate: 'boolean',
      maxAttemptsPerDay: 'number',
      minAttemptInterval: 'number',
      repeatBy: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      repeatable: 'boolean',
      routingStrategy: 'string',
      startTime: 'number',
      strategyDescription: 'string',
      strategyId: 'string',
      strategyName: 'string',
      type: 'string',
      workingTime: { 'type': 'array', 'itemType': DescribeJobGroupResponseBodyJobGroupStrategyWorkingTime },
    };
  }

  validate() {
    if(Array.isArray(this.repeatDays)) {
      $dara.Model.validateArray(this.repeatDays);
    }
    if(Array.isArray(this.workingTime)) {
      $dara.Model.validateArray(this.workingTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroup extends $dara.Model {
  callingNumbers?: string[];
  /**
   * @example
   * 1578881227404
   */
  creationTime?: number;
  exportProgress?: DescribeJobGroupResponseBodyJobGroupExportProgress;
  flashSmsExtras?: DescribeJobGroupResponseBodyJobGroupFlashSmsExtras;
  /**
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401/a5a9a310-b902-4674-a6e1-29975cbaa312_100.xlsx
   */
  jobDataParsingTaskId?: string;
  /**
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401/a5a9a310-b902-4674-a6e1-29975cbaa312_100.xlsx
   */
  jobFilePath?: string;
  jobGroupDescription?: string;
  /**
   * @example
   * 46a9ad0c-3e11-44da-a9a7-2c21bf5ce185
   */
  jobGroupId?: string;
  jobGroupName?: string;
  /**
   * @example
   * 1
   */
  minConcurrency?: number;
  /**
   * @example
   * 1578881227404
   */
  modifyTime?: string;
  /**
   * @example
   * 1
   */
  priority?: string;
  progress?: DescribeJobGroupResponseBodyJobGroupProgress;
  recallCallingNumbers?: string[];
  recallStrategy?: DescribeJobGroupResponseBodyJobGroupRecallStrategy;
  result?: DescribeJobGroupResponseBodyJobGroupResult;
  /**
   * @example
   * 30
   */
  ringingDuration?: number;
  /**
   * @example
   * fce6c599-8ede-40e3-9f78-0928eda7b4e8
   */
  scenarioId?: string;
  /**
   * @example
   * 49f00b0d-78ac-4d51-91de-a9e8e92b8470
   */
  scriptId?: string;
  scriptName?: string;
  scriptNluEngine?: string;
  /**
   * @example
   * 49f00b0d-78ac-4d51-91de-a9e8e92b8470
   */
  scriptVersion?: string;
  /**
   * @example
   * Completed
   */
  status?: string;
  strategy?: DescribeJobGroupResponseBodyJobGroupStrategy;
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      creationTime: 'CreationTime',
      exportProgress: 'ExportProgress',
      flashSmsExtras: 'FlashSmsExtras',
      jobDataParsingTaskId: 'JobDataParsingTaskId',
      jobFilePath: 'JobFilePath',
      jobGroupDescription: 'JobGroupDescription',
      jobGroupId: 'JobGroupId',
      jobGroupName: 'JobGroupName',
      minConcurrency: 'MinConcurrency',
      modifyTime: 'ModifyTime',
      priority: 'Priority',
      progress: 'Progress',
      recallCallingNumbers: 'RecallCallingNumbers',
      recallStrategy: 'RecallStrategy',
      result: 'Result',
      ringingDuration: 'RingingDuration',
      scenarioId: 'ScenarioId',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      scriptNluEngine: 'ScriptNluEngine',
      scriptVersion: 'ScriptVersion',
      status: 'Status',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'number',
      exportProgress: DescribeJobGroupResponseBodyJobGroupExportProgress,
      flashSmsExtras: DescribeJobGroupResponseBodyJobGroupFlashSmsExtras,
      jobDataParsingTaskId: 'string',
      jobFilePath: 'string',
      jobGroupDescription: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      minConcurrency: 'number',
      modifyTime: 'string',
      priority: 'string',
      progress: DescribeJobGroupResponseBodyJobGroupProgress,
      recallCallingNumbers: { 'type': 'array', 'itemType': 'string' },
      recallStrategy: DescribeJobGroupResponseBodyJobGroupRecallStrategy,
      result: DescribeJobGroupResponseBodyJobGroupResult,
      ringingDuration: 'number',
      scenarioId: 'string',
      scriptId: 'string',
      scriptName: 'string',
      scriptNluEngine: 'string',
      scriptVersion: 'string',
      status: 'string',
      strategy: DescribeJobGroupResponseBodyJobGroupStrategy,
    };
  }

  validate() {
    if(Array.isArray(this.callingNumbers)) {
      $dara.Model.validateArray(this.callingNumbers);
    }
    if(this.exportProgress && typeof (this.exportProgress as any).validate === 'function') {
      (this.exportProgress as any).validate();
    }
    if(this.flashSmsExtras && typeof (this.flashSmsExtras as any).validate === 'function') {
      (this.flashSmsExtras as any).validate();
    }
    if(this.progress && typeof (this.progress as any).validate === 'function') {
      (this.progress as any).validate();
    }
    if(Array.isArray(this.recallCallingNumbers)) {
      $dara.Model.validateArray(this.recallCallingNumbers);
    }
    if(this.recallStrategy && typeof (this.recallStrategy as any).validate === 'function') {
      (this.recallStrategy as any).validate();
    }
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
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

export class DescribeJobGroupResponseBody extends $dara.Model {
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
  jobGroup?: DescribeJobGroupResponseBodyJobGroup;
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
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroup: 'JobGroup',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobGroup: DescribeJobGroupResponseBodyJobGroup,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.jobGroup && typeof (this.jobGroup as any).validate === 'function') {
      (this.jobGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

