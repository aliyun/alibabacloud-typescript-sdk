// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * mse-cn-st21ri2****
   */
  instanceId?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * Order ID.
   * 
   * @example
   * 20574710974****
   */
  orderId?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * dc63-465d-8ef5-20dc18af****
   */
  requestId?: string;
  /**
   * @remarks
   * Request result, with the following values:
   * - `true`: Request succeeded.
   * - `false`: Request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      instanceId: 'InstanceId',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      instanceId: 'string',
      message: 'string',
      orderId: 'string',
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

