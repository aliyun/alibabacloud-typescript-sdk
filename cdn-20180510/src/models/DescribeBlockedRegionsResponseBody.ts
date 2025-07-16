// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBlockedRegionsResponseBodyInfoListInfoItem extends $dara.Model {
  /**
   * @remarks
   * The district to which the country or region belongs.
   * 
   * @example
   * Asia
   */
  continent?: string;
  /**
   * @remarks
   * The abbreviation of the name of the country or region.
   * 
   * @example
   * AF
   */
  countriesAndRegions?: string;
  /**
   * @remarks
   * The name of the country or region.
   * 
   * @example
   * Afghanistan
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

export class DescribeBlockedRegionsResponseBodyInfoList extends $dara.Model {
  infoItem?: DescribeBlockedRegionsResponseBodyInfoListInfoItem[];
  static names(): { [key: string]: string } {
    return {
      infoItem: 'InfoItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoItem: { 'type': 'array', 'itemType': DescribeBlockedRegionsResponseBodyInfoListInfoItem },
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

export class DescribeBlockedRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information returned.
   */
  infoList?: DescribeBlockedRegionsResponseBodyInfoList;
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
      infoList: DescribeBlockedRegionsResponseBodyInfoList,
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

