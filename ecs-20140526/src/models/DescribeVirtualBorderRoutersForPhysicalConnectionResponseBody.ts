// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSet } from "./DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSet";


export class DescribeVirtualBorderRoutersForPhysicalConnectionResponseBody extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  virtualBorderRouterForPhysicalConnectionSet?: DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSet;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      virtualBorderRouterForPhysicalConnectionSet: 'VirtualBorderRouterForPhysicalConnectionSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      virtualBorderRouterForPhysicalConnectionSet: DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSet,
    };
  }

  validate() {
    if(this.virtualBorderRouterForPhysicalConnectionSet && typeof (this.virtualBorderRouterForPhysicalConnectionSet as any).validate === 'function') {
      (this.virtualBorderRouterForPhysicalConnectionSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

