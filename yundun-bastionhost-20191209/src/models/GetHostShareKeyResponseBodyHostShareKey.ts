// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHostShareKeyResponseBodyHostShareKey extends $dara.Model {
  /**
   * @remarks
   * The ID of the shared key.
   * 
   * @example
   * 10427
   */
  hostShareKeyId?: string;
  /**
   * @remarks
   * The name of the shared key.
   * 
   * @example
   * name
   */
  hostShareKeyName?: string;
  /**
   * @remarks
   * The time when the information about the shared key was last modified. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1644287246
   */
  lastModifyKeyAt?: number;
  /**
   * @remarks
   * The fingerprint of the private key.
   * 
   * @example
   * ***
   */
  privateKeyFingerPrint?: string;
  static names(): { [key: string]: string } {
    return {
      hostShareKeyId: 'HostShareKeyId',
      hostShareKeyName: 'HostShareKeyName',
      lastModifyKeyAt: 'LastModifyKeyAt',
      privateKeyFingerPrint: 'PrivateKeyFingerPrint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostShareKeyId: 'string',
      hostShareKeyName: 'string',
      lastModifyKeyAt: 'number',
      privateKeyFingerPrint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

