// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716.
   * 
   * @example
   * fdaf8ff7a756ef843814fc****
   */
  keyPairFingerPrint?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * TestKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairFingerPrint: 'KeyPairFingerPrint',
      keyPairName: 'KeyPairName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairFingerPrint: 'string',
      keyPairName: 'string',
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

