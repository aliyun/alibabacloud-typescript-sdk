// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAppInstanceGroupRequestStoragePolicyUserProfile } from "./CreateAppInstanceGroupRequestStoragePolicyUserProfile";


export class CreateAppInstanceGroupRequestStoragePolicy extends $dara.Model {
  storageTypeList?: string[];
  userProfile?: CreateAppInstanceGroupRequestStoragePolicyUserProfile;
  static names(): { [key: string]: string } {
    return {
      storageTypeList: 'StorageTypeList',
      userProfile: 'UserProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageTypeList: { 'type': 'array', 'itemType': 'string' },
      userProfile: CreateAppInstanceGroupRequestStoragePolicyUserProfile,
    };
  }

  validate() {
    if(Array.isArray(this.storageTypeList)) {
      $dara.Model.validateArray(this.storageTypeList);
    }
    if(this.userProfile && typeof (this.userProfile as any).validate === 'function') {
      (this.userProfile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

