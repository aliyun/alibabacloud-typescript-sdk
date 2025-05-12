// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserProfilePathRulesResponseBodyUserProfilePathRule } from "./DescribeUserProfilePathRulesResponseBodyUserProfilePathRule";


export class DescribeUserProfilePathRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A87DBB05-653A-5E4B-B72B-5F4A1E07****
   */
  requestId?: string;
  /**
   * @remarks
   * The directory blacklist and whitelist.
   */
  userProfilePathRule?: DescribeUserProfilePathRulesResponseBodyUserProfilePathRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProfilePathRule: 'UserProfilePathRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProfilePathRule: DescribeUserProfilePathRulesResponseBodyUserProfilePathRule,
    };
  }

  validate() {
    if(this.userProfilePathRule && typeof (this.userProfilePathRule as any).validate === 'function') {
      (this.userProfilePathRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

