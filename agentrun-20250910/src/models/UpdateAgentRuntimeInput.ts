// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CodeConfiguration } from "./CodeConfiguration";
import { ContainerConfiguration } from "./ContainerConfiguration";
import { HealthCheckConfiguration } from "./HealthCheckConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { ProtocolConfiguration } from "./ProtocolConfiguration";


export class UpdateAgentRuntimeInput extends $dara.Model {
  agentRuntimeName?: string;
  artifactType?: string;
  codeConfiguration?: CodeConfiguration;
  containerConfiguration?: ContainerConfiguration;
  /**
   * @remarks
   * This parameter is required.
   */
  cpu?: number;
  description?: string;
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
  memory?: number;
  networkConfiguration?: NetworkConfiguration;
  port?: number;
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

