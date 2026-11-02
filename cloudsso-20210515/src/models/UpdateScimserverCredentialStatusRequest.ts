// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSCIMServerCredentialStatusRequest extends $dara.Model {
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
   * The directory ID.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The status of the SCIM credential. Valid values:
   * 
   * - Enabled: Enabled.
   * - Disabled: Disabled.
   * 
   * @example
   * Disabled
   */
  newStatus?: string;
  static names(): { [key: string]: string } {
    return {
      credentialId: 'CredentialId',
      directoryId: 'DirectoryId',
      newStatus: 'NewStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialId: 'string',
      directoryId: 'string',
      newStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

