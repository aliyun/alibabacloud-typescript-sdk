// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The monitoring metrics data.
   * 
   * @example
   * [{\\"Content\\": \\"\\", \\"OperationName\\": \\"purchase\\", \\"Success\\": 1, \\"Id\\": \\"217\\", \\"LogDatetime\\": 1687679582923}]
   */
  dataPoints?: string;
  /**
   * @remarks
   * The detailed information about the detection result.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6lESTRpd5hnHNnmKOP/+w9F
   */
  nextToken?: string;
  /**
   * @remarks
   * The statistical period of the monitoring data. Valid values: 15, 60, 900, and 3600. Unit: seconds. If you do not set the statistical period, monitoring data is queried based on the reporting period that was specified when the monitoring metric was registered. The statistical period varies for each monitoring metric (MetricName) of each cloud service. For more information, see cloud service monitoring items.
   * 
   * @example
   * 5
   */
  period?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * - true: The operation was successful.
   * - false: The operation failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataPoints: 'DataPoints',
      message: 'Message',
      nextToken: 'NextToken',
      period: 'Period',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataPoints: 'string',
      message: 'string',
      nextToken: 'string',
      period: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

