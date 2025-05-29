// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenChildInstanceRouteEntryToCenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-7febra5nqj7jjh****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the network instance belongs.
   * 
   * > If the network instance belongs to another Alibaba Cloud account, this parameter is required.
   * 
   * @example
   * 1787100000000000
   */
  childInstanceAliUid?: number;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-k1alm2jbuwibhxtx2****
   */
  childInstanceId?: string;
  /**
   * @remarks
   * The ID of the region where the network instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-southeast-5
   */
  childInstanceRegionId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * *   **VPC**: a virtual private cloud (VPC)
   * *   **VBR**: a virtual border router (VBR)
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  childInstanceType?: string;
  /**
   * @remarks
   * The destination CIDR block of the route.
   * 
   * Specify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.22.0/24
   */
  destinationCidrBlock?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the route table configured on the network instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-k1aa8ulqs39f86op8****
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceAliUid: 'ChildInstanceAliUid',
      childInstanceId: 'ChildInstanceId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      destinationCidrBlock: 'DestinationCidrBlock',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceAliUid: 'number',
      childInstanceId: 'string',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      destinationCidrBlock: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

