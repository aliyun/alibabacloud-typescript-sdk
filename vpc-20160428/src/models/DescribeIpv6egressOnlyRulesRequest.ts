// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpv6EgressOnlyRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the IPv6 address for which the IPv6 egress-only rule is configured.
   * 
   * @example
   * ipv6-bp12uzwhac8tv3xx6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance for which you want to configure an IPv6 egress-only rule. Valid values:
   * 
   * - IPv6Address (default): The instance is a single IPv6 address.
   * - IPv6Prefix: The instance is an IPv6 CIDR block.
   * 
   * @example
   * Ipv6Address
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the IPv6 egress-only rule to query.
   * 
   * @example
   * ipv6py-bp1rr7fq1md8pbb3k****
   */
  ipv6EgressOnlyRuleId?: string;
  /**
   * @remarks
   * The ID of the IPv6 gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ipv6gw-bp1rhhs9zjlxukc5e****
   */
  ipv6GatewayId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * rulename
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the list to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the IPv6 gateway. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ipv6EgressOnlyRuleId: 'Ipv6EgressOnlyRuleId',
      ipv6GatewayId: 'Ipv6GatewayId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      ipv6EgressOnlyRuleId: 'string',
      ipv6GatewayId: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

