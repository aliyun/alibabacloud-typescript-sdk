// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWebhookContactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the webhook alert contact.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  webhookId?: number;
  static names(): { [key: string]: string } {
    return {
      webhookId: 'WebhookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webhookId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

