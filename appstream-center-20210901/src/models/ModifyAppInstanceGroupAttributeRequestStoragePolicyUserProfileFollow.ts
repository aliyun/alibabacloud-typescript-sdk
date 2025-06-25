// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppInstanceGroupAttributeRequestStoragePolicyUserProfileFollow extends $dara.Model {
  fileSystemId?: string;
  profileFollowSwitch?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      profileFollowSwitch: 'ProfileFollowSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      profileFollowSwitch: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

