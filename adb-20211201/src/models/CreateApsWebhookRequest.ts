// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsWebhookRequestWebhook extends $dara.Model {
  /**
   * @remarks
   * Signed key.
   * 
   * @example
   * ***
   */
  key?: string;
  /**
   * @remarks
   * The name of the webhook.
   * 
   * @example
   * MyWebhookName
   */
  name?: string;
  /**
   * @remarks
   * The request path.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/webhook
   */
  url?: string;
  /**
   * @remarks
   * The notification method. Valid values: dingtalk. lark.
   * 
   * This parameter is required.
   * 
   * @example
   * dingtalk
   */
  webhookType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      name: 'Name',
      url: 'Url',
      webhookType: 'WebhookType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      name: 'string',
      url: 'string',
      webhookType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApsWebhookRequest extends $dara.Model {
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
  webhook?: CreateApsWebhookRequestWebhook[];
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      jobType: 'JobType',
      regionId: 'RegionId',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      jobType: 'string',
      regionId: 'string',
      webhook: { 'type': 'array', 'itemType': CreateApsWebhookRequestWebhook },
    };
  }

  validate() {
    if(Array.isArray(this.webhook)) {
      $dara.Model.validateArray(this.webhook);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

