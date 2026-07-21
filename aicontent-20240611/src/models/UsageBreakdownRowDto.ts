// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricKVPairDTO } from "./MetricKvpairDto";


export class UsageBreakdownRowDTO extends $dara.Model {
  /**
   * @example
   * 0
   */
  apiKeyId?: number;
  /**
   * @example
   * 默认密钥
   */
  apiKeyName?: string;
  /**
   * @remarks
   * Department ID; 0 indicates no associated department
   * 
   * @example
   * 0
   */
  clientId?: number;
  /**
   * @remarks
   * Department name
   * 
   * @example
   * 研发部
   */
  clientName?: string;
  /**
   * @remarks
   * Array of usage metrics, containing only entries with non-zero values
   * 
   * @example
   * [{"key": "total_calls", "value": 100}]
   */
  metrics?: MetricKVPairDTO[];
  /**
   * @remarks
   * Model identifier
   * 
   * @example
   * qwen-plus
   */
  modelCode?: string;
  /**
   * @remarks
   * Model ID
   * 
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @remarks
   * Model name
   * 
   * @example
   * 通义千问-Plus
   */
  modelName?: string;
  /**
   * @remarks
   * Statistics scope
   * 
   * @example
   * llm
   */
  modelType?: string;
  /**
   * @remarks
   * Statistics time point, Unix timestamp (seconds)
   * 
   * @example
   * 1700000000
   */
  summaryTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      apiKeyName: 'apiKeyName',
      clientId: 'clientId',
      clientName: 'clientName',
      metrics: 'metrics',
      modelCode: 'modelCode',
      modelId: 'modelId',
      modelName: 'modelName',
      modelType: 'modelType',
      summaryTime: 'summaryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      apiKeyName: 'string',
      clientId: 'number',
      clientName: 'string',
      metrics: { 'type': 'array', 'itemType': MetricKVPairDTO },
      modelCode: 'string',
      modelId: 'number',
      modelName: 'string',
      modelType: 'string',
      summaryTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

