// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllGroupsResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * The type of the server group. Valid values:
   * 
   * *   **0**: default group
   * *   **1**: other groups
   * 
   * @example
   * 1
   */
  groupFlag?: number;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * 8834224
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the server group.
   * 
   * @example
   * abc
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupFlag: 'GroupFlag',
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupFlag: 'number',
      groupId: 'number',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of server groups.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The grouping information about the servers.
   */
  groups?: DescribeAllGroupsResponseBodyGroups[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      groups: 'Groups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      groups: { 'type': 'array', 'itemType': DescribeAllGroupsResponseBodyGroups },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

