// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether instances can be deployed on the host. Valid values:
   * 
   * *   **0**: Instances cannot be deployed on the host.
   * *   **1**: Instances can be deployed on the host.
   * 
   * @example
   * 1
   */
  allocationStatus?: string;
  /**
   * @remarks
   * The dedicated cluster ID. You can call the DescribeDedicatedHostGroups operation to query the dedicated cluster ID.
   * 
   * @example
   * dhg-7a9xxxxxxxx
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The ID of the host in the dedicated cluster.
   * 
   * @example
   * ch-t4nn100ddxxxxxxxx
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The status of the host. Valid values:
   * 
   * *   **0**: creating
   * *   **1**: running
   * *   **2**: faulty
   * *   **3**: being replaced
   * *   **4**: deprecated
   * *   **5**: deleting
   * *   **6**: restarting
   * 
   * @example
   * 1
   */
  hostStatus?: string;
  /**
   * @remarks
   * The storage type of the host. Valid values:
   * 
   * *   **dhg_cloud_ssd**: enhanced SSD (ESSD)
   * *   **dhg_local_ssd**: local SSD
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
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
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

