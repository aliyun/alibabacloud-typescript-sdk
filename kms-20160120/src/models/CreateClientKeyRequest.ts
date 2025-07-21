// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **CreateClientKey**.
   * 
   * This parameter is required.
   * 
   * @example
   * aap_test
   */
  aapName?: string;
  /**
   * @remarks
   * The encryption password of the client key.
   * 
   * The password must be 8 to 64 characters in length and must contain at least two of the following types: digits, letters, and special characters. Special characters include `~ ! @ # $ % ^ & * ? _ -`.
   * 
   * @example
   * 2028-08-31T17:14:33Z
   */
  notAfter?: string;
  /**
   * @remarks
   * The end of the validity period of the client key.
   * 
   * Specify the time in the ISO 8601 standard. The time must be in UTC. The time must be in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * > 
   * 
   * *   If you do not configure NotAfter, the default value is the time when the client key was created plus five years.
   * *   If you configure NotAfter, you must configure NotBefore.
   * 
   * @example
   * 2023-08-31T17:14:33Z
   */
  notBefore?: string;
  /**
   * @remarks
   * The name of the AAP.
   * 
   * This parameter is required.
   * 
   * @example
   * bcfefe15-46f0****
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      aapName: 'AapName',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aapName: 'string',
      notAfter: 'string',
      notBefore: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

