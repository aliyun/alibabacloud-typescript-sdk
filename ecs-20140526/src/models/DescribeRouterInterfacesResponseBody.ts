// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouterInterfacesResponseBodyRouterInterfaceSet } from "./DescribeRouterInterfacesResponseBodyRouterInterfaceSet";


export class DescribeRouterInterfacesResponseBody extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  routerInterfaceSet?: DescribeRouterInterfacesResponseBodyRouterInterfaceSet;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      routerInterfaceSet: 'RouterInterfaceSet',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      routerInterfaceSet: DescribeRouterInterfacesResponseBodyRouterInterfaceSet,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.routerInterfaceSet && typeof (this.routerInterfaceSet as any).validate === 'function') {
      (this.routerInterfaceSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

