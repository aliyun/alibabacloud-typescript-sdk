// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDiskAvailableResourceInfoResponseBodySupportResourcesSupportResourceAbility extends $dara.Model {
  ability?: string[];
  static names(): { [key: string]: string } {
    return {
      ability: 'Ability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ability: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ability)) {
      $dara.Model.validateArray(this.ability);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeCloudDiskAvailableResourceInfoResponseBodySupportResources extends $dara.Model {
  supportResource?: DescribeCloudDiskAvailableResourceInfoResponseBodySupportResourcesSupportResource[];
  static names(): { [key: string]: string } {
    return {
      supportResource: 'SupportResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportResource: { 'type': 'array', 'itemType': DescribeCloudDiskAvailableResourceInfoResponseBodySupportResourcesSupportResource },
    };
  }

  validate() {
    if(Array.isArray(this.supportResource)) {
      $dara.Model.validateArray(this.supportResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDiskAvailableResourceInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AE4F26E-7527-569F-A987-E3CF269A3C11
   */
  requestId?: string;
  /**
   * @remarks
   * The specifications of resources that you can purchase.
   */
  supportResources?: DescribeCloudDiskAvailableResourceInfoResponseBodySupportResources;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportResources: DescribeCloudDiskAvailableResourceInfoResponseBodySupportResources,
    };
  }

  validate() {
    if(this.supportResources && typeof (this.supportResources as any).validate === 'function') {
      (this.supportResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

