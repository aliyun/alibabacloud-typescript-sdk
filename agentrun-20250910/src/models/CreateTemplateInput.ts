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


export class CreateTemplateInput extends $dara.Model {
  /**
   * @remarks
   * Whether to allow data channel to call create/stop/delete sandbox APIs
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
   * ARMS configuration
   */
  armsConfiguration?: ArmsConfiguration;
  /**
   * @remarks
   * Container configuration, only images based on Browser/Code Interpreter base images are allowed
   */
  containerConfiguration?: ContainerConfiguration;
  /**
   * @remarks
   * CPU resource configuration (unit: cores)
   * 
   * This parameter is required.
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
   * 模板描述
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
   * Sandbox Agent switch
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
   * acs:ram::123456789:role/aliyunfcdefaultrole
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
   * This parameter is required.
   * 
   * @example
   * 2048
   */
  memory?: number;
  /**
   * @remarks
   * NAS mount configuration
   */
  nasConfig?: NASConfig;
  /**
   * @remarks
   * Network configuration
   * 
   * This parameter is required.
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
   * Sandbox idle timeout (in seconds)
   * 
   * @example
   * 1800
   */
  sandboxIdleTimeoutInSeconds?: number;
  /**
   * @remarks
   * Sandbox time-to-live (in seconds)
   * 
   * @example
   * 26000
   */
  sandboxTTLInSeconds?: number;
  /**
   * @remarks
   * Scaling configuration
   */
  scalingConfig?: ScalingConfig;
  /**
   * @remarks
   * Template configuration (flexible object structure that varies depending on templateType)
   */
  templateConfiguration?: { [key: string]: any };
  /**
   * @remarks
   * Template name (must be unique within the account)
   * 
   * This parameter is required.
   * 
   * @example
   * browser-1766687911567
   */
  templateName?: string;
  /**
   * @remarks
   * Template type
   * 
   * This parameter is required.
   * 
   * @example
   * Browser
   */
  templateType?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      allowAnonymousManage: 'allowAnonymousManage',
      armsConfiguration: 'armsConfiguration',
      containerConfiguration: 'containerConfiguration',
      cpu: 'cpu',
      credentialConfiguration: 'credentialConfiguration',
      description: 'description',
      diskSize: 'diskSize',
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
      templateName: 'templateName',
      templateType: 'templateType',
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
      diskSize: 'number',
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
      templateName: 'string',
      templateType: 'string',
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

