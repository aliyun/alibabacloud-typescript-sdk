// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the key pair. The name must conform to the following naming conventions:
   * 
   * *   The name must be 2 to 128 characters in length, and can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * *   It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * TestKeyPairName
   */
  keyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

