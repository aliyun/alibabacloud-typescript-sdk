// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertWebhooksRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  webhookIds?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      webhookIds: 'webhookIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

