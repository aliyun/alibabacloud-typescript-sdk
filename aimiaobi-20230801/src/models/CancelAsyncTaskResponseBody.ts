// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAsyncTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * Business-related data
   * 
   * @example
   * true
   */
  data?: boolean;
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
   * A description of the error.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FB698445-61DA-5361-BF73-1C5F1157E888
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of true indicates that the request was successful. A value of false indicates that the request failed.
   * 
   * @example
   * True
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
      data: 'boolean',
      httpStatusCode: 'number',
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

