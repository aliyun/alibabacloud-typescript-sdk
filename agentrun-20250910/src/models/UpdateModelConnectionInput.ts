// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelInfoConfig } from "./ModelInfoConfig";
import { ModelConnectionProviderSettings } from "./ModelConnectionProviderSettings";


export class UpdateModelConnectionInputConsumerApiKeys extends $dara.Model {
  apiKeyId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelConnectionInput extends $dara.Model {
  /**
   * @remarks
   * A list of consumer API keys to associate with the model connection.
   */
  consumerApiKeys?: UpdateModelConnectionInputConsumerApiKeys[];
  /**
   * @remarks
   * A new description for the model connection.
   * 
   * @example
   * Updated connection description
   */
  description?: string;
  /**
   * @remarks
   * A new list of model metadata configurations.
   */
  modelInfoConfigs?: ModelInfoConfig[];
  /**
   * @remarks
   * A new configuration for the model provider.
   * 
   * @example
   * {}
   */
  providerSettings?: ModelConnectionProviderSettings;
  static names(): { [key: string]: string } {
    return {
      consumerApiKeys: 'consumerApiKeys',
      description: 'description',
      modelInfoConfigs: 'modelInfoConfigs',
      providerSettings: 'providerSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerApiKeys: { 'type': 'array', 'itemType': UpdateModelConnectionInputConsumerApiKeys },
      description: 'string',
      modelInfoConfigs: { 'type': 'array', 'itemType': ModelInfoConfig },
      providerSettings: ModelConnectionProviderSettings,
    };
  }

  validate() {
    if(Array.isArray(this.consumerApiKeys)) {
      $dara.Model.validateArray(this.consumerApiKeys);
    }
    if(Array.isArray(this.modelInfoConfigs)) {
      $dara.Model.validateArray(this.modelInfoConfigs);
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

