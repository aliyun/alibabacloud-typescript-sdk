// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessWarrantRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey of the project assigned by the merchant.
   * 
   * @example
   * a123
   */
  appId?: string;
  /**
   * @remarks
   * The signature of the authorization API parameters.
   * 
   * @example
   * e32fac43df0b0b0be32fac43df0b0b0b
   */
  requestSign?: string;
  /**
   * @remarks
   * The 10-digit timestamp in seconds when the merchant initiates the authorization request.
   * 
   * @example
   * 1701000000
   */
  timestamp?: string;
  /**
   * @remarks
   * The public IP address of the client device.
   * 
   * @example
   * 110.25.23.12
   */
  userClientIp?: string;
  /**
   * @remarks
   * The ID of the merchant user.
   * 
   * @example
   * sn123
   */
  userId?: string;
  /**
   * @remarks
   * The validity period of the authorization ID, in seconds.
   * 
   * @example
   * 7200
   */
  warrantAvailable?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      requestSign: 'requestSign',
      timestamp: 'timestamp',
      userClientIp: 'userClientIp',
      userId: 'userId',
      warrantAvailable: 'warrantAvailable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      requestSign: 'string',
      timestamp: 'string',
      userClientIp: 'string',
      userId: 'string',
      warrantAvailable: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

