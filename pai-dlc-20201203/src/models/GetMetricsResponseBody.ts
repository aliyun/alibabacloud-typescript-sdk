// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetricsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * [{\\"Content\\": \\"\\", \\"OperationName\\": \\"purchase\\", \\"Success\\": 1, \\"Id\\": \\"217\\", \\"LogDatetime\\": 1687679582923}]
   */
  dataPoints?: string;
  /**
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
   * @example
   * 5
   */
  period?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
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

