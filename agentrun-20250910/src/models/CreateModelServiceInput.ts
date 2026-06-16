// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelInfoConfig } from "./ModelInfoConfig";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { ProviderSettings } from "./ProviderSettings";


export class CreateModelServiceInput extends $dara.Model {
  /**
   * @remarks
   * The credential name for authenticating with the cloud provider.
   * 
   * @example
   * credentialName
   */
  credentialName?: string;
  /**
   * @remarks
   * An optional description of the model service.
   * 
   * @example
   * Auto generate task: Pipeline[pipeline-run-1742178254775] pipelineTemplate[data-export-service-online-iVnQB5] taskTemplate[serverless-runner-task], time[2025-03-17T02:24:36Z]
   */
  description?: string;
  /**
   * @remarks
   * A list of configurations for models in the service.
   */
  modelInfoConfigs?: ModelInfoConfig[];
  /**
   * @remarks
   * The name of the model service.
   * 
   * This parameter is required.
   * 
   * @example
   * modelServiceName
   */
  modelServiceName?: string;
  /**
   * @remarks
   * The model type. Valid values include:
   * 
   * - `system`: A built-in model that the service provides.
   * 
   * - `deployment`: A custom model that a user deploys.
   * 
   * This parameter is required.
   * 
   * @example
   * system
   */
  modelType?: string;
  /**
   * @remarks
   * The network configuration for the model service. See `NetworkConfiguration` for details.
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * The cloud provider for the model service. Currently, only Alibaba Cloud is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  provider?: string;
  /**
   * @remarks
   * Provider-specific configuration settings. See `ProviderSettings` for details.
   * 
   * This parameter is required.
   */
  providerSettings?: ProviderSettings;
  /**
   * @remarks
   * The ID of the workspace in which to create the model service.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      credentialName: 'credentialName',
      description: 'description',
      modelInfoConfigs: 'modelInfoConfigs',
      modelServiceName: 'modelServiceName',
      modelType: 'modelType',
      networkConfiguration: 'networkConfiguration',
      provider: 'provider',
      providerSettings: 'providerSettings',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialName: 'string',
      description: 'string',
      modelInfoConfigs: { 'type': 'array', 'itemType': ModelInfoConfig },
      modelServiceName: 'string',
      modelType: 'string',
      networkConfiguration: NetworkConfiguration,
      provider: 'string',
      providerSettings: ProviderSettings,
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modelInfoConfigs)) {
      $dara.Model.validateArray(this.modelInfoConfigs);
    }
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
    }
    if(this.providerSettings && typeof (this.providerSettings as any).validate === 'function') {
      (this.providerSettings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

