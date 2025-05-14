// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyGroupsResponseBodyPolicyGroupModelPolicyRelatedResources extends $dara.Model {
  androidInstanceGroupIds?: string[];
  cloudPhoneMatrixIds?: string[];
  static names(): { [key: string]: string } {
    return {
      androidInstanceGroupIds: 'AndroidInstanceGroupIds',
      cloudPhoneMatrixIds: 'CloudPhoneMatrixIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      cloudPhoneMatrixIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceGroupIds)) {
      $dara.Model.validateArray(this.androidInstanceGroupIds);
    }
    if(Array.isArray(this.cloudPhoneMatrixIds)) {
      $dara.Model.validateArray(this.cloudPhoneMatrixIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

