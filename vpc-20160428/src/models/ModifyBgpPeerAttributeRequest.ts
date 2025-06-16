// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBgpPeerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The BFD hop count. Valid values: **1** to **255**.
   * 
   * This parameter is required only if you enable BFD. The parameter specifies the maximum number of network devices that a packet can traverse from the source to the destination. Set a value based on your network topology.
   * 
   * @example
   * 3
   */
  bfdMultiHop?: number;
  /**
   * @remarks
   * The ID of the BGP group to which the BGP peer that you want to modify belongs.
   * 
   * @example
   * bgpg-m5eo12jxuw2hc0uqq****
   */
  bgpGroupId?: string;
  /**
   * @remarks
   * The ID of the BGP peer that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * bgp-m5eoyp2mwegk8ce9v****
   */
  bgpPeerId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  enableBfd?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The IP address of the BGP peer that you want to modify.
   * 
   * @example
   * 116.62.XX.XX
   */
  peerIpAddress?: string;
  /**
   * @remarks
   * The region ID of the BGP group to which the BGP peer that you want to modify belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bfdMultiHop: 'BfdMultiHop',
      bgpGroupId: 'BgpGroupId',
      bgpPeerId: 'BgpPeerId',
      clientToken: 'ClientToken',
      enableBfd: 'EnableBfd',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerIpAddress: 'PeerIpAddress',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bfdMultiHop: 'number',
      bgpGroupId: 'string',
      bgpPeerId: 'string',
      clientToken: 'string',
      enableBfd: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      peerIpAddress: 'string',
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

