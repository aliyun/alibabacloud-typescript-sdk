// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCasesRequest extends $dara.Model {
  campaignId?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

