// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetricKVPairDTO extends $dara.Model {
  /**
   * @example
   * total_calls
   */
  key?: string;
  /**
   * @example
   * 100
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

