// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEnhancedVpnGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic route propagation for the enhanced VPN gateway. Valid values:
   * 
   * - **true**<br>
   *   The enhanced VPN gateway automatically learns system routes from the system route table of the VPC and propagates routes from the on-premises data center to the system route table of the VPC.<br>
   * 
   * - **false**<br>
   *   Automatic route propagation is disabled. Before you disable this feature, make sure that BGP dynamic routing is disabled for all IPsec-VPN connections of the enhanced VPN gateway.<br>
   * 
   * @example
   * true
   */
  autoPropagate?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate a token from your client to make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify a `ClientToken`, the system automatically uses the `RequestId` of the API request as the `ClientToken`. Each API request has a different `RequestId`.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-4266****
   */
  clientToken?: string;
  /**
   * @remarks
   * The new description of the enhanced VPN gateway.
   * 
   * The description must be 1 to 100 characters in length.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The new name of the enhanced VPN gateway.
   * 
   * The name must be 2 to 100 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * myvpn
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the enhanced VPN gateway is located. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the enhanced VPN gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * vpn-bp1q8bgx4xnkm2ogj****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPropagate: 'AutoPropagate',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPropagate: 'boolean',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpnGatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

