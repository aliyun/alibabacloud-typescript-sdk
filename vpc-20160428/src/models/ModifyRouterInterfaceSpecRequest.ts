// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRouterInterfaceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the router interface is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * 
   * This parameter is required.
   * 
   * @example
   * ri-2zeo3xzyf38r4urzd****
   */
  routerInterfaceId?: string;
  /**
   * @remarks
   * The specification of the router interface. Valid specifications and bandwidth values:
   * 
   * *   **Mini.2**: 2 Mbit/s
   * *   **Mini.5**: 5 Mbit/s
   * *   **Small.1**: 10 Mbit/s
   * *   **Small.2**: 20 Mbit/s
   * *   **Small.5**: 50 Mbit/s
   * *   **Middle.1**: 100 Mbit/s
   * *   **Middle.2**: 200 Mbit/s
   * *   **Middle.5**: 500 Mbit/s
   * *   **Large.1**: 1,000 Mbit/s
   * *   **Large.2**: 2,000 Mbit/s
   * *   **Large.5**: 5,000 Mbit/s
   * *   **Xlarge.1**: 10,000 Mbit/s
   * 
   * >  When **Role** is set to **AcceptingSide**, set **Spec** to **Negative**.
   * 
   * This parameter is required.
   * 
   * @example
   * Small.1
   */
  spec?: string;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

