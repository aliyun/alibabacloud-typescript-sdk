// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelConnectionConsumerAPIKey } from "./ModelConnectionConsumerApikey";
import { ModelInfoConfig } from "./ModelInfoConfig";
import { ModelConnectionProviderSettings } from "./ModelConnectionProviderSettings";


export class ModelConnection extends $dara.Model {
  /**
   * @remarks
   * A list of consumer API keys bound to this model connection.
   */
  consumerApiKeys?: ModelConnectionConsumerAPIKey[];
  /**
   * @remarks
   * The time the model connection was created, in ISO 8601 format.
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
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
   * The time the model connection was last updated, in ISO 8601 format.
   * 
   * @example
   * 2025-01-10T11:45:00Z
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * The model connection\\"s unique identifier.
   * 
   * @example
   * mc-1234567890abcdef
   */
  modelConnectionId?: string;
  /**
   * @remarks
   * A unique name identifying the model connection.
   * 
   * @example
   * my-openai-connection
   */
  modelConnectionName?: string;
  /**
   * @remarks
   * A list of model metadata configurations. Each configuration includes the features and parameter rules for a specific model.
   */
  modelInfoConfigs?: ModelInfoConfig[];
  /**
   * @remarks
   * The model provider\\"s name.
   * 
   * @example
   * openai
   */
  provider?: string;
  /**
   * @remarks
   * The settings for the model provider.
   * 
   * @example
   * {}
   */
  providerSettings?: ModelConnectionProviderSettings;
  /**
   * @remarks
   * The identifier of the workspace containing the model connection.
   * 
   * @example
   * ws-1234567890abcdef
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerApiKeys: 'consumerApiKeys',
      createdAt: 'createdAt',
      description: 'description',
      lastUpdatedAt: 'lastUpdatedAt',
      modelConnectionId: 'modelConnectionId',
      modelConnectionName: 'modelConnectionName',
      modelInfoConfigs: 'modelInfoConfigs',
      provider: 'provider',
      providerSettings: 'providerSettings',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerApiKeys: { 'type': 'array', 'itemType': ModelConnectionConsumerAPIKey },
      createdAt: 'string',
      description: 'string',
      lastUpdatedAt: 'string',
      modelConnectionId: 'string',
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

