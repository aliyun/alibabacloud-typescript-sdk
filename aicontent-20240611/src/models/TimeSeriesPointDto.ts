// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TimeSeriesPointDTO extends $dara.Model {
  /**
   * @example
   * series1
   */
  label?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  timestamp?: string;
  value?: any;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      timestamp: 'timestamp',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      timestamp: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

