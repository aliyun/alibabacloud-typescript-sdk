// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMetricLastResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 10000
   */
  cursor?: string;
  /**
   * @example
   * [{"timestamp":1548900600000,"userId":"000","instanceId":"abc","Minimum":6.3,"Average":6.3,"Maximum":6.3}]
   */
  datapoints?: string;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 60
   */
  period?: string;
  /**
   * @example
   * 021472A6-25E3-4094-8D00-BA4B6A5486C3
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cursor: 'Cursor',
      datapoints: 'Datapoints',
      message: 'Message',
      period: 'Period',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      cursor: 'string',
      datapoints: 'string',
      message: 'string',
      period: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

