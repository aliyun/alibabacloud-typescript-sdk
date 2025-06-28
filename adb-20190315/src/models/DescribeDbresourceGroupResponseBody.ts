// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBResourceGroupResponseBodyGroupsInfo } from "./DescribeDbresourceGroupResponseBodyGroupsInfo";


export class DescribeDBResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried resource group.
   */
  groupsInfo?: DescribeDBResourceGroupResponseBodyGroupsInfo[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupsInfo: 'GroupsInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
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

