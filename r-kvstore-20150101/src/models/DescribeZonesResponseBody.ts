// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesResponseBodyZonesKVStoreZone extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Tair (Redis OSS-compatible) instances can be created in the current zone. Valid values:
   * 
   * *   **true**: Tair (Redis OSS-compatible) instances cannot be created in the current zone.
   * *   **false**: Tair (Redis OSS-compatible) instances can be created in the current zone.
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * Indicates whether the zone is managed by ApsaraDB RDS. The return value of this parameter is **true** in Tair (Redis OSS-compatible).
   * 
   * @example
   * true
   */
  isRds?: boolean;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether the network type of the instance can be changed from the classic network to Virtual Private Cloud (VPC). Valid values:
   * 
   * *   **true**: The network type of the instance can be changed from the classic network to VPC.
   * *   **false**: The network type of the instance cannot be changed from the classic network to VPC.
   * 
   * @example
   * true
   */
  switchNetwork?: boolean;
  /**
   * @remarks
   * The ID of the zone within the specified region.
   * 
   * @example
   * cn-huhehaote-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The name of the zone within the specified region.
   * 
   * @example
   * Hohhot Zone B
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      isRds: 'IsRds',
      regionId: 'RegionId',
      switchNetwork: 'SwitchNetwork',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      isRds: 'boolean',
      regionId: 'string',
      switchNetwork: 'boolean',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $dara.Model {
  KVStoreZone?: DescribeZonesResponseBodyZonesKVStoreZone[];
  static names(): { [key: string]: string } {
    return {
      KVStoreZone: 'KVStoreZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KVStoreZone: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesKVStoreZone },
    };
  }

  validate() {
    if(Array.isArray(this.KVStoreZone)) {
      $dara.Model.validateArray(this.KVStoreZone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1D42F072-72FE-4DC4-BB8E-64B1D298****
   */
  requestId?: string;
  /**
   * @remarks
   * The queried zones.
   */
  zones?: DescribeZonesResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: DescribeZonesResponseBodyZones,
    };
  }

  validate() {
    if(this.zones && typeof (this.zones as any).validate === 'function') {
      (this.zones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

