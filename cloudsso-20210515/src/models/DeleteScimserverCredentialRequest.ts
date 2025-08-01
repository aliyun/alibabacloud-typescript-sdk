// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSCIMServerCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SCIM credential.
   * 
   * @example
   * scimcred-004whl0kvfwcypbi****
   */
  credentialId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      credentialId: 'CredentialId',
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialId: 'string',
      directoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

