// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The site of the execution host.
   * 
   * @example
   * cn
   */
  hostId?: string;
  /**
   * @remarks
   * The ID of the refund order that is returned only if the instance is unsubscribed from.
   * 
   * @example
   * 2100000000***
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
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

export class RefundInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * ResourceNotExists
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: RefundInstanceResponseBodyData;
  /**
   * @remarks
   * The description of the execution result.
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
   * UUID
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RefundInstanceResponseBodyData,
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

