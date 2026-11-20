// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidVpcOrVSwitch.NotAvailable
   */
  code?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * hgpostcn-cn-xxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The detailed error message.
   * 
   * @example
   * InvalidVpcOrVSwitch.NotAvailable
   */
  message?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 217523224780172
   */
  orderId?: string;
  /**
   * @remarks
   * Indicates whether the instance was created. Valid values:  
   * - true: The instance was created.
   * - false: The instance failed to be created.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
      orderId: 'OrderId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
      orderId: 'string',
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

export class CreateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: CreateInstanceResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9CC37B9F-F4B4-5FF1-939B-AEE78DC70130
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateInstanceResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

