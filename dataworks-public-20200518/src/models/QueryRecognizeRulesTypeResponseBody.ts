// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecognizeRulesTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data about the built-in sensitive data identification rule that is used to configure a sensitive field. The data is in the JSON format.
   * 
   * @example
   * {   "HttpStatusCode": 200,   "Data": [     {       "Regular Expression": "1"     },     {       "Recognize Rule": "2"     },     {       "Sample Library": "3"     },     {       "Model": "4"     }   ],   "Success": true }
   */
  data?: any;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 9990030003
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Missing parameter
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 10000001
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
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

