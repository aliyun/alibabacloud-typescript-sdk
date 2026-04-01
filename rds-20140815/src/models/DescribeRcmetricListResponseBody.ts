// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCMetricListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
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
   * [{\\"timestamp\\":1722909960000,\\"instanceId\\":\\"rc-dh2jf9n6j4s14926****\\",\\"userId\\":\\"1695619988087373\\",\\"Minimum\\":0.097,\\"Maximum\\":0.097,\\"Average\\":0.097},{\\"timestamp\\":1722910020000,\\"instanceId\\":\\"rc-dh2jf9n6j4s14926****\\",\\"userId\\":\\"1695619988087373\\",\\"Minimum\\":0.093,\\"Maximum\\":0.093,\\"Average\\":0.093}]
   */
  datapoints?: string;
  /**
   * @remarks
   * The message that is returned for the request.
   * 
   * >  If the request is successful, **Successful** is returned. If the request fails, an error message that contains information such as an error code is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * 6178f1825f9fb76ce0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The statistical period of the monitoring data.
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
   * EA2D4F34-01A7-46EB-A339-D80882135206
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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

