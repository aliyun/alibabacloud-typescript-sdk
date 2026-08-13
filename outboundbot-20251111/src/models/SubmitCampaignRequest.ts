// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCampaignRequest extends $dara.Model {
  /**
   * @remarks
   * 活动ID
   * 
   * This parameter is required.
   * 
   * @example
   * f295a472-35ee-442a-9013-b13862505a1a
   */
  campaignId?: string;
  /**
   * @remarks
   * 外呼实例ID
   * 
   * This parameter is required.
   * 
   * @example
   * b3dbfb82-1ae6-4e73-b717-f494727d2af3
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

