// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSitesShrinkRequest extends $dara.Model {
  accessType?: string;
  coverage?: string;
  onlyEnterprise?: boolean;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  planSubscribeType?: string;
  resourceGroupId?: string;
  siteName?: string;
  siteSearchType?: string;
  status?: string;
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

