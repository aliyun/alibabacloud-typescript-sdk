// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventBaseInfoByEventCodeResponseBodyResultObjectInputFields extends $dara.Model {
  /**
   * @remarks
   * Field description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * Field code
   * 
   * @example
   * age
   */
  fieldCode?: string;
  /**
   * @remarks
   * Field ranking
   * 
   * @example
   * 1
   */
  fieldRank?: string;
  /**
   * @remarks
   * Field source.
   * 
   * @example
   * DEFAULT
   */
  fieldSource?: string;
  /**
   * @remarks
   * Field type.
   * 
   * @example
   * STRING
   */
  fieldType?: string;
  /**
   * @remarks
   * Field name.
   * 
   * @example
   * 年龄
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      fieldCode: 'fieldCode',
      fieldRank: 'fieldRank',
      fieldSource: 'fieldSource',
      fieldType: 'fieldType',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fieldCode: 'string',
      fieldRank: 'string',
      fieldSource: 'string',
      fieldType: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventBaseInfoByEventCodeResponseBodyResultObjectRuleDetails extends $dara.Model {
  /**
   * @remarks
   * Policy Execution Logic
   * 
   * @example
   * 3&((1&2&4)
   */
  logicExpression?: string;
  /**
   * @remarks
   * Memo
   * 
   * @example
   * 描述
   */
  memo?: string;
  /**
   * @remarks
   * Rule Actions
   * 
   * @example
   * [{\\"inputs\\":[\\"auto_accselist\\"],\\"name\\":\\"__addDeTags__\\",\\"actionType\\":\\"TAG\\",\\"outputType\\":\\"const\\"}]
   */
  ruleActions?: string;
  /**
   * @remarks
   * Policy Type
   * 
   * @example
   * DEFAULT
   */
  ruleAuthType?: string;
  /**
   * @remarks
   * Event Expressions.
   * 
   * @example
   * [{\\"expressionName\\":\\"同一设备同一IP上的注册用户数\\",\\"itemId\\":1,\\"left\\":{\\"name\\":\\"dK7EXHr490f\\"},\\"operatorCode\\":\\"gte\\",\\"operatorName\\":\\"大于等于\\",\\"right\\":{\\"fieldValue\\":\\"2\\"}}]
   */
  ruleExpressions?: string;
  /**
   * @remarks
   * Policy ID
   * 
   * @example
   * 101544
   */
  ruleId?: string;
  /**
   * @remarks
   * Policy Name
   * 
   * @example
   * 手机号MD5命中人脸测试名单
   */
  ruleName?: string;
  /**
   * @remarks
   * Policy Status
   * 
   * @example
   * DRAFT
   */
  ruleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      logicExpression: 'logicExpression',
      memo: 'memo',
      ruleActions: 'ruleActions',
      ruleAuthType: 'ruleAuthType',
      ruleExpressions: 'ruleExpressions',
      ruleId: 'ruleId',
      ruleName: 'ruleName',
      ruleStatus: 'ruleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicExpression: 'string',
      memo: 'string',
      ruleActions: 'string',
      ruleAuthType: 'string',
      ruleExpressions: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventBaseInfoByEventCodeResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Business version number
   * 
   * @example
   * 1
   */
  bizVersion?: number;
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_aszbjb7236
   */
  eventCode?: string;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * 注册风险
   */
  eventName?: string;
  /**
   * @remarks
   * Event status.
   * 
   * @example
   * ONLINE
   */
  eventStauts?: string;
  /**
   * @remarks
   * Field list.
   */
  inputFields?: DescribeEventBaseInfoByEventCodeResponseBodyResultObjectInputFields[];
  /**
   * @remarks
   * Memo.
   * 
   * @example
   * 备注
   */
  memo?: string;
  /**
   * @remarks
   * Policy Information
   */
  ruleDetails?: DescribeEventBaseInfoByEventCodeResponseBodyResultObjectRuleDetails[];
  /**
   * @remarks
   * Operation template code
   * 
   * @example
   * register
   */
  templateCode?: string;
  /**
   * @remarks
   * Template name
   * 
   * @example
   * 注册事件模板
   */
  templateName?: string;
  /**
   * @remarks
   * Template type.
   * 
   * @example
   * TEMPLATE
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      bizVersion: 'bizVersion',
      eventCode: 'eventCode',
      eventName: 'eventName',
      eventStauts: 'eventStauts',
      inputFields: 'inputFields',
      memo: 'memo',
      ruleDetails: 'ruleDetails',
      templateCode: 'templateCode',
      templateName: 'templateName',
      templateType: 'templateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizVersion: 'number',
      eventCode: 'string',
      eventName: 'string',
      eventStauts: 'string',
      inputFields: { 'type': 'array', 'itemType': DescribeEventBaseInfoByEventCodeResponseBodyResultObjectInputFields },
      memo: 'string',
      ruleDetails: { 'type': 'array', 'itemType': DescribeEventBaseInfoByEventCodeResponseBodyResultObjectRuleDetails },
      templateCode: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputFields)) {
      $dara.Model.validateArray(this.inputFields);
    }
    if(Array.isArray(this.ruleDetails)) {
      $dara.Model.validateArray(this.ruleDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventBaseInfoByEventCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeEventBaseInfoByEventCodeResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeEventBaseInfoByEventCodeResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

