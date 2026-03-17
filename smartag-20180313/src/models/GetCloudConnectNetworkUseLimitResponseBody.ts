// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudConnectNetworkUseLimitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BCD04867-56C3-43DC-8FEF-923EFB8B56DA
   */
  requestId?: string;
  /**
   * @remarks
   * The maximum number of CCN instances that the current account can create in the specified region.
   * 
   * @example
   * 10
   */
  totalAmount?: number;
  /**
   * @remarks
   * The number of CCN instances that you have created.
   * 
   * @example
   * 6
   */
  usedAmount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalAmount: 'TotalAmount',
      usedAmount: 'UsedAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalAmount: 'number',
      usedAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

