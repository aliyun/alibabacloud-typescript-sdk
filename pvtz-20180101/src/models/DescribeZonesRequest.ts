// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeZonesRequestResourceTag } from "./DescribeZonesRequestResourceTag";


export class DescribeZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword of the zone name. The value is not case-sensitive. You can set SearchMode to LIKE or EXACT. The default value of SearchMode is LIKE.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
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
   * The number of entries per page. Valid values: **1 to 100**. Default value: **20**.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the virtual private cloud (VPC) associated with the zone.
   * 
   * @example
   * cn-hangzhou
   */
  queryRegionId?: string;
  /**
   * @remarks
   * The ID of the VPC associated with the zone.
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
   * The tags added to the zone.
   */
  resourceTag?: DescribeZonesRequestResourceTag[];
  /**
   * @remarks
   * The search mode. The value of Keyword is the search scope. Valid values:
   * 
   * *   **LIKE** (default): fuzzy search
   * *   **EXACT**: exact search
   * 
   * Default value: **LIKE**.
   * 
   * @example
   * LIKE
   */
  searchMode?: string;
  /**
   * @remarks
   * The types of cloud services.
   * 
   * @example
   * BLINK
   */
  zoneTag?: string[];
  /**
   * @remarks
   * The zone type. Valid values:
   * 
   * *   **AUTH_ZONE**: authoritative zone
   * *   **CLOUD_PRODUCT_ZONE**: authoritative zone for cloud services
   * 
   * Default value: **AUTH_ZONE**.
   * 
   * @example
   * CLOUD_PRODUCT_ZONE
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

