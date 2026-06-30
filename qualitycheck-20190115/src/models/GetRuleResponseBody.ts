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
  autoReview?: number;
  businessCategoryNameList?: GetRuleResponseBodyDataRulesRuleInfoBusinessCategoryNameList;
  comments?: string;
  createEmpid?: string;
  createTime?: string;
  endTime?: string;
  isDelete?: number;
  isOnline?: number;
  lastUpdateEmpid?: string;
  lastUpdateTime?: string;
  name?: string;
  rid?: string;
  ruleLambda?: string;
  ruleScoreType?: number;
  scoreId?: number;
  scoreName?: string;
  scoreSubId?: number;
  scoreSubName?: string;
  startTime?: string;
  status?: number;
  type?: number;
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
   * @remarks
   * The result code. **200** means success. Any other value means failure. Use this field to identify the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data
   */
  data?: GetRuleResponseBodyData;
  /**
   * @remarks
   * Error details if the request fails. Returns **successful** if the request succeeds.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID
   * 
   * @example
   * F190ADE9-619A-447D-84E3-7E241A5C428E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. true means success. **false** or **null** means failure.
   * 
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

