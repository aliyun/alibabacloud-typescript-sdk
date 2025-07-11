// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpAbroadCountryInfosResponseBodyAbroadInfosRegions extends $dara.Model {
  /**
   * @example
   * US-CA
   */
  abroadRegionId?: string;
  /**
   * @example
   * 加利福尼亚州
   */
  abroadRegionName?: string;
  static names(): { [key: string]: string } {
    return {
      abroadRegionId: 'AbroadRegionId',
      abroadRegionName: 'AbroadRegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abroadRegionId: 'string',
      abroadRegionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpAbroadCountryInfosResponseBodyAbroadInfos extends $dara.Model {
  /**
   * @example
   * 北美洲
   */
  continent?: string;
  /**
   * @example
   * US
   */
  country?: string;
  /**
   * @example
   * 美国
   */
  countryName?: string;
  regions?: DescribeIpAbroadCountryInfosResponseBodyAbroadInfosRegions[];
  static names(): { [key: string]: string } {
    return {
      continent: 'Continent',
      country: 'Country',
      countryName: 'CountryName',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continent: 'string',
      country: 'string',
      countryName: 'string',
      regions: { 'type': 'array', 'itemType': DescribeIpAbroadCountryInfosResponseBodyAbroadInfosRegions },
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

export class DescribeIpAbroadCountryInfosResponseBody extends $dara.Model {
  abroadInfos?: DescribeIpAbroadCountryInfosResponseBodyAbroadInfos[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @example
   * 66A98669-CC6E-4F3E-80A6-3014697B11AE
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      abroadInfos: 'AbroadInfos',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abroadInfos: { 'type': 'array', 'itemType': DescribeIpAbroadCountryInfosResponseBodyAbroadInfos },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.abroadInfos)) {
      $dara.Model.validateArray(this.abroadInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

