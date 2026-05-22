// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteResponseBodySiteModel extends $dara.Model {
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
  vanityNSList?: { [key: string]: string };
  verifyCode?: string;
  versionManagement?: boolean;
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
      vanityNSList: 'VanityNSList',
      verifyCode: 'VerifyCode',
      versionManagement: 'VersionManagement',
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
      vanityNSList: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      verifyCode: 'string',
      versionManagement: 'boolean',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    if(this.vanityNSList) {
      $dara.Model.validateMap(this.vanityNSList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSiteResponseBody extends $dara.Model {
  requestId?: string;
  siteModel?: GetSiteResponseBodySiteModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      siteModel: 'SiteModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      siteModel: GetSiteResponseBodySiteModel,
    };
  }

  validate() {
    if(this.siteModel && typeof (this.siteModel as any).validate === 'function') {
      (this.siteModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

