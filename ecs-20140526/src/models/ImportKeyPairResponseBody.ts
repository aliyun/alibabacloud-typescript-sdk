// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The fingerprint of the key pair. The MD5 message-digest algorithm is used based on the public key fingerprint format defined in RFC 4716.
   * 
   * @example
   * 89:f0:ba:62:ac:b8:aa:e1:61:5e:fd:81:69:86:6d:6b:f0:c0:5a:**
   */
  keyPairFingerPrint?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * testKeyPairName
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

