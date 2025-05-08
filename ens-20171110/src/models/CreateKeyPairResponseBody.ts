// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see [RFC 4716](https://tools.ietf.org/html/rfc4716).
   * 
   * @example
   * 7880c1ad4687fdbf7a6da2131****
   */
  keyPairFingerPrint?: string;
  /**
   * @remarks
   * The ID of the SSH key pair.
   * 
   * @example
   * ssh-5lywanlkih1zo9yl8eg****
   */
  keyPairId?: string;
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
   * The private key of the key pair. The private key is encoded with PEM in the PKCS#8 format.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY-----\\nMIIEogIBAAKCAQE****
   */
  privateKeyBody?: string;
  /**
   * @remarks
   * The ID of the request.
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

