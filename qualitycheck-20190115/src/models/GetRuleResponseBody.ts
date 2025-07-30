// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuleResponseBodyDataRulesRuleInfoBusinessCategoryNameList extends $dara.Model {
  businessCategoryNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      businessCategoryNameList: 'BusinessCategoryNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategoryNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.businessCategoryNameList)) {
      $dara.Model.validateArray(this.businessCategoryNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetRuleResponseBodyDataRules extends $dara.Model {
  ruleInfo?: GetRuleResponseBodyDataRulesRuleInfo[];
  static names(): { [key: string]: string } {
    return {
      ruleInfo: 'RuleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleInfo: { 'type': 'array', 'itemType': GetRuleResponseBodyDataRulesRuleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.ruleInfo)) {
      $dara.Model.validateArray(this.ruleInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyData extends $dara.Model {
  rules?: GetRuleResponseBodyDataRules;
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: GetRuleResponseBodyDataRules,
    };
  }

  validate() {
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetRuleResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * F190ADE9-619A-447D-84E3-7E241A5C428E
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
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

