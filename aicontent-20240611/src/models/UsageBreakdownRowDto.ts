// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricKVPairDTO } from "./MetricKvpairDto";


export class UsageBreakdownRowDTO extends $dara.Model {
  /**
   * @remarks
   * The API key ID. A value of 0 indicates that historical data is not broken down by API key.
   * 
   * @example
   * 0
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The API key name, corresponding to api_key_id.
   * 
   * @example
   * Default key
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The department ID. A value of 0 indicates no affiliated department.
   * 
   * @example
   * 0
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
   * The member ID for a member row. The value is 0 for a department row.
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
   * John Smith
   */
  memberUserName?: string;
  /**
   * @remarks
   * The usage metric array. Only entries with non-zero values are included.
   * 
   * @example
   * [{"key": "total_calls", "value": 100}]
   */
  metrics?: MetricKVPairDTO[];
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
   * The statistical dimension.
   * 
   * @example
   * llm
   */
  modelType?: string;
  /**
   * @remarks
   * The statistical time point, in UNIX timestamp (seconds).
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
      memberUserId: 'memberUserId',
      memberUserName: 'memberUserName',
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
      memberUserId: 'number',
      memberUserName: 'string',
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

