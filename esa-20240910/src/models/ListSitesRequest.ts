// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSitesRequestTagFilter extends $dara.Model {
  key?: string;
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

