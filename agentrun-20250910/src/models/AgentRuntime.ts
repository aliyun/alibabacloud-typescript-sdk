// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CodeConfiguration } from "./CodeConfiguration";
import { ContainerConfiguration } from "./ContainerConfiguration";
import { HealthCheckConfiguration } from "./HealthCheckConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { NASConfig } from "./Nasconfig";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { OSSMountConfig } from "./OssmountConfig";
import { ProtocolConfiguration } from "./ProtocolConfiguration";


export class AgentRuntime extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the agent runtime.
   * 
   * @example
   * acs:agentrun:cn-hangzhou:1760720386195983:runtimes/7a1b6d39-9f8f-4ce2-b9c9-6db1b0b9e169
   */
  agentRuntimeArn?: string;
  /**
   * @remarks
   * The unique identifier of the agent runtime.
   * 
   * @example
   * ar-1234567890abcdef
   */
  agentRuntimeId?: string;
  /**
   * @remarks
   * The name of the agent runtime.
   * 
   * @example
   * my-agent-runtime
   */
  agentRuntimeName?: string;
  /**
   * @remarks
   * The version number of the agent runtime.
   * 
   * @example
   * 1
   */
  agentRuntimeVersion?: string;
  /**
   * @remarks
   * The deployment type of the agent runtime. Valid values: `Code` and `Container`.
   * 
   * @example
   * Code
   */
  artifactType?: string;
  /**
   * @remarks
   * The code configuration details. This parameter is applicable when `artifactType` is set to `Code`.
   * 
   * @example
   * {}
   */
  codeConfiguration?: CodeConfiguration;
  /**
   * @remarks
   * The container configuration details. This parameter is applicable when `artifactType` is set to `Container`.
   * 
   * @example
   * {}
   */
  containerConfiguration?: ContainerConfiguration;
  /**
   * @remarks
   * The amount of CPU allocated to the agent runtime, in vCPUs.
   * 
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * The creation time of the agent runtime, in ISO 8601 format.
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The name of the credential used to authenticate requests to the agent runtime.
   * 
   * @example
   * my-credential
   */
  credentialName?: string;
  /**
   * @remarks
   * The description of the agent runtime.
   * 
   * @example
   * AI agent runtime for customer service automation
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to disable on-demand elasticity. Default: `false`.
   * 
   * @example
   * false
   */
  disableOndemand?: boolean;
  /**
   * @remarks
   * Specifies whether to disable session affinity. Default: `false`.
   * 
   * @example
   * false
   */
  disableSessionAffinity?: boolean;
  /**
   * @remarks
   * The disk size.
   */
  diskSize?: number;
  /**
   * @remarks
   * The edition of the agent runtime.
   */
  edition?: string;
  /**
   * @remarks
   * Specifies whether to enable session isolation. If enabled, each session runs in an isolated environment.
   * 
   * @example
   * false
   */
  enableSessionIsolation?: boolean;
  /**
   * @remarks
   * The environment variables for the agent runtime.
   * 
   * @example
   * ENV_VAR1=value1,ENV_VAR2=value2
   */
  environmentVariables?: { [key: string]: string };
  /**
   * @remarks
   * The ARN of the execution role that grants the agent runtime permission to access cloud services.
   * 
   * @example
   * acs:ram::1760720386195983:role/AgentRunExecutionRole
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * The endpoint URL of an externally deployed agent service.
   * 
   * @example
   * https://external-agent.example.com/api
   */
  externalAgentEndpointUrl?: string;
  /**
   * @remarks
   * The name of the request header used for session affinity when `sessionAffinityType` is `HEADER_FIELD`.
   * 
   * @example
   * x-agentrun-session-id
   */
  headerFieldName?: string;
  /**
   * @remarks
   * The health check configuration.
   * 
   * @example
   * {}
   */
  healthCheckConfiguration?: HealthCheckConfiguration;
  /**
   * @remarks
   * The last update time of the agent runtime, in ISO 8601 format.
   * 
   * @example
   * 2025-01-10T11:45:00Z
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * The Log Service configuration.
   * 
   * @example
   * {}
   */
  logConfiguration?: LogConfiguration;
  /**
   * @remarks
   * The amount of memory allocated to the agent runtime, in MB.
   * 
   * @example
   * 2048
   */
  memory?: number;
  /**
   * @remarks
   * The NAS file system configuration.
   * 
   * @example
   * {}
   */
  nasConfig?: NASConfig;
  /**
   * @remarks
   * The network configuration of the agent runtime.
   * 
   * @example
   * {}
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * The OSS bucket mount configuration.
   * 
   * @example
   * {}
   */
  ossMountConfig?: OSSMountConfig;
  /**
   * @remarks
   * The port on which the agent runtime listens.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The communication protocol configuration for the agent runtime.
   * 
   * @example
   * {}
   */
  protocolConfiguration?: ProtocolConfiguration;
  /**
   * @remarks
   * The ID of the resource group to which the agent runtime belongs.
   * 
   * @deprecated
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The session affinity mode. Valid values: `NONE`, `HEADER_FIELD`, and `GENERATED_COOKIE`. `COOKIE` is a compatibility alias for `GENERATED_COOKIE`.
   * 
   * @example
   * GENERATED_COOKIE
   */
  sessionAffinityType?: string;
  /**
   * @remarks
   * The maximum number of concurrent sessions allowed per runtime instance.
   * 
   * @example
   * 100
   */
  sessionConcurrencyLimitPerInstance?: number;
  /**
   * @remarks
   * The idle timeout period for a session, in seconds. After this period of inactivity, the session expires and can no longer be used.
   * 
   * @example
   * 3600
   */
  sessionIdleTimeoutSeconds?: number;
  /**
   * @remarks
   * The current status of the agent runtime. Possible values: `READY`, `CREATING`, and `FAILED`.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The reason for the current status.
   * 
   * @example
   * Runtime is ready for use
   */
  statusReason?: string;
  /**
   * @remarks
   * The system tags for the agent runtime.
   * 
   * @example
   * system-tag-1,system-tag-2
   */
  systemTags?: string[];
  /**
   * @remarks
   * The ID of the workspace for the agent runtime.
   * 
   * @example
   * ws-1234567890abcdef
   */
  workspaceId?: string;
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
      credentialName: 'credentialName',
      description: 'description',
      disableOndemand: 'disableOndemand',
      disableSessionAffinity: 'disableSessionAffinity',
      diskSize: 'diskSize',
      edition: 'edition',
      enableSessionIsolation: 'enableSessionIsolation',
      environmentVariables: 'environmentVariables',
      executionRoleArn: 'executionRoleArn',
      externalAgentEndpointUrl: 'externalAgentEndpointUrl',
      headerFieldName: 'headerFieldName',
      healthCheckConfiguration: 'healthCheckConfiguration',
      lastUpdatedAt: 'lastUpdatedAt',
      logConfiguration: 'logConfiguration',
      memory: 'memory',
      nasConfig: 'nasConfig',
      networkConfiguration: 'networkConfiguration',
      ossMountConfig: 'ossMountConfig',
      port: 'port',
      protocolConfiguration: 'protocolConfiguration',
      resourceGroupId: 'resourceGroupId',
      sessionAffinityType: 'sessionAffinityType',
      sessionConcurrencyLimitPerInstance: 'sessionConcurrencyLimitPerInstance',
      sessionIdleTimeoutSeconds: 'sessionIdleTimeoutSeconds',
      status: 'status',
      statusReason: 'statusReason',
      systemTags: 'systemTags',
      workspaceId: 'workspaceId',
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
      credentialName: 'string',
      description: 'string',
      disableOndemand: 'boolean',
      disableSessionAffinity: 'boolean',
      diskSize: 'number',
      edition: 'string',
      enableSessionIsolation: 'boolean',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      executionRoleArn: 'string',
      externalAgentEndpointUrl: 'string',
      headerFieldName: 'string',
      healthCheckConfiguration: HealthCheckConfiguration,
      lastUpdatedAt: 'string',
      logConfiguration: LogConfiguration,
      memory: 'number',
      nasConfig: NASConfig,
      networkConfiguration: NetworkConfiguration,
      ossMountConfig: OSSMountConfig,
      port: 'number',
      protocolConfiguration: ProtocolConfiguration,
      resourceGroupId: 'string',
      sessionAffinityType: 'string',
      sessionConcurrencyLimitPerInstance: 'number',
      sessionIdleTimeoutSeconds: 'number',
      status: 'string',
      statusReason: 'string',
      systemTags: { 'type': 'array', 'itemType': 'string' },
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
    if(this.healthCheckConfiguration && typeof (this.healthCheckConfiguration as any).validate === 'function') {
      (this.healthCheckConfiguration as any).validate();
    }
    if(this.logConfiguration && typeof (this.logConfiguration as any).validate === 'function') {
      (this.logConfiguration as any).validate();
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
    if(this.protocolConfiguration && typeof (this.protocolConfiguration as any).validate === 'function') {
      (this.protocolConfiguration as any).validate();
    }
    if(Array.isArray(this.systemTags)) {
      $dara.Model.validateArray(this.systemTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

