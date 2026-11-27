// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricData } from "./MetricData";


export class GetMetricDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. 200 indicates success. If the request fails, the corresponding error code is returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The description of the request result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The query results for each metric. Metrics ending with QuotaRatio return a percentage from 0 to 100. For example, 25 indicates 25%.
   * 
   * @example
   * {"period":60,"startTime":"2026-11-05T00:00:00Z","endTime":"2026-11-05T00:02:00Z","groupBy":["teamID"],"results":[{"metricName":"cpuUsedCores","unit":"Core","series":[{"dimensions":{"teamID":"70d1c834-0333-58d8-97ac-5336eb9179eb"},"points":[{"timestamp":"2026-11-05T00:00:00Z","value":0.25},{"timestamp":"2026-11-05T00:01:00Z","value":0.5}]}]}]}
   */
  metricData?: MetricData;
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * 12345678-1234-5678-9abc-123456789abc
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      metricData: 'metricData',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      metricData: MetricData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.metricData && typeof (this.metricData as any).validate === 'function') {
      (this.metricData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

