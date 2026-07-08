// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterveneRulesResponseBodyDataInterveneRuleListAnswerConfig extends $dara.Model {
  /**
   * @remarks
   * Answer type
   * 
   * @example
   * 0
   */
  answerType?: number;
  /**
   * @remarks
   * Answer content
   * 
   * @example
   * 抱歉我无法回答
   */
  message?: string;
  /**
   * @remarks
   * Namespace
   * 
   * @example
   * namespace_qa_query
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      answerType: 'AnswerType',
      message: 'Message',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerType: 'number',
      message: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneRulesResponseBodyDataInterveneRuleList extends $dara.Model {
  /**
   * @remarks
   * Answer configuration
   */
  answerConfig?: ListInterveneRulesResponseBodyDataInterveneRuleListAnswerConfig[];
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2023-06-05 15:17:01
   */
  createTime?: string;
  /**
   * @remarks
   * Effective time
   * 
   * @example
   * 2023-04-03 02:42:01
   */
  effectTime?: string;
  /**
   * @remarks
   * Intervention type
   * 
   * @example
   * 0
   */
  interveneType?: number;
  /**
   * @remarks
   * List of namespaces
   */
  namespaceList?: string[];
  /**
   * @remarks
   * Rule ID
   * 
   * @example
   * mr-iuo9pi9w555phfbb
   */
  ruleId?: number;
  /**
   * @remarks
   * Rule name
   * 
   * @example
   * ruletest
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      answerConfig: 'AnswerConfig',
      createTime: 'CreateTime',
      effectTime: 'EffectTime',
      interveneType: 'InterveneType',
      namespaceList: 'NamespaceList',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerConfig: { 'type': 'array', 'itemType': ListInterveneRulesResponseBodyDataInterveneRuleListAnswerConfig },
      createTime: 'string',
      effectTime: 'string',
      interveneType: 'number',
      namespaceList: { 'type': 'array', 'itemType': 'string' },
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.answerConfig)) {
      $dara.Model.validateArray(this.answerConfig);
    }
    if(Array.isArray(this.namespaceList)) {
      $dara.Model.validateArray(this.namespaceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Status code returned by the intervention service
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Number of items
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * List of rules
   */
  interveneRuleList?: ListInterveneRulesResponseBodyDataInterveneRuleList[];
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      interveneRuleList: 'InterveneRuleList',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      count: 'number',
      interveneRuleList: { 'type': 'array', 'itemType': ListInterveneRulesResponseBodyDataInterveneRuleList },
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.interveneRuleList)) {
      $dara.Model.validateArray(this.interveneRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: ListInterveneRulesResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Unique request identifier
   * 
   * @example
   * DA021073-17CE-5CCF-9FEB-93226C766887
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded: true for success, false for failure
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListInterveneRulesResponseBodyData,
      httpStatusCode: 'number',
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

