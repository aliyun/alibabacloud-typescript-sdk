// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployModelScopeModelInputConcurrencyConfig } from "./DeployModelScopeModelInputConcurrencyConfig";
import { DeployModelScopeModelInputGpuConfig } from "./DeployModelScopeModelInputGpuConfig";
import { DeployModelScopeModelInputHttpTrigger } from "./DeployModelScopeModelInputHttpTrigger";
import { DeployModelScopeModelInputLogConfig } from "./DeployModelScopeModelInputLogConfig";
import { DeployModelScopeModelInputModelConfig } from "./DeployModelScopeModelInputModelConfig";
import { DeployModelScopeModelInputNasConfig } from "./DeployModelScopeModelInputNasConfig";
import { DeployModelScopeModelInputProvisionConfig } from "./DeployModelScopeModelInputProvisionConfig";
import { DeployModelScopeModelInputVpcConfig } from "./DeployModelScopeModelInputVpcConfig";


export class DeployModelScopeModelInput extends $dara.Model {
  accountID?: string;
  concurrencyConfig?: DeployModelScopeModelInputConcurrencyConfig;
  cpu?: number;
  description?: string;
  diskSize?: number;
  envName?: string;
  environmentVariables?: { [key: string]: any };
  gpuConfig?: DeployModelScopeModelInputGpuConfig;
  httpTrigger?: DeployModelScopeModelInputHttpTrigger;
  imageName?: string;
  instanceConcurrency?: number;
  logConfig?: DeployModelScopeModelInputLogConfig;
  memorySize?: number;
  modelConfig?: DeployModelScopeModelInputModelConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  nasConfig?: DeployModelScopeModelInputNasConfig;
  originalName?: string;
  projectName?: string;
  provisionConfig?: DeployModelScopeModelInputProvisionConfig;
  region?: string;
  reportStatusURL?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  role?: string;
  timeout?: number;
  traceId?: string;
  vpcConfig?: DeployModelScopeModelInputVpcConfig;
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
      concurrencyConfig: DeployModelScopeModelInputConcurrencyConfig,
      cpu: 'number',
      description: 'string',
      diskSize: 'number',
      envName: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gpuConfig: DeployModelScopeModelInputGpuConfig,
      httpTrigger: DeployModelScopeModelInputHttpTrigger,
      imageName: 'string',
      instanceConcurrency: 'number',
      logConfig: DeployModelScopeModelInputLogConfig,
      memorySize: 'number',
      modelConfig: DeployModelScopeModelInputModelConfig,
      name: 'string',
      nasConfig: DeployModelScopeModelInputNasConfig,
      originalName: 'string',
      projectName: 'string',
      provisionConfig: DeployModelScopeModelInputProvisionConfig,
      region: 'string',
      reportStatusURL: 'string',
      role: 'string',
      timeout: 'number',
      traceId: 'string',
      vpcConfig: DeployModelScopeModelInputVpcConfig,
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

