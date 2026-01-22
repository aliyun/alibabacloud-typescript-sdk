// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertWebhooksShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  webhookIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      webhookIdsShrink: 'webhookIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webhookIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

