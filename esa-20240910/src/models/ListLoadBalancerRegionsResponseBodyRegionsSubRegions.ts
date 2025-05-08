// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancerRegionsResponseBodyRegionsSubRegions extends $dara.Model {
  /**
   * @remarks
   * Secondary region Chinese full name
   * 
   * @example
   * 印度尼西亚
   */
  subRegionCnName?: string;
  /**
   * @remarks
   * Secondary region code
   * 
   * @example
   * ID
   */
  subRegionCode?: string;
  /**
   * @remarks
   * Secondary region English full name
   * 
   * @example
   * Indonesia
   */
  subRegionEnName?: string;
  static names(): { [key: string]: string } {
    return {
      subRegionCnName: 'SubRegionCnName',
      subRegionCode: 'SubRegionCode',
      subRegionEnName: 'SubRegionEnName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subRegionCnName: 'string',
      subRegionCode: 'string',
      subRegionEnName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

