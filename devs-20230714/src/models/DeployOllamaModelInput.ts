// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployOllamaModelInputConcurrencyConfig } from "./DeployOllamaModelInputConcurrencyConfig";
import { DeployOllamaModelInputGpuConfig } from "./DeployOllamaModelInputGpuConfig";
import { DeployOllamaModelInputHttpTrigger } from "./DeployOllamaModelInputHttpTrigger";
import { DeployOllamaModelInputLogConfig } from "./DeployOllamaModelInputLogConfig";
import { DeployOllamaModelInputModelConfig } from "./DeployOllamaModelInputModelConfig";
import { DeployOllamaModelInputNasConfig } from "./DeployOllamaModelInputNasConfig";
import { DeployOllamaModelInputProvisionConfig } from "./DeployOllamaModelInputProvisionConfig";
import { DeployOllamaModelInputVpcConfig } from "./DeployOllamaModelInputVpcConfig";


export class DeployOllamaModelInput extends $dara.Model {
  accountID?: string;
  concurrencyConfig?: DeployOllamaModelInputConcurrencyConfig;
  cpu?: number;
  description?: string;
  diskSize?: number;
  envName?: string;
  environmentVariables?: { [key: string]: any };
  gpuConfig?: DeployOllamaModelInputGpuConfig;
  httpTrigger?: DeployOllamaModelInputHttpTrigger;
  imageName?: string;
  instanceConcurrency?: number;
  logConfig?: DeployOllamaModelInputLogConfig;
  memorySize?: number;
  modelConfig?: DeployOllamaModelInputModelConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  nasConfig?: DeployOllamaModelInputNasConfig;
  originalName?: string;
  projectName?: string;
  provisionConfig?: DeployOllamaModelInputProvisionConfig;
  region?: string;
  reportStatusURL?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  role?: string;
  timeout?: number;
  traceId?: string;
  vpcConfig?: DeployOllamaModelInputVpcConfig;
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
      concurrencyConfig: DeployOllamaModelInputConcurrencyConfig,
      cpu: 'number',
      description: 'string',
      diskSize: 'number',
      envName: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gpuConfig: DeployOllamaModelInputGpuConfig,
      httpTrigger: DeployOllamaModelInputHttpTrigger,
      imageName: 'string',
      instanceConcurrency: 'number',
      logConfig: DeployOllamaModelInputLogConfig,
      memorySize: 'number',
      modelConfig: DeployOllamaModelInputModelConfig,
      name: 'string',
      nasConfig: DeployOllamaModelInputNasConfig,
      originalName: 'string',
      projectName: 'string',
      provisionConfig: DeployOllamaModelInputProvisionConfig,
      region: 'string',
      reportStatusURL: 'string',
      role: 'string',
      timeout: 'number',
      traceId: 'string',
      vpcConfig: DeployOllamaModelInputVpcConfig,
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

