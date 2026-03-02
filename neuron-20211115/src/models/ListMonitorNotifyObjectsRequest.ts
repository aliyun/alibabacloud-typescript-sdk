// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMonitorNotifyObjectsRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  enterpriseId?: number;
  name?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * DINGDING
   */
  webhookType?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'enterpriseId',
      name: 'name',
      type: 'type',
      webhookType: 'webhookType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      name: 'string',
      type: 'number',
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

