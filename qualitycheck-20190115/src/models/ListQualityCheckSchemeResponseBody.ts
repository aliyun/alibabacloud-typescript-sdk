// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityCheckSchemeResponseBodyDataRuleListRules extends $dara.Model {
  /**
   * @remarks
   * The quality check dimension to which the item belongs.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * 测试规则
   */
  name?: string;
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 12
   */
  rid?: number;
  /**
   * @remarks
   * Indicates whether to calculate a score. Valid values: 1 (no score) and 3 (score).
   * 
   * @example
   * 1
   */
  ruleScoreType?: number;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 2
   */
  scoreNum?: number;
  /**
   * @remarks
   * The scoring type. Valid values: 0 (Points are added or deducted each time the rule is triggered) and 1 (A one-time score is given when the rule is triggered).
   * 
   * @example
   * 0
   */
  scoreNumType?: number;
  /**
   * @remarks
   * The scoring method. Valid values: 1 (add points) and 3 (deduct points).
   * 
   * @example
   * 1
   */
  scoreType?: number;
  /**
   * @remarks
   * The application scenario of the check item. Valid values: 10 (common check item) and 11 (SOP flow check item).
   * 
   * @example
   * 10
   */
  targetType?: number;
  static names(): { [key: string]: string } {
    return {
      checkType: 'CheckType',
      name: 'Name',
      rid: 'Rid',
      ruleScoreType: 'RuleScoreType',
      scoreNum: 'ScoreNum',
      scoreNumType: 'ScoreNumType',
      scoreType: 'ScoreType',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      name: 'string',
      rid: 'number',
      ruleScoreType: 'number',
      scoreNum: 'number',
      scoreNumType: 'number',
      scoreType: 'number',
      targetType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityCheckSchemeResponseBodyDataRuleList extends $dara.Model {
  /**
   * @remarks
   * The rule information. This parameter is reserved for future use. Currently, only one rule is returned.
   */
  rules?: ListQualityCheckSchemeResponseBodyDataRuleListRules[];
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': ListQualityCheckSchemeResponseBodyDataRuleListRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityCheckSchemeResponseBodyDataSchemeCheckTypeList extends $dara.Model {
  /**
   * @remarks
   * The name of the quality check dimension.
   * 
   * @example
   * 服务规范性检测
   */
  checkName?: string;
  /**
   * @remarks
   * The type of the quality check dimension.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * The enabled status. Valid values: 0 (disabled) and 1 (enabled).
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The score of the quality check dimension.
   * 
   * @example
   * 20
   */
  score?: number;
  /**
   * @remarks
   * An internal parameter. You can ignore this parameter.
   * 
   * @example
   * 10
   */
  targetType?: number;
  static names(): { [key: string]: string } {
    return {
      checkName: 'CheckName',
      checkType: 'CheckType',
      enable: 'Enable',
      score: 'Score',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkName: 'string',
      checkType: 'number',
      enable: 'number',
      score: 'number',
      targetType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityCheckSchemeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the scheme was created.
   * 
   * @example
   * 2022-05-10T09:34Z
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * 张三
   */
  createUserName?: string;
  /**
   * @remarks
   * The data type of the quality check scheme. Valid values: 0 (text) and 1 (audio).
   * 
   * @example
   * 1
   */
  dataType?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 售前使用
   */
  description?: string;
  /**
   * @remarks
   * The name of the quality check scheme.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The list of check items.
   */
  ruleList?: ListQualityCheckSchemeResponseBodyDataRuleList[];
  /**
   * @remarks
   * The list of quality check dimensions.
   */
  schemeCheckTypeList?: ListQualityCheckSchemeResponseBodyDataSchemeCheckTypeList[];
  /**
   * @remarks
   * The ID of the quality check scheme.
   * 
   * @example
   * 112**
   */
  schemeId?: number;
  /**
   * @remarks
   * The status of the quality check scheme. Valid values: 0 (deleted), 1 (published), 2 (unpublished), and 3 (updated but not published).
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of the quality check scheme template. Valid values: 1 (built-in) and 2 (user-defined).
   * 
   * @example
   * 1
   */
  templateType?: number;
  /**
   * @remarks
   * The type of the quality check scheme. Valid values: 0 (built-in) and 1 (user-defined).
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The time when the scheme was last updated.
   * 
   * @example
   * 2022-05-10T10:34Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The name of the user who last updated the scheme.
   * 
   * @example
   * 李四
   */
  updateUserName?: string;
  /**
   * @remarks
   * The version of the quality check scheme.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUserName: 'CreateUserName',
      dataType: 'DataType',
      description: 'Description',
      name: 'Name',
      ruleList: 'RuleList',
      schemeCheckTypeList: 'SchemeCheckTypeList',
      schemeId: 'SchemeId',
      status: 'Status',
      templateType: 'TemplateType',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateUserName: 'UpdateUserName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUserName: 'string',
      dataType: 'number',
      description: 'string',
      name: 'string',
      ruleList: { 'type': 'array', 'itemType': ListQualityCheckSchemeResponseBodyDataRuleList },
      schemeCheckTypeList: { 'type': 'array', 'itemType': ListQualityCheckSchemeResponseBodyDataSchemeCheckTypeList },
      schemeId: 'number',
      status: 'number',
      templateType: 'number',
      type: 'number',
      updateTime: 'string',
      updateUserName: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    if(Array.isArray(this.schemeCheckTypeList)) {
      $dara.Model.validateArray(this.schemeCheckTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityCheckSchemeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of **200** indicates success. Other values indicate a failure. Use this code to identify the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 22
   */
  count?: number;
  /**
   * @remarks
   * The data of the quality check scheme list.
   */
  data?: ListQualityCheckSchemeResponseBodyData[];
  /**
   * @remarks
   * The returned message. If the request is successful, \\`successful\\` is returned. If the request fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 82C91484-B2D5-4D2A-A21F-A6D73F4***
   */
  requestId?: string;
  /**
   * @remarks
   * An internal parameter. You can ignore this parameter.
   * 
   * @example
   * XXX
   */
  resultCountId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of true indicates success. A value of **false** or **null** indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultCountId: 'ResultCountId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': ListQualityCheckSchemeResponseBodyData },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resultCountId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

