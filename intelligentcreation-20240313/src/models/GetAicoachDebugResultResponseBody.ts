// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachDebugResultResponseBodyDialogueList extends $dara.Model {
  message?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachDebugResultResponseBodyTaskReportDeductionRule extends $dara.Model {
  hit?: boolean;
  name?: string;
  reason?: string[];
  static names(): { [key: string]: string } {
    return {
      hit: 'hit',
      name: 'name',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hit: 'boolean',
      name: 'string',
      reason: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.reason)) {
      $dara.Model.validateArray(this.reason);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachDebugResultResponseBodyTaskReportExpressiveness extends $dara.Model {
  name?: string;
  reason?: string[];
  scoreRounds?: number;
  status?: string;
  totalRounds?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      reason: 'reason',
      scoreRounds: 'scoreRounds',
      status: 'status',
      totalRounds: 'totalRounds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      reason: { 'type': 'array', 'itemType': 'string' },
      scoreRounds: 'number',
      status: 'string',
      totalRounds: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.reason)) {
      $dara.Model.validateArray(this.reason);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachDebugResultResponseBodyTaskReportPointAnswerList extends $dara.Model {
  reason?: string[];
  status?: number;
  static names(): { [key: string]: string } {
    return {
      reason: 'reason',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.reason)) {
      $dara.Model.validateArray(this.reason);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachDebugResultResponseBodyTaskReportPoint extends $dara.Model {
  answerList?: GetAICoachDebugResultResponseBodyTaskReportPointAnswerList[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      answerList: 'answerList',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerList: { 'type': 'array', 'itemType': GetAICoachDebugResultResponseBodyTaskReportPointAnswerList },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.answerList)) {
      $dara.Model.validateArray(this.answerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachDebugResultResponseBodyTaskReport extends $dara.Model {
  deductionRule?: GetAICoachDebugResultResponseBodyTaskReportDeductionRule;
  expressiveness?: GetAICoachDebugResultResponseBodyTaskReportExpressiveness;
  point?: GetAICoachDebugResultResponseBodyTaskReportPoint;
  static names(): { [key: string]: string } {
    return {
      deductionRule: 'deductionRule',
      expressiveness: 'expressiveness',
      point: 'point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductionRule: GetAICoachDebugResultResponseBodyTaskReportDeductionRule,
      expressiveness: GetAICoachDebugResultResponseBodyTaskReportExpressiveness,
      point: GetAICoachDebugResultResponseBodyTaskReportPoint,
    };
  }

  validate() {
    if(this.deductionRule && typeof (this.deductionRule as any).validate === 'function') {
      (this.deductionRule as any).validate();
    }
    if(this.expressiveness && typeof (this.expressiveness as any).validate === 'function') {
      (this.expressiveness as any).validate();
    }
    if(this.point && typeof (this.point as any).validate === 'function') {
      (this.point as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachDebugResultResponseBody extends $dara.Model {
  aliyunSubId?: string;
  dataId?: string;
  dataType?: number;
  dialogueList?: GetAICoachDebugResultResponseBodyDialogueList[];
  errorCode?: string;
  errorMessage?: string;
  finishTime?: string;
  gmtCreate?: string;
  gmtModified?: string;
  requestId?: string;
  scriptDebugId?: string;
  status?: number;
  success?: boolean;
  taskId?: string;
  taskReport?: GetAICoachDebugResultResponseBodyTaskReport;
  static names(): { [key: string]: string } {
    return {
      aliyunSubId: 'aliyunSubId',
      dataId: 'dataId',
      dataType: 'dataType',
      dialogueList: 'dialogueList',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      finishTime: 'finishTime',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      requestId: 'requestId',
      scriptDebugId: 'scriptDebugId',
      status: 'status',
      success: 'success',
      taskId: 'taskId',
      taskReport: 'taskReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunSubId: 'string',
      dataId: 'string',
      dataType: 'number',
      dialogueList: { 'type': 'array', 'itemType': GetAICoachDebugResultResponseBodyDialogueList },
      errorCode: 'string',
      errorMessage: 'string',
      finishTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      requestId: 'string',
      scriptDebugId: 'string',
      status: 'number',
      success: 'boolean',
      taskId: 'string',
      taskReport: GetAICoachDebugResultResponseBodyTaskReport,
    };
  }

  validate() {
    if(Array.isArray(this.dialogueList)) {
      $dara.Model.validateArray(this.dialogueList);
    }
    if(this.taskReport && typeof (this.taskReport as any).validate === 'function') {
      (this.taskReport as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

