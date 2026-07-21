// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRowDTO extends $dara.Model {
  /**
   * @remarks
   * Model identity
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
   * Metric value mapping, where the key is the metric name and the value is the numeric value
   * 
   * @example
   * "{\\"total_calls\\":21,\\"video_duration\\":210,\\"total_amount\\":126,\\"image_count\\":0}"
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      modelCode: 'modelCode',
      modelId: 'modelId',
      modelName: 'modelName',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCode: 'string',
      modelId: 'number',
      modelName: 'string',
      values: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

