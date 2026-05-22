// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransportLayerApplicationsResponseBodyApplicationsRules extends $dara.Model {
  clientIPPassThroughMode?: string;
  comment?: string;
  edgePort?: string;
  protocol?: string;
  ruleId?: number;
  source?: string;
  sourcePort?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientIPPassThroughMode: 'ClientIPPassThroughMode',
      comment: 'Comment',
      edgePort: 'EdgePort',
      protocol: 'Protocol',
      ruleId: 'RuleId',
      source: 'Source',
      sourcePort: 'SourcePort',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIPPassThroughMode: 'string',
      comment: 'string',
      edgePort: 'string',
      protocol: 'string',
      ruleId: 'number',
      source: 'string',
      sourcePort: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransportLayerApplicationsResponseBodyApplicationsStaticIpV4List extends $dara.Model {
  address?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransportLayerApplicationsResponseBodyApplications extends $dara.Model {
  applicationId?: number;
  cname?: string;
  crossBorderOptimization?: string;
  ipAccessRule?: string;
  ipv6?: string;
  keepAliveProtection?: string;
  recordName?: string;
  rules?: ListTransportLayerApplicationsResponseBodyApplicationsRules[];
  rulesCount?: number;
  siteId?: number;
  staticIp?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  staticIpV4List?: ListTransportLayerApplicationsResponseBodyApplicationsStaticIpV4List[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      cname: 'Cname',
      crossBorderOptimization: 'CrossBorderOptimization',
      ipAccessRule: 'IpAccessRule',
      ipv6: 'Ipv6',
      keepAliveProtection: 'KeepAliveProtection',
      recordName: 'RecordName',
      rules: 'Rules',
      rulesCount: 'RulesCount',
      siteId: 'SiteId',
      staticIp: 'StaticIp',
      staticIpV4List: 'StaticIpV4List',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'number',
      cname: 'string',
      crossBorderOptimization: 'string',
      ipAccessRule: 'string',
      ipv6: 'string',
      keepAliveProtection: 'string',
      recordName: 'string',
      rules: { 'type': 'array', 'itemType': ListTransportLayerApplicationsResponseBodyApplicationsRules },
      rulesCount: 'number',
      siteId: 'number',
      staticIp: 'string',
      staticIpV4List: { 'type': 'array', 'itemType': ListTransportLayerApplicationsResponseBodyApplicationsStaticIpV4List },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    if(Array.isArray(this.staticIpV4List)) {
      $dara.Model.validateArray(this.staticIpV4List);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransportLayerApplicationsResponseBody extends $dara.Model {
  applications?: ListTransportLayerApplicationsResponseBodyApplications[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListTransportLayerApplicationsResponseBodyApplications },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

