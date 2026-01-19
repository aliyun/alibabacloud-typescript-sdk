// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AbortCasesRequest extends $dara.Model {
  campaignId?: string;
  instanceId?: string;
  phoneNumberList?: string[];
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
      phoneNumberList: 'PhoneNumberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
      phoneNumberList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.phoneNumberList)) {
      $dara.Model.validateArray(this.phoneNumberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

