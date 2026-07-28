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
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the BGP group.
   * 
   * The description must be 2 to 256 characters in length and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * @example
   * BGP
   */
  description?: string;
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * - **IPv4** (default): IPv4.
   * - **IPv6**: IPv6. IPv6 is supported only when the VBR for which the BGP group is created has the enable IPv6 feature turned on.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * Specifies whether to use a fake ASN. Valid values:
   * 
   * - **false** (default): No.
   * - **true**: Yes.
   * 
   * > A router that runs BGP can belong to only one AS. When you need to replace an existing AS with a new one (for example, due to AS migration or merger with another AS) and cannot immediately modify the BGP configuration because of business or other objective factors, you can specify a fake ASN to establish a connection with the local end to ensure service continuity.
   * 
   * @example
   * true
   */
  isFakeAsn?: boolean;
  /**
   * @remarks
   * The custom ASN on the Alibaba Cloud side. Valid values:
   * 
   * - **45104**
   * - **64512 to 65534**
   * - **4200000000 to 4294967294**
   * 
   * > **65025** is reserved by Alibaba Cloud. The default value of LocalAsn on the Alibaba Cloud side is **45104**. Using a custom LocalAsn in multi-line access scenarios may cause BGP routing loops. Evaluate the risks before you use this feature.
   * 
   * @example
   * 45104
   */
  localAsn?: number;
  /**
   * @remarks
   * The name of the BGP group.
   * 
   * The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ASN of the device on the on-premises data center side.
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
  /**
   * @remarks
   * The maximum number of routes for a BGP peer. Unit: routes. Default value: **110**.
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

