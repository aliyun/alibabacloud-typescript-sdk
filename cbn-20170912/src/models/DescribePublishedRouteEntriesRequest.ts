// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePublishedRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Cloud Enterprise Network (CEN).
   * 
   * This parameter is required.
   * 
   * @example
   * cen-7qthudw0ll6jm****
   */
  cenId?: string;
  /**
   * @remarks
   * The instance ID of the network instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp18sth14qii3pnv****
   */
  childInstanceId?: string;
  /**
   * @remarks
   * The region ID of the network instance.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  childInstanceRegionId?: string;
  /**
   * @remarks
   * The ID of the route table of the network instance.
   * 
   * @example
   * vtb-bp174d1gje79u1g4****
   */
  childInstanceRouteTableId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values: 
   * 
   * - **VPC**: VPC
   * 
   * - **VBR**: VBR
   * 
   * - **CCN**: Cloud Connect Network
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  childInstanceType?: string;
  /**
   * @remarks
   * The destination CIDR block of the route entry to query.
   * 
   * @example
   * 172.16.0.0/16
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page in a paging query. Default value: **10**. Valid values: **1** to **500**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      pageNumber: 'number',
      pageSize: 'number',
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

