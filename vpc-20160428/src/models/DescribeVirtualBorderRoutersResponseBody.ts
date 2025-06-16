// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSet } from "./DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSet";


export class DescribeVirtualBorderRoutersResponseBody extends $dara.Model {
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
   * The number of entries per page. Valid values: **1 to 50**. Default value: **10**.
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
   * DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the VBR.
   */
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

