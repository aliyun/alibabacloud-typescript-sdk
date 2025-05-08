// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkAclsResponseBodyNetworkAcls } from "./DescribeNetworkAclsResponseBodyNetworkAcls";


export class DescribeNetworkAclsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the network ACLs.
   */
  networkAcls?: DescribeNetworkAclsResponseBodyNetworkAcls[];
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
   * 2
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A1707FC0-430C-423A-B624-284046B20399
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
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
      networkAcls: { 'type': 'array', 'itemType': DescribeNetworkAclsResponseBodyNetworkAcls },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkAcls)) {
      $dara.Model.validateArray(this.networkAcls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

