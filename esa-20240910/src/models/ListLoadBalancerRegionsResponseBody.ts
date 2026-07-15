// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancerRegionsResponseBodyRegionsSubRegions extends $dara.Model {
  /**
   * @remarks
   * The full name of the primary region in Chinese.
   * 
   * @example
   * Indonesia
   */
  subRegionCnName?: string;
  /**
   * @remarks
   * The secondary region code.
   * 
   * @example
   * ID
   */
  subRegionCode?: string;
  /**
   * @remarks
   * The full name of the secondary region in English.
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

export class ListLoadBalancerRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The full name of the primary region in Chinese.
   * 
   * @example
   * South East Asia
   */
  regionCnName?: string;
  /**
   * @remarks
   * The primary region code.
   * 
   * @example
   * SEAS
   */
  regionCode?: string;
  /**
   * @remarks
   * The full name of the primary region in English.
   * 
   * @example
   * South East Asia
   */
  regionEnName?: string;
  /**
   * @remarks
   * The list of secondary region information.
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

export class ListLoadBalancerRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1024
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of region information.
   */
  regions?: ListLoadBalancerRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 81A5E222-24BF-17EF-9E80-A68D9B8F363D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regions: 'Regions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regions: { 'type': 'array', 'itemType': ListLoadBalancerRegionsResponseBodyRegions },
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

