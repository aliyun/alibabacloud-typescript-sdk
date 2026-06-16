// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelInfoConfig } from "./ModelInfoConfig";
import { ModelConnectionProviderSettings } from "./ModelConnectionProviderSettings";


export class CreateModelConnectionInputConsumerApiKeys extends $dara.Model {
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

export class CreateModelConnectionInput extends $dara.Model {
  /**
   * @remarks
   * A list of consumer API keys for the model connection. If this list is empty, the connection enters open mode.
   */
  consumerApiKeys?: CreateModelConnectionInputConsumerApiKeys[];
  /**
   * @remarks
   * A description of the model connection.
   * 
   * @example
   * OpenAI GPT-4 connection for production
   */
  description?: string;
  /**
   * @remarks
   * A unique name for the model connection.
   * 
   * This parameter is required.
   * 
   * @example
   * my-openai-connection
   */
  modelConnectionName?: string;
  /**
   * @remarks
   * A list of model metadata configurations.
   */
  modelInfoConfigs?: ModelInfoConfig[];
  /**
   * @remarks
   * The model provider name.
   * 
   * This parameter is required.
   * 
   * @example
   * openai
   */
  provider?: string;
  /**
   * @remarks
   * Configuration settings for the model provider, such as the base URL and a list of models.
   * 
   * This parameter is required.
   * 
   * @example
   * {}
   */
  providerSettings?: ModelConnectionProviderSettings;
  /**
   * @remarks
   * The ID of the workspace containing the model connection.
   * 
   * @example
   * ws-1234567890abcdef
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerApiKeys: 'consumerApiKeys',
      description: 'description',
      modelConnectionName: 'modelConnectionName',
      modelInfoConfigs: 'modelInfoConfigs',
      provider: 'provider',
      providerSettings: 'providerSettings',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerApiKeys: { 'type': 'array', 'itemType': CreateModelConnectionInputConsumerApiKeys },
      description: 'string',
      modelConnectionName: 'string',
      modelInfoConfigs: { 'type': 'array', 'itemType': ModelInfoConfig },
      provider: 'string',
      providerSettings: ModelConnectionProviderSettings,
      workspaceId: 'string',
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

