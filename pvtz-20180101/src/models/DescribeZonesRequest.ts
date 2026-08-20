// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesRequestResourceTag extends $dara.Model {
  /**
   * @remarks
   * The key of the resource tag.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the resource tag.
   * 
   * @example
   * daily
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword of the zone name. The search is not case-sensitive. You can set the SearchMode parameter to switch between exact search and fuzzy search. The default mode is fuzzy search.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * 
   * - en: English.
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the VPC that is associated with the zone.
   * 
   * @example
   * cn-hangzhou
   */
  queryRegionId?: string;
  /**
   * @remarks
   * The ID of the VPC that is associated with the zone.
   * 
   * @example
   * vpc-f8zvrvr1payllgz38****
   */
  queryVpcId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the zone belongs.
   * 
   * @example
   * rg-aekz2qj7awz****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource tags that are added to the zone.
   */
  resourceTag?: DescribeZonesRequestResourceTag[];
  /**
   * @remarks
   * The search mode. This parameter takes effect only when the Keyword parameter is specified. Valid values:
   * 
   * - **LIKE**: fuzzy search (default)
   * 
   * - **EXACT**: exact search
   * 
   * Default value: **LIKE**.
   * 
   * @example
   * EXACT
   */
  searchMode?: string;
  /**
   * @remarks
   * The list of cloud service types.
   * 
   * @example
   * BLINK
   */
  zoneTag?: string[];
  /**
   * @remarks
   * The type of the zones to query. Valid values:
   * 
   * - **AUTH_ZONE**: authoritative zones.
   * 
   * - **CLOUD_PRODUCT_ZONE**: zones for cloud services.
   * 
   * Default value: **AUTH_ZONE**.
   * 
   * @example
   * AUTH_ZONE
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryRegionId: 'QueryRegionId',
      queryVpcId: 'QueryVpcId',
      resourceGroupId: 'ResourceGroupId',
      resourceTag: 'ResourceTag',
      searchMode: 'SearchMode',
      zoneTag: 'ZoneTag',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryRegionId: 'string',
      queryVpcId: 'string',
      resourceGroupId: 'string',
      resourceTag: { 'type': 'array', 'itemType': DescribeZonesRequestResourceTag },
      searchMode: 'string',
      zoneTag: { 'type': 'array', 'itemType': 'string' },
      zoneType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceTag)) {
      $dara.Model.validateArray(this.resourceTag);
    }
    if(Array.isArray(this.zoneTag)) {
      $dara.Model.validateArray(this.zoneTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

