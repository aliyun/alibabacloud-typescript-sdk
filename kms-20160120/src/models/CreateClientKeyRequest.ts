// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the attached application access point (AAP).
   * 
   * This parameter is required.
   * 
   * @example
   * aap_test
   */
  aapName?: string;
  /**
   * @remarks
   * The end time of the validity period of the ClientKey.
   * 
   * The time is specified in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   *  >
   *  >- If you do not specify NotAfter, the default value is the creation time of the ClientKey plus 5 years.
   *  >- If you specify NotAfter, you must also specify NotBefore.
   * 
   * @example
   * 2028-08-31T17:14:33Z
   */
  notAfter?: string;
  /**
   * @remarks
   * The start time of the validity period of the ClientKey.
   * 
   * The time is specified in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   *  >
   *  >- If you do not specify NotBefore, the default value is the creation time of the ClientKey.
   *  >- If you specify NotBefore, you must also specify NotAfter.
   * 
   * @example
   * 2023-08-31T17:14:33Z
   */
  notBefore?: string;
  /**
   * @remarks
   * The passphrase of the ClientKey.
   * 
   * The passphrase must be 8 to 64 characters in length and can contain digits, uppercase and lowercase letters, and special characters such as `~!@#$%^&*?_-`. It must contain at least two of these character types.
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

