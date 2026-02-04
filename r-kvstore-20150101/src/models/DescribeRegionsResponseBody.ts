// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsResponseBodyRegionIdsKVStoreRegionZoneIdList extends $dara.Model {
  zoneId?: string[];
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.zoneId)) {
      $dara.Model.validateArray(this.zoneId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionIdsKVStoreRegion extends $dara.Model {
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the region.
   * 
   * @example
   * r-kvstore.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The zone IDs.
   */
  zoneIdList?: DescribeRegionsResponseBodyRegionIdsKVStoreRegionZoneIdList;
  /**
   * @remarks
   * The IDs of the zones in the region.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneIds?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
      zoneIdList: 'ZoneIdList',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
      zoneIdList: DescribeRegionsResponseBodyRegionIdsKVStoreRegionZoneIdList,
      zoneIds: 'string',
    };
  }

  validate() {
    if(this.zoneIdList && typeof (this.zoneIdList as any).validate === 'function') {
      (this.zoneIdList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionIds extends $dara.Model {
  KVStoreRegion?: DescribeRegionsResponseBodyRegionIdsKVStoreRegion[];
  static names(): { [key: string]: string } {
    return {
      KVStoreRegion: 'KVStoreRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KVStoreRegion: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionIdsKVStoreRegion },
    };
  }

  validate() {
    if(Array.isArray(this.KVStoreRegion)) {
      $dara.Model.validateArray(this.KVStoreRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The **region IDs**.
   */
  regionIds?: DescribeRegionsResponseBodyRegionIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AD425AD3-CC7B-4EE2-A5CB-2F61BA73****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regionIds: 'RegionIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionIds: DescribeRegionsResponseBodyRegionIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.regionIds && typeof (this.regionIds as any).validate === 'function') {
      (this.regionIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

