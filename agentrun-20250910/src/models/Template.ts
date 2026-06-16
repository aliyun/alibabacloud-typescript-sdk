// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContainerConfiguration } from "./ContainerConfiguration";
import { CredentialConfiguration } from "./CredentialConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { NASConfig } from "./Nasconfig";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { OssConfiguration } from "./OssConfiguration";
import { ScalingStatus } from "./ScalingStatus";


export class TemplateMcpOptions extends $dara.Model {
  /**
   * @remarks
   * List of enabled tools
   */
  enabledTools?: string[];
  /**
   * @remarks
   * Transport type
   * 
   * @example
   * streamable-http
   */
  transport?: string;
  static names(): { [key: string]: string } {
    return {
      enabledTools: 'enabledTools',
      transport: 'transport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledTools: { 'type': 'array', 'itemType': 'string' },
      transport: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.enabledTools)) {
      $dara.Model.validateArray(this.enabledTools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateMcpState extends $dara.Model {
  /**
   * @remarks
   * Access Endpoint
   * 
   * @example
   * /mcp
   */
  accessEndpoint?: string;
  /**
   * @remarks
   * MCP Status
   * 
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * Status reason
   * 
   * @example
   * SDK Error
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      accessEndpoint: 'accessEndpoint',
      status: 'status',
      statusReason: 'statusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessEndpoint: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Template extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the data link can invoke APIs to create, stop, or delete sandbox instances
   * 
   * @example
   * true
   */
  allowAnonymousManage?: boolean;
  /**
   * @remarks
   * Custom image configuration
   */
  containerConfiguration?: ContainerConfiguration;
  /**
   * @remarks
   * Number of CPU cores
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2026-01-15T17:12:59.375168+08:00
   */
  createdAt?: string;
  /**
   * @remarks
   * Authentication configuration
   */
  credentialConfiguration?: CredentialConfiguration;
  /**
   * @remarks
   * Description
   * 
   * @example
   * template描述
   */
  description?: string;
  /**
   * @remarks
   * Disk size
   * 
   * @example
   * 10240
   */
  diskSize?: number;
  /**
   * @remarks
   * Sandbox Agent Toggle
   */
  enableAgent?: boolean;
  enablePreStop?: boolean;
  /**
   * @remarks
   * Environment variable configuration for the agent runtime
   */
  environmentVariables?: { [key: string]: string };
  /**
   * @remarks
   * Execution role
   * 
   * @example
   * acs:agentrun:cn-hangzhou:12345678:templates/efb6de2f-1814-42a2-b7f3-474a0e0b3a48
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * Update Time
   * 
   * @example
   * 2026-01-15T17:12:59.375168+08:00
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * Log configuration
   */
  logConfiguration?: LogConfiguration;
  /**
   * @remarks
   * MCP options
   */
  mcpOptions?: TemplateMcpOptions;
  /**
   * @remarks
   * MCP server status
   */
  mcpState?: TemplateMcpState;
  /**
   * @remarks
   * Memory specification
   * 
   * This parameter is required.
   * 
   * @example
   * 4096
   */
  memory?: number;
  /**
   * @remarks
   * NAS mount configuration item
   */
  nasConfig?: NASConfig;
  /**
   * @remarks
   * Network configuration
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * OSS configuration
   */
  ossConfiguration?: OssConfiguration[];
  preStopTimeoutInSeconds?: number;
  /**
   * @remarks
   * Resource Name
   * 
   * @example
   * agentrun-f2570dd4-c8a2-452c-8bd5-4ef74b0a69b5
   */
  resourceName?: string;
  /**
   * @remarks
   * Sandbox idle timeout
   * 
   * @example
   * 1800
   */
  sandboxIdleTimeoutInSeconds?: string;
  /**
   * @remarks
   * Sandbox lifecycle time to live (deprecated)
   * 
   * @example
   * 已弃用
   */
  sandboxTTLInSeconds?: string;
  /**
   * @remarks
   * Elasticity Status
   */
  scalingStatus?: ScalingStatus;
  /**
   * @remarks
   * Status
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * Status reason
   * 
   * @example
   * SDK Error
   */
  statusReason?: string;
  /**
   * @remarks
   * Template ARN
   * 
   * @example
   * acs:agentrun:cn-hangzhou:12345678:templates/efb6de2f-1814-42a2-b7f3-474a0e0b3a48
   */
  templateArn?: string;
  /**
   * @remarks
   * Template Configuration (flexible object structure that varies based on templateType)
   */
  templateConfiguration?: { [key: string]: any };
  /**
   * @remarks
   * Template ID
   * 
   * This parameter is required.
   * 
   * @example
   * 996ffd5e-003f-4700-9f24-9e2a1c19019b.schema
   */
  templateId?: string;
  /**
   * @remarks
   * Template Name
   * 
   * This parameter is required.
   * 
   * @example
   * browser-1767874121726
   */
  templateName?: string;
  /**
   * @remarks
   * templatetype
   * 
   * @example
   * Browser
   */
  templateType?: string;
  /**
   * @remarks
   * Template Version
   * 
   * @example
   * 预留
   */
  templateVersion?: string;
  /**
   * @remarks
   * Associated Space ID
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      allowAnonymousManage: 'allowAnonymousManage',
      containerConfiguration: 'containerConfiguration',
      cpu: 'cpu',
      createdAt: 'createdAt',
      credentialConfiguration: 'credentialConfiguration',
      description: 'description',
      diskSize: 'diskSize',
      enableAgent: 'enableAgent',
      enablePreStop: 'enablePreStop',
      environmentVariables: 'environmentVariables',
      executionRoleArn: 'executionRoleArn',
      lastUpdatedAt: 'lastUpdatedAt',
      logConfiguration: 'logConfiguration',
      mcpOptions: 'mcpOptions',
      mcpState: 'mcpState',
      memory: 'memory',
      nasConfig: 'nasConfig',
      networkConfiguration: 'networkConfiguration',
      ossConfiguration: 'ossConfiguration',
      preStopTimeoutInSeconds: 'preStopTimeoutInSeconds',
      resourceName: 'resourceName',
      sandboxIdleTimeoutInSeconds: 'sandboxIdleTimeoutInSeconds',
      sandboxTTLInSeconds: 'sandboxTTLInSeconds',
      scalingStatus: 'scalingStatus',
      status: 'status',
      statusReason: 'statusReason',
      templateArn: 'templateArn',
      templateConfiguration: 'templateConfiguration',
      templateId: 'templateId',
      templateName: 'templateName',
      templateType: 'templateType',
      templateVersion: 'templateVersion',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowAnonymousManage: 'boolean',
      containerConfiguration: ContainerConfiguration,
      cpu: 'number',
      createdAt: 'string',
      credentialConfiguration: CredentialConfiguration,
      description: 'string',
      diskSize: 'number',
      enableAgent: 'boolean',
      enablePreStop: 'boolean',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      executionRoleArn: 'string',
      lastUpdatedAt: 'string',
      logConfiguration: LogConfiguration,
      mcpOptions: TemplateMcpOptions,
      mcpState: TemplateMcpState,
      memory: 'number',
      nasConfig: NASConfig,
      networkConfiguration: NetworkConfiguration,
      ossConfiguration: { 'type': 'array', 'itemType': OssConfiguration },
      preStopTimeoutInSeconds: 'number',
      resourceName: 'string',
      sandboxIdleTimeoutInSeconds: 'string',
      sandboxTTLInSeconds: 'string',
      scalingStatus: ScalingStatus,
      status: 'string',
      statusReason: 'string',
      templateArn: 'string',
      templateConfiguration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
      templateVersion: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.containerConfiguration && typeof (this.containerConfiguration as any).validate === 'function') {
      (this.containerConfiguration as any).validate();
    }
    if(this.credentialConfiguration && typeof (this.credentialConfiguration as any).validate === 'function') {
      (this.credentialConfiguration as any).validate();
    }
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
    }
    if(this.logConfiguration && typeof (this.logConfiguration as any).validate === 'function') {
      (this.logConfiguration as any).validate();
    }
    if(this.mcpOptions && typeof (this.mcpOptions as any).validate === 'function') {
      (this.mcpOptions as any).validate();
    }
    if(this.mcpState && typeof (this.mcpState as any).validate === 'function') {
      (this.mcpState as any).validate();
    }
    if(this.nasConfig && typeof (this.nasConfig as any).validate === 'function') {
      (this.nasConfig as any).validate();
    }
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
    }
    if(Array.isArray(this.ossConfiguration)) {
      $dara.Model.validateArray(this.ossConfiguration);
    }
    if(this.scalingStatus && typeof (this.scalingStatus as any).validate === 'function') {
      (this.scalingStatus as any).validate();
    }
    if(this.templateConfiguration) {
      $dara.Model.validateMap(this.templateConfiguration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

