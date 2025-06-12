// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZonesZoneNetworkTypes } from "./DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZonesZoneNetworkTypes";


export class DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZonesZone extends $dara.Model {
  /**
   * @remarks
   * The details of the network types of the instance type.
   */
  networkTypes?: DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZonesZoneNetworkTypes;
  /**
   * @remarks
   * The ID of the zone in which the instance type is available.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneNo?: string;
  static names(): { [key: string]: string } {
    return {
      networkTypes: 'NetworkTypes',
      zoneNo: 'ZoneNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkTypes: DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZonesZoneNetworkTypes,
      zoneNo: 'string',
    };
  }

  validate() {
    if(this.networkTypes && typeof (this.networkTypes as any).validate === 'function') {
      (this.networkTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

