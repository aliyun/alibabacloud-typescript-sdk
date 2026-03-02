// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMonitorWebhooksRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  enterpriseId?: number;
  /**
   * @example
   * mask_detect
   */
  name?: string;
  /**
   * @example
   * id
   */
  orderBy?: string;
  /**
   * @example
   * DESC
   */
  orderDirection?: string;
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
  /**
   * @example
   * DINGDING
   */
  webhookType?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'enterpriseId',
      name: 'name',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      webhookType: 'webhookType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      name: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

