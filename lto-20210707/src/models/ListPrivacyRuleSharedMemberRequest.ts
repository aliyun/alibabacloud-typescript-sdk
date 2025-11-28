// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivacyRuleSharedMemberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  privacyRuleId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      privacyRuleId: 'PrivacyRuleId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

