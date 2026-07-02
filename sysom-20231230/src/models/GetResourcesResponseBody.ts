// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 2354
   */
  total?: number;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * Kbytes
   */
  unit?: string;
  /**
   * @remarks
   * The resource usage.
   * 
   * @example
   * 100
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      total: 'total',
      unit: 'unit',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      unit: 'string',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - `code == Success` indicates that the authorization is successful.
   * - Other status codes indicate that the authorization failed. Check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetResourcesResponseBodyData;
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error information.
   * 
   * @example
   * result: code=1 msg=(Request failed, status_code != 200)
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
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetResourcesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

