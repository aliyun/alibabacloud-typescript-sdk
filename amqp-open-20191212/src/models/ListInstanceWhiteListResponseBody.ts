// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceWhiteListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * "Data": [
   *     {
   *       "id": 454,
   *       "value": "10.1.2.1/30"
   *     }
   *   ]
   */
  data?: any;
  /**
   * @example
   * xxx failed,xxxx
   */
  message?: string;
  /**
   * @example
   * 6DC68EC9-0E76-5435-B8C0-FF9492B4****
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  statusCode?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      message: 'string',
      requestId: 'string',
      statusCode: 'string',
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

