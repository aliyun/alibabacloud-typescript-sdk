// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveInstanceWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned for the request.
   * 
   * @example
   * true
   */
  data?: any;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * can not find resource: instanceId:amqp-cn-xxx, whiteListItemId:420, whiteListType:1
   */
  message?: string;
  /**
   * @remarks
   * The unique ID for the request.
   * 
   * @example
   * 92385FD2-624A-48C9-8FB5-753F2AFA***
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates the request was successful.
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

