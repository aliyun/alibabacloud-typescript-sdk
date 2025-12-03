// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessGroupsResponseBodyAccessGroups extends $dara.Model {
  /**
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  /**
   * @example
   * test-cluster-policy
   */
  accessGroupName?: string;
  createTime?: string;
  description?: string;
  /**
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @example
   * 1
   */
  mountPointCount?: number;
  /**
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 3
   */
  ruleCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      accessGroupName: 'AccessGroupName',
      createTime: 'CreateTime',
      description: 'Description',
      isDefault: 'IsDefault',
      mountPointCount: 'MountPointCount',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      ruleCount: 'RuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      accessGroupName: 'string',
      createTime: 'string',
      description: 'string',
      isDefault: 'boolean',
      mountPointCount: 'number',
      networkType: 'string',
      regionId: 'string',
      ruleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessGroupsResponseBody extends $dara.Model {
  accessGroups?: ListAccessGroupsResponseBodyAccessGroups[];
  nextToken?: string;
  /**
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessGroups: 'AccessGroups',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroups: { 'type': 'array', 'itemType': ListAccessGroupsResponseBodyAccessGroups },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessGroups)) {
      $dara.Model.validateArray(this.accessGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

