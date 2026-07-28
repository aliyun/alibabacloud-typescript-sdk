// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBgpGroupAttributeRequest extends $dara.Model {
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
   * The ID of the BGP group.
   * 
   * This parameter is required.
   * 
   * @example
   * bgpg-wz9f62v4fbg2g****
   */
  bgpGroupId?: string;
  /**
   * @remarks
   * Specifies whether to clear the authentication key. Valid values:
   * 
   * - **true**: Yes.
   * - **false** (default): No.
   * 
   * @example
   * false
   */
  clearAuthKey?: boolean;
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
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * BGP
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to use a fake ASN. Valid values:
   * 
   * - **false** (default): No.
   * - **true**: Yes.
   * 
   * > A router that runs BGP can belong to only one AS. When you need to replace an existing AS with a new one (for example, during AS migration or merger with another AS) and cannot immediately modify the BGP configuration due to business constraints, you can specify a fake ASN to establish a connection with the local end to ensure service continuity.
   * 
   * @example
   * false
   */
  isFakeAsn?: boolean;
  /**
   * @remarks
   * The custom Alibaba Cloud-side BGP autonomous system number (ASN). Valid values:
   * 
   * - **45104**
   * - **64512 to 65534**
   * - **4200000000 to 4294967294**
   * 
   * > **65025** is reserved by Alibaba Cloud. The Alibaba Cloud side uses **45104** as the default **LocalAsn** value. Using a custom **LocalAsn** value in multi-ISP access scenarios may cause BGP routing loops. Evaluate the risks before you use this feature.
   * 
   * @example
   * 45104
   */
  localAsn?: number;
  /**
   * @remarks
   * The name of the BGP group. 
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ASN of the on-premises device.
   * 
   * @example
   * 1****
   */
  peerAsn?: number;
  /**
   * @remarks
   * The region ID of the BGP group. 
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
   * The maximum number of routes for a BGP peer. Unit: entries. Default value: **110**.
   * 
   * @example
   * 110
   */
  routeQuota?: number;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      bgpGroupId: 'BgpGroupId',
      clearAuthKey: 'ClearAuthKey',
      clientToken: 'ClientToken',
      description: 'Description',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      bgpGroupId: 'string',
      clearAuthKey: 'boolean',
      clientToken: 'string',
      description: 'string',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

