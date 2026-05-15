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
   * 更新绑定的消费者API密钥列表
   */
  consumerApiKeys?: UpdateModelConnectionInputConsumerApiKeys[];
  /**
   * @remarks
   * 更新后的描述信息
   * 
   * @example
   * Updated connection description
   */
  description?: string;
  /**
   * @remarks
   * 更新后的模型元数据配置列表
   */
  modelInfoConfigs?: ModelInfoConfig[];
  /**
   * @remarks
   * 更新后的模型提供商配置信息
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

