// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityGroupsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the security group. Valid values of N: 1 to 20.
   * 
   * When you use a single tag to filter resources, the number of resources with the tag cannot exceed 1000. When you use multiple tags to filter resources, the number of resources bound with all specified tags cannot exceed 1000. If the number of resources exceeds 1000, use the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the security group. Valid values of N: 1 to 20.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * - true: performs only a dry run. The system checks the request for potential issues, including AccessKey validity, RAM user authorization, and required parameters. If the check fails, the corresponding error is returned. If the check succeeds, the DryRunOperation error code is returned.
   * - false: performs a dry run and performs the actual request. If the check succeeds, a 2XX HTTP status code is returned and the resource status is queried.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * > This parameter is deprecated.
   * 
   * @example
   * null
   */
  fuzzyQuery?: boolean;
  /**
   * @remarks
   * Specifies whether to query the capacity information of the security group. When set to True, the `EcsCount` and `AvailableInstanceAmount` values in the response are valid.
   * > This parameter is deprecated.
   * 
   * @example
   * null
   */
  isQueryEcsCount?: boolean;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. Once this parameter is set, the query uses the combination of `MaxResults` and `NextToken` parameters.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The network type of the security group. Valid values:
   * 
   * - vpc: Virtual Private Cloud (VPC).
   * - classic: classic network.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned in the previous call to this operation. You do not need to set this parameter for the first call.
   * 
   * @example
   * e71d8a535bd9cc11
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter is about to be deprecated. We recommend that you use NextToken and MaxResults for paged queries.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is about to be deprecated. We recommend that you use NextToken and MaxResults for paged queries.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the latest region list of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the security group belongs. When you use this parameter to filter resources, the number of resources cannot exceed 1000. You can call [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) to query the list of resource groups.
   * 
   * > Filtering by the default resource group is not supported.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
   * The list of security group IDs. A maximum of 100 security group IDs are supported at a time. The IDs are separated by commas (,) in the format of a JSON array.
   * 
   * @example
   * ["sg-bp67acfmxazb4p****", "sg-bp67acfmxazb4p****", "sg-bp67acfmxazb4p****",....]
   */
  securityGroupIds?: string;
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
   * - normal: basic security group.
   * - enterprise: advanced security group.
   * 
   * > If you do not specify this parameter, all types of security groups are queried.
   * 
   * @example
   * normal
   */
  securityGroupType?: string;
  /**
   * @remarks
   * Specifies whether the security group is managed. Valid values:
   * 
   * - true: The security group is managed.
   * - false: The security group is not managed.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: DescribeSecurityGroupsRequestTag[];
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
      dryRun: 'DryRun',
      fuzzyQuery: 'FuzzyQuery',
      isQueryEcsCount: 'IsQueryEcsCount',
      maxResults: 'MaxResults',
      networkType: 'NetworkType',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      securityGroupName: 'SecurityGroupName',
      securityGroupType: 'SecurityGroupType',
      serviceManaged: 'ServiceManaged',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      fuzzyQuery: 'boolean',
      isQueryEcsCount: 'boolean',
      maxResults: 'number',
      networkType: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
      securityGroupIds: 'string',
      securityGroupName: 'string',
      securityGroupType: 'string',
      serviceManaged: 'boolean',
      tag: { 'type': 'array', 'itemType': DescribeSecurityGroupsRequestTag },
      vpcId: 'string',
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

