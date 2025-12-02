// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsWebhookShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The type of the task. Valid value: Task type. SLS or OSS Export Task: ResultExport.
   * 
   * This parameter is required.
   * 
   * @example
   * ResultExport
   */
  jobType?: string;
  /**
   * @remarks
   * The ID of the region in which to create the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
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
      jobType: 'JobType',
      regionId: 'RegionId',
      webhookShrink: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      jobType: 'string',
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

