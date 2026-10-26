// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConsumerGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The fault code.
   * 
   * @example
   * InvalidDeliveryOrderType
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The dynamic fault code.
   * 
   * @example
   * DeliveryOrderType
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic fault message.
   * 
   * @example
   * deliveryOrderType
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
   * The fault message.
   * 
   * @example
   * Parameter deliveryOrderType is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Each request has a unique ID that you can use to troubleshoot and locate issues.
   * 
   * @example
   * C7F94090-3358-506A-97DC-34BC803C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the execution succeeded.
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

