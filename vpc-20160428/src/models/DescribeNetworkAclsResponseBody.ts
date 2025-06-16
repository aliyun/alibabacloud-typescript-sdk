// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkAclsResponseBodyNetworkAcls } from "./DescribeNetworkAclsResponseBodyNetworkAcls";


export class DescribeNetworkAclsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the network ACLs.
   */
  networkAcls?: DescribeNetworkAclsResponseBodyNetworkAcls;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7DDDC17-FA06-4AC2-8F35-59D2470FCFC1
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      networkAcls: 'NetworkAcls',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAcls: DescribeNetworkAclsResponseBodyNetworkAcls,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.networkAcls && typeof (this.networkAcls as any).validate === 'function') {
      (this.networkAcls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

