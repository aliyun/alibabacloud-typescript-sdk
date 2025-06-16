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
   * The BGP group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bgpg-wz9f62v4fbg2g****
   */
  bgpGroupId?: string;
  /**
   * @remarks
   * Specifies whether to clear the secret key. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  clearAuthKey?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The BGP group description.
   * 
   * The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * BGP
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to use a fake AS number. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * > A router that runs BGP typically belongs to only one AS. If you need to replace an AS with a new one, but you cannot immediately modify BGP configurations due to business requirements, you can specify a fake AS number to establish a connection with the local end. This ensures service continuity in scenarios such as AS migration or AS merging.
   * 
   * @example
   * false
   */
  isFakeAsn?: boolean;
  /**
   * @remarks
   * The custom autonomous system number (ASN) of the BGP on the Alibaba Cloud side. Valid values:
   * 
   * *   **45104**
   * *   **64512~65534**
   * *   **4200000000~4294967294**
   * 
   * >  **65025** is reserved by Alibaba Cloud. Alibaba Cloud uses **45104** as the **local ASN** by default. Custom **local ASNs** may cause loops in multi-line scenarios. Proceed with caution.
   * 
   * @example
   * 45104
   */
  localAsn?: number;
  /**
   * @remarks
   * The BGP group name.
   * 
   * The name must be 2 to 128 characters in length, and can contain digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter but cannot start with `http://` or `https://`.
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
   * @example
   * 1****
   */
  peerAsn?: number;
  /**
   * @remarks
   * The region ID of the BGP group.
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

