// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancerRegionsResponseBodyRegionsSubRegions extends $dara.Model {
  subRegionCnName?: string;
  subRegionCode?: string;
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
  regionCnName?: string;
  regionCode?: string;
  regionEnName?: string;
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
  pageNumber?: number;
  pageSize?: number;
  regions?: ListLoadBalancerRegionsResponseBodyRegions[];
  requestId?: string;
  totalCount?: number;
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

