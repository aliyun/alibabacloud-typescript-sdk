// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTraceAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response in JSON format, including the HTTP status code, error code, response message, and trace ID.
   * 
   * @example
   * "{\\\\"code\\\\":200,\\\\"data\\\\":\\\\"{\\\\\\\\\\"code\\\\\\\\\\":200,\\\\\\\\\\"data\\\\\\\\\\":true,\\\\\\\\\\"errorCode\\\\\\\\\\":\\\\\\\\\\"The application is deleted\\\\\\\\\\",\\\\\\\\\\"message\\\\\\\\\\":\\\\\\\\\\"The application is deleted\\\\\\\\\\",\\\\\\\\\\"success\\\\\\\\\\":true,\\\\\\\\\\"traceId\\\\\\\\\\":\\\\\\\\\\"0bc0594d15954826692915817e\\*\\*\\*\\*\\\\\\\\\\"}\\\\",\\\\"errorCode\\\\":\\\\"The application is deleted\\\\",\\\\"message\\\\":\\\\"The application is deleted\\\\",\\\\"success\\\\":true,\\\\"traceId\\\\":\\\\"0ab2646915954826692568137d\\*\\*\\*\\*\\\\"}
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Internal error. Please try again. Contact the DingTalk service account if the issue                              persists after multiple retries.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 46355DD8-FC56-40C5-BFC6-269DE4F9****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * true: The request was successful.
   * 
   * false: The request failed.
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
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

