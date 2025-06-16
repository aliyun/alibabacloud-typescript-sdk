// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpv6EgressOnlyRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate a token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * >  If you do not specify this parameter, the system automatically uses the value of RequestId as the client token. The value of RequestId is different for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the egress-only rule.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * ruledescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the IPv6 address for which you want to create an egress-only rule.
   * 
   * This parameter is required.
   * 
   * @example
   * ipv6-hp3nxjkfxn5pnhgl5****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance for which you want to create an egress-only rule.
   * 
   * Default value: **Ipv6Address**
   * 
   * @example
   * Ipv6Address
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the IPv6 gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ipv6gw-hp3c2paq0ywauasza****
   */
  ipv6GatewayId?: string;
  /**
   * @remarks
   * The name of the egress-only rule.
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * rulename
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region in which the IPv6 gateway is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
      clientToken: 'ClientToken',
      description: 'Description',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ipv6GatewayId: 'Ipv6GatewayId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      instanceId: 'string',
      instanceType: 'string',
      ipv6GatewayId: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

