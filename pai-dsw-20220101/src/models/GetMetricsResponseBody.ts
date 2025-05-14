// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetricsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  datapoints?: string;
  /**
   * @example
   * Succeed
   */
  message?: string;
  /**
   * @example
   * 15761485350009dd70bb64cff1f0fff750b08ffff073be5fb1e785e2b020f1a949d5ea14aea7fed82f01dd8****
   */
  nextToken?: string;
  /**
   * @example
   * 60
   */
  period?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
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

