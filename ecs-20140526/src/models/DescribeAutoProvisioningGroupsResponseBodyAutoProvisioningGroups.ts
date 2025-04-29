// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroup } from "./DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroup";


export class DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroups extends $dara.Model {
  autoProvisioningGroup?: DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroup[];
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroup: 'AutoProvisioningGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroup: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupsResponseBodyAutoProvisioningGroupsAutoProvisioningGroup },
    };
  }

  validate() {
    if(Array.isArray(this.autoProvisioningGroup)) {
      $dara.Model.validateArray(this.autoProvisioningGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

