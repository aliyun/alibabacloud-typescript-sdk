// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterveneRulesResponseBodyDataInterveneRuleListAnswerConfig extends $dara.Model {
  /**
   * @example
   * 0
   */
  answerType?: number;
  message?: string;
  /**
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
  answerConfig?: ListInterveneRulesResponseBodyDataInterveneRuleListAnswerConfig[];
  /**
   * @example
   * 2023-06-05 15:17:01
   */
  createTime?: string;
  /**
   * @example
   * 2023-04-03 02:42:01
   */
  effectTime?: string;
  /**
   * @example
   * 0
   */
  interveneType?: number;
  namespaceList?: string[];
  /**
   * @example
   * mr-iuo9pi9w555phfbb
   */
  ruleId?: number;
  /**
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
  code?: number;
  /**
   * @example
   * 1
   */
  count?: number;
  interveneRuleList?: ListInterveneRulesResponseBodyDataInterveneRuleList[];
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
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
   * @example
   * 0
   */
  code?: string;
  data?: ListInterveneRulesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * DA021073-17CE-5CCF-9FEB-93226C766887
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

