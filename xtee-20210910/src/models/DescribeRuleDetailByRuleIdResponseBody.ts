// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleDetailByRuleIdResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Service authorization type.
   * 
   * @example
   * all
   */
  authType?: string;
  /**
   * @remarks
   * Version.
   * 
   * @example
   * 1
   */
  bizVersion?: string;
  /**
   * @remarks
   * Primary key ID of the policy.
   * 
   * @example
   * 6633
   */
  consoleRuleId?: number;
  /**
   * @remarks
   * Creation type.
   * 
   * @example
   * MORMAL
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
   * Modification time.
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Log expression.
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
   * Memo.
   * 
   * @example
   * 备注
   */
  memo?: string;
  /**
   * @remarks
   * Rule action structure.
   * 
   * @example
   * {
   *                 "SCORE": [
   *                     {
   *                         "actionType": "SCORE",
   *                         "displayType": "ACTION",
   *                         "code": "deAddScore",
   *                         "sourceType": "SAF",
   *                         "inputs": [
   *                             "123"
   *                         ],
   *                         "name": "__addDeScore__",
   *                         "description": "打分",
   *                         "inputTitle": "123",
   *                         "outputType": "const",
   *                         "type": "ACTION",
   *                         "title": "打分",
   *                         "fieldType": "DOUBLE"
   *                     }
   *                 ],
   *                 "VARIABLE": [
   *                     {
   *                         "actionType": "VARIABLE",
   *                         "displayType": "MIDDLE",
   *                         "code": "mid1",
   *                         "inputs": [
   *                             "gg"
   *                         ],
   *                         "name": "mid1",
   *                         "description": "中间变量,mid1",
   *                         "type": "MIDDLE",
   *                         "title": "mid1",
   *                         "fieldType": "STRING"
   *                     }
   *                 ],
   *                 "TAG": [
   *                     {
   *                         "actionType": "TAG",
   *                         "displayType": "ACTION",
   *                         "code": "addDeTags",
   *                         "sourceType": "SAF",
   *                         "inputs": [
   *                             "123"
   *                         ],
   *                         "name": "__addDeTags__",
   *                         "description": "打标签",
   *                         "outputType": "const",
   *                         "type": "ACTION",
   *                         "title": "打标签",
   *                         "fieldType": "STRING"
   *                     }
   *                 ],
   *                 "MIDDLE_VARIABLE": [
   *                     {
   *                         "actionType": "MIDDLE_VARIABLE",
   *                         "inputs": [
   *                             "mid1"
   *                         ],
   *                         "fieldValue": "123",
   *                         "fieldType": "STRING"
   *                     }
   *                 ]
   *             }
   */
  ruleActionMap?: { [key: string]: any };
  /**
   * @remarks
   * Rule actions.
   * 
   * @example
   * [{\\"actionType\\":\\"TAG\\",\\"code\\":\\"addDeTags\\",\\"description\\":\\"打标签\\",\\"displayType\\":\\"ACTION\\",\\"fieldType\\":\\"STRING\\",\\"inputs\\":[\\"123\\"],\\"name\\":\\"__addDeTags__\\",\\"outputType\\":\\"const\\",\\"sourceType\\":\\"SAF\\",\\"title\\":\\"打标签\\",\\"type\\":\\"ACTION\\"},{\\"actionType\\":\\"SCORE\\",\\"code\\":\\"deAddScore\\",\\"description\\":\\"打分\\",\\"displayType\\":\\"ACTION\\",\\"fieldType\\":\\"DOUBLE\\",\\"inputTitle\\":\\"123\\",\\"inputs\\":[\\"123\\"],\\"name\\":\\"__addDeScore__\\",\\"outputType\\":\\"const\\",\\"sourceType\\":\\"SAF\\",\\"title\\":\\"打分\\",\\"type\\":\\"ACTION\\"},{\\"actionType\\":\\"MIDDLE_VARIABLE\\",\\"fieldType\\":\\"STRING\\",\\"fieldValue\\":\\"123\\",\\"inputs\\":[\\"mid1\\"]},{\\"actionType\\":\\"VARIABLE\\",\\"code\\":\\"mid1\\",\\"description\\":\\"中间变量,mid1\\",\\"displayType\\":\\"MIDDLE\\",\\"fieldType\\":\\"STRING\\",\\"inputs\\":[\\"gg\\"],\\"name\\":\\"mid1\\",\\"title\\":\\"mid1\\",\\"type\\":\\"MIDDLE\\"}]
   */
  ruleActions?: string;
  /**
   * @remarks
   * Rule authorization type.
   * 
   * @example
   * NOMAL
   */
  ruleAuthType?: string;
  /**
   * @remarks
   * DSL policy expression.
   * 
   * @example
   * {\\"elseIfStatement\\":[{\\"condition\\":{\\"currentId\\":0,\\"deepCount\\":1,\\"list\\":[{\\"currentId\\":0,\\"deepCount\\":1,\\"left\\":{\\"code\\":\\"getLbsRegion(longitude, latitude)?.prov\\",\\"description\\":\\"根据经纬度得到省份信息，比如经度：111.878062，纬度：22.585409，则经过运算，输出”广东省“\\",\\"displayType\\":\\"SELF_BIND\\",\\"fieldType\\":\\"STRING\\",\\"functionCode\\":\\"\\",\\"functionName\\":\\"\\",\\"hasRightVariable\\":true,\\"name\\":\\"sl_S02sHLFT7818\\",\\"outputThreshold\\":{},\\"sourceType\\":\\"SAF\\",\\"title\\":\\"经纬度自定义系统变量\\",\\"type\\":\\"SELF_BIND\\"},\\"operatorCode\\":\\"equals\\",\\"operatorName\\":\\"等于\\",\\"parentId\\":0,\\"right\\":{\\"name\\":\\"cc\\",\\"rightVariableType\\":\\"constant\\"},\\"sequence\\":5}],\\"parentId\\":0,\\"relationship\\":\\"and\\"},\\"then\\":[{\\"actionType\\":\\"TAG\\",\\"code\\":\\"addDeTags\\",\\"description\\":\\"打标签\\",\\"displayType\\":\\"ACTION\\",\\"fieldType\\":\\"STRING\\",\\"inputs\\":[\\"332\\"],\\"name\\":\\"__addDeTags__\\",\\"outputType\\":\\"const\\",\\"sourceType\\":\\"SAF\\",\\"title\\":\\"打标签\\",\\"type\\":\\"ACTION\\"}]}],\\"elseStatement\\":{\\"then\\":[{\\"actionType\\":\\"TAG\\",\\"code\\":\\"addDeTags\\",\\"description\\":\\"打标签\\",\\"displayType\\":\\"ACTION\\",\\"fieldType\\":\\"STRING\\",\\"inputs\\":[\\"321\\"],\\"name\\":\\"__addDeTags__\\",\\"outputType\\":\\"const\\",\\"sourceType\\":\\"SAF\\",\\"title\\":\\"打标签\\",\\"type\\":\\"ACTION\\"}]},\\"ifStatement\\":{\\"condition\\":{\\"currentId\\":0,\\"deepCount\\":1,\\"list\\":[{\\"currentId\\":0,\\"deepCount\\":1,\\"left\\":{\\"code\\":\\"queryPhoneSimulatorInfo(deviceToken)?.brand\\",\\"description\\":\\"设备信息-终端品牌\\",\\"displayType\\":\\"DEVICE\\",\\"fieldType\\":\\"STRING\\",\\"functionCode\\":\\"\\",\\"functionName\\":\\"\\",\\"hasRightVariable\\":true,\\"name\\":\\"__device_brand__\\",\\"sourceType\\":\\"SAF\\",\\"title\\":\\"设备信息-终端品牌-brand\\",\\"type\\":\\"DEVICE\\"},\\"operatorCode\\":\\"deInNameList\\",\\"operatorName\\":\\"在名单中\\",\\"parentId\\":0,\\"right\\":{\\"code\\":\\"nl_UN8otElLb490\\",\\"description\\":\\"描述11\\",\\"displayType\\":\\"NAME_LIST\\",\\"name\\":\\"nl_UN8otElLb490\\",\\"rightVariableType\\":\\"constant\\",\\"sourceType\\":\\"SAF\\",\\"title\\":\\"wtz_名单新建测试02\\",\\"type\\":\\"NAME_LIST\\"},\\"sequence\\":1},{\\"currentId\\":0,\\"deepCount\\":1,\\"left\\":{\\"code\\":\\"deFunctionProcess(ip,\\\\\\"isIp\\\\\\")\\",\\"description\\":\\"判断是否符合IPv4标准\\",\\"displayType\\":\\"SYSTEM_BIND\\",\\"fieldType\\":\\"BOOLEAN\\",\\"functionCode\\":\\"\\",\\"functionName\\":\\"\\",\\"hasRightVariable\\":false,\\"name\\":\\"__isIpAddressV4__\\",\\"outputThreshold\\":{},\\"sourceType\\":\\"SAF\\",\\"title\\":\\"IP是否符合IPV4格式\\",\\"type\\":\\"SYSTEM_BIND\\"},\\"operatorCode\\":\\"boolIsTrue\\",\\"operatorName\\":\\"为true\\",\\"parentId\\":0,\\"right\\":{\\"name\\":\\"\\",\\"rightVariableType\\":\\"constant\\"},\\"sequence\\":2},{\\"currentId\\":0,\\"deepCount\\":1,\\"list\\":[{\\"currentId\\":0,\\"deepCount\\":1,\\"left\\":{\\"code\\":\\"parseIpV2(ip)?.cityId\\",\\"description\\":\\"通过IP地址库解析IP所在的城市Code，例如，输入“42.120.74.211”，经过该变量运算，输出“330100”。\\",\\"displayType\\":\\"SYSTEM_BIND\\",\\"fieldType\\":\\"STRING\\",\\"functionCode\\":\\"\\",\\"functionName\\":\\"\\",\\"hasRightVariable\\":true,\\"name\\":\\"__ipLocationCityCode__\\",\\"outputThreshold\\":{},\\"sourceType\\":\\"SAF\\",\\"title\\":\\"IP所在地_城市Code\\",\\"type\\":\\"SYSTEM_BIND\\"},\\"operatorCode\\":\\"equals\\",\\"operatorName\\":\\"等于\\",\\"parentId\\":0,\\"right\\":{\\"code\\":\\"deFunctionProcess(ip,\\\\\\"getCountry\\\\\\")\\",\\"description\\":\\"通过IP地址库解析IP所在的城市名称，例如，输入“42.120.74.211”，经过该变量运算，输出“CN”。\\",\\"displayType\\":\\"SYSTEM_BIND\\",\\"fieldType\\":\\"STRING\\",\\"functionCode\\":\\"\\",\\"functionName\\":\\"\\",\\"name\\":\\"__ipLocationCountryId__\\",\\"outputThreshold\\":{},\\"rightVariableType\\":\\"variable\\",\\"sourceType\\":\\"SAF\\",\\"title\\":\\"IP所在地_国家Code\\",\\"type\\":\\"SYSTEM_BIND\\"},\\"sequence\\":3},{\\"currentId\\":0,\\"deepCount\\":1,\\"list\\":[{\\"currentId\\":0,\\"deepCount\\":1,\\"left\\":{\\"code\\":\\"parseIpV2(ip)?.cityId\\",\\"description\\":\\"通过IP地址库解析IP所在的城市Code，例如，输入“42.120.74.211”，经过该变量运算，输出“330100”。\\",\\"displayType\\":\\"SYSTEM_BIND\\",\\"fieldType\\":\\"STRING\\",\\"functionCode\\":\\"\\",\\"functionName\\":\\"\\",\\"hasRightVariable\\":true,\\"name\\":\\"__ipLocationCityCode__\\",\\"outputThreshold\\":{\\"$ref\\":\\"$.ifStatement.condition.list[2].list[0].left.outputThreshold\\"},\\"sourceType\\":\\"SAF\\",\\"title\\":\\"IP所在地_城市Code\\",\\"type\\":\\"SYSTEM_BIND\\"},\\"operatorCode\\":\\"deInNameList\\",\\"operatorName\\":\\"在名单中\\",\\"parentId\\":0,\\"right\\":{\\"code\\":\\"nl_NsVwBD2s11e0\\",\\"displayType\\":\\"NAME_LIST\\",\\"name\\":\\"nl_NsVwBD2s11e0\\",\\"rightVariableType\\":\\"constant\\",\\"sourceType\\":\\"SAF\\",\\"title\\":\\"device_block_list\\",\\"type\\":\\"NAME_LIST\\"},\\"sequence\\":4}],\\"parentId\\":0,\\"relationship\\":\\"and\\"}],\\"parentId\\":0,\\"relationship\\":\\"and\\"}],\\"parentId\\":0,\\"relationship\\":\\"and\\"},\\"then\\":[{\\"actionType\\":\\"TAG\\",\\"code\\":\\"addDeTags\\",\\"description\\":\\"打标签\\",\\"displayType\\":\\"ACTION\\",\\"fieldType\\":\\"STRING\\",\\"inputs\\":[\\"123\\"],\\"name\\":\\"__addDeTags__\\",\\"outputType\\":\\"const\\",\\"sourceType\\":\\"SAF\\",\\"title\\":\\"打标签\\",\\"type\\":\\"ACTION\\"}]}}
   */
  ruleBody?: string;
  /**
   * @remarks
   * Rule expressions.
   * 
   * @example
   * [{\\"expressionName\\":\\"营销风险识别评分\\",\\"itemId\\":1,\\"left\\":{\\"name\\":\\"sl_rjtsDXK124a5\\"},\\"operatorCode\\":\\"between\\",\\"operatorName\\":\\"数字在[a,b]之间\\",\\"right\\":{\\"fieldValue\\":\\"[65,100]\\"}}]
   */
  ruleExpressions?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * @example
   * 101544
   */
  ruleId?: string;
  /**
   * @remarks
   * Policy name.
   * 
   * @example
   * 营销风险识别
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
   * Rule type.
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
   * 3823
   */
  ruleVersionId?: number;
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      bizVersion: 'bizVersion',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      bizVersion: 'string',
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

export class DescribeRuleDetailByRuleIdResponseBody extends $dara.Model {
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
  resultObject?: DescribeRuleDetailByRuleIdResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeRuleDetailByRuleIdResponseBodyResultObject,
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

