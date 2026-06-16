// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventBaseInfoByEventCodeResponseBodyResultObjectInputFields extends $dara.Model {
  /**
   * @remarks
   * The field description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * The field code.
   * 
   * @example
   * age
   */
  fieldCode?: string;
  /**
   * @remarks
   * The field sort order.
   * 
   * @example
   * 1
   */
  fieldRank?: string;
  /**
   * @remarks
   * The source of the field.
   * 
   * @example
   * DEFAULT
   */
  fieldSource?: string;
  /**
   * @remarks
   * The field type.
   * 
   * @example
   * STRING
   */
  fieldType?: string;
  /**
   * @remarks
   * The field name.
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
   * The policy execution logic.
   * 
   * @example
   * 3&((1&2&4)
   */
  logicExpression?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * 描述
   */
  memo?: string;
  /**
   * @remarks
   * The rule actions.
   * 
   * @example
   * [{\\"inputs\\":[\\"auto_accselist\\"],\\"name\\":\\"__addDeTags__\\",\\"actionType\\":\\"TAG\\",\\"outputType\\":\\"const\\"}]
   */
  ruleActions?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * DEFAULT
   */
  ruleAuthType?: string;
  /**
   * @remarks
   * The event expressions.
   * 
   * @example
   * [{\\"expressionName\\":\\"同一设备同一IP上的注册用户数\\",\\"itemId\\":1,\\"left\\":{\\"name\\":\\"dK7EXHr490f\\"},\\"operatorCode\\":\\"gte\\",\\"operatorName\\":\\"大于等于\\",\\"right\\":{\\"fieldValue\\":\\"2\\"}}]
   */
  ruleExpressions?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 101544
   */
  ruleId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * 手机号MD5命中人脸测试名单
   */
  ruleName?: string;
  /**
   * @remarks
   * The policy status.
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
   * The business version number.
   * 
   * @example
   * 1
   */
  bizVersion?: number;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_aszbjb7236
   */
  eventCode?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * 注册风险
   */
  eventName?: string;
  /**
   * @remarks
   * The event status.
   * 
   * @example
   * ONLINE
   */
  eventStauts?: string;
  /**
   * @remarks
   * The field list.
   */
  inputFields?: DescribeEventBaseInfoByEventCodeResponseBodyResultObjectInputFields[];
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * 备注
   */
  memo?: string;
  /**
   * @remarks
   * The policy information.
   */
  ruleDetails?: DescribeEventBaseInfoByEventCodeResponseBodyResultObjectRuleDetails[];
  /**
   * @remarks
   * The operation template code.
   * 
   * @example
   * register
   */
  templateCode?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 注册事件模板
   */
  templateName?: string;
  /**
   * @remarks
   * The templatetype.
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
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * The returned object.
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

