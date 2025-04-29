// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSet } from "./DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSet";


export class DescribeVirtualBorderRoutersResponseBody extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  virtualBorderRouterSet?: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSet;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      virtualBorderRouterSet: 'VirtualBorderRouterSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      virtualBorderRouterSet: DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSet,
    };
  }

  validate() {
    if(this.virtualBorderRouterSet && typeof (this.virtualBorderRouterSet as any).validate === 'function') {
      (this.virtualBorderRouterSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

