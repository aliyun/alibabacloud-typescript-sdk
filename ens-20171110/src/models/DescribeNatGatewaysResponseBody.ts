// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNatGatewaysResponseBodyNatGateways } from "./DescribeNatGatewaysResponseBodyNatGateways";


export class DescribeNatGatewaysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the NAT gateways.
   */
  natGateways?: DescribeNatGatewaysResponseBodyNatGateways[];
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
   * The number of entries per page.
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
   * 2818A8F4-5E2B-5611-8732-5ACF7B677059
   */
  requestId?: string;
  /**
   * @remarks
   * The number of NAT gateways that are returned.
   * 
   * @example
   * 49
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
      natGateways: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseBodyNatGateways },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.natGateways)) {
      $dara.Model.validateArray(this.natGateways);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

