// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserExclusiveCredentialResponseBody extends $dara.Model {
  credentialCiphertext?: string;
  /**
   * @remarks
   * The credential ID.
   * 
   * @example
   * cred_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  credentialId?: string;
  /**
   * @remarks
   * The credential identifier.
   * 
   * @example
   * credential_identifier_test
   */
  credentialIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      credentialCiphertext: 'credentialCiphertext',
      credentialId: 'credentialId',
      credentialIdentifier: 'credentialIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialCiphertext: 'string',
      credentialId: 'string',
      credentialIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

