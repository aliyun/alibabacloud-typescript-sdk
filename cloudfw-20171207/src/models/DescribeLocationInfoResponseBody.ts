// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLocationInfoResponseBodyCnList extends $dara.Model {
  /**
   * @example
   * 3301
   */
  locId?: string;
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
   * @example
   * 123
   */
  locId?: string;
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
  cities?: DescribeLocationInfoResponseBodyCnProvinceListCities[];
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
   * @example
   * US
   */
  locId?: string;
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
   * @example
   * 340
   */
  cnCount?: number;
  cnList?: DescribeLocationInfoResponseBodyCnList[];
  cnProvinceList?: DescribeLocationInfoResponseBodyCnProvinceList[];
  /**
   * @example
   * 238
   */
  overseasCount?: number;
  overseasList?: DescribeLocationInfoResponseBodyOverseasList[];
  /**
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

