// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRegistrationPoliciesResponseBodyPoliciesLimitDetailLimitCount } from "./ListRegistrationPoliciesResponseBodyPoliciesLimitDetailLimitCount";


export class ListRegistrationPoliciesResponseBodyPoliciesLimitDetail extends $dara.Model {
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  limitCount?: ListRegistrationPoliciesResponseBodyPoliciesLimitDetailLimitCount;
  /**
   * @example
   * LimitAll
   */
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBelong: 'DeviceBelong',
      limitCount: 'LimitCount',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBelong: 'string',
      limitCount: ListRegistrationPoliciesResponseBodyPoliciesLimitDetailLimitCount,
      limitType: 'string',
    };
  }

  validate() {
    if(this.limitCount && typeof (this.limitCount as any).validate === 'function') {
      (this.limitCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

