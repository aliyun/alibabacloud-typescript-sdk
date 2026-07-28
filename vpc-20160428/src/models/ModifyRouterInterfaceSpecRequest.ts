// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRouterInterfaceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may vary for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the router interface is located.
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
   * 
   * This parameter is required.
   * 
   * @example
   * ri-2zeo3xzyf38r4urzd****
   */
  routerInterfaceId?: string;
  /**
   * @remarks
   * The specification of the router interface. The following specifications and their corresponding bandwidths are available:
   * 
   * * **Mini.2**: 2 Mbps
   * 
   * * **Mini.5**: 5 Mbps
   * 
   * * **Small.1**: 10 Mbps
   * 
   * * **Small.2**: 20 Mbps
   * 
   * * **Small.5**: 50 Mbps
   * 
   * * **Middle.1**: 100 Mbps
   * 
   * * **Middle.2**: 200 Mbps
   * 
   * * **Middle.5**: 500 Mbps
   * 
   * * **Large.1**: 1000 Mbps
   * 
   * * **Large.2**: 2000 Mbps
   * 
   * * **Large.5**: 5000 Mbps
   * 
   * * **Xlarge.1**: 10000 Mbps
   * 
   * > If **Role** is set to **AcceptingSide** (accepter VPC), set **Spec** to **Negative**.
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

