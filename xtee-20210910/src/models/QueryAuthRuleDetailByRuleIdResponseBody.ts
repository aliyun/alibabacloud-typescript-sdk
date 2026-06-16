// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAuthRuleDetailByRuleIdResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The approval ID.
   * 
   * @example
   * 225
   */
  auditId?: number;
  /**
   * @remarks
   * The authorization type.
   * 
   * @example
   * all
   */
  authType?: string;
  /**
   * @remarks
   * The UID of the authorized user.
   * 
   * @example
   * *
   */
  authUsers?: string;
  /**
   * @remarks
   * The primary key ID of the policy.
   * 
   * @example
   * 6843
   */
  consoleRuleId?: number;
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
   * The creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The execution logic.
   * 
   * @example
   * 1&2
   */
  logicExpression?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 描述
   */
  memo?: string;
  /**
   * @remarks
   * The policy priority. A larger value indicates a higher priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The returned rule action struct.
   */
  ruleActionMap?: { [key: string]: string };
  /**
   * @remarks
   * The output actions.
   * 
   * @example
   * [{\\"inputs\\":[\\"unusualBrand\\"],\\"name\\":\\"__addDeTags__\\",\\"actionType\\":\\"TAG\\",\\"outputType\\":\\"const\\"}]
   */
  ruleActions?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * WHITE_BOX
   */
  ruleAuthType?: string;
  /**
   * @remarks
   * The rule expressions.
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
   * 102224
   */
  ruleId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * 营销风险识别
   */
  ruleName?: string;
  /**
   * @remarks
   * The policy status.
   * 
   * @example
   * RUNNING
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * DEFAULT
   */
  ruleType?: string;
  /**
   * @remarks
   * The primary key ID of the policy version.
   * 
   * @example
   * 11519
   */
  ruleVersionId?: number;
  /**
   * @remarks
   * The template type.
   * 
   * @example
   * PUB_SERVICE
   */
  templateType?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      auditId: 'auditId',
      authType: 'authType',
      authUsers: 'authUsers',
      consoleRuleId: 'consoleRuleId',
      eventCode: 'eventCode',
      eventName: 'eventName',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      logicExpression: 'logicExpression',
      memo: 'memo',
      priority: 'priority',
      ruleActionMap: 'ruleActionMap',
      ruleActions: 'ruleActions',
      ruleAuthType: 'ruleAuthType',
      ruleExpressions: 'ruleExpressions',
      ruleId: 'ruleId',
      ruleName: 'ruleName',
      ruleStatus: 'ruleStatus',
      ruleType: 'ruleType',
      ruleVersionId: 'ruleVersionId',
      templateType: 'templateType',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditId: 'number',
      authType: 'string',
      authUsers: 'string',
      consoleRuleId: 'number',
      eventCode: 'string',
      eventName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      logicExpression: 'string',
      memo: 'string',
      priority: 'number',
      ruleActionMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ruleActions: 'string',
      ruleAuthType: 'string',
      ruleExpressions: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleStatus: 'string',
      ruleType: 'string',
      ruleVersionId: 'number',
      templateType: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.ruleActionMap) {
      $dara.Model.validateMap(this.ruleActionMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAuthRuleDetailByRuleIdResponseBody extends $dara.Model {
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
  resultObject?: QueryAuthRuleDetailByRuleIdResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: QueryAuthRuleDetailByRuleIdResponseBodyResultObject,
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

