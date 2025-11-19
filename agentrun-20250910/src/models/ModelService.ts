// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelInfoConfig } from "./ModelInfoConfig";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { ProviderSettings } from "./ProviderSettings";


export class ModelService extends $dara.Model {
  createdAt?: string;
  credentialName?: string;
  description?: string;
  lastUpdatedAt?: string;
  modeServiceId?: string;
  modelInfoConfigs?: ModelInfoConfig[];
  modelServiceName?: string;
  modelType?: string;
  networkConfiguration?: NetworkConfiguration;
  provider?: string;
  providerSettings?: ProviderSettings;
  status?: string;
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      credentialName: 'credentialName',
      description: 'description',
      lastUpdatedAt: 'lastUpdatedAt',
      modeServiceId: 'modeServiceId',
      modelInfoConfigs: 'modelInfoConfigs',
      modelServiceName: 'modelServiceName',
      modelType: 'modelType',
      networkConfiguration: 'networkConfiguration',
      provider: 'provider',
      providerSettings: 'providerSettings',
      status: 'status',
      statusReason: 'statusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      credentialName: 'string',
      description: 'string',
      lastUpdatedAt: 'string',
      modeServiceId: 'string',
      modelInfoConfigs: { 'type': 'array', 'itemType': ModelInfoConfig },
      modelServiceName: 'string',
      modelType: 'string',
      networkConfiguration: NetworkConfiguration,
      provider: 'string',
      providerSettings: ProviderSettings,
      status: 'string',
      statusReason: 'string',
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

