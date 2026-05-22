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

export class ListLoadBalancerRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of records per page
   * 
   * @example
   * 1024
   */
  pageSize?: number;
  /**
   * @remarks
   * List of region information
   */
  regions?: ListLoadBalancerRegionsResponseBodyRegions[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 81A5E222-24BF-17EF-9E80-A68D9B8F363D
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of records
   * 
   * @example
   * 12
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages
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

