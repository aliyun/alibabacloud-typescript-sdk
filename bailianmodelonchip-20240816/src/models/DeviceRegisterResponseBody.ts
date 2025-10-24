// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeviceRegisterResponseBodyData extends $dara.Model {
  appId?: string;
  /**
   * @example
   * 991fa52b7935aaa33536e05d4f4b5003
   */
  deviceName?: string;
  /**
   * @example
   * e2e928e8244f45ab30ec6ba9f9
   */
  nonce?: string;
  /**
   * @example
   * 1748312544852
   */
  responseTime?: string;
  /**
   * @example
   * s8wPO/w79jP7sz6OaHkixAje2GmgzmZiCuCZZ+J8w77ICTyqD30lL6rUhnXwwx4MyGF62DRPFnpXtJ6c5mlmt6QdML3FkjGn+i/wR5T6QMkVDW6YRPWsx3jkIWRQ2sDnmVNBtixo2s9w3RJrnddRzVCaR/WeLOfiVLWcrLcJditzO/1YXBZ9vuRKQ4iperfhZvw372N/m8/1qtjJl+FUe2+wxK6RMxr03K7R
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      deviceName: 'deviceName',
      nonce: 'nonce',
      responseTime: 'responseTime',
      signature: 'signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deviceName: 'string',
      nonce: 'string',
      responseTime: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeviceRegisterResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: DeviceRegisterResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 52548360-B3AA-55EA-893F-48C16470F64A
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeviceRegisterResponseBodyData,
      httpStatusCode: 'number',
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

