// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouterInterfacesResponseBodyRouterInterfaceSet } from "./DescribeRouterInterfacesResponseBodyRouterInterfaceSet";


export class DescribeRouterInterfacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
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
   * C7F6FCBD-F9CC-4501-8EF3-CDC9577CAE45
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the router interface.
   */
  routerInterfaceSet?: DescribeRouterInterfacesResponseBodyRouterInterfaceSet;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
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

