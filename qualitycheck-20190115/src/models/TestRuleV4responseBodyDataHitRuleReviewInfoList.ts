// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TestRuleV4ResponseBodyDataHitRuleReviewInfoListBranchInfoList } from "./TestRuleV4responseBodyDataHitRuleReviewInfoListBranchInfoList";
import { TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoList } from "./TestRuleV4responseBodyDataHitRuleReviewInfoListConditionHitInfoList";
import { ConditionBasicInfo } from "./ConditionBasicInfo";


export class TestRuleV4ResponseBodyDataHitRuleReviewInfoList extends $dara.Model {
  /**
   * @example
   * 1
   */
  branchHitId?: number;
  branchInfoList?: TestRuleV4ResponseBodyDataHitRuleReviewInfoListBranchInfoList[];
  conditionHitInfoList?: TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoList[];
  conditionInfoList?: ConditionBasicInfo[];
  judgeNodeName?: string;
  /**
   * @example
   * a&&b
   */
  lambda?: string;
  /**
   * @example
   * true
   */
  matched?: boolean;
  /**
   * @example
   * 0
   */
  nodeType?: string;
  /**
   * @example
   * 451
   */
  rid?: number;
  ruleName?: string;
  /**
   * @example
   * 1
   */
  ruleScoreType?: number;
  /**
   * @example
   * 1
   */
  scoreNumType?: number;
  /**
   * @example
   * 1
   */
  taskFlowId?: number;
  static names(): { [key: string]: string } {
    return {
      branchHitId: 'BranchHitId',
      branchInfoList: 'BranchInfoList',
      conditionHitInfoList: 'ConditionHitInfoList',
      conditionInfoList: 'ConditionInfoList',
      judgeNodeName: 'JudgeNodeName',
      lambda: 'Lambda',
      matched: 'Matched',
      nodeType: 'NodeType',
      rid: 'Rid',
      ruleName: 'RuleName',
      ruleScoreType: 'RuleScoreType',
      scoreNumType: 'ScoreNumType',
      taskFlowId: 'TaskFlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchHitId: 'number',
      branchInfoList: { 'type': 'array', 'itemType': TestRuleV4ResponseBodyDataHitRuleReviewInfoListBranchInfoList },
      conditionHitInfoList: { 'type': 'array', 'itemType': TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoList },
      conditionInfoList: { 'type': 'array', 'itemType': ConditionBasicInfo },
      judgeNodeName: 'string',
      lambda: 'string',
      matched: 'boolean',
      nodeType: 'string',
      rid: 'number',
      ruleName: 'string',
      ruleScoreType: 'number',
      scoreNumType: 'number',
      taskFlowId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.branchInfoList)) {
      $dara.Model.validateArray(this.branchInfoList);
    }
    if(Array.isArray(this.conditionHitInfoList)) {
      $dara.Model.validateArray(this.conditionHitInfoList);
    }
    if(Array.isArray(this.conditionInfoList)) {
      $dara.Model.validateArray(this.conditionInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

