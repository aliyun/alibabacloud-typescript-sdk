// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The monitoring data. The value includes the following fields:
   * 
   * *   `timestamp`: the time when the alert was triggered.
   * *   `userId`: the ID of the user for which the alert was triggered.
   * *   `instanceId`: the ID of the instance for which the alert was triggered.
   * *   `Minimum`, `Average`, and `Maximum`: the aggregation methods.
   * 
   * @example
   * [{\\"timestamp\\":1618368900000,\\"Average\\":95.8291666666667,\\"Minimum\\":65.48,\\"Maximum\\":100.0},{\\"timestamp\\":1618368960000,\\"Average\\":95.8683333333333,\\"Minimum\\":67.84,\\"Maximum\\":100.0}]
   */
  datapoints?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The statistical period of the monitoring data.
   * 
   * Valid values: 15, 60, 900, and 3600.
   * 
   * Unit: seconds.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A5F022D-AC7C-460E-94AE-B9E75083D027
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      period: 'Period',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datapoints: 'string',
      message: 'string',
      period: 'string',
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

