// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRenderingProjectInstanceStateMetricsResponseBodyStateMetrics extends $dara.Model {
  /**
   * @example
   * 10
   */
  count?: string;
  /**
   * @example
   * Idle
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

