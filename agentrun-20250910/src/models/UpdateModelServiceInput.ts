// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelInfoConfig } from "./ModelInfoConfig";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { ProviderSettings } from "./ProviderSettings";


export class UpdateModelServiceInput extends $dara.Model {
  credentialName?: string;
  description?: string;
  modelInfoConfigs?: ModelInfoConfig[];
  networkConfiguration?: NetworkConfiguration;
  providerSettings?: ProviderSettings;
  status?: string;
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      credentialName: 'credentialName',
      description: 'description',
      modelInfoConfigs: 'modelInfoConfigs',
      networkConfiguration: 'networkConfiguration',
      providerSettings: 'providerSettings',
      status: 'status',
      statusReason: 'statusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialName: 'string',
      description: 'string',
      modelInfoConfigs: { 'type': 'array', 'itemType': ModelInfoConfig },
      networkConfiguration: NetworkConfiguration,
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

