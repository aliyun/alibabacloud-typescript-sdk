// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBgpGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication key of the BGP group.
   * 
   * @example
   * !PWZ2****
   */
  authKey?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the BGP group.
   * 
   * The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * BGP
   */
  description?: string;
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
  /**
   * @remarks
   * Specifies whether to use a fake ASN. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * >  A router that runs BGP typically belongs to only one AS. If you need to replace an existing AS with a new AS and you cannot immediately modify BGP configurations, you can use fake ASNs to ensure service continuity.
   * 
   * @example
   * true
   */
  isFakeAsn?: boolean;
  /**
   * @remarks
   * The custom ASN on the Alibaba Cloud side. Valid values:
   * 
   * *   **45104**
   * *   **64512~65534**
   * *   **4200000000~4294967294**
   * 
   * >  **65025** is reserved by Alibaba Cloud. By default, Alibaba Cloud uses **45104** as **LocalAsn**. If you use custom **LocalAsn** in multi-line access scenarios, loops in BGP may occur.
   * 
   * @example
   * 45104
   */
  localAsn?: number;
  /**
   * @remarks
   * The name of the BGP group.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ASN of the gateway device in the data center.
   * 
   * This parameter is required.
   * 
   * @example
   * 1****
   */
  peerAsn?: number;
  /**
   * @remarks
   * The region ID of the VBR.
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
  /**
   * @remarks
   * The maximum number of routes supported by a BGP peer. Default value: **110**.
   * 
   * @example
   * 110
   */
  routeQuota?: number;
  /**
   * @remarks
   * The ID of the VBR.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-bp1ctxy813985gkuk****
   */
  routerId?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      clientToken: 'ClientToken',
      description: 'Description',
      ipVersion: 'IpVersion',
      isFakeAsn: 'IsFakeAsn',
      localAsn: 'LocalAsn',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      peerAsn: 'PeerAsn',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeQuota: 'RouteQuota',
      routerId: 'RouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      clientToken: 'string',
      description: 'string',
      ipVersion: 'string',
      isFakeAsn: 'boolean',
      localAsn: 'number',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      peerAsn: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeQuota: 'number',
      routerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

