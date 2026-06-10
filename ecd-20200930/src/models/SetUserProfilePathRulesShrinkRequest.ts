// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetUserProfilePathRulesShrinkRequest extends $dara.Model {
  desktopGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  userProfilePathRuleShrink?: string;
  userProfileRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      regionId: 'RegionId',
      userProfilePathRuleShrink: 'UserProfilePathRule',
      userProfileRuleType: 'UserProfileRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      regionId: 'string',
      userProfilePathRuleShrink: 'string',
      userProfileRuleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

