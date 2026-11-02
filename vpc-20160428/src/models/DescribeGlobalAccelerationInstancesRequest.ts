// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalAccelerationInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth type of the Global Accelerator (GA) instance. Valid values: 
   *            
   * - **Sharing**: Shared bandwidth instance.
   *   
   * - **Exclusive** (default): Exclusive bandwidth instance.
   * 
   * @example
   * Exclusive
   */
  bandwidthType?: string;
  /**
   * @remarks
   * The ID of the Global Accelerator (GA) instance.
   * 
   * @example
   * ga-234sljmxaz****
   */
  globalAccelerationInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to include subscription data that has not taken effect. Valid values:
   * 
   * - **false** (default): Does not include subscription data that has not taken effect.
   * 
   * - **true**: Includes subscription data that has not taken effect.
   * 
   * @example
   * false
   */
  includeReservationData?: boolean;
  /**
   * @remarks
   * The public IP address of the Global Accelerator (GA) instance.
   * 
   * @example
   * 12.xx.xx.78
   */
  ipAddress?: string;
  /**
   * @remarks
   * The name of the Global Accelerator (GA) instance.
   * 
   * @example
   * GA-1
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the list. Default value: **1**.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the Global Accelerator (GA) instance resides. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * The instance ID of the backend service.
   * 
   * @example
   * i-sxjblddejj9x****
   */
  serverId?: string;
  /**
   * @remarks
   * The region of the backend service. Valid values: 
   * 
   * - **china-mainland**: The Chinese mainland.
   * 
   * - **north-america**: North America.
   *    
   * - **asia-pacific**: Asia-Pacific.
   *    
   * - **europe**: Europe.
   * 
   * @example
   * china-mainland
   */
  serviceLocation?: string;
  /**
   * @remarks
   * The status of the Global Accelerator (GA) instance. Valid values: 
   * 
   * - **Available**: Available.
   * 
   * - **Inuse**: Allocated.
   *    
   * - **Associating**: Associating.
   *    
   * - **Unassociating**: Unassociating.
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

