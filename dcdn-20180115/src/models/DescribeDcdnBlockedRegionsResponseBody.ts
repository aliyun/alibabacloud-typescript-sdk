// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnBlockedRegionsResponseBodyInfoListInfoItem extends $dara.Model {
  /**
   * @remarks
   * The larger region to which the country or region belongs.
   * 
   * @example
   * Middle East
   */
  continent?: string;
  /**
   * @remarks
   * The abbreviation of the name of the country or region.
   * 
   * @example
   * AE
   */
  countriesAndRegions?: string;
  /**
   * @remarks
   * The name of the country or region.
   * 
   * @example
   * United Arab Emirates
   */
  countriesAndRegionsName?: string;
  static names(): { [key: string]: string } {
    return {
      continent: 'Continent',
      countriesAndRegions: 'CountriesAndRegions',
      countriesAndRegionsName: 'CountriesAndRegionsName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continent: 'string',
      countriesAndRegions: 'string',
      countriesAndRegionsName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBlockedRegionsResponseBodyInfoList extends $dara.Model {
  infoItem?: DescribeDcdnBlockedRegionsResponseBodyInfoListInfoItem[];
  static names(): { [key: string]: string } {
    return {
      infoItem: 'InfoItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoItem: { 'type': 'array', 'itemType': DescribeDcdnBlockedRegionsResponseBodyInfoListInfoItem },
    };
  }

  validate() {
    if(Array.isArray(this.infoItem)) {
      $dara.Model.validateArray(this.infoItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBlockedRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the country or region.
   */
  infoList?: DescribeDcdnBlockedRegionsResponseBodyInfoList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BFFCDFAD-DACC-484E-9BE6-0AF3B3A0DD23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      infoList: 'InfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoList: DescribeDcdnBlockedRegionsResponseBodyInfoList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.infoList && typeof (this.infoList as any).validate === 'function') {
      (this.infoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

