// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeploySGLangModelInputConcurrencyConfig } from "./DeploySglangModelInputConcurrencyConfig";
import { DeploySGLangModelInputGpuConfig } from "./DeploySglangModelInputGpuConfig";
import { DeploySGLangModelInputHttpTrigger } from "./DeploySglangModelInputHttpTrigger";
import { DeploySGLangModelInputLogConfig } from "./DeploySglangModelInputLogConfig";
import { DeploySGLangModelInputModelConfig } from "./DeploySglangModelInputModelConfig";
import { DeploySGLangModelInputNasConfig } from "./DeploySglangModelInputNasConfig";
import { DeploySGLangModelInputProvisionConfig } from "./DeploySglangModelInputProvisionConfig";
import { DeploySGLangModelInputVpcConfig } from "./DeploySglangModelInputVpcConfig";


export class DeploySGLangModelInput extends $dara.Model {
  accountID?: string;
  concurrencyConfig?: DeploySGLangModelInputConcurrencyConfig;
  cpu?: number;
  description?: string;
  diskSize?: number;
  envName?: string;
  environmentVariables?: { [key: string]: any };
  gpuConfig?: DeploySGLangModelInputGpuConfig;
  httpTrigger?: DeploySGLangModelInputHttpTrigger;
  imageName?: string;
  instanceConcurrency?: number;
  logConfig?: DeploySGLangModelInputLogConfig;
  memorySize?: number;
  modelConfig?: DeploySGLangModelInputModelConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  nasConfig?: DeploySGLangModelInputNasConfig;
  originalName?: string;
  projectName?: string;
  provisionConfig?: DeploySGLangModelInputProvisionConfig;
  region?: string;
  reportStatusURL?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  role?: string;
  timeout?: number;
  traceId?: string;
  vpcConfig?: DeploySGLangModelInputVpcConfig;
  static names(): { [key: string]: string } {
    return {
      accountID: 'accountID',
      concurrencyConfig: 'concurrencyConfig',
      cpu: 'cpu',
      description: 'description',
      diskSize: 'diskSize',
      envName: 'envName',
      environmentVariables: 'environmentVariables',
      gpuConfig: 'gpuConfig',
      httpTrigger: 'httpTrigger',
      imageName: 'imageName',
      instanceConcurrency: 'instanceConcurrency',
      logConfig: 'logConfig',
      memorySize: 'memorySize',
      modelConfig: 'modelConfig',
      name: 'name',
      nasConfig: 'nasConfig',
      originalName: 'originalName',
      projectName: 'projectName',
      provisionConfig: 'provisionConfig',
      region: 'region',
      reportStatusURL: 'reportStatusURL',
      role: 'role',
      timeout: 'timeout',
      traceId: 'traceId',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      concurrencyConfig: DeploySGLangModelInputConcurrencyConfig,
      cpu: 'number',
      description: 'string',
      diskSize: 'number',
      envName: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gpuConfig: DeploySGLangModelInputGpuConfig,
      httpTrigger: DeploySGLangModelInputHttpTrigger,
      imageName: 'string',
      instanceConcurrency: 'number',
      logConfig: DeploySGLangModelInputLogConfig,
      memorySize: 'number',
      modelConfig: DeploySGLangModelInputModelConfig,
      name: 'string',
      nasConfig: DeploySGLangModelInputNasConfig,
      originalName: 'string',
      projectName: 'string',
      provisionConfig: DeploySGLangModelInputProvisionConfig,
      region: 'string',
      reportStatusURL: 'string',
      role: 'string',
      timeout: 'number',
      traceId: 'string',
      vpcConfig: DeploySGLangModelInputVpcConfig,
    };
  }

  validate() {
    if(this.concurrencyConfig && typeof (this.concurrencyConfig as any).validate === 'function') {
      (this.concurrencyConfig as any).validate();
    }
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
    }
    if(this.gpuConfig && typeof (this.gpuConfig as any).validate === 'function') {
      (this.gpuConfig as any).validate();
    }
    if(this.httpTrigger && typeof (this.httpTrigger as any).validate === 'function') {
      (this.httpTrigger as any).validate();
    }
    if(this.logConfig && typeof (this.logConfig as any).validate === 'function') {
      (this.logConfig as any).validate();
    }
    if(this.modelConfig && typeof (this.modelConfig as any).validate === 'function') {
      (this.modelConfig as any).validate();
    }
    if(this.nasConfig && typeof (this.nasConfig as any).validate === 'function') {
      (this.nasConfig as any).validate();
    }
    if(this.provisionConfig && typeof (this.provisionConfig as any).validate === 'function') {
      (this.provisionConfig as any).validate();
    }
    if(this.vpcConfig && typeof (this.vpcConfig as any).validate === 'function') {
      (this.vpcConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

