// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicy } from "./DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicy";


export class DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPolicies extends $dara.Model {
  specialPolicy?: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicy[];
  static names(): { [key: string]: string } {
    return {
      specialPolicy: 'SpecialPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specialPolicy: { 'type': 'array', 'itemType': DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicy },
    };
  }

  validate() {
    if(Array.isArray(this.specialPolicy)) {
      $dara.Model.validateArray(this.specialPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

