// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNatGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcefully delete the NAT gateway. Valid values:
   * 
   * - **true**: forcefully deletes the NAT gateway. If this parameter is set to **true**:
   * 
   *     - If the NAT gateway has SNAT rules, the system force deletes the SNAT rules.
   * 
   *     - If the NAT gateway has DNAT rules, the system force deletes the DNAT rules.
   * 
   *     - If the NAT gateway has associated Elastic IP Addresses (EIPs), the system automatically disassociates the EIPs.
   * 
   *     - If the NAT gateway has NAT service plans that are not deleted, the system force deletes the NAT service plans.
   * 
   * - **false** (default): does not forcefully delete the NAT gateway. If this parameter is set to **false**:
   * 
   *     - If the NAT gateway has NAT service plans that are not deleted, delete the NAT service plans first.
   * 
   *     - If the NAT gateway has SNAT rules, delete the SNAT rules first.
   * 
   *     - If the NAT gateway has DNAT rules, delete the DNAT rules first.
   * 
   *     - If the NAT gateway has associated EIPs, disassociate the EIPs first.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The instance ID of the NAT gateway that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the NAT gateway.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
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
      force: 'boolean',
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

