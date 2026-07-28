// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnablePhysicalConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to skip the SP (order lifecycle). Valid values:
   * - **true**: Skips the SP. The Alibaba Cloud billing system no longer manages this instance, and the instance can be used free of charge.
   * - **false** (default): Does not skip the SP.
   * 
   * > To use this feature, contact your account manager.
   * 
   * @example
   * false
   */
  byPassSp?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * The client generates the value of this parameter. Make sure that the value is unique among different requests. The value can be up to 64 ASCII characters in length.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the Express Connect circuit.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-2zeoaxkq3x****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The region where the Express Connect circuit resides.
   * 
   * You can call the DescribeRegions operation to query the region ID.
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

