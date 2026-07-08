// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertInterveneRuleRequestInterveneRuleConfigAnswerConfig extends $dara.Model {
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

export class InsertInterveneRuleRequestInterveneRuleConfigEffectConfig extends $dara.Model {
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
   * 2023-03-28 06:04:29
   */
  endTime?: string;
  /**
   * @remarks
   * Start time
   * 
   * @example
   * 2023-03-28 06:04:29
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

export class InsertInterveneRuleRequestInterveneRuleConfigInterveneConfigList extends $dara.Model {
  /**
   * @remarks
   * ID
   * 
   * @example
   * 37249
   */
  id?: string;
  /**
   * @remarks
   * Operation type
   * 
   * @example
   * 0
   */
  operationType?: number;
  /**
   * @remarks
   * Intervention query configuration
   * 
   * @example
   * 早上好
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operationType: 'OperationType',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      operationType: 'number',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleRequestInterveneRuleConfig extends $dara.Model {
  /**
   * @remarks
   * Answer configuration
   */
  answerConfig?: InsertInterveneRuleRequestInterveneRuleConfigAnswerConfig[];
  /**
   * @remarks
   * Activation configuration
   */
  effectConfig?: InsertInterveneRuleRequestInterveneRuleConfigEffectConfig;
  /**
   * @remarks
   * Intervention configuration list
   */
  interveneConfigList?: InsertInterveneRuleRequestInterveneRuleConfigInterveneConfigList[];
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
   * 2
   */
  ruleId?: number;
  /**
   * @remarks
   * Rule name
   * 
   * @example
   * tf-test-rule
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      answerConfig: 'AnswerConfig',
      effectConfig: 'EffectConfig',
      interveneConfigList: 'InterveneConfigList',
      interveneType: 'InterveneType',
      namespaceList: 'NamespaceList',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerConfig: { 'type': 'array', 'itemType': InsertInterveneRuleRequestInterveneRuleConfigAnswerConfig },
      effectConfig: InsertInterveneRuleRequestInterveneRuleConfigEffectConfig,
      interveneConfigList: { 'type': 'array', 'itemType': InsertInterveneRuleRequestInterveneRuleConfigInterveneConfigList },
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
    if(Array.isArray(this.interveneConfigList)) {
      $dara.Model.validateArray(this.interveneConfigList);
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

export class InsertInterveneRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier of the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * Intervention rule configuration
   */
  interveneRuleConfig?: InsertInterveneRuleRequestInterveneRuleConfig;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      interveneRuleConfig: 'InterveneRuleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      interveneRuleConfig: InsertInterveneRuleRequestInterveneRuleConfig,
    };
  }

  validate() {
    if(this.interveneRuleConfig && typeof (this.interveneRuleConfig as any).validate === 'function') {
      (this.interveneRuleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

