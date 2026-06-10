// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHostCountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Time point
   * 
   * @example
   * 1725797727754
   */
  time?: number;
  /**
   * @remarks
   * Quantity
   * 
   * @example
   * 5
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'time',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
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

export class GetHostCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code  
   * - If `code == Success`, authorization succeeded.  
   * - Other status codes indicate authorization failed. When authorization fails, view the `message` field to obtain detailed error information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: GetHostCountResponseBodyData[];
  /**
   * @remarks
   * Error message  
   * - If `code == Success`, this field is empty.  
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * “”
   */
  message?: string;
  /**
   * @remarks
   * Request RequestId
   * 
   * @example
   * 43A910E9-A739-525E-855D-A32C257F1826
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of entries.
   * 
   * @example
   * 3
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
      data: { 'type': 'array', 'itemType': GetHostCountResponseBodyData },
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

