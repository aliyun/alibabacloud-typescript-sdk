// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AbortCasesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the predictive outbound call campaign.
   * 
   * This parameter is required.
   * 
   * @example
   * 2180afb0-83a9-4a13-9f19-467d63041dbf
   */
  campaignId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1dcb09c5-d5db-4397-bf65-db854463beea
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of contact phone numbers to cancel.
   */
  phoneNumbersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      instanceId: 'InstanceId',
      phoneNumbersShrink: 'PhoneNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      instanceId: 'string',
      phoneNumbersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

