// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WithdrawPublishedRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-sxjfjkjfkjfiein****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-rj9gt5nll27onu7****
   */
  childInstanceId?: string;
  /**
   * @remarks
   * The region ID of the network instance.
   * 
   * Call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  childInstanceRegionId?: string;
  /**
   * @remarks
   * The route table ID of the network instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-bp174d1gje79u1g4t****
   */
  childInstanceRouteTableId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * - **VPC**: virtual private cloud.
   * 
   * - **VBR**: virtual border router.
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  childInstanceType?: string;
  /**
   * @remarks
   * The destination CIDR block of the route entry that you want to withdraw.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.16.1.0/24
   */
  destinationCidrBlock?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      childInstanceType: 'ChildInstanceType',
      destinationCidrBlock: 'DestinationCidrBlock',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceRegionId: 'string',
      childInstanceRouteTableId: 'string',
      childInstanceType: 'string',
      destinationCidrBlock: 'string',
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

