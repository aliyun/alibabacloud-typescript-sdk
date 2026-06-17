// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLocationInfoResponseBodyCnList extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * 3301
   */
  locId?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * Hangzhou City
   */
  locName?: string;
  static names(): { [key: string]: string } {
    return {
      locId: 'LocId',
      locName: 'LocName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locId: 'string',
      locName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLocationInfoResponseBodyCnProvinceListCities extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * 123
   */
  locId?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * Hangzhou
   */
  locName?: string;
  static names(): { [key: string]: string } {
    return {
      locId: 'LocId',
      locName: 'LocName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locId: 'string',
      locName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLocationInfoResponseBodyCnProvinceList extends $dara.Model {
  /**
   * @remarks
   * The list of city codes.
   */
  cities?: DescribeLocationInfoResponseBodyCnProvinceListCities[];
  /**
   * @remarks
   * The name of the province.
   * 
   * @example
   * Zhejiang
   */
  provinceName?: string;
  static names(): { [key: string]: string } {
    return {
      cities: 'Cities',
      provinceName: 'ProvinceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cities: { 'type': 'array', 'itemType': DescribeLocationInfoResponseBodyCnProvinceListCities },
      provinceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cities)) {
      $dara.Model.validateArray(this.cities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLocationInfoResponseBodyOverseasList extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * US
   */
  locId?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * United States
   */
  locName?: string;
  static names(): { [key: string]: string } {
    return {
      locId: 'LocId',
      locName: 'LocName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locId: 'string',
      locName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLocationInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of regions in China.
   * 
   * @example
   * 340
   */
  cnCount?: number;
  /**
   * @remarks
   * The list of regions in China.
   */
  cnList?: DescribeLocationInfoResponseBodyCnList[];
  /**
   * @remarks
   * The information about provinces and cities in China.
   */
  cnProvinceList?: DescribeLocationInfoResponseBodyCnProvinceList[];
  /**
   * @remarks
   * The number of regions outside China.
   * 
   * @example
   * 238
   */
  overseasCount?: number;
  /**
   * @remarks
   * The list of regions outside China.
   */
  overseasList?: DescribeLocationInfoResponseBodyOverseasList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CD3BE433-FAB0-55D8-918A-69B306****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cnCount: 'CnCount',
      cnList: 'CnList',
      cnProvinceList: 'CnProvinceList',
      overseasCount: 'OverseasCount',
      overseasList: 'OverseasList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnCount: 'number',
      cnList: { 'type': 'array', 'itemType': DescribeLocationInfoResponseBodyCnList },
      cnProvinceList: { 'type': 'array', 'itemType': DescribeLocationInfoResponseBodyCnProvinceList },
      overseasCount: 'number',
      overseasList: { 'type': 'array', 'itemType': DescribeLocationInfoResponseBodyOverseasList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cnList)) {
      $dara.Model.validateArray(this.cnList);
    }
    if(Array.isArray(this.cnProvinceList)) {
      $dara.Model.validateArray(this.cnProvinceList);
    }
    if(Array.isArray(this.overseasList)) {
      $dara.Model.validateArray(this.overseasList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

