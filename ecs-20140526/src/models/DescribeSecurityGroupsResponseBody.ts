// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroupTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * TestValue
   */
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
  /**
   * @remarks
   * The number of private IP addresses that can be added to the security group. For more information, see the "Security group capacity" section in [Basic security groups and advanced security groups](~~605897#section-kj9-e46-6v5~~).
   * 
   * If you set IsQueryEcsCount to True, the return value of AvailableInstanceAmount is valid.
   * 
   * >  This parameter is deprecated. The returned quantity is provided only for reference. The actual quantity may differ from the returned quantity.
   * 
   * @example
   * 0
   */
  availableInstanceAmount?: number;
  /**
   * @remarks
   * The time when the security group was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddThh:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-08-31T03:12:29Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the security group.
   * 
   * @example
   * TestDescription
   */
  description?: string;
  /**
   * @remarks
   * The number of private IP addresses that are contained in the security group. For more information, see the "Security group capacity" section in [Basic security groups and advanced security groups](~~605897#section-kj9-e46-6v5~~).
   * 
   * If you set IsQueryEcsCount to True, the return value of EcsCount is valid.
   * 
   * >  This parameter is deprecated. The returned quantity is provided only for reference. The actual quantity may differ from the returned quantity.
   * 
   * @example
   * 0
   */
  ecsCount?: number;
  /**
   * @remarks
   * The number of rules that reference security groups in the security group.
   * 
   * @example
   * 5
   */
  groupToGroupRuleCount?: number;
  /**
   * @remarks
   * The ID of the resource group to which the security group belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of rules in the security group.
   * 
   * @example
   * 100
   */
  ruleCount?: number;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the security group.
   * 
   * @example
   * SGTestName
   */
  securityGroupName?: string;
  /**
   * @remarks
   * The type of the security group. Valid values:
   * 
   * *   normal: basic security group
   * *   enterprise: advanced security group
   * 
   * @example
   * normal
   */
  securityGroupType?: string;
  /**
   * @remarks
   * The ID of the distributor to which the security group belongs.
   * 
   * @example
   * 12345678910
   */
  serviceID?: number;
  /**
   * @remarks
   * Indicates whether the user of the security group is an Alibaba Cloud service or a distributor.
   * 
   * @example
   * false
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The tags of the security group.
   */
  tags?: DescribeSecurityGroupsResponseBodySecurityGroupsSecurityGroupTags;
  /**
   * @remarks
   * The ID of the VPC to which the security group belongs.
   * 
   * @example
   * vpc-bp67acfmxazb4p****
   */
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
   * A pagination token. If the return value of this parameter is empty when MaxResults and NextToken are used for a paged query, no next page exists.
   * 
   * @example
   * e71d8a535bd9cc11
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * > This parameter will be deprecated in the future. We recommend that you use NextToken and MaxResults for a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * > This parameter will be deprecated in the future. We recommend that you use NextToken and MaxResults for a paged query.
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
  /**
   * @remarks
   * The information about the security groups.
   */
  securityGroups?: DescribeSecurityGroupsResponseBodySecurityGroups;
  /**
   * @remarks
   * The total number of security groups returned. If `MaxResults` and `NextToken` are specified in the request, the value of this parameter is not returned.
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

