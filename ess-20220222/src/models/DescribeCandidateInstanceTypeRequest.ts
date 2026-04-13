// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCandidateInstanceTypeRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  allowCrossAz?: boolean;
  /**
   * @example
   * true
   */
  allowDifferentGeneration?: boolean;
  dataDiskCategories?: string[];
  /**
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @example
   * centos6u5_64_20G_aliaegis****.vhd
   */
  imageId?: string;
  /**
   * @example
   * centos6u5_64_20G_aliaegis_20140703.vhd
   */
  imageName?: string;
  instanceTypes?: string[];
  /**
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @example
   * 2
   */
  maxPrice?: number;
  ownerId?: number;
  /**
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  systemDiskCategories?: string[];
  zoneIds?: string[];
  static names(): { [key: string]: string } {
    return {
      allowCrossAz: 'AllowCrossAz',
      allowDifferentGeneration: 'AllowDifferentGeneration',
      dataDiskCategories: 'DataDiskCategories',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      imageName: 'ImageName',
      instanceTypes: 'InstanceTypes',
      ipv6AddressCount: 'Ipv6AddressCount',
      maxPrice: 'MaxPrice',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spotStrategy: 'SpotStrategy',
      systemDiskCategories: 'SystemDiskCategories',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCrossAz: 'boolean',
      allowDifferentGeneration: 'boolean',
      dataDiskCategories: { 'type': 'array', 'itemType': 'string' },
      imageFamily: 'string',
      imageId: 'string',
      imageName: 'string',
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      ipv6AddressCount: 'number',
      maxPrice: 'number',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spotStrategy: 'string',
      systemDiskCategories: { 'type': 'array', 'itemType': 'string' },
      zoneIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dataDiskCategories)) {
      $dara.Model.validateArray(this.dataDiskCategories);
    }
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    if(Array.isArray(this.systemDiskCategories)) {
      $dara.Model.validateArray(this.systemDiskCategories);
    }
    if(Array.isArray(this.zoneIds)) {
      $dara.Model.validateArray(this.zoneIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

