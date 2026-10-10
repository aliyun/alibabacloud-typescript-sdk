// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BillingDetailRowDTO extends $dara.Model {
  /**
   * @remarks
   * The actual payment amount (after discount), rounded to 8 decimal places.
   * 
   * @example
   * 0.00012800
   */
  amount?: number;
  /**
   * @remarks
   * API Key ID
   * 
   * @example
   * 100
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The API key name.
   * 
   * @example
   * Default Key
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The number of cache creation tokens (explicit cache writes).
   * 
   * @example
   * 0
   */
  cacheCreationTokens?: number;
  /**
   * @remarks
   * The number of tokens that hit the cache.
   * 
   * @example
   * 256
   */
  cachedTokens?: number;
  /**
   * @remarks
   * The department ID. A value of 0 indicates that no department is associated.
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * The department name.
   * 
   * @example
   * R&D Department
   */
  clientName?: string;
  /**
   * @remarks
   * The discount coefficient. A value of 1.0 indicates no discount.
   * 
   * @example
   * 1.0
   */
  discount?: number;
  /**
   * @remarks
   * The number of input tokens, including cached tokens and cache creation tokens.
   * 
   * @example
   * 1024
   */
  inputTokens?: number;
  /**
   * @remarks
   * The member user ID for a member row. The value is 0 for a department row.
   * 
   * @example
   * 30001
   */
  memberUserId?: number;
  /**
   * @remarks
   * The member name for a member row. The value is empty for a department row.
   * 
   * @example
   * John
   */
  memberUserName?: string;
  /**
   * @remarks
   * The JSON of other metering field mapping, such as video duration and image count. Fields with a value of 0 are not included in the output.
   * 
   * @example
   * {}
   */
  metrics?: string;
  /**
   * @remarks
   * The model identifier.
   * 
   * @example
   * qwen-plus
   */
  modelCode?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * Qwen-Plus
   */
  modelName?: string;
  /**
   * @remarks
   * The model symbol (provider identifier).
   * 
   * @example
   * qwen
   */
  modelSymbol?: string;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * Chat
   */
  modelType?: string;
  /**
   * @remarks
   * The model version number.
   * 
   * @example
   * 1
   */
  modelVersion?: number;
  /**
   * @remarks
   * The number of output tokens.
   * 
   * @example
   * 512
   */
  outputTokens?: number;
  /**
   * @remarks
   * The number of reasoning tokens.
   * 
   * @example
   * 128
   */
  reasoningTokens?: number;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * chatcmpl-abc123def456
   */
  requestId?: string;
  /**
   * @remarks
   * The request time as a UNIX timestamp in seconds.
   * 
   * @example
   * 1700000000
   */
  requestTime?: number;
  /**
   * @remarks
   * The total number of tokens.
   * 
   * @example
   * 1536
   */
  totalTokens?: number;
  /**
   * @remarks
   * The raw JSON of the usage details.
   * 
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

