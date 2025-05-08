// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudDiskAvailableResourceInfoResponseBodySupportResourcesSupportResourceAbility } from "./DescribeCloudDiskAvailableResourceInfoResponseBodySupportResourcesSupportResourceAbility";


export class DescribeCloudDiskAvailableResourceInfoResponseBodySupportResourcesSupportResource extends $dara.Model {
  /**
   * @remarks
   * Node product capability.
   */
  ability?: DescribeCloudDiskAvailableResourceInfoResponseBodySupportResourcesSupportResourceAbility;
  /**
   * @remarks
   * The number of disks that you can purchase.
   * 
   * @example
   * 2
   */
  canBuyCount?: number;
  /**
   * @remarks
   * The type of the disk.
   * 
   * *   cloud_efficiency:ultra disk.
   * *   cloud_ssd:all-flash disk.
   * *   local_hdd:local HDD.
   * *   local_ssd:local SSD.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The default size of the disk. Unit: GiB.
   * 
   * @example
   * 20
   */
  defaultDiskSize?: number;
  /**
   * @remarks
   * The maximum size of the disk. Unit: GiB.
   * 
   * @example
   * 80
   */
  diskMaxSize?: number;
  /**
   * @remarks
   * The minimum size of the disk size. Unit: GiB.
   * 
   * @example
   * 20
   */
  diskMinSize?: number;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The name of the task node.
   * 
   * @example
   * Beijing Mobile
   */
  ensRegionName?: string;
  static names(): { [key: string]: string } {
    return {
      ability: 'Ability',
      canBuyCount: 'CanBuyCount',
      category: 'Category',
      defaultDiskSize: 'DefaultDiskSize',
      diskMaxSize: 'DiskMaxSize',
      diskMinSize: 'DiskMinSize',
      ensRegionId: 'EnsRegionId',
      ensRegionName: 'EnsRegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ability: DescribeCloudDiskAvailableResourceInfoResponseBodySupportResourcesSupportResourceAbility,
      canBuyCount: 'number',
      category: 'string',
      defaultDiskSize: 'number',
      diskMaxSize: 'number',
      diskMinSize: 'number',
      ensRegionId: 'string',
      ensRegionName: 'string',
    };
  }

  validate() {
    if(this.ability && typeof (this.ability as any).validate === 'function') {
      (this.ability as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

