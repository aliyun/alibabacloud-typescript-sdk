// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAICoachDebugRequestDeductionRule extends $dara.Model {
  deductionRuleId?: string;
  description?: string;
  punishmentTypes?: string[];
  ruleValue?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      deductionRuleId: 'deductionRuleId',
      description: 'description',
      punishmentTypes: 'punishmentTypes',
      ruleValue: 'ruleValue',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductionRuleId: 'string',
      description: 'string',
      punishmentTypes: { 'type': 'array', 'itemType': 'string' },
      ruleValue: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.punishmentTypes)) {
      $dara.Model.validateArray(this.punishmentTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAICoachDebugRequestDialogueList extends $dara.Model {
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

export class SubmitAICoachDebugRequestExpressiveness extends $dara.Model {
  desc?: string;
  expressivenessId?: string;
  name?: string;
  rule?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      expressivenessId: 'expressivenessId',
      name: 'name',
      rule: 'rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      expressivenessId: 'string',
      name: 'string',
      rule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAICoachDebugRequestPointAnswerListAnswerValuesKeywordValues extends $dara.Model {
  name?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAICoachDebugRequestPointAnswerListAnswerValuesScoringRules extends $dara.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAICoachDebugRequestPointAnswerListAnswerValues extends $dara.Model {
  answerName?: string;
  answerWeight?: number;
  keywordValues?: SubmitAICoachDebugRequestPointAnswerListAnswerValuesKeywordValues[];
  keywordWeight?: number;
  scoringRules?: SubmitAICoachDebugRequestPointAnswerListAnswerValuesScoringRules[];
  static names(): { [key: string]: string } {
    return {
      answerName: 'answerName',
      answerWeight: 'answerWeight',
      keywordValues: 'keywordValues',
      keywordWeight: 'keywordWeight',
      scoringRules: 'scoringRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerName: 'string',
      answerWeight: 'number',
      keywordValues: { 'type': 'array', 'itemType': SubmitAICoachDebugRequestPointAnswerListAnswerValuesKeywordValues },
      keywordWeight: 'number',
      scoringRules: { 'type': 'array', 'itemType': SubmitAICoachDebugRequestPointAnswerListAnswerValuesScoringRules },
    };
  }

  validate() {
    if(Array.isArray(this.keywordValues)) {
      $dara.Model.validateArray(this.keywordValues);
    }
    if(Array.isArray(this.scoringRules)) {
      $dara.Model.validateArray(this.scoringRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAICoachDebugRequestPointAnswerListParameters extends $dara.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class SubmitAICoachDebugRequestPointAnswerList extends $dara.Model {
  answerValues?: SubmitAICoachDebugRequestPointAnswerListAnswerValues[];
  enabledKeyword?: boolean;
  nameList?: string[];
  operators?: string;
  parameters?: SubmitAICoachDebugRequestPointAnswerListParameters[];
  score?: number;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      answerValues: 'answerValues',
      enabledKeyword: 'enabledKeyword',
      nameList: 'nameList',
      operators: 'operators',
      parameters: 'parameters',
      score: 'score',
      type: 'type',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerValues: { 'type': 'array', 'itemType': SubmitAICoachDebugRequestPointAnswerListAnswerValues },
      enabledKeyword: 'boolean',
      nameList: { 'type': 'array', 'itemType': 'string' },
      operators: 'string',
      parameters: { 'type': 'array', 'itemType': SubmitAICoachDebugRequestPointAnswerListParameters },
      score: 'number',
      type: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.answerValues)) {
      $dara.Model.validateArray(this.answerValues);
    }
    if(Array.isArray(this.nameList)) {
      $dara.Model.validateArray(this.nameList);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAICoachDebugRequestPoint extends $dara.Model {
  answerList?: SubmitAICoachDebugRequestPointAnswerList[];
  knowledgeList?: string[];
  name?: string;
  questionSample?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      answerList: 'answerList',
      knowledgeList: 'knowledgeList',
      name: 'name',
      questionSample: 'questionSample',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerList: { 'type': 'array', 'itemType': SubmitAICoachDebugRequestPointAnswerList },
      knowledgeList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      questionSample: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.answerList)) {
      $dara.Model.validateArray(this.answerList);
    }
    if(Array.isArray(this.knowledgeList)) {
      $dara.Model.validateArray(this.knowledgeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAICoachDebugRequest extends $dara.Model {
  dataId?: string;
  dataType?: number;
  deductionRule?: SubmitAICoachDebugRequestDeductionRule;
  dialogueList?: SubmitAICoachDebugRequestDialogueList[];
  expressiveness?: SubmitAICoachDebugRequestExpressiveness;
  point?: SubmitAICoachDebugRequestPoint;
  static names(): { [key: string]: string } {
    return {
      dataId: 'dataId',
      dataType: 'dataType',
      deductionRule: 'deductionRule',
      dialogueList: 'dialogueList',
      expressiveness: 'expressiveness',
      point: 'point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      dataType: 'number',
      deductionRule: SubmitAICoachDebugRequestDeductionRule,
      dialogueList: { 'type': 'array', 'itemType': SubmitAICoachDebugRequestDialogueList },
      expressiveness: SubmitAICoachDebugRequestExpressiveness,
      point: SubmitAICoachDebugRequestPoint,
    };
  }

  validate() {
    if(this.deductionRule && typeof (this.deductionRule as any).validate === 'function') {
      (this.deductionRule as any).validate();
    }
    if(Array.isArray(this.dialogueList)) {
      $dara.Model.validateArray(this.dialogueList);
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

