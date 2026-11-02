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
   * - **true**: yes.
   * - **false** (default): no.
   * 
   * @example
   * false
   */
  clearAuthKey?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
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
   * Specifies whether to use a fake AS number. Valid values:
   * 
   * - **false** (default): no.
   * - **true**: yes.
   * 
   * > A router that runs BGP typically belongs to only one AS. If you need to replace the original AS with a new AS (for example, when the AS needs to be migrated or merged with another AS) and cannot immediately modify the BGP configurations due to business or other objective factors, you can specify a fake AS number to establish a connection with the local end to ensure service continuity.
   * 
   * @example
   * false
   */
  isFakeAsn?: boolean;
  /**
   * @remarks
   * The custom autonomous system (AS) number of Alibaba Cloud. Valid values:
   * 
   * - **45104**
   * - **64512 to 65534**
   * - **4200000000 to 4294967294**
   * 
   * > **65025** is reserved by Alibaba Cloud. By default, Alibaba Cloud uses **45104** as the **LocalAsn**. If you use a custom **LocalAsn** in multi-line access scenarios, there may be a risk of BGP routing loops. Evaluate the risks before you use this feature.
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
   * The AS number of the on-premises device.
   * 
   * @example
   * 1****
   */
  peerAsn?: number;
  /**
   * @remarks
   * The region ID of the BGP group. 
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
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
   * The maximum number of route entries that can be received by the BGP peer. Unit: entries. Default value: **110**.
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

