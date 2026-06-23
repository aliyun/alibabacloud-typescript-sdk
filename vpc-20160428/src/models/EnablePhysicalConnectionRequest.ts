// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnablePhysicalConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to bypass the service provider (SP) subscription lifecycle. Valid values:
   * 
   * - **true**: Bypasses the SP subscription lifecycle. This means the instance is no longer managed by the Alibaba Cloud subscription system.
   * 
   * - **false** (default): Does not bypass the SP subscription lifecycle.
   * 
   * > To use this feature, contact your account manager.
   * 
   * @example
   * false
   */
  byPassSp?: boolean;
  /**
   * @remarks
   * A client-generated token that is used to ensure the idempotence of the request.
   * 
   * The token must be unique across requests. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the physical connection.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-2zeoaxkq3x****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The ID of the region where the physical connection is located.
   * 
   * You can call `DescribeRegions` to get the latest region IDs.
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
      byPassSp: 'ByPassSp',
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      physicalConnectionId: 'PhysicalConnectionId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byPassSp: 'boolean',
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      physicalConnectionId: 'string',
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

