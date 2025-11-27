// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobMetricDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Monitoring statistics points.
   * 
   * @example
   * [{"timestamp":1709540685000,"Minimum":28.45,"Maximum":28.45,"Average":28.45}]
   */
  dataPoints?: string;
  /**
   * @remarks
   * The statistical period of the monitoring data. Valid values: 15, 60, 900, and 3600. Unit: seconds.
   * 
   * @example
   * 15
   */
  period?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPoints: 'DataPoints',
      period: 'Period',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoints: 'string',
      period: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

