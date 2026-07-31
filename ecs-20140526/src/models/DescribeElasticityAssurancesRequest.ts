// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticityAssurancesRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The list of elasticity assurance service IDs. The value can be a JSON array that consists of up to 100 IDs. Separate multiple IDs with commas (,).
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
   * The tag key. N indicates that you can set multiple tag keys for filtering. Valid values of N: 1 to 20.
   * 
   * If you use a single tag to filter resources, the resource count with the specified tag cannot exceed 1000. If you use multiple tags to filter resources, the resource count of resources that have all specified tags attached cannot exceed 1000. If the resource count exceeds 1000, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query resources.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. N indicates that you can set multiple tag values for filtering. Valid values of N: 1 to 20.
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
   * The billing method of instances. Valid values: PostPaid. Only pay-as-you-go is supported.
   * 
   * Default value: PostPaid.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance type. You can use the instance type to query only active elasticity assurance services. Released services can only be queried by using `PrivatePoolOptions.Ids`.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query.
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
   * The pagination token for the elasticity assurance service query. Obtain the value from the result of the previous request.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The type of the elasticity assurance service. Valid values:
   * 
   * - ElasticityAssurance: standard elasticity assurance (used when RecurrenceRules is not specified).
   * 
   * - TimeDivisionElasticityAssurance: time-division elasticity assurance (used when RecurrenceRules is specified).
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
   * The ID of the region to which the elasticity assurance service belongs. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. When you use this parameter to filter resources, the resource count cannot exceed 1000.
   * 
   * >Filtering by the default resource group is not supported.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the elasticity assurance service. Valid values:
   * 
   * - All: all states.
   * - Deactived: pending activation (this state is in invitational preview).
   * - Preparing: being prepared.
   * - Prepared: pending effectiveness.
   * - Active: active.
   * - Released: released.
   * 
   * If you do not specify this parameter, elasticity assurance services in all states except Pending and Released are queried.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The list of tag key-value pairs bound to the elasticity assurance service.
   */
  tag?: DescribeElasticityAssurancesRequestTag[];
  /**
   * @remarks
   * The zone ID in the region to which the elasticity assurance service belongs.
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

