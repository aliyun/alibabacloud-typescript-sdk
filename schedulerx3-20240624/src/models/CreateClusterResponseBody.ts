// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   */
  clusterId?: string;
  /**
   * @remarks
   * The order ID.
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   */
  code?: number;
  data?: CreateClusterResponseBodyData;
  /**
   * @remarks
   * The error code.
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request.
   * You can use this ID for troubleshooting.
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the request. Valid values:
   * - true: The request was successful.
   * - false: The request failed.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateClusterResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

