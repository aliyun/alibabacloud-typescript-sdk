// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNatGatewaysResponseBodyNatGateways } from "./DescribeNatGatewaysResponseBodyNatGateways";


export class DescribeNatGatewaysResponseBody extends $dara.Model {
  natGateways?: DescribeNatGatewaysResponseBodyNatGateways;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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

