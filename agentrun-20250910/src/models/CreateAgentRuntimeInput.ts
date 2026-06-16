// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ArmsConfiguration } from "./ArmsConfiguration";
import { CodeConfiguration } from "./CodeConfiguration";
import { ContainerConfiguration } from "./ContainerConfiguration";
import { HealthCheckConfiguration } from "./HealthCheckConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { NASConfig } from "./Nasconfig";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { OSSMountConfig } from "./OssmountConfig";
import { ProtocolConfiguration } from "./ProtocolConfiguration";


export class CreateAgentRuntimeInput extends $dara.Model {
  /**
   * @remarks
   * A unique name for the agent runtime.
   * 
   * This parameter is required.
   * 
   * @example
   * my-agent-runtime
   */
  agentRuntimeName?: string;
  armsConfiguration?: ArmsConfiguration;
  /**
   * @remarks
   * The deployment type for the agent runtime. Valid values: Code and Container.
   * 
   * This parameter is required.
   * 
   * @example
   * Code
   */
  artifactType?: string;
  /**
   * @remarks
   * The code configuration, including the code source and entrypoint. This parameter is required when artifactType is Code.
   * 
   * @example
   * {}
   */
  codeConfiguration?: CodeConfiguration;
  /**
   * @remarks
   * The container configuration, including the image URL and startup command. This parameter is required when artifactType is Container.
   * 
   * @example
   * {}
   */
  containerConfiguration?: ContainerConfiguration;
  /**
   * @remarks
   * The amount of CPU allocated to the agent runtime, in cores.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * The ID of the credential used to authenticate with external services.
   * 
   * @example
   * cred-1234567890abcdef
   * 
   * @deprecated
   */
  credentialId?: string;
  /**
   * @remarks
   * The name of the credential used to access the agent runtime.
   * 
   * @example
   * my-credential
   */
  credentialName?: string;
  /**
   * @remarks
   * A description of the agent runtime.
   * 
   * @example
   * AI agent runtime for customer service automation
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to disable on-demand elasticity. By default, on-demand elasticity is enabled.
   * 
   * @example
   * false
   */
  disableOndemand?: boolean;
  /**
   * @remarks
   * Specifies whether to disable session affinity. By default, session affinity is enabled.
   * 
   * @example
   * false
   */
  disableSessionAffinity?: boolean;
  /**
   * @remarks
   * The disk size allocated to the agent runtime.
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
   * A key-value map of environment variables to set for the agent runtime.
   * 
   * @example
   * ENV_VAR1=value1,ENV_VAR2=value2
   */
  environmentVariables?: { [key: string]: string };
  /**
   * @remarks
   * The ARN of the execution role that the agent runtime uses to access cloud services.
   * 
   * @example
   * acs:ram::1760720386195983:role/AgentRunExecutionRole
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * The endpoint URL of an external agent service.
   * 
   * @example
   * https://external-agent.example.com/api
   */
  externalAgentEndpointUrl?: string;
  /**
   * @remarks
   * The name of the request header used for session affinity when sessionAffinityType is HEADER_FIELD.
   * 
   * @example
   * x-agentrun-session-id
   */
  headerFieldName?: string;
  /**
   * @remarks
   * The health check configuration for the agent runtime, used to monitor the health of its instances.
   * 
   * @example
   * {}
   */
  healthCheckConfiguration?: HealthCheckConfiguration;
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
   * This parameter is required.
   * 
   * @example
   * 2048
   */
  memory?: number;
  /**
   * @remarks
   * The configuration for mounting a NAS file system to the agent runtime.
   * 
   * @example
   * {}
   */
  nasConfig?: NASConfig;
  /**
   * @remarks
   * The network configuration for the agent runtime, including VPC and security group settings.
   * 
   * This parameter is required.
   * 
   * @example
   * {}
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * The configuration for mounting an OSS bucket to the agent runtime.
   * 
   * @example
   * {}
   */
  ossMountConfig?: OSSMountConfig;
  /**
   * @remarks
   * The port on which the agent runtime listens for external requests.
   * 
   * This parameter is required.
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
   * The ID of the resource group for the agent runtime.
   * 
   * @deprecated
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The session affinity mode. NONE disables session affinity. HEADER_FIELD enables session affinity based on a request header. GENERATED_COOKIE uses a service-generated cookie to maintain session affinity. COOKIE is a compatibility alias that the server normalizes to GENERATED_COOKIE.
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
   * The time in seconds that a session can remain idle before it expires and is terminated.
   * 
   * @example
   * 3600
   */
  sessionIdleTimeoutSeconds?: number;
  /**
   * @remarks
   * The system tags for the agent runtime, used for system-level resource classification and management.
   * 
   * @example
   * system-tag-1,system-tag-2
   */
  systemTags?: string[];
  /**
   * @remarks
   * The ID of the workspace for the agent runtime, used for resource isolation and access control.
   * 
   * @example
   * ws-1234567890abcdef
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeName: 'agentRuntimeName',
      armsConfiguration: 'armsConfiguration',
      artifactType: 'artifactType',
      codeConfiguration: 'codeConfiguration',
      containerConfiguration: 'containerConfiguration',
      cpu: 'cpu',
      credentialId: 'credentialId',
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
      systemTags: 'systemTags',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeName: 'string',
      armsConfiguration: ArmsConfiguration,
      artifactType: 'string',
      codeConfiguration: CodeConfiguration,
      containerConfiguration: ContainerConfiguration,
      cpu: 'number',
      credentialId: 'string',
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
      systemTags: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.armsConfiguration && typeof (this.armsConfiguration as any).validate === 'function') {
      (this.armsConfiguration as any).validate();
    }
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

