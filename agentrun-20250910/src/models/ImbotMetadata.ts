// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IMBotMetadata extends $dara.Model {
  /**
   * @remarks
   * 可选
   * 
   * **if can be null:**
   * true
   */
  agentRuntimeEndpointId?: string;
  /**
   * @remarks
   * 标准模式下必填：下游 Agent 可调用的 URL；custom 模式可省略
   * 
   * **if can be null:**
   * true
   */
  agentRuntimeEndpointUrl?: string;
  /**
   * @remarks
   * 绑定的 Agent Runtime UUID
   * 
   * **if can be null:**
   * true
   */
  agentRuntimeId?: string;
  /**
   * @remarks
   * 自定义函数元信息；可选；与后端 IMBotMetadata 持久化字段一致
   * 
   * **if can be null:**
   * true
   */
  customFunctionMeta?: string;
  /**
   * @remarks
   * 标准模式下必填，与 ValidateAgentRuntimeProtocolTypeValue 一致（大小写敏感）；custom 模式可省略
   * 
   * **if can be null:**
   * true
   */
  protocolType?: string;
  /**
   * @remarks
   * 不写入单 Bot 持久化 JSON；用于首次/更新时设置租户级 FC RAM 执行角色 ARN（acs:ram::...）；FC 启用且非 custom 时按服务逻辑校验
   * 
   * **if can be null:**
   * true
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeEndpointId: 'agentRuntimeEndpointId',
      agentRuntimeEndpointUrl: 'agentRuntimeEndpointUrl',
      agentRuntimeId: 'agentRuntimeId',
      customFunctionMeta: 'customFunctionMeta',
      protocolType: 'protocolType',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeEndpointId: 'string',
      agentRuntimeEndpointUrl: 'string',
      agentRuntimeId: 'string',
      customFunctionMeta: 'string',
      protocolType: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

