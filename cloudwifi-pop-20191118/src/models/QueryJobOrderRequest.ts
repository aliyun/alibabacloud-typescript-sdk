// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobOrderRequest extends $dara.Model {
  appCode?: string;
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appName: 'AppName',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appName: 'string',
      orderId: 'number',
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

