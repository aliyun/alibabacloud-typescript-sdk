// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRouterInterfaceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure that the request is idempotent. You can generate this token from your client, but you must ensure that it is unique across requests. The token must consist of only ASCII characters and not exceed 64 characters in length.
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the router interface is located. To obtain the latest list of regions, call the [DescribeRegions](~~DescribeRegions~~) operation.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the router interface.
   * 
   * This parameter is required.
   */
  routerInterfaceId?: string;
  /**
   * @remarks
   * The new specification of the router interface. The supported specifications vary based on the type and region of the router interface. For more information, see the pricing page of Express Connect.
   * 
   * This parameter is required.
   */
  spec?: string;
  /**
   * @remarks
   * The client-side CIDR block for the router interface. This parameter is used for VBR-to-VPC connections. The system assigns a gateway IP address from this CIDR block to the VBR to forward traffic to the VPC.
   */
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routerInterfaceId: 'RouterInterfaceId',
      spec: 'Spec',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routerInterfaceId: 'string',
      spec: 'string',
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

