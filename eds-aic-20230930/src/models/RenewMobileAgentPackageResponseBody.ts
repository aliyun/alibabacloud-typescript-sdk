// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewMobileAgentPackageResponseBody extends $dara.Model {
  /**
   * @example
   * 223684716098****
   */
  orderId?: string;
  /**
   * @example
   * 7B9EFA4F-4305-5968-BAEE-BD8B8DE5****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
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

