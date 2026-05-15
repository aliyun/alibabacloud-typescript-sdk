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
   * 要绑定的消费者API密钥列表；空表示开放模式
   */
  consumerApiKeys?: CreateModelConnectionInputConsumerApiKeys[];
  /**
   * @remarks
   * 模型连接的描述信息
   * 
   * @example
   * OpenAI GPT-4 connection for production
   */
  description?: string;
  /**
   * @remarks
   * 模型连接的唯一名称标识
   * 
   * This parameter is required.
   * 
   * @example
   * my-openai-connection
   */
  modelConnectionName?: string;
  /**
   * @remarks
   * 模型元数据配置列表
   */
  modelInfoConfigs?: ModelInfoConfig[];
  /**
   * @remarks
   * 模型提供商名称
   * 
   * This parameter is required.
   * 
   * @example
   * openai
   */
  provider?: string;
  /**
   * @remarks
   * 模型提供商的配置信息，包括基础URL、模型列表等
   * 
   * This parameter is required.
   * 
   * @example
   * {}
   */
  providerSettings?: ModelConnectionProviderSettings;
  /**
   * @remarks
   * 模型连接所属的工作空间标识符
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

