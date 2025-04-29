// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostClustersResponseBodyDedicatedHostClustersDedicatedHostClusterDedicatedHostClusterCapacityLocalStorageCapacitiesLocalStorageCapacity extends $dara.Model {
  /**
   * @remarks
   * The available capacity of the local disk. Unit: GiB
   * 
   * @example
   * 20
   */
  availableDisk?: number;
  /**
   * @remarks
   * The category of data disks. Valid values:
   * 
   * *   cloud: basic disk
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   ephemeral_ssd: local SSD
   * *   cloud_essd: Enterprise SSD (ESSD)
   * 
   * @example
   * cloud
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * The total capacity of the local disk. Unit: GiB
   * 
   * @example
   * 40
   */
  totalDisk?: number;
  static names(): { [key: string]: string } {
    return {
      availableDisk: 'AvailableDisk',
      dataDiskCategory: 'DataDiskCategory',
      totalDisk: 'TotalDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableDisk: 'number',
      dataDiskCategory: 'string',
      totalDisk: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

