// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmartAccessGatewayUseLimitResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2265DB11-F5CC-496E-ADE7-D043AC37926A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of SAG instances that you can purchase.
   * 
   * @example
   * 500
   */
  totalAmount?: number;
  /**
   * @remarks
   * The number of SAG instances that you have purchased.
   * 
   * @example
   * 47
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

