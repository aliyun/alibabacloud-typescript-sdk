// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
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

