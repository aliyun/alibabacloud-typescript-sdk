// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessWarrantRequest extends $dara.Model {
  /**
   * @example
   * a123
   */
  appId?: string;
  /**
   * @example
   * e32fac43df0b0b0be32fac43df0b0b0b
   */
  requestSign?: string;
  /**
   * @example
   * 1701000000
   */
  timestamp?: string;
  /**
   * @example
   * 110.25.23.12
   */
  userClientIp?: string;
  /**
   * @example
   * sn123
   */
  userId?: string;
  /**
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

