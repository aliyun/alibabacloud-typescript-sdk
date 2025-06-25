// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppInstanceGroupAttributeRequestStoragePolicyUserProfile extends $dara.Model {
  /**
   * @remarks
   * The ID of the File Storage NAS (NAS) file system used to store user data.
   * 
   * @example
   * 06ae94****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * Specifies whether user data roaming is enabled.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  userProfileSwitch?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      userProfileSwitch: 'UserProfileSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      userProfileSwitch: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

