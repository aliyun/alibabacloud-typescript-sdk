// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHostShareKeysResponseBodyHostShareKeys extends $dara.Model {
  /**
   * @remarks
   * The number of the associated host accounts.
   * 
   * @example
   * 1
   */
  hostAccountCount?: number;
  /**
   * @remarks
   * The shared key ID.
   * 
   * @example
   * 10247
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
   * The time when the shared key was last modified. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1644806406
   */
  lastModifyKeyAt?: number;
  /**
   * @remarks
   * The fingerprint of the private key.
   * 
   * @example
   * ****
   */
  privateKeyFingerPrint?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountCount: 'HostAccountCount',
      hostShareKeyId: 'HostShareKeyId',
      hostShareKeyName: 'HostShareKeyName',
      lastModifyKeyAt: 'LastModifyKeyAt',
      privateKeyFingerPrint: 'PrivateKeyFingerPrint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountCount: 'number',
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

