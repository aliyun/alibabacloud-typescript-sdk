// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricData } from "./MetricData";


export class GetMetricDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * 成功时为 200。失败时为对应的错误码。
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 本次请求的结果说明。
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * 各指标的查询结果及对应的时间和分组。
   * 
   * @example
   * {"period":60,"startTime":"2026-11-05T00:00:00Z","endTime":"2026-11-05T00:02:00Z","groupBy":["teamID"],"results":[{"metricName":"cpuUsedCores","unit":"Core","series":[{"dimensions":{"teamID":"70d1c834-0333-58d8-97ac-5336eb9179eb"},"points":[{"timestamp":"2026-11-05T00:00:00Z","value":0.25},{"timestamp":"2026-11-05T00:01:00Z","value":0.5}]}]}]}
   */
  metricData?: MetricData;
  /**
   * @remarks
   * 本次请求的唯一标识。
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

