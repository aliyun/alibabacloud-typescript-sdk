// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertWebhookResponseBody extends $dara.Model {
  /**
   * @example
   * test
   */
  alertWebhookId?: string;
  /**
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertWebhookId: 'alertWebhookId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertWebhookId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

