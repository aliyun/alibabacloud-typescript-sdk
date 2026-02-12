// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * credential_identifier_test
   */
  credentialIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      credentialIdentifier: 'credentialIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

