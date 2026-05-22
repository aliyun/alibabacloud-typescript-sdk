// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTransportLayerApplicationResponseBodyRules extends $dara.Model {
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

export class GetTransportLayerApplicationResponseBodyStaticIpV4List extends $dara.Model {
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

export class GetTransportLayerApplicationResponseBody extends $dara.Model {
  applicationId?: number;
  cname?: string;
  crossBorderOptimization?: string;
  ipAccessRule?: string;
  ipv6?: string;
  keepAliveProtection?: string;
  recordName?: string;
  requestId?: string;
  rules?: GetTransportLayerApplicationResponseBodyRules[];
  rulesCount?: number;
  siteId?: number;
  staticIp?: string;
  staticIpV4List?: GetTransportLayerApplicationResponseBodyStaticIpV4List[];
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
      requestId: 'RequestId',
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
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': GetTransportLayerApplicationResponseBodyRules },
      rulesCount: 'number',
      siteId: 'number',
      staticIp: 'string',
      staticIpV4List: { 'type': 'array', 'itemType': GetTransportLayerApplicationResponseBodyStaticIpV4List },
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

