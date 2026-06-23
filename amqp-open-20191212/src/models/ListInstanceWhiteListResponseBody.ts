// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of `200` indicates a successful request.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data, which is an array of whitelist entries. Each object in the array contains an `id` (a sequence number used for deletion) and a `value` (the actual entry, such as an IP address range or a VPC ID).
   * 
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
   * @remarks
   * The error message returned on a failed request.
   * 
   * @example
   * xxx failed,xxxx
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request. Use this ID to troubleshoot issues.
   * 
   * @example
   * 6DC68EC9-0E76-5435-B8C0-FF9492B4****
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code. A value of `200` indicates a successful request.
   * 
   * @example
   * 200
   */
  statusCode?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
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

