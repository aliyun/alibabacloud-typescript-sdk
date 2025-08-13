// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Rule ID.
   * 
   * @example
   * 5178
   */
  consoleRuleId?: number;
  /**
   * @remarks
   * Creation type
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_acytyt7036
   */
  eventCode?: string;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * 登录事件
   */
  eventName?: string;
  /**
   * @remarks
   * Policy expression execution logic
   * 
   * @example
   * 1&2
   */
  logicExpression?: string;
  /**
   * @remarks
   * Memo
   * 
   * @example
   * 描述信息
   */
  memo?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Policy execution output action
   * 
   * @example
   * [{"inputs":["123"],"name":"__addDeTags__","actionType":"TAG","outputType":"const"},{"inputs":["123"],"name":"__addDeScore__","actionType":"SCORE","outputType":"const","inputTitle":"123"},{"actionType":"MIDDLE_VARIABLE","fieldValue":"123","inputs":["mid1"]},{"actionType":"VARIABLE","inputs":["gg"],"name":"mid1"}]
   */
  ruleActions?: string;
  /**
   * @remarks
   * DSL policy execution logic
   * 
   * @example
   * {"elseIfStatement":[],"elseStatement":{},"ifStatement":{"condition":{"currentId":0,"deepCount":1,"list":[{"currentId":0,"deepCount":1,"left":{"code":"deFunctionProcess(ip,\\"isIp\\")","description":"判断是否符合IPv4标准","displayType":"SYSTEM_BIND","fieldType":"BOOLEAN","functionCode":"","functionName":"","hasRightVariable":false,"name":"__isIpAddressV4__","outputThreshold":{},"sourceType":"SAF","title":"IP是否符合IPV4格式","type":"SYSTEM_BIND"},"operatorCode":"boolIsFalse","operatorName":"为false","parentId":0,"sequence":1}],"parentId":0,"relationship":"and"},"then":[{"inputs":["123"],"name":"__addDeTags__","actionType":"TAG","outputType":"const"}]}}
   */
  ruleBody?: string;
  /**
   * @remarks
   * Policy expression
   * 
   * @example
   * [{"expressionName":"cc","itemId":1,"left":{"name":"__ipLocationCityCode__"},"operatorCode":"equals","operatorName":"等于","right":{"fieldValue":"a"}}]
   */
  ruleExpressions?: string;
  /**
   * @remarks
   * Policy name
   * 
   * @example
   * 注册手机号是11位数字
   */
  ruleName?: string;
  /**
   * @remarks
   * Policy status
   * 
   * @example
   * DRAFT
   */
  ruleStatus?: string;
  /**
   * @remarks
   * Policy type
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

