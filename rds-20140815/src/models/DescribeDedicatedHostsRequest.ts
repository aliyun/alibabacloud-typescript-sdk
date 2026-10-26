// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the host allows instance allocation. Valid values:
   * * **0**: Not allowed.
   * * **1**: Allowed.
   * 
   * @example
   * 1
   */
  allocationStatus?: string;
  /**
   * @remarks
   * The dedicated cluster ID. You can call the DescribeDedicatedHostGroups operation to obtain the dedicated cluster ID.
   * 
   * @example
   * dhg-7a9xxxxxxxx
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The host ID of the dedicated cluster.
   * 
   * @example
   * ch-t4nn100ddxxxxxxxx
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The host status. Valid values:
   *  * **0**: Creating.
   *  * **1**: Running.
   *  * **2**: Down.
   *  * **3**: Down and offline (host replacement in progress).
   *  * **4**: Offline.
   *  * **5**: Deleted.
   *  * **6**: Restarting.
   * 
   * @example
   * 1
   */
  hostStatus?: string;
  /**
   * @remarks
   * The storage type of the host. Valid values:
   * * **dhg_cloud_ssd**: ESSD cloud disk.
   * * **dhg_local_ssd**: local SSD.
   * 
   * @example
   * dhg_cloud_ssd
   */
  hostType?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 102565235
   */
  orderId?: number;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationStatus: 'AllocationStatus',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHostId: 'DedicatedHostId',
      hostStatus: 'HostStatus',
      hostType: 'HostType',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStatus: 'string',
      dedicatedHostGroupId: 'string',
      dedicatedHostId: 'string',
      hostStatus: 'string',
      hostType: 'string',
      orderId: 'number',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

