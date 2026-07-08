// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRenderingProjectInstanceStateMetricsResponseBodyStateMetrics extends $dara.Model {
  /**
   * @remarks
   * Number of instances
   * 
   * @example
   * 10
   */
  count?: string;
  /**
   * @remarks
   * Project instance state
   * 
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

export class GetRenderingProjectInstanceStateMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * List of project instance state statistics
   */
  stateMetrics?: GetRenderingProjectInstanceStateMetricsResponseBodyStateMetrics[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stateMetrics: 'StateMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stateMetrics: { 'type': 'array', 'itemType': GetRenderingProjectInstanceStateMetricsResponseBodyStateMetrics },
    };
  }

  validate() {
    if(Array.isArray(this.stateMetrics)) {
      $dara.Model.validateArray(this.stateMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

