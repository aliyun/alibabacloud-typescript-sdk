// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHostShareKeyResponseBodyHostShareKey extends $dara.Model {
  /**
   * @remarks
   * The ID of the host shared key.
   * 
   * @example
   * 10427
   */
  hostShareKeyId?: string;
  /**
   * @remarks
   * The name of the host shared key.
   * 
   * @example
   * name
   */
  hostShareKeyName?: string;
  /**
   * @remarks
   * The time when the host shared key was last modified, in seconds (UNIX timestamp format).
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
   * aa:10:f5:21:7f:8b:3e:86:b0:8b:f0:******
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

export class GetHostShareKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the shared key.
   */
  hostShareKey?: GetHostShareKeyResponseBodyHostShareKey;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostShareKey: 'HostShareKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostShareKey: GetHostShareKeyResponseBodyHostShareKey,
      requestId: 'string',
    };
  }

  validate() {
    if(this.hostShareKey && typeof (this.hostShareKey as any).validate === 'function') {
      (this.hostShareKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

