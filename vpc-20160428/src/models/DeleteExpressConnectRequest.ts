// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExpressConnectRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to delete the route entries associated with the Express Connect instance.
   * 
   * *   **true**: forcefully deletes the snapshot
   * *   **false**
   * 
   * @example
   * false
   */
  force?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Express Connect instance is deployed. Call the [DescribeRegion](https://www.alibabacloud.com/help/vpc/developer-reference/api-vpc-2016-04-28-describeregions?spm=a2c63.p38356.0.i2) operation to query the region list.
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
   * The ID of the Express Connect instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ri-119mfjz****
   */
  routerInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      force: 'Force',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routerInterfaceId: 'RouterInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      force: 'boolean',
      ownerAccount: 'string',
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

