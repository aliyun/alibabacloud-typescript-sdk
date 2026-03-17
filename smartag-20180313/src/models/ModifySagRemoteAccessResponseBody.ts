// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySagRemoteAccessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message returned after calling the API.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The remote access IP address.
   * 
   * @example
   * 10.10.10.2
   */
  remoteAccessIp?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4FF203D7-462D-498E-94F9-2B2FA462DD23
   */
  requestId?: string;
  /**
   * @remarks
   * The SN of the SAG device.
   * 
   * @example
   * sag61a344**
   */
  serialNumber?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      remoteAccessIp: 'RemoteAccessIp',
      requestId: 'RequestId',
      serialNumber: 'SerialNumber',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      remoteAccessIp: 'string',
      requestId: 'string',
      serialNumber: 'string',
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

