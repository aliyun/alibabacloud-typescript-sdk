// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBgpPeerRequest extends $dara.Model {
  /**
   * @remarks
   * The BFD hop count. Valid values: **1** to **255**.
   * 
   * This parameter is required only if you enable BFD. The parameter specifies the maximum number of network devices that a packet can traverse from the source to the destination. Set a value based on your network topology.
   * 
   * > If you use BFD in a multi-cloud environment or a fiber-optic direct connection network without any bridge device, you need to change the default BFD hop count from **255** to **1**.
   * 
   * @example
   * 3
   */
  bfdMultiHop?: number;
  /**
   * @remarks
   * The ID of the BGP group.
   * 
   * This parameter is required.
   * 
   * @example
   * bgpg-wz9f62v4fbg****
   */
  bgpGroupId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * >  If you do not set this parameter, the system uses the value of **RequestId** as **ClientToken**. The value of **RequestId** for each API request is different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature. Valid values:
   * 
   * *   **true**: enables BFD.
   * *   **false**: disables BFD.
   * 
   * @example
   * true
   */
  enableBfd?: boolean;
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * *   **IPv4**: This is the default value.
   * *   **IPv6**: IPv6 is supported only if the VBR for which you want to create the BGP group has IPv6 enabled.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
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
   * The ID of the region to which the BGP group belongs.
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
      clientToken: 'ClientToken',
      enableBfd: 'EnableBfd',
      ipVersion: 'IpVersion',
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
      clientToken: 'string',
      enableBfd: 'boolean',
      ipVersion: 'string',
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

