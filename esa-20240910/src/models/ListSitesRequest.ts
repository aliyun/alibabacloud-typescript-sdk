// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSitesRequestTagFilter } from "./ListSitesRequestTagFilter";


export class ListSitesRequest extends $dara.Model {
  /**
   * @remarks
   * The DNS setup. Valid values:
   * 
   * *   **NS**
   * *   **CNAME**
   * 
   * @example
   * NS
   */
  accessType?: string;
  /**
   * @remarks
   * The service location. Valid values:
   * 
   * *   **domestic**: the Chinese mainland
   * *   **global**: global
   * *   **overseas**: outside the Chinese mainland
   * 
   * @example
   * global
   */
  coverage?: string;
  /**
   * @remarks
   * Specifies whether to query only websites on Enterprise plans. Valid values: **true and false**.
   * 
   * @example
   * false
   */
  onlyEnterprise?: boolean;
  /**
   * @remarks
   * Sorting field. By default, it sorts by creation time, supporting the following options:
   * - gmtCreate: website creation time
   * - visitTime: website visit time
   * 
   * @example
   * visitTime
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **500**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The plan type. Valid values:
   * 
   * *   **basicplan**: Entrance
   * *   **standardplan**: Pro
   * *   **advancedplan**: Premium
   * *   **enterpriseplan**: Enterprise
   * 
   * @example
   * basicplan
   */
  planSubscribeType?: string;
  /**
   * @remarks
   * The ID of the resource group. This parameter specifies a filter condition for the query.
   * 
   * @example
   * rg-aekzd3styujvyei
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The website name. This parameter specifies a filter condition for the query.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The match mode to search for the website name. Default value: exact. Valid values:
   * 
   * *   **prefix**: match by prefix.
   * *   **suffix**: match by suffix.
   * *   **exact**: exact match.
   * *   **fuzzy**: fuzzy match.
   * 
   * @example
   * fuzzy
   */
  siteSearchType?: string;
  /**
   * @remarks
   * The website status. This parameter specifies a filter condition for the query.
   * 
   * @example
   * pending
   */
  status?: string;
  /**
   * @remarks
   * The tag filtering rule.
   */
  tagFilter?: ListSitesRequestTagFilter[];
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      coverage: 'Coverage',
      onlyEnterprise: 'OnlyEnterprise',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      planSubscribeType: 'PlanSubscribeType',
      resourceGroupId: 'ResourceGroupId',
      siteName: 'SiteName',
      siteSearchType: 'SiteSearchType',
      status: 'Status',
      tagFilter: 'TagFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      coverage: 'string',
      onlyEnterprise: 'boolean',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      planSubscribeType: 'string',
      resourceGroupId: 'string',
      siteName: 'string',
      siteSearchType: 'string',
      status: 'string',
      tagFilter: { 'type': 'array', 'itemType': ListSitesRequestTagFilter },
    };
  }

  validate() {
    if(Array.isArray(this.tagFilter)) {
      $dara.Model.validateArray(this.tagFilter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

