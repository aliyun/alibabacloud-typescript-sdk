// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWebhookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact for webhook alerts.
   * 
   * @example
   * 48716
   */
  contactId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16AF921B-8187-489F-9913-43C808B4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
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

