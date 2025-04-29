// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecialsSpecial } from "./DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecialsSpecial";


export class DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecials extends $dara.Model {
  special?: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecialsSpecial[];
  static names(): { [key: string]: string } {
    return {
      special: 'Special',
    };
  }

  static types(): { [key: string]: any } {
    return {
      special: { 'type': 'array', 'itemType': DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecialsSpecial },
    };
  }

  validate() {
    if(Array.isArray(this.special)) {
      $dara.Model.validateArray(this.special);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

