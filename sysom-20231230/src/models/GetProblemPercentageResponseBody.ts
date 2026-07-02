// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProblemPercentageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Abnormal item type.
   * 
   * @example
   * saturation
   */
  type?: string;
  /**
   * @remarks
   * Number of abnormal items.
   * 
   * @example
   * 5
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetProblemPercentageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * - If `code == Success`, the authorization is successful.
   * - Other status codes indicate authorization failure. Check the `message` field for detailed error information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: GetProblemPercentageResponseBodyData[];
  /**
   * @remarks
   * Error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error information.
   * 
   * @example
   * result: code=1 msg=(Request failed, status_code != 200)
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 35F91AAB-5FDF-5A22-B211-C7C6B00817D0
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of data entries.
   * 
   * @example
   * 19
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
      data: { 'type': 'array', 'itemType': GetProblemPercentageResponseBodyData },
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

