// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKVCacheStoreAvailableHpnZonesResponseBodyInstanceHpnZonesAvailableHpnZones extends $dara.Model {
  /**
   * @example
   * default
   */
  hpnZone?: string;
  static names(): { [key: string]: string } {
    return {
      hpnZone: 'HpnZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpnZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKVCacheStoreAvailableHpnZonesResponseBodyInstanceHpnZones extends $dara.Model {
  availableHpnZones?: ListKVCacheStoreAvailableHpnZonesResponseBodyInstanceHpnZonesAvailableHpnZones[];
  /**
   * @example
   * kvcs-xxxxx
   */
  kvcsId?: string;
  /**
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableHpnZones: 'AvailableHpnZones',
      kvcsId: 'KvcsId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableHpnZones: { 'type': 'array', 'itemType': ListKVCacheStoreAvailableHpnZonesResponseBodyInstanceHpnZonesAvailableHpnZones },
      kvcsId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableHpnZones)) {
      $dara.Model.validateArray(this.availableHpnZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKVCacheStoreAvailableHpnZonesResponseBody extends $dara.Model {
  instanceHpnZones?: ListKVCacheStoreAvailableHpnZonesResponseBodyInstanceHpnZones[];
  /**
   * @example
   * 019FB5E9-F9E8-52F5-9C56-2CDF479CBEB2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceHpnZones: 'InstanceHpnZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceHpnZones: { 'type': 'array', 'itemType': ListKVCacheStoreAvailableHpnZonesResponseBodyInstanceHpnZones },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceHpnZones)) {
      $dara.Model.validateArray(this.instanceHpnZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

