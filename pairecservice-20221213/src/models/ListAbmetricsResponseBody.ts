// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListABMetricsResponseBodyABMetrics } from "./ListAbmetricsResponseBodyAbmetrics";


export class ListABMetricsResponseBody extends $dara.Model {
  ABMetrics?: ListABMetricsResponseBodyABMetrics[];
  /**
   * @example
   * F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ABMetrics: 'ABMetrics',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetrics: { 'type': 'array', 'itemType': ListABMetricsResponseBodyABMetrics },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ABMetrics)) {
      $dara.Model.validateArray(this.ABMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

