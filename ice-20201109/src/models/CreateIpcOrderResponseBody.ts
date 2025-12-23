// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpcOrderResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  purchaseStatus?: string;
  /**
   * @example
   * ****36-3C1E-4417-BDB2-1E034F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      purchaseStatus: 'PurchaseStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      purchaseStatus: 'string',
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

