// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetricInfo extends $dara.Model {
  /**
   * @example
   * 1234.5
   */
  average?: number;
  /**
   * @example
   * 1234.5
   */
  count?: number;
  /**
   * @example
   * 1234.5
   */
  maximum?: number;
  /**
   * @example
   * 1234.5
   */
  minimum?: number;
  /**
   * @example
   * 1234.5
   */
  sum?: number;
  /**
   * @example
   * 1686568800000
   */
  timestamp?: number;
  /**
   * @example
   * 1234.5
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      count: 'Count',
      maximum: 'Maximum',
      minimum: 'Minimum',
      sum: 'Sum',
      timestamp: 'timestamp',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'number',
      count: 'number',
      maximum: 'number',
      minimum: 'number',
      sum: 'number',
      timestamp: 'number',
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

