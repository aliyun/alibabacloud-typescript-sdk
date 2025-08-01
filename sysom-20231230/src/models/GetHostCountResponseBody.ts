// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHostCountResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1725797727754
   */
  time?: number;
  /**
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
   * @example
   * Success
   */
  code?: string;
  data?: GetHostCountResponseBodyData[];
  /**
   * @example
   * “”
   */
  message?: string;
  /**
   * @example
   * 43A910E9-A739-525E-855D-A32C257F1826
   */
  requestId?: string;
  /**
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

