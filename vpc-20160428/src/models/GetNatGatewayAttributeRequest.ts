// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNatGatewayAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-bp1b0lic8uz4r6vf2****
   */
  natGatewayId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the NAT gateway.
   * 
   * Call the [DescribeRegions](https://help.aliyun.com/document_detail/448570.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      natGatewayId: 'NatGatewayId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGatewayId: 'string',
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

