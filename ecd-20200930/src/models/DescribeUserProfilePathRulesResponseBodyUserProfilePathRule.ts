// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRules } from "./DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRules";


export class DescribeUserProfilePathRulesResponseBodyUserProfilePathRule extends $dara.Model {
  /**
   * @remarks
   * The desktop group ID.
   * 
   * @example
   * dg-4i8fvpv6tfs03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The directory rules.
   */
  rules?: DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRules[];
  /**
   * @remarks
   * The directory type that is configured for the directory.
   * 
   * Valid values:
   * 
   * *   DesktopGroup
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Default
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Default
   */
  userProfileRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      rules: 'Rules',
      userProfileRuleType: 'UserProfileRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeUserProfilePathRulesResponseBodyUserProfilePathRuleRules },
      userProfileRuleType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

