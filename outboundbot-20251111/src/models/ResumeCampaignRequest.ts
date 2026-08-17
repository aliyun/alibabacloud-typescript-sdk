// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeCampaignRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the campaign.
   * 
   * This parameter is required.
   * 
   * @example
   * dcee2bca-0fa0-4826-89b8-1f693574023b
   */
  campaignId?: string;
  /**
   * @remarks
   * The outbound instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 33040b9a-b04b-452f-b554-cd6f3a15f850
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

