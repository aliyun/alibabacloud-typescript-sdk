// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAuthRuleDetailByRuleIdResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Audit ID
   * 
   * @example
   * 225
   */
  auditId?: number;
  /**
   * @remarks
   * Authorization type
   * 
   * @example
   * all
   */
  authType?: string;
  /**
   * @remarks
   * Authorized user UID
   * 
   * @example
   * *
   */
  authUsers?: string;
  /**
   * @remarks
   * Primary key ID of the strategy
   * 
   * @example
   * 6843
   */
  consoleRuleId?: number;
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
   * Creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Modification time
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Execution logic
   * 
   * @example
   * 1&2
   */
  logicExpression?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * 描述
   */
  memo?: string;
  /**
   * @remarks
   * Rule priority, the higher the number, the higher the priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * Returned rule action structure.
   */
  ruleActionMap?: { [key: string]: string };
  /**
   * @remarks
   * Output actions
   * 
   * @example
   * [{\\"inputs\\":[\\"unusualBrand\\"],\\"name\\":\\"__addDeTags__\\",\\"actionType\\":\\"TAG\\",\\"outputType\\":\\"const\\"}]
   */
  ruleActions?: string;
  /**
   * @remarks
   * Rule authorization type
   * 
   * @example
   * WHITE_BOX
   */
  ruleAuthType?: string;
  /**
   * @remarks
   * Rule expressions.
   * 
   * @example
   * [{\\"expressionName\\":\\"同一设备同一IP上的注册用户数\\",\\"itemId\\":1,\\"left\\":{\\"name\\":\\"dK7EXHr490f\\"},\\"operatorCode\\":\\"gte\\",\\"operatorName\\":\\"大于等于\\",\\"right\\":{\\"fieldValue\\":\\"2\\"}}]
   */
  ruleExpressions?: string;
  /**
   * @remarks
   * Strategy ID
   * 
   * @example
   * 102224
   */
  ruleId?: string;
  /**
   * @remarks
   * Strategy name
   * 
   * @example
   * 营销风险识别
   */
  ruleName?: string;
  /**
   * @remarks
   * Strategy status
   * 
   * @example
   * RUNNING
   */
  ruleStatus?: string;
  /**
   * @remarks
   * Rule type
   * 
   * @example
   * DEFAULT
   */
  ruleType?: string;
  /**
   * @remarks
   * Primary key ID of the strategy version
   * 
   * @example
   * 11519
   */
  ruleVersionId?: number;
  /**
   * @remarks
   * Template type
   * 
   * @example
   * PUB_SERVICE
   */
  templateType?: string;
  /**
   * @remarks
   * Version number
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
   * Request ID
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Returned object
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

