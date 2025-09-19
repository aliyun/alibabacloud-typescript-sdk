// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleSnapshotResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Business version.
   * 
   * @example
   * 1
   */
  bizVersion?: string;
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
   * Modification time.
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Expression for analysis results.
   * 
   * @example
   * 1&2
   */
  logicExpression?: string;
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
   * Rule actions.
   * 
   * @example
   * [{\\"inputs\\":[\\"LdShop\\"],\\"name\\":\\"__addDeTags__\\",\\"actionType\\":\\"TAG\\",\\"outputType\\":\\"const\\"}]
   */
  ruleActions?: string;
  /**
   * @remarks
   * DSL rule expression. This field is required when ruleType is DSL.
   * 
   * @example
   * {\\"elseIfStatement\\":[{\\"condition\\":{\\"currentId\\":0,\\"deepCount\\":1,\\"list\\":[{\\"currentId\\":0,\\"deepCount\\":1,\\"left\\":{\\"code\\":\\"getLbsRegion(longitude, latitude)?.prov\\",\\"description\\":\\"根据经纬度得到省份信息，比如经度：111.878062，纬度：22.585409，则经过运算，输出”广东省“\\",\\"displayType\\":\\"SELF_BIND\\",\\"fieldType\\":\\"STRING\\",\\"functionCode\\":\\"\\",\\"functionName\\":\\"\\",\\"hasRightVariable\\":true,\\"name\\":\\"sl_S02sHLFT7818\\",\\"outputThreshold\\":{},\\"sourceType\\":\\"SAF\\",\\"title\\":\\"经纬度自定义系统变量\\",\\"type\\":\\"SELF_BIND\\"},\\"operatorCode\\":\\"equals\\",\\"operatorName\\":\\"等于\\",\\"parentId\\":0,\\"right\\":{\\"name\\":\\"cc\\",\\"rightVariableType\\":\\"constant\\"},\\"sequence\\":5}],\\"parentId\\":0,\\"relationship\\":\\"and\\"},\\"then\\":[{\\"actionType\\":\\"TAG\\",\\"code\\":\\"addDeTags\\",\\"description\\":\\"打标签\\",\\"displayType\\":\\"ACTION\\",\\"fieldType\\":\\"STRING\\",\\"inputs\\":[\\"332\\"],\\"name\\":\\"__addDeTags__\\",\\"outputType\\":\\"const\\",\\"sourceType\\":\\"SAF\\",\\"title\\":\\"打标签\\",\\"type\\":\\"ACTION\\"}]}],\\"elseStatement\\":{\\"then\\":[{\\"actionType\\":\\"TAG\\",\\"code\\":\\"addDeTags\\",\\"description\\":\\"打标签\\",\\"displayType\\":\\"ACTION\\",\\"fieldType\\":\\"STRING\\",\\"inputs\\":[\\"321\\"],\\"name\\":\\"__addDeTags__\\",\\"outputType\\":\\"const\\",\\"sourceType\\":\\"SAF\\",\\"title\\":\\"打标签\\",\\"type\\":\\"ACTION\\"}]},\\"ifStatement\\":{\\"condition\\":{\\"currentId\\":0,\\"deepCount\\":1,\\"list\\":[{\\"currentId\\":0,\\"deepCount\\":1,\\"left\\":{\\"code\\":\\"queryPhoneSimulatorInfo(deviceToken)?.brand\\",\\"description\\":\\"设备信息-终端品牌\\",\\"displayType\\":\\"DEVICE\\",\\"fieldType\\":\\"STRING\\",\\"functionCode\\":\\"\\",\\"functionName\\":\\"\\",\\"hasRightVariable\\":true,\\"name\\":\\"__device_brand__\\",\\"sourceType\\":\\"SAF\\",\\"title\\":\\"设备信息-终端品牌-brand\\",\\"type\\":\\"DEVICE\\"},\\"operatorCode\\":\\"deInNameList\\",\\"operatorName\\":\\"在名单中\\",\\"parentId\\":0,\\"right\\":{\\"code\\":\\"nl_UN8otElLb490\\",\\"description\\":\\"描述11\\",\\"displayType\\":\\"NAME_LIST\\",\\"name\\":\\"nl_UN8otElLb490\\",\\"rightVariableType\\":\\"constant\\",\\"sourceType\\":\\"SAF\\",\\"title\\":\\"wtz_名单新建测试02\\",\\"type\\":\\"NAME_LIST\\"},\\"sequence\\":1},{\\"currentId\\":0,\\"deepCount\\":1,\\"left\\":{\\"code\\":\\"deFunctionProcess(ip,\\\\\\"isIp\\\\\\")\\",\\"description\\":\\"判断是否符合IPv4标准\\",\\"displayType\\":\\"SYSTEM_BIND\\",\\"fieldType\\":\\"BOOLEAN\\",\\"functionCode\\":\\"\\",\\"functionName\\":\\"\\",\\"hasRightVariable\\":false,\\"name\\":\\"__isIpAddressV4__\\",\\"outputThreshold\\":{},\\"sourceType\\":\\"SAF\\",\\"title\\":\\"IP是否符合IPV4格式\\",\\"type\\":\\"SYSTEM_BIND\\"},\\"operatorCode\\":\\"boolIsTrue\\",\\"operatorName\\":\\"为true\\",\\"parentId\\":0,\\"right\\":{\\"name\\":\\"\\",\\"rightVariableType\\":\\"constant\\"},\\"sequence\\":2},{\\"currentId\\":0,\\"deepCount\\":1,\\"list\\":[{\\"currentId\\":0,\\"deepCount\\":1,\\"left\\":{\\"code\\":\\"parseIpV2(ip)?.cityId\\",\\"description\\":\\"通过IP地址库解析IP所在的城市Code，例如，输入“42.120.74.211”，经过该变量运算，输出“330100”。\\",\\"displayType\\":\\"SYSTEM_BIND\\",\\"fieldType\\":\\"STRING\\",\\"functionCode\\":\\"\\",\\"functionName\\":\\"\\",\\"hasRightVariable\\":true,\\"name\\":\\"__ipLocationCityCode__\\",\\"outputThreshold\\":{},\\"sourceType\\":\\"SAF\\",\\"title\\":\\"IP所在地_城市Code\\",\\"type\\":\\"SYSTEM_BIND\\"},\\"operatorCode\\":\\"equals\\",\\"operatorName\\":\\"等于\\",\\"parentId\\":0,\\"right\\":{\\"code\\":\\"deFunctionProcess(ip,\\\\\\"getCountry\\\\\\")\\",\\"description\\":\\"通过IP地址库解析IP所在的城市名称，例如，输入“42.120.74.211”，经过该变量运算，输出“CN”。\\",\\"displayType\\":\\"SYSTEM_BIND\\",\\"fieldType\\":\\"STRING\\",\\"functionCode\\":\\"\\",\\"functionName\\":\\"\\",\\"name\\":\\"__ipLocationCountryId__\\",\\"outputThreshold\\":{},\\"rightVariableType\\":\\"variable\\",\\"sourceType\\":\\"SAF\\",\\"title\\":\\"IP所在地_国家Code\\",\\"type\\":\\"SYSTEM_BIND\\"},\\"sequence\\":3},{\\"currentId\\":0,\\"deepCount\\":1,\\"list\\":[{\\"currentId\\":0,\\"deepCount\\":1,\\"left\\":{\\"code\\":\\"parseIpV2(ip)?.cityId\\",\\"description\\":\\"通过IP地址库解析IP所在的城市Code，例如，输入“42.120.74.211”，经过该变量运算，输出“330100”。\\",\\"displayType\\":\\"SYSTEM_BIND\\",\\"fieldType\\":\\"STRING\\",\\"functionCode\\":\\"\\",\\"functionName\\":\\"\\",\\"hasRightVariable\\":true,\\"name\\":\\"__ipLocationCityCode__\\",\\"outputThreshold\\":{\\"$ref\\":\\"$.ifStatement.condition.list[2].list[0].left.outputThreshold\\"},\\"sourceType\\":\\"SAF\\",\\"title\\":\\"IP所在地_城市Code\\",\\"type\\":\\"SYSTEM_BIND\\"},\\"operatorCode\\":\\"deInNameList\\",\\"operatorName\\":\\"在名单中\\",\\"parentId\\":0,\\"right\\":{\\"code\\":\\"nl_NsVwBD2s11e0\\",\\"displayType\\":\\"NAME_LIST\\",\\"name\\":\\"nl_NsVwBD2s11e0\\",\\"rightVariableType\\":\\"constant\\",\\"sourceType\\":\\"SAF\\",\\"title\\":\\"device_block_list\\",\\"type\\":\\"NAME_LIST\\"},\\"sequence\\":4}],\\"parentId\\":0,\\"relationship\\":\\"and\\"}],\\"parentId\\":0,\\"relationship\\":\\"and\\"}],\\"parentId\\":0,\\"relationship\\":\\"and\\"},\\"then\\":[{\\"actionType\\":\\"TAG\\",\\"code\\":\\"addDeTags\\",\\"description\\":\\"打标签\\",\\"displayType\\":\\"ACTION\\",\\"fieldType\\":\\"STRING\\",\\"inputs\\":[\\"123\\"],\\"name\\":\\"__addDeTags__\\",\\"outputType\\":\\"const\\",\\"sourceType\\":\\"SAF\\",\\"title\\":\\"打标签\\",\\"type\\":\\"ACTION\\"}]}}
   */
  ruleBody?: string;
  /**
   * @remarks
   * Expression.
   * 
   * @example
   * [{\\"expressionName\\":\\"代下单_记录日志\\",\\"itemId\\":1,\\"left\\":{\\"name\\":\\"dhcfX2v7670\\"},\\"operatorCode\\":\\"gte\\",\\"operatorName\\":\\"大于等于\\",\\"right\\":{\\"fieldValue\\":\\"2\\"}}]
   */
  ruleExpressions?: string;
  /**
   * @remarks
   * Policy ID
   * 
   * @example
   * 101804
   */
  ruleId?: string;
  /**
   * @remarks
   * Policy name
   * 
   * @example
   * 营销风险识别
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
   * Rule type.
   * 
   * @example
   * DSL
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      bizVersion: 'bizVersion',
      eventCode: 'eventCode',
      eventName: 'eventName',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      logicExpression: 'logicExpression',
      memo: 'memo',
      ruleActions: 'ruleActions',
      ruleBody: 'ruleBody',
      ruleExpressions: 'ruleExpressions',
      ruleId: 'ruleId',
      ruleName: 'ruleName',
      ruleStatus: 'ruleStatus',
      ruleType: 'ruleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizVersion: 'string',
      eventCode: 'string',
      eventName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      logicExpression: 'string',
      memo: 'string',
      ruleActions: 'string',
      ruleBody: 'string',
      ruleExpressions: 'string',
      ruleId: 'string',
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

export class DescribeRuleSnapshotResponseBody extends $dara.Model {
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
  resultObject?: DescribeRuleSnapshotResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeRuleSnapshotResponseBodyResultObject,
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

