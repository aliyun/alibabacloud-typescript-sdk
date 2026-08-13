// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PauseCampaignRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the campaign.
   * 
   * This parameter is required.
   * 
   * @example
   * 6ac878ab-115b-4170-a5d8-547481273364
   */
  campaignId?: string;
  /**
   * @remarks
   * The instance ID of the outbound call instance.
   * 
   * This parameter is required.
   * 
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

