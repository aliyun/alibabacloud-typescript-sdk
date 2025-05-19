// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMetricListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 1000
   */
  cursor?: string;
  /**
   * @example
   * [{"timestamp":1548777660000,"userId":"123","instanceId":"i-abc","Minimum":9.92,"Average":9.92,"Maximum":9.92}]
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
   * 3121AE7D-4AFF-4C25-8F1D-C8226EBB1F42
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

