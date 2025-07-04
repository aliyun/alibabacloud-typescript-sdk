// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiAccountDeliveryChannelStatisticsResponseBodyDeliveryChannelStatistics extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery channel.
   * 
   * @example
   * dc-6q79dm4o9***
   */
  deliveryChannelId?: string;
  /**
   * @remarks
   * The name of the delivery channel.
   * 
   * @example
   * test-multi-account-delivery
   */
  deliveryChannelName?: string;
  /**
   * @remarks
   * The last delivery time of resource configuration change events.
   * 
   * @example
   * 2025-06-03T16:05:15Z
   */
  latestChangeDeliveryTime?: string;
  /**
   * @remarks
   * The last delivery time of scheduled resource snapshots.
   * 
   * @example
   * 2025-06-03T16:00:00Z
   */
  latestSnapshotDeliveryTime?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
      latestChangeDeliveryTime: 'LatestChangeDeliveryTime',
      latestSnapshotDeliveryTime: 'LatestSnapshotDeliveryTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      latestChangeDeliveryTime: 'string',
      latestSnapshotDeliveryTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

