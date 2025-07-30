// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityCheckSchemeResponseBodyDataRuleListRules extends $dara.Model {
  /**
   * @example
   * 1
   */
  checkType?: number;
  name?: string;
  /**
   * @example
   * 12
   */
  rid?: number;
  /**
   * @example
   * 1
   */
  ruleScoreType?: number;
  /**
   * @example
   * 2
   */
  scoreNum?: number;
  /**
   * @example
   * 0
   */
  scoreNumType?: number;
  /**
   * @example
   * 1
   */
  scoreType?: number;
  /**
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
  checkName?: string;
  /**
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @example
   * 1
   */
  enable?: number;
  /**
   * @example
   * 20
   */
  score?: number;
  /**
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
   * @example
   * 2022-05-10T09:34Z
   */
  createTime?: string;
  createUserName?: string;
  /**
   * @example
   * 1
   */
  dataType?: number;
  description?: string;
  /**
   * @example
   * test
   */
  name?: string;
  ruleList?: ListQualityCheckSchemeResponseBodyDataRuleList[];
  schemeCheckTypeList?: ListQualityCheckSchemeResponseBodyDataSchemeCheckTypeList[];
  /**
   * @example
   * 112**
   */
  schemeId?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1
   */
  templateType?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * 2022-05-10T10:34Z
   */
  updateTime?: string;
  updateUserName?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 22
   */
  count?: number;
  data?: ListQualityCheckSchemeResponseBodyData[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 82C91484-B2D5-4D2A-A21F-A6D73F4***
   */
  requestId?: string;
  /**
   * @example
   * XXX
   */
  resultCountId?: string;
  /**
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

