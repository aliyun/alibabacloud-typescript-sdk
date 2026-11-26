// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RuleTestDialogue } from "./RuleTestDialogue";
import { SchemeCheckType } from "./SchemeCheckType";


export class RuleInfoPreqRule extends $dara.Model {
  /**
   * @remarks
   * The prerequisite rule ID.
   * 
   * @example
   * 1
   */
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
   * The review option. Valid values: 1: no automatic review. 3: automatic review. This field is used for 4.0 protocol compatibility.
   * 
   * @example
   * 1
   */
  autoReview?: number;
  /**
   * @remarks
   * The list of business category names.
   */
  businessCategoryNameList?: string[];
  /**
   * @remarks
   * The check type. Valid values: 0: Service standard check. 1: Service attitude check. 2: Service professionalism check. 3: Customer attitude check. 4: Service process correctness check.
   * 
   * @example
   * 3
   */
  checkType?: number;
  /**
   * @remarks
   * The comments.
   * 
   * @example
   * Violation
   */
  comments?: string;
  /**
   * @remarks
   * The configuration type. This parameter is dedicated to the version 4.0 protocol. Valid values: 1: Simple condition configuration. 2: Advanced configuration. Default value: 1.
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
   * Zhang San
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
   * The creation time.
   * 
   * @example
   * 1641277321000
   */
  createTime?: string;
  /**
   * @remarks
   * The edit permission. Valid values: 1: Editing is denied. 0 or null: Editing is allowed.
   * 
   * @example
   * 1
   */
  deny?: number;
  /**
   * @remarks
   * The test script.
   */
  dialogues?: RuleTestDialogue[];
  /**
   * @remarks
   * The effective status. Valid values: 0: Not effective. 1: Effective.
   * 
   * @example
   * 1
   */
  effective?: number;
  /**
   * @remarks
   * The effective end time.
   * 
   * @example
   * OperationMode
   */
  effectiveEndTime?: string;
  /**
   * @remarks
   * The effective start time.
   * 
   * @example
   * OperationMode
   */
  effectiveStartTime?: string;
  /**
   * @remarks
   * The end time.
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
   * The full lifecycle effective status. Valid values: 0: No. 1: Yes.
   * 
   * @example
   * 1
   */
  fullCycle?: number;
  /**
   * @remarks
   * The graph flow canvas.
   * 
   * @example
   * {}
   */
  graphFlow?: any;
  /**
   * @remarks
   * The deletion status.
   * 
   * @example
   * 1
   */
  isDelete?: number;
  /**
   * @remarks
   * The online status.
   * 
   * @example
   * 1
   */
  isOnline?: number;
  /**
   * @remarks
   * The conditional expression, such as a&&b.
   * 
   * @example
   * a&&b
   */
  lambda?: string;
  /**
   * @remarks
   * The name of the last updater.
   * 
   * @example
   * Zhang San
   */
  lastUpdateEmpName?: string;
  /**
   * @remarks
   * The employee ID of the last updater.
   * 
   * @example
   * 1
   */
  lastUpdateEmpid?: string;
  /**
   * @remarks
   * The last update time.
   * 
   * @example
   * 1641277321000
   */
  lastUpdateTime?: string;
  /**
   * @remarks
   * The rule level. Valid values: 0: Severe violation. 1: Moderate violation. 2: Minor violation.
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * The fulfillment status.
   * 
   * @example
   * 1
   */
  meet?: number;
  /**
   * @remarks
   * Specifies whether the rule is modified in the quality inspection scheme.
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
   * Greeting rule
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
  /**
   * @remarks
   * The prerequisite rule.
   */
  preqRule?: RuleInfoPreqRule;
  /**
   * @remarks
   * The quality check type. This parameter is used for compatibility with version 4.0 logic. Valid values: 0: Offline quality check. 1: Real-time quality check.
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
   * The rule category name.
   * 
   * @example
   * Positive rule
   */
  ruleCategoryName?: string;
  /**
   * @remarks
   * Specifies whether to calculate the score. Valid values: 1: no scoring. 3: scoring. This field is used for 4.0 protocol compatibility.
   * 
   * @example
   * 3
   */
  ruleScoreType?: number;
  /**
   * @remarks
   * The rule type. Valid values: 0: default. 1: user-created. This field is used for 4.0 logic compatibility.
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
   * The ID of the associated quality check scheme.
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
   * General scheme
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
   * The deletion status of the scoring item, which is used to gray out the item when it is deleted.
   * 
   * @example
   * true
   */
  scoreDeleted?: boolean;
  /**
   * @remarks
   * The score category ID.
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
   * Violation
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
   * The score calculation type. This parameter is dedicated to the version 4.0 protocol. Valid values: 0: Add or deduct points after the rule is triggered. 1: Award a one-time score after the rule is triggered.
   * 
   * @example
   * 1
   */
  scoreNumType?: number;
  /**
   * @remarks
   * The score rule hit type. Valid values: 0: Score is calculated when a node is hit.
   * 
   * @example
   * 0
   */
  scoreRuleHitType?: number;
  /**
   * @remarks
   * The sub-item ID.
   * 
   * @example
   * 1
   */
  scoreSubId?: number;
  /**
   * @remarks
   * The sub-scoring item.
   * 
   * @example
   * 1
   */
  scoreSubName?: string;
  /**
   * @remarks
   * The score adjustment type.
   * 
   * @example
   * 1
   */
  scoreType?: number;
  /**
   * @remarks
   * The sort order within the quality inspection dimension.
   * 
   * @example
   * 1
   */
  sortIndex?: number;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1641277321000
   */
  startTime?: string;
  /**
   * @remarks
   * The rule status.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The rule category. This parameter is dedicated to the version 4.0 protocol. Valid values: 10: General rule for quality check scheme. 11: Process rule for quality check scheme.
   * 
   * @example
   * 10
   */
  targetType?: number;
  /**
   * @remarks
   * The flow canvas ID.
   * 
   * @example
   * 111111111
   */
  taskFlowId?: number;
  /**
   * @remarks
   * **[Deprecated]** The task flow type. Default value: -1.
   * 
   * @example
   * 1
   */
  taskFlowType?: number;
  /**
   * @remarks
   * The list of trigger conditions.
   */
  triggers?: string[];
  /**
   * @remarks
   * The rule category. Valid values: 2: public opinion monitoring. 3: business. This field is used for 4.0 logic compatibility.
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * The weight.
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

