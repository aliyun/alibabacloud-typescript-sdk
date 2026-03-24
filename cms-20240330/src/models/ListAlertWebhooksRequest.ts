// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertWebhooksRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the webhook.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID of the webhook.
   */
  webhookIds?: string[];
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      webhookIds: 'webhookIds',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      webhookIds: { 'type': 'array', 'itemType': 'string' },
      workspace: 'string',
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

