// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNatGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcefully delete the NAT gateway. Valid values:
   * 
   * *   **true** If you set the value to **true**:
   * 
   *     *   If the NAT gateway has SNAT entries, the system automatically deletes them.
   *     *   If the NAT gateway has DNAT entries, the system automatically deletes them.
   *     *   If the NAT gateway is associated with an elastic IP address (EIP), the system automatically disassociates the EIP from the NAT gateway.
   *     *   If the NAT gateway is associated with a NAT bandwidth plan, the system automatically disassociates the NAT bandwidth plan.
   * 
   * *   **false**(default): no If you set the value to **false**:
   * 
   *     *   If the NAT gateway is associated with a NAT bandwidth plan, disassociate the NAT bandwidth plan first.
   *     *   If the NAT gateway has SNAT entries, delete them first.
   *     *   If the NAT gateway has DNAT entries, delete them first.
   *     *   If the NAT gateway is associated with an EIP, disassociate the EIP from the NAT gateway first.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The ID of the NAT gateway that you want to delete.
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

