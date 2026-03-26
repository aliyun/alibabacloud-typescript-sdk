// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CodeConfiguration } from "./CodeConfiguration";
import { ContainerConfiguration } from "./ContainerConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { McpConfig } from "./McpConfig";
import { NASConfig } from "./Nasconfig";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { OSSMountConfig } from "./OssmountConfig";


export class Tool extends $dara.Model {
  /**
   * @remarks
   * 工具部署的制品类型，支持：Code（代码包）、Container（容器镜像）
   * 
   * @example
   * Code
   */
  artifactType?: string;
  /**
   * @remarks
   * 代码包类型工具的配置信息，包括代码位置、入口函数等
   */
  codeConfiguration?: CodeConfiguration;
  /**
   * @remarks
   * 容器类型工具的配置信息，包括镜像地址、启动命令等
   */
  containerConfiguration?: ContainerConfiguration;
  /**
   * @remarks
   * 工具实例的 CPU 核心数，单位为核
   * 
   * @example
   * 0.5
   */
  cpu?: number;
  /**
   * @remarks
   * 工具的创建方式，支持：MCP_REMOTE（远程 MCP 服务器）、MCP_LOCAL_STDIO（本地 MCP 标准输入输出）、MCP_BUNDLE（MCP 打包部署）、CODE_PACKAGE（代码包部署）、OPENAPI_IMPORT（OpenAPI 导入）
   * 
   * @example
   * MCP_REMOTE
   */
  createMethod?: string;
  /**
   * @remarks
   * 工具的创建时间，ISO 8601 格式
   * 
   * @example
   * 2025-09-10T10:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * 工具使用的凭证名称，用于访问需要认证的外部服务
   * 
   * @example
   * my-credential
   */
  credentialName?: string;
  /**
   * @remarks
   * 工具的详细描述信息，说明工具的功能和用途
   * 
   * @example
   * 这是一个用于处理文档的 MCP 工具
   */
  description?: string;
  /**
   * @remarks
   * 工具运行时的环境变量配置，键值对形式
   * 
   * @example
   * {"ENV": "production", "LOG_LEVEL": "info"}
   */
  environmentVariables?: { [key: string]: string };
  /**
   * @remarks
   * 工具执行时使用的 RAM 角色 ARN，用于权限控制
   * 
   * @example
   * acs:ram::123456789:role/AliyunFCDefaultRole
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * 工具的日志配置，包括日志存储位置和日志级别等
   */
  logConfiguration?: LogConfiguration;
  /**
   * @remarks
   * MCP 工具的配置信息，包括会话亲和性、代理配置等
   */
  mcpConfig?: McpConfig;
  /**
   * @remarks
   * 工具实例的内存大小，单位为 MB
   * 
   * @example
   * 512
   */
  memory?: number;
  /**
   * @remarks
   * 文件存储 NAS 的配置信息，用于工具访问 NAS 文件系统
   */
  nasConfig?: NASConfig;
  /**
   * @remarks
   * 工具的网络配置，包括 VPC、安全组等信息
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * 对象存储 OSS 的挂载配置，用于工具访问 OSS 存储
   */
  ossMountConfig?: OSSMountConfig;
  /**
   * @remarks
   * 工具服务监听的端口号
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * 工具使用的协议规范定义，JSON 格式的字符串
   */
  protocolSpec?: string;
  /**
   * @remarks
   * 工具的当前运行状态，如：Running（运行中）、Stopped（已停止）、Failed（失败）等
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * 工具状态的详细原因说明，特别是在失败或异常状态时提供错误信息
   */
  statusReason?: string;
  /**
   * @remarks
   * 工具执行的超时时间，单位为秒
   * 
   * @example
   * 300
   */
  timeout?: number;
  /**
   * @remarks
   * 工具的唯一标识符，由系统自动生成
   * 
   * @example
   * tool-abc123
   */
  toolId?: string;
  /**
   * @remarks
   * 工具的名称，用于标识和引用工具
   * 
   * @example
   * my-mcp-tool
   */
  toolName?: string;
  /**
   * @remarks
   * 工具的类型，支持：MCP（Model Context Protocol 工具）、FUNCTIONCALL（函数调用工具）、SKILL（技能工具）
   * 
   * @example
   * MCP
   */
  toolType?: string;
  /**
   * @remarks
   * 工具的最后更新时间，ISO 8601 格式
   * 
   * @example
   * 2025-09-10T12:00:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * 工具所属的工作空间标识符
   * 
   * @example
   * workspace-xyz789
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'artifactType',
      codeConfiguration: 'codeConfiguration',
      containerConfiguration: 'containerConfiguration',
      cpu: 'cpu',
      createMethod: 'createMethod',
      createdAt: 'createdAt',
      credentialName: 'credentialName',
      description: 'description',
      environmentVariables: 'environmentVariables',
      executionRoleArn: 'executionRoleArn',
      logConfiguration: 'logConfiguration',
      mcpConfig: 'mcpConfig',
      memory: 'memory',
      nasConfig: 'nasConfig',
      networkConfiguration: 'networkConfiguration',
      ossMountConfig: 'ossMountConfig',
      port: 'port',
      protocolSpec: 'protocolSpec',
      status: 'status',
      statusReason: 'statusReason',
      timeout: 'timeout',
      toolId: 'toolId',
      toolName: 'toolName',
      toolType: 'toolType',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      codeConfiguration: CodeConfiguration,
      containerConfiguration: ContainerConfiguration,
      cpu: 'number',
      createMethod: 'string',
      createdAt: 'string',
      credentialName: 'string',
      description: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      executionRoleArn: 'string',
      logConfiguration: LogConfiguration,
      mcpConfig: McpConfig,
      memory: 'number',
      nasConfig: NASConfig,
      networkConfiguration: NetworkConfiguration,
      ossMountConfig: OSSMountConfig,
      port: 'number',
      protocolSpec: 'string',
      status: 'string',
      statusReason: 'string',
      timeout: 'number',
      toolId: 'string',
      toolName: 'string',
      toolType: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.codeConfiguration && typeof (this.codeConfiguration as any).validate === 'function') {
      (this.codeConfiguration as any).validate();
    }
    if(this.containerConfiguration && typeof (this.containerConfiguration as any).validate === 'function') {
      (this.containerConfiguration as any).validate();
    }
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
    }
    if(this.logConfiguration && typeof (this.logConfiguration as any).validate === 'function') {
      (this.logConfiguration as any).validate();
    }
    if(this.mcpConfig && typeof (this.mcpConfig as any).validate === 'function') {
      (this.mcpConfig as any).validate();
    }
    if(this.nasConfig && typeof (this.nasConfig as any).validate === 'function') {
      (this.nasConfig as any).validate();
    }
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
    }
    if(this.ossMountConfig && typeof (this.ossMountConfig as any).validate === 'function') {
      (this.ossMountConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

