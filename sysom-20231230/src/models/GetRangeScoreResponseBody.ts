// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRangeScoreResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The point in time.
   * 
   * @example
   * 1725797727754
   */
  time?: number;
  /**
   * @remarks
   * The metric type.
   * 
   * @example
   * saturation
   */
  type?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 100
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'time',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      type: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRangeScoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - If `code == Success`, the authorization is successful.
   * - Other status codes indicate that the authorization has failed. Check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetRangeScoreResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error information.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 35F91AAB-5FDF-5A22-B211-C7C6B00817D0
   */
  requestId?: string;
  /**
   * @remarks
   * The total amount of data.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetRangeScoreResponseBodyData },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

