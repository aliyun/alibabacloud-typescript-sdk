// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSecurityInfoPreferenceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow CloudSSO users in the directory to manage their security email addresses in the CloudSSO user portal, including setting, modifying, and deleting security email addresses, and sending verification emails. Valid values:
   * 
   * - true: allowed.
   * - false: not allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  allowUserManageSecurityEmail?: boolean;
  /**
   * @remarks
   * The directory ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      allowUserManageSecurityEmail: 'AllowUserManageSecurityEmail',
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserManageSecurityEmail: 'boolean',
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

