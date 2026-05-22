// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSitesResponseBodySites extends $dara.Model {
  accessType?: string;
  cnameZone?: string;
  coverage?: string;
  createTime?: string;
  instanceId?: string;
  nameServerList?: string;
  offlineReason?: string;
  planName?: string;
  planSpecName?: string;
  resourceGroupId?: string;
  siteId?: number;
  siteName?: string;
  status?: string;
  tags?: { [key: string]: any };
  updateTime?: string;
  verifyCode?: string;
  visitTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      cnameZone: 'CnameZone',
      coverage: 'Coverage',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      nameServerList: 'NameServerList',
      offlineReason: 'OfflineReason',
      planName: 'PlanName',
      planSpecName: 'PlanSpecName',
      resourceGroupId: 'ResourceGroupId',
      siteId: 'SiteId',
      siteName: 'SiteName',
      status: 'Status',
      tags: 'Tags',
      updateTime: 'UpdateTime',
      verifyCode: 'VerifyCode',
      visitTime: 'VisitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      cnameZone: 'string',
      coverage: 'string',
      createTime: 'string',
      instanceId: 'string',
      nameServerList: 'string',
      offlineReason: 'string',
      planName: 'string',
      planSpecName: 'string',
      resourceGroupId: 'string',
      siteId: 'number',
      siteName: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updateTime: 'string',
      verifyCode: 'string',
      visitTime: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSitesResponseBody extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  sites?: ListSitesResponseBodySites[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sites: 'Sites',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      sites: { 'type': 'array', 'itemType': ListSitesResponseBodySites },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sites)) {
      $dara.Model.validateArray(this.sites);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

