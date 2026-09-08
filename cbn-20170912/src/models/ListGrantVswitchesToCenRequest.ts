// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGrantVSwitchesToCenRequest extends $dara.Model {
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-44m0p68spvlrqq****
   */
  cenId?: string;
  /**
   * @remarks
   * Specifies whether IPv6 is enabled. A value of true indicates that IPv6 is enabled. A value of false indicates that IPv6 is not enabled. If you leave this parameter empty, the system does not filter by this property.
   * 
   * @example
   * true
   */
  enabledIpv6?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the list. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging. Valid values: **1** to **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the VPC-connected instance.
   * 
   * You can invoke the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query region IDs.
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
   * The VPC-connected instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp12ge2tq5gzdc915****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * - If you specify a zone ID, the system queries only the vSwitches that are in the specified zone of the VPC-connected instance.
   * - If you do not specify a zone ID, the system queries the vSwitches in all active zones of the VPC-connected instance by default.
   * 
   * You can invoke the [DescribeZones](https://help.aliyun.com/document_detail/36064.html) operation to query zone IDs.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      enabledIpv6: 'EnabledIpv6',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      enabledIpv6: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

