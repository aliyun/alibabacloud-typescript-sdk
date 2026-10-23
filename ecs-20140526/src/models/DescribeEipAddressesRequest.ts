// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEipAddressesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The first filter key. Set the value to CreationStartTime, which specifies the start time of resource creation.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The first filter value. Specify the time in UTC in the YYYY-MM-DDThh:mmZ format.
   * 
   * @example
   * 2023-01-01T01:00Z
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesRequest extends $dara.Model {
  filter?: DescribeEipAddressesRequestFilter[];
  /**
   * @remarks
   * The ID of the EIP to query. You can enter up to 50 IDs. Separate multiple IDs with commas.
   * 
   * @example
   * eip-2zeerraiwb7ujxscd****
   */
  allocationId?: string;
  /**
   * @remarks
   * The ID of the associated cloud service instance.
   * 
   * @example
   * i-2zebb08phyccdvf****
   */
  associatedInstanceId?: string;
  /**
   * @remarks
   * The type of the associated cloud service instance. Valid values: EcsInstance, SlbInstance, Nat, HaVip, NetworkInterface, and IpAddress.
   * 
   * @example
   * EcsInstance
   */
  associatedInstanceType?: string;
  /**
   * @remarks
   * The billing method of the EIP. Valid values: PostPaid (pay-as-you-go) and PrePaid (subscription).
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The EIP address to query. You can enter up to 50 addresses. Separate multiple addresses with commas.
   * 
   * @example
   * 47.75.XX.XX
   */
  eipAddress?: string;
  /**
   * @remarks
   * The line type. Valid values include BGP and BGP_PRO.
   * 
   * @example
   * BGP
   */
  ISP?: string;
  /**
   * @remarks
   * The lock type. Valid values: financial (locked due to overdue payment) and security (locked due to security reasons).
   * 
   * @example
   * financial
   */
  lockReason?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100. Default value: 10.
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the EIP resides. You can call the DescribeRegions operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the EIP. Valid values: Associating, Unassociating, InUse, Available, and Releasing.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      allocationId: 'AllocationId',
      associatedInstanceId: 'AssociatedInstanceId',
      associatedInstanceType: 'AssociatedInstanceType',
      chargeType: 'ChargeType',
      eipAddress: 'EipAddress',
      ISP: 'ISP',
      lockReason: 'LockReason',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeEipAddressesRequestFilter },
      allocationId: 'string',
      associatedInstanceId: 'string',
      associatedInstanceType: 'string',
      chargeType: 'string',
      eipAddress: 'string',
      ISP: 'string',
      lockReason: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

