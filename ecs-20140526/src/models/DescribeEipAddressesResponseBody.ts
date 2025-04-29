// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEipAddressesResponseBodyEipAddresses } from "./DescribeEipAddressesResponseBodyEipAddresses";


export class DescribeEipAddressesResponseBody extends $dara.Model {
  eipAddresses?: DescribeEipAddressesResponseBodyEipAddresses;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eipAddresses: 'EipAddresses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddresses: DescribeEipAddressesResponseBodyEipAddresses,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.eipAddresses && typeof (this.eipAddresses as any).validate === 'function') {
      (this.eipAddresses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

