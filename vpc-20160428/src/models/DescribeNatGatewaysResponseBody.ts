// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNatGatewaysResponseBodyNatGateways } from "./DescribeNatGatewaysResponseBodyNatGateways";


export class DescribeNatGatewaysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the NAT gateway.
   */
  natGateways?: DescribeNatGatewaysResponseBodyNatGateways;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 10
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
   * The ID of the request.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The number of NAT gateway entries that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      natGateways: 'NatGateways',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGateways: DescribeNatGatewaysResponseBodyNatGateways,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.natGateways && typeof (this.natGateways as any).validate === 'function') {
      (this.natGateways as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

