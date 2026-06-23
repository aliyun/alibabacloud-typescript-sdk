// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBgpPeerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the BGP peer.
   * 
   * This parameter is required.
   * 
   * @example
   * bgp-wz977wcrmb69a********
   */
  bgpPeerId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken only supports ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may vary for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the BGP group is located.
   * 
   * You can obtain the region ID by calling the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) API.
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
      bgpPeerId: 'BgpPeerId',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpPeerId: 'string',
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

