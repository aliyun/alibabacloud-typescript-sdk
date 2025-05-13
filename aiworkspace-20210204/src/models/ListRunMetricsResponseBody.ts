// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunMetric } from "./RunMetric";


export class ListRunMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metrics.
   */
  metrics?: RunMetric[];
  /**
   * @remarks
   * The pagination token that is used to retrieve the next page. You do not need to specify this parameter for the first request. You must specify the pagination token in the result of the previous query. If the pagination token is 0, no next page exists. You can obtain the pagination token that is used to retrieve the next page in the value of the **NextPageToken** field.
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

