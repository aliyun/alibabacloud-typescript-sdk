// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the key pair. The name must conform to the following naming conventions:
   * 
   * *   The name must be 2 to 128 characters in length.
   * *   The name must start with a letter but cannot start with `http://` or `https://`.
   * *   The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * You can specify the name of only one key pair.
   * 
   * This parameter is required.
   * 
   * @example
   * TestKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The public key of the key pair. You can specify only one public key.
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

