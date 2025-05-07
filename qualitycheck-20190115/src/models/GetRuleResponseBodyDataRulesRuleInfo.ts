// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRuleResponseBodyDataRulesRuleInfoBusinessCategoryNameList } from "./GetRuleResponseBodyDataRulesRuleInfoBusinessCategoryNameList";


export class GetRuleResponseBodyDataRulesRuleInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  autoReview?: number;
  businessCategoryNameList?: GetRuleResponseBodyDataRulesRuleInfoBusinessCategoryNameList;
  comments?: string;
  /**
   * @example
   * 123
   */
  createEmpid?: string;
  /**
   * @example
   * 2016-08-05 10:37:10
   */
  createTime?: string;
  /**
   * @example
   * 2016-08-05 10:37:10
   */
  endTime?: string;
  /**
   * @example
   * 0
   */
  isDelete?: number;
  /**
   * @example
   * 1
   */
  isOnline?: number;
  /**
   * @example
   * 123
   */
  lastUpdateEmpid?: string;
  /**
   * @example
   * 2019-10-28 14:23:28
   */
  lastUpdateTime?: string;
  /**
   * @example
   * demo
   */
  name?: string;
  /**
   * @example
   * 4
   */
  rid?: string;
  /**
   * @example
   * a && b
   */
  ruleLambda?: string;
  /**
   * @example
   * 1
   */
  ruleScoreType?: number;
  /**
   * @example
   * 123
   */
  scoreId?: number;
  scoreName?: string;
  /**
   * @example
   * 22
   */
  scoreSubId?: number;
  scoreSubName?: string;
  /**
   * @example
   * 2016-08-05 10:37:10
   */
  startTime?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * 1
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      autoReview: 'AutoReview',
      businessCategoryNameList: 'BusinessCategoryNameList',
      comments: 'Comments',
      createEmpid: 'CreateEmpid',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      isDelete: 'IsDelete',
      isOnline: 'IsOnline',
      lastUpdateEmpid: 'LastUpdateEmpid',
      lastUpdateTime: 'LastUpdateTime',
      name: 'Name',
      rid: 'Rid',
      ruleLambda: 'RuleLambda',
      ruleScoreType: 'RuleScoreType',
      scoreId: 'ScoreId',
      scoreName: 'ScoreName',
      scoreSubId: 'ScoreSubId',
      scoreSubName: 'ScoreSubName',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReview: 'number',
      businessCategoryNameList: GetRuleResponseBodyDataRulesRuleInfoBusinessCategoryNameList,
      comments: 'string',
      createEmpid: 'string',
      createTime: 'string',
      endTime: 'string',
      isDelete: 'number',
      isOnline: 'number',
      lastUpdateEmpid: 'string',
      lastUpdateTime: 'string',
      name: 'string',
      rid: 'string',
      ruleLambda: 'string',
      ruleScoreType: 'number',
      scoreId: 'number',
      scoreName: 'string',
      scoreSubId: 'number',
      scoreSubName: 'string',
      startTime: 'string',
      status: 'number',
      type: 'number',
      weight: 'string',
    };
  }

  validate() {
    if(this.businessCategoryNameList && typeof (this.businessCategoryNameList as any).validate === 'function') {
      (this.businessCategoryNameList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

