// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class DescribeBatchSlsDispatchStatusResponseBodySlsConfigStatusList extends $dara.Model {
  /**
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSEventsResponseBodyEvents extends $dara.Model {
  /**
   * @example
   * 3289457398
   */
  endTime?: number;
  /**
   * @example
   * 12
   */
  interval?: number;
  /**
   * @example
   * 3289457324
   */
  startTime?: number;
  /**
   * @example
   * blackhole_start
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      interval: 'number',
      startTime: 'number',
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

export class DescribeDDoSTrafficResponseBodyDDoSTrafficPoints extends $dara.Model {
  /**
   * @example
   * 129867
   */
  defenseMaxInBps?: number;
  /**
   * @example
   * 129867
   */
  sourceMaxInBps?: number;
  /**
   * @example
   * 234082304
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      defenseMaxInBps: 'DefenseMaxInBps',
      sourceMaxInBps: 'SourceMaxInBps',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseMaxInBps: 'number',
      sourceMaxInBps: 'number',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseCountStatisticsResponseBodyDefenseCountStatistics extends $dara.Model {
  /**
   * @example
   * 0
   */
  defenseCountTotalUsageOfCurrentMonth?: number;
  /**
   * @example
   * 10
   */
  flowPackCountRemain?: number;
  /**
   * @example
   * 0
   */
  maxUsableDefenseCountCurrentMonth?: number;
  static names(): { [key: string]: string } {
    return {
      defenseCountTotalUsageOfCurrentMonth: 'DefenseCountTotalUsageOfCurrentMonth',
      flowPackCountRemain: 'FlowPackCountRemain',
      maxUsableDefenseCountCurrentMonth: 'MaxUsableDefenseCountCurrentMonth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseCountTotalUsageOfCurrentMonth: 'number',
      flowPackCountRemain: 'number',
      maxUsableDefenseCountCurrentMonth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAccessModeResponseBodyDomainModeList extends $dara.Model {
  /**
   * @example
   * 1
   */
  accessMode?: number;
  /**
   * @example
   * www.aliyun.com
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'number',
      domain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackEventListResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @example
   * 1670918400
   */
  endTime?: number;
  /**
   * @example
   * 300
   */
  maxQps?: number;
  /**
   * @example
   * 1666083600
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      maxQps: 'MaxQps',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      maxQps: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsListResponseBodyDataList extends $dara.Model {
  attackQps?: number;
  cacheHits?: number;
  index?: number;
  maxAttackQps?: number;
  maxNormalQps?: number;
  maxQps?: number;
  totalCount?: number;
  totalQps?: number;
  static names(): { [key: string]: string } {
    return {
      attackQps: 'AttackQps',
      cacheHits: 'CacheHits',
      index: 'Index',
      maxAttackQps: 'MaxAttackQps',
      maxNormalQps: 'MaxNormalQps',
      maxQps: 'MaxQps',
      totalCount: 'TotalCount',
      totalQps: 'TotalQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackQps: 'number',
      cacheHits: 'number',
      index: 'number',
      maxAttackQps: 'number',
      maxNormalQps: 'number',
      maxQps: 'number',
      totalCount: 'number',
      totalQps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatusCodeListResponseBodyStatusCodeList extends $dara.Model {
  /**
   * @example
   * 0
   */
  index?: number;
  /**
   * @example
   * 320
   */
  status200?: number;
  /**
   * @example
   * 5776
   */
  status2XX?: number;
  /**
   * @example
   * 0
   */
  status3XX?: number;
  /**
   * @example
   * 0
   */
  status403?: number;
  /**
   * @example
   * 34
   */
  status404?: number;
  /**
   * @example
   * 11
   */
  status405?: number;
  status410?: number;
  status499?: number;
  /**
   * @example
   * 168
   */
  status4XX?: number;
  /**
   * @example
   * 0
   */
  status501?: number;
  /**
   * @example
   * 3
   */
  status502?: number;
  /**
   * @example
   * 0
   */
  status503?: number;
  /**
   * @example
   * 0
   */
  status504?: number;
  /**
   * @example
   * 7
   */
  status5XX?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      status200: 'Status200',
      status2XX: 'Status2XX',
      status3XX: 'Status3XX',
      status403: 'Status403',
      status404: 'Status404',
      status405: 'Status405',
      status410: 'Status410',
      status499: 'Status499',
      status4XX: 'Status4XX',
      status501: 'Status501',
      status502: 'Status502',
      status503: 'Status503',
      status504: 'Status504',
      status5XX: 'Status5XX',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      status200: 'number',
      status2XX: 'number',
      status3XX: 'number',
      status403: 'number',
      status404: 'number',
      status405: 'number',
      status410: 'number',
      status499: 'number',
      status4XX: 'number',
      status501: 'number',
      status502: 'number',
      status503: 'number',
      status504: 'number',
      status5XX: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsProxyTypeList extends $dara.Model {
  proxyPorts?: string[];
  /**
   * @example
   * http
   */
  proxyType?: string;
  static names(): { [key: string]: string } {
    return {
      proxyPorts: 'ProxyPorts',
      proxyType: 'ProxyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyPorts: { 'type': 'array', 'itemType': 'string' },
      proxyType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.proxyPorts)) {
      $dara.Model.validateArray(this.proxyPorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsRealServers extends $dara.Model {
  /**
   * @example
   * 1.1.1.1
   */
  realServer?: string;
  /**
   * @example
   * 0
   */
  rsType?: number;
  static names(): { [key: string]: string } {
    return {
      realServer: 'RealServer',
      rsType: 'RsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realServer: 'string',
      rsType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomains extends $dara.Model {
  blackList?: string[];
  /**
   * @example
   * true
   */
  ccEnabled?: boolean;
  /**
   * @example
   * true
   */
  ccRuleEnabled?: boolean;
  /**
   * @example
   * normal
   */
  ccTemplate?: string;
  /**
   * @example
   * testCertName
   */
  certName?: string;
  certRegion?: string;
  /**
   * @example
   * xxxxxxx.aliyunddos1006.com
   */
  cname?: string;
  /**
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * true
   */
  http2Enable?: boolean;
  proxyTypeList?: DescribeDomainsResponseBodyDomainsProxyTypeList[];
  realServers?: DescribeDomainsResponseBodyDomainsRealServers[];
  /**
   * @example
   * xx
   */
  sslCiphers?: string;
  /**
   * @example
   * xx
   */
  sslProtocols?: string;
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      blackList: 'BlackList',
      ccEnabled: 'CcEnabled',
      ccRuleEnabled: 'CcRuleEnabled',
      ccTemplate: 'CcTemplate',
      certName: 'CertName',
      certRegion: 'CertRegion',
      cname: 'Cname',
      domain: 'Domain',
      http2Enable: 'Http2Enable',
      proxyTypeList: 'ProxyTypeList',
      realServers: 'RealServers',
      sslCiphers: 'SslCiphers',
      sslProtocols: 'SslProtocols',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackList: { 'type': 'array', 'itemType': 'string' },
      ccEnabled: 'boolean',
      ccRuleEnabled: 'boolean',
      ccTemplate: 'string',
      certName: 'string',
      certRegion: 'string',
      cname: 'string',
      domain: 'string',
      http2Enable: 'boolean',
      proxyTypeList: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsProxyTypeList },
      realServers: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsRealServers },
      sslCiphers: 'string',
      sslProtocols: 'string',
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.blackList)) {
      $dara.Model.validateArray(this.blackList);
    }
    if(Array.isArray(this.proxyTypeList)) {
      $dara.Model.validateArray(this.proxyTypeList);
    }
    if(Array.isArray(this.realServers)) {
      $dara.Model.validateArray(this.realServers);
    }
    if(Array.isArray(this.whiteList)) {
      $dara.Model.validateArray(this.whiteList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponseBodyListenersHealthCheck extends $dara.Model {
  /**
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * 500
   */
  down?: number;
  /**
   * @example
   * 15
   */
  interval?: number;
  /**
   * @example
   * 233
   */
  port?: number;
  /**
   * @example
   * 1000
   */
  timeout?: number;
  /**
   * @example
   * tcp
   */
  type?: string;
  /**
   * @example
   * 1000
   */
  up?: number;
  /**
   * @example
   * /a/b/c
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      down: 'Down',
      interval: 'Interval',
      port: 'Port',
      timeout: 'Timeout',
      type: 'Type',
      up: 'Up',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      down: 'number',
      interval: 'number',
      port: 'number',
      timeout: 'number',
      type: 'string',
      up: 'number',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponseBodyListeners extends $dara.Model {
  /**
   * @example
   * 233
   */
  frontendPort?: number;
  healthCheck?: DescribeHealthCheckListResponseBodyListenersHealthCheck;
  /**
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  /**
   * @example
   * tcp
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      frontendPort: 'FrontendPort',
      healthCheck: 'HealthCheck',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontendPort: 'number',
      healthCheck: DescribeHealthCheckListResponseBodyListenersHealthCheck,
      instanceId: 'string',
      protocol: 'string',
    };
  }

  validate() {
    if(this.healthCheck && typeof (this.healthCheck as any).validate === 'function') {
      (this.healthCheck as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusListResponseBodyHealthCheckStatusListRealServerStatusList extends $dara.Model {
  /**
   * @example
   * 1.1.1.1
   */
  address?: string;
  /**
   * @example
   * normal
   */
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

export class DescribeHealthCheckStatusListResponseBodyHealthCheckStatusList extends $dara.Model {
  /**
   * @example
   * 233
   */
  frontendPort?: number;
  /**
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  /**
   * @example
   * tcp
   */
  protocol?: string;
  realServerStatusList?: DescribeHealthCheckStatusListResponseBodyHealthCheckStatusListRealServerStatusList[];
  /**
   * @example
   * normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
      realServerStatusList: 'RealServerStatusList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontendPort: 'number',
      instanceId: 'string',
      protocol: 'string',
      realServerStatusList: { 'type': 'array', 'itemType': DescribeHealthCheckStatusListResponseBodyHealthCheckStatusListRealServerStatusList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.realServerStatusList)) {
      $dara.Model.validateArray(this.realServerStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfoList extends $dara.Model {
  /**
   * @example
   * 1.1.1.1
   */
  eip?: string;
  /**
   * @example
   * normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      eip: 'Eip',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eip: 'string',
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

export class DescribeInstanceDetailsResponseBodyInstanceDetails extends $dara.Model {
  eipInfoList?: DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfoList[];
  /**
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  /**
   * @example
   * coop-line-001
   */
  line?: string;
  static names(): { [key: string]: string } {
    return {
      eipInfoList: 'EipInfoList',
      instanceId: 'InstanceId',
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipInfoList: { 'type': 'array', 'itemType': DescribeInstanceDetailsResponseBodyInstanceDetailsEipInfoList },
      instanceId: 'string',
      line: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eipInfoList)) {
      $dara.Model.validateArray(this.eipInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseBodyInstanceSpecs extends $dara.Model {
  /**
   * @example
   * 20000
   */
  bandwidthMbps?: number;
  /**
   * @example
   * 20
   */
  baseBandwidth?: number;
  /**
   * @example
   * 10
   */
  defenseCount?: number;
  /**
   * @example
   * 50
   */
  domainLimit?: number;
  /**
   * @example
   * 20
   */
  elasticBandwidth?: number;
  /**
   * @example
   * default
   */
  functionVersion?: string;
  /**
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  /**
   * @example
   * 50
   */
  portLimit?: number;
  /**
   * @example
   * 1000
   */
  qpsLimit?: number;
  /**
   * @example
   * 10
   */
  siteLimit?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthMbps: 'BandwidthMbps',
      baseBandwidth: 'BaseBandwidth',
      defenseCount: 'DefenseCount',
      domainLimit: 'DomainLimit',
      elasticBandwidth: 'ElasticBandwidth',
      functionVersion: 'FunctionVersion',
      instanceId: 'InstanceId',
      portLimit: 'PortLimit',
      qpsLimit: 'QpsLimit',
      siteLimit: 'SiteLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthMbps: 'number',
      baseBandwidth: 'number',
      defenseCount: 'number',
      domainLimit: 'number',
      elasticBandwidth: 'number',
      functionVersion: 'string',
      instanceId: 'string',
      portLimit: 'number',
      qpsLimit: 'number',
      siteLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsResponseBodyInstanceStatistics extends $dara.Model {
  /**
   * @example
   * 1
   */
  defenseCountUsage?: number;
  /**
   * @example
   * 10
   */
  domainUsage?: number;
  /**
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  portUsage?: number;
  /**
   * @example
   * 1
   */
  siteUsage?: number;
  static names(): { [key: string]: string } {
    return {
      defenseCountUsage: 'DefenseCountUsage',
      domainUsage: 'DomainUsage',
      instanceId: 'InstanceId',
      portUsage: 'PortUsage',
      siteUsage: 'SiteUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseCountUsage: 'number',
      domainUsage: 'number',
      instanceId: 'string',
      portUsage: 'number',
      siteUsage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequestTag extends $dara.Model {
  /**
   * @example
   * key
   */
  key?: string;
  /**
   * @example
   * value
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

export class DescribeInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @example
   * 0
   */
  debtStatus?: number;
  /**
   * @example
   * 9
   */
  edition?: number;
  /**
   * @example
   * 1
   */
  enabled?: number;
  /**
   * @example
   * 2308402384
   */
  expireTime?: number;
  /**
   * @example
   * 2308402384
   */
  gmtCreate?: number;
  /**
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  /**
   * @example
   * testRemark
   */
  remark?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      debtStatus: 'DebtStatus',
      edition: 'Edition',
      enabled: 'Enabled',
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      instanceId: 'InstanceId',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debtStatus: 'number',
      edition: 'number',
      enabled: 'number',
      expireTime: 'number',
      gmtCreate: 'number',
      instanceId: 'string',
      remark: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpTrafficResponseBodyIpTrafficPoints extends $dara.Model {
  /**
   * @example
   * 100
   */
  actConns?: number;
  /**
   * @example
   * 100
   */
  cps?: number;
  /**
   * @example
   * 100
   */
  inactConns?: number;
  /**
   * @example
   * 10000
   */
  maxInbps?: number;
  /**
   * @example
   * 10000
   */
  maxOutbps?: number;
  /**
   * @example
   * 1536734112
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      actConns: 'ActConns',
      cps: 'Cps',
      inactConns: 'InactConns',
      maxInbps: 'MaxInbps',
      maxOutbps: 'MaxOutbps',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actConns: 'number',
      cps: 'number',
      inactConns: 'number',
      maxInbps: 'number',
      maxOutbps: 'number',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBodyListenersConfigCcSblack extends $dara.Model {
  /**
   * @example
   * 5
   */
  cnt?: number;
  /**
   * @example
   * 60
   */
  during?: number;
  /**
   * @example
   * 1800
   */
  expires?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      cnt: 'Cnt',
      during: 'During',
      expires: 'Expires',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnt: 'number',
      during: 'number',
      expires: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBodyListenersConfigCc extends $dara.Model {
  sblack?: DescribeLayer4RuleAttributesResponseBodyListenersConfigCcSblack[];
  static names(): { [key: string]: string } {
    return {
      sblack: 'Sblack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sblack: { 'type': 'array', 'itemType': DescribeLayer4RuleAttributesResponseBodyListenersConfigCcSblack },
    };
  }

  validate() {
    if(Array.isArray(this.sblack)) {
      $dara.Model.validateArray(this.sblack);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBodyListenersConfigPayloadLen extends $dara.Model {
  /**
   * @example
   * 2
   */
  max?: number;
  /**
   * @example
   * 1
   */
  min?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBodyListenersConfigSla extends $dara.Model {
  /**
   * @example
   * 100
   */
  cps?: number;
  /**
   * @example
   * 0
   */
  cpsEnable?: number;
  /**
   * @example
   * 1000
   */
  maxconn?: number;
  /**
   * @example
   * 0
   */
  maxconnEnable?: number;
  static names(): { [key: string]: string } {
    return {
      cps: 'Cps',
      cpsEnable: 'CpsEnable',
      maxconn: 'Maxconn',
      maxconnEnable: 'MaxconnEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cps: 'number',
      cpsEnable: 'number',
      maxconn: 'number',
      maxconnEnable: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBodyListenersConfigSlimit extends $dara.Model {
  /**
   * @example
   * 0
   */
  bps?: number;
  /**
   * @example
   * 100
   */
  cps?: number;
  /**
   * @example
   * 0
   */
  cpsEnable?: number;
  /**
   * @example
   * 2
   */
  cpsMode?: number;
  /**
   * @example
   * 1000
   */
  maxconn?: number;
  /**
   * @example
   * 0
   */
  maxconnEnable?: number;
  /**
   * @example
   * 0
   */
  pps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      cps: 'Cps',
      cpsEnable: 'CpsEnable',
      cpsMode: 'CpsMode',
      maxconn: 'Maxconn',
      maxconnEnable: 'MaxconnEnable',
      pps: 'Pps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      cps: 'number',
      cpsEnable: 'number',
      cpsMode: 'number',
      maxconn: 'number',
      maxconnEnable: 'number',
      pps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBodyListenersConfig extends $dara.Model {
  cc?: DescribeLayer4RuleAttributesResponseBodyListenersConfigCc;
  /**
   * @example
   * on
   */
  nodataConn?: string;
  payloadLen?: DescribeLayer4RuleAttributesResponseBodyListenersConfigPayloadLen;
  /**
   * @example
   * 0
   */
  persistenceTimeout?: number;
  sla?: DescribeLayer4RuleAttributesResponseBodyListenersConfigSla;
  slimit?: DescribeLayer4RuleAttributesResponseBodyListenersConfigSlimit;
  /**
   * @example
   * on
   */
  synproxy?: string;
  static names(): { [key: string]: string } {
    return {
      cc: 'Cc',
      nodataConn: 'NodataConn',
      payloadLen: 'PayloadLen',
      persistenceTimeout: 'PersistenceTimeout',
      sla: 'Sla',
      slimit: 'Slimit',
      synproxy: 'Synproxy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cc: DescribeLayer4RuleAttributesResponseBodyListenersConfigCc,
      nodataConn: 'string',
      payloadLen: DescribeLayer4RuleAttributesResponseBodyListenersConfigPayloadLen,
      persistenceTimeout: 'number',
      sla: DescribeLayer4RuleAttributesResponseBodyListenersConfigSla,
      slimit: DescribeLayer4RuleAttributesResponseBodyListenersConfigSlimit,
      synproxy: 'string',
    };
  }

  validate() {
    if(this.cc && typeof (this.cc as any).validate === 'function') {
      (this.cc as any).validate();
    }
    if(this.payloadLen && typeof (this.payloadLen as any).validate === 'function') {
      (this.payloadLen as any).validate();
    }
    if(this.sla && typeof (this.sla as any).validate === 'function') {
      (this.sla as any).validate();
    }
    if(this.slimit && typeof (this.slimit as any).validate === 'function') {
      (this.slimit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBodyListeners extends $dara.Model {
  config?: DescribeLayer4RuleAttributesResponseBodyListenersConfig;
  /**
   * @example
   * 233
   */
  frontendPort?: number;
  /**
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  /**
   * @example
   * tcp
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribeLayer4RuleAttributesResponseBodyListenersConfig,
      frontendPort: 'number',
      instanceId: 'string',
      protocol: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulesResponseBodyListeners extends $dara.Model {
  /**
   * @remarks
   * The origin server port.
   * 
   * @example
   * 233
   */
  backendPort?: number;
  /**
   * @remarks
   * The origin mode. Values:
   * 
   * - **0**: Indicates the default origin mode.
   * - **1**: Indicates the primary/backup origin mode.
   * 
   * @example
   * 0
   */
  bakMode?: number;
  /**
   * @remarks
   * The currently effective origin server type. Values:
   * 
   * - **1**: Indicates that the primary origin server settings are in effect (DDoS protection forwards business traffic to the primary origin server IP address).
   * - **2**: Indicates that the backup origin server settings are in effect (DDoS protection forwards business traffic to the backup origin server IP address).
   * 
   * @example
   * 1
   */
  currentIndex?: number;
  /**
   * @remarks
   * The IP address of the DDoS protection instance.
   * 
   * @example
   * 203.107.XX.XX
   */
  eip?: string;
  /**
   * @remarks
   * The forwarding port.
   * 
   * @example
   * 233
   */
  frontendPort?: number;
  /**
   * @remarks
   * The ID of the DDoS protection instance.
   * 
   * @example
   * ddoscoo-cn-zvp2ay9b****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the rule was automatically created. Values:
   * 
   * - **true**: Indicates that the rule was automatically created by DDoS protection.
   * - **false**: Indicates that the rule was manually created by you.
   * 
   * @example
   * false
   */
  isAutoCreate?: boolean;
  /**
   * @remarks
   * Payload rule module switch. Values:
   * 
   * - 1: Enabled
   * - 0: Disabled
   * 
   * @example
   * 0
   */
  payloadRuleEnable?: number;
  /**
   * @remarks
   * The type of forwarding protocol.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * Traffic diversion switch. Values:
   * - **0** Off.
   * - **1** On.
   * 
   * @example
   * 0
   */
  proxyEnable?: number;
  /**
   * @remarks
   * Traffic diversion status. Values:
   * 
   * - on: Diversion is effective
   * - off: Diversion is ineffective
   * 
   * @example
   * on
   */
  proxyStatus?: string;
  /**
   * @remarks
   * The list of origin server IP addresses.
   */
  realServers?: string[];
  /**
   * @remarks
   * The remarks for the port forwarding rule.
   * 
   * @example
   * test-remark
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      backendPort: 'BackendPort',
      bakMode: 'BakMode',
      currentIndex: 'CurrentIndex',
      eip: 'Eip',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      isAutoCreate: 'IsAutoCreate',
      payloadRuleEnable: 'PayloadRuleEnable',
      protocol: 'Protocol',
      proxyEnable: 'ProxyEnable',
      proxyStatus: 'ProxyStatus',
      realServers: 'RealServers',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPort: 'number',
      bakMode: 'number',
      currentIndex: 'number',
      eip: 'string',
      frontendPort: 'number',
      instanceId: 'string',
      isAutoCreate: 'boolean',
      payloadRuleEnable: 'number',
      protocol: 'string',
      proxyEnable: 'number',
      proxyStatus: 'string',
      realServers: { 'type': 'array', 'itemType': 'string' },
      remark: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.realServers)) {
      $dara.Model.validateArray(this.realServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer7CCRulesResponseBodyLayer7CCRules extends $dara.Model {
  /**
   * @example
   * close
   */
  act?: string;
  /**
   * @example
   * 100
   */
  count?: number;
  /**
   * @example
   * 60
   */
  interval?: number;
  /**
   * @example
   * match
   */
  mode?: string;
  /**
   * @example
   * testCcRule1
   */
  name?: string;
  /**
   * @example
   * 1000
   */
  ttl?: number;
  /**
   * @example
   * /a/b/c
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      act: 'Act',
      count: 'Count',
      interval: 'Interval',
      mode: 'Mode',
      name: 'Name',
      ttl: 'Ttl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      act: 'string',
      count: 'number',
      interval: 'number',
      mode: 'string',
      name: 'string',
      ttl: 'number',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponseBodyOpEntities extends $dara.Model {
  /**
   * @example
   * 2.2.2.2
   */
  entityObject?: string;
  /**
   * @example
   * 1
   */
  entityType?: number;
  /**
   * @example
   * 1536715558000
   */
  gmtCreate?: number;
  /**
   * @example
   * 123
   */
  opAccount?: string;
  /**
   * @example
   * 1
   */
  opAction?: number;
  /**
   * @example
   * {"newEntity":{"elasticBandwidth":30},"oldEntity":{"elasticBandwidth":200}}
   */
  opDesc?: string;
  static names(): { [key: string]: string } {
    return {
      entityObject: 'EntityObject',
      entityType: 'EntityType',
      gmtCreate: 'GmtCreate',
      opAccount: 'OpAccount',
      opAction: 'OpAction',
      opDesc: 'OpDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityObject: 'string',
      entityType: 'number',
      gmtCreate: 'number',
      opAccount: 'string',
      opAction: 'number',
      opDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleCertListResponseBodyCertList extends $dara.Model {
  certIdentifier?: string;
  /**
   * @example
   * www.aliyun.com
   */
  common?: string;
  /**
   * @example
   * false
   */
  domainRelated?: boolean;
  /**
   * @example
   * 2020-09-23
   */
  endDate?: string;
  /**
   * @example
   * 123
   */
  id?: number;
  /**
   * @example
   * DigiCert Inc
   */
  issuer?: string;
  /**
   * @example
   * testCertName
   */
  name?: string;
  /**
   * @example
   * 2019-09-24
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      common: 'Common',
      domainRelated: 'DomainRelated',
      endDate: 'EndDate',
      id: 'Id',
      issuer: 'Issuer',
      name: 'Name',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      common: 'string',
      domainRelated: 'boolean',
      endDate: 'string',
      id: 'number',
      issuer: 'string',
      name: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleLayer7InstanceRelationsResponseBodyLayer7InstanceRelationsInstanceDetails extends $dara.Model {
  eipList?: string[];
  /**
   * @example
   * default
   */
  functionVersion?: string;
  /**
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  ipMode?: string;
  ipVersion?: string;
  static names(): { [key: string]: string } {
    return {
      eipList: 'EipList',
      functionVersion: 'FunctionVersion',
      instanceId: 'InstanceId',
      ipMode: 'IpMode',
      ipVersion: 'IpVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipList: { 'type': 'array', 'itemType': 'string' },
      functionVersion: 'string',
      instanceId: 'string',
      ipMode: 'string',
      ipVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eipList)) {
      $dara.Model.validateArray(this.eipList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleLayer7InstanceRelationsResponseBodyLayer7InstanceRelations extends $dara.Model {
  /**
   * @example
   * www.aliyun.com
   */
  domain?: string;
  instanceDetails?: DescribleLayer7InstanceRelationsResponseBodyLayer7InstanceRelationsInstanceDetails[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceDetails: 'InstanceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceDetails: { 'type': 'array', 'itemType': DescribleLayer7InstanceRelationsResponseBodyLayer7InstanceRelationsInstanceDetails },
    };
  }

  validate() {
    if(Array.isArray(this.instanceDetails)) {
      $dara.Model.validateArray(this.instanceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTaskResponseBodyAsyncTasks extends $dara.Model {
  /**
   * @example
   * 1533866201000
   */
  endTime?: number;
  /**
   * @example
   * 1533866201000
   */
  startTime?: number;
  /**
   * @example
   * 123
   */
  taskId?: number;
  /**
   * @example
   * {"instanceId": "ddoscoo-1234-qrq2134"}
   */
  taskParams?: string;
  /**
   * @example
   * {"instanceId": "ddoscoo-1234-qrq2134", "url": "https://oss.xxx.xxx"}
   */
  taskResult?: string;
  /**
   * @example
   * 1
   */
  taskStatus?: number;
  /**
   * @example
   * 1
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      taskId: 'TaskId',
      taskParams: 'TaskParams',
      taskResult: 'TaskResult',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      taskId: 'number',
      taskParams: 'string',
      taskResult: 'string',
      taskStatus: 'number',
      taskType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayer7CustomPortsResponseBodyLayer7CustomPorts extends $dara.Model {
  flag?: string;
  proxyPorts?: string[];
  /**
   * @example
   * https
   */
  proxyType?: string;
  static names(): { [key: string]: string } {
    return {
      flag: 'Flag',
      proxyPorts: 'ProxyPorts',
      proxyType: 'ProxyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flag: 'string',
      proxyPorts: { 'type': 'array', 'itemType': 'string' },
      proxyType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.proxyPorts)) {
      $dara.Model.validateArray(this.proxyPorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBodyTagKeys extends $dara.Model {
  /**
   * @example
   * 1
   */
  tagCount?: number;
  /**
   * @example
   * a
   */
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagCount: 'TagCount',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagCount: 'number',
      tagKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @example
   * testKey1
   */
  key?: string;
  /**
   * @example
   * testValue1
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @example
   * ddoscoo-cn-o4017n9q9004
   */
  resourceId?: string;
  /**
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @example
   * testKey1
   */
  tagKey?: string;
  /**
   * @example
   * testValue1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  validate() {
    if(Array.isArray(this.tagResource)) {
      $dara.Model.validateArray(this.tagResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListValueAddedResponseBodyValueAddedList extends $dara.Model {
  /**
   * @example
   * 1580918400000
   */
  expireTime?: number;
  /**
   * @example
   * 1575527305000
   */
  gmtCreate?: number;
  /**
   * @example
   * ddos_fl_pre-cn-xxxx
   */
  instanceId?: string;
  /**
   * @example
   * 5497558138880
   */
  logSize?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  storeRegion?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      instanceId: 'InstanceId',
      logSize: 'LogSize',
      status: 'Status',
      storeRegion: 'StoreRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      gmtCreate: 'number',
      instanceId: 'string',
      logSize: 'number',
      status: 'number',
      storeRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @example
   * testKey1
   */
  key?: string;
  /**
   * @example
   * testValue1
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

export class AddLayer7CCRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * close
   */
  act?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  interval?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * match
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testCcRule1
   */
  name?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /a/b/c
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      act: 'Act',
      count: 'Count',
      domain: 'Domain',
      interval: 'Interval',
      mode: 'Mode',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      ttl: 'Ttl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      act: 'string',
      count: 'number',
      domain: 'string',
      interval: 'number',
      mode: 'string',
      name: 'string',
      resourceGroupId: 'string',
      ttl: 'number',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLayer7CCRuleResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLayer7CCRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddLayer7CCRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddLayer7CCRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseDomainSlsConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @example
   * cn
   */
  lang?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseDomainSlsConfigResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseDomainSlsConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloseDomainSlsConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloseDomainSlsConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigHealthCheckRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tcp
   */
  forwardProtocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 233
   */
  frontendPort?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"Type":"tcp","Timeout":10,"Port":80,"Interval":10,"Up":10,"Down":40}"}
   */
  healthCheck?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-XXXXXX
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      healthCheck: 'HealthCheck',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardProtocol: 'string',
      frontendPort: 'number',
      healthCheck: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigHealthCheckResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigHealthCheckResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigHealthCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigHealthCheckResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"InstanceId":"xxxxxx-xxxxxx-xxxxxx-xxxxxxx","Protocol":"tcp","FrontendPort":80,"BackendPort":5,"RealServers":"1.1.1.1","2.2.2.2"}]
   */
  listeners?: string;
  proxyEnable?: number;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      proxyEnable: 'ProxyEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: 'string',
      proxyEnable: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RuleResponseBody extends $dara.Model {
  /**
   * @example
   * 0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigLayer4RuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigLayer4RuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RuleAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"Slimit":{"CpsEnable":1,"MaxconnEnable":1,"Cps":1,"Maxconn":1},"Sla":{"CpsEnable":1,"MaxconnEnable":1,"Cps":100,"Maxconn":1000},"PayloadLen":{"Min":0,"Max":6000}}
   */
  config?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  forwardProtocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 233
   */
  frontendPort?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      forwardProtocol: 'string',
      frontendPort: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RuleAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer4RuleAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigLayer4RuleAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigLayer4RuleAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7BlackWhiteListRequest extends $dara.Model {
  /**
   * @example
   * 1.1.1.1
   */
  blackList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      blackList: 'BlackList',
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackList: { 'type': 'array', 'itemType': 'string' },
      domain: 'string',
      resourceGroupId: 'string',
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.blackList)) {
      $dara.Model.validateArray(this.blackList);
    }
    if(Array.isArray(this.whiteList)) {
      $dara.Model.validateArray(this.whiteList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7BlackWhiteListResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7BlackWhiteListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigLayer7BlackWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigLayer7BlackWhiteListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7CCRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * close
   */
  act?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  interval?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * match
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testCcRule1
   */
  name?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /a/b/c
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      act: 'Act',
      count: 'Count',
      domain: 'Domain',
      interval: 'Interval',
      mode: 'Mode',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      ttl: 'Ttl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      act: 'string',
      count: 'number',
      domain: 'string',
      interval: 'number',
      mode: 'string',
      name: 'string',
      resourceGroupId: 'string',
      ttl: 'number',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7CCRuleResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7CCRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigLayer7CCRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigLayer7CCRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7CCTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7CCTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7CCTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigLayer7CCTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigLayer7CCTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7CertRequest extends $dara.Model {
  /**
   * @example
   * xx
   */
  cert?: string;
  /**
   * @example
   * 1234
   */
  certId?: number;
  certIdentifier?: string;
  /**
   * @example
   * testCertName
   */
  certName?: string;
  certRegion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * xx
   */
  key?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
      certId: 'CertId',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      certRegion: 'CertRegion',
      domain: 'Domain',
      key: 'Key',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: 'string',
      certId: 'number',
      certIdentifier: 'string',
      certName: 'string',
      certRegion: 'string',
      domain: 'string',
      key: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7CertResponseBody extends $dara.Model {
  /**
   * @example
   * 0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7CertResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigLayer7CertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigLayer7CertResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7RuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * ddoscoo-cn-XXXXXX
   */
  instanceIds?: string[];
  /**
   * @example
   * [{"ProxyPorts":[80,8080],"ProxyType":"http"},{"ProxyPorts":[443],"ProxyType":"https"}]rts\\":[443],\\"ProxyType\\":\\"https\\"}]
   */
  proxyTypeList?: string;
  /**
   * @example
   * [{"ProxyPorts":[80,8080],"ProxyType":"http"},{"ProxyPorts":[443],"ProxyType":"https"}]rts\\":[443],\\"ProxyType\\":\\"https\\"}]
   */
  proxyTypes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.1.1.1
   */
  realServers?: string[];
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  rsType?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceIds: 'InstanceIds',
      proxyTypeList: 'ProxyTypeList',
      proxyTypes: 'ProxyTypes',
      realServers: 'RealServers',
      resourceGroupId: 'ResourceGroupId',
      rsType: 'RsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      proxyTypeList: 'string',
      proxyTypes: { 'type': 'array', 'itemType': 'string' },
      realServers: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      rsType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.proxyTypes)) {
      $dara.Model.validateArray(this.proxyTypes);
    }
    if(Array.isArray(this.realServers)) {
      $dara.Model.validateArray(this.realServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7RuleResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigLayer7RuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigLayer7RuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigLayer7RuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsyncTaskRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"timestamp": 1530276554, "instanceId": "ddoscoo-woieuroi234"}
   */
  taskParams?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      taskParams: 'string',
      taskType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsyncTaskResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAsyncTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAsyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAsyncTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayer4RuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"InstanceId":"xxxxxx-xxxxxx-xxxxxx-xxxxxxx","Protocol":"tcp","FrontendPort":80,"BackendPort":5,"RealServers":"1.1.1.1","2.2.2.2"}]
   */
  listeners?: string;
  proxyEnable?: number;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      proxyEnable: 'ProxyEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: 'string',
      proxyEnable: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayer4RuleResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayer4RuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLayer4RuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLayer4RuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayer7RuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceIds?: string[];
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  rsType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"ProxyRules":[{"ProxyPort":443,"RealServers":["1.1.1.1:443"]}],"ProxyType":"https"},{"ProxyRules":[{"ProxyPort":80,"RealServers":["1.1.1.1:80"]}],"ProxyType":"http"}]
   */
  rules?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceIds: 'InstanceIds',
      resourceGroupId: 'ResourceGroupId',
      rsType: 'RsType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      rsType: 'number',
      rules: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayer7RuleResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayer7RuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLayer7RuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLayer7RuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsyncTaskRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsyncTaskResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsyncTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAsyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAsyncTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer4RuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"InstanceId":"0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc","Protocol":"tcp","FrontendPort":80}
   */
  listeners?: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer4RuleResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer4RuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLayer4RuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLayer4RuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer7CCRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testCcRule1
   */
  name?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      name: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer7CCRuleResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer7CCRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLayer7CCRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLayer7CCRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer7RuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer7RuleResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayer7RuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLayer7RuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLayer7RuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackSourceCidrRequest extends $dara.Model {
  ipVersion?: string;
  /**
   * @example
   * coop-line-001
   */
  line?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ipVersion: 'IpVersion',
      line: 'Line',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipVersion: 'string',
      line: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackSourceCidrResponseBody extends $dara.Model {
  cidrList?: string[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrList: 'CidrList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cidrList)) {
      $dara.Model.validateArray(this.cidrList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackSourceCidrResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackSourceCidrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBackSourceCidrResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchSlsDispatchStatusRequest extends $dara.Model {
  /**
   * @example
   * cn
   */
  lang?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNo: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchSlsDispatchStatusResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  slsConfigStatusList?: DescribeBatchSlsDispatchStatusResponseBodySlsConfigStatusList[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsConfigStatusList: 'SlsConfigStatusList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsConfigStatusList: { 'type': 'array', 'itemType': DescribeBatchSlsDispatchStatusResponseBodySlsConfigStatusList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.slsConfigStatusList)) {
      $dara.Model.validateArray(this.slsConfigStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchSlsDispatchStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBatchSlsDispatchStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBatchSlsDispatchStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSEventsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.1.1.1
   */
  eip?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3289457324
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  offset?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3289457398
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      eip: 'Eip',
      endTime: 'EndTime',
      offset: 'Offset',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eip: 'string',
      endTime: 'number',
      offset: 'number',
      pageSize: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSEventsResponseBody extends $dara.Model {
  events?: DescribeDDoSEventsResponseBodyEvents[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeDDoSEventsResponseBodyEvents },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSEventsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDDoSEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDDoSEventsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSTrafficRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.1.1.1
   */
  eip?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3289457398
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3289457324
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      eip: 'Eip',
      endTime: 'EndTime',
      interval: 'Interval',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eip: 'string',
      endTime: 'number',
      interval: 'number',
      resourceGroupId: 'string',
      sourceIp: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSTrafficResponseBody extends $dara.Model {
  DDoSTrafficPoints?: DescribeDDoSTrafficResponseBodyDDoSTrafficPoints[];
  /**
   * @example
   * 23482234
   */
  defenseInBytes?: number;
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * 19284762
   */
  sourceInBytes?: number;
  static names(): { [key: string]: string } {
    return {
      DDoSTrafficPoints: 'DDoSTrafficPoints',
      defenseInBytes: 'DefenseInBytes',
      requestId: 'RequestId',
      sourceInBytes: 'SourceInBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDoSTrafficPoints: { 'type': 'array', 'itemType': DescribeDDoSTrafficResponseBodyDDoSTrafficPoints },
      defenseInBytes: 'number',
      requestId: 'string',
      sourceInBytes: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.DDoSTrafficPoints)) {
      $dara.Model.validateArray(this.DDoSTrafficPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSTrafficResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDDoSTrafficResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDDoSTrafficResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseCountStatisticsRequest extends $dara.Model {
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseCountStatisticsResponseBody extends $dara.Model {
  defenseCountStatistics?: DescribeDefenseCountStatisticsResponseBodyDefenseCountStatistics;
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defenseCountStatistics: 'DefenseCountStatistics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseCountStatistics: DescribeDefenseCountStatisticsResponseBodyDefenseCountStatistics,
      requestId: 'string',
    };
  }

  validate() {
    if(this.defenseCountStatistics && typeof (this.defenseCountStatistics as any).validate === 'function') {
      (this.defenseCountStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseCountStatisticsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDefenseCountStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDefenseCountStatisticsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAccessModeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domainList?: string[];
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainList: 'DomainList',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainList: { 'type': 'array', 'itemType': 'string' },
      sourceIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainList)) {
      $dara.Model.validateArray(this.domainList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAccessModeResponseBody extends $dara.Model {
  domainModeList?: DescribeDomainAccessModeResponseBodyDomainModeList[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainModeList: 'DomainModeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainModeList: { 'type': 'array', 'itemType': DescribeDomainAccessModeResponseBodyDomainModeList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainModeList)) {
      $dara.Model.validateArray(this.domainModeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAccessModeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainAccessModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainAccessModeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackEventListRequest extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @example
   * 1668740400
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1681966800
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackEventListResponseBody extends $dara.Model {
  dataList?: DescribeDomainAttackEventListResponseBodyDataList[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeDomainAttackEventListResponseBodyDataList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackEventListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainAttackEventListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainAttackEventListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackMaxQpsRequest extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1667801940
   */
  endTime?: number;
  /**
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1657562370
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackMaxQpsResponseBody extends $dara.Model {
  /**
   * @example
   * 613
   */
  qps?: string;
  /**
   * @example
   * 62F9BD81-8BCA-5B23-A3CB-3FB7CEB7A4CA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qps: 'Qps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qps: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackMaxQpsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainAttackMaxQpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainAttackMaxQpsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainOverviewRequest extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @example
   * 1651809600
   */
  endTime?: number;
  /**
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1619798400
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainOverviewResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  maxHttp?: number;
  /**
   * @example
   * 0
   */
  maxHttps?: number;
  /**
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxHttp: 'MaxHttp',
      maxHttps: 'MaxHttps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxHttp: 'number',
      maxHttps: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainOverviewResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainOverviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainOverviewResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsListRequest extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @example
   * 1657162260
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1800
   */
  interval?: number;
  /**
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1672362360
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      interval: 'Interval',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      interval: 'number',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsListResponseBody extends $dara.Model {
  dataList?: DescribeDomainQpsListResponseBodyDataList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeDomainQpsListResponseBodyDataList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainQpsListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainQpsListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsWithCacheRequest extends $dara.Model {
  /**
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1577796336
   */
  endTime?: number;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1577794536
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      resourceGroupId: 'string',
      sourceIp: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsWithCacheResponseBody extends $dara.Model {
  blocks?: string[];
  cacheHits?: string[];
  ccBlockQps?: string[];
  ccJsQps?: string[];
  /**
   * @example
   * 60
   */
  interval?: number;
  ipBlockQps?: string[];
  preciseBlocks?: string[];
  preciseJsQps?: string[];
  regionBlocks?: string[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * 1577794500
   */
  startTime?: number;
  totals?: string[];
  static names(): { [key: string]: string } {
    return {
      blocks: 'Blocks',
      cacheHits: 'CacheHits',
      ccBlockQps: 'CcBlockQps',
      ccJsQps: 'CcJsQps',
      interval: 'Interval',
      ipBlockQps: 'IpBlockQps',
      preciseBlocks: 'PreciseBlocks',
      preciseJsQps: 'PreciseJsQps',
      regionBlocks: 'RegionBlocks',
      requestId: 'RequestId',
      startTime: 'StartTime',
      totals: 'Totals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blocks: { 'type': 'array', 'itemType': 'string' },
      cacheHits: { 'type': 'array', 'itemType': 'string' },
      ccBlockQps: { 'type': 'array', 'itemType': 'string' },
      ccJsQps: { 'type': 'array', 'itemType': 'string' },
      interval: 'number',
      ipBlockQps: { 'type': 'array', 'itemType': 'string' },
      preciseBlocks: { 'type': 'array', 'itemType': 'string' },
      preciseJsQps: { 'type': 'array', 'itemType': 'string' },
      regionBlocks: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      startTime: 'number',
      totals: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.blocks)) {
      $dara.Model.validateArray(this.blocks);
    }
    if(Array.isArray(this.cacheHits)) {
      $dara.Model.validateArray(this.cacheHits);
    }
    if(Array.isArray(this.ccBlockQps)) {
      $dara.Model.validateArray(this.ccBlockQps);
    }
    if(Array.isArray(this.ccJsQps)) {
      $dara.Model.validateArray(this.ccJsQps);
    }
    if(Array.isArray(this.ipBlockQps)) {
      $dara.Model.validateArray(this.ipBlockQps);
    }
    if(Array.isArray(this.preciseBlocks)) {
      $dara.Model.validateArray(this.preciseBlocks);
    }
    if(Array.isArray(this.preciseJsQps)) {
      $dara.Model.validateArray(this.preciseJsQps);
    }
    if(Array.isArray(this.regionBlocks)) {
      $dara.Model.validateArray(this.regionBlocks);
    }
    if(Array.isArray(this.totals)) {
      $dara.Model.validateArray(this.totals);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainQpsWithCacheResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainQpsWithCacheResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainQpsWithCacheResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSlsStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @example
   * cn
   */
  lang?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSlsStatusResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * ddoscoo-logstore
   */
  slsLogstore?: string;
  /**
   * @example
   * ddoscoo-project-xxxx-cn-hangzhou
   */
  slsProject?: string;
  /**
   * @example
   * true
   */
  slsStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsLogstore: 'SlsLogstore',
      slsProject: 'SlsProject',
      slsStatus: 'SlsStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsLogstore: 'string',
      slsProject: 'string',
      slsStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSlsStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainSlsStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainSlsStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatusCodeListRequest extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @example
   * 1583683200
   */
  endTime?: number;
  /**
   * @example
   * 1800
   */
  interval?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * upstream
   */
  queryType?: string;
  /**
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1582992000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      endTime: 'EndTime',
      interval: 'Interval',
      queryType: 'QueryType',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      endTime: 'number',
      interval: 'number',
      queryType: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatusCodeListResponseBody extends $dara.Model {
  /**
   * @example
   * 3B63C0DD-8AC5-44B2-95D6-064CA9296B9C
   */
  requestId?: string;
  statusCodeList?: DescribeDomainStatusCodeListResponseBodyStatusCodeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusCodeList: 'StatusCodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusCodeList: { 'type': 'array', 'itemType': DescribeDomainStatusCodeListResponseBodyStatusCodeList },
    };
  }

  validate() {
    if(Array.isArray(this.statusCodeList)) {
      $dara.Model.validateArray(this.statusCodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatusCodeListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainStatusCodeListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainStatusCodeListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsRequest extends $dara.Model {
  /**
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * ddoscoo-cn-XXXXXX
   */
  instanceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * fuzzy
   */
  queryDomainPattern?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceIds: 'InstanceIds',
      offset: 'Offset',
      pageSize: 'PageSize',
      queryDomainPattern: 'QueryDomainPattern',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      offset: 'number',
      pageSize: 'string',
      queryDomainPattern: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBody extends $dara.Model {
  domains?: DescribeDomainsResponseBodyDomains[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomains },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticBandwidthSpecRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticBandwidthSpecResponseBody extends $dara.Model {
  elasticBandwidthSpec?: string[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticBandwidthSpec: 'ElasticBandwidthSpec',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticBandwidthSpec: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.elasticBandwidthSpec)) {
      $dara.Model.validateArray(this.elasticBandwidthSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticBandwidthSpecResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeElasticBandwidthSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeElasticBandwidthSpecResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"InstanceId":"ddoscoo-cn-XXXXX","Protocol":"tcp","FrontendPort":80}]
   */
  listeners?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponseBody extends $dara.Model {
  listeners?: DescribeHealthCheckListResponseBodyListeners[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': DescribeHealthCheckListResponseBodyListeners },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.listeners)) {
      $dara.Model.validateArray(this.listeners);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHealthCheckListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHealthCheckListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"InstanceId":"ddoscoo-cn-XXXXX","Protocol":"tcp","FrontendPort":80}]
   */
  listeners?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusListResponseBody extends $dara.Model {
  healthCheckStatusList?: DescribeHealthCheckStatusListResponseBodyHealthCheckStatusList[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckStatusList: 'HealthCheckStatusList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckStatusList: { 'type': 'array', 'itemType': DescribeHealthCheckStatusListResponseBodyHealthCheckStatusList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.healthCheckStatusList)) {
      $dara.Model.validateArray(this.healthCheckStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckStatusListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHealthCheckStatusListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHealthCheckStatusListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["ddoscoo-cn-XXXX1", "ddoscoo-cn-XXXX2"]
   */
  instanceIds?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponseBody extends $dara.Model {
  instanceDetails?: DescribeInstanceDetailsResponseBodyInstanceDetails[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceDetails: 'InstanceDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDetails: { 'type': 'array', 'itemType': DescribeInstanceDetailsResponseBodyInstanceDetails },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceDetails)) {
      $dara.Model.validateArray(this.instanceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDetailsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceDetailsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["ddoscoo-cn-XXXXX"]
   */
  instanceIds?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseBody extends $dara.Model {
  instanceSpecs?: DescribeInstanceSpecsResponseBodyInstanceSpecs[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSpecs: 'InstanceSpecs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSpecs: { 'type': 'array', 'itemType': DescribeInstanceSpecsResponseBodyInstanceSpecs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceSpecs)) {
      $dara.Model.validateArray(this.instanceSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceSpecsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceSpecsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"InstanceId":"ddoscoo-cn-XXXXX","InstanceId":"ddoscoo-cn-YYYYY"}]
   */
  instanceIds?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsResponseBody extends $dara.Model {
  instanceStatistics?: DescribeInstanceStatisticsResponseBodyInstanceStatistics[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceStatistics: 'InstanceStatistics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatistics: { 'type': 'array', 'itemType': DescribeInstanceStatisticsResponseBodyInstanceStatistics },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceStatistics)) {
      $dara.Model.validateArray(this.instanceStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceStatisticsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $dara.Model {
  /**
   * @example
   * 9
   */
  edition?: number;
  /**
   * @example
   * 1
   */
  enabled?: number;
  /**
   * @example
   * 1578931200000
   */
  expireEndTime?: number;
  /**
   * @example
   * 1578931200000
   */
  expireStartTime?: number;
  /**
   * @example
   * ["ddoscoo-cn-XXXXX"]
   */
  instanceIds?: string;
  /**
   * @example
   * 1.1.1.1
   */
  ip?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * testRemark
   */
  remark?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  /**
   * @example
   * 1
   */
  status?: number[];
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      enabled: 'Enabled',
      expireEndTime: 'ExpireEndTime',
      expireStartTime: 'ExpireStartTime',
      instanceIds: 'InstanceIds',
      ip: 'Ip',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'number',
      enabled: 'number',
      expireEndTime: 'number',
      expireStartTime: 'number',
      instanceIds: 'string',
      ip: 'string',
      pageNo: 'string',
      pageSize: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
      status: { 'type': 'array', 'itemType': 'number' },
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $dara.Model {
  instances?: DescribeInstancesResponseBodyInstances[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpTrafficRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.1.1.1
   */
  eip?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1536734120
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @example
   * 233
   */
  port?: number;
  /**
   * @example
   * http
   */
  queryProtocol?: string;
  /**
   * @example
   * xxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1536734112
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      eip: 'Eip',
      endTime: 'EndTime',
      interval: 'Interval',
      port: 'Port',
      queryProtocol: 'QueryProtocol',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eip: 'string',
      endTime: 'number',
      interval: 'number',
      port: 'number',
      queryProtocol: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpTrafficResponseBody extends $dara.Model {
  /**
   * @example
   * 10000
   */
  avgInBps?: number;
  /**
   * @example
   * 10000
   */
  avgOutBps?: number;
  ipTrafficPoints?: DescribeIpTrafficResponseBodyIpTrafficPoints[];
  /**
   * @example
   * 10000
   */
  maxInBps?: number;
  /**
   * @example
   * 10000
   */
  maxOutBps?: number;
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      avgInBps: 'AvgInBps',
      avgOutBps: 'AvgOutBps',
      ipTrafficPoints: 'IpTrafficPoints',
      maxInBps: 'MaxInBps',
      maxOutBps: 'MaxOutBps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgInBps: 'number',
      avgOutBps: 'number',
      ipTrafficPoints: { 'type': 'array', 'itemType': DescribeIpTrafficResponseBodyIpTrafficPoints },
      maxInBps: 'number',
      maxOutBps: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipTrafficPoints)) {
      $dara.Model.validateArray(this.ipTrafficPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpTrafficResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeIpTrafficResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeIpTrafficResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"InstanceId":"ddoscoo-cn-XXXXX","Protocol":"tcp","FrontendPort":80}]
   */
  listeners?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponseBody extends $dara.Model {
  listeners?: DescribeLayer4RuleAttributesResponseBodyListeners[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': DescribeLayer4RuleAttributesResponseBodyListeners },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.listeners)) {
      $dara.Model.validateArray(this.listeners);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RuleAttributesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLayer4RuleAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLayer4RuleAttributesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of forwarding protocol. Values:
   * - **tcp**: Indicates TCP protocol.
   * - **udp**: Indicates UDP protocol.
   * 
   * @example
   * tcp
   */
  forwardProtocol?: string;
  /**
   * @remarks
   * The forwarding port.
   * 
   * @example
   * 233
   */
  frontendPort?: number;
  /**
   * @remarks
   * The ID of the DDoS protection instance to be queried.
   * 
   * > You can call [DescribeInstances](https://help.aliyun.com/document_detail/91478.html) to query all DDoS protection instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-zvp2ay9b****
   */
  instanceId?: string;
  /**
   * @remarks
   * In paginated queries, specifies which page of data to return. The minimum value is **1**, indicating the first page of data.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  offset?: number;
  /**
   * @remarks
   * In paginated queries, specifies the number of results per page. The maximum value is **50**, indicating that each page can contain up to 50 results.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The source IP address of the request. You do not need to fill this in; it is automatically obtained by the system.
   * 
   * @example
   * 192.0.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      offset: 'Offset',
      pageSize: 'PageSize',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardProtocol: 'string',
      frontendPort: 'number',
      instanceId: 'string',
      offset: 'number',
      pageSize: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Detailed configuration of port forwarding rules, including the forwarding port, forwarding protocol, and origin server addresses, etc.
   */
  listeners?: DescribeLayer4RulesResponseBodyListeners[];
  /**
   * @remarks
   * The ID of the current request.
   * 
   * @example
   * 949919A2-6636-1444-9213-AB27DD88AAA8
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned results.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': DescribeLayer4RulesResponseBodyListeners },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.listeners)) {
      $dara.Model.validateArray(this.listeners);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLayer4RulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLayer4RulesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer7CCRulesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      offset: 'Offset',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      offset: 'number',
      pageSize: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer7CCRulesResponseBody extends $dara.Model {
  layer7CCRules?: DescribeLayer7CCRulesResponseBodyLayer7CCRules[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      layer7CCRules: 'Layer7CCRules',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layer7CCRules: { 'type': 'array', 'itemType': DescribeLayer7CCRulesResponseBodyLayer7CCRules },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.layer7CCRules)) {
      $dara.Model.validateArray(this.layer7CCRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer7CCRulesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLayer7CCRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLayer7CCRulesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreExistStatusRequest extends $dara.Model {
  /**
   * @example
   * cn
   */
  lang?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreExistStatusResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  existStatus?: boolean;
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      existStatus: 'ExistStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existStatus: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreExistStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLogStoreExistStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeLogStoreExistStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1536715558000
   */
  endTime?: number;
  /**
   * @example
   * xx
   */
  entityObject?: string;
  /**
   * @example
   * 1
   */
  entityType?: number;
  opAction?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1534123558000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      entityObject: 'EntityObject',
      entityType: 'EntityType',
      opAction: 'OpAction',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      entityObject: 'string',
      entityType: 'number',
      opAction: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      sourceIp: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponseBody extends $dara.Model {
  opEntities?: DescribeOpEntitiesResponseBodyOpEntities[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      opEntities: 'OpEntities',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opEntities: { 'type': 'array', 'itemType': DescribeOpEntitiesResponseBodyOpEntities },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.opEntities)) {
      $dara.Model.validateArray(this.opEntities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOpEntitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOpEntitiesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimpleDomainsRequest extends $dara.Model {
  /**
   * @example
   * ddoscoo-cn-XXXXXX
   */
  instanceIds?: string[];
  /**
   * @example
   * cn
   */
  lang?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimpleDomainsResponseBody extends $dara.Model {
  domainList?: string[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainList: 'DomainList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainList)) {
      $dara.Model.validateArray(this.domainList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimpleDomainsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSimpleDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSimpleDomainsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsAuthStatusRequest extends $dara.Model {
  /**
   * @example
   * cn
   */
  lang?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsAuthStatusResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  slsAuthStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsAuthStatus: 'SlsAuthStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsAuthStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsAuthStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlsAuthStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSlsAuthStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsEmptyCountRequest extends $dara.Model {
  /**
   * @example
   * cn
   */
  lang?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsEmptyCountResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  availableCount?: number;
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableCount: 'AvailableCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsEmptyCountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlsEmptyCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSlsEmptyCountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogstoreInfoRequest extends $dara.Model {
  /**
   * @example
   * cn
   */
  lang?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogstoreInfoResponseBody extends $dara.Model {
  /**
   * @example
   * ddoscoo-logstore
   */
  logStore?: string;
  /**
   * @example
   * ddoscoo-project-xxxx-cn-hangzhou
   */
  project?: string;
  /**
   * @example
   * 5497558138880
   */
  quota?: number;
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  ttl?: number;
  /**
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      logStore: 'LogStore',
      project: 'Project',
      quota: 'Quota',
      requestId: 'RequestId',
      ttl: 'Ttl',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      project: 'string',
      quota: 'number',
      requestId: 'string',
      ttl: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsLogstoreInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlsLogstoreInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSlsLogstoreInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsOpenStatusRequest extends $dara.Model {
  /**
   * @example
   * cn
   */
  lang?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsOpenStatusResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  slsOpenStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsOpenStatus: 'SlsOpenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsOpenStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsOpenStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlsOpenStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSlsOpenStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleCertListRequest extends $dara.Model {
  /**
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleCertListResponseBody extends $dara.Model {
  certList?: DescribleCertListResponseBodyCertList[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: { 'type': 'array', 'itemType': DescribleCertListResponseBodyCertList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certList)) {
      $dara.Model.validateArray(this.certList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleCertListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribleCertListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribleCertListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleLayer7InstanceRelationsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domainList?: string[];
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainList: 'DomainList',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainList: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainList)) {
      $dara.Model.validateArray(this.domainList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleLayer7InstanceRelationsResponseBody extends $dara.Model {
  layer7InstanceRelations?: DescribleLayer7InstanceRelationsResponseBodyLayer7InstanceRelations[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      layer7InstanceRelations: 'Layer7InstanceRelations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layer7InstanceRelations: { 'type': 'array', 'itemType': DescribleLayer7InstanceRelationsResponseBodyLayer7InstanceRelations },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.layer7InstanceRelations)) {
      $dara.Model.validateArray(this.layer7InstanceRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribleLayer7InstanceRelationsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribleLayer7InstanceRelationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribleLayer7InstanceRelationsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLayer7CCRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLayer7CCResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLayer7CCResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableLayer7CCResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableLayer7CCResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLayer7CCRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLayer7CCRuleResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLayer7CCRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableLayer7CCRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableLayer7CCRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmptySlsLogstoreRequest extends $dara.Model {
  /**
   * @example
   * cn
   */
  lang?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmptySlsLogstoreResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmptySlsLogstoreResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EmptySlsLogstoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EmptySlsLogstoreResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLayer7CCRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLayer7CCResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLayer7CCResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableLayer7CCResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableLayer7CCResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLayer7CCRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLayer7CCRuleResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLayer7CCRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableLayer7CCRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableLayer7CCRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTaskRequest extends $dara.Model {
  /**
   * @example
   * cn
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNo: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTaskResponseBody extends $dara.Model {
  asyncTasks?: ListAsyncTaskResponseBodyAsyncTasks[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      asyncTasks: 'AsyncTasks',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTasks: { 'type': 'array', 'itemType': ListAsyncTaskResponseBodyAsyncTasks },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.asyncTasks)) {
      $dara.Model.validateArray(this.asyncTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAsyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAsyncTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayer7CustomPortsRequest extends $dara.Model {
  /**
   * @example
   * cn
   */
  lang?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayer7CustomPortsResponseBody extends $dara.Model {
  layer7CustomPorts?: ListLayer7CustomPortsResponseBodyLayer7CustomPorts[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      layer7CustomPorts: 'Layer7CustomPorts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layer7CustomPorts: { 'type': 'array', 'itemType': ListLayer7CustomPortsResponseBodyLayer7CustomPorts },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.layer7CustomPorts)) {
      $dara.Model.validateArray(this.layer7CustomPorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayer7CustomPortsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLayer7CustomPortsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLayer7CustomPortsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 97935DF1-0289-4AA2-9DD1-72377838B16B
   */
  requestId?: string;
  tagKeys?: ListTagKeysResponseBodyTagKeys[];
  /**
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tagKeys: 'TagKeys',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      tagKeys: { 'type': 'array', 'itemType': ListTagKeysResponseBodyTagKeys },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagKeysResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @example
   * RGuYpqDdKhzXb8C3.D1BwQgc1tMBsoxdGiEKHHUUCffomr
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @example
   * ddoscoo-cn-o4017n9q9004
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * RGuYpqDdKhzXb8C3.D1BwQgc1tMBsoxdGiEKHHUUCffomr
   */
  nextToken?: string;
  /**
   * @example
   * C3F7E6AE-43B2-4730-B6A3-FD17552B8F65
   */
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  validate() {
    if(this.tagResources && typeof (this.tagResources as any).validate === 'function') {
      (this.tagResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListValueAddedRequest extends $dara.Model {
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListValueAddedResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  valueAddedList?: ListValueAddedResponseBodyValueAddedList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      valueAddedList: 'ValueAddedList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      valueAddedList: { 'type': 'array', 'itemType': ListValueAddedResponseBodyValueAddedList },
    };
  }

  validate() {
    if(Array.isArray(this.valueAddedList)) {
      $dara.Model.validateArray(this.valueAddedList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListValueAddedResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListValueAddedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListValueAddedResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticBandWidthRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
  elasticBandwidth?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      elasticBandwidth: 'ElasticBandwidth',
      instanceId: 'InstanceId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticBandwidth: 'number',
      instanceId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticBandWidthResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticBandWidthResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyElasticBandWidthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyElasticBandWidthResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFullLogTtlRequest extends $dara.Model {
  /**
   * @example
   * cn
   */
  lang?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFullLogTtlResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFullLogTtlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyFullLogTtlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyFullLogTtlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRemarkRequest extends $dara.Model {
  /**
   * @example
   * ddoscoo-cn-XXXXX
   */
  instanceId?: string;
  remark?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      remark: 'Remark',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      remark: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRemarkResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRemarkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceRemarkResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenDomainSlsConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @example
   * cn
   */
  lang?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      lang: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenDomainSlsConfigResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenDomainSlsConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenDomainSlsConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenDomainSlsConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceRequest extends $dara.Model {
  instanceId?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseValueAddedRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ddos_fl_pre-cn-xxxx
   */
  instanceId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseValueAddedResponseBody extends $dara.Model {
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseValueAddedResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseValueAddedResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseValueAddedResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-v0h1fmwbc024
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 7078CD1E-F609-47A4-9C39-B288CC27C686
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-v0h1fmwbc024
   */
  resourceId?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @example
   * testKey1
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * F2D86AED-BA27-4584-BADC-B43BDA7EEBCA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ddoscoo", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @param request - AddLayer7CCRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddLayer7CCRuleResponse
   */
  async addLayer7CCRuleWithOptions(request: AddLayer7CCRuleRequest, runtime: $dara.RuntimeOptions): Promise<AddLayer7CCRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.act)) {
      query["Act"] = request.act;
    }

    if (!$dara.isNull(request.count)) {
      query["Count"] = request.count;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!$dara.isNull(request.uri)) {
      query["Uri"] = request.uri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddLayer7CCRule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddLayer7CCRuleResponse>(await this.callApi(params, req, runtime), new AddLayer7CCRuleResponse({}));
    } else {
      return $dara.cast<AddLayer7CCRuleResponse>(await this.execute(params, req, runtime), new AddLayer7CCRuleResponse({}));
    }

  }

  /**
   * @param request - AddLayer7CCRuleRequest
   * @returns AddLayer7CCRuleResponse
   */
  async addLayer7CCRule(request: AddLayer7CCRuleRequest): Promise<AddLayer7CCRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addLayer7CCRuleWithOptions(request, runtime);
  }

  /**
   * @param request - CloseDomainSlsConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseDomainSlsConfigResponse
   */
  async closeDomainSlsConfigWithOptions(request: CloseDomainSlsConfigRequest, runtime: $dara.RuntimeOptions): Promise<CloseDomainSlsConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseDomainSlsConfig",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CloseDomainSlsConfigResponse>(await this.callApi(params, req, runtime), new CloseDomainSlsConfigResponse({}));
    } else {
      return $dara.cast<CloseDomainSlsConfigResponse>(await this.execute(params, req, runtime), new CloseDomainSlsConfigResponse({}));
    }

  }

  /**
   * @param request - CloseDomainSlsConfigRequest
   * @returns CloseDomainSlsConfigResponse
   */
  async closeDomainSlsConfig(request: CloseDomainSlsConfigRequest): Promise<CloseDomainSlsConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeDomainSlsConfigWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigHealthCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigHealthCheckResponse
   */
  async configHealthCheckWithOptions(request: ConfigHealthCheckRequest, runtime: $dara.RuntimeOptions): Promise<ConfigHealthCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forwardProtocol)) {
      query["ForwardProtocol"] = request.forwardProtocol;
    }

    if (!$dara.isNull(request.frontendPort)) {
      query["FrontendPort"] = request.frontendPort;
    }

    if (!$dara.isNull(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigHealthCheck",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ConfigHealthCheckResponse>(await this.callApi(params, req, runtime), new ConfigHealthCheckResponse({}));
    } else {
      return $dara.cast<ConfigHealthCheckResponse>(await this.execute(params, req, runtime), new ConfigHealthCheckResponse({}));
    }

  }

  /**
   * @param request - ConfigHealthCheckRequest
   * @returns ConfigHealthCheckResponse
   */
  async configHealthCheck(request: ConfigHealthCheckRequest): Promise<ConfigHealthCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configHealthCheckWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigLayer4RuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigLayer4RuleResponse
   */
  async configLayer4RuleWithOptions(request: ConfigLayer4RuleRequest, runtime: $dara.RuntimeOptions): Promise<ConfigLayer4RuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    if (!$dara.isNull(request.proxyEnable)) {
      query["ProxyEnable"] = request.proxyEnable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigLayer4Rule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ConfigLayer4RuleResponse>(await this.callApi(params, req, runtime), new ConfigLayer4RuleResponse({}));
    } else {
      return $dara.cast<ConfigLayer4RuleResponse>(await this.execute(params, req, runtime), new ConfigLayer4RuleResponse({}));
    }

  }

  /**
   * @param request - ConfigLayer4RuleRequest
   * @returns ConfigLayer4RuleResponse
   */
  async configLayer4Rule(request: ConfigLayer4RuleRequest): Promise<ConfigLayer4RuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer4RuleWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigLayer4RuleAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigLayer4RuleAttributeResponse
   */
  async configLayer4RuleAttributeWithOptions(request: ConfigLayer4RuleAttributeRequest, runtime: $dara.RuntimeOptions): Promise<ConfigLayer4RuleAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.forwardProtocol)) {
      query["ForwardProtocol"] = request.forwardProtocol;
    }

    if (!$dara.isNull(request.frontendPort)) {
      query["FrontendPort"] = request.frontendPort;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigLayer4RuleAttribute",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ConfigLayer4RuleAttributeResponse>(await this.callApi(params, req, runtime), new ConfigLayer4RuleAttributeResponse({}));
    } else {
      return $dara.cast<ConfigLayer4RuleAttributeResponse>(await this.execute(params, req, runtime), new ConfigLayer4RuleAttributeResponse({}));
    }

  }

  /**
   * @param request - ConfigLayer4RuleAttributeRequest
   * @returns ConfigLayer4RuleAttributeResponse
   */
  async configLayer4RuleAttribute(request: ConfigLayer4RuleAttributeRequest): Promise<ConfigLayer4RuleAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer4RuleAttributeWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigLayer7BlackWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigLayer7BlackWhiteListResponse
   */
  async configLayer7BlackWhiteListWithOptions(request: ConfigLayer7BlackWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<ConfigLayer7BlackWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.blackList)) {
      query["BlackList"] = request.blackList;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.whiteList)) {
      query["WhiteList"] = request.whiteList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigLayer7BlackWhiteList",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ConfigLayer7BlackWhiteListResponse>(await this.callApi(params, req, runtime), new ConfigLayer7BlackWhiteListResponse({}));
    } else {
      return $dara.cast<ConfigLayer7BlackWhiteListResponse>(await this.execute(params, req, runtime), new ConfigLayer7BlackWhiteListResponse({}));
    }

  }

  /**
   * @param request - ConfigLayer7BlackWhiteListRequest
   * @returns ConfigLayer7BlackWhiteListResponse
   */
  async configLayer7BlackWhiteList(request: ConfigLayer7BlackWhiteListRequest): Promise<ConfigLayer7BlackWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer7BlackWhiteListWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigLayer7CCRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigLayer7CCRuleResponse
   */
  async configLayer7CCRuleWithOptions(request: ConfigLayer7CCRuleRequest, runtime: $dara.RuntimeOptions): Promise<ConfigLayer7CCRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.act)) {
      query["Act"] = request.act;
    }

    if (!$dara.isNull(request.count)) {
      query["Count"] = request.count;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!$dara.isNull(request.uri)) {
      query["Uri"] = request.uri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigLayer7CCRule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ConfigLayer7CCRuleResponse>(await this.callApi(params, req, runtime), new ConfigLayer7CCRuleResponse({}));
    } else {
      return $dara.cast<ConfigLayer7CCRuleResponse>(await this.execute(params, req, runtime), new ConfigLayer7CCRuleResponse({}));
    }

  }

  /**
   * @param request - ConfigLayer7CCRuleRequest
   * @returns ConfigLayer7CCRuleResponse
   */
  async configLayer7CCRule(request: ConfigLayer7CCRuleRequest): Promise<ConfigLayer7CCRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer7CCRuleWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigLayer7CCTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigLayer7CCTemplateResponse
   */
  async configLayer7CCTemplateWithOptions(request: ConfigLayer7CCTemplateRequest, runtime: $dara.RuntimeOptions): Promise<ConfigLayer7CCTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigLayer7CCTemplate",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ConfigLayer7CCTemplateResponse>(await this.callApi(params, req, runtime), new ConfigLayer7CCTemplateResponse({}));
    } else {
      return $dara.cast<ConfigLayer7CCTemplateResponse>(await this.execute(params, req, runtime), new ConfigLayer7CCTemplateResponse({}));
    }

  }

  /**
   * @param request - ConfigLayer7CCTemplateRequest
   * @returns ConfigLayer7CCTemplateResponse
   */
  async configLayer7CCTemplate(request: ConfigLayer7CCTemplateRequest): Promise<ConfigLayer7CCTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer7CCTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigLayer7CertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigLayer7CertResponse
   */
  async configLayer7CertWithOptions(request: ConfigLayer7CertRequest, runtime: $dara.RuntimeOptions): Promise<ConfigLayer7CertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cert)) {
      query["Cert"] = request.cert;
    }

    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.certIdentifier)) {
      query["CertIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.certRegion)) {
      query["CertRegion"] = request.certRegion;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigLayer7Cert",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ConfigLayer7CertResponse>(await this.callApi(params, req, runtime), new ConfigLayer7CertResponse({}));
    } else {
      return $dara.cast<ConfigLayer7CertResponse>(await this.execute(params, req, runtime), new ConfigLayer7CertResponse({}));
    }

  }

  /**
   * @param request - ConfigLayer7CertRequest
   * @returns ConfigLayer7CertResponse
   */
  async configLayer7Cert(request: ConfigLayer7CertRequest): Promise<ConfigLayer7CertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer7CertWithOptions(request, runtime);
  }

  /**
   * @param request - ConfigLayer7RuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigLayer7RuleResponse
   */
  async configLayer7RuleWithOptions(request: ConfigLayer7RuleRequest, runtime: $dara.RuntimeOptions): Promise<ConfigLayer7RuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.proxyTypeList)) {
      query["ProxyTypeList"] = request.proxyTypeList;
    }

    if (!$dara.isNull(request.proxyTypes)) {
      query["ProxyTypes"] = request.proxyTypes;
    }

    if (!$dara.isNull(request.realServers)) {
      query["RealServers"] = request.realServers;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.rsType)) {
      query["RsType"] = request.rsType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigLayer7Rule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ConfigLayer7RuleResponse>(await this.callApi(params, req, runtime), new ConfigLayer7RuleResponse({}));
    } else {
      return $dara.cast<ConfigLayer7RuleResponse>(await this.execute(params, req, runtime), new ConfigLayer7RuleResponse({}));
    }

  }

  /**
   * @param request - ConfigLayer7RuleRequest
   * @returns ConfigLayer7RuleResponse
   */
  async configLayer7Rule(request: ConfigLayer7RuleRequest): Promise<ConfigLayer7RuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configLayer7RuleWithOptions(request, runtime);
  }

  /**
   * @param request - CreateAsyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAsyncTaskResponse
   */
  async createAsyncTaskWithOptions(request: CreateAsyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<CreateAsyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.taskParams)) {
      query["TaskParams"] = request.taskParams;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAsyncTask",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAsyncTaskResponse>(await this.callApi(params, req, runtime), new CreateAsyncTaskResponse({}));
    } else {
      return $dara.cast<CreateAsyncTaskResponse>(await this.execute(params, req, runtime), new CreateAsyncTaskResponse({}));
    }

  }

  /**
   * @param request - CreateAsyncTaskRequest
   * @returns CreateAsyncTaskResponse
   */
  async createAsyncTask(request: CreateAsyncTaskRequest): Promise<CreateAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAsyncTaskWithOptions(request, runtime);
  }

  /**
   * @param request - CreateLayer4RuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLayer4RuleResponse
   */
  async createLayer4RuleWithOptions(request: CreateLayer4RuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateLayer4RuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    if (!$dara.isNull(request.proxyEnable)) {
      query["ProxyEnable"] = request.proxyEnable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLayer4Rule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateLayer4RuleResponse>(await this.callApi(params, req, runtime), new CreateLayer4RuleResponse({}));
    } else {
      return $dara.cast<CreateLayer4RuleResponse>(await this.execute(params, req, runtime), new CreateLayer4RuleResponse({}));
    }

  }

  /**
   * @param request - CreateLayer4RuleRequest
   * @returns CreateLayer4RuleResponse
   */
  async createLayer4Rule(request: CreateLayer4RuleRequest): Promise<CreateLayer4RuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLayer4RuleWithOptions(request, runtime);
  }

  /**
   * @param request - CreateLayer7RuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLayer7RuleResponse
   */
  async createLayer7RuleWithOptions(request: CreateLayer7RuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateLayer7RuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.rsType)) {
      query["RsType"] = request.rsType;
    }

    if (!$dara.isNull(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLayer7Rule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateLayer7RuleResponse>(await this.callApi(params, req, runtime), new CreateLayer7RuleResponse({}));
    } else {
      return $dara.cast<CreateLayer7RuleResponse>(await this.execute(params, req, runtime), new CreateLayer7RuleResponse({}));
    }

  }

  /**
   * @param request - CreateLayer7RuleRequest
   * @returns CreateLayer7RuleResponse
   */
  async createLayer7Rule(request: CreateLayer7RuleRequest): Promise<CreateLayer7RuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLayer7RuleWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteAsyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAsyncTaskResponse
   */
  async deleteAsyncTaskWithOptions(request: DeleteAsyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<DeleteAsyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAsyncTask",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAsyncTaskResponse>(await this.callApi(params, req, runtime), new DeleteAsyncTaskResponse({}));
    } else {
      return $dara.cast<DeleteAsyncTaskResponse>(await this.execute(params, req, runtime), new DeleteAsyncTaskResponse({}));
    }

  }

  /**
   * @param request - DeleteAsyncTaskRequest
   * @returns DeleteAsyncTaskResponse
   */
  async deleteAsyncTask(request: DeleteAsyncTaskRequest): Promise<DeleteAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAsyncTaskWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteLayer4RuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLayer4RuleResponse
   */
  async deleteLayer4RuleWithOptions(request: DeleteLayer4RuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteLayer4RuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLayer4Rule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteLayer4RuleResponse>(await this.callApi(params, req, runtime), new DeleteLayer4RuleResponse({}));
    } else {
      return $dara.cast<DeleteLayer4RuleResponse>(await this.execute(params, req, runtime), new DeleteLayer4RuleResponse({}));
    }

  }

  /**
   * @param request - DeleteLayer4RuleRequest
   * @returns DeleteLayer4RuleResponse
   */
  async deleteLayer4Rule(request: DeleteLayer4RuleRequest): Promise<DeleteLayer4RuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLayer4RuleWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteLayer7CCRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLayer7CCRuleResponse
   */
  async deleteLayer7CCRuleWithOptions(request: DeleteLayer7CCRuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteLayer7CCRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLayer7CCRule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteLayer7CCRuleResponse>(await this.callApi(params, req, runtime), new DeleteLayer7CCRuleResponse({}));
    } else {
      return $dara.cast<DeleteLayer7CCRuleResponse>(await this.execute(params, req, runtime), new DeleteLayer7CCRuleResponse({}));
    }

  }

  /**
   * @param request - DeleteLayer7CCRuleRequest
   * @returns DeleteLayer7CCRuleResponse
   */
  async deleteLayer7CCRule(request: DeleteLayer7CCRuleRequest): Promise<DeleteLayer7CCRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLayer7CCRuleWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteLayer7RuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLayer7RuleResponse
   */
  async deleteLayer7RuleWithOptions(request: DeleteLayer7RuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteLayer7RuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLayer7Rule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteLayer7RuleResponse>(await this.callApi(params, req, runtime), new DeleteLayer7RuleResponse({}));
    } else {
      return $dara.cast<DeleteLayer7RuleResponse>(await this.execute(params, req, runtime), new DeleteLayer7RuleResponse({}));
    }

  }

  /**
   * @param request - DeleteLayer7RuleRequest
   * @returns DeleteLayer7RuleResponse
   */
  async deleteLayer7Rule(request: DeleteLayer7RuleRequest): Promise<DeleteLayer7RuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLayer7RuleWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackSourceCidrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackSourceCidrResponse
   */
  async describeBackSourceCidrWithOptions(request: DescribeBackSourceCidrRequest, runtime: $dara.RuntimeOptions): Promise<DescribeBackSourceCidrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.line)) {
      query["Line"] = request.line;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackSourceCidr",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeBackSourceCidrResponse>(await this.callApi(params, req, runtime), new DescribeBackSourceCidrResponse({}));
    } else {
      return $dara.cast<DescribeBackSourceCidrResponse>(await this.execute(params, req, runtime), new DescribeBackSourceCidrResponse({}));
    }

  }

  /**
   * @param request - DescribeBackSourceCidrRequest
   * @returns DescribeBackSourceCidrResponse
   */
  async describeBackSourceCidr(request: DescribeBackSourceCidrRequest): Promise<DescribeBackSourceCidrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackSourceCidrWithOptions(request, runtime);
  }

  /**
   * rosetta迁移
   * 
   * @param request - DescribeBatchSlsDispatchStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBatchSlsDispatchStatusResponse
   */
  async describeBatchSlsDispatchStatusWithOptions(request: DescribeBatchSlsDispatchStatusRequest, runtime: $dara.RuntimeOptions): Promise<DescribeBatchSlsDispatchStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBatchSlsDispatchStatus",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeBatchSlsDispatchStatusResponse>(await this.callApi(params, req, runtime), new DescribeBatchSlsDispatchStatusResponse({}));
    } else {
      return $dara.cast<DescribeBatchSlsDispatchStatusResponse>(await this.execute(params, req, runtime), new DescribeBatchSlsDispatchStatusResponse({}));
    }

  }

  /**
   * rosetta迁移
   * 
   * @param request - DescribeBatchSlsDispatchStatusRequest
   * @returns DescribeBatchSlsDispatchStatusResponse
   */
  async describeBatchSlsDispatchStatus(request: DescribeBatchSlsDispatchStatusRequest): Promise<DescribeBatchSlsDispatchStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBatchSlsDispatchStatusWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDDoSEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDDoSEventsResponse
   */
  async describeDDoSEventsWithOptions(request: DescribeDDoSEventsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDDoSEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eip)) {
      query["Eip"] = request.eip;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDDoSEvents",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDDoSEventsResponse>(await this.callApi(params, req, runtime), new DescribeDDoSEventsResponse({}));
    } else {
      return $dara.cast<DescribeDDoSEventsResponse>(await this.execute(params, req, runtime), new DescribeDDoSEventsResponse({}));
    }

  }

  /**
   * @param request - DescribeDDoSEventsRequest
   * @returns DescribeDDoSEventsResponse
   */
  async describeDDoSEvents(request: DescribeDDoSEventsRequest): Promise<DescribeDDoSEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDoSEventsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDDoSTrafficRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDDoSTrafficResponse
   */
  async describeDDoSTrafficWithOptions(request: DescribeDDoSTrafficRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDDoSTrafficResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eip)) {
      query["Eip"] = request.eip;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDDoSTraffic",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDDoSTrafficResponse>(await this.callApi(params, req, runtime), new DescribeDDoSTrafficResponse({}));
    } else {
      return $dara.cast<DescribeDDoSTrafficResponse>(await this.execute(params, req, runtime), new DescribeDDoSTrafficResponse({}));
    }

  }

  /**
   * @param request - DescribeDDoSTrafficRequest
   * @returns DescribeDDoSTrafficResponse
   */
  async describeDDoSTraffic(request: DescribeDDoSTrafficRequest): Promise<DescribeDDoSTrafficResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDoSTrafficWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDefenseCountStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDefenseCountStatisticsResponse
   */
  async describeDefenseCountStatisticsWithOptions(request: DescribeDefenseCountStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDefenseCountStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDefenseCountStatistics",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDefenseCountStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeDefenseCountStatisticsResponse({}));
    } else {
      return $dara.cast<DescribeDefenseCountStatisticsResponse>(await this.execute(params, req, runtime), new DescribeDefenseCountStatisticsResponse({}));
    }

  }

  /**
   * @param request - DescribeDefenseCountStatisticsRequest
   * @returns DescribeDefenseCountStatisticsResponse
   */
  async describeDefenseCountStatistics(request: DescribeDefenseCountStatisticsRequest): Promise<DescribeDefenseCountStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDefenseCountStatisticsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDomainAccessModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainAccessModeResponse
   */
  async describeDomainAccessModeWithOptions(request: DescribeDomainAccessModeRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDomainAccessModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainList)) {
      query["DomainList"] = request.domainList;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainAccessMode",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDomainAccessModeResponse>(await this.callApi(params, req, runtime), new DescribeDomainAccessModeResponse({}));
    } else {
      return $dara.cast<DescribeDomainAccessModeResponse>(await this.execute(params, req, runtime), new DescribeDomainAccessModeResponse({}));
    }

  }

  /**
   * @param request - DescribeDomainAccessModeRequest
   * @returns DescribeDomainAccessModeResponse
   */
  async describeDomainAccessMode(request: DescribeDomainAccessModeRequest): Promise<DescribeDomainAccessModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainAccessModeWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDomainAttackEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainAttackEventListResponse
   */
  async describeDomainAttackEventListWithOptions(request: DescribeDomainAttackEventListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDomainAttackEventListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainAttackEventList",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDomainAttackEventListResponse>(await this.callApi(params, req, runtime), new DescribeDomainAttackEventListResponse({}));
    } else {
      return $dara.cast<DescribeDomainAttackEventListResponse>(await this.execute(params, req, runtime), new DescribeDomainAttackEventListResponse({}));
    }

  }

  /**
   * @param request - DescribeDomainAttackEventListRequest
   * @returns DescribeDomainAttackEventListResponse
   */
  async describeDomainAttackEventList(request: DescribeDomainAttackEventListRequest): Promise<DescribeDomainAttackEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainAttackEventListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDomainAttackMaxQpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainAttackMaxQpsResponse
   */
  async describeDomainAttackMaxQpsWithOptions(request: DescribeDomainAttackMaxQpsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDomainAttackMaxQpsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainAttackMaxQps",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDomainAttackMaxQpsResponse>(await this.callApi(params, req, runtime), new DescribeDomainAttackMaxQpsResponse({}));
    } else {
      return $dara.cast<DescribeDomainAttackMaxQpsResponse>(await this.execute(params, req, runtime), new DescribeDomainAttackMaxQpsResponse({}));
    }

  }

  /**
   * @param request - DescribeDomainAttackMaxQpsRequest
   * @returns DescribeDomainAttackMaxQpsResponse
   */
  async describeDomainAttackMaxQps(request: DescribeDomainAttackMaxQpsRequest): Promise<DescribeDomainAttackMaxQpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainAttackMaxQpsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDomainOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainOverviewResponse
   */
  async describeDomainOverviewWithOptions(request: DescribeDomainOverviewRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDomainOverviewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainOverview",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDomainOverviewResponse>(await this.callApi(params, req, runtime), new DescribeDomainOverviewResponse({}));
    } else {
      return $dara.cast<DescribeDomainOverviewResponse>(await this.execute(params, req, runtime), new DescribeDomainOverviewResponse({}));
    }

  }

  /**
   * @param request - DescribeDomainOverviewRequest
   * @returns DescribeDomainOverviewResponse
   */
  async describeDomainOverview(request: DescribeDomainOverviewRequest): Promise<DescribeDomainOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainOverviewWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDomainQpsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainQpsListResponse
   */
  async describeDomainQpsListWithOptions(request: DescribeDomainQpsListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDomainQpsListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainQpsList",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDomainQpsListResponse>(await this.callApi(params, req, runtime), new DescribeDomainQpsListResponse({}));
    } else {
      return $dara.cast<DescribeDomainQpsListResponse>(await this.execute(params, req, runtime), new DescribeDomainQpsListResponse({}));
    }

  }

  /**
   * @param request - DescribeDomainQpsListRequest
   * @returns DescribeDomainQpsListResponse
   */
  async describeDomainQpsList(request: DescribeDomainQpsListRequest): Promise<DescribeDomainQpsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainQpsListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDomainQpsWithCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainQpsWithCacheResponse
   */
  async describeDomainQpsWithCacheWithOptions(request: DescribeDomainQpsWithCacheRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDomainQpsWithCacheResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainQpsWithCache",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDomainQpsWithCacheResponse>(await this.callApi(params, req, runtime), new DescribeDomainQpsWithCacheResponse({}));
    } else {
      return $dara.cast<DescribeDomainQpsWithCacheResponse>(await this.execute(params, req, runtime), new DescribeDomainQpsWithCacheResponse({}));
    }

  }

  /**
   * @param request - DescribeDomainQpsWithCacheRequest
   * @returns DescribeDomainQpsWithCacheResponse
   */
  async describeDomainQpsWithCache(request: DescribeDomainQpsWithCacheRequest): Promise<DescribeDomainQpsWithCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainQpsWithCacheWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDomainSlsStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainSlsStatusResponse
   */
  async describeDomainSlsStatusWithOptions(request: DescribeDomainSlsStatusRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDomainSlsStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainSlsStatus",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDomainSlsStatusResponse>(await this.callApi(params, req, runtime), new DescribeDomainSlsStatusResponse({}));
    } else {
      return $dara.cast<DescribeDomainSlsStatusResponse>(await this.execute(params, req, runtime), new DescribeDomainSlsStatusResponse({}));
    }

  }

  /**
   * @param request - DescribeDomainSlsStatusRequest
   * @returns DescribeDomainSlsStatusResponse
   */
  async describeDomainSlsStatus(request: DescribeDomainSlsStatusRequest): Promise<DescribeDomainSlsStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainSlsStatusWithOptions(request, runtime);
  }

  /**
   * 查询网站业务的响应状态码统计信息
   * 
   * @param request - DescribeDomainStatusCodeListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainStatusCodeListResponse
   */
  async describeDomainStatusCodeListWithOptions(request: DescribeDomainStatusCodeListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDomainStatusCodeListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomainStatusCodeList",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDomainStatusCodeListResponse>(await this.callApi(params, req, runtime), new DescribeDomainStatusCodeListResponse({}));
    } else {
      return $dara.cast<DescribeDomainStatusCodeListResponse>(await this.execute(params, req, runtime), new DescribeDomainStatusCodeListResponse({}));
    }

  }

  /**
   * 查询网站业务的响应状态码统计信息
   * 
   * @param request - DescribeDomainStatusCodeListRequest
   * @returns DescribeDomainStatusCodeListResponse
   */
  async describeDomainStatusCodeList(request: DescribeDomainStatusCodeListRequest): Promise<DescribeDomainStatusCodeListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainStatusCodeListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainsResponse
   */
  async describeDomainsWithOptions(request: DescribeDomainsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryDomainPattern)) {
      query["QueryDomainPattern"] = request.queryDomainPattern;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomains",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDomainsResponse>(await this.callApi(params, req, runtime), new DescribeDomainsResponse({}));
    } else {
      return $dara.cast<DescribeDomainsResponse>(await this.execute(params, req, runtime), new DescribeDomainsResponse({}));
    }

  }

  /**
   * @param request - DescribeDomainsRequest
   * @returns DescribeDomainsResponse
   */
  async describeDomains(request: DescribeDomainsRequest): Promise<DescribeDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeElasticBandwidthSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticBandwidthSpecResponse
   */
  async describeElasticBandwidthSpecWithOptions(request: DescribeElasticBandwidthSpecRequest, runtime: $dara.RuntimeOptions): Promise<DescribeElasticBandwidthSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeElasticBandwidthSpec",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeElasticBandwidthSpecResponse>(await this.callApi(params, req, runtime), new DescribeElasticBandwidthSpecResponse({}));
    } else {
      return $dara.cast<DescribeElasticBandwidthSpecResponse>(await this.execute(params, req, runtime), new DescribeElasticBandwidthSpecResponse({}));
    }

  }

  /**
   * @param request - DescribeElasticBandwidthSpecRequest
   * @returns DescribeElasticBandwidthSpecResponse
   */
  async describeElasticBandwidthSpec(request: DescribeElasticBandwidthSpecRequest): Promise<DescribeElasticBandwidthSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeElasticBandwidthSpecWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeHealthCheckListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHealthCheckListResponse
   */
  async describeHealthCheckListWithOptions(request: DescribeHealthCheckListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeHealthCheckListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHealthCheckList",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeHealthCheckListResponse>(await this.callApi(params, req, runtime), new DescribeHealthCheckListResponse({}));
    } else {
      return $dara.cast<DescribeHealthCheckListResponse>(await this.execute(params, req, runtime), new DescribeHealthCheckListResponse({}));
    }

  }

  /**
   * @param request - DescribeHealthCheckListRequest
   * @returns DescribeHealthCheckListResponse
   */
  async describeHealthCheckList(request: DescribeHealthCheckListRequest): Promise<DescribeHealthCheckListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHealthCheckListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeHealthCheckStatusListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHealthCheckStatusListResponse
   */
  async describeHealthCheckStatusListWithOptions(request: DescribeHealthCheckStatusListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeHealthCheckStatusListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHealthCheckStatusList",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeHealthCheckStatusListResponse>(await this.callApi(params, req, runtime), new DescribeHealthCheckStatusListResponse({}));
    } else {
      return $dara.cast<DescribeHealthCheckStatusListResponse>(await this.execute(params, req, runtime), new DescribeHealthCheckStatusListResponse({}));
    }

  }

  /**
   * @param request - DescribeHealthCheckStatusListRequest
   * @returns DescribeHealthCheckStatusListResponse
   */
  async describeHealthCheckStatusList(request: DescribeHealthCheckStatusListRequest): Promise<DescribeHealthCheckStatusListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHealthCheckStatusListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeInstanceDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceDetailsResponse
   */
  async describeInstanceDetailsWithOptions(request: DescribeInstanceDetailsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstanceDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceDetails",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstanceDetailsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceDetailsResponse({}));
    } else {
      return $dara.cast<DescribeInstanceDetailsResponse>(await this.execute(params, req, runtime), new DescribeInstanceDetailsResponse({}));
    }

  }

  /**
   * @param request - DescribeInstanceDetailsRequest
   * @returns DescribeInstanceDetailsResponse
   */
  async describeInstanceDetails(request: DescribeInstanceDetailsRequest): Promise<DescribeInstanceDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceDetailsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeInstanceSpecsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSpecsResponse
   */
  async describeInstanceSpecsWithOptions(request: DescribeInstanceSpecsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstanceSpecsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceSpecs",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstanceSpecsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceSpecsResponse({}));
    } else {
      return $dara.cast<DescribeInstanceSpecsResponse>(await this.execute(params, req, runtime), new DescribeInstanceSpecsResponse({}));
    }

  }

  /**
   * @param request - DescribeInstanceSpecsRequest
   * @returns DescribeInstanceSpecsResponse
   */
  async describeInstanceSpecs(request: DescribeInstanceSpecsRequest): Promise<DescribeInstanceSpecsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSpecsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeInstanceStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceStatisticsResponse
   */
  async describeInstanceStatisticsWithOptions(request: DescribeInstanceStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstanceStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceStatistics",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstanceStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceStatisticsResponse({}));
    } else {
      return $dara.cast<DescribeInstanceStatisticsResponse>(await this.execute(params, req, runtime), new DescribeInstanceStatisticsResponse({}));
    }

  }

  /**
   * @param request - DescribeInstanceStatisticsRequest
   * @returns DescribeInstanceStatisticsResponse
   */
  async describeInstanceStatistics(request: DescribeInstanceStatisticsRequest): Promise<DescribeInstanceStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceStatisticsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesResponse
   */
  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.expireEndTime)) {
      query["ExpireEndTime"] = request.expireEndTime;
    }

    if (!$dara.isNull(request.expireStartTime)) {
      query["ExpireStartTime"] = request.expireStartTime;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstances",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstancesResponse>(await this.callApi(params, req, runtime), new DescribeInstancesResponse({}));
    } else {
      return $dara.cast<DescribeInstancesResponse>(await this.execute(params, req, runtime), new DescribeInstancesResponse({}));
    }

  }

  /**
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeIpTrafficRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIpTrafficResponse
   */
  async describeIpTrafficWithOptions(request: DescribeIpTrafficRequest, runtime: $dara.RuntimeOptions): Promise<DescribeIpTrafficResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eip)) {
      query["Eip"] = request.eip;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.queryProtocol)) {
      query["QueryProtocol"] = request.queryProtocol;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIpTraffic",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeIpTrafficResponse>(await this.callApi(params, req, runtime), new DescribeIpTrafficResponse({}));
    } else {
      return $dara.cast<DescribeIpTrafficResponse>(await this.execute(params, req, runtime), new DescribeIpTrafficResponse({}));
    }

  }

  /**
   * @param request - DescribeIpTrafficRequest
   * @returns DescribeIpTrafficResponse
   */
  async describeIpTraffic(request: DescribeIpTrafficRequest): Promise<DescribeIpTrafficResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIpTrafficWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeLayer4RuleAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLayer4RuleAttributesResponse
   */
  async describeLayer4RuleAttributesWithOptions(request: DescribeLayer4RuleAttributesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeLayer4RuleAttributesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLayer4RuleAttributes",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeLayer4RuleAttributesResponse>(await this.callApi(params, req, runtime), new DescribeLayer4RuleAttributesResponse({}));
    } else {
      return $dara.cast<DescribeLayer4RuleAttributesResponse>(await this.execute(params, req, runtime), new DescribeLayer4RuleAttributesResponse({}));
    }

  }

  /**
   * @param request - DescribeLayer4RuleAttributesRequest
   * @returns DescribeLayer4RuleAttributesResponse
   */
  async describeLayer4RuleAttributes(request: DescribeLayer4RuleAttributesRequest): Promise<DescribeLayer4RuleAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLayer4RuleAttributesWithOptions(request, runtime);
  }

  /**
   * Call DescribeLayer4Rules to query the detailed configuration of port forwarding rules for DDoS protection instances.
   * 
   * @param request - DescribeLayer4RulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLayer4RulesResponse
   */
  async describeLayer4RulesWithOptions(request: DescribeLayer4RulesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeLayer4RulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forwardProtocol)) {
      query["ForwardProtocol"] = request.forwardProtocol;
    }

    if (!$dara.isNull(request.frontendPort)) {
      query["FrontendPort"] = request.frontendPort;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLayer4Rules",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeLayer4RulesResponse>(await this.callApi(params, req, runtime), new DescribeLayer4RulesResponse({}));
    } else {
      return $dara.cast<DescribeLayer4RulesResponse>(await this.execute(params, req, runtime), new DescribeLayer4RulesResponse({}));
    }

  }

  /**
   * Call DescribeLayer4Rules to query the detailed configuration of port forwarding rules for DDoS protection instances.
   * 
   * @param request - DescribeLayer4RulesRequest
   * @returns DescribeLayer4RulesResponse
   */
  async describeLayer4Rules(request: DescribeLayer4RulesRequest): Promise<DescribeLayer4RulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLayer4RulesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeLayer7CCRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLayer7CCRulesResponse
   */
  async describeLayer7CCRulesWithOptions(request: DescribeLayer7CCRulesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeLayer7CCRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLayer7CCRules",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeLayer7CCRulesResponse>(await this.callApi(params, req, runtime), new DescribeLayer7CCRulesResponse({}));
    } else {
      return $dara.cast<DescribeLayer7CCRulesResponse>(await this.execute(params, req, runtime), new DescribeLayer7CCRulesResponse({}));
    }

  }

  /**
   * @param request - DescribeLayer7CCRulesRequest
   * @returns DescribeLayer7CCRulesResponse
   */
  async describeLayer7CCRules(request: DescribeLayer7CCRulesRequest): Promise<DescribeLayer7CCRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLayer7CCRulesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeLogStoreExistStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogStoreExistStatusResponse
   */
  async describeLogStoreExistStatusWithOptions(request: DescribeLogStoreExistStatusRequest, runtime: $dara.RuntimeOptions): Promise<DescribeLogStoreExistStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLogStoreExistStatus",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeLogStoreExistStatusResponse>(await this.callApi(params, req, runtime), new DescribeLogStoreExistStatusResponse({}));
    } else {
      return $dara.cast<DescribeLogStoreExistStatusResponse>(await this.execute(params, req, runtime), new DescribeLogStoreExistStatusResponse({}));
    }

  }

  /**
   * @param request - DescribeLogStoreExistStatusRequest
   * @returns DescribeLogStoreExistStatusResponse
   */
  async describeLogStoreExistStatus(request: DescribeLogStoreExistStatusRequest): Promise<DescribeLogStoreExistStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogStoreExistStatusWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeOpEntitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOpEntitiesResponse
   */
  async describeOpEntitiesWithOptions(request: DescribeOpEntitiesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeOpEntitiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.entityObject)) {
      query["EntityObject"] = request.entityObject;
    }

    if (!$dara.isNull(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.opAction)) {
      query["OpAction"] = request.opAction;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOpEntities",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeOpEntitiesResponse>(await this.callApi(params, req, runtime), new DescribeOpEntitiesResponse({}));
    } else {
      return $dara.cast<DescribeOpEntitiesResponse>(await this.execute(params, req, runtime), new DescribeOpEntitiesResponse({}));
    }

  }

  /**
   * @param request - DescribeOpEntitiesRequest
   * @returns DescribeOpEntitiesResponse
   */
  async describeOpEntities(request: DescribeOpEntitiesRequest): Promise<DescribeOpEntitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOpEntitiesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeSimpleDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSimpleDomainsResponse
   */
  async describeSimpleDomainsWithOptions(request: DescribeSimpleDomainsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSimpleDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSimpleDomains",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSimpleDomainsResponse>(await this.callApi(params, req, runtime), new DescribeSimpleDomainsResponse({}));
    } else {
      return $dara.cast<DescribeSimpleDomainsResponse>(await this.execute(params, req, runtime), new DescribeSimpleDomainsResponse({}));
    }

  }

  /**
   * @param request - DescribeSimpleDomainsRequest
   * @returns DescribeSimpleDomainsResponse
   */
  async describeSimpleDomains(request: DescribeSimpleDomainsRequest): Promise<DescribeSimpleDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSimpleDomainsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeSlsAuthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlsAuthStatusResponse
   */
  async describeSlsAuthStatusWithOptions(request: DescribeSlsAuthStatusRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSlsAuthStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlsAuthStatus",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSlsAuthStatusResponse>(await this.callApi(params, req, runtime), new DescribeSlsAuthStatusResponse({}));
    } else {
      return $dara.cast<DescribeSlsAuthStatusResponse>(await this.execute(params, req, runtime), new DescribeSlsAuthStatusResponse({}));
    }

  }

  /**
   * @param request - DescribeSlsAuthStatusRequest
   * @returns DescribeSlsAuthStatusResponse
   */
  async describeSlsAuthStatus(request: DescribeSlsAuthStatusRequest): Promise<DescribeSlsAuthStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlsAuthStatusWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeSlsEmptyCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlsEmptyCountResponse
   */
  async describeSlsEmptyCountWithOptions(request: DescribeSlsEmptyCountRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSlsEmptyCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlsEmptyCount",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSlsEmptyCountResponse>(await this.callApi(params, req, runtime), new DescribeSlsEmptyCountResponse({}));
    } else {
      return $dara.cast<DescribeSlsEmptyCountResponse>(await this.execute(params, req, runtime), new DescribeSlsEmptyCountResponse({}));
    }

  }

  /**
   * @param request - DescribeSlsEmptyCountRequest
   * @returns DescribeSlsEmptyCountResponse
   */
  async describeSlsEmptyCount(request: DescribeSlsEmptyCountRequest): Promise<DescribeSlsEmptyCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlsEmptyCountWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeSlsLogstoreInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlsLogstoreInfoResponse
   */
  async describeSlsLogstoreInfoWithOptions(request: DescribeSlsLogstoreInfoRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSlsLogstoreInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlsLogstoreInfo",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSlsLogstoreInfoResponse>(await this.callApi(params, req, runtime), new DescribeSlsLogstoreInfoResponse({}));
    } else {
      return $dara.cast<DescribeSlsLogstoreInfoResponse>(await this.execute(params, req, runtime), new DescribeSlsLogstoreInfoResponse({}));
    }

  }

  /**
   * @param request - DescribeSlsLogstoreInfoRequest
   * @returns DescribeSlsLogstoreInfoResponse
   */
  async describeSlsLogstoreInfo(request: DescribeSlsLogstoreInfoRequest): Promise<DescribeSlsLogstoreInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlsLogstoreInfoWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeSlsOpenStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlsOpenStatusResponse
   */
  async describeSlsOpenStatusWithOptions(request: DescribeSlsOpenStatusRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSlsOpenStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlsOpenStatus",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSlsOpenStatusResponse>(await this.callApi(params, req, runtime), new DescribeSlsOpenStatusResponse({}));
    } else {
      return $dara.cast<DescribeSlsOpenStatusResponse>(await this.execute(params, req, runtime), new DescribeSlsOpenStatusResponse({}));
    }

  }

  /**
   * @param request - DescribeSlsOpenStatusRequest
   * @returns DescribeSlsOpenStatusResponse
   */
  async describeSlsOpenStatus(request: DescribeSlsOpenStatusRequest): Promise<DescribeSlsOpenStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlsOpenStatusWithOptions(request, runtime);
  }

  /**
   * @param request - DescribleCertListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribleCertListResponse
   */
  async describleCertListWithOptions(request: DescribleCertListRequest, runtime: $dara.RuntimeOptions): Promise<DescribleCertListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribleCertList",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribleCertListResponse>(await this.callApi(params, req, runtime), new DescribleCertListResponse({}));
    } else {
      return $dara.cast<DescribleCertListResponse>(await this.execute(params, req, runtime), new DescribleCertListResponse({}));
    }

  }

  /**
   * @param request - DescribleCertListRequest
   * @returns DescribleCertListResponse
   */
  async describleCertList(request: DescribleCertListRequest): Promise<DescribleCertListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describleCertListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribleLayer7InstanceRelationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribleLayer7InstanceRelationsResponse
   */
  async describleLayer7InstanceRelationsWithOptions(request: DescribleLayer7InstanceRelationsRequest, runtime: $dara.RuntimeOptions): Promise<DescribleLayer7InstanceRelationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainList)) {
      query["DomainList"] = request.domainList;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribleLayer7InstanceRelations",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribleLayer7InstanceRelationsResponse>(await this.callApi(params, req, runtime), new DescribleLayer7InstanceRelationsResponse({}));
    } else {
      return $dara.cast<DescribleLayer7InstanceRelationsResponse>(await this.execute(params, req, runtime), new DescribleLayer7InstanceRelationsResponse({}));
    }

  }

  /**
   * @param request - DescribleLayer7InstanceRelationsRequest
   * @returns DescribleLayer7InstanceRelationsResponse
   */
  async describleLayer7InstanceRelations(request: DescribleLayer7InstanceRelationsRequest): Promise<DescribleLayer7InstanceRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describleLayer7InstanceRelationsWithOptions(request, runtime);
  }

  /**
   * @param request - DisableLayer7CCRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableLayer7CCResponse
   */
  async disableLayer7CCWithOptions(request: DisableLayer7CCRequest, runtime: $dara.RuntimeOptions): Promise<DisableLayer7CCResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableLayer7CC",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisableLayer7CCResponse>(await this.callApi(params, req, runtime), new DisableLayer7CCResponse({}));
    } else {
      return $dara.cast<DisableLayer7CCResponse>(await this.execute(params, req, runtime), new DisableLayer7CCResponse({}));
    }

  }

  /**
   * @param request - DisableLayer7CCRequest
   * @returns DisableLayer7CCResponse
   */
  async disableLayer7CC(request: DisableLayer7CCRequest): Promise<DisableLayer7CCResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableLayer7CCWithOptions(request, runtime);
  }

  /**
   * @param request - DisableLayer7CCRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableLayer7CCRuleResponse
   */
  async disableLayer7CCRuleWithOptions(request: DisableLayer7CCRuleRequest, runtime: $dara.RuntimeOptions): Promise<DisableLayer7CCRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableLayer7CCRule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisableLayer7CCRuleResponse>(await this.callApi(params, req, runtime), new DisableLayer7CCRuleResponse({}));
    } else {
      return $dara.cast<DisableLayer7CCRuleResponse>(await this.execute(params, req, runtime), new DisableLayer7CCRuleResponse({}));
    }

  }

  /**
   * @param request - DisableLayer7CCRuleRequest
   * @returns DisableLayer7CCRuleResponse
   */
  async disableLayer7CCRule(request: DisableLayer7CCRuleRequest): Promise<DisableLayer7CCRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableLayer7CCRuleWithOptions(request, runtime);
  }

  /**
   * @param request - EmptySlsLogstoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EmptySlsLogstoreResponse
   */
  async emptySlsLogstoreWithOptions(request: EmptySlsLogstoreRequest, runtime: $dara.RuntimeOptions): Promise<EmptySlsLogstoreResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EmptySlsLogstore",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EmptySlsLogstoreResponse>(await this.callApi(params, req, runtime), new EmptySlsLogstoreResponse({}));
    } else {
      return $dara.cast<EmptySlsLogstoreResponse>(await this.execute(params, req, runtime), new EmptySlsLogstoreResponse({}));
    }

  }

  /**
   * @param request - EmptySlsLogstoreRequest
   * @returns EmptySlsLogstoreResponse
   */
  async emptySlsLogstore(request: EmptySlsLogstoreRequest): Promise<EmptySlsLogstoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.emptySlsLogstoreWithOptions(request, runtime);
  }

  /**
   * @param request - EnableLayer7CCRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableLayer7CCResponse
   */
  async enableLayer7CCWithOptions(request: EnableLayer7CCRequest, runtime: $dara.RuntimeOptions): Promise<EnableLayer7CCResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableLayer7CC",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableLayer7CCResponse>(await this.callApi(params, req, runtime), new EnableLayer7CCResponse({}));
    } else {
      return $dara.cast<EnableLayer7CCResponse>(await this.execute(params, req, runtime), new EnableLayer7CCResponse({}));
    }

  }

  /**
   * @param request - EnableLayer7CCRequest
   * @returns EnableLayer7CCResponse
   */
  async enableLayer7CC(request: EnableLayer7CCRequest): Promise<EnableLayer7CCResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableLayer7CCWithOptions(request, runtime);
  }

  /**
   * @param request - EnableLayer7CCRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableLayer7CCRuleResponse
   */
  async enableLayer7CCRuleWithOptions(request: EnableLayer7CCRuleRequest, runtime: $dara.RuntimeOptions): Promise<EnableLayer7CCRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableLayer7CCRule",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableLayer7CCRuleResponse>(await this.callApi(params, req, runtime), new EnableLayer7CCRuleResponse({}));
    } else {
      return $dara.cast<EnableLayer7CCRuleResponse>(await this.execute(params, req, runtime), new EnableLayer7CCRuleResponse({}));
    }

  }

  /**
   * @param request - EnableLayer7CCRuleRequest
   * @returns EnableLayer7CCRuleResponse
   */
  async enableLayer7CCRule(request: EnableLayer7CCRuleRequest): Promise<EnableLayer7CCRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableLayer7CCRuleWithOptions(request, runtime);
  }

  /**
   * @param request - ListAsyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAsyncTaskResponse
   */
  async listAsyncTaskWithOptions(request: ListAsyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<ListAsyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAsyncTask",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAsyncTaskResponse>(await this.callApi(params, req, runtime), new ListAsyncTaskResponse({}));
    } else {
      return $dara.cast<ListAsyncTaskResponse>(await this.execute(params, req, runtime), new ListAsyncTaskResponse({}));
    }

  }

  /**
   * @param request - ListAsyncTaskRequest
   * @returns ListAsyncTaskResponse
   */
  async listAsyncTask(request: ListAsyncTaskRequest): Promise<ListAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAsyncTaskWithOptions(request, runtime);
  }

  /**
   * @param request - ListLayer7CustomPortsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLayer7CustomPortsResponse
   */
  async listLayer7CustomPortsWithOptions(request: ListLayer7CustomPortsRequest, runtime: $dara.RuntimeOptions): Promise<ListLayer7CustomPortsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLayer7CustomPorts",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListLayer7CustomPortsResponse>(await this.callApi(params, req, runtime), new ListLayer7CustomPortsResponse({}));
    } else {
      return $dara.cast<ListLayer7CustomPortsResponse>(await this.execute(params, req, runtime), new ListLayer7CustomPortsResponse({}));
    }

  }

  /**
   * @param request - ListLayer7CustomPortsRequest
   * @returns ListLayer7CustomPortsResponse
   */
  async listLayer7CustomPorts(request: ListLayer7CustomPortsRequest): Promise<ListLayer7CustomPortsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLayer7CustomPortsWithOptions(request, runtime);
  }

  /**
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<ListTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagKeys",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagKeysResponse>(await this.callApi(params, req, runtime), new ListTagKeysResponse({}));
    } else {
      return $dara.cast<ListTagKeysResponse>(await this.execute(params, req, runtime), new ListTagKeysResponse({}));
    }

  }

  /**
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $dara.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - ListValueAddedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListValueAddedResponse
   */
  async listValueAddedWithOptions(request: ListValueAddedRequest, runtime: $dara.RuntimeOptions): Promise<ListValueAddedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListValueAdded",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListValueAddedResponse>(await this.callApi(params, req, runtime), new ListValueAddedResponse({}));
    } else {
      return $dara.cast<ListValueAddedResponse>(await this.execute(params, req, runtime), new ListValueAddedResponse({}));
    }

  }

  /**
   * @param request - ListValueAddedRequest
   * @returns ListValueAddedResponse
   */
  async listValueAdded(request: ListValueAddedRequest): Promise<ListValueAddedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listValueAddedWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyElasticBandWidthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyElasticBandWidthResponse
   */
  async modifyElasticBandWidthWithOptions(request: ModifyElasticBandWidthRequest, runtime: $dara.RuntimeOptions): Promise<ModifyElasticBandWidthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.elasticBandwidth)) {
      query["ElasticBandwidth"] = request.elasticBandwidth;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyElasticBandWidth",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyElasticBandWidthResponse>(await this.callApi(params, req, runtime), new ModifyElasticBandWidthResponse({}));
    } else {
      return $dara.cast<ModifyElasticBandWidthResponse>(await this.execute(params, req, runtime), new ModifyElasticBandWidthResponse({}));
    }

  }

  /**
   * @param request - ModifyElasticBandWidthRequest
   * @returns ModifyElasticBandWidthResponse
   */
  async modifyElasticBandWidth(request: ModifyElasticBandWidthRequest): Promise<ModifyElasticBandWidthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyElasticBandWidthWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyFullLogTtlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFullLogTtlResponse
   */
  async modifyFullLogTtlWithOptions(request: ModifyFullLogTtlRequest, runtime: $dara.RuntimeOptions): Promise<ModifyFullLogTtlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFullLogTtl",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyFullLogTtlResponse>(await this.callApi(params, req, runtime), new ModifyFullLogTtlResponse({}));
    } else {
      return $dara.cast<ModifyFullLogTtlResponse>(await this.execute(params, req, runtime), new ModifyFullLogTtlResponse({}));
    }

  }

  /**
   * @param request - ModifyFullLogTtlRequest
   * @returns ModifyFullLogTtlResponse
   */
  async modifyFullLogTtl(request: ModifyFullLogTtlRequest): Promise<ModifyFullLogTtlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFullLogTtlWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyInstanceRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceRemarkResponse
   */
  async modifyInstanceRemarkWithOptions(request: ModifyInstanceRemarkRequest, runtime: $dara.RuntimeOptions): Promise<ModifyInstanceRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceRemark",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyInstanceRemarkResponse>(await this.callApi(params, req, runtime), new ModifyInstanceRemarkResponse({}));
    } else {
      return $dara.cast<ModifyInstanceRemarkResponse>(await this.execute(params, req, runtime), new ModifyInstanceRemarkResponse({}));
    }

  }

  /**
   * @param request - ModifyInstanceRemarkRequest
   * @returns ModifyInstanceRemarkResponse
   */
  async modifyInstanceRemark(request: ModifyInstanceRemarkRequest): Promise<ModifyInstanceRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceRemarkWithOptions(request, runtime);
  }

  /**
   * @param request - OpenDomainSlsConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenDomainSlsConfigResponse
   */
  async openDomainSlsConfigWithOptions(request: OpenDomainSlsConfigRequest, runtime: $dara.RuntimeOptions): Promise<OpenDomainSlsConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenDomainSlsConfig",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<OpenDomainSlsConfigResponse>(await this.callApi(params, req, runtime), new OpenDomainSlsConfigResponse({}));
    } else {
      return $dara.cast<OpenDomainSlsConfigResponse>(await this.execute(params, req, runtime), new OpenDomainSlsConfigResponse({}));
    }

  }

  /**
   * @param request - OpenDomainSlsConfigRequest
   * @returns OpenDomainSlsConfigResponse
   */
  async openDomainSlsConfig(request: OpenDomainSlsConfigRequest): Promise<OpenDomainSlsConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openDomainSlsConfigWithOptions(request, runtime);
  }

  /**
   * @param request - ReleaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstanceResponse
   */
  async releaseInstanceWithOptions(request: ReleaseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<ReleaseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseInstance",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReleaseInstanceResponse>(await this.callApi(params, req, runtime), new ReleaseInstanceResponse({}));
    } else {
      return $dara.cast<ReleaseInstanceResponse>(await this.execute(params, req, runtime), new ReleaseInstanceResponse({}));
    }

  }

  /**
   * @param request - ReleaseInstanceRequest
   * @returns ReleaseInstanceResponse
   */
  async releaseInstance(request: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - ReleaseValueAddedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseValueAddedResponse
   */
  async releaseValueAddedWithOptions(request: ReleaseValueAddedRequest, runtime: $dara.RuntimeOptions): Promise<ReleaseValueAddedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseValueAdded",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReleaseValueAddedResponse>(await this.callApi(params, req, runtime), new ReleaseValueAddedResponse({}));
    } else {
      return $dara.cast<ReleaseValueAddedResponse>(await this.execute(params, req, runtime), new ReleaseValueAddedResponse({}));
    }

  }

  /**
   * @param request - ReleaseValueAddedRequest
   * @returns ReleaseValueAddedResponse
   */
  async releaseValueAdded(request: ReleaseValueAddedRequest): Promise<ReleaseValueAddedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseValueAddedWithOptions(request, runtime);
  }

  /**
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $dara.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2017-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    } else {
      return $dara.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
    }

  }

  /**
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
