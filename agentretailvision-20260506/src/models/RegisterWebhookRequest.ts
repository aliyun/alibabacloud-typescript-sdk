// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterWebhookRequest extends $dara.Model {
  /**
   * @remarks
   * The key used for callback signature verification.
   * 
   * @example
   * your_secret_key
   */
  callbackSecret?: string;
  /**
   * @remarks
   * The default callback URL. A public HTTPS URL is required.
   * 
   * @example
   * https://example.com/callback
   */
  callbackUrl?: string;
  static names(): { [key: string]: string } {
    return {
      callbackSecret: 'CallbackSecret',
      callbackUrl: 'CallbackUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackSecret: 'string',
      callbackUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

