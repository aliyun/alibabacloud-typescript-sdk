// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelPhysicalConnectionRequest extends $dara.Model {
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
   * pc-119mfjzm7****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The region ID of the Express Connect circuit. 
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query region IDs.
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

