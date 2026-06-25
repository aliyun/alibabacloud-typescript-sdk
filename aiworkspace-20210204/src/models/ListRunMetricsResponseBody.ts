// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunMetric } from "./RunMetric";


export class ListRunMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of metrics.
   */
  metrics?: RunMetric[];
  /**
   * @remarks
   * The token to retrieve the next page of results. A value of 0 indicates that all results have been returned. Use the value of this parameter for the \\`PageToken\\` parameter in your next request to retrieve the next page.
   * 
   * @example
   * 0
   */
  nextPageToken?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      nextPageToken: 'NextPageToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': RunMetric },
      nextPageToken: 'number',
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

