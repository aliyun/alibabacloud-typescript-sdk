// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricTopResponseBody extends $dara.Model {
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
   * The monitoring data.
   * 
   * @example
   * [{\\"order\\":1,\\"timestamp\\":1620287520000,\\"userId\\":\\"120886317861****\\",\\"instanceId\\":\\"i-j6ccf7d5fn335qpo****\\",\\"Average\\":99.92,\\"Minimum\\":99.5,\\"Maximum\\":100.0,\\"_count\\":1.0},{\\"order\\":2,\\"timestamp\\":1620287520000,\\"userId\\":\\"120886317861****\\",\\"instanceId\\":\\"i-0xii2bvf42iqvxbp****\\",\\"Average\\":99.91,\\"Minimum\\":99.0,\\"Maximum\\":100.0,\\"_count\\":1.0}]
   */
  datapoints?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The statistical period of the monitoring data. Unit: seconds. Valid values: 15, 60, 900, and 3600.
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
   * 3121AE7D-4AFF-4C25-8F1D-C8226EBB1F42
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

