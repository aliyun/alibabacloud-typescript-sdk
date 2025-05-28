// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConsumerGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * InvalidDeliveryOrderType
   */
  code?: string;
  /**
   * @remarks
   * The result returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Dynamic error code.
   * 
   * @example
   * xxx
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message.
   * 
   * @example
   * xxx
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Parameter deliveryOrderType is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is unique for each request and can be used for troubleshooting and problem localization.
   * 
   * @example
   * C7F94090-3358-506A-97DC-34BC803C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the execution was successful.
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

