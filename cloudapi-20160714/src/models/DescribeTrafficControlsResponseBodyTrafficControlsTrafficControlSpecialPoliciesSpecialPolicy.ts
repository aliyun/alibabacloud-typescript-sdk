// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecials } from "./DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecials";


export class DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicy extends $dara.Model {
  /**
   * @remarks
   * The type of the special throttling policy. Valid values:
   * 
   * *   **APP**
   * *   **USER**
   * 
   * @example
   * USER
   */
  specialType?: string;
  /**
   * @remarks
   * The returned information about a special throttling policy. It is an array consisting of Special data.
   */
  specials?: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecials;
  static names(): { [key: string]: string } {
    return {
      specialType: 'SpecialType',
      specials: 'Specials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specialType: 'string',
      specials: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPoliciesSpecialPolicySpecials,
    };
  }

  validate() {
    if(this.specials && typeof (this.specials as any).validate === 'function') {
      (this.specials as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

