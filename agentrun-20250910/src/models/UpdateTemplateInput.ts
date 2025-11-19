// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ArmsConfiguration } from "./ArmsConfiguration";
import { ContainerConfiguration } from "./ContainerConfiguration";
import { CredentialConfiguration } from "./CredentialConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { OssConfiguration } from "./OssConfiguration";


export class UpdateTemplateInput extends $dara.Model {
  armsConfiguration?: ArmsConfiguration;
  /**
   * @remarks
   * 容器配置（内置的不可改）
   */
  containerConfiguration?: ContainerConfiguration;
  /**
   * @remarks
   * CPU资源配置（单位：核心）
   */
  cpu?: number;
  credentialConfiguration?: CredentialConfiguration;
  description?: string;
  environmentVariables?: { [key: string]: string };
  executionRoleArn?: string;
  logConfiguration?: LogConfiguration;
  /**
   * @remarks
   * 内存资源配置（单位：MB）
   */
  memory?: number;
  networkConfiguration?: NetworkConfiguration;
  ossConfiguration?: OssConfiguration[];
  /**
   * @remarks
   * 沙箱空闲超时时间（秒）
   */
  sandboxIdleTimeoutInSeconds?: number;
  /**
   * @remarks
   * 沙箱存活时间（秒）
   */
  sandboxTTLInSeconds?: number;
  /**
   * @remarks
   * 模板配置（灵活的对象结构，根据 templateType 不同而不同）
   */
  templateConfiguration?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      armsConfiguration: 'armsConfiguration',
      containerConfiguration: 'containerConfiguration',
      cpu: 'cpu',
      credentialConfiguration: 'credentialConfiguration',
      description: 'description',
      environmentVariables: 'environmentVariables',
      executionRoleArn: 'executionRoleArn',
      logConfiguration: 'logConfiguration',
      memory: 'memory',
      networkConfiguration: 'networkConfiguration',
      ossConfiguration: 'ossConfiguration',
      sandboxIdleTimeoutInSeconds: 'sandboxIdleTimeoutInSeconds',
      sandboxTTLInSeconds: 'sandboxTTLInSeconds',
      templateConfiguration: 'templateConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armsConfiguration: ArmsConfiguration,
      containerConfiguration: ContainerConfiguration,
      cpu: 'number',
      credentialConfiguration: CredentialConfiguration,
      description: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      executionRoleArn: 'string',
      logConfiguration: LogConfiguration,
      memory: 'number',
      networkConfiguration: NetworkConfiguration,
      ossConfiguration: { 'type': 'array', 'itemType': OssConfiguration },
      sandboxIdleTimeoutInSeconds: 'number',
      sandboxTTLInSeconds: 'number',
      templateConfiguration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
    }
    if(Array.isArray(this.ossConfiguration)) {
      $dara.Model.validateArray(this.ossConfiguration);
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

