// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the call was successful.
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
   * [{"timestamp":1548777660000,"userId":"120886317861****","instanceId":"i-abc","Minimum":9.92,"Average":9.92,"Maximum":9.92}]
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
   * The paging token.
   * 
   * @example
   * 15761441850009dd70bb64cff1f0fff6d0b08ffff073be5fb1e785e2b020f7fed9b5e137bd810a6d6cff5ae****
   */
  nextToken?: string;
  /**
   * @remarks
   * The interval at which the monitoring data is queried. Unit: seconds. Valid values: 60, 300, and 900.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3121AE7D-4AFF-4C25-8F1D-C8226EBB1F42
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   true: The call was successful.
   * *   false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
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
      datapoints: 'string',
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

