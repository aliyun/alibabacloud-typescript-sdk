// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupsResponseBodyGroups extends $dara.Model {
  authedResources?: { [key: string]: string };
  createTime?: string;
  description?: string;
  /**
   * @example
   * ug-2412ojkwtybd****
   */
  groupId?: string;
  groupName?: string;
  transferFileNeedApproval?: boolean;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      authedResources: 'AuthedResources',
      createTime: 'CreateTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      transferFileNeedApproval: 'TransferFileNeedApproval',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authedResources: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      transferFileNeedApproval: 'boolean',
      userCount: 'number',
    };
  }

  validate() {
    if(this.authedResources) {
      $dara.Model.validateMap(this.authedResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupsResponseBody extends $dara.Model {
  count?: number;
  groups?: DescribeGroupsResponseBodyGroups[];
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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
      groups: { 'type': 'array', 'itemType': DescribeGroupsResponseBodyGroups },
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

