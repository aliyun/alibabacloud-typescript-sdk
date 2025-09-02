// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDefaultTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data about the default data category and data sensitivity level template. The data is in the JSON array format.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"gmtModified":1709022365000,"fileName":"default file","isDelete":false,"isDefaultTemplate":true}]
   */
  data?: any;
  /**
   * @remarks
   * The error code.
   * 
   * This parameter is required.
   * 
   * @example
   * 9990030003
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * This parameter is required.
   * 
   * @example
   * Parameter error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * This parameter is required.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 102400001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
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

