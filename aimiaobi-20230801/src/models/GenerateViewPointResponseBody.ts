// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateViewPointResponseBodyData extends $dara.Model {
  point?: string;
  static names(): { [key: string]: string } {
    return {
      point: 'Point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      point: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateViewPointResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GenerateViewPointResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 94512A33-8EC1-5452-A793-5C91F18ED2F0
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
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GenerateViewPointResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

