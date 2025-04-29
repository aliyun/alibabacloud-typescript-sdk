// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeReservedInstancesRequestTag } from "./DescribeReservedInstancesRequestTag";


export class DescribeReservedInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The allocation type of the reserved instances. Valid values:
   * 
   * *   Normal: queries all reserved instances that belong to the current account.
   * *   Shared: queries the reserved instances that are shared between the current main account and linked accounts.
   * 
   * Default value: Normal.
   * 
   * @example
   * Normal
   */
  allocationType?: string;
  /**
   * @remarks
   * The instance type of the reserved instance. For information about the valid values, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * >  Specify the instance type that you selected when you purchased the reserved instance. If the reserved instance is a regional reserved instance, it can be used to offset the bills of instance types that belong to the same instance family as the specified instance type, regardless of instance specifications.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The instance family of the reserved instance. For information about the valid values, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * ecs.g5
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The reason why the reserved instance is locked. Valid values:
   * 
   * *   financial: The reserved instance is locked because the account has overdue payments or the service expires.
   * *   security: The reserved instance is locked due to security reasons.
   * 
   * @example
   * security
   */
  lockReason?: string;
  /**
   * @remarks
   * The payment option of the reserved instance. Valid values:
   * 
   * *   No Upfront
   * *   Partial Upfront
   * *   All Upfront
   * 
   * @example
   * All Upfront
   */
  offeringType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the reserved instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of reserved instances. You can specify up to 100 IDs of reserved instances.
   * 
   * @example
   * ri-bpzhex2ulpzf53****
   */
  reservedInstanceId?: string[];
  /**
   * @remarks
   * The name of the reserved instance.
   * 
   * >  Only exact search is supported.
   * 
   * @example
   * testReservedInstanceName
   */
  reservedInstanceName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The scope level of the reserved instance. Valid values:
   * 
   * *   Region: regional
   * *   Zone: zonal
   * 
   * @example
   * Region
   */
  scope?: string;
  /**
   * @remarks
   * The status of the reserved instances.
   * 
   * @example
   * Active
   */
  status?: string[];
  /**
   * @remarks
   * The tags of the reserved instance. You can specify up to 20 tags.
   */
  tag?: DescribeReservedInstancesRequestTag[];
  /**
   * @remarks
   * The zone ID of the reserved instance. This parameter is valid and required if you set Scope to Zone. You can call the [DescribeZones](https://help.aliyun.com/document_detail/25610.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-z
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationType: 'AllocationType',
      instanceType: 'InstanceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      lockReason: 'LockReason',
      offeringType: 'OfferingType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      reservedInstanceId: 'ReservedInstanceId',
      reservedInstanceName: 'ReservedInstanceName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scope: 'Scope',
      status: 'Status',
      tag: 'Tag',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationType: 'string',
      instanceType: 'string',
      instanceTypeFamily: 'string',
      lockReason: 'string',
      offeringType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      reservedInstanceId: { 'type': 'array', 'itemType': 'string' },
      reservedInstanceName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scope: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': DescribeReservedInstancesRequestTag },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reservedInstanceId)) {
      $dara.Model.validateArray(this.reservedInstanceId);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

