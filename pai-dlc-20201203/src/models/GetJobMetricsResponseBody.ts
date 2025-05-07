// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PodMetric } from "./PodMetric";


export class GetJobMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-20210126170216-*******
   */
  jobId?: string;
  /**
   * @remarks
   * The monitoring metrics of the job.
   */
  podMetrics?: PodMetric[];
  /**
   * @remarks
   * The request ID. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      podMetrics: 'PodMetrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      podMetrics: { 'type': 'array', 'itemType': PodMetric },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.podMetrics)) {
      $dara.Model.validateArray(this.podMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

