// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CodeConfiguration } from "./CodeConfiguration";
import { ContainerConfiguration } from "./ContainerConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { McpConfig } from "./McpConfig";
import { NASConfig } from "./Nasconfig";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { OSSMountConfig } from "./OssmountConfig";


export class UpdateToolInputV2 extends $dara.Model {
  /**
   * @remarks
   * 更新工具部署的制品类型，支持：Code（代码包）、Container（容器镜像）
   * 
   * @example
   * Code
   */
  artifactType?: string;
  /**
   * @remarks
   * 更新代码包类型工具的配置信息
   */
  codeConfiguration?: CodeConfiguration;
  /**
   * @remarks
   * 更新容器类型工具的配置信息
   */
  containerConfiguration?: ContainerConfiguration;
  /**
   * @remarks
   * 更新工具实例的 CPU 核心数，单位为核
   * 
   * @example
   * 1.0
   */
  cpu?: number;
  /**
   * @remarks
   * 更新工具的创建方式。支持：MCP_REMOTE、MCP_LOCAL_STDIO、MCP_BUNDLE、CODE_PACKAGE、OPENAPI_IMPORT
   * 
   * @example
   * MCP_REMOTE
   */
  createMethod?: string;
  /**
   * @remarks
   * 更新工具使用的凭证名称
   * 
   * @example
   * my-credential
   */
  credentialName?: string;
  /**
   * @remarks
   * 更新工具的描述信息
   * 
   * @example
   * 更新后的工具描述
   */
  description?: string;
  /**
   * @remarks
   * 更新工具运行时的环境变量配置
   * 
   * @example
   * {"ENV": "production"}
   */
  environmentVariables?: { [key: string]: string };
  /**
   * @remarks
   * 更新工具执行时使用的 RAM 角色 ARN
   * 
   * @example
   * acs:ram::123456789:role/AliyunFCDefaultRole
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * 更新工具的日志配置
   */
  logConfiguration?: LogConfiguration;
  /**
   * @remarks
   * 更新 MCP 工具的配置信息，包括会话亲和性、代理配置等
   */
  mcpConfig?: McpConfig;
  /**
   * @remarks
   * 更新工具实例的内存大小，单位为 MB
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * 更新文件存储 NAS 的配置信息
   */
  nasConfig?: NASConfig;
  /**
   * @remarks
   * 更新工具的网络配置
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * 更新对象存储 OSS 的挂载配置
   */
  ossMountConfig?: OSSMountConfig;
  /**
   * @remarks
   * 更新工具服务监听的端口号
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * 更新工具使用的协议规范定义
   */
  protocolSpec?: string;
  /**
   * @remarks
   * 更新工具执行的超时时间，单位为秒
   * 
   * @example
   * 600
   */
  timeout?: number;
  /**
   * @remarks
   * 更新工具所属的工作空间标识符
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

