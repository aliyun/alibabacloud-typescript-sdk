// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserExclusiveCredentialResponseBody extends $dara.Model {
  /**
   * @example
   * cred_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  credentialId?: string;
  /**
   * @remarks
   * 凭据标识。
   * 
   * @example
   * credential_identifier_test
   */
  credentialIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      credentialId: 'credentialId',
      credentialIdentifier: 'credentialIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

