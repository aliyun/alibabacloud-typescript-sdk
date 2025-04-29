// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItemsIpControlPolicyItem } from "./DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItemsIpControlPolicyItem";


export class DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItems extends $dara.Model {
  ipControlPolicyItem?: DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItemsIpControlPolicyItem[];
  static names(): { [key: string]: string } {
    return {
      ipControlPolicyItem: 'IpControlPolicyItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlPolicyItem: { 'type': 'array', 'itemType': DescribeIpControlPolicyItemsResponseBodyIpControlPolicyItemsIpControlPolicyItem },
    };
  }

  validate() {
    if(Array.isArray(this.ipControlPolicyItem)) {
      $dara.Model.validateArray(this.ipControlPolicyItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

