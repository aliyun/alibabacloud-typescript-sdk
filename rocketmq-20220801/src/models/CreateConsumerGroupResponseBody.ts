// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidConsumerGroupId
   */
  code?: string;
  /**
   * @remarks
   * The result data that is returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ConsumerGroupId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * consumerGroupId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter consumerGroupId is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

