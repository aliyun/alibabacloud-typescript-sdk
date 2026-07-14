// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeIntentionRequestGlobalIntentionList extends $dara.Model {
  /**
   * @remarks
   * Intent description.
   * 
   * @example
   * 正常付款3
   */
  description?: string;
  /**
   * @remarks
   * Intent name.
   * 
   * @example
   * 正常付款3
   */
  intention?: string;
  /**
   * @remarks
   * Intent code.
   * 
   * @example
   * 1810566978021232640
   */
  intentionCode?: string;
  /**
   * @remarks
   * Intent script.
   * 
   * @example
   * 好的，那先不打扰您了，祝您生活愉快！再见！
   */
  intentionScript?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      intention: 'intention',
      intentionCode: 'intentionCode',
      intentionScript: 'intentionScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      intention: 'string',
      intentionCode: 'string',
      intentionScript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIntentionRequestHierarchicalIntentionList extends $dara.Model {
  /**
   * @remarks
   * Intent description.
   * 
   * @example
   * 询问股票价格
   */
  description?: string;
  /**
   * @remarks
   * Intent name.
   * 
   * @example
   * 询问股票价格
   */
  intention?: string;
  /**
   * @remarks
   * Intent code.
   * 
   * @example
   * 1810929291010150400
   */
  intentionCode?: string;
  /**
   * @remarks
   * Intent script.
   * 
   * @example
   * 好的，那先不打扰您了，祝您生活愉快！再见！
   */
  intentionScript?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      intention: 'intention',
      intentionCode: 'intentionCode',
      intentionScript: 'intentionScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      intention: 'string',
      intentionCode: 'string',
      intentionScript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIntentionRequestIntentionList extends $dara.Model {
  /**
   * @remarks
   * Intent description.
   * 
   * @example
   * 客户表示忘记还款
   */
  description?: string;
  /**
   * @remarks
   * Intent name.
   * 
   * @example
   * 客户表示忘记还款
   */
  intention?: string;
  /**
   * @remarks
   * Intent code.
   * 
   * @example
   * 1808766224000262144
   */
  intentionCode?: string;
  /**
   * @remarks
   * Intent script.
   * 
   * @example
   * 好的，那先不打扰您了，祝您生活愉快！再见！
   */
  intentionScript?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      intention: 'intention',
      intentionCode: 'intentionCode',
      intentionScript: 'intentionScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      intention: 'string',
      intentionCode: 'string',
      intentionScript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIntentionRequest extends $dara.Model {
  /**
   * @remarks
   * Enable analysis.
   * 
   * @example
   * false
   */
  analysis?: boolean;
  /**
   * @remarks
   * Business type.
   * 
   * This parameter is required.
   * 
   * @example
   * common
   */
  bizType?: string;
  /**
   * @remarks
   * Conversation text.
   * 
   * This parameter is required.
   * 
   * @example
   * ##客服##：您好，请问是朱杰先生吗？这里是诚信财务的周莉。我们发现您有一项款项昨天是账单日，但您还没还款，这很可能是一个小小的疏忽。来电是提醒您尽快完成还款，避免影响您的信用记录。\\n ##客户##：今天天气怎么样呢？
   */
  conversation?: string;
  /**
   * @remarks
   * Global intent list. Required when opType is hierarchical.
   */
  globalIntentionList?: RecognizeIntentionRequestGlobalIntentionList[];
  /**
   * @remarks
   * Hierarchical intent list. Required when opType is hierarchical.
   */
  hierarchicalIntentionList?: RecognizeIntentionRequestHierarchicalIntentionList[];
  /**
   * @remarks
   * Intent library: Local intent library code.
   * 
   * @example
   * collection
   */
  intentionDomainCode?: string;
  /**
   * @remarks
   * Intent list. Required when bizType is not attitude.
   */
  intentionList?: RecognizeIntentionRequestIntentionList[];
  /**
   * @remarks
   * Operation type.
   * 
   * @example
   * common
   */
  opType?: string;
  /**
   * @remarks
   * Recommend intent.
   * 
   * @example
   * false
   */
  recommend?: boolean;
  static names(): { [key: string]: string } {
    return {
      analysis: 'analysis',
      bizType: 'bizType',
      conversation: 'conversation',
      globalIntentionList: 'globalIntentionList',
      hierarchicalIntentionList: 'hierarchicalIntentionList',
      intentionDomainCode: 'intentionDomainCode',
      intentionList: 'intentionList',
      opType: 'opType',
      recommend: 'recommend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: 'boolean',
      bizType: 'string',
      conversation: 'string',
      globalIntentionList: { 'type': 'array', 'itemType': RecognizeIntentionRequestGlobalIntentionList },
      hierarchicalIntentionList: { 'type': 'array', 'itemType': RecognizeIntentionRequestHierarchicalIntentionList },
      intentionDomainCode: 'string',
      intentionList: { 'type': 'array', 'itemType': RecognizeIntentionRequestIntentionList },
      opType: 'string',
      recommend: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.globalIntentionList)) {
      $dara.Model.validateArray(this.globalIntentionList);
    }
    if(Array.isArray(this.hierarchicalIntentionList)) {
      $dara.Model.validateArray(this.hierarchicalIntentionList);
    }
    if(Array.isArray(this.intentionList)) {
      $dara.Model.validateArray(this.intentionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

