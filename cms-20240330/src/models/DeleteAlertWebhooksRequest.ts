// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertWebhooksRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  webhookIds?: string[];
  static names(): { [key: string]: string } {
    return {
      webhookIds: 'webhookIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webhookIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.webhookIds)) {
      $dara.Model.validateArray(this.webhookIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

