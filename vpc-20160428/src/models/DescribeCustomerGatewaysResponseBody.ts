// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCustomerGatewaysResponseBodyCustomerGateways } from "./DescribeCustomerGatewaysResponseBodyCustomerGateways";


export class DescribeCustomerGatewaysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about customer gateways.
   */
  customerGateways?: DescribeCustomerGatewaysResponseBodyCustomerGateways;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E82612A9-CB90-4D7E-B394-1DB7F6509B29
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      customerGateways: 'CustomerGateways',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerGateways: DescribeCustomerGatewaysResponseBodyCustomerGateways,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.customerGateways && typeof (this.customerGateways as any).validate === 'function') {
      (this.customerGateways as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

