// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBgpPeerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The BFD hop count. Valid values: **1** to **255**.
   * 
   * This parameter is required when BFD is enabled.
   * Enter the BFD hop count, which specifies the maximum number of devices that data passes through from the source to the destination. You can configure different hop counts based on the actual physical link conditions.
   * 
   * > If you use BFD in a multi-cloud environment or a direct fiber connection topology where no bridging devices exist, change the default BFD hop count from **255** to **1**.
   * 
   * @example
   * 3
   */
  bfdMultiHop?: number;
  /**
   * @remarks
   * The ID of the BGP group to which the BGP peer belongs.
   * 
   * @example
   * bgpg-m5eo12jxuw2hc0uqq****
   */
  bgpGroupId?: string;
  /**
   * @remarks
   * The ID of the BGP peer whose attributes you want to modify.
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
   * The client generates the value. The value must be unique among different requests and cannot exceed 64 ASCII characters in length.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable Bidirectional Forwarding Detection (BFD). Valid values:
   * 
   * - **true**: enables BFD.
   * 
   * - **false** (default): does not enable BFD.
   * 
   * @example
   * false
   */
  enableBfd?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The IP address of the BGP peer.
   * 
   * @example
   * 116.62.XX.XX
   */
  peerIpAddress?: string;
  /**
   * @remarks
   * The region ID of the BGP group to which the BGP peer belongs. 
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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

