// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the key pair. The name must meet the following requirements:
   * 
   * - The name must be 2 to 128 characters in length.
   * - The name must start with a letter or a Chinese character, and cannot start with `http://` or `https://`.
   * - The name can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * Only one key pair name can be specified.
   * 
   * This parameter is required.
   * 
   * @example
   * TestKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The public key content of the key pair. Only one public key can be specified.
   * 
   * This parameter is required.
   * 
   * @example
   * ssh-rsa AAAAB****
   */
  publicKeyBody?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      publicKeyBody: 'PublicKeyBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      publicKeyBody: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

