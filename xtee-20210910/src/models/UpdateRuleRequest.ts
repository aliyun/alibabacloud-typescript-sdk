// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRuleRequest extends $dara.Model {
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
   * Primary key ID of the policy
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
   * de_agdxgz0246
   */
  eventCode?: string;
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
   * 备注
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
   * Output action
   * 
   * @example
   * [{\\"inputs\\":[\\"rn0301\\"],\\"name\\":\\"__addDeTags__\\",\\"actionType\\":\\"TAG\\",\\"outputType\\":\\"const\\"}]
   */
  ruleActions?: string;
  /**
   * @remarks
   * DSL policy expression
   * 
   * @example
   * {
   *         "elseIfStatement": [
   *             {
   *                 "condition": {
   *                     "currentId": 0,
   *                     "deepCount": 1,
   *                     "list": [
   *                         {
   *                             "currentId": 0,
   *                             "deepCount": 1,
   *                             "left": {
   *                                 "code": "getLbsRegion(longitude, latitude)?.prov",
   *                                 "description": "根据经纬度得到省份信息，比如经度：111.878062，纬度：22.585409，则经过运算，输出”广东省“",
   *                                 "displayType": "SELF_BIND",
   *                                 "fieldType": "STRING",
   *                                 "functionCode": "",
   *                                 "functionName": "",
   *                                 "hasRightVariable": true,
   *                                 "name": "sl_S02sHLFT7818",
   *                                 "outputThreshold": {
   * 
   *                                 },
   *                                 "sourceType": "SAF",
   *                                 "title": "经纬度自定义系统变量",
   *                                 "type": "SELF_BIND"
   *                             },
   *                             "operatorCode": "equals",
   *                             "operatorName": "等于",
   *                             "parentId": 0,
   *                             "right": {
   *                                 "name": "v",
   *                                 "rightVariableType": "constant"
   *                             },
   *                             "sequence": 2
   *                         },
   *                         {
   *                             "currentId": 0,
   *                             "deepCount": 1,
   *                             "list": [
   *                                 {
   *                                     "currentId": 0,
   *                                     "deepCount": 1,
   *                                     "left": {
   *                                         "code": "deReadVelocity(userId,"hK1DMAp1d97",1,"H",0,true,"COUNT")",
   *                                         "description": "测试系统变量累计",
   *                                         "displayType": "SELF_BIND",
   *                                         "fieldType": "DOUBLE",
   *                                         "functionCode": "",
   *                                         "functionName": "",
   *                                         "hasRightVariable": true,
   *                                         "name": "hK1DMAp1d97",
   *                                         "outputThreshold": {
   * 
   *                                         },
   *                                         "sourceType": "SAF_SELF",
   *                                         "title": "测试系统变量累计",
   *                                         "type": "SELF_BIND"
   *                                     },
   *                                     "operatorCode": "equals",
   *                                     "operatorName": "等于",
   *                                     "parentId": 0,
   *                                     "right": {
   *                                         "name": "a",
   *                                         "rightVariableType": "constant"
   *                                     },
   *                                     "sequence": 3
   *                                 }
   *                             ],
   *                             "parentId": 0,
   *                             "relationship": "and"
   *                         }
   *                     ],
   *                     "parentId": 0,
   *                     "relationship": "and"
   *                 },
   *                 "then": [
   *                     {
   *                         "inputs": [
   *                             "123"
   *                         ],
   *                         "name": "__addDeScore__",
   *                         "actionType": "SCORE",
   *                         "outputType": "const",
   *                         "inputTitle": "123"
   *                     }
   *                 ]
   *             }
   *         ],
   *         "elseStatement": {
   * 
   *         },
   *         "ifStatement": {
   *             "condition": {
   *                 "currentId": 0,
   *                 "deepCount": 1,
   *                 "list": [
   *                     {
   *                         "currentId": 0,
   *                         "deepCount": 1,
   *                         "left": {
   *                             "code": "deFunctionProcess(ip,"isIp")",
   *                             "description": "判断是否符合IPv4标准",
   *                             "displayType": "SYSTEM_BIND",
   *                             "fieldType": "BOOLEAN",
   *                             "functionCode": "",
   *                             "functionName": "",
   *                             "hasRightVariable": true,
   *                             "name": "__isIpAddressV4__",
   *                             "outputThreshold": {
   * 
   *                             },
   *                             "sourceType": "SAF",
   *                             "title": "IP是否符合IPV4格式",
   *                             "type": "SYSTEM_BIND"
   *                         },
   *                         "operatorCode": "equals",
   *                         "operatorName": "等于",
   *                         "parentId": 0,
   *                         "right": {
   *                             "name": "c
   * d
   * s",
   *                             "rightVariableType": "constant"
   *                         },
   *                         "sequence": 1
   *                     }
   *                 ],
   *                 "parentId": 0,
   *                 "relationship": "and"
   *             },
   *             "then": [
   *                 {
   *                     "inputs": [
   *                         "22"
   *                     ],
   *                     "name": "__addDeTags__",
   *                     "actionType": "TAG",
   *                     "outputType": "const"
   *                 }
   *             ]
   *         }
   *     }
   */
  ruleBody?: string;
  /**
   * @remarks
   * Policy expression
   * 
   * @example
   * [{\\"expressionName\\":\\"手机号MD5命中人脸测试名单\\",\\"itemId\\":1,\\"left\\":{\\"name\\":\\"mobileMd5\\"},\\"operatorCode\\":\\"deInNameList\\",\\"operatorName\\":\\"在名单中\\",\\"right\\":{\\"fieldValue\\":\\"nl_5tolf69W138c\\"}}]
   */
  ruleExpressions?: string;
  /**
   * @remarks
   * Policy ID
   * 
   * @example
   * 102224
   */
  ruleId?: string;
  /**
   * @remarks
   * Policy name
   * 
   * @example
   * 分析中心事件测试_策略01
   */
  ruleName?: string;
  /**
   * @remarks
   * Policy status
   * 
   * @example
   * RUNNING
   */
  ruleStatus?: string;
  /**
   * @remarks
   * Policy type
   * 
   * @example
   * DEFAULT
   */
  ruleType?: string;
  /**
   * @remarks
   * Primary key ID of the policy version
   * 
   * @example
   * 11519
   */
  ruleVersionId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      consoleRuleId: 'consoleRuleId',
      eventCode: 'eventCode',
      logicExpression: 'logicExpression',
      memo: 'memo',
      regId: 'regId',
      ruleActions: 'ruleActions',
      ruleBody: 'ruleBody',
      ruleExpressions: 'ruleExpressions',
      ruleId: 'ruleId',
      ruleName: 'ruleName',
      ruleStatus: 'ruleStatus',
      ruleType: 'ruleType',
      ruleVersionId: 'ruleVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      consoleRuleId: 'number',
      eventCode: 'string',
      logicExpression: 'string',
      memo: 'string',
      regId: 'string',
      ruleActions: 'string',
      ruleBody: 'string',
      ruleExpressions: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleStatus: 'string',
      ruleType: 'string',
      ruleVersionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

