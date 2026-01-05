// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Metric } from "./Metric";


export class QuerySlotMetricsResponseBody extends $dara.Model {
  metrics?: Metric[];
  /**
   * @example
   * 60s
   */
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * A731A84D-55C9-44F7-99BB-E1CF0CF19197
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      period: 'Period',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': Metric },
      period: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

