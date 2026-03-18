// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelMetricsDTO extends $dara.Model {
  /**
   * @example
   * 200.5
   */
  avgResponseTime?: number;
  /**
   * @example
   * 500000
   */
  inputTokens?: number;
  /**
   * @example
   * 300000
   */
  outputTokens?: number;
  /**
   * @example
   * 99.5
   */
  successRate?: number;
  /**
   * @example
   * 1000
   */
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      avgResponseTime: 'avgResponseTime',
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      successRate: 'successRate',
      totalCalls: 'totalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgResponseTime: 'number',
      inputTokens: 'number',
      outputTokens: 'number',
      successRate: 'number',
      totalCalls: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

