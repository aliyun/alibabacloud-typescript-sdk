// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data, which includes orderId and instanceId. Sample returned data:
   * 
   * ```json
   * "Data": {
   *     "instanceId": "amqp-cn-xxxxx",
   *     "orderId": 22222
   *   }
   * ```
   * 
   * @example
   * {“instanceId”: “amqp-cn-jtexxxxx”, “orderId”: 2222222}
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
   * The request ID.
   * 
   * @example
   * 628705FD-03EE-4ABE-BB21-E1672960***
   */
  requestId?: string;
  /**
   * @remarks
   * The response code.
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

