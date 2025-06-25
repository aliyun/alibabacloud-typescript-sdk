// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyAppInstanceGroupAttributeRequestStoragePolicyUserProfile } from "./ModifyAppInstanceGroupAttributeRequestStoragePolicyUserProfile";
import { ModifyAppInstanceGroupAttributeRequestStoragePolicyUserProfileFollow } from "./ModifyAppInstanceGroupAttributeRequestStoragePolicyUserProfileFollow";


export class ModifyAppInstanceGroupAttributeRequestStoragePolicy extends $dara.Model {
  /**
   * @remarks
   * The storage types.
   */
  storageTypeList?: string[];
  /**
   * @remarks
   * The configurations of user data roaming.
   */
  userProfile?: ModifyAppInstanceGroupAttributeRequestStoragePolicyUserProfile;
  userProfileFollow?: ModifyAppInstanceGroupAttributeRequestStoragePolicyUserProfileFollow;
  static names(): { [key: string]: string } {
    return {
      storageTypeList: 'StorageTypeList',
      userProfile: 'UserProfile',
      userProfileFollow: 'UserProfileFollow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageTypeList: { 'type': 'array', 'itemType': 'string' },
      userProfile: ModifyAppInstanceGroupAttributeRequestStoragePolicyUserProfile,
      userProfileFollow: ModifyAppInstanceGroupAttributeRequestStoragePolicyUserProfileFollow,
    };
  }

  validate() {
    if(Array.isArray(this.storageTypeList)) {
      $dara.Model.validateArray(this.storageTypeList);
    }
    if(this.userProfile && typeof (this.userProfile as any).validate === 'function') {
      (this.userProfile as any).validate();
    }
    if(this.userProfileFollow && typeof (this.userProfileFollow as any).validate === 'function') {
      (this.userProfileFollow as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

