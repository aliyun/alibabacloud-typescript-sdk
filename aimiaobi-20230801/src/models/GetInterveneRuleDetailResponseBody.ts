// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailAnswerConfig extends $dara.Model {
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
   * 早上好
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

export class GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailEffectConfig extends $dara.Model {
  /**
   * @remarks
   * Activation type
   * 
   * @example
   * 0
   */
  effectType?: number;
  /**
   * @remarks
   * End time
   * 
   * @example
   * 2023-11-25 14:21:15
   */
  endTime?: string;
  /**
   * @remarks
   * Start time
   * 
   * @example
   * 2023-11-25 14:21:15
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      effectType: 'EffectType',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectType: 'number',
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneRuleDetailResponseBodyDataInterveneRuleDetail extends $dara.Model {
  /**
   * @remarks
   * Answer configuration
   */
  answerConfig?: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailAnswerConfig[];
  /**
   * @remarks
   * Activation configuration
   */
  effectConfig?: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailEffectConfig;
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
   * Namespace list
   */
  namespaceList?: string[];
  /**
   * @remarks
   * Rule ID
   * 
   * @example
   * 100418
   */
  ruleId?: number;
  /**
   * @remarks
   * Rule name
   * 
   * @example
   * 规则001
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      answerConfig: 'AnswerConfig',
      effectConfig: 'EffectConfig',
      interveneType: 'InterveneType',
      namespaceList: 'NamespaceList',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerConfig: { 'type': 'array', 'itemType': GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailAnswerConfig },
      effectConfig: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailEffectConfig,
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
    if(this.effectConfig && typeof (this.effectConfig as any).validate === 'function') {
      (this.effectConfig as any).validate();
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

export class GetInterveneRuleDetailResponseBodyData extends $dara.Model {
  code?: number;
  /**
   * @remarks
   * Structure of the rule details
   */
  interveneRuleDetail?: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetail;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      interveneRuleDetail: 'InterveneRuleDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      interveneRuleDetail: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetail,
    };
  }

  validate() {
    if(this.interveneRuleDetail && typeof (this.interveneRuleDetail as any).validate === 'function') {
      (this.interveneRuleDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneRuleDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: GetInterveneRuleDetailResponseBodyData;
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
   * Unique request ID
   * 
   * @example
   * 428DCC0D-3C63-5306-BD1B-124396AB97BE
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates success: true for success, false for failure
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
      data: GetInterveneRuleDetailResponseBodyData,
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

