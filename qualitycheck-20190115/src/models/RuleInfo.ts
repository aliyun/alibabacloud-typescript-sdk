// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RuleTestDialogue } from "./RuleTestDialogue";
import { SchemeCheckType } from "./SchemeCheckType";


export class RuleInfoPreqRule extends $dara.Model {
  rid?: string;
  static names(): { [key: string]: string } {
    return {
      rid: 'Rid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RuleInfo extends $dara.Model {
  /**
   * @remarks
   * The review option. This parameter is used for compatibility with the v4.0 protocol. Valid values: `1` (Manual review) and `3` (Automatic review).
   * 
   * @example
   * 1
   */
  autoReview?: number;
  /**
   * @remarks
   * A list of business category names.
   */
  businessCategoryNameList?: string[];
  /**
   * @remarks
   * The check type. Valid values: `0` (Service compliance check), `1` (Service attitude check), `2` (Service professionalism check), `3` (Customer attitude check), and `4` (Service process correctness check).
   * 
   * @example
   * 3
   */
  checkType?: number;
  /**
   * @remarks
   * Remarks on the rule.
   * 
   * @example
   * 违规
   */
  comments?: string;
  /**
   * @remarks
   * The configuration type. This parameter is used for compatibility with the v4.0 protocol. Valid values: `1` (Simple condition configuration) and `2` (Advanced configuration). Default: `1`.
   * 
   * @example
   * 1
   */
  configType?: number;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * 张三
   */
  createEmpName?: string;
  /**
   * @remarks
   * The employee ID of the creator.
   * 
   * @example
   * 1
   */
  createEmpid?: string;
  /**
   * @remarks
   * The creation time. This value is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1641277321000
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether editing the rule is denied. Valid values: `1` (denied), `0` or `null` (allowed).
   * 
   * @example
   * 1
   */
  deny?: number;
  /**
   * @remarks
   * A list of test dialogues.
   */
  dialogues?: RuleTestDialogue[];
  /**
   * @remarks
   * Indicates whether the rule is in effect. Valid values: `0` (No) and `1` (Yes).
   * 
   * @example
   * 1
   */
  effective?: number;
  /**
   * @remarks
   * The effective end time of the rule.
   * 
   * @example
   * OperationMode
   */
  effectiveEndTime?: string;
  /**
   * @remarks
   * The effective start time of the rule.
   * 
   * @example
   * OperationMode
   */
  effectiveStartTime?: string;
  /**
   * @remarks
   * The end time. This value is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1641277321000
   */
  endTime?: string;
  /**
   * @remarks
   * The external property.
   * 
   * @example
   * 1
   */
  externalProperty?: number;
  /**
   * @remarks
   * Indicates whether the rule is effective throughout its lifecycle. Valid values: `0` (No) and `1` (Yes).
   * 
   * @example
   * 1
   */
  fullCycle?: number;
  /**
   * @remarks
   * The graph flow.
   * 
   * @example
   * {}
   */
  graphFlow?: any;
  /**
   * @remarks
   * Indicates whether the rule is deleted.
   * 
   * @example
   * 1
   */
  isDelete?: number;
  /**
   * @remarks
   * Indicates whether the rule is online.
   * 
   * @example
   * 1
   */
  isOnline?: number;
  /**
   * @remarks
   * The conditional expression, such as `a&&b`.
   * 
   * @example
   * a&&b
   */
  lambda?: string;
  /**
   * @remarks
   * The name of the employee who last updated the rule.
   * 
   * @example
   * 张三
   */
  lastUpdateEmpName?: string;
  /**
   * @remarks
   * The ID of the employee who last updated the rule.
   * 
   * @example
   * 1
   */
  lastUpdateEmpid?: string;
  /**
   * @remarks
   * The last update time. This value is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1641277321000
   */
  lastUpdateTime?: string;
  /**
   * @remarks
   * The severity level of the rule. Valid values: `0` (Severe violation), `1` (Moderate violation), and `2` (Minor violation).
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * Indicates whether the conditions are met.
   * 
   * @example
   * 1
   */
  meet?: number;
  /**
   * @remarks
   * Indicates whether the rule has been modified within the quality check scheme.
   * 
   * @example
   * 1
   */
  modifyType?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * 开头语规则
   */
  name?: string;
  /**
   * @remarks
   * The operation mode.
   * 
   * @example
   * 1
   */
  operationMode?: number;
  preqRule?: RuleInfoPreqRule;
  /**
   * @remarks
   * The quality check type. This parameter is used for compatibility with the v4.0 protocol. Valid values: `0` (offline quality check) and `1` (real-time quality check).
   * 
   * @example
   * 1
   */
  qualityCheckType?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 1
   */
  rid?: string;
  /**
   * @remarks
   * The name of the rule category.
   * 
   * @example
   * 正向规则
   */
  ruleCategoryName?: string;
  /**
   * @remarks
   * Specifies whether to score the rule. This parameter is used for compatibility with the v4.0 protocol. Valid values: `1` (Do not score) and `3` (Score).
   * 
   * @example
   * 3
   */
  ruleScoreType?: number;
  /**
   * @remarks
   * The rule type. This parameter is used for compatibility with the v4.0 protocol. Valid values: `0` (Default) and `1` (User-created).
   * 
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @remarks
   * The quality check dimension object.
   */
  schemeCheckType?: SchemeCheckType;
  /**
   * @remarks
   * The ID of the quality check scheme to which the rule belongs.
   * 
   * @example
   * 1
   */
  schemeId?: number;
  /**
   * @remarks
   * The name of the quality check scheme.
   * 
   * @example
   * 通用方案
   */
  schemeName?: string;
  /**
   * @remarks
   * The mapping ID between the quality check scheme and the rule.
   * 
   * @example
   * 1
   */
  schemeRuleMappingId?: number;
  /**
   * @remarks
   * Indicates whether the scoring item is deleted. A deleted item may be displayed as grayed out.
   * 
   * @example
   * true
   */
  scoreDeleted?: boolean;
  /**
   * @remarks
   * The ID of the main scoring item.
   * 
   * @example
   * 1
   */
  scoreId?: number;
  /**
   * @remarks
   * The name of the main scoring item.
   * 
   * @example
   * 违规
   */
  scoreName?: string;
  /**
   * @remarks
   * The score value.
   * 
   * @example
   * 1
   */
  scoreNum?: number;
  /**
   * @remarks
   * The scoring method. This parameter is used for compatibility with the v4.0 protocol. Valid values: `0` (Add/deduct points when the rule is triggered) and `1` (Assign a one-time score when the rule is triggered).
   * 
   * @example
   * 1
   */
  scoreNumType?: number;
  /**
   * @remarks
   * The scoring trigger. Valid values: `0` (Score when a node is hit).
   * 
   * @example
   * 0
   */
  scoreRuleHitType?: number;
  /**
   * @remarks
   * The ID of the scoring subitem.
   * 
   * @example
   * 1
   */
  scoreSubId?: number;
  /**
   * @remarks
   * The name of the scoring subitem.
   * 
   * @example
   * 1
   */
  scoreSubName?: string;
  /**
   * @remarks
   * Indicates whether to add or deduct points.
   * 
   * @example
   * 1
   */
  scoreType?: number;
  /**
   * @remarks
   * The sort order of the rule in the quality check dimension.
   * 
   * @example
   * 1
   */
  sortIndex?: number;
  /**
   * @remarks
   * The start time. This value is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1641277321000
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the rule.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The rule category. This parameter is used for compatibility with the v4.0 protocol. Valid values: `10` (General rule for quality check schemes) and `11` (Flow rule for quality check schemes).
   * 
   * @example
   * 10
   */
  targetType?: number;
  /**
   * @remarks
   * The ID of the flowchart.
   * 
   * @example
   * 111111111
   */
  taskFlowId?: number;
  /**
   * @remarks
   * The type of the flowchart. This parameter is deprecated. The default value is `1`.
   * 
   * @example
   * 1
   */
  taskFlowType?: number;
  /**
   * @remarks
   * A list of triggers.
   */
  triggers?: string[];
  /**
   * @remarks
   * The rule category. This parameter is used for compatibility with the v4.0 protocol. Valid values: `2` (Public opinion monitoring) and `3` (Business).
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * The weight of the rule.
   * 
   * @example
   * 1
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      autoReview: 'AutoReview',
      businessCategoryNameList: 'BusinessCategoryNameList',
      checkType: 'CheckType',
      comments: 'Comments',
      configType: 'ConfigType',
      createEmpName: 'CreateEmpName',
      createEmpid: 'CreateEmpid',
      createTime: 'CreateTime',
      deny: 'Deny',
      dialogues: 'Dialogues',
      effective: 'Effective',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      endTime: 'EndTime',
      externalProperty: 'ExternalProperty',
      fullCycle: 'FullCycle',
      graphFlow: 'GraphFlow',
      isDelete: 'IsDelete',
      isOnline: 'IsOnline',
      lambda: 'Lambda',
      lastUpdateEmpName: 'LastUpdateEmpName',
      lastUpdateEmpid: 'LastUpdateEmpid',
      lastUpdateTime: 'LastUpdateTime',
      level: 'Level',
      meet: 'Meet',
      modifyType: 'ModifyType',
      name: 'Name',
      operationMode: 'OperationMode',
      preqRule: 'PreqRule',
      qualityCheckType: 'QualityCheckType',
      rid: 'Rid',
      ruleCategoryName: 'RuleCategoryName',
      ruleScoreType: 'RuleScoreType',
      ruleType: 'RuleType',
      schemeCheckType: 'SchemeCheckType',
      schemeId: 'SchemeId',
      schemeName: 'SchemeName',
      schemeRuleMappingId: 'SchemeRuleMappingId',
      scoreDeleted: 'ScoreDeleted',
      scoreId: 'ScoreId',
      scoreName: 'ScoreName',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreRuleHitType: 'ScoreRuleHitType',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
      scoreType: 'ScoreType',
      sortIndex: 'SortIndex',
      startTime: 'StartTime',
      status: 'Status',
      targetType: 'TargetType',
      taskFlowId: 'TaskFlowId',
      taskFlowType: 'TaskFlowType',
      triggers: 'Triggers',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReview: 'number',
      businessCategoryNameList: { 'type': 'array', 'itemType': 'string' },
      checkType: 'number',
      comments: 'string',
      configType: 'number',
      createEmpName: 'string',
      createEmpid: 'string',
      createTime: 'string',
      deny: 'number',
      dialogues: { 'type': 'array', 'itemType': RuleTestDialogue },
      effective: 'number',
      effectiveEndTime: 'string',
      effectiveStartTime: 'string',
      endTime: 'string',
      externalProperty: 'number',
      fullCycle: 'number',
      graphFlow: 'any',
      isDelete: 'number',
      isOnline: 'number',
      lambda: 'string',
      lastUpdateEmpName: 'string',
      lastUpdateEmpid: 'string',
      lastUpdateTime: 'string',
      level: 'number',
      meet: 'number',
      modifyType: 'number',
      name: 'string',
      operationMode: 'number',
      preqRule: RuleInfoPreqRule,
      qualityCheckType: 'number',
      rid: 'string',
      ruleCategoryName: 'string',
      ruleScoreType: 'number',
      ruleType: 'number',
      schemeCheckType: SchemeCheckType,
      schemeId: 'number',
      schemeName: 'string',
      schemeRuleMappingId: 'number',
      scoreDeleted: 'boolean',
      scoreId: 'number',
      scoreName: 'string',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreRuleHitType: 'number',
      scoreSubId: 'number',
      scoreSubName: 'string',
      scoreType: 'number',
      sortIndex: 'number',
      startTime: 'string',
      status: 'number',
      targetType: 'number',
      taskFlowId: 'number',
      taskFlowType: 'number',
      triggers: { 'type': 'array', 'itemType': 'string' },
      type: 'number',
      weight: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.businessCategoryNameList)) {
      $dara.Model.validateArray(this.businessCategoryNameList);
    }
    if(Array.isArray(this.dialogues)) {
      $dara.Model.validateArray(this.dialogues);
    }
    if(this.preqRule && typeof (this.preqRule as any).validate === 'function') {
      (this.preqRule as any).validate();
    }
    if(this.schemeCheckType && typeof (this.schemeCheckType as any).validate === 'function') {
      (this.schemeCheckType as any).validate();
    }
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

