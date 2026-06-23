// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpnGatewayAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable routing automatic propagation for the VPN gateway. Valid values:
   * 
   * - **true**: enabled.
   * 
   *     After routing automatic propagation is enabled, the VPN gateway instance performs automatic learning of system routes from the system route table of the VPC-connected instance and automatically propagates routes of the on-premises data center to the system route table of the VPC-connected instance.
   * - **false**: disabled.
   *     
   *     Before you disable routing automatic propagation, make sure that the BGP dynamic route feature is disabled for all IPsec-VPN connections under the VPN gateway.
   * 
   * @example
   * true
   */
  autoPropagate?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-4266****
   */
  clientToken?: string;
  /**
   * @remarks
   * The new description of the VPN gateway.  
   *  
   * The description must be 1 to 100 characters in length.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The new name of the VPN gateway.  
   * 
   * The name must be 2 to 100 characters in length and cannot start with `http://` or `https://`. It must start with an uppercase or lowercase letter and can contain uppercase and lowercase letters, digits, underscores (_), hyphens (-), and periods (.). Other special characters are not supported.
   * 
   * @example
   * myvpn
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the VPN gateway instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query the most recent region list.
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
   * The ID of the VPN gateway instance.
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

