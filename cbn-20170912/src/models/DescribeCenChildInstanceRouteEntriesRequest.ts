// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenChildInstanceRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-7qthudw0ll6jmc****
   */
  cenId?: string;
  /**
   * @remarks
   * The network instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp18sth14qii3pnvo****
   */
  childInstanceId?: string;
  /**
   * @remarks
   * The region ID of the network instance.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to obtain the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  childInstanceRegionId?: string;
  /**
   * @remarks
   * The routing table ID of the network instance.
   * If you do not specify a routing table ID when querying route entries of a VPC-connected instance, the system queries route entries in the system routing table of the VPC-connected instance by default.
   * 
   * @example
   * vtb-p0wxx3apzgn6uqp3r****
   */
  childInstanceRouteTableId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * - **VPC**: virtual private cloud (VPC).
   * 
   * - **VBR**: virtual border router (VBR).
   * 
   * - **CCN**: Cloud Connect Network (CCN).
   * 
   * - **ECR**: Express Connect Router (ECR).
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  childInstanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
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
   * The number of entries per page for paging queries. Default value: **10**. Valid values: **1** to **500**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the route entry. Valid values:
   * 
   * - **Active**: active.
   * 
   * - **Candidate**: candidate.
   * 
   * - **Rejected**: rejected.
   * 
   * - **Prohibited**: prohibited.
   * 
   * - **All** (default): queries route entries in all states of the network instance.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceId: 'ChildInstanceId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      childInstanceType: 'ChildInstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceId: 'string',
      childInstanceRegionId: 'string',
      childInstanceRouteTableId: 'string',
      childInstanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

