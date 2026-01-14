// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAgentInfoResponseBodyModelAgentGroupList extends $dara.Model {
  /**
   * @remarks
   * 坐席组ID
   * 
   * @example
   * 1
   */
  groupId?: number;
  /**
   * @remarks
   * 坐席组名称
   * 
   * @example
   * a
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAgentInfoResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * 坐席账号
   * 
   * @example
   * a
   */
  account?: string;
  /**
   * @remarks
   * 账号启用状态，0-停用，1-启用，默认1
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * 坐席分机号
   * 
   * @example
   * 1
   */
  agentExtension?: number;
  /**
   * @remarks
   * 坐席组ID列表
   */
  agentGroupIds?: number[];
  /**
   * @remarks
   * 坐席组列表
   */
  agentGroupList?: QueryAgentInfoResponseBodyModelAgentGroupList[];
  /**
   * @remarks
   * 坐席ID
   * 
   * @example
   * 1
   */
  agentId?: number;
  /**
   * @remarks
   * 坐席状态，1:在线；2:忙碌；3:小休；4:离线
   * 
   * @example
   * 1
   */
  agentStatus?: number;
  /**
   * @remarks
   * 坐席标签
   * 
   * @example
   * c
   */
  agentTag?: string;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2026-11-11 11:11:11
   */
  createTime?: string;
  /**
   * @remarks
   * 分机密码
   * 
   * @example
   * a
   */
  extensionPwd?: string;
  /**
   * @remarks
   * 分机注册地址
   * 
   * @example
   * b
   */
  extensionServer?: string;
  /**
   * @remarks
   * 坐席名称
   * 
   * @example
   * b
   */
  name?: string;
  /**
   * @remarks
   * WebSocket分机注册协议
   * 
   * @example
   * b
   */
  wsProtocol?: string;
  /**
   * @remarks
   * WebSocket分机注册地址
   * 
   * @example
   * a
   */
  wsRegisterAddress?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      active: 'Active',
      agentExtension: 'AgentExtension',
      agentGroupIds: 'AgentGroupIds',
      agentGroupList: 'AgentGroupList',
      agentId: 'AgentId',
      agentStatus: 'AgentStatus',
      agentTag: 'AgentTag',
      createTime: 'CreateTime',
      extensionPwd: 'ExtensionPwd',
      extensionServer: 'ExtensionServer',
      name: 'Name',
      wsProtocol: 'WsProtocol',
      wsRegisterAddress: 'WsRegisterAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      active: 'number',
      agentExtension: 'number',
      agentGroupIds: { 'type': 'array', 'itemType': 'number' },
      agentGroupList: { 'type': 'array', 'itemType': QueryAgentInfoResponseBodyModelAgentGroupList },
      agentId: 'number',
      agentStatus: 'number',
      agentTag: 'string',
      createTime: 'string',
      extensionPwd: 'string',
      extensionServer: 'string',
      name: 'string',
      wsProtocol: 'string',
      wsRegisterAddress: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentGroupIds)) {
      $dara.Model.validateArray(this.agentGroupIds);
    }
    if(Array.isArray(this.agentGroupList)) {
      $dara.Model.validateArray(this.agentGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAgentInfoResponseBody extends $dara.Model {
  /**
   * @example
   * Access Denied
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 43
   */
  code?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  model?: QueryAgentInfoResponseBodyModel;
  /**
   * @example
   * 示例值
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 17
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      message: 'string',
      model: QueryAgentInfoResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

