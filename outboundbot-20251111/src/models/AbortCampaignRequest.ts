// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AbortCampaignRequest extends $dara.Model {
  /**
   * @remarks
   * The outbound call task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0b3ca876-bc64-4d57-98b4-b5d78280afca
   */
  campaignId?: string;
  /**
   * @remarks
   * The instance ID.
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

