// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data. It includes the order ID and instance ID. For example:
   * 
   * ```json
   * "Data": {
   *     "instanceId": "amqp-cn-xxxxx",
   *     "orderId": 22222
   *   }
   * ```
   * 
   * @example
   * {\\"instanceId\\": \\"rabbitmq-serverless-cn-lf63qsjlf06\\", \\"orderId\\": 234170302080010}
   */
  data?: any;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * InstanceNotExist
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Each request has a unique ID. Use this ID to troubleshoot issues.
   * 
   * @example
   * 628705FD-03EE-4ABE-BB21-E1672960***
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
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
  success?: string;
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
      code: 'number',
      data: 'any',
      message: 'string',
      requestId: 'string',
      statusCode: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

