// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricKVPairDTO } from "./MetricKvpairDto";


export class UsageBreakdownRowDTO extends $dara.Model {
  /**
   * @example
   * 0
   */
  clientId?: number;
  clientName?: string;
  /**
   * @example
   * [{"key": "total_calls", "value": 100}]
   */
  metrics?: MetricKVPairDTO[];
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
  modelName?: string;
  /**
   * @example
   * llm
   */
  modelType?: string;
  /**
   * @example
   * 1700000000
   */
  summaryTime?: number;
  static names(): { [key: string]: string } {
    return {
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

