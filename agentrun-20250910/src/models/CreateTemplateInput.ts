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
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  allowAnonymousManage?: boolean;
  armsConfiguration?: ArmsConfiguration;
  /**
   * @remarks
   * 容器配置，只允许基于 Browser/Code Interpreter 基础镜像的 image
   */
  containerConfiguration?: ContainerConfiguration;
  /**
   * @remarks
   * CPU资源配置（单位：核心）
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  cpu?: number;
  credentialConfiguration?: CredentialConfiguration;
  description?: string;
  /**
   * @example
   * 10240
   */
  diskSize?: number;
  enableAgent?: boolean;
  environmentVariables?: { [key: string]: string };
  /**
   * @example
   * acs:ram::123456789:role/aliyunfcdefaultrole
   */
  executionRoleArn?: string;
  logConfiguration?: LogConfiguration;
  /**
   * @remarks
   * 内存资源配置（单位：MB）
   * 
   * This parameter is required.
   * 
   * @example
   * 2048
   */
  memory?: number;
  nasConfig?: NASConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  networkConfiguration?: NetworkConfiguration;
  ossConfiguration?: OssConfiguration[];
  /**
   * @remarks
   * 沙箱空闲超时时间（秒）
   * 
   * @example
   * 1800
   */
  sandboxIdleTimeoutInSeconds?: number;
  /**
   * @remarks
   * 沙箱存活时间（秒）
   * 
   * @example
   * 26000
   * 
   * @deprecated
   */
  sandboxTTLInSeconds?: number;
  scalingConfig?: ScalingConfig;
  /**
   * @remarks
   * 模板配置（灵活的对象结构，根据 templateType 不同而不同）
   */
  templateConfiguration?: { [key: string]: any };
  /**
   * @remarks
   * 模板名称（要求账号唯一的）
   * 
   * This parameter is required.
   * 
   * @example
   * browser-1766687911567
   */
  templateName?: string;
  /**
   * @remarks
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
      environmentVariables: 'environmentVariables',
      executionRoleArn: 'executionRoleArn',
      logConfiguration: 'logConfiguration',
      memory: 'memory',
      nasConfig: 'nasConfig',
      networkConfiguration: 'networkConfiguration',
      ossConfiguration: 'ossConfiguration',
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
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      executionRoleArn: 'string',
      logConfiguration: LogConfiguration,
      memory: 'number',
      nasConfig: NASConfig,
      networkConfiguration: NetworkConfiguration,
      ossConfiguration: { 'type': 'array', 'itemType': OssConfiguration },
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

