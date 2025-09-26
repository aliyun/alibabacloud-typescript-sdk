// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CodeConfiguration } from "./CodeConfiguration";
import { ContainerConfiguration } from "./ContainerConfiguration";
import { HealthCheckConfiguration } from "./HealthCheckConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { ProtocolConfiguration } from "./ProtocolConfiguration";


export class CreateAgentRuntimeInput extends $dara.Model {
  /**
   * @remarks
   * 智能体运行时的唯一标识名称，用于区分不同的智能体运行时实例
   * 
   * This parameter is required.
   */
  agentRuntimeName?: string;
  /**
   * @remarks
   * 指定智能体运行时的部署类型，支持Code（代码模式）和Container（容器模式）
   * 
   * This parameter is required.
   */
  artifactType?: string;
  /**
   * @remarks
   * 当artifactType为Code时的代码配置信息，包括代码源、入口文件等
   */
  codeConfiguration?: CodeConfiguration;
  /**
   * @remarks
   * 当artifactType为Container时的容器配置信息，包括镜像地址、启动命令等
   */
  containerConfiguration?: ContainerConfiguration;
  /**
   * @remarks
   * 为智能体运行时分配的CPU资源，单位为核数
   * 
   * This parameter is required.
   */
  cpu?: number;
  /**
   * @remarks
   * 用于访问外部服务的凭证ID，智能体运行时将使用此凭证进行身份验证
   */
  credentialId?: string;
  /**
   * @remarks
   * 智能体运行时的描述信息，用于说明该运行时的用途和功能
   */
  description?: string;
  /**
   * @remarks
   * 智能体运行时的环境变量配置，用于在运行时传递配置参数
   */
  environmentVariables?: { [key: string]: string };
  /**
   * @remarks
   * 为智能体运行时提供访问云服务权限的执行角色ARN
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * 智能体运行时的健康检查配置，用于监控运行时实例的健康状态
   */
  healthCheckConfiguration?: HealthCheckConfiguration;
  /**
   * @remarks
   * SLS（简单日志服务）配置
   */
  logConfiguration?: LogConfiguration;
  /**
   * @remarks
   * 为智能体运行时分配的内存资源，单位为MB
   * 
   * This parameter is required.
   */
  memory?: number;
  /**
   * @remarks
   * 智能体运行时的网络配置，包括VPC、安全组等网络访问设置
   * 
   * This parameter is required.
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * 智能体运行时监听的端口号，用于接收外部请求
   * 
   * This parameter is required.
   */
  port?: number;
  /**
   * @remarks
   * 智能体运行时的通信协议配置，定义运行时如何与外部系统交互
   */
  protocolConfiguration?: ProtocolConfiguration;
  /**
   * @remarks
   * 每个运行时实例允许的最大并发会话数
   */
  sessionConcurrencyLimitPerInstance?: number;
  /**
   * @remarks
   * 会话的空闲超时时间，单位为秒。实例没有会话请求后处于空闲状态，空闲态为闲置计费模式，超过此超时时间后会话自动过期，不可继续使用
   */
  sessionIdleTimeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeName: 'agentRuntimeName',
      artifactType: 'artifactType',
      codeConfiguration: 'codeConfiguration',
      containerConfiguration: 'containerConfiguration',
      cpu: 'cpu',
      credentialId: 'credentialId',
      description: 'description',
      environmentVariables: 'environmentVariables',
      executionRoleArn: 'executionRoleArn',
      healthCheckConfiguration: 'healthCheckConfiguration',
      logConfiguration: 'logConfiguration',
      memory: 'memory',
      networkConfiguration: 'networkConfiguration',
      port: 'port',
      protocolConfiguration: 'protocolConfiguration',
      sessionConcurrencyLimitPerInstance: 'sessionConcurrencyLimitPerInstance',
      sessionIdleTimeoutSeconds: 'sessionIdleTimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeName: 'string',
      artifactType: 'string',
      codeConfiguration: CodeConfiguration,
      containerConfiguration: ContainerConfiguration,
      cpu: 'number',
      credentialId: 'string',
      description: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      executionRoleArn: 'string',
      healthCheckConfiguration: HealthCheckConfiguration,
      logConfiguration: LogConfiguration,
      memory: 'number',
      networkConfiguration: NetworkConfiguration,
      port: 'number',
      protocolConfiguration: ProtocolConfiguration,
      sessionConcurrencyLimitPerInstance: 'number',
      sessionIdleTimeoutSeconds: 'number',
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
    if(this.healthCheckConfiguration && typeof (this.healthCheckConfiguration as any).validate === 'function') {
      (this.healthCheckConfiguration as any).validate();
    }
    if(this.logConfiguration && typeof (this.logConfiguration as any).validate === 'function') {
      (this.logConfiguration as any).validate();
    }
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
    }
    if(this.protocolConfiguration && typeof (this.protocolConfiguration as any).validate === 'function') {
      (this.protocolConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

