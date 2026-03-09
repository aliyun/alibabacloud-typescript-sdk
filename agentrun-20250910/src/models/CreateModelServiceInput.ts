// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelInfoConfig } from "./ModelInfoConfig";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { ProviderSettings } from "./ProviderSettings";


export class CreateModelServiceInput extends $dara.Model {
  /**
   * @example
   * credentialName
   */
  credentialName?: string;
  /**
   * @example
   * Auto generate task: Pipeline[pipeline-run-1742178254775] pipelineTemplate[data-export-service-online-iVnQB5] taskTemplate[serverless-runner-task], time[2025-03-17T02:24:36Z]
   */
  description?: string;
  /**
   * @remarks
   * modelInfoConfigs
   */
  modelInfoConfigs?: ModelInfoConfig[];
  /**
   * @remarks
   * modelServiceName
   * 
   * This parameter is required.
   * 
   * @example
   * modelServiceName
   */
  modelServiceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * system
   */
  modelType?: string;
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  provider?: string;
  /**
   * @remarks
   * providerSettings
   * 
   * This parameter is required.
   */
  providerSettings?: ProviderSettings;
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

