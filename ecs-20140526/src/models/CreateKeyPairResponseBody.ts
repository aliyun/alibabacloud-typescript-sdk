// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see [RFC 4716](https://tools.ietf.org/html/rfc4716).
   * 
   * @example
   * 89:f0:ba:62:ac:b8:aa:e1:61:5e:fd:81:69:86:6d:6b:f0:c0:5a:**
   */
  keyPairFingerPrint?: string;
  /**
   * @remarks
   * The ID of the key pair.
   * 
   * @example
   * ssh-bp67acfmxazb4p****
   */
  keyPairId?: string;
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
   * The private key of the key pair. The private key is encoded with PEM in the PKCS#8 format.
   * 
   * @example
   * MIIEpAIBAAKCAQEAtReyMzLIcBH78EV2zj****
   */
  privateKeyBody?: string;
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
      keyPairId: 'KeyPairId',
      keyPairName: 'KeyPairName',
      privateKeyBody: 'PrivateKeyBody',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairFingerPrint: 'string',
      keyPairId: 'string',
      keyPairName: 'string',
      privateKeyBody: 'string',
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

