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
   * The pagination token. Leave this parameter empty when you query the first page. The response returns the token for the next page. A value of 0 indicates that all results have been retrieved. You can obtain the token for the next page from the **NextPageToken** field in the response.
   * 
   * @example
   * 0
   */
  nextPageToken?: number;
  /**
   * @remarks
   * Id of the request
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

