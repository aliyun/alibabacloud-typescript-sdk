// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRetcodeDataByQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned for the request. Valid values:
   * 
   * *   2XX: The request was successful.
   * *   3XX: A redirection message was returned.
   * *   4XX: The request was invalid.
   * *   5XX: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The Browser Monitoring data returned.
   * 
   * @example
   * {"total":0,"auth":false,"pageSize":20,"completed":true,"page":1,"items":[]}
   */
  data?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * Internal error. Please try again. Contact the DingTalk service account if the issue                              persists after multiple retries.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2A0CEDF1-06FE-44AC-8E21-21A5BE65****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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
      code: 'string',
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

