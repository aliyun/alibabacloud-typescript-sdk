// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostsRequest extends $dara.Model {
  allocationStatus?: string;
  dedicatedHostGroupId?: string;
  dedicatedHostId?: string;
  hostStatus?: string;
  hostType?: string;
  orderId?: number;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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

