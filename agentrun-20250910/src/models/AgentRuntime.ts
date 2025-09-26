// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CodeConfiguration } from "./CodeConfiguration";
import { ContainerConfiguration } from "./ContainerConfiguration";
import { HealthCheckConfiguration } from "./HealthCheckConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { ProtocolConfiguration } from "./ProtocolConfiguration";


/**
 */
export class AgentRuntime extends $dara.Model {
  /**
   * @remarks
   * 智能体运行时的全局唯一资源名称
   */
  agentRuntimeArn?: string;
  /**
   * @remarks
   * 智能体运行时的唯一标识符
   */
  agentRuntimeId?: string;
  /**
   * @remarks
   * 智能体运行时的名称，用于标识和区分不同的运行时实例
   */
  agentRuntimeName?: string;
  /**
   * @remarks
   * 智能体运行时的版本号，用于版本管理和回滚
   */
  agentRuntimeVersion?: string;
  /**
   * @remarks
   * 智能体运行时的部署类型，支持Code（代码模式）和Container（容器模式）
   */
  artifactType?: string;
  /**
   * @remarks
   * 当artifactType为Code时的代码配置信息
   */
  codeConfiguration?: CodeConfiguration;
  /**
   * @remarks
   * 当artifactType为Container时的容器配置信息
   */
  containerConfiguration?: ContainerConfiguration;
  /**
   * @remarks
   * 智能体运行时分配的CPU资源，单位为核数
   */
  cpu?: number;
  /**
   * @remarks
   * 智能体运行时的创建时间，采用ISO 8601格式
   */
  createdAt?: string;
  /**
   * @remarks
   * 智能体运行时的描述信息，说明该运行时的用途和功能
   */
  description?: string;
  /**
   * @remarks
   * 智能体运行时的环境变量配置
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
   * 智能体运行时最后一次更新的时间，采用ISO 8601格式
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * SLS（简单日志服务）配置
   */
  logConfiguration?: LogConfiguration;
  /**
   * @remarks
   * 智能体运行时分配的内存资源，单位为MB
   */
  memory?: number;
  /**
   * @remarks
   * 智能体运行时的网络配置信息
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * 智能体运行时监听的端口号
   */
  port?: number;
  /**
   * @remarks
   * 智能体运行时的通信协议配置
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
  /**
   * @remarks
   * 智能体运行时的当前状态，如READY（就绪）、CREATING（创建中）、FAILED（失败）等
   */
  status?: string;
  /**
   * @remarks
   * 当前状态的原因说明（如适用）
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeArn: 'agentRuntimeArn',
      agentRuntimeId: 'agentRuntimeId',
      agentRuntimeName: 'agentRuntimeName',
      agentRuntimeVersion: 'agentRuntimeVersion',
      artifactType: 'artifactType',
      codeConfiguration: 'codeConfiguration',
      containerConfiguration: 'containerConfiguration',
      cpu: 'cpu',
      createdAt: 'createdAt',
      description: 'description',
      environmentVariables: 'environmentVariables',
      executionRoleArn: 'executionRoleArn',
      healthCheckConfiguration: 'healthCheckConfiguration',
      lastUpdatedAt: 'lastUpdatedAt',
      logConfiguration: 'logConfiguration',
      memory: 'memory',
      networkConfiguration: 'networkConfiguration',
      port: 'port',
      protocolConfiguration: 'protocolConfiguration',
      sessionConcurrencyLimitPerInstance: 'sessionConcurrencyLimitPerInstance',
      sessionIdleTimeoutSeconds: 'sessionIdleTimeoutSeconds',
      status: 'status',
      statusReason: 'statusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeArn: 'string',
      agentRuntimeId: 'string',
      agentRuntimeName: 'string',
      agentRuntimeVersion: 'string',
      artifactType: 'string',
      codeConfiguration: CodeConfiguration,
      containerConfiguration: ContainerConfiguration,
      cpu: 'number',
      createdAt: 'string',
      description: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      executionRoleArn: 'string',
      healthCheckConfiguration: HealthCheckConfiguration,
      lastUpdatedAt: 'string',
      logConfiguration: LogConfiguration,
      memory: 'number',
      networkConfiguration: NetworkConfiguration,
      port: 'number',
      protocolConfiguration: ProtocolConfiguration,
      sessionConcurrencyLimitPerInstance: 'number',
      sessionIdleTimeoutSeconds: 'number',
      status: 'string',
      statusReason: 'string',
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

