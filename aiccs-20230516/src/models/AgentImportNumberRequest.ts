// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentImportNumberRequestCustomers extends $dara.Model {
  /**
   * @remarks
   * 客户详情URL,用于展示客户用户在客户业务系统的详细信息，做多80个字符
   * 
   * @example
   * a
   */
  clientUrl?: string;
  /**
   * @remarks
   * 号码，如手机号等
   * 
   * @example
   * a
   */
  number?: string;
  /**
   * @remarks
   * 用户电话号码MD5，和number两者必传一个
   * 
   * @example
   * a
   */
  numberMD5?: string;
  /**
   * @remarks
   * 用户具体信息。如AI话术模板没变量要求或为人工外呼，可为空(总长度500个字符，多余的会被剔除)
   * 
   * @example
   * {"test":"234"}
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * 用户自定义标签,最多50个字符
   * 
   * @example
   * a
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      clientUrl: 'ClientUrl',
      number: 'Number',
      numberMD5: 'NumberMD5',
      properties: 'Properties',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUrl: 'string',
      number: 'string',
      numberMD5: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tag: 'string',
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentImportNumberRequest extends $dara.Model {
  /**
   * @remarks
   * 坐席ID，可以为空，但agentId与agentTag必须其中1个有值。用于查询对应的坐席信息
   * 
   * @example
   * 1
   */
  agentId?: number;
  /**
   * @remarks
   * 坐席唯一标识（创建坐席时的用户唯一标识），可以为空，但agentId与agentTag必须其中1个有值。用于查询对应的坐席信息
   * 
   * @example
   * 1001
   */
  agentTag?: string;
  /**
   * @remarks
   * 外呼类型 可选项：1001：坐席-人工外呼，1002：坐席-AI外呼-不转人工，1003：坐席-AI外呼-接通转人工，1004：坐席-AI外呼-智能转人工"
   * 
   * This parameter is required.
   * 
   * @example
   * 79
   */
  callType?: number;
  /**
   * @remarks
   * 具体用户信息，如手机号、姓名等，需根据具体任务参数要求传输。注：当callType为1001时，只会导入第1条数据
   * 
   * This parameter is required.
   */
  customers?: AgentImportNumberRequestCustomers[];
  /**
   * @remarks
   * 坐席-人工外呼选择的外呼线路，只针对callType=1001生效，其他callType不生效。如callType=1001，且gatewayId不传值，默认按系统的线路配置外呼
   * 
   * @example
   * 1
   */
  gatewayId?: number;
  /**
   * @remarks
   * 请求id，具有唯一性，用来做请求幂等处理，一个请求id有效期10分钟。不传则不做幂等处理
   * 
   * @example
   * 1asgfh
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * AI话术ID 客户已制作并已发布/平台授权的AI话术ID，如callType=1001可不填；如callType=1002,1003或1004 ，必填。
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentTag: 'AgentTag',
      callType: 'CallType',
      customers: 'Customers',
      gatewayId: 'GatewayId',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentTag: 'string',
      callType: 'number',
      customers: { 'type': 'array', 'itemType': AgentImportNumberRequestCustomers },
      gatewayId: 'number',
      outId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customers)) {
      $dara.Model.validateArray(this.customers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

