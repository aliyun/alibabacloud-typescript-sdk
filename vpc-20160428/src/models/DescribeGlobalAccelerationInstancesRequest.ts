// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalAccelerationInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth type of the GA instance. Valid values:
   * 
   * *   **Sharing**
   * *   **Exclusive** (default)
   * 
   * @example
   * Exclusive
   */
  bandwidthType?: string;
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * @example
   * ga-234sljmxaz****
   */
  globalAccelerationInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to return information about pending orders. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * false
   */
  includeReservationData?: boolean;
  /**
   * @remarks
   * The public IP address of the GA instance.
   * 
   * @example
   * 12.xx.xx.78
   */
  ipAddress?: string;
  /**
   * @remarks
   * The name of the GA instance.
   * 
   * @example
   * GA-1
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the GA instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * The ID of the backend service instance.
   * 
   * @example
   * i-sxjblddejj9x****
   */
  serverId?: string;
  /**
   * @remarks
   * The region of the backend service. Valid values:
   * 
   * *   **china-mainland**
   * *   **north-america**
   * *   **asia-pacific**
   * *   **europe**
   * 
   * @example
   * china-mainland
   */
  serviceLocation?: string;
  /**
   * @remarks
   * The status of the GA instance. Valid values:
   * 
   * *   **Available**
   * *   **Inuse**
   * *   **Associating**
   * *   **Unassociating**
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthType: 'BandwidthType',
      globalAccelerationInstanceId: 'GlobalAccelerationInstanceId',
      includeReservationData: 'IncludeReservationData',
      ipAddress: 'IpAddress',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverId: 'ServerId',
      serviceLocation: 'ServiceLocation',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthType: 'string',
      globalAccelerationInstanceId: 'string',
      includeReservationData: 'boolean',
      ipAddress: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverId: 'string',
      serviceLocation: 'string',
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

