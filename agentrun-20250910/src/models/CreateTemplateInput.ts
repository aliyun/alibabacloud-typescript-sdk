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
   * Controls whether data plane calls can create, stop, or delete the sandbox.
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
   * The Application Real-Time Monitoring Service (ARMS) configuration.
   */
  armsConfiguration?: ArmsConfiguration;
  /**
   * @remarks
   * The container configuration. You can only use images based on the Browser or Code Interpreter base images.
   */
  containerConfiguration?: ContainerConfiguration;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The credential configuration.
   */
  credentialConfiguration?: CredentialConfiguration;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * 模板描述
   */
  description?: string;
  /**
   * @remarks
   * The disk size in MB.
   * 
   * @example
   * 10240
   */
  diskSize?: number;
  /**
   * @remarks
   * Controls whether to enable the Sandbox Agent.
   */
  enableAgent?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the pre-stop hook.
   */
  enablePreStop?: boolean;
  /**
   * @remarks
   * The environment variables for the sandbox.
   */
  environmentVariables?: { [key: string]: string };
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the execution role.
   * 
   * @example
   * acs:ram::123456789:role/aliyunfcdefaultrole
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * The log configuration.
   */
  logConfiguration?: LogConfiguration;
  /**
   * @remarks
   * The memory size in MB.
   * 
   * This parameter is required.
   * 
   * @example
   * 2048
   */
  memory?: number;
  /**
   * @remarks
   * The Network Attached Storage (NAS) mount configuration.
   */
  nasConfig?: NASConfig;
  /**
   * @remarks
   * The network configuration.
   * 
   * This parameter is required.
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * A list of Object Storage Service (OSS) configurations.
   */
  ossConfiguration?: OssConfiguration[];
  /**
   * @remarks
   * The timeout for the pre-stop hook, in seconds. This parameter applies only when `enablePreStop` is set to `true`.
   */
  preStopTimeoutInSeconds?: number;
  /**
   * @remarks
   * The duration in seconds that a sandbox can be idle before it is automatically stopped.
   * 
   * @example
   * 1800
   */
  sandboxIdleTimeoutInSeconds?: number;
  /**
   * @remarks
   * The maximum time-to-live (TTL) in seconds for the sandbox. The sandbox is terminated after this duration, regardless of activity.
   * 
   * @example
   * 26000
   */
  sandboxTTLInSeconds?: number;
  /**
   * @remarks
   * The scaling configuration.
   */
  scalingConfig?: ScalingConfig;
  /**
   * @remarks
   * The template configuration. This is a flexible object whose structure varies depending on the `templateType`.
   */
  templateConfiguration?: { [key: string]: any };
  /**
   * @remarks
   * A unique name for the template within your account.
   * 
   * This parameter is required.
   * 
   * @example
   * browser-1766687911567
   */
  templateName?: string;
  /**
   * @remarks
   * The template type.
   * 
   * This parameter is required.
   * 
   * @example
   * Browser
   */
  templateType?: string;
  /**
   * @remarks
   * The ID of the workspace.
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

