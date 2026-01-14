// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentImportNumberShrinkRequest extends $dara.Model {
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
  customersShrink?: string;
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
      customersShrink: 'Customers',
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
      customersShrink: 'string',
      gatewayId: 'number',
      outId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

