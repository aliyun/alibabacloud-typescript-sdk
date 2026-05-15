// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerAPIKeyOutput extends $dara.Model {
  /**
   * @remarks
   * 密钥是否启用
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * 完整的API密钥明文，仅在创建时返回一次，请妥善保存
   * 
   * @example
   * sk-xxxxxxxxxxxxxxxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * 消费者API密钥的唯一标识符
   * 
   * @example
   * 12345678-1234-1234-1234-123456789abc
   */
  consumerApiKeyId?: string;
  /**
   * @remarks
   * 创建时间，采用ISO 8601格式
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * 消费者API密钥的描述信息
   * 
   * @example
   * 用于生产环境的API密钥
   */
  description?: string;
  /**
   * @remarks
   * 更新时间，采用ISO 8601格式
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * API密钥的掩码展示形式
   * 
   * @example
   * sk-****1234
   */
  maskedKey?: string;
  /**
   * @remarks
   * 关联的模型连接标识符
   * 
   * @example
   * mc-1234567890abcdef
   */
  modelConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      apiKey: 'apiKey',
      consumerApiKeyId: 'consumerApiKeyId',
      createdAt: 'createdAt',
      description: 'description',
      lastUpdatedAt: 'lastUpdatedAt',
      maskedKey: 'maskedKey',
      modelConnectionId: 'modelConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      apiKey: 'string',
      consumerApiKeyId: 'string',
      createdAt: 'string',
      description: 'string',
      lastUpdatedAt: 'string',
      maskedKey: 'string',
      modelConnectionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

