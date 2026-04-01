// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesResponseBodyZonesZoneCapacity extends $dara.Model {
  protocol?: string[];
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.protocol)) {
      $dara.Model.validateArray(this.protocol);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneInstanceTypesInstanceType extends $dara.Model {
  protocolType?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      protocolType: 'ProtocolType',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocolType: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZoneInstanceTypes extends $dara.Model {
  instanceType?: DescribeZonesResponseBodyZonesZoneInstanceTypesInstanceType[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZoneInstanceTypesInstanceType },
    };
  }

  validate() {
    if(Array.isArray(this.instanceType)) {
      $dara.Model.validateArray(this.instanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZonePerformance extends $dara.Model {
  protocol?: string[];
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.protocol)) {
      $dara.Model.validateArray(this.protocol);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZonesZone extends $dara.Model {
  capacity?: DescribeZonesResponseBodyZonesZoneCapacity;
  instanceTypes?: DescribeZonesResponseBodyZonesZoneInstanceTypes;
  performance?: DescribeZonesResponseBodyZonesZonePerformance;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      instanceTypes: 'InstanceTypes',
      performance: 'Performance',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: DescribeZonesResponseBodyZonesZoneCapacity,
      instanceTypes: DescribeZonesResponseBodyZonesZoneInstanceTypes,
      performance: DescribeZonesResponseBodyZonesZonePerformance,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.capacity && typeof (this.capacity as any).validate === 'function') {
      (this.capacity as any).validate();
    }
    if(this.instanceTypes && typeof (this.instanceTypes as any).validate === 'function') {
      (this.instanceTypes as any).validate();
    }
    if(this.performance && typeof (this.performance as any).validate === 'function') {
      (this.performance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $dara.Model {
  zone?: DescribeZonesResponseBodyZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZonesZone },
    };
  }

  validate() {
    if(Array.isArray(this.zone)) {
      $dara.Model.validateArray(this.zone);
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
   * The request ID.
   * 
   * @example
   * A70BEE5D-76D3-49FB-B58F-1F398211****
   */
  requestId?: string;
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

