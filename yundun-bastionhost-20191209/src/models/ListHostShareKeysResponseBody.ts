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

export class ListHostShareKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the shared keys.
   */
  hostShareKeys?: ListHostShareKeysResponseBodyHostShareKeys[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the shared keys.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostShareKeys: 'HostShareKeys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostShareKeys: { 'type': 'array', 'itemType': ListHostShareKeysResponseBodyHostShareKeys },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hostShareKeys)) {
      $dara.Model.validateArray(this.hostShareKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

