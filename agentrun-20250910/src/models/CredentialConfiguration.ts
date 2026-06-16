// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialConfiguration extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for the credential.
   * 
   * @example
   * deepagent-key
   */
  credentialName?: string;
  static names(): { [key: string]: string } {
    return {
      credentialName: 'credentialName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

