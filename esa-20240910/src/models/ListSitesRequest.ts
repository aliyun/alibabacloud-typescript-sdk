// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSitesRequestTagFilter extends $dara.Model {
  /**
   * @remarks
   * The tag key, used to filter query results.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value, used to filter query results.
   * 
   * @example
   * aaa
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

export class ListSitesRequest extends $dara.Model {
  /**
   * @remarks
   * The access type. Valid values:
   * 
   * - **NS**: NS access.
   * 
   * - **CNAME**: CNAME access.
   * 
   * @example
   * NS
   */
  accessType?: string;
  /**
   * @remarks
   * The acceleration region. Valid values:
   * 
   * - **domestic**: Chinese mainland only.
   * 
   * - **global**: Global.
   * 
   * - **overseas**: Global (excluding the Chinese mainland).
   * 
   * @example
   * global
   */
  coverage?: string;
  /**
   * @remarks
   * Specifies whether to return only sites that use the Enterprise Edition.
   * 
   * @example
   * false
   */
  onlyEnterprise?: boolean;
  /**
   * @remarks
   * The field to sort the results by. By default, results are sorted by creation time (gmtCreate). Supported values:
   * 
   * - `gmtCreate`: site creation time
   * 
   * - `visitTime`: site access time
   * 
   * @example
   * visitTime
   */
  orderBy?: string;
  /**
   * @remarks
   * The number of the page to return. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is **500**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The subscription plan type. Valid values:
   * 
   * - **basicplan**: Basic Edition.
   * 
   * - **standardplan**: Standard Edition.
   * 
   * - **advancedplan**: Advanced Edition.
   * 
   * - **enterpriseplan**: Enterprise Edition.
   * 
   * @example
   * basicplan
   */
  planSubscribeType?: string;
  /**
   * @remarks
   * The resource group ID, used to filter query results.
   * 
   * @example
   * rg-aekzd3styujvyei
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The site name, used to filter query results.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The match mode for the `SiteName` parameter. The default value is `exact`. Valid values:
   * 
   * - **prefix**: prefix match.
   * 
   * - **suffix**: suffix match.
   * 
   * - **exact**: exact match.
   * 
   * - **fuzzy**: fuzzy match.
   * 
   * @example
   * fuzzy
   */
  siteSearchType?: string;
  /**
   * @remarks
   * The site status, used to filter query results.
   * 
   * @example
   * pending
   */
  status?: string;
  /**
   * @remarks
   * A list of tags to use for filtering sites.
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

