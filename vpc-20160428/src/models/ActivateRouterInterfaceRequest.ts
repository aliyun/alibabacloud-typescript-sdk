// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActivateRouterInterfaceRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the router interface.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the router interface. 
   * >The ID of the router interface. This operation supports only interfaces in the Inactive state. If the state does not match, the IncorrectRIStatus error is returned. Newly created interfaces are not in the Inactive state and cannot be directly activated: interfaces created in express connect mode are automatically connected and in the Active state. You must first call DeactivateRouterInterface to change them to the Inactive state. Interfaces created in non-express connect mode are in the Idle state. You must first configure peer information and call ConnectRouterInterface to establish the connection to the Active state, and then call DeactivateRouterInterface. State transition: Active --DeactivateRouterInterface--> Inactive --ActivateRouterInterface--> Active. If the interface is in an intermediate state such as Connecting, Activating, or Deactivating, poll DescribeRouterInterfaceAttribute until the state stabilizes.
   * 
   * This parameter is required.
   * 
   * @example
   * ri-2zeo3xzyf38r4urz****
   */
  routerInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routerInterfaceId: 'RouterInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routerInterfaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

