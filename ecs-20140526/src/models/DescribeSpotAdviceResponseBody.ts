// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZoneAvailableSpotResourcesAvailableSpotResource extends $dara.Model {
  /**
   * @remarks
   * The percentage of the average spot instance price relative to the pay-as-you-go instance price in the previous 30 days. Unit: %. Valid values: 1 to 100.
   * 
   * You can calculate the average spot instance price based on the return value. For example, if the pay-as-you-go instance price is 1 and the return value of this parameter is 20, the average spot instance price in the previous 30 days is 0.2.
   * 
   * @example
   * 20
   */
  averageSpotDiscount?: number;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.c5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The release rate range of spot instances in the previous 30 days, which corresponds to the `InterruptionRate` value. Valid values:
   * 
   * *   0-3%
   * *   3-5%
   * *   5-10%
   * *   10-100%
   * 
   * @example
   * 0-3%
   */
  interruptRateDesc?: string;
  /**
   * @remarks
   * The average release rate of spot instances in the previous 30 days. Unit: %.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * Details about spot instances in the previous 30 days, including the release rate of spot instances and percentages of average spot instance prices relative to pay-as-you-go instance prices.
   */
  availableSpotResources?: DescribeSpotAdviceResponseBodyAvailableSpotZonesAvailableSpotZoneAvailableSpotResources;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
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
  /**
   * @remarks
   * Details about spot instances in the zones of the specified region.
   * 
   * >  The return values are sorted based on the historical percentages of average spot instance prices relative to pay-as-you-go instance prices for instance types.
   */
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

