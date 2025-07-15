// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailAnswerConfig extends $dara.Model {
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

export class GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailEffectConfig extends $dara.Model {
  /**
   * @example
   * 0
   */
  effectType?: number;
  /**
   * @example
   * 2023-11-25 14:21:15
   */
  endTime?: string;
  /**
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
  answerConfig?: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailAnswerConfig[];
  effectConfig?: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailEffectConfig;
  /**
   * @example
   * 0
   */
  interveneType?: number;
  namespaceList?: string[];
  /**
   * @example
   * 100418
   */
  ruleId?: number;
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
   * @example
   * 0
   */
  code?: string;
  data?: GetInterveneRuleDetailResponseBodyData;
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
   * 428DCC0D-3C63-5306-BD1B-124396AB97BE
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

