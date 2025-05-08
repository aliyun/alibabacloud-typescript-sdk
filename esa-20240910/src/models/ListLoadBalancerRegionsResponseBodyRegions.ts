// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLoadBalancerRegionsResponseBodyRegionsSubRegions } from "./ListLoadBalancerRegionsResponseBodyRegionsSubRegions";


export class ListLoadBalancerRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * Primary region Chinese full name
   * 
   * @example
   * 东南亚
   */
  regionCnName?: string;
  /**
   * @remarks
   * Primary region code
   * 
   * @example
   * SEAS
   */
  regionCode?: string;
  /**
   * @remarks
   * Primary region English full name
   * 
   * @example
   * South East Asia
   */
  regionEnName?: string;
  /**
   * @remarks
   * List of secondary region information
   */
  subRegions?: ListLoadBalancerRegionsResponseBodyRegionsSubRegions[];
  static names(): { [key: string]: string } {
    return {
      regionCnName: 'RegionCnName',
      regionCode: 'RegionCode',
      regionEnName: 'RegionEnName',
      subRegions: 'SubRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionCnName: 'string',
      regionCode: 'string',
      regionEnName: 'string',
      subRegions: { 'type': 'array', 'itemType': ListLoadBalancerRegionsResponseBodyRegionsSubRegions },
    };
  }

  validate() {
    if(Array.isArray(this.subRegions)) {
      $dara.Model.validateArray(this.subRegions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

