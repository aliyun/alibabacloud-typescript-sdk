// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TimeSeriesPointDTO extends $dara.Model {
  /**
   * @remarks
   * The label.
   * 
   * @example
   * series1
   */
  label?: string;
  /**
   * @remarks
   * The timestamp (RFC3339).
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * 42.76
   */
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

