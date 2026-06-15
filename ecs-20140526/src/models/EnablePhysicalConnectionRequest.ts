// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnablePhysicalConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that ensures the request is idempotent.
   * 
   * Your client generates this token, which must be unique for each request. The token can contain only ASCII characters and must not exceed 64 characters in length.
   * 
   * This parameter is required.
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the physical connection.
   * 
   * This parameter is required.
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The ID of the region where the physical connection is located.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the latest list of regions.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IPv4 CIDR block of the gateway device in your data center.
   */
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      physicalConnectionId: 'PhysicalConnectionId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      physicalConnectionId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userCidr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

