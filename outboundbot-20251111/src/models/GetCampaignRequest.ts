// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCampaignRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the outbound task.
   * 
   * This parameter is required.
   * 
   * @example
   * 6ac878ab-115b-4170-a5d8-547481273364
   */
  campaignId?: string;
  /**
   * @remarks
   * The outbound instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 024f8cf0-c842-4c01-b74b-c8667e4579c7
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

