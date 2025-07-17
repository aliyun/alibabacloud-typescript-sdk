// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebhookContactsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert contact.
   * 
   * @example
   * 123
   */
  contactIds?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of alert contacts displayed on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The name of the webhook alert contact.
   * 
   * @example
   * Webhook name
   */
  webhookName?: string;
  static names(): { [key: string]: string } {
    return {
      contactIds: 'ContactIds',
      page: 'Page',
      size: 'Size',
      webhookName: 'WebhookName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIds: 'string',
      page: 'number',
      size: 'number',
      webhookName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

