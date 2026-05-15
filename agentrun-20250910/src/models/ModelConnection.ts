// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelConnectionConsumerAPIKey } from "./ModelConnectionConsumerApikey";
import { ModelInfoConfig } from "./ModelInfoConfig";
import { ModelConnectionProviderSettings } from "./ModelConnectionProviderSettings";


export class ModelConnection extends $dara.Model {
  /**
   * @remarks
   * 绑定的消费者API密钥列表
   */
  consumerApiKeys?: ModelConnectionConsumerAPIKey[];
  /**
   * @remarks
   * 模型连接的创建时间，采用ISO 8601格式
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
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
   * 模型连接最后一次更新的时间，采用ISO 8601格式
   * 
   * @example
   * 2025-01-10T11:45:00Z
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * 模型连接的唯一标识符
   * 
   * @example
   * mc-1234567890abcdef
   */
  modelConnectionId?: string;
  /**
   * @remarks
   * 模型连接的唯一名称标识
   * 
   * @example
   * my-openai-connection
   */
  modelConnectionName?: string;
  /**
   * @remarks
   * 模型元数据配置列表，包含各个模型的功能特性和参数规则
   */
  modelInfoConfigs?: ModelInfoConfig[];
  /**
   * @remarks
   * 模型提供商名称
   * 
   * @example
   * openai
   */
  provider?: string;
  /**
   * @remarks
   * 模型提供商的配置信息
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

