// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetUserProfilePathRulesRequestUserProfilePathRule } from "./SetUserProfilePathRulesRequestUserProfilePathRule";


export class SetUserProfilePathRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The desktop group ID.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The directories that you want to configure in the blacklist and whitelist.
   */
  userProfilePathRule?: SetUserProfilePathRulesRequestUserProfilePathRule[];
  /**
   * @remarks
   * The directory type that you want to configure.
   * 
   * Valid values:
   * 
   * *   Both_Default_DesktopGroup
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
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
   * DesktopGroup
   */
  userProfileRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      regionId: 'RegionId',
      userProfilePathRule: 'UserProfilePathRule',
      userProfileRuleType: 'UserProfileRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      regionId: 'string',
      userProfilePathRule: { 'type': 'array', 'itemType': SetUserProfilePathRulesRequestUserProfilePathRule },
      userProfileRuleType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.userProfilePathRule)) {
      $dara.Model.validateArray(this.userProfilePathRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

