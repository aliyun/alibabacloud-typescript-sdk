// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeZonesResponseBodyZonesZoneCapacity } from "./DescribeZonesResponseBodyZonesZoneCapacity";
import { DescribeZonesResponseBodyZonesZoneInstanceTypes } from "./DescribeZonesResponseBodyZonesZoneInstanceTypes";
import { DescribeZonesResponseBodyZonesZonePerformance } from "./DescribeZonesResponseBodyZonesZonePerformance";


export class DescribeZonesResponseBodyZonesZone extends $dara.Model {
  /**
   * @remarks
   * This parameter is reserved. You can ignore this parameter.
   */
  capacity?: DescribeZonesResponseBodyZonesZoneCapacity;
  /**
   * @remarks
   * The details about file system types.
   */
  instanceTypes?: DescribeZonesResponseBodyZonesZoneInstanceTypes;
  /**
   * @remarks
   * This parameter is reserved. You can ignore this parameter.
   */
  performance?: DescribeZonesResponseBodyZonesZonePerformance;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-b
   */
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

