// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnRegionAndIspResponseBodyIspsIsp extends $dara.Model {
  /**
   * @remarks
   * The English name of the region.
   * 
   * @example
   * unicom
   */
  nameEn?: string;
  /**
   * @remarks
   * The Chinese name of the ISP.
   * 
   * @example
   * 联通
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

export class DescribeDcdnRegionAndIspResponseBodyIsps extends $dara.Model {
  isp?: DescribeDcdnRegionAndIspResponseBodyIspsIsp[];
  static names(): { [key: string]: string } {
    return {
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isp: { 'type': 'array', 'itemType': DescribeDcdnRegionAndIspResponseBodyIspsIsp },
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

export class DescribeDcdnRegionAndIspResponseBodyRegionsRegion extends $dara.Model {
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
   * 
   * @example
   * 辽宁省
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

export class DescribeDcdnRegionAndIspResponseBodyRegions extends $dara.Model {
  region?: DescribeDcdnRegionAndIspResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeDcdnRegionAndIspResponseBodyRegionsRegion },
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

export class DescribeDcdnRegionAndIspResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of ISPs.
   */
  isps?: DescribeDcdnRegionAndIspResponseBodyIsps;
  /**
   * @remarks
   * The list of regions.
   */
  regions?: DescribeDcdnRegionAndIspResponseBodyRegions;
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
      isps: DescribeDcdnRegionAndIspResponseBodyIsps,
      regions: DescribeDcdnRegionAndIspResponseBodyRegions,
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

