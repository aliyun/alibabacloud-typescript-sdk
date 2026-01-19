// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AbortCasesShrinkRequest extends $dara.Model {
  campaignId?: string;
  instanceId?: string;
  phoneNumberListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
      phoneNumberListShrink: 'PhoneNumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
      phoneNumberListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

