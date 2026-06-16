// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ArmsConfiguration } from "./ArmsConfiguration";
import { ContainerConfiguration } from "./ContainerConfiguration";
import { CredentialConfiguration } from "./CredentialConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { NASConfig } from "./Nasconfig";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { OssConfiguration } from "./OssConfiguration";
import { ScalingConfig } from "./ScalingConfig";


export class UpdateTemplateInput extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the data link is allowed to invoke APIs to create, stop, or delete sandboxes
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  allowAnonymousManage?: boolean;
  /**
   * @remarks
   * Configuration information for Application Real-Time Monitoring Service (ARMS)
   */
  armsConfiguration?: ArmsConfiguration;
  /**
   * @remarks
   * Container configuration (built-in and immutable)
   */
  containerConfiguration?: ContainerConfiguration;
  /**
   * @remarks
   * CPU resource configuration (unit: core)
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * Credential configuration
   */
  credentialConfiguration?: CredentialConfiguration;
  /**
   * @remarks
   * Template description
   * 
   * @example
   * demo description
   */
  description?: string;
  /**
   * @remarks
   * Sandbox Agent toggle
   * 
   * @example
   * true
   */
  enableAgent?: boolean;
  enablePreStop?: boolean;
  /**
   * @remarks
   * Environment variables
   */
  environmentVariables?: { [key: string]: string };
  /**
   * @remarks
   * Execution role ARN
   * 
   * @example
   * arn:acs:agentrun:cn-hangzhou:123456789:xxx/test
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * Log configuration
   */
  logConfiguration?: LogConfiguration;
  /**
   * @remarks
   * Memory resource configuration (unit: MB)
   * 
   * @example
   * 4
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
   * OSS mount configuration
   */
  ossConfiguration?: OssConfiguration[];
  preStopTimeoutInSeconds?: number;
  /**
   * @remarks
   * Sandbox idle timeout (seconds)
   * 
   * @example
   * 21600
   */
  sandboxIdleTimeoutInSeconds?: number;
  /**
   * @remarks
   * Sandbox time to live (seconds)
   * 
   * @example
   * 86400
   */
  sandboxTTLInSeconds?: number;
  /**
   * @remarks
   * Elasticity configuration
   */
  scalingConfig?: ScalingConfig;
  /**
   * @remarks
   * Template configuration (a flexible object structure that varies based on templateType)
   */
  templateConfiguration?: { [key: string]: any };
  /**
   * @remarks
   * Associated Space ID
   * 
   * @example
   * ws-1234567890abcdef
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      allowAnonymousManage: 'allowAnonymousManage',
      armsConfiguration: 'armsConfiguration',
      containerConfiguration: 'containerConfiguration',
      cpu: 'cpu',
      credentialConfiguration: 'credentialConfiguration',
      description: 'description',
      enableAgent: 'enableAgent',
      enablePreStop: 'enablePreStop',
      environmentVariables: 'environmentVariables',
      executionRoleArn: 'executionRoleArn',
      logConfiguration: 'logConfiguration',
      memory: 'memory',
      nasConfig: 'nasConfig',
      networkConfiguration: 'networkConfiguration',
      ossConfiguration: 'ossConfiguration',
      preStopTimeoutInSeconds: 'preStopTimeoutInSeconds',
      sandboxIdleTimeoutInSeconds: 'sandboxIdleTimeoutInSeconds',
      sandboxTTLInSeconds: 'sandboxTTLInSeconds',
      scalingConfig: 'scalingConfig',
      templateConfiguration: 'templateConfiguration',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowAnonymousManage: 'boolean',
      armsConfiguration: ArmsConfiguration,
      containerConfiguration: ContainerConfiguration,
      cpu: 'number',
      credentialConfiguration: CredentialConfiguration,
      description: 'string',
      enableAgent: 'boolean',
      enablePreStop: 'boolean',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      executionRoleArn: 'string',
      logConfiguration: LogConfiguration,
      memory: 'number',
      nasConfig: NASConfig,
      networkConfiguration: NetworkConfiguration,
      ossConfiguration: { 'type': 'array', 'itemType': OssConfiguration },
      preStopTimeoutInSeconds: 'number',
      sandboxIdleTimeoutInSeconds: 'number',
      sandboxTTLInSeconds: 'number',
      scalingConfig: ScalingConfig,
      templateConfiguration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.armsConfiguration && typeof (this.armsConfiguration as any).validate === 'function') {
      (this.armsConfiguration as any).validate();
    }
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
    if(this.nasConfig && typeof (this.nasConfig as any).validate === 'function') {
      (this.nasConfig as any).validate();
    }
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
    }
    if(Array.isArray(this.ossConfiguration)) {
      $dara.Model.validateArray(this.ossConfiguration);
    }
    if(this.scalingConfig && typeof (this.scalingConfig as any).validate === 'function') {
      (this.scalingConfig as any).validate();
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

