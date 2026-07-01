// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityGroupsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the security group. Valid values of N: 1 to 20.
   * 
   * If you use a single tag to filter resources, the resource count with the specified tag cannot exceed 1,000. If you use multiple tags to filter resources, the resource count that have all specified tags attached cannot exceed 1,000. If the resource count exceeds 1,000, call [ListTagResources](https://help.aliyun.com/document_detail/110425.html) to query resources.
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
   * Specifies whether to perform only a dry run. Valid values:
   *          
   * - true: performs only a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized Resource Access Management (RAM) users, and missing parameter values. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * - false: performs a dry run and sends the Normal request. If the request passes the dry run, a 2xx HTTP status code is returned and the authorization is verified.
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
   * Specifies whether to query the capacity information of the security group. If you set this parameter to True, the `EcsCount` and `AvailableInstanceAmount` values in the response are valid.
   * > This parameter is deprecated.
   * 
   * @example
   * null
   */
  isQueryEcsCount?: boolean;
  /**
   * @remarks
   * The maximum number of entries per page for paging query. If you set this parameter, the `MaxResults` and `NextToken` paging method is used.
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
   * - vpc: VPC.
   * - classic: classic network. The classic network is deprecated. For more information, see [Deprecation notice](https://help.aliyun.com/document_detail/2833134.html).
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous request. You do not need to set this parameter for the first request.
   * 
   * @example
   * e71d8a535bd9cc11
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter will be offline. Use NextToken and MaxResults for paging.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter will be offline. Use NextToken and MaxResults for paging.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the security group belongs. When you use this parameter to filter resources, the resource count cannot exceed 1,000. You can invoke [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) to query resource groups.
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
   * The IDs of security groups. You can specify up to 100 security group IDs. Separate multiple IDs with commas (,) in a JSON array format.
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
   * > If you do not specify this parameter, security groups of all types are queried.
   * 
   * @example
   * normal
   */
  securityGroupType?: string;
  /**
   * @remarks
   * Specifies whether managed security group is managed. Valid values:
   * 
   * - true: Managed security group is managed.
   * - false: Managed security group is not managed.
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
   * The tags.
   */
  tag?: DescribeSecurityGroupsRequestTag[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the security group belongs.
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

