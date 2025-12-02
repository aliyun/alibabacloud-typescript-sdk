// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApsWebhookShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleDBClusterId
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleRegionId
   */
  regionId?: string;
  /**
   * @remarks
   * The array of webhooks.
   */
  webhookShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      webhookShrink: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      webhookShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

