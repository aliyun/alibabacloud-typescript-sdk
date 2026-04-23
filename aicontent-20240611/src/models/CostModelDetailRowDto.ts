// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CostModelDetailRowDTO extends $dara.Model {
  /**
   * @example
   * 1700000000
   */
  timestamp?: number;
  /**
   * @example
   * "{\\"total_calls\\":3,\\"video_duration\\":0,\\"total_amount\\":0.6,\\"image_count\\":3,\\"timestamp\\":1776787200}"
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

