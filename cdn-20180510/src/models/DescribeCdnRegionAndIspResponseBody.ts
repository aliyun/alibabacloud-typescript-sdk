// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnRegionAndIspResponseBodyIspsIsp extends $dara.Model {
  /**
   * @remarks
   * The English name of the ISP.
   * 
   * @example
   * unicom
   */
  nameEn?: string;
  /**
   * @remarks
   * The Chinese name of the ISP.
   */
  nameZh?: string;
  static names(): { [key: string]: string } {
    return {
      nameEn: 'NameEn',
      nameZh: 'NameZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameEn: 'string',
      nameZh: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnRegionAndIspResponseBodyIsps extends $dara.Model {
  isp?: DescribeCdnRegionAndIspResponseBodyIspsIsp[];
  static names(): { [key: string]: string } {
    return {
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isp: { 'type': 'array', 'itemType': DescribeCdnRegionAndIspResponseBodyIspsIsp },
    };
  }

  validate() {
    if(Array.isArray(this.isp)) {
      $dara.Model.validateArray(this.isp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnRegionAndIspResponseBodyRegionsRegion extends $dara.Model {
  /**
   * @remarks
   * The English name of the region.
   * 
   * @example
   * liaoning
   */
  nameEn?: string;
  /**
   * @remarks
   * The Chinese name of the region.
   */
  nameZh?: string;
  static names(): { [key: string]: string } {
    return {
      nameEn: 'NameEn',
      nameZh: 'NameZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameEn: 'string',
      nameZh: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnRegionAndIspResponseBodyRegions extends $dara.Model {
  region?: DescribeCdnRegionAndIspResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeCdnRegionAndIspResponseBodyRegionsRegion },
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

export class DescribeCdnRegionAndIspResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of ISPs.
   */
  isps?: DescribeCdnRegionAndIspResponseBodyIsps;
  /**
   * @remarks
   * The list of regions.
   */
  regions?: DescribeCdnRegionAndIspResponseBodyRegions;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2387C335-932C-4E1E-862C-1C4363B6DE72
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isps: 'Isps',
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isps: DescribeCdnRegionAndIspResponseBodyIsps,
      regions: DescribeCdnRegionAndIspResponseBodyRegions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.isps && typeof (this.isps as any).validate === 'function') {
      (this.isps as any).validate();
    }
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

