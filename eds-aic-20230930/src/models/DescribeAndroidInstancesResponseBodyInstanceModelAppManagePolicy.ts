// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAndroidInstancesResponseBodyInstanceModelAppManagePolicy extends $dara.Model {
  appManagePolicyId?: string;
  appManagePolicyName?: string;
  static names(): { [key: string]: string } {
    return {
      appManagePolicyId: 'AppManagePolicyId',
      appManagePolicyName: 'AppManagePolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appManagePolicyId: 'string',
      appManagePolicyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

