// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployCustomContainerInputAsyncInvokeConfig } from "./DeployCustomContainerInputAsyncInvokeConfig";
import { DeployCustomContainerInputConcurrencyConfig } from "./DeployCustomContainerInputConcurrencyConfig";
import { DeployCustomContainerInputCustomContainerConfig } from "./DeployCustomContainerInputCustomContainerConfig";
import { DeployCustomContainerInputGpuConfig } from "./DeployCustomContainerInputGpuConfig";
import { DeployCustomContainerInputHttpTrigger } from "./DeployCustomContainerInputHttpTrigger";
import { DeployCustomContainerInputLogConfig } from "./DeployCustomContainerInputLogConfig";
import { DeployCustomContainerInputModelConfig } from "./DeployCustomContainerInputModelConfig";
import { DeployCustomContainerInputNasConfig } from "./DeployCustomContainerInputNasConfig";
import { DeployCustomContainerInputOssMountConfig } from "./DeployCustomContainerInputOssMountConfig";
import { DeployCustomContainerInputProvisionConfig } from "./DeployCustomContainerInputProvisionConfig";
import { DeployCustomContainerInputVpcConfig } from "./DeployCustomContainerInputVpcConfig";


export class DeployCustomContainerInput extends $dara.Model {
  accountID?: string;
  asyncInvokeConfig?: DeployCustomContainerInputAsyncInvokeConfig;
  concurrencyConfig?: DeployCustomContainerInputConcurrencyConfig;
  cpu?: number;
  customContainerConfig?: DeployCustomContainerInputCustomContainerConfig;
  description?: string;
  diskSize?: number;
  envName?: string;
  environmentVariables?: { [key: string]: any };
  gpuConfig?: DeployCustomContainerInputGpuConfig;
  httpTrigger?: DeployCustomContainerInputHttpTrigger;
  logConfig?: DeployCustomContainerInputLogConfig;
  memorySize?: number;
  modelConfig?: DeployCustomContainerInputModelConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  nasConfig?: DeployCustomContainerInputNasConfig;
  originalName?: string;
  ossMountConfig?: DeployCustomContainerInputOssMountConfig;
  projectName?: string;
  provisionConfig?: DeployCustomContainerInputProvisionConfig;
  region?: string;
  reportStatusURL?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  role?: string;
  timeout?: number;
  traceId?: string;
  vpcConfig?: DeployCustomContainerInputVpcConfig;
  static names(): { [key: string]: string } {
    return {
      accountID: 'accountID',
      asyncInvokeConfig: 'asyncInvokeConfig',
      concurrencyConfig: 'concurrencyConfig',
      cpu: 'cpu',
      customContainerConfig: 'customContainerConfig',
      description: 'description',
      diskSize: 'diskSize',
      envName: 'envName',
      environmentVariables: 'environmentVariables',
      gpuConfig: 'gpuConfig',
      httpTrigger: 'httpTrigger',
      logConfig: 'logConfig',
      memorySize: 'memorySize',
      modelConfig: 'modelConfig',
      name: 'name',
      nasConfig: 'nasConfig',
      originalName: 'originalName',
      ossMountConfig: 'ossMountConfig',
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
      asyncInvokeConfig: DeployCustomContainerInputAsyncInvokeConfig,
      concurrencyConfig: DeployCustomContainerInputConcurrencyConfig,
      cpu: 'number',
      customContainerConfig: DeployCustomContainerInputCustomContainerConfig,
      description: 'string',
      diskSize: 'number',
      envName: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gpuConfig: DeployCustomContainerInputGpuConfig,
      httpTrigger: DeployCustomContainerInputHttpTrigger,
      logConfig: DeployCustomContainerInputLogConfig,
      memorySize: 'number',
      modelConfig: DeployCustomContainerInputModelConfig,
      name: 'string',
      nasConfig: DeployCustomContainerInputNasConfig,
      originalName: 'string',
      ossMountConfig: DeployCustomContainerInputOssMountConfig,
      projectName: 'string',
      provisionConfig: DeployCustomContainerInputProvisionConfig,
      region: 'string',
      reportStatusURL: 'string',
      role: 'string',
      timeout: 'number',
      traceId: 'string',
      vpcConfig: DeployCustomContainerInputVpcConfig,
    };
  }

  validate() {
    if(this.asyncInvokeConfig && typeof (this.asyncInvokeConfig as any).validate === 'function') {
      (this.asyncInvokeConfig as any).validate();
    }
    if(this.concurrencyConfig && typeof (this.concurrencyConfig as any).validate === 'function') {
      (this.concurrencyConfig as any).validate();
    }
    if(this.customContainerConfig && typeof (this.customContainerConfig as any).validate === 'function') {
      (this.customContainerConfig as any).validate();
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
    if(this.ossMountConfig && typeof (this.ossMountConfig as any).validate === 'function') {
      (this.ossMountConfig as any).validate();
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

