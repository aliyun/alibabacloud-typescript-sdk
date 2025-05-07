// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RuleTestDialogue } from "./RuleTestDialogue";
import { SchemeCheckType } from "./SchemeCheckType";


export class RuleInfo extends $dara.Model {
  autoReview?: number;
  businessCategoryNameList?: string[];
  checkType?: number;
  comments?: string;
  configType?: number;
  createEmpName?: string;
  createEmpid?: string;
  createTime?: string;
  deny?: number;
  dialogues?: RuleTestDialogue[];
  effective?: number;
  effectiveEndTime?: string;
  effectiveStartTime?: string;
  endTime?: string;
  externalProperty?: number;
  fullCycle?: number;
  graphFlow?: any;
  isDelete?: number;
  isOnline?: number;
  lambda?: string;
  lastUpdateEmpName?: string;
  lastUpdateEmpid?: string;
  lastUpdateTime?: string;
  level?: number;
  meet?: number;
  modifyType?: number;
  name?: string;
  operationMode?: number;
  qualityCheckType?: number;
  rid?: string;
  ruleCategoryName?: string;
  ruleScoreType?: number;
  ruleType?: number;
  schemeCheckType?: SchemeCheckType;
  schemeId?: number;
  schemeName?: string;
  schemeRuleMappingId?: number;
  scoreDeleted?: boolean;
  scoreId?: number;
  scoreName?: string;
  scoreNum?: number;
  scoreNumType?: number;
  scoreRuleHitType?: number;
  scoreSubId?: number;
  scoreSubName?: string;
  scoreType?: number;
  sortIndex?: number;
  startTime?: string;
  status?: number;
  targetType?: number;
  taskFlowId?: number;
  taskFlowType?: number;
  triggers?: string[];
  type?: number;
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

