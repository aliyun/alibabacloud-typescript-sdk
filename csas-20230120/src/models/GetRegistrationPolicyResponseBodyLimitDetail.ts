// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRegistrationPolicyResponseBodyLimitDetailLimitCount } from "./GetRegistrationPolicyResponseBodyLimitDetailLimitCount";


export class GetRegistrationPolicyResponseBodyLimitDetail extends $dara.Model {
  /**
   * @example
   * Personal
   */
  deviceBelong?: string;
  limitCount?: GetRegistrationPolicyResponseBodyLimitDetailLimitCount;
  /**
   * @example
   * LimitDiff
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
      limitCount: GetRegistrationPolicyResponseBodyLimitDetailLimitCount,
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

