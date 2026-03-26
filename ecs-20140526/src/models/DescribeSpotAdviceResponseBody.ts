// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZoneAvailableSpotResourcesAvailableSpotResource extends $dara.Model {
  averageSpotDiscount?: number;
  instanceType?: string;
  interruptRateDesc?: string;
  interruptionRate?: number;
  static names(): { [key: string]: string } {
    return {
      averageSpotDiscount: 'AverageSpotDiscount',
      instanceType: 'InstanceType',
      interruptRateDesc: 'InterruptRateDesc',
      interruptionRate: 'InterruptionRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageSpotDiscount: 'number',
      instanceType: 'string',
      interruptRateDesc: 'string',
      interruptionRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZoneAvailableSpotResources extends $dara.Model {
  availableSpotResource?: DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZoneAvailableSpotResourcesAvailableSpotResource[];
  static names(): { [key: string]: string } {
    return {
      availableSpotResource: 'AvailableSpotResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableSpotResource: { 'type': 'array', 'itemType': DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZoneAvailableSpotResourcesAvailableSpotResource },
    };
  }

  validate() {
    if(Array.isArray(this.availableSpotResource)) {
      $dara.Model.validateArray(this.availableSpotResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZone extends $dara.Model {
  availableSpotResources?: DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZoneAvailableSpotResources;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableSpotResources: 'AvailableSpotResources',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableSpotResources: DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZoneAvailableSpotResources,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.availableSpotResources && typeof (this.availableSpotResources as any).validate === 'function') {
      (this.availableSpotResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpotAdviceResponseBodyAvailableSpotZones extends $dara.Model {
  availableSpotZone?: DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZone[];
  static names(): { [key: string]: string } {
    return {
      availableSpotZone: 'AvailableSpotZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableSpotZone: { 'type': 'array', 'itemType': DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZone },
    };
  }

  validate() {
    if(Array.isArray(this.availableSpotZone)) {
      $dara.Model.validateArray(this.availableSpotZone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpotAdviceResponseBody extends $dara.Model {
  availableSpotZones?: DescribeSpotAdviceResponseBodyAvailableSpotZones;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableSpotZones: 'AvailableSpotZones',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableSpotZones: DescribeSpotAdviceResponseBodyAvailableSpotZones,
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.availableSpotZones && typeof (this.availableSpotZones as any).validate === 'function') {
      (this.availableSpotZones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

