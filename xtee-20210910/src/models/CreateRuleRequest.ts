// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 5178
   */
  consoleRuleId?: number;
  /**
   * @remarks
   * The creation type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_acytyt7036
   */
  eventCode?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * 登录事件
   */
  eventName?: string;
  /**
   * @remarks
   * The execution logic of the policy expression.
   * 
   * @example
   * 1&2
   */
  logicExpression?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * 描述信息
   */
  memo?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The output actions of the policy execution.
   * 
   * @example
   * [{"inputs":["123"],"name":"__addDeTags__","actionType":"TAG","outputType":"const"},{"inputs":["123"],"name":"__addDeScore__","actionType":"SCORE","outputType":"const","inputTitle":"123"},{"actionType":"MIDDLE_VARIABLE","fieldValue":"123","inputs":["mid1"]},{"actionType":"VARIABLE","inputs":["gg"],"name":"mid1"}]
   */
  ruleActions?: string;
  /**
   * @remarks
   * The DSL policy execution logic.
   * 
   * @example
   * {"elseIfStatement":[],"elseStatement":{},"ifStatement":{"condition":{"currentId":0,"deepCount":1,"list":[{"currentId":0,"deepCount":1,"left":{"code":"deFunctionProcess(ip,\\"isIp\\")","description":"判断是否符合IPv4标准","displayType":"SYSTEM_BIND","fieldType":"BOOLEAN","functionCode":"","functionName":"","hasRightVariable":false,"name":"__isIpAddressV4__","outputThreshold":{},"sourceType":"SAF","title":"IP是否符合IPV4格式","type":"SYSTEM_BIND"},"operatorCode":"boolIsFalse","operatorName":"为false","parentId":0,"sequence":1}],"parentId":0,"relationship":"and"},"then":[{"inputs":["123"],"name":"__addDeTags__","actionType":"TAG","outputType":"const"}]}}
   */
  ruleBody?: string;
  /**
   * @remarks
   * The policy expressions.
   * 
   * @example
   * [{"expressionName":"cc","itemId":1,"left":{"name":"__ipLocationCityCode__"},"operatorCode":"equals","operatorName":"等于","right":{"fieldValue":"a"}}]
   */
  ruleExpressions?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * 注册手机号是11位数字
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
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * DRAFT
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      consoleRuleId: 'consoleRuleId',
      createType: 'createType',
      eventCode: 'eventCode',
      eventName: 'eventName',
      logicExpression: 'logicExpression',
      memo: 'memo',
      regId: 'regId',
      ruleActions: 'ruleActions',
      ruleBody: 'ruleBody',
      ruleExpressions: 'ruleExpressions',
      ruleName: 'ruleName',
      ruleStatus: 'ruleStatus',
      ruleType: 'ruleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      consoleRuleId: 'number',
      createType: 'string',
      eventCode: 'string',
      eventName: 'string',
      logicExpression: 'string',
      memo: 'string',
      regId: 'string',
      ruleActions: 'string',
      ruleBody: 'string',
      ruleExpressions: 'string',
      ruleName: 'string',
      ruleStatus: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

