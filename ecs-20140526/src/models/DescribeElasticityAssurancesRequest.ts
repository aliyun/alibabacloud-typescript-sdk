// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticityAssurancesRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The IDs of the elasticity assurances. You can specify a JSON array of up to 100 elasticity assurance IDs.
   * 
   * @example
   * ["eap-bp67acfmxazb4****", "eap-bp67acfmxazb5****"]
   */
  ids?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticityAssurancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 20 tag keys to filter resources.
   * 
   * The query returns a maximum of 1,000 resources that match the specified tags. If more than 1,000 resources match the tags, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query all the resources.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 20 tag values.
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

export class DescribeElasticityAssurancesRequest extends $dara.Model {
  privatePoolOptions?: DescribeElasticityAssurancesRequestPrivatePoolOptions;
  /**
   * @remarks
   * The billing method of the instances. Only `PostPaid` (pay-as-you-go) is supported.
   * 
   * Default value: `PostPaid`.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance type. You can use this parameter to query only active elasticity assurances. To query released elasticity assurances, you must use `PrivatePoolOptions.Ids`.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
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
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The type of the Elasticity Assurance. Valid values:
   * 
   * - `ElasticityAssurance`: a standard elasticity assurance. This type of elasticity assurance is created when you do not specify `RecurrenceRules`.
   * 
   * - `TimeDivisionElasticityAssurance`: a time-division elasticity assurance. This type of elasticity assurance is created when you specify `RecurrenceRules`.
   * 
   * @example
   * ElasticityAssurance
   */
  packageType?: string;
  /**
   * @remarks
   * > This parameter is deprecated.
   * 
   * @example
   * null
   */
  platform?: string;
  /**
   * @remarks
   * The ID of the region where the Elasticity Assurance is located. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. When you use this parameter to filter resources, the number of matching resources cannot exceed 1,000.
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
   * The status of the Elasticity Assurance. Valid values:
   * 
   * - `All`: all statuses.
   * 
   * - `Deactivated`: The Elasticity Assurance is pending activation. This status is available only for invitational preview.
   * 
   * - `Preparing`: The Elasticity Assurance is being prepared.
   * 
   * - `Prepared`: The Elasticity Assurance is ready to take effect.
   * 
   * - `Active`: The Elasticity Assurance is active.
   * 
   * - `Released`: The Elasticity Assurance is released.
   * 
   * If you do not specify this parameter, elasticity assurances in all states are returned, except for those in the `Pending` and `Released` states.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The tags used to filter Elasticity Assurances.
   */
  tag?: DescribeElasticityAssurancesRequestTag[];
  /**
   * @remarks
   * The ID of the zone where the Elasticity Assurance is located.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      privatePoolOptions: 'PrivatePoolOptions',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      packageType: 'PackageType',
      platform: 'Platform',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      tag: 'Tag',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolOptions: DescribeElasticityAssurancesRequestPrivatePoolOptions,
      instanceChargeType: 'string',
      instanceType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      packageType: 'string',
      platform: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeElasticityAssurancesRequestTag },
      zoneId: 'string',
    };
  }

  validate() {
    if(this.privatePoolOptions && typeof (this.privatePoolOptions as any).validate === 'function') {
      (this.privatePoolOptions as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

