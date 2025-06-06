// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployTensorRtModelInputConcurrencyConfig } from "./DeployTensorRtModelInputConcurrencyConfig";
import { DeployTensorRtModelInputGpuConfig } from "./DeployTensorRtModelInputGpuConfig";
import { DeployTensorRtModelInputHttpTrigger } from "./DeployTensorRtModelInputHttpTrigger";
import { DeployTensorRtModelInputLogConfig } from "./DeployTensorRtModelInputLogConfig";
import { DeployTensorRtModelInputModelConfig } from "./DeployTensorRtModelInputModelConfig";
import { DeployTensorRtModelInputNasConfig } from "./DeployTensorRtModelInputNasConfig";
import { DeployTensorRtModelInputProvisionConfig } from "./DeployTensorRtModelInputProvisionConfig";
import { DeployTensorRtModelInputVpcConfig } from "./DeployTensorRtModelInputVpcConfig";


export class DeployTensorRtModelInput extends $dara.Model {
  accountID?: string;
  concurrencyConfig?: DeployTensorRtModelInputConcurrencyConfig;
  cpu?: number;
  description?: string;
  diskSize?: number;
  envName?: string;
  environmentVariables?: { [key: string]: any };
  gpuConfig?: DeployTensorRtModelInputGpuConfig;
  httpTrigger?: DeployTensorRtModelInputHttpTrigger;
  imageName?: string;
  instanceConcurrency?: number;
  logConfig?: DeployTensorRtModelInputLogConfig;
  memorySize?: number;
  modelConfig?: DeployTensorRtModelInputModelConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  nasConfig?: DeployTensorRtModelInputNasConfig;
  originalName?: string;
  projectName?: string;
  provisionConfig?: DeployTensorRtModelInputProvisionConfig;
  region?: string;
  reportStatusURL?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  role?: string;
  timeout?: number;
  traceId?: string;
  vpcConfig?: DeployTensorRtModelInputVpcConfig;
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
      concurrencyConfig: DeployTensorRtModelInputConcurrencyConfig,
      cpu: 'number',
      description: 'string',
      diskSize: 'number',
      envName: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gpuConfig: DeployTensorRtModelInputGpuConfig,
      httpTrigger: DeployTensorRtModelInputHttpTrigger,
      imageName: 'string',
      instanceConcurrency: 'number',
      logConfig: DeployTensorRtModelInputLogConfig,
      memorySize: 'number',
      modelConfig: DeployTensorRtModelInputModelConfig,
      name: 'string',
      nasConfig: DeployTensorRtModelInputNasConfig,
      originalName: 'string',
      projectName: 'string',
      provisionConfig: DeployTensorRtModelInputProvisionConfig,
      region: 'string',
      reportStatusURL: 'string',
      role: 'string',
      timeout: 'number',
      traceId: 'string',
      vpcConfig: DeployTensorRtModelInputVpcConfig,
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

