// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePluginConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The ID value.
   * 
   * @example
   * 1
   */
  data?: number;
  /**
   * @remarks
   * The placeholder in the dynamic error message.
   * 
   * @example
   * code
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 500
   */
  errorCode?: string;
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
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 03A3E2F4-6804-5663-9D5D-2EC47A1*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'number',
      dynamicMessage: 'string',
      errorCode: 'string',
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

