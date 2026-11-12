// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The fingerprint of the key pair.
   * 
   * @example
   * If2K1ItazA4GlKkWCEhdRj8Wd6czAvK9*****
   */
  fingerprint?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * ceshi
   */
  keyPairName?: string;
  /**
   * @remarks
   * The private key.
   * 
   * @example
   * ***
   */
  privateKey?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fingerprint: 'Fingerprint',
      keyPairName: 'KeyPairName',
      privateKey: 'PrivateKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerprint: 'string',
      keyPairName: 'string',
      privateKey: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

