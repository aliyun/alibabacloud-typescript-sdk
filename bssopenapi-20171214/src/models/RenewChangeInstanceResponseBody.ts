// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewChangeInstanceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100.100.64.1:8150
   */
  hostId?: string;
  /**
   * @example
   * 202407022550621
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewChangeInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: RenewChangeInstanceResponseBodyData;
  /**
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @example
   * true
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
      data: RenewChangeInstanceResponseBodyData,
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

