// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormV2StorageUsageResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  capacityByDiskCategory?: { [key: string]: any }[];
  instanceStorageZoneMap?: { [key: string]: any };
  requestId?: string;
  usageByDiskCategory?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      capacityByDiskCategory: 'CapacityByDiskCategory',
      instanceStorageZoneMap: 'InstanceStorageZoneMap',
      requestId: 'RequestId',
      usageByDiskCategory: 'UsageByDiskCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      capacityByDiskCategory: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      instanceStorageZoneMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      usageByDiskCategory: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.capacityByDiskCategory)) {
      $dara.Model.validateArray(this.capacityByDiskCategory);
    }
    if(this.instanceStorageZoneMap) {
      $dara.Model.validateMap(this.instanceStorageZoneMap);
    }
    if(Array.isArray(this.usageByDiskCategory)) {
      $dara.Model.validateArray(this.usageByDiskCategory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

