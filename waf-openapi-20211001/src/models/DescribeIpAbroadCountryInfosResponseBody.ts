// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpAbroadCountryInfosResponseBodyAbroadInfosRegions extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * US-CA
   */
  abroadRegionId?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * California
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
   * @remarks
   * The continent to which the country belongs.
   * 
   * @example
   * North America
   */
  continent?: string;
  /**
   * @remarks
   * The country ID.
   * 
   * @example
   * US
   */
  country?: string;
  /**
   * @remarks
   * The country name.
   * 
   * @example
   * United States
   */
  countryName?: string;
  /**
   * @remarks
   * The list of overseas region information.
   */
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
  /**
   * @remarks
   * The list of overseas country information.
   */
  abroadInfos?: DescribeIpAbroadCountryInfosResponseBodyAbroadInfos[];
  /**
   * @remarks
   * The number of entries to return on each page for a paging query. Valid values: 1 to 500. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-3014697B11AE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
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

