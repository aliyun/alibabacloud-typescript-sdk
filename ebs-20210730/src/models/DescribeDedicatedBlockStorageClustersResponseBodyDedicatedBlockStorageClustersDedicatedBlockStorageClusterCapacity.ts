// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersDedicatedBlockStorageClusterCapacity extends $dara.Model {
  /**
   * @remarks
   * The available capacity of the dedicated block storage cluster. Unit: GiB.
   * 
   * @example
   * 61440
   */
  availableCapacity?: number;
  /**
   * @remarks
   * The total capacity of the dedicated block storage cluster that was delivered in disk creation orders. Unit: GB.
   * 
   * @example
   * 61440
   */
  availableDeviceCapacity?: number;
  /**
   * @remarks
   * This parameter is displayed only if Thin Provision is enabled.
   * 
   * @example
   * 40000.3
   */
  availableSpaceCapacity?: number;
  /**
   * @remarks
   * The capacity of the dedicated block storage cluster that was delivered in orders. Unit: GB.
   * 
   * @example
   * 61440
   */
  clusterAvailableCapacity?: number;
  /**
   * @remarks
   * The capacity of the dedicated block storage cluster that is to be delivered in orders. Unit: GB.
   * 
   * @example
   * 0
   */
  clusterDeliveryCapacity?: number;
  /**
   * @remarks
   * The capacity to be delivered for the dedicated block storage cluster. Unit: GiB.
   * 
   * @example
   * 0
   */
  deliveryCapacity?: number;
  /**
   * @remarks
   * The total capacity of the dedicated block storage cluster. Unit: GiB.
   * 
   * @example
   * 61440
   */
  totalCapacity?: number;
  /**
   * @remarks
   * The total capacity of the dedicated block storage cluster that is to be delivered in disk creation orders. Unit: GB.
   * 
   * @example
   * 61440
   */
  totalDeviceCapacity?: number;
  /**
   * @remarks
   * This parameter is displayed only if Thin Provision is enabled.
   * 
   * @example
   * 73728
   */
  totalSpaceCapacity?: number;
  /**
   * @remarks
   * The used capacity of the dedicated block storage cluster. Unit: GiB.
   * 
   * @example
   * 1440
   */
  usedCapacity?: number;
  /**
   * @remarks
   * The capacity of the dedicated block storage cluster that was used to create disks. Unit: GB.
   * 
   * @example
   * 32000
   */
  usedDeviceCapacity?: number;
  /**
   * @remarks
   * This parameter is displayed only if Thin Provision is enabled.
   * 
   * @example
   * 33727.7
   */
  usedSpaceCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      availableCapacity: 'AvailableCapacity',
      availableDeviceCapacity: 'AvailableDeviceCapacity',
      availableSpaceCapacity: 'AvailableSpaceCapacity',
      clusterAvailableCapacity: 'ClusterAvailableCapacity',
      clusterDeliveryCapacity: 'ClusterDeliveryCapacity',
      deliveryCapacity: 'DeliveryCapacity',
      totalCapacity: 'TotalCapacity',
      totalDeviceCapacity: 'TotalDeviceCapacity',
      totalSpaceCapacity: 'TotalSpaceCapacity',
      usedCapacity: 'UsedCapacity',
      usedDeviceCapacity: 'UsedDeviceCapacity',
      usedSpaceCapacity: 'UsedSpaceCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCapacity: 'number',
      availableDeviceCapacity: 'number',
      availableSpaceCapacity: 'number',
      clusterAvailableCapacity: 'number',
      clusterDeliveryCapacity: 'number',
      deliveryCapacity: 'number',
      totalCapacity: 'number',
      totalDeviceCapacity: 'number',
      totalSpaceCapacity: 'number',
      usedCapacity: 'number',
      usedDeviceCapacity: 'number',
      usedSpaceCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

