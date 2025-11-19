// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelInfoConfig } from "./ModelInfoConfig";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { ProviderSettings } from "./ProviderSettings";


export class CreateModelServiceInput extends $dara.Model {
  credentialName?: string;
  description?: string;
  modelInfoConfigs?: ModelInfoConfig[];
  /**
   * @remarks
   * This parameter is required.
   */
  modelServiceName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  modelType?: string;
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * This parameter is required.
   */
  provider?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  providerSettings?: ProviderSettings;
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

