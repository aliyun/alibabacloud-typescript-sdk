// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrendPointDTO extends $dara.Model {
  /**
   * @remarks
   * UNIX timestamp (Unix seconds)
   * 
   * @example
   * 1700000000
   */
  timestamp?: number;
  /**
   * @remarks
   * Metric value mapping, where the key is the metric name and the value is the numeric value
   * 
   * @example
   * "{\\"total_calls\\":0,\\"video_duration\\":0,\\"total_amount\\":0,\\"model_count\\":0,\\"image_count\\":0}"
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'timestamp',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
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

