// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyTunnelAttributeRequestTunnelOptionsSpecification } from "./ModifyTunnelAttributeRequestTunnelOptionsSpecification";


export class ModifyTunnelAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate a token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the value of **RequestId** as the **client token**. The value of **RequestId** is different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region in which the IPsec connection is established.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tunnel ID.
   * 
   * This parameter is required.
   * 
   * @example
   * tun-gbyz2e070xzo93****
   */
  tunnelId?: string;
  /**
   * @remarks
   * The tunnel configurations.
   */
  tunnelOptionsSpecification?: ModifyTunnelAttributeRequestTunnelOptionsSpecification;
  /**
   * @remarks
   * The ID of the IPsec connection.
   * 
   * This parameter is required.
   * 
   * @example
   * vco-gw69vm1i71y354****
   */
  vpnConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tunnelId: 'TunnelId',
      tunnelOptionsSpecification: 'TunnelOptionsSpecification',
      vpnConnectionId: 'VpnConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tunnelId: 'string',
      tunnelOptionsSpecification: ModifyTunnelAttributeRequestTunnelOptionsSpecification,
      vpnConnectionId: 'string',
    };
  }

  validate() {
    if(this.tunnelOptionsSpecification && typeof (this.tunnelOptionsSpecification as any).validate === 'function') {
      (this.tunnelOptionsSpecification as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

