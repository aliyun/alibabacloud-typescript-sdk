// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentVersionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 版本所属的托管智能体或自定义智能体 ID。
   * 
   * @example
   * agent-0123456789abcdef0123456789abcdef
   */
  agentId?: string;
  /**
   * @remarks
   * 系统按 Agent 递增生成的版本号，例如 v1、v2。查询、删除版本及服务端点引用版本时使用。
   * 
   * @example
   * v1
   */
  agentVersion?: string;
  /**
   * @remarks
   * 仅表示版本模板与制品归档是否完整，不代表部署或运行状态。READY 为完整，INVALID 为归档缺失或不一致。
   * 
   * @example
   * READY
   */
  artifactStatus?: string;
  /**
   * @remarks
   * 托管智能体与 GetManagedAgent 的 data 结构一致，自定义智能体与 GetCustomAgent 的 data 结构一致，脱敏规则相同。
   * 
   * @example
   * {"agentId":"agent-0123456789abcdef0123456789abcdef","workspaceId":"ws-0123456789abcdef01234","name":"customer-service","description":"客服智能体","status":"Running","latestSpecVersion":2,"instruction":"你是一名客服助手。"}
   */
  configuration?: { [key: string]: any };
  /**
   * @remarks
   * 版本保存的时间，采用 ISO 8601 UTC 格式。
   * 
   * @example
   * 2026-08-12T01:02:03Z
   */
  createdAt?: string;
  /**
   * @remarks
   * 保存该版本的调用者阿里云账号 UID；RAM 用户调用时为其所属阿里云主账号 UID。
   * 
   * @example
   * 1234567890123456
   */
  createdBy?: string;
  /**
   * @remarks
   * 保存版本时填写的版本描述，最多 1024 个字符；保存时未填写则为空。
   * 
   * @example
   * 生产环境稳定版本
   */
  description?: string;
  /**
   * @remarks
   * 保存版本时 Agent 已生效的发布流水号，即当时的 effectiveSpecVersion。版本保存后该值不再变化。
   * 
   * @example
   * 2
   */
  targetSpecVersion?: number;
  /**
   * @remarks
   * 保存版本时用户指定的展示名称。早期保存且未记录名称的版本返回 agentVersion。
   * 
   * @example
   * 生产稳定版 V1.0
   */
  versionName?: string;
  /**
   * @remarks
   * 版本所属智能体所在的 AgentCore 工作空间 ID。
   * 
   * @example
   * ws-0123456789abcdef01234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agentVersion: 'agentVersion',
      artifactStatus: 'artifactStatus',
      configuration: 'configuration',
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      description: 'description',
      targetSpecVersion: 'targetSpecVersion',
      versionName: 'versionName',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'string',
      artifactStatus: 'string',
      configuration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createdAt: 'string',
      createdBy: 'string',
      description: 'string',
      targetSpecVersion: 'number',
      versionName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.configuration) {
      $dara.Model.validateMap(this.configuration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码，请求成功时为 SUCCESS，失败时为错误码。
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * 智能体固定版本详情，configuration 为版本保存时的 Agent 配置。
   */
  data?: GetAgentVersionResponseBodyData;
  /**
   * @remarks
   * HTTP 状态码。
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * 响应消息，请求成功时为 success，失败时为错误信息。
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * 请求 ID，用于定位和排查请求。
   * 
   * @example
   * 5E8F3C2A-1B4D-4F6E-9A7C-0D2B8E6F4A1C
   */
  requestId?: string;
  /**
   * @remarks
   * 请求是否成功。
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAgentVersionResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

