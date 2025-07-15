// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePrivateLineAreasResponseBodyLiveAreasListLiveAreaRegionsRegion extends $dara.Model {
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * cn-shenzhen
   */
  localName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLivePrivateLineAreasResponseBodyLiveAreasListLiveAreaRegions extends $dara.Model {
  region?: DescribeLivePrivateLineAreasResponseBodyLiveAreasListLiveAreaRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeLivePrivateLineAreasResponseBodyLiveAreasListLiveAreaRegionsRegion },
    };
  }

  validate() {
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLivePrivateLineAreasResponseBodyLiveAreasListLiveArea extends $dara.Model {
  /**
   * @remarks
   * The region type. Valid values:
   * 
   * *   domestic: in the Chinese mainland
   * *   overseas: outside the Chinese mainland
   * 
   * @example
   * domestic
   */
  regionType?: string;
  /**
   * @remarks
   * The regions.
   */
  regions?: DescribeLivePrivateLineAreasResponseBodyLiveAreasListLiveAreaRegions;
  static names(): { [key: string]: string } {
    return {
      regionType: 'RegionType',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionType: 'string',
      regions: DescribeLivePrivateLineAreasResponseBodyLiveAreasListLiveAreaRegions,
    };
  }

  validate() {
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLivePrivateLineAreasResponseBodyLiveAreasList extends $dara.Model {
  liveArea?: DescribeLivePrivateLineAreasResponseBodyLiveAreasListLiveArea[];
  static names(): { [key: string]: string } {
    return {
      liveArea: 'LiveArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveArea: { 'type': 'array', 'itemType': DescribeLivePrivateLineAreasResponseBodyLiveAreasListLiveArea },
    };
  }

  validate() {
    if(Array.isArray(this.liveArea)) {
      $dara.Model.validateArray(this.liveArea);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLivePrivateLineAreasResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the regions.
   */
  liveAreasList?: DescribeLivePrivateLineAreasResponseBodyLiveAreasList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C4865B85-664B-19D3-BB16-C62FB83C8226
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveAreasList: 'LiveAreasList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAreasList: DescribeLivePrivateLineAreasResponseBodyLiveAreasList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveAreasList && typeof (this.liveAreasList as any).validate === 'function') {
      (this.liveAreasList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

