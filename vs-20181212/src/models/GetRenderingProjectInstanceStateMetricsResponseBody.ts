// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRenderingProjectInstanceStateMetricsResponseBodyStateMetrics } from "./GetRenderingProjectInstanceStateMetricsResponseBodyStateMetrics";


export class GetRenderingProjectInstanceStateMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
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

