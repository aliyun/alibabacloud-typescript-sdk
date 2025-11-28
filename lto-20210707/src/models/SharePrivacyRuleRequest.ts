// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SharePrivacyRuleRequest extends $dara.Model {
  memberIdList?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  privacyRuleId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      memberIdList: 'MemberIdList',
      privacyRuleId: 'PrivacyRuleId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberIdList: 'string',
      privacyRuleId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

