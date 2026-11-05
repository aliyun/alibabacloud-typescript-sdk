// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessGroupsResponseBodyAccessGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the access group.
   * 
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  /**
   * @remarks
   * The name of the access group.
   * 
   * @example
   * test-cluster-policy
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The time when the access group was created. The time is displayed in UTC and follows the ISO 8601 standard. Example: 2022-04-18T08:02:09.986217Z.
   * 
   * @example
   * 2022-04-18T08:02:09.986217Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the access group.
   * 
   * @example
   * Dedicated access group for test clusters
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the access group is the default access group.
   * 
   * Valid values:
   * 
   * - true: The access group is the default access group. A default access group allows access from all IP addresses. You cannot delete a default access group or the rules within it.
   * - false: The access group is not the default access group.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The number of mount points associated with the access group.
   * 
   * @example
   * 1
   */
  mountPointCount?: number;
  /**
   * @remarks
   * The network type of the access group.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of rules in the access group.
   * 
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
  /**
   * @remarks
   * The access group information.
   */
  accessGroups?: ListAccessGroupsResponseBodyAccessGroups[];
  /**
   * @remarks
   * The pagination token.
   * 
   * If a single query does not return all results, a non-empty NextToken is returned. You can include the NextToken in the next request to continue the query.
   * 
   * @example
   * PtHVCBwpddbWVRCFe3wlB_-tOLtD4KSv3DzI7G6iywQSm69vY0lvOlDTzqVWqXWApvYQ2iUa8s4HbcFanMQfDIlds4da87_Ax4UJMva****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned results.
   * 
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

