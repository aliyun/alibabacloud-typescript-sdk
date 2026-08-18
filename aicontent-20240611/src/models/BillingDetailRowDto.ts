// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BillingDetailRowDTO extends $dara.Model {
  /**
   * @example
   * 0.00012800
   */
  amount?: number;
  /**
   * @example
   * 100
   */
  apiKeyId?: number;
  /**
   * @example
   * 默认密钥
   */
  apiKeyName?: string;
  /**
   * @example
   * 0
   */
  cacheCreationTokens?: number;
  /**
   * @example
   * 256
   */
  cachedTokens?: number;
  /**
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @example
   * 研发部
   */
  clientName?: string;
  /**
   * @example
   * 1.0
   */
  discount?: number;
  /**
   * @example
   * 1024
   */
  inputTokens?: number;
  /**
   * @example
   * 30001
   */
  memberUserId?: number;
  /**
   * @example
   * 张三
   */
  memberUserName?: string;
  /**
   * @example
   * {}
   */
  metrics?: string;
  /**
   * @example
   * qwen-plus
   */
  modelCode?: string;
  /**
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @example
   * 通义千问-Plus
   */
  modelName?: string;
  /**
   * @example
   * qwen
   */
  modelSymbol?: string;
  /**
   * @example
   * Chat
   */
  modelType?: string;
  /**
   * @example
   * 1
   */
  modelVersion?: number;
  /**
   * @example
   * 512
   */
  outputTokens?: number;
  /**
   * @example
   * 128
   */
  reasoningTokens?: number;
  /**
   * @example
   * chatcmpl-abc123def456
   */
  requestId?: string;
  /**
   * @example
   * 1700000000
   */
  requestTime?: number;
  /**
   * @example
   * 1536
   */
  totalTokens?: number;
  /**
   * @example
   * {"input_tokens": 1024, "output_tokens": 512}
   */
  usageDetail?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      apiKeyId: 'apiKeyId',
      apiKeyName: 'apiKeyName',
      cacheCreationTokens: 'cacheCreationTokens',
      cachedTokens: 'cachedTokens',
      clientId: 'clientId',
      clientName: 'clientName',
      discount: 'discount',
      inputTokens: 'inputTokens',
      memberUserId: 'memberUserId',
      memberUserName: 'memberUserName',
      metrics: 'metrics',
      modelCode: 'modelCode',
      modelId: 'modelId',
      modelName: 'modelName',
      modelSymbol: 'modelSymbol',
      modelType: 'modelType',
      modelVersion: 'modelVersion',
      outputTokens: 'outputTokens',
      reasoningTokens: 'reasoningTokens',
      requestId: 'requestId',
      requestTime: 'requestTime',
      totalTokens: 'totalTokens',
      usageDetail: 'usageDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      apiKeyId: 'number',
      apiKeyName: 'string',
      cacheCreationTokens: 'number',
      cachedTokens: 'number',
      clientId: 'number',
      clientName: 'string',
      discount: 'number',
      inputTokens: 'number',
      memberUserId: 'number',
      memberUserName: 'string',
      metrics: 'string',
      modelCode: 'string',
      modelId: 'number',
      modelName: 'string',
      modelSymbol: 'string',
      modelType: 'string',
      modelVersion: 'number',
      outputTokens: 'number',
      reasoningTokens: 'number',
      requestId: 'string',
      requestTime: 'number',
      totalTokens: 'number',
      usageDetail: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

