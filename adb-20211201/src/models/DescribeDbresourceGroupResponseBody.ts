// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBResourceGroupResponseBodyGroupsInfo } from "./DescribeDbresourceGroupResponseBodyGroupsInfo";


export class DescribeDBResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried resource groups.
   */
  groupsInfo?: DescribeDBResourceGroupResponseBodyGroupsInfo[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A94B6C02-7BD4-5D67-9776-3AC8317E8DD3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupsInfo: 'GroupsInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupsInfo: { 'type': 'array', 'itemType': DescribeDBResourceGroupResponseBodyGroupsInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupsInfo)) {
      $dara.Model.validateArray(this.groupsInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

