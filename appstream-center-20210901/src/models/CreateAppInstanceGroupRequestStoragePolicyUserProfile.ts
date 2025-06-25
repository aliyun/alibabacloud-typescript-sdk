// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceGroupRequestStoragePolicyUserProfile extends $dara.Model {
  remoteStoragePath?: string;
  remoteStorageType?: string;
  userProfileSwitch?: boolean;
  static names(): { [key: string]: string } {
    return {
      remoteStoragePath: 'RemoteStoragePath',
      remoteStorageType: 'RemoteStorageType',
      userProfileSwitch: 'UserProfileSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remoteStoragePath: 'string',
      remoteStorageType: 'string',
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

