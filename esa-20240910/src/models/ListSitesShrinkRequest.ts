// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSitesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The access type. Valid values:
   * 
   * - **NS**: NS-based access.
   * 
   * - **CNAME**: CNAME-based access.
   * 
   * @example
   * NS
   */
  accessType?: string;
  /**
   * @remarks
   * The acceleration region. Valid values:
   * - **domestic**: the Chinese mainland only.
   * - **global**: global.
   * - **overseas**: global (excluding the Chinese mainland).
   * 
   * @example
   * global
   */
  coverage?: string;
  /**
   * @remarks
   * Specifies whether to query only Enterprise Edition sites. Set this parameter to **true** to query only Enterprise Edition sites.
   * 
   * @example
   * false
   */
  onlyEnterprise?: boolean;
  /**
   * @remarks
   * The sort field. By default, results are sorted by creation time. Valid values:
   * - gmtCreate: site creation time.
   * - visitTime: site access time.
   * 
   * @example
   * visitTime
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number for paging. The value must be greater than or equal to 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging. Valid values: 1 to 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The plan subscription type. Valid values:
   * - **basicplan**: Basic Edition.
   * - **standardplan**: Standard Edition.
   * - **advancedplan**: Premium Edition.
   * - **enterpriseplan**: Enterprise Edition.
   * 
   * @example
   * basicplan
   */
  planSubscribeType?: string;
  /**
   * @remarks
   * The resource group ID. Used as a filter condition for the query.
   * 
   * @example
   * rg-aekzd3styujvyei
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The site name. Used as a filter condition for the query.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The search matching mode for the site name. Default is exact match. Valid values:
   * 
   * - **prefix**: prefix match.
   * - **suffix**: suffix match.
   * - **exact**: exact match.
   * - **fuzzy**: fuzzy match.
   * 
   * @example
   * fuzzy
   */
  siteSearchType?: string;
  /**
   * @remarks
   * The site status. Used as a filter condition for the query.
   * 
   * @example
   * pending
   */
  status?: string;
  /**
   * @remarks
   * The tag filter rules.
   */
  tagFilterShrink?: string;
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
      tagFilterShrink: 'TagFilter',
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
      tagFilterShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

