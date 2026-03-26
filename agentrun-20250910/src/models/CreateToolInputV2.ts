// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CodeConfiguration } from "./CodeConfiguration";
import { ContainerConfiguration } from "./ContainerConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { McpConfig } from "./McpConfig";
import { NASConfig } from "./Nasconfig";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { OSSMountConfig } from "./OssmountConfig";


export class CreateToolInputV2 extends $dara.Model {
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
   * 代码包类型工具的配置信息，包括代码位置、入口函数、运行时等，仅在制品类型为 Code 时需要提供
   */
  codeConfiguration?: CodeConfiguration;
  /**
   * @remarks
   * 容器类型工具的配置信息，包括镜像地址、启动命令、端口映射等，仅在制品类型为 Container 时需要提供
   */
  containerConfiguration?: ContainerConfiguration;
  /**
   * @remarks
   * 工具实例的 CPU 核心数，单位为核，支持小数，如 0.5 表示半核
   * 
   * @example
   * 0.5
   */
  cpu?: number;
  /**
   * @remarks
   * 工具的创建方式，必填项。支持：MCP_REMOTE（远程 MCP 服务器）、MCP_LOCAL_STDIO（本地 MCP 标准输入输出）、MCP_BUNDLE（MCP 打包部署）、CODE_PACKAGE（代码包部署）、OPENAPI_IMPORT（OpenAPI 导入）
   * 
   * This parameter is required.
   * 
   * @example
   * MCP_REMOTE
   */
  createMethod?: string;
  /**
   * @remarks
   * 工具使用的凭证名称，用于访问需要认证的外部服务，需要提前在系统中创建凭证
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
   * 工具运行时的环境变量配置，键值对形式，用于传递配置信息到工具运行环境
   * 
   * @example
   * {"ENV": "production", "LOG_LEVEL": "info"}
   */
  environmentVariables?: { [key: string]: string };
  /**
   * @remarks
   * 工具执行时使用的 RAM 角色 ARN，用于权限控制，格式如：acs:ram::123456789:role/AliyunFCDefaultRole
   * 
   * @example
   * acs:ram::123456789:role/AliyunFCDefaultRole
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * 工具的日志配置，包括日志存储位置（SLS）、日志级别等
   */
  logConfiguration?: LogConfiguration;
  /**
   * @remarks
   * MCP 工具的配置信息，包括会话亲和性、代理配置、绑定配置等，仅在工具类型为 MCP 时需要提供
   */
  mcpConfig?: McpConfig;
  /**
   * @remarks
   * 工具实例的内存大小，单位为 MB，建议根据工具的实际需求配置
   * 
   * @example
   * 512
   */
  memory?: number;
  /**
   * @remarks
   * 文件存储 NAS 的配置信息，用于工具访问 NAS 文件系统，实现持久化存储
   */
  nasConfig?: NASConfig;
  /**
   * @remarks
   * 工具的网络配置，包括 VPC、安全组、交换机等信息，用于配置工具的网络访问能力
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * 对象存储 OSS 的挂载配置，用于工具访问 OSS 存储桶中的文件
   */
  ossMountConfig?: OSSMountConfig;
  /**
   * @remarks
   * 工具服务监听的端口号，用于接收请求
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * 工具使用的协议规范定义，JSON 格式的字符串，定义工具的接口和交互方式
   */
  protocolSpec?: string;
  /**
   * @remarks
   * 工具执行的超时时间，单位为秒，超过此时间工具调用将被终止
   * 
   * @example
   * 300
   */
  timeout?: number;
  /**
   * @remarks
   * 工具的名称，必填项，用于标识和引用工具，需要在工作空间内唯一
   * 
   * This parameter is required.
   * 
   * @example
   * my-mcp-tool
   */
  toolName?: string;
  /**
   * @remarks
   * 工具的类型，必填项。支持：MCP（Model Context Protocol 工具）、FUNCTIONCALL（函数调用工具）、SKILL（技能工具）
   * 
   * This parameter is required.
   * 
   * @example
   * MCP
   */
  toolType?: string;
  /**
   * @remarks
   * 工具所属的工作空间标识符，可选项，不填则使用默认工作空间
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
      timeout: 'timeout',
      toolName: 'toolName',
      toolType: 'toolType',
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
      timeout: 'number',
      toolName: 'string',
      toolType: 'string',
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

