// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroupTagsTag extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroupTags extends $dara.Model {
  tag?: DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroupTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroupTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroup extends $dara.Model {
  availableInstanceAmount?: number;
  creationTime?: string;
  description?: string;
  ecsCount?: number;
  groupToGroupRuleCount?: number;
  resourceGroupId?: string;
  ruleCount?: number;
  securityGroupId?: string;
  securityGroupName?: string;
  securityGroupType?: string;
  serviceID?: number;
  serviceManaged?: boolean;
  tags?: DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroupTags;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      availableInstanceAmount: 'AvailableInstanceAmount',
      creationTime: 'CreationTime',
      description: 'Description',
      ecsCount: 'EcsCount',
      groupToGroupRuleCount: 'GroupToGroupRuleCount',
      resourceGroupId: 'ResourceGroupId',
      ruleCount: 'RuleCount',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      securityGroupType: 'SecurityGroupType',
      serviceID: 'ServiceID',
      serviceManaged: 'ServiceManaged',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableInstanceAmount: 'number',
      creationTime: 'string',
      description: 'string',
      ecsCount: 'number',
      groupToGroupRuleCount: 'number',
      resourceGroupId: 'string',
      ruleCount: 'number',
      securityGroupId: 'string',
      securityGroupName: 'string',
      securityGroupType: 'string',
      serviceID: 'number',
      serviceManaged: 'boolean',
      tags: DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroupTags,
      vpcId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseBodySecurityGroups extends $dara.Model {
  securityGroup?: DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroup[];
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: { 'type': 'array', 'itemType': DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroup },
    };
  }

  validate() {
    if(Array.isArray(this.securityGroup)) {
      $dara.Model.validateArray(this.securityGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token returned in this call. If this value is empty when you use MaxResults and NextToken for paging, no more data is available.
   * 
   * @example
   * e71d8a535bd9cc11
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * > This parameter will be offline. Use NextToken and MaxResults for paging.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * > This parameter will be offline. Use NextToken and MaxResults for paging.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the security group.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  securityGroups?: DescribeSecurityGroupsResponseBodySecurityGroups;
  /**
   * @remarks
   * The total number of security groups. This parameter is not returned when you use `MaxResults` and `NextToken` for parameter query.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestId: 'RequestId',
      securityGroups: 'SecurityGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestId: 'string',
      securityGroups: DescribeSecurityGroupsResponseBodySecurityGroups,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.securityGroups && typeof (this.securityGroups as any).validate === 'function') {
      (this.securityGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

