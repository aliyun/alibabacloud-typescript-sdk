// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareRuleResponseBodyResultObjectNewRule extends $dara.Model {
  /**
   * @remarks
   * Audit ID.
   * 
   * @example
   * 258
   */
  auditId?: number;
  /**
   * @remarks
   * Authorization type.
   * 
   * @example
   * all
   */
  authType?: string;
  /**
   * @remarks
   * Primary key ID of the rule.
   * 
   * @example
   * 6760
   */
  consoleRuleId?: number;
  /**
   * @remarks
   * Creation type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * Event code.
   * 
   * @example
   * de_asssce8122
   */
  eventCode?: string;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * 注册_事件
   */
  eventName?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1760670462000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 1761196952000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Logic of the rule expression execution.
   * 
   * @example
   * 1&2&3
   */
  logicExpression?: string;
  /**
   * @remarks
   * Main event code.
   * 
   * @example
   * de_asssce8122
   */
  mainEventCode?: string;
  /**
   * @remarks
   * Memo.
   * 
   * @example
   * 鸿蒙元服务_交费业务
   */
  memo?: string;
  /**
   * @remarks
   * Returned rule action structure. Returned when the policy type is DEFAULT.
   * 
   * @example
   * {
   *     "TAG": "[{\\"code\\":\\"addDeTags\\",\\"inputs\\":[\\"test\\"],\\"description\\":\\"打标签\\",\\"type\\":\\"ACTION\\",\\"title\\":\\"打标签\\",\\"actionType\\":\\"TAG\\",\\"displayType\\":\\"ACTION\\",\\"sourceType\\":\\"SAF\\",\\"name\\":\\"__addDeTags__\\",\\"fieldType\\":\\"STRING\\"}]"
   * }
   */
  ruleActionMap?: { [key: string]: any };
  /**
   * @remarks
   * Output actions of the rule execution. Returned when the rule type is DEFAULT.
   * 
   * @example
   * [
   *     {
   *         "actionType": "TAG",
   *         "code": "addDeTags",
   *         "description": "打标签",
   *         "displayType": "ACTION",
   *         "fieldType": "STRING",
   *         "inputs": [
   *             "test"
   *         ],
   *         "name": "__addDeTags__",
   *         "sourceType": "SAF",
   *         "title": "打标签",
   *         "type": "ACTION"
   *     }
   * ]
   */
  ruleActions?: string;
  /**
   * @remarks
   * Authorization type of the rule.
   * 
   * @example
   * NORMAL
   */
  ruleAuthType?: string;
  /**
   * @remarks
   * DSL logic for rule execution. Returned when the rule type is DSL.
   * 
   * @example
   * {
   *     "elseStatement": {
   * 
   *     },
   *     "ifStatement": {
   *         "condition": {
   *             "currentId": 0,
   *             "deepCount": 1,
   *             "list": [
   *                 {
   *                     "sequence": 1,
   *                     "left": {
   *                         "displayType": "NATIVE",
   *                         "code": "ip",
   *                         "functionCode": "",
   *                         "functionName": "",
   *                         "name": "ip",
   *                         "description": "IP地址",
   *                         "hasRightVariable": true,
   *                         "title": "IP地址",
   *                         "type": "NATIVE",
   *                         "fieldType": "STRING"
   *                     },
   *                     "currentId": 0,
   *                     "deepCount": 1,
   *                     "right": {
   *                         "name": "192.168.1.1",
   *                         "rightVariableType": "constant"
   *                     },
   *                     "operatorCode": "equals",
   *                     "operatorName": "等于",
   *                     "parentId": 0
   *                 }
   *             ],
   *             "relationship": "and",
   *             "parentId": 0
   *         },
   *         "then": [
   *             {
   *                 "actionType": "TAG",
   *                 "displayType": "ACTION",
   *                 "code": "addDeTags",
   *                 "sourceType": "SAF",
   *                 "inputs": [
   *                     "10"
   *                 ],
   *                 "name": "__addDeTags__",
   *                 "description": "打标签",
   *                 "outputType": "const",
   *                 "title": "打标签",
   *                 "type": "ACTION",
   *                 "fieldType": "STRING"
   *             }
   *         ],
   *         "expressions": [
   *             {
   *                 "itemId": 1,
   *                 "left": {
   *                     "displayType": "NATIVE",
   *                     "code": "ip",
   *                     "functionCode": "",
   *                     "functionName": "",
   *                     "name": "ip",
   *                     "description": "IP地址",
   *                     "hasRightVariable": true,
   *                     "title": "IP地址",
   *                     "type": "NATIVE",
   *                     "fieldType": "STRING"
   *                 },
   *                 "expressionName": "IP地址 等于 192.168.1.1",
   *                 "rightValue": "192.168.1.1",
   *                 "right": {
   *                     "name": "192.168.1.1",
   *                     "fieldValue": "192.168.1.1"
   *                 },
   *                 "operatorCode": "equals",
   *                 "operatorName": "等于"
   *             }
   *         ]
   *     },
   *     "elseIfStatement": [
   * 
   *     ]
   * }
   */
  ruleBody?: string;
  /**
   * @remarks
   * Policy expressions. Returned when the policy type is DEFAULT.
   * 
   * @example
   * [{\\"expressionName\\":\\"设备token不为空\\",\\"itemId\\":1,\\"left\\":{\\"name\\":\\"deviceToken\\"},\\"operatorCode\\":\\"isNotEmptyWrapper\\",\\"operatorName\\":\\"不为空\\"}]
   */
  ruleExpressions?: string;
  /**
   * @remarks
   * Rule ID.
   * 
   * @example
   * 101793
   */
  ruleId?: string;
  /**
   * @remarks
   * Rule name.
   * 
   * @example
   * 返回设备信息
   */
  ruleName?: string;
  /**
   * @remarks
   * Policy status.
   * 
   * @example
   * DRAFT
   */
  ruleStatus?: string;
  /**
   * @remarks
   * Rule type.
   * 
   * @example
   * DSL
   */
  ruleType?: string;
  /**
   * @remarks
   * Primary key ID of the rule version.
   * 
   * @example
   * 11519
   */
  ruleVersionId?: number;
  /**
   * @remarks
   * User UID.
   * 
   * @example
   * 151222xxxxxxxxx
   */
  userId?: number;
  /**
   * @remarks
   * Version number.
   * 
   * @example
   * 3
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      auditId: 'auditId',
      authType: 'authType',
      consoleRuleId: 'consoleRuleId',
      createType: 'createType',
      eventCode: 'eventCode',
      eventName: 'eventName',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      logicExpression: 'logicExpression',
      mainEventCode: 'mainEventCode',
      memo: 'memo',
      ruleActionMap: 'ruleActionMap',
      ruleActions: 'ruleActions',
      ruleAuthType: 'ruleAuthType',
      ruleBody: 'ruleBody',
      ruleExpressions: 'ruleExpressions',
      ruleId: 'ruleId',
      ruleName: 'ruleName',
      ruleStatus: 'ruleStatus',
      ruleType: 'ruleType',
      ruleVersionId: 'ruleVersionId',
      userId: 'userId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditId: 'number',
      authType: 'string',
      consoleRuleId: 'number',
      createType: 'string',
      eventCode: 'string',
      eventName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      logicExpression: 'string',
      mainEventCode: 'string',
      memo: 'string',
      ruleActionMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ruleActions: 'string',
      ruleAuthType: 'string',
      ruleBody: 'string',
      ruleExpressions: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleStatus: 'string',
      ruleType: 'string',
      ruleVersionId: 'number',
      userId: 'number',
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

export class CompareRuleResponseBodyResultObjectOldRule extends $dara.Model {
  /**
   * @remarks
   * Audit ID.
   * 
   * @example
   * 257
   */
  auditId?: number;
  /**
   * @remarks
   * Authorization type.
   * 
   * @example
   * all
   */
  authType?: string;
  /**
   * @remarks
   * Primary key ID of the policy.
   * 
   * @example
   * 6760
   */
  consoleRuleId?: number;
  /**
   * @remarks
   * Creation type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * Event code.
   * 
   * @example
   * de_asssce8122
   */
  eventCode?: string;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * 注册_事件
   */
  eventName?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1760670462000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 1760670462000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Execution logic of the policy expression.
   * 
   * @example
   * 1&2
   */
  logicExpression?: string;
  /**
   * @remarks
   * Main event code.
   * 
   * @example
   * de_asssce8122
   */
  mainEventCode?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * 鸿蒙元服务_交费业务
   */
  memo?: string;
  /**
   * @remarks
   * Returned rule action structure. Returned when the policy type is DEFAULT.
   * 
   * @example
   * {
   *     "TAG": "[{\\"code\\":\\"addDeTags\\",\\"inputs\\":[\\"test\\"],\\"description\\":\\"打标签\\",\\"type\\":\\"ACTION\\",\\"title\\":\\"打标签\\",\\"actionType\\":\\"TAG\\",\\"displayType\\":\\"ACTION\\",\\"sourceType\\":\\"SAF\\",\\"name\\":\\"__addDeTags__\\",\\"fieldType\\":\\"STRING\\"}]"
   * }
   */
  ruleActionMap?: { [key: string]: any };
  /**
   * @remarks
   * Policy execution output actions. Returned when the policy type is DEFAULT.
   * 
   * @example
   * [
   *     {
   *         "actionType": "TAG",
   *         "code": "addDeTags",
   *         "description": "打标签",
   *         "displayType": "ACTION",
   *         "fieldType": "STRING",
   *         "inputs": [
   *             "test"
   *         ],
   *         "name": "__addDeTags__",
   *         "sourceType": "SAF",
   *         "title": "打标签",
   *         "type": "ACTION"
   *     }
   * ]
   */
  ruleActions?: string;
  /**
   * @remarks
   * Policy authorization type.
   * 
   * @example
   * NORMAL
   */
  ruleAuthType?: string;
  /**
   * @remarks
   * DSL policy execution logic. Returned when the policy type is DSL.
   * 
   * @example
   * {
   *     "elseStatement": {
   * 
   *     },
   *     "ifStatement": {
   *         "condition": {
   *             "currentId": 0,
   *             "deepCount": 1,
   *             "list": [
   *                 {
   *                     "sequence": 1,
   *                     "left": {
   *                         "displayType": "NATIVE",
   *                         "code": "ip",
   *                         "functionCode": "",
   *                         "functionName": "",
   *                         "name": "ip",
   *                         "description": "IP地址",
   *                         "hasRightVariable": true,
   *                         "title": "IP地址",
   *                         "type": "NATIVE",
   *                         "fieldType": "STRING"
   *                     },
   *                     "currentId": 0,
   *                     "deepCount": 1,
   *                     "right": {
   *                         "name": "192.168.1.1",
   *                         "rightVariableType": "constant"
   *                     },
   *                     "operatorCode": "equals",
   *                     "operatorName": "等于",
   *                     "parentId": 0
   *                 }
   *             ],
   *             "relationship": "and",
   *             "parentId": 0
   *         },
   *         "then": [
   *             {
   *                 "actionType": "TAG",
   *                 "displayType": "ACTION",
   *                 "code": "addDeTags",
   *                 "sourceType": "SAF",
   *                 "inputs": [
   *                     "10"
   *                 ],
   *                 "name": "__addDeTags__",
   *                 "description": "打标签",
   *                 "outputType": "const",
   *                 "title": "打标签",
   *                 "type": "ACTION",
   *                 "fieldType": "STRING"
   *             }
   *         ],
   *         "expressions": [
   *             {
   *                 "itemId": 1,
   *                 "left": {
   *                     "displayType": "NATIVE",
   *                     "code": "ip",
   *                     "functionCode": "",
   *                     "functionName": "",
   *                     "name": "ip",
   *                     "description": "IP地址",
   *                     "hasRightVariable": true,
   *                     "title": "IP地址",
   *                     "type": "NATIVE",
   *                     "fieldType": "STRING"
   *                 },
   *                 "expressionName": "IP地址 等于 192.168.1.1",
   *                 "rightValue": "192.168.1.1",
   *                 "right": {
   *                     "name": "192.168.1.1",
   *                     "fieldValue": "192.168.1.1"
   *                 },
   *                 "operatorCode": "equals",
   *                 "operatorName": "等于"
   *             }
   *         ]
   *     },
   *     "elseIfStatement": [
   * 
   *     ]
   * }
   */
  ruleBody?: string;
  /**
   * @remarks
   * Policy expression. Returned when the policy type is DEFAULT.
   * 
   * @example
   * [{\\"expressionName\\":\\"设备token不为空\\",\\"itemId\\":1,\\"left\\":{\\"name\\":\\"deviceToken\\"},\\"operatorCode\\":\\"isNotEmptyWrapper\\",\\"operatorName\\":\\"不为空\\"}]
   */
  ruleExpressions?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * @example
   * 101793
   */
  ruleId?: string;
  /**
   * @remarks
   * Policy name.
   * 
   * @example
   * 返回设备信息
   */
  ruleName?: string;
  /**
   * @remarks
   * Policy status.
   * 
   * @example
   * RUNNING
   */
  ruleStatus?: string;
  /**
   * @remarks
   * Policy type.
   * 
   * @example
   * DSL
   */
  ruleType?: string;
  /**
   * @remarks
   * Primary key ID of the policy version.
   * 
   * @example
   * 11518
   */
  ruleVersionId?: number;
  /**
   * @remarks
   * User UID.
   * 
   * @example
   * 151222xxxxxxxxx
   */
  userId?: number;
  /**
   * @remarks
   * Version number.
   * 
   * @example
   * 2
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      auditId: 'auditId',
      authType: 'authType',
      consoleRuleId: 'consoleRuleId',
      createType: 'createType',
      eventCode: 'eventCode',
      eventName: 'eventName',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      logicExpression: 'logicExpression',
      mainEventCode: 'mainEventCode',
      memo: 'memo',
      ruleActionMap: 'ruleActionMap',
      ruleActions: 'ruleActions',
      ruleAuthType: 'ruleAuthType',
      ruleBody: 'ruleBody',
      ruleExpressions: 'ruleExpressions',
      ruleId: 'ruleId',
      ruleName: 'ruleName',
      ruleStatus: 'ruleStatus',
      ruleType: 'ruleType',
      ruleVersionId: 'ruleVersionId',
      userId: 'userId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditId: 'number',
      authType: 'string',
      consoleRuleId: 'number',
      createType: 'string',
      eventCode: 'string',
      eventName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      logicExpression: 'string',
      mainEventCode: 'string',
      memo: 'string',
      ruleActionMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ruleActions: 'string',
      ruleAuthType: 'string',
      ruleBody: 'string',
      ruleExpressions: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleStatus: 'string',
      ruleType: 'string',
      ruleVersionId: 'number',
      userId: 'number',
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

export class CompareRuleResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * New policy object.
   */
  newRule?: CompareRuleResponseBodyResultObjectNewRule;
  /**
   * @remarks
   * Old policy object.
   */
  oldRule?: CompareRuleResponseBodyResultObjectOldRule;
  static names(): { [key: string]: string } {
    return {
      newRule: 'newRule',
      oldRule: 'oldRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newRule: CompareRuleResponseBodyResultObjectNewRule,
      oldRule: CompareRuleResponseBodyResultObjectOldRule,
    };
  }

  validate() {
    if(this.newRule && typeof (this.newRule as any).validate === 'function') {
      (this.newRule as any).validate();
    }
    if(this.oldRule && typeof (this.oldRule as any).validate === 'function') {
      (this.oldRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareRuleResponseBody extends $dara.Model {
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
   * Returned object.
   */
  resultObject?: CompareRuleResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: CompareRuleResponseBodyResultObject,
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

