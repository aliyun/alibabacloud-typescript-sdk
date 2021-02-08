// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddCustomLineRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  lineName?: string;
  ipSegment?: AddCustomLineRequestIpSegment[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
      lineName: 'LineName',
      ipSegment: 'IpSegment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
      lineName: 'string',
      ipSegment: { 'type': 'array', 'itemType': AddCustomLineRequestIpSegment },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomLineResponseBody extends $tea.Model {
  lineId?: number;
  requestId?: string;
  lineCode?: string;
  static names(): { [key: string]: string } {
    return {
      lineId: 'LineId',
      requestId: 'RequestId',
      lineCode: 'LineCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineId: 'number',
      requestId: 'string',
      lineCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddCustomLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddCustomLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsCacheDomainRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  instanceId?: string;
  cacheTtlMin?: number;
  cacheTtlMax?: number;
  sourceProtocol?: string;
  sourceEdns?: string;
  remark?: string;
  sourceDnsServer?: AddDnsCacheDomainRequestSourceDnsServer[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      cacheTtlMin: 'CacheTtlMin',
      cacheTtlMax: 'CacheTtlMax',
      sourceProtocol: 'SourceProtocol',
      sourceEdns: 'SourceEdns',
      remark: 'Remark',
      sourceDnsServer: 'SourceDnsServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
      instanceId: 'string',
      cacheTtlMin: 'number',
      cacheTtlMax: 'number',
      sourceProtocol: 'string',
      sourceEdns: 'string',
      remark: 'string',
      sourceDnsServer: { 'type': 'array', 'itemType': AddDnsCacheDomainRequestSourceDnsServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsCacheDomainResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsCacheDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddDnsCacheDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddDnsCacheDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAccessStrategyRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  strategyName?: string;
  lines?: string;
  defaultAddrPoolType?: string;
  defaultLbaStrategy?: string;
  defaultMinAvailableAddrNum?: number;
  defaultMaxReturnAddrNum?: number;
  defaultLatencyOptimization?: string;
  failoverAddrPoolType?: string;
  failoverLbaStrategy?: string;
  failoverMinAvailableAddrNum?: number;
  failoverMaxReturnAddrNum?: number;
  failoverLatencyOptimization?: string;
  strategyMode?: string;
  defaultAddrPool?: AddDnsGtmAccessStrategyRequestDefaultAddrPool[];
  failoverAddrPool?: AddDnsGtmAccessStrategyRequestFailoverAddrPool[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
      strategyName: 'StrategyName',
      lines: 'Lines',
      defaultAddrPoolType: 'DefaultAddrPoolType',
      defaultLbaStrategy: 'DefaultLbaStrategy',
      defaultMinAvailableAddrNum: 'DefaultMinAvailableAddrNum',
      defaultMaxReturnAddrNum: 'DefaultMaxReturnAddrNum',
      defaultLatencyOptimization: 'DefaultLatencyOptimization',
      failoverAddrPoolType: 'FailoverAddrPoolType',
      failoverLbaStrategy: 'FailoverLbaStrategy',
      failoverMinAvailableAddrNum: 'FailoverMinAvailableAddrNum',
      failoverMaxReturnAddrNum: 'FailoverMaxReturnAddrNum',
      failoverLatencyOptimization: 'FailoverLatencyOptimization',
      strategyMode: 'StrategyMode',
      defaultAddrPool: 'DefaultAddrPool',
      failoverAddrPool: 'FailoverAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
      strategyName: 'string',
      lines: 'string',
      defaultAddrPoolType: 'string',
      defaultLbaStrategy: 'string',
      defaultMinAvailableAddrNum: 'number',
      defaultMaxReturnAddrNum: 'number',
      defaultLatencyOptimization: 'string',
      failoverAddrPoolType: 'string',
      failoverLbaStrategy: 'string',
      failoverMinAvailableAddrNum: 'number',
      failoverMaxReturnAddrNum: 'number',
      failoverLatencyOptimization: 'string',
      strategyMode: 'string',
      defaultAddrPool: { 'type': 'array', 'itemType': AddDnsGtmAccessStrategyRequestDefaultAddrPool },
      failoverAddrPool: { 'type': 'array', 'itemType': AddDnsGtmAccessStrategyRequestFailoverAddrPool },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAccessStrategyResponseBody extends $tea.Model {
  requestId?: string;
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAccessStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddDnsGtmAccessStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddDnsGtmAccessStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAddressPoolRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  instanceId?: string;
  name?: string;
  type?: string;
  lbaStrategy?: string;
  monitorStatus?: string;
  protocolType?: string;
  interval?: number;
  evaluationCount?: number;
  timeout?: number;
  monitorExtendInfo?: string;
  addr?: AddDnsGtmAddressPoolRequestAddr[];
  ispCityNode?: AddDnsGtmAddressPoolRequestIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      name: 'Name',
      type: 'Type',
      lbaStrategy: 'LbaStrategy',
      monitorStatus: 'MonitorStatus',
      protocolType: 'ProtocolType',
      interval: 'Interval',
      evaluationCount: 'EvaluationCount',
      timeout: 'Timeout',
      monitorExtendInfo: 'MonitorExtendInfo',
      addr: 'Addr',
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      instanceId: 'string',
      name: 'string',
      type: 'string',
      lbaStrategy: 'string',
      monitorStatus: 'string',
      protocolType: 'string',
      interval: 'number',
      evaluationCount: 'number',
      timeout: 'number',
      monitorExtendInfo: 'string',
      addr: { 'type': 'array', 'itemType': AddDnsGtmAddressPoolRequestAddr },
      ispCityNode: { 'type': 'array', 'itemType': AddDnsGtmAddressPoolRequestIspCityNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAddressPoolResponseBody extends $tea.Model {
  requestId?: string;
  addrPoolId?: string;
  monitorConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      addrPoolId: 'AddrPoolId',
      monitorConfigId: 'MonitorConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      addrPoolId: 'string',
      monitorConfigId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAddressPoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddDnsGtmAddressPoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddDnsGtmAddressPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmMonitorRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  addrPoolId?: string;
  protocolType?: string;
  interval?: number;
  evaluationCount?: number;
  timeout?: number;
  monitorExtendInfo?: string;
  ispCityNode?: AddDnsGtmMonitorRequestIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      addrPoolId: 'AddrPoolId',
      protocolType: 'ProtocolType',
      interval: 'Interval',
      evaluationCount: 'EvaluationCount',
      timeout: 'Timeout',
      monitorExtendInfo: 'MonitorExtendInfo',
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      addrPoolId: 'string',
      protocolType: 'string',
      interval: 'number',
      evaluationCount: 'number',
      timeout: 'number',
      monitorExtendInfo: 'string',
      ispCityNode: { 'type': 'array', 'itemType': AddDnsGtmMonitorRequestIspCityNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmMonitorResponseBody extends $tea.Model {
  requestId?: string;
  monitorConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      monitorConfigId: 'MonitorConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      monitorConfigId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddDnsGtmMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddDnsGtmMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainRequest extends $tea.Model {
  lang?: string;
  domainName?: string;
  groupId?: string;
  resourceGroupId?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      domainName: 'DomainName',
      groupId: 'GroupId',
      resourceGroupId: 'ResourceGroupId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      domainName: 'string',
      groupId: 'string',
      resourceGroupId: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainResponseBody extends $tea.Model {
  groupName?: string;
  domainId?: string;
  requestId?: string;
  domainName?: string;
  punyCode?: string;
  dnsServers?: AddDomainResponseBodyDnsServers;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      domainId: 'DomainId',
      requestId: 'RequestId',
      domainName: 'DomainName',
      punyCode: 'PunyCode',
      dnsServers: 'DnsServers',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      domainId: 'string',
      requestId: 'string',
      domainName: 'string',
      punyCode: 'string',
      dnsServers: AddDomainResponseBodyDnsServers,
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainBackupRequest extends $tea.Model {
  lang?: string;
  domainName?: string;
  periodType?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      domainName: 'DomainName',
      periodType: 'PeriodType',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      domainName: 'string',
      periodType: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainBackupResponseBody extends $tea.Model {
  periodType?: string;
  requestId?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      periodType: 'PeriodType',
      requestId: 'RequestId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodType: 'string',
      requestId: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainBackupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddDomainBackupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddDomainBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainGroupRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainGroupResponseBody extends $tea.Model {
  groupName?: string;
  requestId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      requestId: 'RequestId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      requestId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddDomainGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddDomainGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainRecordRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  RR?: string;
  type?: string;
  value?: string;
  TTL?: number;
  priority?: number;
  line?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
      RR: 'RR',
      type: 'Type',
      value: 'Value',
      TTL: 'TTL',
      priority: 'Priority',
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
      RR: 'string',
      type: 'string',
      value: 'string',
      TTL: 'number',
      priority: 'number',
      line: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainRecordResponseBody extends $tea.Model {
  requestId?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddDomainRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddDomainRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmAccessStrategyRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  strategyName?: string;
  defaultAddrPoolId?: string;
  failoverAddrPoolId?: string;
  accessLines?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
      strategyName: 'StrategyName',
      defaultAddrPoolId: 'DefaultAddrPoolId',
      failoverAddrPoolId: 'FailoverAddrPoolId',
      accessLines: 'AccessLines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
      strategyName: 'string',
      defaultAddrPoolId: 'string',
      failoverAddrPoolId: 'string',
      accessLines: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmAccessStrategyResponseBody extends $tea.Model {
  requestId?: string;
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmAccessStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddGtmAccessStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddGtmAccessStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmAddressPoolRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  instanceId?: string;
  name?: string;
  type?: string;
  minAvailableAddrNum?: number;
  monitorStatus?: string;
  protocolType?: string;
  interval?: number;
  evaluationCount?: number;
  timeout?: number;
  monitorExtendInfo?: string;
  addr?: AddGtmAddressPoolRequestAddr[];
  ispCityNode?: AddGtmAddressPoolRequestIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      name: 'Name',
      type: 'Type',
      minAvailableAddrNum: 'MinAvailableAddrNum',
      monitorStatus: 'MonitorStatus',
      protocolType: 'ProtocolType',
      interval: 'Interval',
      evaluationCount: 'EvaluationCount',
      timeout: 'Timeout',
      monitorExtendInfo: 'MonitorExtendInfo',
      addr: 'Addr',
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      instanceId: 'string',
      name: 'string',
      type: 'string',
      minAvailableAddrNum: 'number',
      monitorStatus: 'string',
      protocolType: 'string',
      interval: 'number',
      evaluationCount: 'number',
      timeout: 'number',
      monitorExtendInfo: 'string',
      addr: { 'type': 'array', 'itemType': AddGtmAddressPoolRequestAddr },
      ispCityNode: { 'type': 'array', 'itemType': AddGtmAddressPoolRequestIspCityNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmAddressPoolResponseBody extends $tea.Model {
  requestId?: string;
  addrPoolId?: string;
  monitorConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      addrPoolId: 'AddrPoolId',
      monitorConfigId: 'MonitorConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      addrPoolId: 'string',
      monitorConfigId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmAddressPoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddGtmAddressPoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddGtmAddressPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmMonitorRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  addrPoolId?: string;
  protocolType?: string;
  interval?: number;
  evaluationCount?: number;
  timeout?: number;
  monitorExtendInfo?: string;
  ispCityNode?: AddGtmMonitorRequestIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      addrPoolId: 'AddrPoolId',
      protocolType: 'ProtocolType',
      interval: 'Interval',
      evaluationCount: 'EvaluationCount',
      timeout: 'Timeout',
      monitorExtendInfo: 'MonitorExtendInfo',
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      addrPoolId: 'string',
      protocolType: 'string',
      interval: 'number',
      evaluationCount: 'number',
      timeout: 'number',
      monitorExtendInfo: 'string',
      ispCityNode: { 'type': 'array', 'itemType': AddGtmMonitorRequestIspCityNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmMonitorResponseBody extends $tea.Model {
  requestId?: string;
  monitorConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      monitorConfigId: 'MonitorConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      monitorConfigId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddGtmMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddGtmMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmRecoveryPlanRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  name?: string;
  remark?: string;
  faultAddrPool?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      name: 'Name',
      remark: 'Remark',
      faultAddrPool: 'FaultAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      name: 'string',
      remark: 'string',
      faultAddrPool: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmRecoveryPlanResponseBody extends $tea.Model {
  recoveryPlanId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recoveryPlanId: 'RecoveryPlanId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recoveryPlanId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmRecoveryPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddGtmRecoveryPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddGtmRecoveryPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindInstanceDomainsRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  domainNames?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
      domainNames: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
      domainNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindInstanceDomainsResponseBody extends $tea.Model {
  requestId?: string;
  failedCount?: number;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      failedCount: 'FailedCount',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      failedCount: 'number',
      successCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindInstanceDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BindInstanceDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BindInstanceDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDomainGroupRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDomainGroupResponseBody extends $tea.Model {
  groupName?: string;
  requestId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      requestId: 'RequestId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      requestId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDomainGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangeDomainGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeDomainGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDomainOfDnsProductRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  newDomain?: string;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
      newDomain: 'NewDomain',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
      newDomain: 'string',
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDomainOfDnsProductResponseBody extends $tea.Model {
  requestId?: string;
  originalDomain?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      originalDomain: 'OriginalDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      originalDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDomainOfDnsProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChangeDomainOfDnsProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChangeDomainOfDnsProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyGtmConfigRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  sourceId?: string;
  targetId?: string;
  copyType?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      sourceId: 'SourceId',
      targetId: 'TargetId',
      copyType: 'CopyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      sourceId: 'string',
      targetId: 'string',
      copyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyGtmConfigResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyGtmConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CopyGtmConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CopyGtmConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomLinesRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  lineIds?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      lineIds: 'LineIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      lineIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomLinesResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomLinesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCustomLinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCustomLinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDnsCacheDomainRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDnsCacheDomainResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDnsCacheDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDnsCacheDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDnsCacheDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDnsGtmAccessStrategyRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      strategyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDnsGtmAccessStrategyResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDnsGtmAccessStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDnsGtmAccessStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDnsGtmAccessStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDnsGtmAddressPoolRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  addrPoolId?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      addrPoolId: 'AddrPoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      addrPoolId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDnsGtmAddressPoolResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDnsGtmAddressPoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDnsGtmAddressPoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDnsGtmAddressPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponseBody extends $tea.Model {
  requestId?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainGroupRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainGroupResponseBody extends $tea.Model {
  groupName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDomainGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDomainGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRecordRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRecordResponseBody extends $tea.Model {
  requestId?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDomainRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDomainRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGtmAccessStrategyRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      strategyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGtmAccessStrategyResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGtmAccessStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteGtmAccessStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteGtmAccessStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGtmAddressPoolRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  addrPoolId?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      addrPoolId: 'AddrPoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      addrPoolId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGtmAddressPoolResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGtmAddressPoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteGtmAddressPoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteGtmAddressPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGtmRecoveryPlanRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  recoveryPlanId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      recoveryPlanId: 'RecoveryPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      recoveryPlanId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGtmRecoveryPlanResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGtmRecoveryPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteGtmRecoveryPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteGtmRecoveryPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubDomainRecordsRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  RR?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
      RR: 'RR',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
      RR: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubDomainRecordsResponseBody extends $tea.Model {
  RR?: string;
  totalCount?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      RR: 'RR',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RR: 'string',
      totalCount: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubDomainRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSubDomainRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSubDomainRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchResultCountRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  taskId?: number;
  batchType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      taskId: 'TaskId',
      batchType: 'BatchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      taskId: 'number',
      batchType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchResultCountResponseBody extends $tea.Model {
  status?: number;
  totalCount?: number;
  taskId?: number;
  requestId?: string;
  failedCount?: number;
  successCount?: number;
  batchType?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      totalCount: 'TotalCount',
      taskId: 'TaskId',
      requestId: 'RequestId',
      failedCount: 'FailedCount',
      successCount: 'SuccessCount',
      batchType: 'BatchType',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      totalCount: 'number',
      taskId: 'number',
      requestId: 'string',
      failedCount: 'number',
      successCount: 'number',
      batchType: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchResultCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBatchResultCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBatchResultCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchResultDetailRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  pageNumber?: number;
  pageSize?: number;
  taskId?: number;
  batchType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskId: 'TaskId',
      batchType: 'BatchType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      taskId: 'number',
      batchType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchResultDetailResponseBody extends $tea.Model {
  totalCount?: number;
  batchResultDetails?: DescribeBatchResultDetailResponseBodyBatchResultDetails;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      batchResultDetails: 'BatchResultDetails',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      batchResultDetails: DescribeBatchResultDetailResponseBodyBatchResultDetails,
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchResultDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBatchResultDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBatchResultDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLineRequest extends $tea.Model {
  lineId?: number;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lineId: 'LineId',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineId: 'number',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLineResponseBody extends $tea.Model {
  requestId?: string;
  ipSegmentList?: DescribeCustomLineResponseBodyIpSegmentList[];
  domainName?: string;
  id?: number;
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipSegmentList: 'IpSegmentList',
      domainName: 'DomainName',
      id: 'Id',
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipSegmentList: { 'type': 'array', 'itemType': DescribeCustomLineResponseBodyIpSegmentList },
      domainName: 'string',
      id: 'number',
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCustomLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCustomLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLinesRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  pageNumber?: number;
  pageSize?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLinesResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalPages?: number;
  customLines?: DescribeCustomLinesResponseBodyCustomLines[];
  totalItems?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalPages: 'TotalPages',
      customLines: 'CustomLines',
      totalItems: 'TotalItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalPages: 'number',
      customLines: { 'type': 'array', 'itemType': DescribeCustomLinesResponseBodyCustomLines },
      totalItems: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLinesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCustomLinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCustomLinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsCacheDomainsRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsCacheDomainsResponseBody extends $tea.Model {
  domains?: DescribeDnsCacheDomainsResponseBodyDomains[];
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeDnsCacheDomainsResponseBodyDomains },
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsCacheDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnsCacheDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnsCacheDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategiesRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  strategyMode?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      strategyMode: 'StrategyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      strategyMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategiesResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  strategies?: DescribeDnsGtmAccessStrategiesResponseBodyStrategies;
  totalPages?: number;
  totalItems?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      strategies: 'Strategies',
      totalPages: 'TotalPages',
      totalItems: 'TotalItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      strategies: DescribeDnsGtmAccessStrategiesResponseBodyStrategies,
      totalPages: 'number',
      totalItems: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnsGtmAccessStrategiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnsGtmAccessStrategiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      strategyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyResponseBody extends $tea.Model {
  failoverMinAvailableAddrNum?: number;
  defaultAddrPoolType?: string;
  defaultAvailableAddrNum?: number;
  strategyId?: string;
  failoverAddrPoolGroupStatus?: string;
  failoverAvailableAddrNum?: number;
  failoverLbaStrategy?: string;
  defaultMaxReturnAddrNum?: number;
  strategyMode?: string;
  createTimestamp?: number;
  defaultLbaStrategy?: string;
  defaultAddrPoolGroupStatus?: string;
  failoverAddrPoolType?: string;
  requestId?: string;
  instanceId?: string;
  failoverAddrPools?: DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPools;
  defaultLatencyOptimization?: string;
  effectiveAddrPoolGroupType?: string;
  createTime?: string;
  defaultAddrPools?: DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPools;
  defaultMinAvailableAddrNum?: number;
  failoverLatencyOptimization?: string;
  strategyName?: string;
  failoverMaxReturnAddrNum?: number;
  accessMode?: string;
  lines?: DescribeDnsGtmAccessStrategyResponseBodyLines;
  static names(): { [key: string]: string } {
    return {
      failoverMinAvailableAddrNum: 'FailoverMinAvailableAddrNum',
      defaultAddrPoolType: 'DefaultAddrPoolType',
      defaultAvailableAddrNum: 'DefaultAvailableAddrNum',
      strategyId: 'StrategyId',
      failoverAddrPoolGroupStatus: 'FailoverAddrPoolGroupStatus',
      failoverAvailableAddrNum: 'FailoverAvailableAddrNum',
      failoverLbaStrategy: 'FailoverLbaStrategy',
      defaultMaxReturnAddrNum: 'DefaultMaxReturnAddrNum',
      strategyMode: 'StrategyMode',
      createTimestamp: 'CreateTimestamp',
      defaultLbaStrategy: 'DefaultLbaStrategy',
      defaultAddrPoolGroupStatus: 'DefaultAddrPoolGroupStatus',
      failoverAddrPoolType: 'FailoverAddrPoolType',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      failoverAddrPools: 'FailoverAddrPools',
      defaultLatencyOptimization: 'DefaultLatencyOptimization',
      effectiveAddrPoolGroupType: 'EffectiveAddrPoolGroupType',
      createTime: 'CreateTime',
      defaultAddrPools: 'DefaultAddrPools',
      defaultMinAvailableAddrNum: 'DefaultMinAvailableAddrNum',
      failoverLatencyOptimization: 'FailoverLatencyOptimization',
      strategyName: 'StrategyName',
      failoverMaxReturnAddrNum: 'FailoverMaxReturnAddrNum',
      accessMode: 'AccessMode',
      lines: 'Lines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failoverMinAvailableAddrNum: 'number',
      defaultAddrPoolType: 'string',
      defaultAvailableAddrNum: 'number',
      strategyId: 'string',
      failoverAddrPoolGroupStatus: 'string',
      failoverAvailableAddrNum: 'number',
      failoverLbaStrategy: 'string',
      defaultMaxReturnAddrNum: 'number',
      strategyMode: 'string',
      createTimestamp: 'number',
      defaultLbaStrategy: 'string',
      defaultAddrPoolGroupStatus: 'string',
      failoverAddrPoolType: 'string',
      requestId: 'string',
      instanceId: 'string',
      failoverAddrPools: DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPools,
      defaultLatencyOptimization: 'string',
      effectiveAddrPoolGroupType: 'string',
      createTime: 'string',
      defaultAddrPools: DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPools,
      defaultMinAvailableAddrNum: 'number',
      failoverLatencyOptimization: 'string',
      strategyName: 'string',
      failoverMaxReturnAddrNum: 'number',
      accessMode: 'string',
      lines: DescribeDnsGtmAccessStrategyResponseBodyLines,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnsGtmAccessStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnsGtmAccessStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  strategyMode?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
      strategyMode: 'StrategyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
      strategyMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBody extends $tea.Model {
  selectedDomainLines?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedDomainLines;
  domainAddrPools?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPools;
  ipv4AddrPools?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPools;
  requestId?: string;
  selectedIpv4Lines?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv4Lines;
  ipv6AddrPools?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPools;
  suggestSetDefaultLine?: boolean;
  selectedIpv6Lines?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv6Lines;
  lines?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLines;
  static names(): { [key: string]: string } {
    return {
      selectedDomainLines: 'SelectedDomainLines',
      domainAddrPools: 'DomainAddrPools',
      ipv4AddrPools: 'Ipv4AddrPools',
      requestId: 'RequestId',
      selectedIpv4Lines: 'SelectedIpv4Lines',
      ipv6AddrPools: 'Ipv6AddrPools',
      suggestSetDefaultLine: 'SuggestSetDefaultLine',
      selectedIpv6Lines: 'SelectedIpv6Lines',
      lines: 'Lines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectedDomainLines: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedDomainLines,
      domainAddrPools: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPools,
      ipv4AddrPools: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPools,
      requestId: 'string',
      selectedIpv4Lines: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv4Lines,
      ipv6AddrPools: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPools,
      suggestSetDefaultLine: 'boolean',
      selectedIpv6Lines: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv6Lines,
      lines: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLines,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnsGtmAccessStrategyAvailableConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnsGtmAccessStrategyAvailableConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddrAttributeInfoRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  type?: string;
  addrs?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      type: 'Type',
      addrs: 'Addrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      type: 'string',
      addrs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddrAttributeInfoResponseBody extends $tea.Model {
  requestId?: string;
  addr?: DescribeDnsGtmAddrAttributeInfoResponseBodyAddr;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      addr: 'Addr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      addr: DescribeDnsGtmAddrAttributeInfoResponseBodyAddr,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddrAttributeInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnsGtmAddrAttributeInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnsGtmAddrAttributeInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddressPoolAvailableConfigRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddressPoolAvailableConfigResponseBody extends $tea.Model {
  requestId?: string;
  attributeInfos?: DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      attributeInfos: 'AttributeInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      attributeInfos: DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddressPoolAvailableConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnsGtmAddressPoolAvailableConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnsGtmAddressPoolAvailableConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAvailableAlertGroupRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAvailableAlertGroupResponseBody extends $tea.Model {
  requestId?: string;
  availableAlertGroup?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      availableAlertGroup: 'AvailableAlertGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      availableAlertGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAvailableAlertGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnsGtmAvailableAlertGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnsGtmAvailableAlertGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceResponseBody extends $tea.Model {
  expireTimestamp?: number;
  requestId?: string;
  resourceGroupId?: string;
  instanceId?: string;
  taskQuota?: number;
  config?: DescribeDnsGtmInstanceResponseBodyConfig;
  createTime?: string;
  smsQuota?: number;
  versionCode?: string;
  paymentType?: string;
  expireTime?: string;
  createTimestamp?: number;
  usedQuota?: DescribeDnsGtmInstanceResponseBodyUsedQuota;
  static names(): { [key: string]: string } {
    return {
      expireTimestamp: 'ExpireTimestamp',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      instanceId: 'InstanceId',
      taskQuota: 'TaskQuota',
      config: 'Config',
      createTime: 'CreateTime',
      smsQuota: 'SmsQuota',
      versionCode: 'VersionCode',
      paymentType: 'PaymentType',
      expireTime: 'ExpireTime',
      createTimestamp: 'CreateTimestamp',
      usedQuota: 'UsedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTimestamp: 'number',
      requestId: 'string',
      resourceGroupId: 'string',
      instanceId: 'string',
      taskQuota: 'number',
      config: DescribeDnsGtmInstanceResponseBodyConfig,
      createTime: 'string',
      smsQuota: 'number',
      versionCode: 'string',
      paymentType: 'string',
      expireTime: 'string',
      createTimestamp: 'number',
      usedQuota: DescribeDnsGtmInstanceResponseBodyUsedQuota,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnsGtmInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnsGtmInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceAddressPoolRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  addrPoolId?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      addrPoolId: 'AddrPoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      addrPoolId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceAddressPoolResponseBody extends $tea.Model {
  addrs?: DescribeDnsGtmInstanceAddressPoolResponseBodyAddrs;
  requestId?: string;
  lbaStrategy?: string;
  createTime?: string;
  addrCount?: number;
  name?: string;
  type?: string;
  updateTime?: string;
  addrPoolId?: string;
  updateTimestamp?: number;
  monitorConfigId?: string;
  monitorStatus?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      addrs: 'Addrs',
      requestId: 'RequestId',
      lbaStrategy: 'LbaStrategy',
      createTime: 'CreateTime',
      addrCount: 'AddrCount',
      name: 'Name',
      type: 'Type',
      updateTime: 'UpdateTime',
      addrPoolId: 'AddrPoolId',
      updateTimestamp: 'UpdateTimestamp',
      monitorConfigId: 'MonitorConfigId',
      monitorStatus: 'MonitorStatus',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrs: DescribeDnsGtmInstanceAddressPoolResponseBodyAddrs,
      requestId: 'string',
      lbaStrategy: 'string',
      createTime: 'string',
      addrCount: 'number',
      name: 'string',
      type: 'string',
      updateTime: 'string',
      addrPoolId: 'string',
      updateTimestamp: 'number',
      monitorConfigId: 'string',
      monitorStatus: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceAddressPoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnsGtmInstanceAddressPoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnsGtmInstanceAddressPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceAddressPoolsRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceAddressPoolsResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalPages?: number;
  totalItems?: number;
  addrPools?: DescribeDnsGtmInstanceAddressPoolsResponseBodyAddrPools;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalPages: 'TotalPages',
      totalItems: 'TotalItems',
      addrPools: 'AddrPools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalPages: 'number',
      totalItems: 'number',
      addrPools: DescribeDnsGtmInstanceAddressPoolsResponseBodyAddrPools,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceAddressPoolsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnsGtmInstanceAddressPoolsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnsGtmInstanceAddressPoolsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstancesRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  pageNumber?: number;
  pageSize?: number;
  keyword?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      keyword: 'Keyword',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      keyword: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstancesResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  gtmInstances?: DescribeDnsGtmInstancesResponseBodyGtmInstances[];
  totalPages?: number;
  totalItems?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      gtmInstances: 'GtmInstances',
      totalPages: 'TotalPages',
      totalItems: 'TotalItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      gtmInstances: { 'type': 'array', 'itemType': DescribeDnsGtmInstancesResponseBodyGtmInstances },
      totalPages: 'number',
      totalItems: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnsGtmInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnsGtmInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceStatusRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceStatusResponseBody extends $tea.Model {
  strategyNotAvailableNum?: number;
  addrAvailableNum?: number;
  requestId?: string;
  switchToFailoverStrategyNum?: number;
  addrNotAvailableNum?: number;
  addrPoolGroupNotAvailableNum?: number;
  static names(): { [key: string]: string } {
    return {
      strategyNotAvailableNum: 'StrategyNotAvailableNum',
      addrAvailableNum: 'AddrAvailableNum',
      requestId: 'RequestId',
      switchToFailoverStrategyNum: 'SwitchToFailoverStrategyNum',
      addrNotAvailableNum: 'AddrNotAvailableNum',
      addrPoolGroupNotAvailableNum: 'AddrPoolGroupNotAvailableNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategyNotAvailableNum: 'number',
      addrAvailableNum: 'number',
      requestId: 'string',
      switchToFailoverStrategyNum: 'number',
      addrNotAvailableNum: 'number',
      addrPoolGroupNotAvailableNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnsGtmInstanceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnsGtmInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceSystemCnameRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceSystemCnameResponseBody extends $tea.Model {
  systemCname?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      systemCname: 'SystemCname',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemCname: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceSystemCnameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnsGtmInstanceSystemCnameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnsGtmInstanceSystemCnameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmLogsRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  instanceId?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  startTimestamp?: number;
  endTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTimestamp: 'StartTimestamp',
      endTimestamp: 'EndTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      instanceId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTimestamp: 'number',
      endTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmLogsResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalPages?: number;
  logs?: DescribeDnsGtmLogsResponseBodyLogs;
  totalItems?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalPages: 'TotalPages',
      logs: 'Logs',
      totalItems: 'TotalItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalPages: 'number',
      logs: DescribeDnsGtmLogsResponseBodyLogs,
      totalItems: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnsGtmLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnsGtmLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigResponseBody extends $tea.Model {
  ipv4IspCityNodes?: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodes;
  domainIpv4IspCityNodes?: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodes;
  requestId?: string;
  domainIpv6IspCityNodes?: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodes;
  ipv6IspCityNodes?: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodes;
  static names(): { [key: string]: string } {
    return {
      ipv4IspCityNodes: 'Ipv4IspCityNodes',
      domainIpv4IspCityNodes: 'DomainIpv4IspCityNodes',
      requestId: 'RequestId',
      domainIpv6IspCityNodes: 'DomainIpv6IspCityNodes',
      ipv6IspCityNodes: 'Ipv6IspCityNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4IspCityNodes: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodes,
      domainIpv4IspCityNodes: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodes,
      requestId: 'string',
      domainIpv6IspCityNodes: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodes,
      ipv6IspCityNodes: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnsGtmMonitorAvailableConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnsGtmMonitorAvailableConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorConfigRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  monitorConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      monitorConfigId: 'MonitorConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      monitorConfigId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorConfigResponseBody extends $tea.Model {
  requestId?: string;
  timeout?: number;
  protocolType?: string;
  ispCityNodes?: DescribeDnsGtmMonitorConfigResponseBodyIspCityNodes;
  createTime?: string;
  updateTime?: string;
  evaluationCount?: number;
  updateTimestamp?: number;
  monitorExtendInfo?: string;
  monitorConfigId?: string;
  createTimestamp?: number;
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeout: 'Timeout',
      protocolType: 'ProtocolType',
      ispCityNodes: 'IspCityNodes',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      evaluationCount: 'EvaluationCount',
      updateTimestamp: 'UpdateTimestamp',
      monitorExtendInfo: 'MonitorExtendInfo',
      monitorConfigId: 'MonitorConfigId',
      createTimestamp: 'CreateTimestamp',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeout: 'number',
      protocolType: 'string',
      ispCityNodes: DescribeDnsGtmMonitorConfigResponseBodyIspCityNodes,
      createTime: 'string',
      updateTime: 'string',
      evaluationCount: 'number',
      updateTimestamp: 'number',
      monitorExtendInfo: 'string',
      monitorConfigId: 'string',
      createTimestamp: 'number',
      interval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnsGtmMonitorConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnsGtmMonitorConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsProductInstanceRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsProductInstanceResponseBody extends $tea.Model {
  monitorNodeCount?: number;
  inBlackHole?: boolean;
  bindDomainCount?: number;
  regionLines?: boolean;
  bindCount?: number;
  endTime?: string;
  startTimestamp?: number;
  ISPLines?: string;
  endTimestamp?: number;
  dnsServers?: DescribeDnsProductInstanceResponseBodyDnsServers;
  DDosDefendQuery?: number;
  dnsSecurity?: string;
  domainType?: string;
  URLForwardCount?: number;
  TTLMinValue?: number;
  paymentType?: string;
  versionName?: string;
  overseaLine?: string;
  ISPRegionLines?: string;
  gslb?: boolean;
  bindUsedCount?: number;
  requestId?: string;
  dnsSLBCount?: number;
  instanceId?: string;
  monitorTaskCount?: number;
  startTime?: string;
  DDosDefendFlow?: number;
  monitorFrequency?: number;
  searchEngineLines?: string;
  bindDomainUsedCount?: number;
  versionCode?: string;
  overseaDDosDefendFlow?: number;
  inClean?: boolean;
  subDomainLevel?: number;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      monitorNodeCount: 'MonitorNodeCount',
      inBlackHole: 'InBlackHole',
      bindDomainCount: 'BindDomainCount',
      regionLines: 'RegionLines',
      bindCount: 'BindCount',
      endTime: 'EndTime',
      startTimestamp: 'StartTimestamp',
      ISPLines: 'ISPLines',
      endTimestamp: 'EndTimestamp',
      dnsServers: 'DnsServers',
      DDosDefendQuery: 'DDosDefendQuery',
      dnsSecurity: 'DnsSecurity',
      domainType: 'DomainType',
      URLForwardCount: 'URLForwardCount',
      TTLMinValue: 'TTLMinValue',
      paymentType: 'PaymentType',
      versionName: 'VersionName',
      overseaLine: 'OverseaLine',
      ISPRegionLines: 'ISPRegionLines',
      gslb: 'Gslb',
      bindUsedCount: 'BindUsedCount',
      requestId: 'RequestId',
      dnsSLBCount: 'DnsSLBCount',
      instanceId: 'InstanceId',
      monitorTaskCount: 'MonitorTaskCount',
      startTime: 'StartTime',
      DDosDefendFlow: 'DDosDefendFlow',
      monitorFrequency: 'MonitorFrequency',
      searchEngineLines: 'SearchEngineLines',
      bindDomainUsedCount: 'BindDomainUsedCount',
      versionCode: 'VersionCode',
      overseaDDosDefendFlow: 'OverseaDDosDefendFlow',
      inClean: 'InClean',
      subDomainLevel: 'SubDomainLevel',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorNodeCount: 'number',
      inBlackHole: 'boolean',
      bindDomainCount: 'number',
      regionLines: 'boolean',
      bindCount: 'number',
      endTime: 'string',
      startTimestamp: 'number',
      ISPLines: 'string',
      endTimestamp: 'number',
      dnsServers: DescribeDnsProductInstanceResponseBodyDnsServers,
      DDosDefendQuery: 'number',
      dnsSecurity: 'string',
      domainType: 'string',
      URLForwardCount: 'number',
      TTLMinValue: 'number',
      paymentType: 'string',
      versionName: 'string',
      overseaLine: 'string',
      ISPRegionLines: 'string',
      gslb: 'boolean',
      bindUsedCount: 'number',
      requestId: 'string',
      dnsSLBCount: 'number',
      instanceId: 'string',
      monitorTaskCount: 'number',
      startTime: 'string',
      DDosDefendFlow: 'number',
      monitorFrequency: 'number',
      searchEngineLines: 'string',
      bindDomainUsedCount: 'number',
      versionCode: 'string',
      overseaDDosDefendFlow: 'number',
      inClean: 'boolean',
      subDomainLevel: 'number',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsProductInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnsProductInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnsProductInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsProductInstancesRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  pageNumber?: number;
  pageSize?: number;
  versionCode?: string;
  domainType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      versionCode: 'VersionCode',
      domainType: 'DomainType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      versionCode: 'string',
      domainType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsProductInstancesResponseBody extends $tea.Model {
  totalCount?: number;
  domainType?: string;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  dnsProducts?: DescribeDnsProductInstancesResponseBodyDnsProducts;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      domainType: 'DomainType',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      dnsProducts: 'DnsProducts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      domainType: 'string',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      dnsProducts: DescribeDnsProductInstancesResponseBodyDnsProducts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsProductInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDnsProductInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDnsProductInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDNSSLBSubDomainsRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  pageNumber?: number;
  pageSize?: number;
  rr?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rr: 'Rr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      rr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDNSSLBSubDomainsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  slbSubDomains?: DescribeDNSSLBSubDomainsResponseBodySlbSubDomains;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      slbSubDomains: 'SlbSubDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      slbSubDomains: DescribeDNSSLBSubDomainsResponseBodySlbSubDomains,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDNSSLBSubDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDNSSLBSubDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDNSSLBSubDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohAccountStatisticsRequest extends $tea.Model {
  lang?: string;
  startDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohAccountStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  statistics?: DescribeDohAccountStatisticsResponseBodyStatistics[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistics: { 'type': 'array', 'itemType': DescribeDohAccountStatisticsResponseBodyStatistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohAccountStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDohAccountStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDohAccountStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohDomainStatisticsRequest extends $tea.Model {
  lang?: string;
  domainName?: string;
  startDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      domainName: 'DomainName',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      domainName: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohDomainStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  statistics?: DescribeDohDomainStatisticsResponseBodyStatistics[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistics: { 'type': 'array', 'itemType': DescribeDohDomainStatisticsResponseBodyStatistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohDomainStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDohDomainStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDohDomainStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohDomainStatisticsSummaryRequest extends $tea.Model {
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  endDate?: string;
  orderBy?: string;
  direction?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      endDate: 'EndDate',
      orderBy: 'OrderBy',
      direction: 'Direction',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      endDate: 'string',
      orderBy: 'string',
      direction: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohDomainStatisticsSummaryResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalPages?: number;
  totalItems?: number;
  statistics?: DescribeDohDomainStatisticsSummaryResponseBodyStatistics[];
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalPages: 'TotalPages',
      totalItems: 'TotalItems',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalPages: 'number',
      totalItems: 'number',
      statistics: { 'type': 'array', 'itemType': DescribeDohDomainStatisticsSummaryResponseBodyStatistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohDomainStatisticsSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDohDomainStatisticsSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDohDomainStatisticsSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohSubDomainStatisticsRequest extends $tea.Model {
  lang?: string;
  subDomain?: string;
  startDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      subDomain: 'SubDomain',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      subDomain: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohSubDomainStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  statistics?: DescribeDohSubDomainStatisticsResponseBodyStatistics[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistics: { 'type': 'array', 'itemType': DescribeDohSubDomainStatisticsResponseBodyStatistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohSubDomainStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDohSubDomainStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDohSubDomainStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohSubDomainStatisticsSummaryRequest extends $tea.Model {
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  endDate?: string;
  orderBy?: string;
  direction?: string;
  subDomain?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      endDate: 'EndDate',
      orderBy: 'OrderBy',
      direction: 'Direction',
      subDomain: 'SubDomain',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      endDate: 'string',
      orderBy: 'string',
      direction: 'string',
      subDomain: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohSubDomainStatisticsSummaryResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalPages?: number;
  totalItems?: number;
  statistics?: DescribeDohSubDomainStatisticsSummaryResponseBodyStatistics[];
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalPages: 'TotalPages',
      totalItems: 'TotalItems',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalPages: 'number',
      totalItems: 'number',
      statistics: { 'type': 'array', 'itemType': DescribeDohSubDomainStatisticsSummaryResponseBodyStatistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohSubDomainStatisticsSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDohSubDomainStatisticsSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDohSubDomainStatisticsSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohUserInfoRequest extends $tea.Model {
  lang?: string;
  startDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohUserInfoResponseBody extends $tea.Model {
  requestId?: string;
  subDomainCount?: number;
  pdnsId?: number;
  domainCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subDomainCount: 'SubDomainCount',
      pdnsId: 'PdnsId',
      domainCount: 'DomainCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subDomainCount: 'number',
      pdnsId: 'number',
      domainCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDohUserInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDohUserInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDnssecInfoRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDnssecInfoResponseBody extends $tea.Model {
  status?: string;
  requestId?: string;
  digest?: string;
  domainName?: string;
  publicKey?: string;
  digestType?: string;
  dsRecord?: string;
  keyTag?: string;
  flags?: string;
  algorithm?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      digest: 'Digest',
      domainName: 'DomainName',
      publicKey: 'PublicKey',
      digestType: 'DigestType',
      dsRecord: 'DsRecord',
      keyTag: 'KeyTag',
      flags: 'Flags',
      algorithm: 'Algorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      digest: 'string',
      domainName: 'string',
      publicKey: 'string',
      digestType: 'string',
      dsRecord: 'string',
      keyTag: 'string',
      flags: 'string',
      algorithm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDnssecInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainDnssecInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainDnssecInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainGroupsRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  keyWord?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      keyWord: 'KeyWord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      keyWord: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainGroupsResponseBody extends $tea.Model {
  domainGroups?: DescribeDomainGroupsResponseBodyDomainGroups;
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      domainGroups: 'DomainGroups',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroups: DescribeDomainGroupsResponseBodyDomainGroups,
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainInfoRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  needDetailAttributes?: boolean;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
      needDetailAttributes: 'NeedDetailAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
      needDetailAttributes: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainInfoResponseBody extends $tea.Model {
  recordLineTreeJson?: string;
  groupName?: string;
  inBlackHole?: boolean;
  regionLines?: boolean;
  slaveDns?: boolean;
  aliDomain?: boolean;
  requestId?: string;
  resourceGroupId?: string;
  instanceId?: string;
  domainName?: string;
  createTime?: string;
  punyCode?: string;
  dnsServers?: DescribeDomainInfoResponseBodyDnsServers;
  remark?: string;
  groupId?: string;
  versionCode?: string;
  recordLines?: DescribeDomainInfoResponseBodyRecordLines;
  domainId?: string;
  availableTtls?: DescribeDomainInfoResponseBodyAvailableTtls;
  minTtl?: number;
  inClean?: boolean;
  versionName?: string;
  lineType?: string;
  static names(): { [key: string]: string } {
    return {
      recordLineTreeJson: 'RecordLineTreeJson',
      groupName: 'GroupName',
      inBlackHole: 'InBlackHole',
      regionLines: 'RegionLines',
      slaveDns: 'SlaveDns',
      aliDomain: 'AliDomain',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      instanceId: 'InstanceId',
      domainName: 'DomainName',
      createTime: 'CreateTime',
      punyCode: 'PunyCode',
      dnsServers: 'DnsServers',
      remark: 'Remark',
      groupId: 'GroupId',
      versionCode: 'VersionCode',
      recordLines: 'RecordLines',
      domainId: 'DomainId',
      availableTtls: 'AvailableTtls',
      minTtl: 'MinTtl',
      inClean: 'InClean',
      versionName: 'VersionName',
      lineType: 'LineType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordLineTreeJson: 'string',
      groupName: 'string',
      inBlackHole: 'boolean',
      regionLines: 'boolean',
      slaveDns: 'boolean',
      aliDomain: 'boolean',
      requestId: 'string',
      resourceGroupId: 'string',
      instanceId: 'string',
      domainName: 'string',
      createTime: 'string',
      punyCode: 'string',
      dnsServers: DescribeDomainInfoResponseBodyDnsServers,
      remark: 'string',
      groupId: 'string',
      versionCode: 'string',
      recordLines: DescribeDomainInfoResponseBodyRecordLines,
      domainId: 'string',
      availableTtls: DescribeDomainInfoResponseBodyAvailableTtls,
      minTtl: 'number',
      inClean: 'boolean',
      versionName: 'string',
      lineType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainLogsRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  keyWord?: string;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  endDate?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      keyWord: 'KeyWord',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      endDate: 'endDate',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      keyWord: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      endDate: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainLogsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  domainLogs?: DescribeDomainLogsResponseBodyDomainLogs;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      domainLogs: 'DomainLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      domainLogs: DescribeDomainLogsResponseBodyDomainLogs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNsRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  domainType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
      domainType: 'DomainType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
      domainType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNsResponseBody extends $tea.Model {
  allAliDns?: boolean;
  requestId?: string;
  expectDnsServers?: DescribeDomainNsResponseBodyExpectDnsServers;
  dnsServers?: DescribeDomainNsResponseBodyDnsServers;
  includeAliDns?: boolean;
  static names(): { [key: string]: string } {
    return {
      allAliDns: 'AllAliDns',
      requestId: 'RequestId',
      expectDnsServers: 'ExpectDnsServers',
      dnsServers: 'DnsServers',
      includeAliDns: 'IncludeAliDns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allAliDns: 'boolean',
      requestId: 'string',
      expectDnsServers: DescribeDomainNsResponseBodyExpectDnsServers,
      dnsServers: DescribeDomainNsResponseBodyDnsServers,
      includeAliDns: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainNsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainNsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRecordInfoRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRecordInfoResponseBody extends $tea.Model {
  status?: string;
  RR?: string;
  groupName?: string;
  requestId?: string;
  domainName?: string;
  priority?: number;
  punyCode?: string;
  TTL?: number;
  groupId?: string;
  line?: string;
  locked?: boolean;
  type?: string;
  domainId?: string;
  value?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      RR: 'RR',
      groupName: 'GroupName',
      requestId: 'RequestId',
      domainName: 'DomainName',
      priority: 'Priority',
      punyCode: 'PunyCode',
      TTL: 'TTL',
      groupId: 'GroupId',
      line: 'Line',
      locked: 'Locked',
      type: 'Type',
      domainId: 'DomainId',
      value: 'Value',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      RR: 'string',
      groupName: 'string',
      requestId: 'string',
      domainName: 'string',
      priority: 'number',
      punyCode: 'string',
      TTL: 'number',
      groupId: 'string',
      line: 'string',
      locked: 'boolean',
      type: 'string',
      domainId: 'string',
      value: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRecordInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainRecordInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainRecordInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRecordsRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  pageNumber?: number;
  pageSize?: number;
  keyWord?: string;
  RRKeyWord?: string;
  typeKeyWord?: string;
  valueKeyWord?: string;
  orderBy?: string;
  direction?: string;
  searchMode?: string;
  groupId?: number;
  type?: string;
  line?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      keyWord: 'KeyWord',
      RRKeyWord: 'RRKeyWord',
      typeKeyWord: 'TypeKeyWord',
      valueKeyWord: 'ValueKeyWord',
      orderBy: 'OrderBy',
      direction: 'Direction',
      searchMode: 'SearchMode',
      groupId: 'GroupId',
      type: 'Type',
      line: 'Line',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      keyWord: 'string',
      RRKeyWord: 'string',
      typeKeyWord: 'string',
      valueKeyWord: 'string',
      orderBy: 'string',
      direction: 'string',
      searchMode: 'string',
      groupId: 'number',
      type: 'string',
      line: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRecordsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  domainRecords?: DescribeDomainRecordsResponseBodyDomainRecords;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      domainRecords: 'DomainRecords',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      domainRecords: DescribeDomainRecordsResponseBodyDomainRecords,
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  keyWord?: string;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  searchMode?: string;
  resourceGroupId?: string;
  orderBy?: string;
  direction?: string;
  starmark?: boolean;
  startDate?: string;
  endDate?: string;
  tag?: DescribeDomainsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      keyWord: 'KeyWord',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchMode: 'SearchMode',
      resourceGroupId: 'ResourceGroupId',
      orderBy: 'OrderBy',
      direction: 'Direction',
      starmark: 'Starmark',
      startDate: 'StartDate',
      endDate: 'EndDate',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      keyWord: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchMode: 'string',
      resourceGroupId: 'string',
      orderBy: 'string',
      direction: 'string',
      starmark: 'boolean',
      startDate: 'string',
      endDate: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDomainsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBody extends $tea.Model {
  domains?: DescribeDomainsResponseBodyDomains;
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeDomainsResponseBodyDomains,
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatisticsRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  startDate?: string;
  endDate?: string;
  domainType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      domainType: 'DomainType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
      startDate: 'string',
      endDate: 'string',
      domainType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  statistics?: DescribeDomainStatisticsResponseBodyStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistics: DescribeDomainStatisticsResponseBodyStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatisticsSummaryRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  endDate?: string;
  orderBy?: string;
  direction?: string;
  searchMode?: string;
  keyword?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      endDate: 'EndDate',
      orderBy: 'OrderBy',
      direction: 'Direction',
      searchMode: 'SearchMode',
      keyword: 'Keyword',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      endDate: 'string',
      orderBy: 'string',
      direction: 'string',
      searchMode: 'string',
      keyword: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatisticsSummaryResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalPages?: number;
  totalItems?: number;
  statistics?: DescribeDomainStatisticsSummaryResponseBodyStatistics;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalPages: 'TotalPages',
      totalItems: 'TotalItems',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalPages: 'number',
      totalItems: 'number',
      statistics: DescribeDomainStatisticsSummaryResponseBodyStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatisticsSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainStatisticsSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainStatisticsSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategiesRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategiesResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  strategies?: DescribeGtmAccessStrategiesResponseBodyStrategies;
  totalPages?: number;
  totalItems?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      strategies: 'Strategies',
      totalPages: 'TotalPages',
      totalItems: 'TotalItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      strategies: DescribeGtmAccessStrategiesResponseBodyStrategies,
      totalPages: 'number',
      totalItems: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGtmAccessStrategiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGtmAccessStrategiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      strategyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyResponseBody extends $tea.Model {
  requestId?: string;
  instanceId?: string;
  strategyId?: string;
  defaultAddrPoolStatus?: string;
  failoverAddrPoolId?: string;
  accessStatus?: string;
  defaultAddrPoolMonitorStatus?: string;
  defaultAddrPoolName?: string;
  defultAddrPoolId?: string;
  strategyName?: string;
  failoverAddrPoolStatus?: string;
  accessMode?: string;
  strategyMode?: string;
  failoverAddrPoolMonitorStatus?: string;
  failoverAddrPoolName?: string;
  lines?: DescribeGtmAccessStrategyResponseBodyLines;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      strategyId: 'StrategyId',
      defaultAddrPoolStatus: 'DefaultAddrPoolStatus',
      failoverAddrPoolId: 'FailoverAddrPoolId',
      accessStatus: 'AccessStatus',
      defaultAddrPoolMonitorStatus: 'DefaultAddrPoolMonitorStatus',
      defaultAddrPoolName: 'DefaultAddrPoolName',
      defultAddrPoolId: 'DefultAddrPoolId',
      strategyName: 'StrategyName',
      failoverAddrPoolStatus: 'FailoverAddrPoolStatus',
      accessMode: 'AccessMode',
      strategyMode: 'StrategyMode',
      failoverAddrPoolMonitorStatus: 'FailoverAddrPoolMonitorStatus',
      failoverAddrPoolName: 'FailoverAddrPoolName',
      lines: 'Lines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
      strategyId: 'string',
      defaultAddrPoolStatus: 'string',
      failoverAddrPoolId: 'string',
      accessStatus: 'string',
      defaultAddrPoolMonitorStatus: 'string',
      defaultAddrPoolName: 'string',
      defultAddrPoolId: 'string',
      strategyName: 'string',
      failoverAddrPoolStatus: 'string',
      accessMode: 'string',
      strategyMode: 'string',
      failoverAddrPoolMonitorStatus: 'string',
      failoverAddrPoolName: 'string',
      lines: DescribeGtmAccessStrategyResponseBodyLines,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGtmAccessStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGtmAccessStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyAvailableConfigRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyAvailableConfigResponseBody extends $tea.Model {
  requestId?: string;
  addrPools?: DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPools;
  lines?: DescribeGtmAccessStrategyAvailableConfigResponseBodyLines;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      addrPools: 'AddrPools',
      lines: 'Lines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      addrPools: DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPools,
      lines: DescribeGtmAccessStrategyAvailableConfigResponseBodyLines,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyAvailableConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGtmAccessStrategyAvailableConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGtmAccessStrategyAvailableConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAvailableAlertGroupRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAvailableAlertGroupResponseBody extends $tea.Model {
  requestId?: string;
  availableAlertGroup?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      availableAlertGroup: 'AvailableAlertGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      availableAlertGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAvailableAlertGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGtmAvailableAlertGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGtmAvailableAlertGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  needDetailAttributes?: boolean;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
      needDetailAttributes: 'NeedDetailAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
      needDetailAttributes: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceResponseBody extends $tea.Model {
  expireTimestamp?: number;
  userDomainName?: string;
  requestId?: string;
  lbaStrategy?: string;
  instanceId?: string;
  createTime?: string;
  cnameMode?: string;
  ttl?: number;
  cname?: string;
  instanceName?: string;
  versionCode?: string;
  alertGroup?: string;
  addressPoolNum?: number;
  accessStrategyNum?: number;
  expireTime?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      expireTimestamp: 'ExpireTimestamp',
      userDomainName: 'UserDomainName',
      requestId: 'RequestId',
      lbaStrategy: 'LbaStrategy',
      instanceId: 'InstanceId',
      createTime: 'CreateTime',
      cnameMode: 'CnameMode',
      ttl: 'Ttl',
      cname: 'Cname',
      instanceName: 'InstanceName',
      versionCode: 'VersionCode',
      alertGroup: 'AlertGroup',
      addressPoolNum: 'AddressPoolNum',
      accessStrategyNum: 'AccessStrategyNum',
      expireTime: 'ExpireTime',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTimestamp: 'number',
      userDomainName: 'string',
      requestId: 'string',
      lbaStrategy: 'string',
      instanceId: 'string',
      createTime: 'string',
      cnameMode: 'string',
      ttl: 'number',
      cname: 'string',
      instanceName: 'string',
      versionCode: 'string',
      alertGroup: 'string',
      addressPoolNum: 'number',
      accessStrategyNum: 'number',
      expireTime: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGtmInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGtmInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceAddressPoolRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  addrPoolId?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      addrPoolId: 'AddrPoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      addrPoolId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceAddressPoolResponseBody extends $tea.Model {
  status?: string;
  addrs?: DescribeGtmInstanceAddressPoolResponseBodyAddrs;
  requestId?: string;
  createTime?: string;
  addrCount?: number;
  name?: string;
  type?: string;
  updateTime?: string;
  addrPoolId?: string;
  updateTimestamp?: number;
  monitorConfigId?: string;
  minAvailableAddrNum?: number;
  monitorStatus?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      addrs: 'Addrs',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      addrCount: 'AddrCount',
      name: 'Name',
      type: 'Type',
      updateTime: 'UpdateTime',
      addrPoolId: 'AddrPoolId',
      updateTimestamp: 'UpdateTimestamp',
      monitorConfigId: 'MonitorConfigId',
      minAvailableAddrNum: 'MinAvailableAddrNum',
      monitorStatus: 'MonitorStatus',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      addrs: DescribeGtmInstanceAddressPoolResponseBodyAddrs,
      requestId: 'string',
      createTime: 'string',
      addrCount: 'number',
      name: 'string',
      type: 'string',
      updateTime: 'string',
      addrPoolId: 'string',
      updateTimestamp: 'number',
      monitorConfigId: 'string',
      minAvailableAddrNum: 'number',
      monitorStatus: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceAddressPoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGtmInstanceAddressPoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGtmInstanceAddressPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceAddressPoolsRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceAddressPoolsResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalPages?: number;
  totalItems?: number;
  addrPools?: DescribeGtmInstanceAddressPoolsResponseBodyAddrPools;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalPages: 'TotalPages',
      totalItems: 'TotalItems',
      addrPools: 'AddrPools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalPages: 'number',
      totalItems: 'number',
      addrPools: DescribeGtmInstanceAddressPoolsResponseBodyAddrPools,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceAddressPoolsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGtmInstanceAddressPoolsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGtmInstanceAddressPoolsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstancesRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  pageNumber?: number;
  pageSize?: number;
  keyword?: string;
  resourceGroupId?: string;
  needDetailAttributes?: boolean;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      keyword: 'Keyword',
      resourceGroupId: 'ResourceGroupId',
      needDetailAttributes: 'NeedDetailAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      keyword: 'string',
      resourceGroupId: 'string',
      needDetailAttributes: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstancesResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  gtmInstances?: DescribeGtmInstancesResponseBodyGtmInstances;
  totalPages?: number;
  totalItems?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      gtmInstances: 'GtmInstances',
      totalPages: 'TotalPages',
      totalItems: 'TotalItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      gtmInstances: DescribeGtmInstancesResponseBodyGtmInstances,
      totalPages: 'number',
      totalItems: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGtmInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGtmInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceStatusRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceStatusResponseBody extends $tea.Model {
  status?: string;
  strategyNotAvailableNum?: number;
  requestId?: string;
  switchToFailoverStrategyNum?: number;
  statusReason?: string;
  addrNotAvailableNum?: number;
  addrPoolNotAvailableNum?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      strategyNotAvailableNum: 'StrategyNotAvailableNum',
      requestId: 'RequestId',
      switchToFailoverStrategyNum: 'SwitchToFailoverStrategyNum',
      statusReason: 'StatusReason',
      addrNotAvailableNum: 'AddrNotAvailableNum',
      addrPoolNotAvailableNum: 'AddrPoolNotAvailableNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      strategyNotAvailableNum: 'number',
      requestId: 'string',
      switchToFailoverStrategyNum: 'number',
      statusReason: 'string',
      addrNotAvailableNum: 'number',
      addrPoolNotAvailableNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGtmInstanceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGtmInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceSystemCnameRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceSystemCnameResponseBody extends $tea.Model {
  systemCname?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      systemCname: 'SystemCname',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemCname: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceSystemCnameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGtmInstanceSystemCnameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGtmInstanceSystemCnameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmLogsRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  instanceId?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  startTimestamp?: number;
  endTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTimestamp: 'StartTimestamp',
      endTimestamp: 'EndTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      instanceId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTimestamp: 'number',
      endTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmLogsResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalPages?: number;
  logs?: DescribeGtmLogsResponseBodyLogs;
  totalItems?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalPages: 'TotalPages',
      logs: 'Logs',
      totalItems: 'TotalItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalPages: 'number',
      logs: DescribeGtmLogsResponseBodyLogs,
      totalItems: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGtmLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGtmLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmMonitorAvailableConfigRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmMonitorAvailableConfigResponseBody extends $tea.Model {
  requestId?: string;
  ispCityNodes?: DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodes;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ispCityNodes: 'IspCityNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ispCityNodes: DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmMonitorAvailableConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGtmMonitorAvailableConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGtmMonitorAvailableConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmMonitorConfigRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  monitorConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      monitorConfigId: 'MonitorConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      monitorConfigId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmMonitorConfigResponseBody extends $tea.Model {
  requestId?: string;
  timeout?: number;
  protocolType?: string;
  ispCityNodes?: DescribeGtmMonitorConfigResponseBodyIspCityNodes;
  createTime?: string;
  updateTime?: string;
  evaluationCount?: number;
  updateTimestamp?: number;
  monitorExtendInfo?: string;
  monitorConfigId?: string;
  createTimestamp?: number;
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeout: 'Timeout',
      protocolType: 'ProtocolType',
      ispCityNodes: 'IspCityNodes',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      evaluationCount: 'EvaluationCount',
      updateTimestamp: 'UpdateTimestamp',
      monitorExtendInfo: 'MonitorExtendInfo',
      monitorConfigId: 'MonitorConfigId',
      createTimestamp: 'CreateTimestamp',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeout: 'number',
      protocolType: 'string',
      ispCityNodes: DescribeGtmMonitorConfigResponseBodyIspCityNodes,
      createTime: 'string',
      updateTime: 'string',
      evaluationCount: 'number',
      updateTimestamp: 'number',
      monitorExtendInfo: 'string',
      monitorConfigId: 'string',
      createTimestamp: 'number',
      interval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmMonitorConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGtmMonitorConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGtmMonitorConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  recoveryPlanId?: number;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      recoveryPlanId: 'RecoveryPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      recoveryPlanId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanResponseBody extends $tea.Model {
  status?: string;
  lastRollbackTime?: string;
  faultAddrPoolNum?: number;
  faultAddrPools?: DescribeGtmRecoveryPlanResponseBodyFaultAddrPools;
  lastExecuteTime?: string;
  requestId?: string;
  createTime?: string;
  lastExecuteTimestamp?: number;
  remark?: string;
  name?: string;
  recoveryPlanId?: number;
  updateTime?: string;
  updateTimestamp?: number;
  lastRollbackTimestamp?: number;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      lastRollbackTime: 'LastRollbackTime',
      faultAddrPoolNum: 'FaultAddrPoolNum',
      faultAddrPools: 'FaultAddrPools',
      lastExecuteTime: 'LastExecuteTime',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      lastExecuteTimestamp: 'LastExecuteTimestamp',
      remark: 'Remark',
      name: 'Name',
      recoveryPlanId: 'RecoveryPlanId',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      lastRollbackTimestamp: 'LastRollbackTimestamp',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      lastRollbackTime: 'string',
      faultAddrPoolNum: 'number',
      faultAddrPools: DescribeGtmRecoveryPlanResponseBodyFaultAddrPools,
      lastExecuteTime: 'string',
      requestId: 'string',
      createTime: 'string',
      lastExecuteTimestamp: 'number',
      remark: 'string',
      name: 'string',
      recoveryPlanId: 'number',
      updateTime: 'string',
      updateTimestamp: 'number',
      lastRollbackTimestamp: 'number',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGtmRecoveryPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGtmRecoveryPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanAvailableConfigRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanAvailableConfigResponseBody extends $tea.Model {
  instances?: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstances;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstances,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanAvailableConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGtmRecoveryPlanAvailableConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGtmRecoveryPlanAvailableConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlansRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlansResponseBody extends $tea.Model {
  recoveryPlans?: DescribeGtmRecoveryPlansResponseBodyRecoveryPlans;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalPages?: number;
  totalItems?: number;
  static names(): { [key: string]: string } {
    return {
      recoveryPlans: 'RecoveryPlans',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalPages: 'TotalPages',
      totalItems: 'TotalItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recoveryPlans: DescribeGtmRecoveryPlansResponseBodyRecoveryPlans,
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalPages: 'number',
      totalItems: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlansResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGtmRecoveryPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGtmRecoveryPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDomainsRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  pageNumber?: number;
  pageSize?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDomainsResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  instanceDomains?: DescribeInstanceDomainsResponseBodyInstanceDomains[];
  totalPages?: number;
  totalItems?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      instanceDomains: 'InstanceDomains',
      totalPages: 'TotalPages',
      totalItems: 'TotalItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      instanceDomains: { 'type': 'array', 'itemType': DescribeInstanceDomainsResponseBodyInstanceDomains },
      totalPages: 'number',
      totalItems: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordLogsRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  pageNumber?: number;
  pageSize?: number;
  keyWord?: string;
  startDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      keyWord: 'KeyWord',
      startDate: 'StartDate',
      endDate: 'endDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      keyWord: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordLogsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  recordLogs?: DescribeRecordLogsResponseBodyRecordLogs;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      recordLogs: 'RecordLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      recordLogs: DescribeRecordLogsResponseBodyRecordLogs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRecordLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRecordLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordStatisticsRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  startDate?: string;
  endDate?: string;
  domainName?: string;
  rr?: string;
  domainType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      startDate: 'StartDate',
      endDate: 'EndDate',
      domainName: 'DomainName',
      rr: 'Rr',
      domainType: 'DomainType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      startDate: 'string',
      endDate: 'string',
      domainName: 'string',
      rr: 'string',
      domainType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  statistics?: DescribeRecordStatisticsResponseBodyStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistics: DescribeRecordStatisticsResponseBodyStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRecordStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRecordStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordStatisticsSummaryRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  endDate?: string;
  orderBy?: string;
  direction?: string;
  domainName?: string;
  searchMode?: string;
  keyword?: string;
  threshold?: number;
  domainType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      endDate: 'EndDate',
      orderBy: 'OrderBy',
      direction: 'Direction',
      domainName: 'DomainName',
      searchMode: 'SearchMode',
      keyword: 'Keyword',
      threshold: 'Threshold',
      domainType: 'DomainType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      endDate: 'string',
      orderBy: 'string',
      direction: 'string',
      domainName: 'string',
      searchMode: 'string',
      keyword: 'string',
      threshold: 'number',
      domainType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordStatisticsSummaryResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalPages?: number;
  totalItems?: number;
  statistics?: DescribeRecordStatisticsSummaryResponseBodyStatistics;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalPages: 'TotalPages',
      totalItems: 'TotalItems',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalPages: 'number',
      totalItems: 'number',
      statistics: DescribeRecordStatisticsSummaryResponseBodyStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordStatisticsSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRecordStatisticsSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRecordStatisticsSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubDomainRecordsRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  subDomain?: string;
  pageNumber?: number;
  pageSize?: number;
  type?: string;
  line?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      subDomain: 'SubDomain',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      type: 'Type',
      line: 'Line',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      subDomain: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
      line: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubDomainRecordsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  domainRecords?: DescribeSubDomainRecordsResponseBodyDomainRecords;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      domainRecords: 'DomainRecords',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      domainRecords: DescribeSubDomainRecordsResponseBodyDomainRecords,
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubDomainRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSubDomainRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSubDomainRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportLinesRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportLinesResponseBody extends $tea.Model {
  recordLines?: DescribeSupportLinesResponseBodyRecordLines;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordLines: 'RecordLines',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordLines: DescribeSupportLinesResponseBodyRecordLines,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportLinesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSupportLinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSupportLinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  resourceType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      resourceType: 'ResourceType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      resourceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  tags?: DescribeTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      tags: { 'type': 'array', 'itemType': DescribeTagsResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransferDomainsRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  pageNumber?: number;
  pageSize?: number;
  transferType?: string;
  domainName?: string;
  fromUserId?: number;
  targetUserId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      transferType: 'TransferType',
      domainName: 'DomainName',
      fromUserId: 'FromUserId',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      transferType: 'string',
      domainName: 'string',
      fromUserId: 'number',
      targetUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransferDomainsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  domainTransfers?: DescribeTransferDomainsResponseBodyDomainTransfers;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      domainTransfers: 'DomainTransfers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      domainTransfers: DescribeTransferDomainsResponseBodyDomainTransfers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransferDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTransferDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTransferDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteGtmRecoveryPlanRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  recoveryPlanId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      recoveryPlanId: 'RecoveryPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      recoveryPlanId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteGtmRecoveryPlanResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteGtmRecoveryPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteGtmRecoveryPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteGtmRecoveryPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMainDomainNameRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  inputString?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      inputString: 'InputString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      inputString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMainDomainNameResponseBody extends $tea.Model {
  RR?: string;
  requestId?: string;
  domainName?: string;
  domainLevel?: number;
  static names(): { [key: string]: string } {
    return {
      RR: 'RR',
      requestId: 'RequestId',
      domainName: 'DomainName',
      domainLevel: 'DomainLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RR: 'string',
      requestId: 'string',
      domainName: 'string',
      domainLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMainDomainNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMainDomainNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMainDomainNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTxtRecordForVerifyRequest extends $tea.Model {
  lang?: string;
  domainName?: string;
  type?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      domainName: 'DomainName',
      type: 'Type',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      domainName: 'string',
      type: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTxtRecordForVerifyResponseBody extends $tea.Model {
  RR?: string;
  requestId?: string;
  domainName?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      RR: 'RR',
      requestId: 'RequestId',
      domainName: 'DomainName',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RR: 'string',
      requestId: 'string',
      domainName: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTxtRecordForVerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTxtRecordForVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTxtRecordForVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  resourceType?: string;
  nextToken?: string;
  size?: number;
  tag?: ListTagResourcesRequestTag[];
  resourceId?: string[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      size: 'Size',
      tag: 'Tag',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      resourceType: 'string',
      nextToken: 'string',
      size: 'number',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
      resourceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
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
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHichinaDomainDNSRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHichinaDomainDNSResponseBody extends $tea.Model {
  requestId?: string;
  newDnsServers?: ModifyHichinaDomainDNSResponseBodyNewDnsServers;
  originalDnsServers?: ModifyHichinaDomainDNSResponseBodyOriginalDnsServers;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      newDnsServers: 'NewDnsServers',
      originalDnsServers: 'OriginalDnsServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      newDnsServers: ModifyHichinaDomainDNSResponseBodyNewDnsServers,
      originalDnsServers: ModifyHichinaDomainDNSResponseBodyOriginalDnsServers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHichinaDomainDNSResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyHichinaDomainDNSResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyHichinaDomainDNSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveDomainResourceGroupRequest extends $tea.Model {
  lang?: string;
  resourceId?: string;
  newResourceGroupId?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceId: 'ResourceId',
      newResourceGroupId: 'NewResourceGroupId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceId: 'string',
      newResourceGroupId: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveDomainResourceGroupResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveDomainResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MoveDomainResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MoveDomainResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveGtmResourceGroupRequest extends $tea.Model {
  lang?: string;
  resourceId?: string;
  newResourceGroupId?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceId: 'ResourceId',
      newResourceGroupId: 'NewResourceGroupId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceId: 'string',
      newResourceGroupId: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveGtmResourceGroupResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveGtmResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MoveGtmResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MoveGtmResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateBatchDomainRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  type?: string;
  domainRecordInfo?: OperateBatchDomainRequestDomainRecordInfo[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      type: 'Type',
      domainRecordInfo: 'DomainRecordInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      type: 'string',
      domainRecordInfo: { 'type': 'array', 'itemType': OperateBatchDomainRequestDomainRecordInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateBatchDomainResponseBody extends $tea.Model {
  taskId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateBatchDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OperateBatchDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OperateBatchDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewGtmRecoveryPlanRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  recoveryPlanId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      recoveryPlanId: 'RecoveryPlanId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      recoveryPlanId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewGtmRecoveryPlanResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  previews?: PreviewGtmRecoveryPlanResponseBodyPreviews;
  totalPages?: number;
  totalItems?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      previews: 'Previews',
      totalPages: 'TotalPages',
      totalItems: 'TotalItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      previews: PreviewGtmRecoveryPlanResponseBodyPreviews,
      totalPages: 'number',
      totalItems: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewGtmRecoveryPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PreviewGtmRecoveryPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PreviewGtmRecoveryPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveDomainRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveDomainResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RetrieveDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RetrieveDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackGtmRecoveryPlanRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  recoveryPlanId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      recoveryPlanId: 'RecoveryPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      recoveryPlanId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackGtmRecoveryPlanResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackGtmRecoveryPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RollbackGtmRecoveryPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RollbackGtmRecoveryPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDnsGtmAccessModeRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  strategyId?: string;
  accessMode?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      strategyId: 'StrategyId',
      accessMode: 'AccessMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      strategyId: 'string',
      accessMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDnsGtmAccessModeResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDnsGtmAccessModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDnsGtmAccessModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDnsGtmAccessModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDnsGtmMonitorStatusRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  monitorConfigId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      monitorConfigId: 'MonitorConfigId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      monitorConfigId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDnsGtmMonitorStatusResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDnsGtmMonitorStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDnsGtmMonitorStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDnsGtmMonitorStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDNSSLBStatusRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  subDomain?: string;
  open?: boolean;
  domainName?: string;
  type?: string;
  line?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      subDomain: 'SubDomain',
      open: 'Open',
      domainName: 'DomainName',
      type: 'Type',
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      subDomain: 'string',
      open: 'boolean',
      domainName: 'string',
      type: 'string',
      line: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDNSSLBStatusResponseBody extends $tea.Model {
  requestId?: string;
  recordCount?: number;
  open?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recordCount: 'RecordCount',
      open: 'Open',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recordCount: 'number',
      open: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDNSSLBStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDNSSLBStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDNSSLBStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainDnssecStatusRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  domainName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      domainName: 'DomainName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      domainName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainDnssecStatusResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainDnssecStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDomainDnssecStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDomainDnssecStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainRecordStatusRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  recordId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      recordId: 'RecordId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      recordId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainRecordStatusResponseBody extends $tea.Model {
  status?: string;
  requestId?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainRecordStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDomainRecordStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDomainRecordStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGtmAccessModeRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  strategyId?: string;
  accessMode?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      strategyId: 'StrategyId',
      accessMode: 'AccessMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      strategyId: 'string',
      accessMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGtmAccessModeResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGtmAccessModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetGtmAccessModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetGtmAccessModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGtmMonitorStatusRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  monitorConfigId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      monitorConfigId: 'MonitorConfigId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      monitorConfigId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGtmMonitorStatusResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGtmMonitorStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetGtmMonitorStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetGtmMonitorStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDnsGtmInstanceStrategyModeRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  strategyMode?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
      strategyMode: 'StrategyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
      strategyMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDnsGtmInstanceStrategyModeResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDnsGtmInstanceStrategyModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SwitchDnsGtmInstanceStrategyModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SwitchDnsGtmInstanceStrategyModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  resourceType?: string;
  overWrite?: boolean;
  tag?: TagResourcesRequestTag[];
  resourceId?: string[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      resourceType: 'ResourceType',
      overWrite: 'OverWrite',
      tag: 'Tag',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      resourceType: 'string',
      overWrite: 'boolean',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
      resourceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferDomainRequest extends $tea.Model {
  lang?: string;
  domainNames?: string;
  remark?: string;
  targetUserId?: number;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      domainNames: 'DomainNames',
      remark: 'Remark',
      targetUserId: 'TargetUserId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      domainNames: 'string',
      remark: 'string',
      targetUserId: 'number',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferDomainResponseBody extends $tea.Model {
  taskId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TransferDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TransferDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindInstanceDomainsRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainNames?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainNames: 'DomainNames',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainNames: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindInstanceDomainsResponseBody extends $tea.Model {
  requestId?: string;
  failedCount?: number;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      failedCount: 'FailedCount',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      failedCount: 'number',
      successCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindInstanceDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindInstanceDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindInstanceDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      resourceType: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomLineRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  lineName?: string;
  lineId?: number;
  ipSegment?: UpdateCustomLineRequestIpSegment[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      lineName: 'LineName',
      lineId: 'LineId',
      ipSegment: 'IpSegment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      lineName: 'string',
      lineId: 'number',
      ipSegment: { 'type': 'array', 'itemType': UpdateCustomLineRequestIpSegment },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomLineResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCustomLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCustomLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsCacheDomainRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  instanceId?: string;
  cacheTtlMin?: number;
  cacheTtlMax?: number;
  sourceProtocol?: string;
  sourceEdns?: string;
  sourceDnsServer?: UpdateDnsCacheDomainRequestSourceDnsServer[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      cacheTtlMin: 'CacheTtlMin',
      cacheTtlMax: 'CacheTtlMax',
      sourceProtocol: 'SourceProtocol',
      sourceEdns: 'SourceEdns',
      sourceDnsServer: 'SourceDnsServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
      instanceId: 'string',
      cacheTtlMin: 'number',
      cacheTtlMax: 'number',
      sourceProtocol: 'string',
      sourceEdns: 'string',
      sourceDnsServer: { 'type': 'array', 'itemType': UpdateDnsCacheDomainRequestSourceDnsServer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsCacheDomainResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsCacheDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDnsCacheDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDnsCacheDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsCacheDomainRemarkRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsCacheDomainRemarkResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsCacheDomainRemarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDnsCacheDomainRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDnsCacheDomainRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmAccessStrategyRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  strategyId?: string;
  strategyName?: string;
  lines?: string;
  defaultAddrPoolType?: string;
  defaultLbaStrategy?: string;
  defaultMinAvailableAddrNum?: number;
  defaultMaxReturnAddrNum?: number;
  defaultLatencyOptimization?: string;
  failoverAddrPoolType?: string;
  failoverLbaStrategy?: string;
  failoverMinAvailableAddrNum?: number;
  failoverMaxReturnAddrNum?: number;
  failoverLatencyOptimization?: string;
  defaultAddrPool?: UpdateDnsGtmAccessStrategyRequestDefaultAddrPool[];
  failoverAddrPool?: UpdateDnsGtmAccessStrategyRequestFailoverAddrPool[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      lines: 'Lines',
      defaultAddrPoolType: 'DefaultAddrPoolType',
      defaultLbaStrategy: 'DefaultLbaStrategy',
      defaultMinAvailableAddrNum: 'DefaultMinAvailableAddrNum',
      defaultMaxReturnAddrNum: 'DefaultMaxReturnAddrNum',
      defaultLatencyOptimization: 'DefaultLatencyOptimization',
      failoverAddrPoolType: 'FailoverAddrPoolType',
      failoverLbaStrategy: 'FailoverLbaStrategy',
      failoverMinAvailableAddrNum: 'FailoverMinAvailableAddrNum',
      failoverMaxReturnAddrNum: 'FailoverMaxReturnAddrNum',
      failoverLatencyOptimization: 'FailoverLatencyOptimization',
      defaultAddrPool: 'DefaultAddrPool',
      failoverAddrPool: 'FailoverAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      strategyId: 'string',
      strategyName: 'string',
      lines: 'string',
      defaultAddrPoolType: 'string',
      defaultLbaStrategy: 'string',
      defaultMinAvailableAddrNum: 'number',
      defaultMaxReturnAddrNum: 'number',
      defaultLatencyOptimization: 'string',
      failoverAddrPoolType: 'string',
      failoverLbaStrategy: 'string',
      failoverMinAvailableAddrNum: 'number',
      failoverMaxReturnAddrNum: 'number',
      failoverLatencyOptimization: 'string',
      defaultAddrPool: { 'type': 'array', 'itemType': UpdateDnsGtmAccessStrategyRequestDefaultAddrPool },
      failoverAddrPool: { 'type': 'array', 'itemType': UpdateDnsGtmAccessStrategyRequestFailoverAddrPool },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmAccessStrategyResponseBody extends $tea.Model {
  requestId?: string;
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmAccessStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDnsGtmAccessStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDnsGtmAccessStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmAddressPoolRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  addrPoolId?: string;
  name?: string;
  lbaStrategy?: string;
  addr?: UpdateDnsGtmAddressPoolRequestAddr[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      addrPoolId: 'AddrPoolId',
      name: 'Name',
      lbaStrategy: 'LbaStrategy',
      addr: 'Addr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      addrPoolId: 'string',
      name: 'string',
      lbaStrategy: 'string',
      addr: { 'type': 'array', 'itemType': UpdateDnsGtmAddressPoolRequestAddr },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmAddressPoolResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmAddressPoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDnsGtmAddressPoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDnsGtmAddressPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmInstanceGlobalConfigRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  instanceName?: string;
  ttl?: number;
  publicCnameMode?: string;
  publicUserDomainName?: string;
  publicZoneName?: string;
  alertGroup?: string;
  cnameType?: string;
  alertConfig?: UpdateDnsGtmInstanceGlobalConfigRequestAlertConfig[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      ttl: 'Ttl',
      publicCnameMode: 'PublicCnameMode',
      publicUserDomainName: 'PublicUserDomainName',
      publicZoneName: 'PublicZoneName',
      alertGroup: 'AlertGroup',
      cnameType: 'CnameType',
      alertConfig: 'AlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
      instanceName: 'string',
      ttl: 'number',
      publicCnameMode: 'string',
      publicUserDomainName: 'string',
      publicZoneName: 'string',
      alertGroup: 'string',
      cnameType: 'string',
      alertConfig: { 'type': 'array', 'itemType': UpdateDnsGtmInstanceGlobalConfigRequestAlertConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmInstanceGlobalConfigResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmInstanceGlobalConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDnsGtmInstanceGlobalConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDnsGtmInstanceGlobalConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmMonitorRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  monitorConfigId?: string;
  protocolType?: string;
  interval?: number;
  evaluationCount?: number;
  timeout?: number;
  monitorExtendInfo?: string;
  ispCityNode?: UpdateDnsGtmMonitorRequestIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      monitorConfigId: 'MonitorConfigId',
      protocolType: 'ProtocolType',
      interval: 'Interval',
      evaluationCount: 'EvaluationCount',
      timeout: 'Timeout',
      monitorExtendInfo: 'MonitorExtendInfo',
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      monitorConfigId: 'string',
      protocolType: 'string',
      interval: 'number',
      evaluationCount: 'number',
      timeout: 'number',
      monitorExtendInfo: 'string',
      ispCityNode: { 'type': 'array', 'itemType': UpdateDnsGtmMonitorRequestIspCityNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmMonitorResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDnsGtmMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDnsGtmMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDNSSLBWeightRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  recordId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      recordId: 'RecordId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      recordId: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDNSSLBWeightResponseBody extends $tea.Model {
  requestId?: string;
  recordId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recordId: 'RecordId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recordId: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDNSSLBWeightResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDNSSLBWeightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDNSSLBWeightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainGroupRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  groupId?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      groupId: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainGroupResponseBody extends $tea.Model {
  groupName?: string;
  requestId?: string;
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      requestId: 'RequestId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      requestId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDomainGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDomainGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRecordRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  recordId?: string;
  RR?: string;
  type?: string;
  value?: string;
  TTL?: number;
  priority?: number;
  line?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      recordId: 'RecordId',
      RR: 'RR',
      type: 'Type',
      value: 'Value',
      TTL: 'TTL',
      priority: 'Priority',
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      recordId: 'string',
      RR: 'string',
      type: 'string',
      value: 'string',
      TTL: 'number',
      priority: 'number',
      line: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRecordResponseBody extends $tea.Model {
  requestId?: string;
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      recordId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDomainRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDomainRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRecordRemarkRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  recordId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      recordId: 'RecordId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      recordId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRecordRemarkResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRecordRemarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDomainRecordRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDomainRecordRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRemarkRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  domainName?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      domainName: 'DomainName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      domainName: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRemarkResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRemarkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDomainRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDomainRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmAccessStrategyRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  strategyId?: string;
  strategyName?: string;
  defaultAddrPoolId?: string;
  failoverAddrPoolId?: string;
  accessLines?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      defaultAddrPoolId: 'DefaultAddrPoolId',
      failoverAddrPoolId: 'FailoverAddrPoolId',
      accessLines: 'AccessLines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      strategyId: 'string',
      strategyName: 'string',
      defaultAddrPoolId: 'string',
      failoverAddrPoolId: 'string',
      accessLines: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmAccessStrategyResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmAccessStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateGtmAccessStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateGtmAccessStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmAddressPoolRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  addrPoolId?: string;
  name?: string;
  type?: string;
  minAvailableAddrNum?: number;
  addr?: UpdateGtmAddressPoolRequestAddr[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      addrPoolId: 'AddrPoolId',
      name: 'Name',
      type: 'Type',
      minAvailableAddrNum: 'MinAvailableAddrNum',
      addr: 'Addr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      addrPoolId: 'string',
      name: 'string',
      type: 'string',
      minAvailableAddrNum: 'number',
      addr: { 'type': 'array', 'itemType': UpdateGtmAddressPoolRequestAddr },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmAddressPoolResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmAddressPoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateGtmAddressPoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateGtmAddressPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmInstanceGlobalConfigRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  instanceId?: string;
  instanceName?: string;
  ttl?: number;
  userDomainName?: string;
  lbaStrategy?: string;
  alertGroup?: string;
  cnameMode?: string;
  cnameCustomDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      ttl: 'Ttl',
      userDomainName: 'UserDomainName',
      lbaStrategy: 'LbaStrategy',
      alertGroup: 'AlertGroup',
      cnameMode: 'CnameMode',
      cnameCustomDomainName: 'CnameCustomDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      instanceId: 'string',
      instanceName: 'string',
      ttl: 'number',
      userDomainName: 'string',
      lbaStrategy: 'string',
      alertGroup: 'string',
      cnameMode: 'string',
      cnameCustomDomainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmInstanceGlobalConfigResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmInstanceGlobalConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateGtmInstanceGlobalConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateGtmInstanceGlobalConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmMonitorRequest extends $tea.Model {
  userClientIp?: string;
  lang?: string;
  monitorConfigId?: string;
  protocolType?: string;
  interval?: number;
  evaluationCount?: number;
  timeout?: number;
  monitorExtendInfo?: string;
  ispCityNode?: UpdateGtmMonitorRequestIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      userClientIp: 'UserClientIp',
      lang: 'Lang',
      monitorConfigId: 'MonitorConfigId',
      protocolType: 'ProtocolType',
      interval: 'Interval',
      evaluationCount: 'EvaluationCount',
      timeout: 'Timeout',
      monitorExtendInfo: 'MonitorExtendInfo',
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userClientIp: 'string',
      lang: 'string',
      monitorConfigId: 'string',
      protocolType: 'string',
      interval: 'number',
      evaluationCount: 'number',
      timeout: 'number',
      monitorExtendInfo: 'string',
      ispCityNode: { 'type': 'array', 'itemType': UpdateGtmMonitorRequestIspCityNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmMonitorResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateGtmMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateGtmMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmRecoveryPlanRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  recoveryPlanId?: number;
  name?: string;
  remark?: string;
  faultAddrPool?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      recoveryPlanId: 'RecoveryPlanId',
      name: 'Name',
      remark: 'Remark',
      faultAddrPool: 'FaultAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      recoveryPlanId: 'number',
      name: 'string',
      remark: 'string',
      faultAddrPool: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmRecoveryPlanResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmRecoveryPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateGtmRecoveryPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateGtmRecoveryPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateDnsGtmAttributeInfoRequest extends $tea.Model {
  lang?: string;
  userClientIp?: string;
  lineCode?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      lineCode: 'LineCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      userClientIp: 'string',
      lineCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateDnsGtmAttributeInfoResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateDnsGtmAttributeInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ValidateDnsGtmAttributeInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ValidateDnsGtmAttributeInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomLineRequestIpSegment extends $tea.Model {
  endIp?: string;
  startIp?: string;
  static names(): { [key: string]: string } {
    return {
      endIp: 'EndIp',
      startIp: 'StartIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIp: 'string',
      startIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsCacheDomainRequestSourceDnsServer extends $tea.Model {
  host?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAccessStrategyRequestDefaultAddrPool extends $tea.Model {
  lbaWeight?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      lbaWeight: 'LbaWeight',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lbaWeight: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAccessStrategyRequestFailoverAddrPool extends $tea.Model {
  lbaWeight?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      lbaWeight: 'LbaWeight',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lbaWeight: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAddressPoolRequestAddr extends $tea.Model {
  attributeInfo?: string;
  remark?: string;
  lbaWeight?: number;
  addr?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      attributeInfo: 'AttributeInfo',
      remark: 'Remark',
      lbaWeight: 'LbaWeight',
      addr: 'Addr',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeInfo: 'string',
      remark: 'string',
      lbaWeight: 'number',
      addr: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAddressPoolRequestIspCityNode extends $tea.Model {
  cityCode?: string;
  ispCode?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      ispCode: 'IspCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      ispCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmMonitorRequestIspCityNode extends $tea.Model {
  cityCode?: string;
  ispCode?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      ispCode: 'IspCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      ispCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainResponseBodyDnsServers extends $tea.Model {
  dnsServer?: string[];
  static names(): { [key: string]: string } {
    return {
      dnsServer: 'DnsServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServer: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmAddressPoolRequestAddr extends $tea.Model {
  value?: string;
  lbaWeight?: number;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      lbaWeight: 'LbaWeight',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      lbaWeight: 'number',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmAddressPoolRequestIspCityNode extends $tea.Model {
  cityCode?: string;
  ispCode?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      ispCode: 'IspCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      ispCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmMonitorRequestIspCityNode extends $tea.Model {
  cityCode?: string;
  ispCode?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      ispCode: 'IspCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      ispCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchResultDetailResponseBodyBatchResultDetailsBatchResultDetail extends $tea.Model {
  status?: boolean;
  type?: string;
  domain?: string;
  remark?: string;
  recordId?: string;
  rr?: string;
  priority?: string;
  rrStatus?: string;
  operateDateStr?: string;
  newValue?: string;
  value?: string;
  ttl?: string;
  batchType?: string;
  line?: string;
  newRr?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      domain: 'Domain',
      remark: 'Remark',
      recordId: 'RecordId',
      rr: 'Rr',
      priority: 'Priority',
      rrStatus: 'RrStatus',
      operateDateStr: 'OperateDateStr',
      newValue: 'NewValue',
      value: 'Value',
      ttl: 'Ttl',
      batchType: 'BatchType',
      line: 'Line',
      newRr: 'NewRr',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      type: 'string',
      domain: 'string',
      remark: 'string',
      recordId: 'string',
      rr: 'string',
      priority: 'string',
      rrStatus: 'string',
      operateDateStr: 'string',
      newValue: 'string',
      value: 'string',
      ttl: 'string',
      batchType: 'string',
      line: 'string',
      newRr: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchResultDetailResponseBodyBatchResultDetails extends $tea.Model {
  batchResultDetail?: DescribeBatchResultDetailResponseBodyBatchResultDetailsBatchResultDetail[];
  static names(): { [key: string]: string } {
    return {
      batchResultDetail: 'BatchResultDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchResultDetail: { 'type': 'array', 'itemType': DescribeBatchResultDetailResponseBodyBatchResultDetailsBatchResultDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLineResponseBodyIpSegmentList extends $tea.Model {
  endIp?: string;
  startIp?: string;
  static names(): { [key: string]: string } {
    return {
      endIp: 'EndIp',
      startIp: 'StartIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIp: 'string',
      startIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLinesResponseBodyCustomLines extends $tea.Model {
  code?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsCacheDomainsResponseBodyDomainsSourceDnsServers extends $tea.Model {
  host?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsCacheDomainsResponseBodyDomains extends $tea.Model {
  sourceProtocol?: string;
  updateTime?: string;
  remark?: string;
  expireTime?: string;
  createTime?: string;
  instanceId?: string;
  sourceEdns?: string;
  domainName?: string;
  domainId?: string;
  updateTimestamp?: number;
  expireTimestamp?: number;
  cacheTtlMax?: number;
  cacheTtlMin?: number;
  versionCode?: string;
  sourceDnsServers?: DescribeDnsCacheDomainsResponseBodyDomainsSourceDnsServers[];
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      sourceProtocol: 'SourceProtocol',
      updateTime: 'UpdateTime',
      remark: 'Remark',
      expireTime: 'ExpireTime',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      sourceEdns: 'SourceEdns',
      domainName: 'DomainName',
      domainId: 'DomainId',
      updateTimestamp: 'UpdateTimestamp',
      expireTimestamp: 'ExpireTimestamp',
      cacheTtlMax: 'CacheTtlMax',
      cacheTtlMin: 'CacheTtlMin',
      versionCode: 'VersionCode',
      sourceDnsServers: 'SourceDnsServers',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceProtocol: 'string',
      updateTime: 'string',
      remark: 'string',
      expireTime: 'string',
      createTime: 'string',
      instanceId: 'string',
      sourceEdns: 'string',
      domainName: 'string',
      domainId: 'string',
      updateTimestamp: 'number',
      expireTimestamp: 'number',
      cacheTtlMax: 'number',
      cacheTtlMin: 'number',
      versionCode: 'string',
      sourceDnsServers: { 'type': 'array', 'itemType': DescribeDnsCacheDomainsResponseBodyDomainsSourceDnsServers },
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPoolsEffectiveAddrPool extends $tea.Model {
  lbaWeight?: number;
  name?: string;
  addrCount?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      lbaWeight: 'LbaWeight',
      name: 'Name',
      addrCount: 'AddrCount',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lbaWeight: 'number',
      name: 'string',
      addrCount: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPools extends $tea.Model {
  effectiveAddrPool?: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPoolsEffectiveAddrPool[];
  static names(): { [key: string]: string } {
    return {
      effectiveAddrPool: 'EffectiveAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveAddrPool: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPoolsEffectiveAddrPool },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine extends $tea.Model {
  groupName?: string;
  lineCode?: string;
  lineName?: string;
  groupCode?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
      groupCode: 'GroupCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
      groupCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLines extends $tea.Model {
  line?: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategy extends $tea.Model {
  effectiveLbaStrategy?: string;
  strategyId?: string;
  strategyName?: string;
  effectiveAddrPoolGroupType?: string;
  createTime?: string;
  effectiveAddrPools?: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPools;
  createTimestamp?: number;
  effectiveAddrPoolType?: string;
  lines?: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLines;
  static names(): { [key: string]: string } {
    return {
      effectiveLbaStrategy: 'EffectiveLbaStrategy',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      effectiveAddrPoolGroupType: 'EffectiveAddrPoolGroupType',
      createTime: 'CreateTime',
      effectiveAddrPools: 'EffectiveAddrPools',
      createTimestamp: 'CreateTimestamp',
      effectiveAddrPoolType: 'EffectiveAddrPoolType',
      lines: 'Lines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveLbaStrategy: 'string',
      strategyId: 'string',
      strategyName: 'string',
      effectiveAddrPoolGroupType: 'string',
      createTime: 'string',
      effectiveAddrPools: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPools,
      createTimestamp: 'number',
      effectiveAddrPoolType: 'string',
      lines: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLines,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategiesResponseBodyStrategies extends $tea.Model {
  strategy?: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategy[];
  static names(): { [key: string]: string } {
    return {
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategy: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPoolsFailoverAddrPool extends $tea.Model {
  lbaWeight?: number;
  name?: string;
  addrCount?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      lbaWeight: 'LbaWeight',
      name: 'Name',
      addrCount: 'AddrCount',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lbaWeight: 'number',
      name: 'string',
      addrCount: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPools extends $tea.Model {
  failoverAddrPool?: DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPoolsFailoverAddrPool[];
  static names(): { [key: string]: string } {
    return {
      failoverAddrPool: 'FailoverAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failoverAddrPool: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPoolsFailoverAddrPool },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPoolsDefaultAddrPool extends $tea.Model {
  lbaWeight?: number;
  name?: string;
  addrCount?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      lbaWeight: 'LbaWeight',
      name: 'Name',
      addrCount: 'AddrCount',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lbaWeight: 'number',
      name: 'string',
      addrCount: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPools extends $tea.Model {
  defaultAddrPool?: DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPoolsDefaultAddrPool[];
  static names(): { [key: string]: string } {
    return {
      defaultAddrPool: 'DefaultAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultAddrPool: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPoolsDefaultAddrPool },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyResponseBodyLinesLine extends $tea.Model {
  groupName?: string;
  lineCode?: string;
  lineName?: string;
  groupCode?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
      groupCode: 'GroupCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
      groupCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyResponseBodyLines extends $tea.Model {
  line?: DescribeDnsGtmAccessStrategyResponseBodyLinesLine[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyResponseBodyLinesLine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedDomainLines extends $tea.Model {
  selectedDomainLine?: string[];
  static names(): { [key: string]: string } {
    return {
      selectedDomainLine: 'SelectedDomainLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectedDomainLine: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPoolsDomainAddrPool extends $tea.Model {
  name?: string;
  addrCount?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      addrCount: 'AddrCount',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      addrCount: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPools extends $tea.Model {
  domainAddrPool?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPoolsDomainAddrPool[];
  static names(): { [key: string]: string } {
    return {
      domainAddrPool: 'DomainAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainAddrPool: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPoolsDomainAddrPool },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPoolsIpv4AddrPool extends $tea.Model {
  name?: string;
  addrCount?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      addrCount: 'AddrCount',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      addrCount: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPools extends $tea.Model {
  ipv4AddrPool?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPoolsIpv4AddrPool[];
  static names(): { [key: string]: string } {
    return {
      ipv4AddrPool: 'Ipv4AddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4AddrPool: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPoolsIpv4AddrPool },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv4Lines extends $tea.Model {
  selectedIpv4Line?: string[];
  static names(): { [key: string]: string } {
    return {
      selectedIpv4Line: 'SelectedIpv4Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectedIpv4Line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPoolsIpv6AddrPool extends $tea.Model {
  name?: string;
  addrCount?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      addrCount: 'AddrCount',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      addrCount: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPools extends $tea.Model {
  ipv6AddrPool?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPoolsIpv6AddrPool[];
  static names(): { [key: string]: string } {
    return {
      ipv6AddrPool: 'Ipv6AddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6AddrPool: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPoolsIpv6AddrPool },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv6Lines extends $tea.Model {
  selectedIpv6Line?: string[];
  static names(): { [key: string]: string } {
    return {
      selectedIpv6Line: 'SelectedIpv6Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectedIpv6Line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLinesLine extends $tea.Model {
  fatherCode?: string;
  groupName?: string;
  lineCode?: string;
  lineName?: string;
  groupCode?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
      groupCode: 'GroupCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
      groupCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLines extends $tea.Model {
  line?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLinesLine[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLinesLine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddrAttributeInfo extends $tea.Model {
  fatherCode?: string;
  groupName?: string;
  lineCode?: string;
  lineName?: string;
  groupCode?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
      groupCode: 'GroupCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
      groupCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddr extends $tea.Model {
  attributeInfo?: DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddrAttributeInfo;
  addr?: string;
  static names(): { [key: string]: string } {
    return {
      attributeInfo: 'AttributeInfo',
      addr: 'Addr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeInfo: DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddrAttributeInfo,
      addr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddrAttributeInfoResponseBodyAddr extends $tea.Model {
  addr?: DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddr[];
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddr },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfosAttributeInfo extends $tea.Model {
  fatherCode?: string;
  groupName?: string;
  lineCode?: string;
  lineName?: string;
  groupCode?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
      groupCode: 'GroupCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
      groupCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfos extends $tea.Model {
  attributeInfo?: DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfosAttributeInfo[];
  static names(): { [key: string]: string } {
    return {
      attributeInfo: 'AttributeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeInfo: { 'type': 'array', 'itemType': DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfosAttributeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceResponseBodyConfigAlertConfigAlertConfig extends $tea.Model {
  smsNotice?: boolean;
  noticeType?: string;
  emailNotice?: boolean;
  static names(): { [key: string]: string } {
    return {
      smsNotice: 'SmsNotice',
      noticeType: 'NoticeType',
      emailNotice: 'EmailNotice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smsNotice: 'boolean',
      noticeType: 'string',
      emailNotice: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceResponseBodyConfigAlertConfig extends $tea.Model {
  alertConfig?: DescribeDnsGtmInstanceResponseBodyConfigAlertConfigAlertConfig[];
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': DescribeDnsGtmInstanceResponseBodyConfigAlertConfigAlertConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceResponseBodyConfig extends $tea.Model {
  ttl?: number;
  alertGroup?: string;
  cnameType?: string;
  strategyMode?: string;
  instanceName?: string;
  publicCnameMode?: string;
  alertConfig?: DescribeDnsGtmInstanceResponseBodyConfigAlertConfig;
  publicUserDomainName?: string;
  pubicZoneName?: string;
  static names(): { [key: string]: string } {
    return {
      ttl: 'Ttl',
      alertGroup: 'AlertGroup',
      cnameType: 'CnameType',
      strategyMode: 'StrategyMode',
      instanceName: 'InstanceName',
      publicCnameMode: 'PublicCnameMode',
      alertConfig: 'AlertConfig',
      publicUserDomainName: 'PublicUserDomainName',
      pubicZoneName: 'PubicZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ttl: 'number',
      alertGroup: 'string',
      cnameType: 'string',
      strategyMode: 'string',
      instanceName: 'string',
      publicCnameMode: 'string',
      alertConfig: DescribeDnsGtmInstanceResponseBodyConfigAlertConfig,
      publicUserDomainName: 'string',
      pubicZoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceResponseBodyUsedQuota extends $tea.Model {
  emailUsedCount?: number;
  taskUsedCount?: number;
  smsUsedCount?: number;
  static names(): { [key: string]: string } {
    return {
      emailUsedCount: 'EmailUsedCount',
      taskUsedCount: 'TaskUsedCount',
      smsUsedCount: 'SmsUsedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emailUsedCount: 'number',
      taskUsedCount: 'number',
      smsUsedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceAddressPoolResponseBodyAddrsAddr extends $tea.Model {
  updateTimestamp?: number;
  attributeInfo?: string;
  updateTime?: string;
  alertStatus?: string;
  remark?: string;
  lbaWeight?: number;
  addr?: string;
  createTime?: string;
  mode?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      updateTimestamp: 'UpdateTimestamp',
      attributeInfo: 'AttributeInfo',
      updateTime: 'UpdateTime',
      alertStatus: 'AlertStatus',
      remark: 'Remark',
      lbaWeight: 'LbaWeight',
      addr: 'Addr',
      createTime: 'CreateTime',
      mode: 'Mode',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTimestamp: 'number',
      attributeInfo: 'string',
      updateTime: 'string',
      alertStatus: 'string',
      remark: 'string',
      lbaWeight: 'number',
      addr: 'string',
      createTime: 'string',
      mode: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceAddressPoolResponseBodyAddrs extends $tea.Model {
  addr?: DescribeDnsGtmInstanceAddressPoolResponseBodyAddrsAddr[];
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': DescribeDnsGtmInstanceAddressPoolResponseBodyAddrsAddr },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceAddressPoolsResponseBodyAddrPoolsAddrPool extends $tea.Model {
  type?: string;
  updateTimestamp?: number;
  monitorStatus?: string;
  updateTime?: string;
  createTime?: string;
  addrPoolId?: string;
  lbaStrategy?: string;
  name?: string;
  addrCount?: number;
  monitorConfigId?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      updateTimestamp: 'UpdateTimestamp',
      monitorStatus: 'MonitorStatus',
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      addrPoolId: 'AddrPoolId',
      lbaStrategy: 'LbaStrategy',
      name: 'Name',
      addrCount: 'AddrCount',
      monitorConfigId: 'MonitorConfigId',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      updateTimestamp: 'number',
      monitorStatus: 'string',
      updateTime: 'string',
      createTime: 'string',
      addrPoolId: 'string',
      lbaStrategy: 'string',
      name: 'string',
      addrCount: 'number',
      monitorConfigId: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceAddressPoolsResponseBodyAddrPools extends $tea.Model {
  addrPool?: DescribeDnsGtmInstanceAddressPoolsResponseBodyAddrPoolsAddrPool[];
  static names(): { [key: string]: string } {
    return {
      addrPool: 'AddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPool: { 'type': 'array', 'itemType': DescribeDnsGtmInstanceAddressPoolsResponseBodyAddrPoolsAddrPool },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstancesResponseBodyGtmInstancesConfigAlertConfig extends $tea.Model {
  smsNotice?: string;
  noticeType?: string;
  emailNotice?: string;
  static names(): { [key: string]: string } {
    return {
      smsNotice: 'SmsNotice',
      noticeType: 'NoticeType',
      emailNotice: 'EmailNotice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smsNotice: 'string',
      noticeType: 'string',
      emailNotice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstancesResponseBodyGtmInstancesConfig extends $tea.Model {
  ttl?: number;
  alertGroup?: string;
  publicZoneName?: string;
  cnameType?: string;
  strategyMode?: string;
  instanceName?: string;
  publicCnameMode?: string;
  alertConfig?: DescribeDnsGtmInstancesResponseBodyGtmInstancesConfigAlertConfig[];
  publicUserDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      ttl: 'Ttl',
      alertGroup: 'AlertGroup',
      publicZoneName: 'PublicZoneName',
      cnameType: 'CnameType',
      strategyMode: 'StrategyMode',
      instanceName: 'InstanceName',
      publicCnameMode: 'PublicCnameMode',
      alertConfig: 'AlertConfig',
      publicUserDomainName: 'PublicUserDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ttl: 'number',
      alertGroup: 'string',
      publicZoneName: 'string',
      cnameType: 'string',
      strategyMode: 'string',
      instanceName: 'string',
      publicCnameMode: 'string',
      alertConfig: { 'type': 'array', 'itemType': DescribeDnsGtmInstancesResponseBodyGtmInstancesConfigAlertConfig },
      publicUserDomainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstancesResponseBodyGtmInstancesUsedQuota extends $tea.Model {
  emailUsedCount?: number;
  taskUsedCount?: number;
  smsUsedCount?: number;
  static names(): { [key: string]: string } {
    return {
      emailUsedCount: 'EmailUsedCount',
      taskUsedCount: 'TaskUsedCount',
      smsUsedCount: 'SmsUsedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emailUsedCount: 'number',
      taskUsedCount: 'number',
      smsUsedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstancesResponseBodyGtmInstances extends $tea.Model {
  paymentType?: string;
  expireTime?: string;
  createTime?: string;
  smsQuota?: number;
  instanceId?: string;
  config?: DescribeDnsGtmInstancesResponseBodyGtmInstancesConfig;
  expireTimestamp?: number;
  resourceGroupId?: string;
  versionCode?: string;
  usedQuota?: DescribeDnsGtmInstancesResponseBodyGtmInstancesUsedQuota;
  taskQuota?: number;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      paymentType: 'PaymentType',
      expireTime: 'ExpireTime',
      createTime: 'CreateTime',
      smsQuota: 'SmsQuota',
      instanceId: 'InstanceId',
      config: 'Config',
      expireTimestamp: 'ExpireTimestamp',
      resourceGroupId: 'ResourceGroupId',
      versionCode: 'VersionCode',
      usedQuota: 'UsedQuota',
      taskQuota: 'TaskQuota',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paymentType: 'string',
      expireTime: 'string',
      createTime: 'string',
      smsQuota: 'number',
      instanceId: 'string',
      config: DescribeDnsGtmInstancesResponseBodyGtmInstancesConfig,
      expireTimestamp: 'number',
      resourceGroupId: 'string',
      versionCode: 'string',
      usedQuota: DescribeDnsGtmInstancesResponseBodyGtmInstancesUsedQuota,
      taskQuota: 'number',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmLogsResponseBodyLogsLog extends $tea.Model {
  operTimestamp?: number;
  entityId?: string;
  entityType?: string;
  operTime?: string;
  operAction?: string;
  content?: string;
  entityName?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      operTimestamp: 'OperTimestamp',
      entityId: 'EntityId',
      entityType: 'EntityType',
      operTime: 'OperTime',
      operAction: 'OperAction',
      content: 'Content',
      entityName: 'EntityName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operTimestamp: 'number',
      entityId: 'string',
      entityType: 'string',
      operTime: 'string',
      operAction: 'string',
      content: 'string',
      entityName: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmLogsResponseBodyLogs extends $tea.Model {
  log?: DescribeDnsGtmLogsResponseBodyLogsLog[];
  static names(): { [key: string]: string } {
    return {
      log: 'Log',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log: { 'type': 'array', 'itemType': DescribeDnsGtmLogsResponseBodyLogsLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodesIpv4IspCityNode extends $tea.Model {
  cityCode?: string;
  groupName?: string;
  ispCode?: string;
  cityName?: string;
  ispName?: string;
  groupType?: string;
  defaultSelected?: boolean;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      groupName: 'GroupName',
      ispCode: 'IspCode',
      cityName: 'CityName',
      ispName: 'IspName',
      groupType: 'GroupType',
      defaultSelected: 'DefaultSelected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      groupName: 'string',
      ispCode: 'string',
      cityName: 'string',
      ispName: 'string',
      groupType: 'string',
      defaultSelected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodes extends $tea.Model {
  ipv4IspCityNode?: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodesIpv4IspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ipv4IspCityNode: 'Ipv4IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4IspCityNode: { 'type': 'array', 'itemType': DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodesIpv4IspCityNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodesDomainIpv4IspCityNode extends $tea.Model {
  cityCode?: string;
  groupName?: string;
  ispCode?: string;
  cityName?: string;
  ispName?: string;
  groupType?: string;
  defaultSelected?: boolean;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      groupName: 'GroupName',
      ispCode: 'IspCode',
      cityName: 'CityName',
      ispName: 'IspName',
      groupType: 'GroupType',
      defaultSelected: 'DefaultSelected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      groupName: 'string',
      ispCode: 'string',
      cityName: 'string',
      ispName: 'string',
      groupType: 'string',
      defaultSelected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodes extends $tea.Model {
  domainIpv4IspCityNode?: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodesDomainIpv4IspCityNode[];
  static names(): { [key: string]: string } {
    return {
      domainIpv4IspCityNode: 'DomainIpv4IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainIpv4IspCityNode: { 'type': 'array', 'itemType': DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodesDomainIpv4IspCityNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodesDomainIpv6IspCityNode extends $tea.Model {
  cityCode?: string;
  groupName?: string;
  ispCode?: string;
  cityName?: string;
  ispName?: string;
  groupType?: string;
  defaultSelected?: boolean;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      groupName: 'GroupName',
      ispCode: 'IspCode',
      cityName: 'CityName',
      ispName: 'IspName',
      groupType: 'GroupType',
      defaultSelected: 'DefaultSelected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      groupName: 'string',
      ispCode: 'string',
      cityName: 'string',
      ispName: 'string',
      groupType: 'string',
      defaultSelected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodes extends $tea.Model {
  domainIpv6IspCityNode?: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodesDomainIpv6IspCityNode[];
  static names(): { [key: string]: string } {
    return {
      domainIpv6IspCityNode: 'DomainIpv6IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainIpv6IspCityNode: { 'type': 'array', 'itemType': DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodesDomainIpv6IspCityNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodesIpv6IspCityNode extends $tea.Model {
  cityCode?: string;
  groupName?: string;
  ispCode?: string;
  cityName?: string;
  ispName?: string;
  groupType?: string;
  defaultSelected?: boolean;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      groupName: 'GroupName',
      ispCode: 'IspCode',
      cityName: 'CityName',
      ispName: 'IspName',
      groupType: 'GroupType',
      defaultSelected: 'DefaultSelected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      groupName: 'string',
      ispCode: 'string',
      cityName: 'string',
      ispName: 'string',
      groupType: 'string',
      defaultSelected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodes extends $tea.Model {
  ipv6IspCityNode?: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodesIpv6IspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ipv6IspCityNode: 'Ipv6IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6IspCityNode: { 'type': 'array', 'itemType': DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodesIpv6IspCityNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorConfigResponseBodyIspCityNodesIspCityNode extends $tea.Model {
  cityCode?: string;
  countryName?: string;
  ispCode?: string;
  cityName?: string;
  countryCode?: string;
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      countryName: 'CountryName',
      ispCode: 'IspCode',
      cityName: 'CityName',
      countryCode: 'CountryCode',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      countryName: 'string',
      ispCode: 'string',
      cityName: 'string',
      countryCode: 'string',
      ispName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorConfigResponseBodyIspCityNodes extends $tea.Model {
  ispCityNode?: DescribeDnsGtmMonitorConfigResponseBodyIspCityNodesIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCityNode: { 'type': 'array', 'itemType': DescribeDnsGtmMonitorConfigResponseBodyIspCityNodesIspCityNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsProductInstanceResponseBodyDnsServers extends $tea.Model {
  dnsServer?: string[];
  static names(): { [key: string]: string } {
    return {
      dnsServer: 'DnsServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServer: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsProductInstancesResponseBodyDnsProductsDnsProduct extends $tea.Model {
  overseaLine?: string;
  paymentType?: string;
  monitorNodeCount?: number;
  inBlackHole?: boolean;
  bindDomainUsedCount?: number;
  ISPRegionLines?: string;
  TTLMinValue?: number;
  ISPLines?: string;
  searchEngineLines?: string;
  endTimestamp?: number;
  versionName?: string;
  versionCode?: string;
  monitorTaskCount?: number;
  bindUsedCount?: number;
  domain?: string;
  monitorFrequency?: number;
  inClean?: boolean;
  URLForwardCount?: number;
  startTimestamp?: number;
  DDosDefendQuery?: number;
  instanceId?: string;
  DDosDefendFlow?: number;
  bindCount?: number;
  subDomainLevel?: number;
  bindDomainCount?: number;
  endTime?: string;
  startTime?: string;
  overseaDDosDefendFlow?: number;
  regionLines?: boolean;
  gslb?: boolean;
  dnsSecurity?: string;
  dnsSLBCount?: number;
  static names(): { [key: string]: string } {
    return {
      overseaLine: 'OverseaLine',
      paymentType: 'PaymentType',
      monitorNodeCount: 'MonitorNodeCount',
      inBlackHole: 'InBlackHole',
      bindDomainUsedCount: 'BindDomainUsedCount',
      ISPRegionLines: 'ISPRegionLines',
      TTLMinValue: 'TTLMinValue',
      ISPLines: 'ISPLines',
      searchEngineLines: 'SearchEngineLines',
      endTimestamp: 'EndTimestamp',
      versionName: 'VersionName',
      versionCode: 'VersionCode',
      monitorTaskCount: 'MonitorTaskCount',
      bindUsedCount: 'BindUsedCount',
      domain: 'Domain',
      monitorFrequency: 'MonitorFrequency',
      inClean: 'InClean',
      URLForwardCount: 'URLForwardCount',
      startTimestamp: 'StartTimestamp',
      DDosDefendQuery: 'DDosDefendQuery',
      instanceId: 'InstanceId',
      DDosDefendFlow: 'DDosDefendFlow',
      bindCount: 'BindCount',
      subDomainLevel: 'SubDomainLevel',
      bindDomainCount: 'BindDomainCount',
      endTime: 'EndTime',
      startTime: 'StartTime',
      overseaDDosDefendFlow: 'OverseaDDosDefendFlow',
      regionLines: 'RegionLines',
      gslb: 'Gslb',
      dnsSecurity: 'DnsSecurity',
      dnsSLBCount: 'DnsSLBCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overseaLine: 'string',
      paymentType: 'string',
      monitorNodeCount: 'number',
      inBlackHole: 'boolean',
      bindDomainUsedCount: 'number',
      ISPRegionLines: 'string',
      TTLMinValue: 'number',
      ISPLines: 'string',
      searchEngineLines: 'string',
      endTimestamp: 'number',
      versionName: 'string',
      versionCode: 'string',
      monitorTaskCount: 'number',
      bindUsedCount: 'number',
      domain: 'string',
      monitorFrequency: 'number',
      inClean: 'boolean',
      URLForwardCount: 'number',
      startTimestamp: 'number',
      DDosDefendQuery: 'number',
      instanceId: 'string',
      DDosDefendFlow: 'number',
      bindCount: 'number',
      subDomainLevel: 'number',
      bindDomainCount: 'number',
      endTime: 'string',
      startTime: 'string',
      overseaDDosDefendFlow: 'number',
      regionLines: 'boolean',
      gslb: 'boolean',
      dnsSecurity: 'string',
      dnsSLBCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsProductInstancesResponseBodyDnsProducts extends $tea.Model {
  dnsProduct?: DescribeDnsProductInstancesResponseBodyDnsProductsDnsProduct[];
  static names(): { [key: string]: string } {
    return {
      dnsProduct: 'DnsProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsProduct: { 'type': 'array', 'itemType': DescribeDnsProductInstancesResponseBodyDnsProductsDnsProduct },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithmsLineAlgorithm extends $tea.Model {
  line?: string;
  open?: boolean;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      open: 'Open',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: 'string',
      open: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithms extends $tea.Model {
  lineAlgorithm?: DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithmsLineAlgorithm[];
  static names(): { [key: string]: string } {
    return {
      lineAlgorithm: 'LineAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineAlgorithm: { 'type': 'array', 'itemType': DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithmsLineAlgorithm },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomain extends $tea.Model {
  type?: string;
  recordCount?: number;
  open?: boolean;
  subDomain?: string;
  lineAlgorithms?: DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithms;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      recordCount: 'RecordCount',
      open: 'Open',
      subDomain: 'SubDomain',
      lineAlgorithms: 'LineAlgorithms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      recordCount: 'number',
      open: 'boolean',
      subDomain: 'string',
      lineAlgorithms: DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithms,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDNSSLBSubDomainsResponseBodySlbSubDomains extends $tea.Model {
  slbSubDomain?: DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomain[];
  static names(): { [key: string]: string } {
    return {
      slbSubDomain: 'SlbSubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbSubDomain: { 'type': 'array', 'itemType': DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomain },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohAccountStatisticsResponseBodyStatistics extends $tea.Model {
  v6HttpCount?: number;
  v4HttpsCount?: number;
  timestamp?: number;
  totalCount?: number;
  v4HttpCount?: number;
  v6HttpsCount?: number;
  static names(): { [key: string]: string } {
    return {
      v6HttpCount: 'V6HttpCount',
      v4HttpsCount: 'V4HttpsCount',
      timestamp: 'Timestamp',
      totalCount: 'TotalCount',
      v4HttpCount: 'V4HttpCount',
      v6HttpsCount: 'V6HttpsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      v6HttpCount: 'number',
      v4HttpsCount: 'number',
      timestamp: 'number',
      totalCount: 'number',
      v4HttpCount: 'number',
      v6HttpsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohDomainStatisticsResponseBodyStatistics extends $tea.Model {
  v6HttpCount?: number;
  v4HttpsCount?: number;
  timestamp?: number;
  totalCount?: number;
  v4HttpCount?: number;
  v6HttpsCount?: number;
  static names(): { [key: string]: string } {
    return {
      v6HttpCount: 'V6HttpCount',
      v4HttpsCount: 'V4HttpsCount',
      timestamp: 'Timestamp',
      totalCount: 'TotalCount',
      v4HttpCount: 'V4HttpCount',
      v6HttpsCount: 'V6HttpsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      v6HttpCount: 'number',
      v4HttpsCount: 'number',
      timestamp: 'number',
      totalCount: 'number',
      v4HttpCount: 'number',
      v6HttpsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohDomainStatisticsSummaryResponseBodyStatistics extends $tea.Model {
  v6HttpCount?: number;
  v4HttpsCount?: number;
  ipCount?: number;
  totalCount?: number;
  httpCount?: number;
  domainName?: string;
  httpsCount?: number;
  v4HttpCount?: number;
  v6HttpsCount?: number;
  static names(): { [key: string]: string } {
    return {
      v6HttpCount: 'V6HttpCount',
      v4HttpsCount: 'V4HttpsCount',
      ipCount: 'IpCount',
      totalCount: 'TotalCount',
      httpCount: 'HttpCount',
      domainName: 'DomainName',
      httpsCount: 'HttpsCount',
      v4HttpCount: 'V4HttpCount',
      v6HttpsCount: 'V6HttpsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      v6HttpCount: 'number',
      v4HttpsCount: 'number',
      ipCount: 'number',
      totalCount: 'number',
      httpCount: 'number',
      domainName: 'string',
      httpsCount: 'number',
      v4HttpCount: 'number',
      v6HttpsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohSubDomainStatisticsResponseBodyStatistics extends $tea.Model {
  v6HttpCount?: number;
  v4HttpsCount?: number;
  timestamp?: number;
  totalCount?: number;
  v4HttpCount?: number;
  v6HttpsCount?: number;
  static names(): { [key: string]: string } {
    return {
      v6HttpCount: 'V6HttpCount',
      v4HttpsCount: 'V4HttpsCount',
      timestamp: 'Timestamp',
      totalCount: 'TotalCount',
      v4HttpCount: 'V4HttpCount',
      v6HttpsCount: 'V6HttpsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      v6HttpCount: 'number',
      v4HttpsCount: 'number',
      timestamp: 'number',
      totalCount: 'number',
      v4HttpCount: 'number',
      v6HttpsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohSubDomainStatisticsSummaryResponseBodyStatistics extends $tea.Model {
  v6HttpCount?: number;
  v4HttpsCount?: number;
  ipCount?: number;
  subDomain?: string;
  totalCount?: number;
  httpCount?: number;
  httpsCount?: number;
  v4HttpCount?: number;
  v6HttpsCount?: number;
  static names(): { [key: string]: string } {
    return {
      v6HttpCount: 'V6HttpCount',
      v4HttpsCount: 'V4HttpsCount',
      ipCount: 'IpCount',
      subDomain: 'SubDomain',
      totalCount: 'TotalCount',
      httpCount: 'HttpCount',
      httpsCount: 'HttpsCount',
      v4HttpCount: 'V4HttpCount',
      v6HttpsCount: 'V6HttpsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      v6HttpCount: 'number',
      v4HttpsCount: 'number',
      ipCount: 'number',
      subDomain: 'string',
      totalCount: 'number',
      httpCount: 'number',
      httpsCount: 'number',
      v4HttpCount: 'number',
      v6HttpsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainGroupsResponseBodyDomainGroupsDomainGroup extends $tea.Model {
  groupId?: string;
  groupName?: string;
  domainCount?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      domainCount: 'DomainCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      domainCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainGroupsResponseBodyDomainGroups extends $tea.Model {
  domainGroup?: DescribeDomainGroupsResponseBodyDomainGroupsDomainGroup[];
  static names(): { [key: string]: string } {
    return {
      domainGroup: 'DomainGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroup: { 'type': 'array', 'itemType': DescribeDomainGroupsResponseBodyDomainGroupsDomainGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainInfoResponseBodyDnsServers extends $tea.Model {
  dnsServer?: string[];
  static names(): { [key: string]: string } {
    return {
      dnsServer: 'DnsServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServer: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainInfoResponseBodyRecordLinesRecordLine extends $tea.Model {
  fatherCode?: string;
  lineDisplayName?: string;
  lineCode?: string;
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      lineDisplayName: 'LineDisplayName',
      lineCode: 'LineCode',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      lineDisplayName: 'string',
      lineCode: 'string',
      lineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainInfoResponseBodyRecordLines extends $tea.Model {
  recordLine?: DescribeDomainInfoResponseBodyRecordLinesRecordLine[];
  static names(): { [key: string]: string } {
    return {
      recordLine: 'RecordLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordLine: { 'type': 'array', 'itemType': DescribeDomainInfoResponseBodyRecordLinesRecordLine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainInfoResponseBodyAvailableTtls extends $tea.Model {
  availableTtl?: string[];
  static names(): { [key: string]: string } {
    return {
      availableTtl: 'AvailableTtl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableTtl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainLogsResponseBodyDomainLogsDomainLog extends $tea.Model {
  action?: string;
  actionTimestamp?: number;
  zoneId?: string;
  clientIp?: string;
  message?: string;
  actionTime?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionTimestamp: 'ActionTimestamp',
      zoneId: 'ZoneId',
      clientIp: 'ClientIp',
      message: 'Message',
      actionTime: 'ActionTime',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionTimestamp: 'number',
      zoneId: 'string',
      clientIp: 'string',
      message: 'string',
      actionTime: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainLogsResponseBodyDomainLogs extends $tea.Model {
  domainLog?: DescribeDomainLogsResponseBodyDomainLogsDomainLog[];
  static names(): { [key: string]: string } {
    return {
      domainLog: 'DomainLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLog: { 'type': 'array', 'itemType': DescribeDomainLogsResponseBodyDomainLogsDomainLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNsResponseBodyExpectDnsServers extends $tea.Model {
  expectDnsServer?: string[];
  static names(): { [key: string]: string } {
    return {
      expectDnsServer: 'ExpectDnsServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectDnsServer: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNsResponseBodyDnsServers extends $tea.Model {
  dnsServer?: string[];
  static names(): { [key: string]: string } {
    return {
      dnsServer: 'DnsServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServer: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRecordsResponseBodyDomainRecordsRecord extends $tea.Model {
  status?: string;
  type?: string;
  remark?: string;
  TTL?: number;
  recordId?: string;
  priority?: number;
  RR?: string;
  domainName?: string;
  weight?: number;
  value?: string;
  line?: string;
  locked?: boolean;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      remark: 'Remark',
      TTL: 'TTL',
      recordId: 'RecordId',
      priority: 'Priority',
      RR: 'RR',
      domainName: 'DomainName',
      weight: 'Weight',
      value: 'Value',
      line: 'Line',
      locked: 'Locked',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      remark: 'string',
      TTL: 'number',
      recordId: 'string',
      priority: 'number',
      RR: 'string',
      domainName: 'string',
      weight: 'number',
      value: 'string',
      line: 'string',
      locked: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRecordsResponseBodyDomainRecords extends $tea.Model {
  record?: DescribeDomainRecordsResponseBodyDomainRecordsRecord[];
  static names(): { [key: string]: string } {
    return {
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: { 'type': 'array', 'itemType': DescribeDomainRecordsResponseBodyDomainRecordsRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsRequestTag extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsDomainTagsTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsDomainTags extends $tea.Model {
  tag?: DescribeDomainsResponseBodyDomainsDomainTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsDomainTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsDomainDnsServers extends $tea.Model {
  dnsServer?: string[];
  static names(): { [key: string]: string } {
    return {
      dnsServer: 'DnsServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServer: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomainsDomain extends $tea.Model {
  remark?: string;
  createTime?: string;
  recordCount?: number;
  tags?: DescribeDomainsResponseBodyDomainsDomainTags;
  instanceId?: string;
  domainName?: string;
  domainId?: string;
  aliDomain?: boolean;
  groupId?: string;
  groupName?: string;
  resourceGroupId?: string;
  instanceEndTime?: string;
  instanceExpired?: boolean;
  versionName?: string;
  dnsServers?: DescribeDomainsResponseBodyDomainsDomainDnsServers;
  versionCode?: string;
  punyCode?: string;
  registrantEmail?: string;
  createTimestamp?: number;
  starmark?: boolean;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      createTime: 'CreateTime',
      recordCount: 'RecordCount',
      tags: 'Tags',
      instanceId: 'InstanceId',
      domainName: 'DomainName',
      domainId: 'DomainId',
      aliDomain: 'AliDomain',
      groupId: 'GroupId',
      groupName: 'GroupName',
      resourceGroupId: 'ResourceGroupId',
      instanceEndTime: 'InstanceEndTime',
      instanceExpired: 'InstanceExpired',
      versionName: 'VersionName',
      dnsServers: 'DnsServers',
      versionCode: 'VersionCode',
      punyCode: 'PunyCode',
      registrantEmail: 'RegistrantEmail',
      createTimestamp: 'CreateTimestamp',
      starmark: 'Starmark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      createTime: 'string',
      recordCount: 'number',
      tags: DescribeDomainsResponseBodyDomainsDomainTags,
      instanceId: 'string',
      domainName: 'string',
      domainId: 'string',
      aliDomain: 'boolean',
      groupId: 'string',
      groupName: 'string',
      resourceGroupId: 'string',
      instanceEndTime: 'string',
      instanceExpired: 'boolean',
      versionName: 'string',
      dnsServers: DescribeDomainsResponseBodyDomainsDomainDnsServers,
      versionCode: 'string',
      punyCode: 'string',
      registrantEmail: 'string',
      createTimestamp: 'number',
      starmark: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomains extends $tea.Model {
  domain?: DescribeDomainsResponseBodyDomainsDomain[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsDomain },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatisticsResponseBodyStatisticsStatistic extends $tea.Model {
  timestamp?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatisticsResponseBodyStatistics extends $tea.Model {
  statistic?: DescribeDomainStatisticsResponseBodyStatisticsStatistic[];
  static names(): { [key: string]: string } {
    return {
      statistic: 'Statistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistic: { 'type': 'array', 'itemType': DescribeDomainStatisticsResponseBodyStatisticsStatistic },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatisticsSummaryResponseBodyStatisticsStatistic extends $tea.Model {
  domainName?: string;
  count?: number;
  domainType?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      count: 'Count',
      domainType: 'DomainType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      count: 'number',
      domainType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatisticsSummaryResponseBodyStatistics extends $tea.Model {
  statistic?: DescribeDomainStatisticsSummaryResponseBodyStatisticsStatistic[];
  static names(): { [key: string]: string } {
    return {
      statistic: 'Statistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistic: { 'type': 'array', 'itemType': DescribeDomainStatisticsSummaryResponseBodyStatisticsStatistic },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine extends $tea.Model {
  groupName?: string;
  lineCode?: string;
  lineName?: string;
  groupCode?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
      groupCode: 'GroupCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
      groupCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLines extends $tea.Model {
  line?: DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategiesResponseBodyStrategiesStrategy extends $tea.Model {
  accessMode?: string;
  strategyName?: string;
  defaultAddrPoolMonitorStatus?: string;
  strategyMode?: string;
  createTime?: string;
  defaultAddrPoolStatus?: string;
  instanceId?: string;
  lines?: DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLines;
  failoverAddrPoolId?: string;
  defaultAddrPoolId?: string;
  strategyId?: string;
  failoverAddrPoolStatus?: string;
  accessStatus?: string;
  failoverAddrPoolMonitorStatus?: string;
  defaultAddrPoolName?: string;
  failoverAddrPoolName?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      strategyName: 'StrategyName',
      defaultAddrPoolMonitorStatus: 'DefaultAddrPoolMonitorStatus',
      strategyMode: 'StrategyMode',
      createTime: 'CreateTime',
      defaultAddrPoolStatus: 'DefaultAddrPoolStatus',
      instanceId: 'InstanceId',
      lines: 'Lines',
      failoverAddrPoolId: 'FailoverAddrPoolId',
      defaultAddrPoolId: 'DefaultAddrPoolId',
      strategyId: 'StrategyId',
      failoverAddrPoolStatus: 'FailoverAddrPoolStatus',
      accessStatus: 'AccessStatus',
      failoverAddrPoolMonitorStatus: 'FailoverAddrPoolMonitorStatus',
      defaultAddrPoolName: 'DefaultAddrPoolName',
      failoverAddrPoolName: 'FailoverAddrPoolName',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      strategyName: 'string',
      defaultAddrPoolMonitorStatus: 'string',
      strategyMode: 'string',
      createTime: 'string',
      defaultAddrPoolStatus: 'string',
      instanceId: 'string',
      lines: DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLines,
      failoverAddrPoolId: 'string',
      defaultAddrPoolId: 'string',
      strategyId: 'string',
      failoverAddrPoolStatus: 'string',
      accessStatus: 'string',
      failoverAddrPoolMonitorStatus: 'string',
      defaultAddrPoolName: 'string',
      failoverAddrPoolName: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategiesResponseBodyStrategies extends $tea.Model {
  strategy?: DescribeGtmAccessStrategiesResponseBodyStrategiesStrategy[];
  static names(): { [key: string]: string } {
    return {
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategy: { 'type': 'array', 'itemType': DescribeGtmAccessStrategiesResponseBodyStrategiesStrategy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyResponseBodyLinesLine extends $tea.Model {
  groupName?: string;
  lineCode?: string;
  lineName?: string;
  groupCode?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
      groupCode: 'GroupCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
      groupCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyResponseBodyLines extends $tea.Model {
  line?: DescribeGtmAccessStrategyResponseBodyLinesLine[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': DescribeGtmAccessStrategyResponseBodyLinesLine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPoolsAddrPool extends $tea.Model {
  addrPoolId?: string;
  addrPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      addrPoolName: 'AddrPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      addrPoolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPools extends $tea.Model {
  addrPool?: DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPoolsAddrPool[];
  static names(): { [key: string]: string } {
    return {
      addrPool: 'AddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPool: { 'type': 'array', 'itemType': DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPoolsAddrPool },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyAvailableConfigResponseBodyLinesLine extends $tea.Model {
  status?: string;
  fatherCode?: string;
  lineCode?: string;
  groupName?: string;
  lineName?: string;
  groupCode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      fatherCode: 'FatherCode',
      lineCode: 'LineCode',
      groupName: 'GroupName',
      lineName: 'LineName',
      groupCode: 'GroupCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      fatherCode: 'string',
      lineCode: 'string',
      groupName: 'string',
      lineName: 'string',
      groupCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyAvailableConfigResponseBodyLines extends $tea.Model {
  line?: DescribeGtmAccessStrategyAvailableConfigResponseBodyLinesLine[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': DescribeGtmAccessStrategyAvailableConfigResponseBodyLinesLine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceAddressPoolResponseBodyAddrsAddr extends $tea.Model {
  value?: string;
  updateTimestamp?: number;
  updateTime?: string;
  alertStatus?: string;
  lbaWeight?: number;
  createTime?: string;
  addrId?: number;
  mode?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      updateTimestamp: 'UpdateTimestamp',
      updateTime: 'UpdateTime',
      alertStatus: 'AlertStatus',
      lbaWeight: 'LbaWeight',
      createTime: 'CreateTime',
      addrId: 'AddrId',
      mode: 'Mode',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      updateTimestamp: 'number',
      updateTime: 'string',
      alertStatus: 'string',
      lbaWeight: 'number',
      createTime: 'string',
      addrId: 'number',
      mode: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceAddressPoolResponseBodyAddrs extends $tea.Model {
  addr?: DescribeGtmInstanceAddressPoolResponseBodyAddrsAddr[];
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': DescribeGtmInstanceAddressPoolResponseBodyAddrsAddr },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceAddressPoolsResponseBodyAddrPoolsAddrPool extends $tea.Model {
  type?: string;
  status?: string;
  updateTime?: string;
  createTime?: string;
  monitorConfigId?: string;
  minAvailableAddrNum?: number;
  updateTimestamp?: number;
  monitorStatus?: string;
  addrPoolId?: string;
  name?: string;
  addrCount?: number;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      monitorConfigId: 'MonitorConfigId',
      minAvailableAddrNum: 'MinAvailableAddrNum',
      updateTimestamp: 'UpdateTimestamp',
      monitorStatus: 'MonitorStatus',
      addrPoolId: 'AddrPoolId',
      name: 'Name',
      addrCount: 'AddrCount',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      updateTime: 'string',
      createTime: 'string',
      monitorConfigId: 'string',
      minAvailableAddrNum: 'number',
      updateTimestamp: 'number',
      monitorStatus: 'string',
      addrPoolId: 'string',
      name: 'string',
      addrCount: 'number',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceAddressPoolsResponseBodyAddrPools extends $tea.Model {
  addrPool?: DescribeGtmInstanceAddressPoolsResponseBodyAddrPoolsAddrPool[];
  static names(): { [key: string]: string } {
    return {
      addrPool: 'AddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPool: { 'type': 'array', 'itemType': DescribeGtmInstanceAddressPoolsResponseBodyAddrPoolsAddrPool },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstancesResponseBodyGtmInstancesGtmInstance extends $tea.Model {
  expireTime?: string;
  accessStrategyNum?: number;
  createTime?: string;
  cnameMode?: string;
  instanceId?: string;
  expireTimestamp?: number;
  ttl?: number;
  alertGroup?: string;
  addressPoolNum?: number;
  instanceName?: string;
  lbaStrategy?: string;
  cname?: string;
  versionCode?: string;
  userDomainName?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      accessStrategyNum: 'AccessStrategyNum',
      createTime: 'CreateTime',
      cnameMode: 'CnameMode',
      instanceId: 'InstanceId',
      expireTimestamp: 'ExpireTimestamp',
      ttl: 'Ttl',
      alertGroup: 'AlertGroup',
      addressPoolNum: 'AddressPoolNum',
      instanceName: 'InstanceName',
      lbaStrategy: 'LbaStrategy',
      cname: 'Cname',
      versionCode: 'VersionCode',
      userDomainName: 'UserDomainName',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      accessStrategyNum: 'number',
      createTime: 'string',
      cnameMode: 'string',
      instanceId: 'string',
      expireTimestamp: 'number',
      ttl: 'number',
      alertGroup: 'string',
      addressPoolNum: 'number',
      instanceName: 'string',
      lbaStrategy: 'string',
      cname: 'string',
      versionCode: 'string',
      userDomainName: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstancesResponseBodyGtmInstances extends $tea.Model {
  gtmInstance?: DescribeGtmInstancesResponseBodyGtmInstancesGtmInstance[];
  static names(): { [key: string]: string } {
    return {
      gtmInstance: 'GtmInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gtmInstance: { 'type': 'array', 'itemType': DescribeGtmInstancesResponseBodyGtmInstancesGtmInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmLogsResponseBodyLogsLog extends $tea.Model {
  operTimestamp?: number;
  entityId?: string;
  entityType?: string;
  operTime?: string;
  operIp?: string;
  operAction?: string;
  content?: string;
  entityName?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      operTimestamp: 'OperTimestamp',
      entityId: 'EntityId',
      entityType: 'EntityType',
      operTime: 'OperTime',
      operIp: 'OperIp',
      operAction: 'OperAction',
      content: 'Content',
      entityName: 'EntityName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operTimestamp: 'number',
      entityId: 'string',
      entityType: 'string',
      operTime: 'string',
      operIp: 'string',
      operAction: 'string',
      content: 'string',
      entityName: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmLogsResponseBodyLogs extends $tea.Model {
  log?: DescribeGtmLogsResponseBodyLogsLog[];
  static names(): { [key: string]: string } {
    return {
      log: 'Log',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log: { 'type': 'array', 'itemType': DescribeGtmLogsResponseBodyLogsLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodesIspCityNode extends $tea.Model {
  cityCode?: string;
  mainland?: boolean;
  groupName?: string;
  ispCode?: string;
  cityName?: string;
  ispName?: string;
  groupType?: string;
  defaultSelected?: boolean;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      mainland: 'Mainland',
      groupName: 'GroupName',
      ispCode: 'IspCode',
      cityName: 'CityName',
      ispName: 'IspName',
      groupType: 'GroupType',
      defaultSelected: 'DefaultSelected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      mainland: 'boolean',
      groupName: 'string',
      ispCode: 'string',
      cityName: 'string',
      ispName: 'string',
      groupType: 'string',
      defaultSelected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodes extends $tea.Model {
  ispCityNode?: DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodesIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCityNode: { 'type': 'array', 'itemType': DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodesIspCityNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmMonitorConfigResponseBodyIspCityNodesIspCityNode extends $tea.Model {
  cityCode?: string;
  countryName?: string;
  ispCode?: string;
  cityName?: string;
  countryCode?: string;
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      countryName: 'CountryName',
      ispCode: 'IspCode',
      cityName: 'CityName',
      countryCode: 'CountryCode',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      countryName: 'string',
      ispCode: 'string',
      cityName: 'string',
      countryCode: 'string',
      ispName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmMonitorConfigResponseBodyIspCityNodes extends $tea.Model {
  ispCityNode?: DescribeGtmMonitorConfigResponseBodyIspCityNodesIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCityNode: { 'type': 'array', 'itemType': DescribeGtmMonitorConfigResponseBodyIspCityNodesIspCityNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrsAddr extends $tea.Model {
  value?: string;
  mode?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      mode: 'Mode',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      mode: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrs extends $tea.Model {
  addr?: DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrsAddr[];
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrsAddr },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPool extends $tea.Model {
  addrs?: DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrs;
  addrPoolId?: string;
  instanceId?: string;
  addrPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      addrs: 'Addrs',
      addrPoolId: 'AddrPoolId',
      instanceId: 'InstanceId',
      addrPoolName: 'AddrPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrs: DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrs,
      addrPoolId: 'string',
      instanceId: 'string',
      addrPoolName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanResponseBodyFaultAddrPools extends $tea.Model {
  faultAddrPool?: DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPool[];
  static names(): { [key: string]: string } {
    return {
      faultAddrPool: 'FaultAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultAddrPool: { 'type': 'array', 'itemType': DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPool },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPoolsAddrPool extends $tea.Model {
  addrPoolId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPools extends $tea.Model {
  addrPool?: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPoolsAddrPool[];
  static names(): { [key: string]: string } {
    return {
      addrPool: 'AddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPool: { 'type': 'array', 'itemType': DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPoolsAddrPool },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstance extends $tea.Model {
  addrPools?: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPools;
  instanceName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      addrPools: 'AddrPools',
      instanceName: 'InstanceName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPools: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPools,
      instanceName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstances extends $tea.Model {
  instance?: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlansResponseBodyRecoveryPlansRecoveryPlan extends $tea.Model {
  status?: string;
  lastRollbackTimestamp?: number;
  updateTime?: string;
  remark?: string;
  createTime?: string;
  recoveryPlanId?: number;
  updateTimestamp?: number;
  lastExecuteTimestamp?: number;
  lastExecuteTime?: string;
  lastRollbackTime?: string;
  name?: string;
  faultAddrPoolNum?: number;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      lastRollbackTimestamp: 'LastRollbackTimestamp',
      updateTime: 'UpdateTime',
      remark: 'Remark',
      createTime: 'CreateTime',
      recoveryPlanId: 'RecoveryPlanId',
      updateTimestamp: 'UpdateTimestamp',
      lastExecuteTimestamp: 'LastExecuteTimestamp',
      lastExecuteTime: 'LastExecuteTime',
      lastRollbackTime: 'LastRollbackTime',
      name: 'Name',
      faultAddrPoolNum: 'FaultAddrPoolNum',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      lastRollbackTimestamp: 'number',
      updateTime: 'string',
      remark: 'string',
      createTime: 'string',
      recoveryPlanId: 'number',
      updateTimestamp: 'number',
      lastExecuteTimestamp: 'number',
      lastExecuteTime: 'string',
      lastRollbackTime: 'string',
      name: 'string',
      faultAddrPoolNum: 'number',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlansResponseBodyRecoveryPlans extends $tea.Model {
  recoveryPlan?: DescribeGtmRecoveryPlansResponseBodyRecoveryPlansRecoveryPlan[];
  static names(): { [key: string]: string } {
    return {
      recoveryPlan: 'RecoveryPlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recoveryPlan: { 'type': 'array', 'itemType': DescribeGtmRecoveryPlansResponseBodyRecoveryPlansRecoveryPlan },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDomainsResponseBodyInstanceDomains extends $tea.Model {
  createTime?: string;
  domainName?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainName: 'DomainName',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      domainName: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordLogsResponseBodyRecordLogsRecordLog extends $tea.Model {
  action?: string;
  actionTimestamp?: number;
  clientIp?: string;
  message?: string;
  actionTime?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionTimestamp: 'ActionTimestamp',
      clientIp: 'ClientIp',
      message: 'Message',
      actionTime: 'ActionTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionTimestamp: 'number',
      clientIp: 'string',
      message: 'string',
      actionTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordLogsResponseBodyRecordLogs extends $tea.Model {
  recordLog?: DescribeRecordLogsResponseBodyRecordLogsRecordLog[];
  static names(): { [key: string]: string } {
    return {
      recordLog: 'RecordLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordLog: { 'type': 'array', 'itemType': DescribeRecordLogsResponseBodyRecordLogsRecordLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordStatisticsResponseBodyStatisticsStatistic extends $tea.Model {
  timestamp?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordStatisticsResponseBodyStatistics extends $tea.Model {
  statistic?: DescribeRecordStatisticsResponseBodyStatisticsStatistic[];
  static names(): { [key: string]: string } {
    return {
      statistic: 'Statistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistic: { 'type': 'array', 'itemType': DescribeRecordStatisticsResponseBodyStatisticsStatistic },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordStatisticsSummaryResponseBodyStatisticsStatistic extends $tea.Model {
  subDomain?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      subDomain: 'SubDomain',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subDomain: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordStatisticsSummaryResponseBodyStatistics extends $tea.Model {
  statistic?: DescribeRecordStatisticsSummaryResponseBodyStatisticsStatistic[];
  static names(): { [key: string]: string } {
    return {
      statistic: 'Statistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistic: { 'type': 'array', 'itemType': DescribeRecordStatisticsSummaryResponseBodyStatisticsStatistic },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubDomainRecordsResponseBodyDomainRecordsRecord extends $tea.Model {
  status?: string;
  type?: string;
  weight?: number;
  value?: string;
  TTL?: number;
  line?: string;
  recordId?: string;
  priority?: number;
  RR?: string;
  domainName?: string;
  locked?: boolean;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      weight: 'Weight',
      value: 'Value',
      TTL: 'TTL',
      line: 'Line',
      recordId: 'RecordId',
      priority: 'Priority',
      RR: 'RR',
      domainName: 'DomainName',
      locked: 'Locked',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      weight: 'number',
      value: 'string',
      TTL: 'number',
      line: 'string',
      recordId: 'string',
      priority: 'number',
      RR: 'string',
      domainName: 'string',
      locked: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubDomainRecordsResponseBodyDomainRecords extends $tea.Model {
  record?: DescribeSubDomainRecordsResponseBodyDomainRecordsRecord[];
  static names(): { [key: string]: string } {
    return {
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: { 'type': 'array', 'itemType': DescribeSubDomainRecordsResponseBodyDomainRecordsRecord },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportLinesResponseBodyRecordLinesRecordLine extends $tea.Model {
  fatherCode?: string;
  lineDisplayName?: string;
  lineCode?: string;
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      lineDisplayName: 'LineDisplayName',
      lineCode: 'LineCode',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      lineDisplayName: 'string',
      lineCode: 'string',
      lineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportLinesResponseBodyRecordLines extends $tea.Model {
  recordLine?: DescribeSupportLinesResponseBodyRecordLinesRecordLine[];
  static names(): { [key: string]: string } {
    return {
      recordLine: 'RecordLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordLine: { 'type': 'array', 'itemType': DescribeSupportLinesResponseBodyRecordLinesRecordLine },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBodyTags extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransferDomainsResponseBodyDomainTransfersDomainTransfer extends $tea.Model {
  fromUserId?: number;
  createTime?: string;
  targetUserId?: number;
  domainName?: string;
  id?: number;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      fromUserId: 'FromUserId',
      createTime: 'CreateTime',
      targetUserId: 'TargetUserId',
      domainName: 'DomainName',
      id: 'Id',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromUserId: 'number',
      createTime: 'string',
      targetUserId: 'number',
      domainName: 'string',
      id: 'number',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransferDomainsResponseBodyDomainTransfers extends $tea.Model {
  domainTransfer?: DescribeTransferDomainsResponseBodyDomainTransfersDomainTransfer[];
  static names(): { [key: string]: string } {
    return {
      domainTransfer: 'DomainTransfer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTransfer: { 'type': 'array', 'itemType': DescribeTransferDomainsResponseBodyDomainTransfersDomainTransfer },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceType?: string;
  tagValue?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagValue: 'string',
      resourceId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHichinaDomainDNSResponseBodyNewDnsServers extends $tea.Model {
  dnsServer?: string[];
  static names(): { [key: string]: string } {
    return {
      dnsServer: 'DnsServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServer: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHichinaDomainDNSResponseBodyOriginalDnsServers extends $tea.Model {
  dnsServer?: string[];
  static names(): { [key: string]: string } {
    return {
      dnsServer: 'DnsServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServer: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateBatchDomainRequestDomainRecordInfo extends $tea.Model {
  type?: string;
  value?: string;
  ttl?: number;
  domain?: string;
  line?: string;
  newRr?: string;
  rr?: string;
  priority?: number;
  newType?: string;
  newValue?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
      ttl: 'Ttl',
      domain: 'Domain',
      line: 'Line',
      newRr: 'NewRr',
      rr: 'Rr',
      priority: 'Priority',
      newType: 'NewType',
      newValue: 'NewValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
      ttl: 'number',
      domain: 'string',
      line: 'string',
      newRr: 'string',
      rr: 'string',
      priority: 'number',
      newType: 'string',
      newValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfosSwitchInfo extends $tea.Model {
  strategyName?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      strategyName: 'StrategyName',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategyName: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfos extends $tea.Model {
  switchInfo?: PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfosSwitchInfo[];
  static names(): { [key: string]: string } {
    return {
      switchInfo: 'SwitchInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchInfo: { 'type': 'array', 'itemType': PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfosSwitchInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewGtmRecoveryPlanResponseBodyPreviewsPreview extends $tea.Model {
  instanceId?: string;
  switchInfos?: PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfos;
  name?: string;
  userDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      switchInfos: 'SwitchInfos',
      name: 'Name',
      userDomainName: 'UserDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      switchInfos: PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfos,
      name: 'string',
      userDomainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewGtmRecoveryPlanResponseBodyPreviews extends $tea.Model {
  preview?: PreviewGtmRecoveryPlanResponseBodyPreviewsPreview[];
  static names(): { [key: string]: string } {
    return {
      preview: 'Preview',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preview: { 'type': 'array', 'itemType': PreviewGtmRecoveryPlanResponseBodyPreviewsPreview },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomLineRequestIpSegment extends $tea.Model {
  endIp?: string;
  startIp?: string;
  static names(): { [key: string]: string } {
    return {
      endIp: 'EndIp',
      startIp: 'StartIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIp: 'string',
      startIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsCacheDomainRequestSourceDnsServer extends $tea.Model {
  host?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmAccessStrategyRequestDefaultAddrPool extends $tea.Model {
  lbaWeight?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      lbaWeight: 'LbaWeight',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lbaWeight: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmAccessStrategyRequestFailoverAddrPool extends $tea.Model {
  lbaWeight?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      lbaWeight: 'LbaWeight',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lbaWeight: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmAddressPoolRequestAddr extends $tea.Model {
  attributeInfo?: string;
  remark?: string;
  lbaWeight?: number;
  addr?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      attributeInfo: 'AttributeInfo',
      remark: 'Remark',
      lbaWeight: 'LbaWeight',
      addr: 'Addr',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeInfo: 'string',
      remark: 'string',
      lbaWeight: 'number',
      addr: 'string',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmInstanceGlobalConfigRequestAlertConfig extends $tea.Model {
  smsNotice?: boolean;
  noticeType?: string;
  emailNotice?: boolean;
  static names(): { [key: string]: string } {
    return {
      smsNotice: 'SmsNotice',
      noticeType: 'NoticeType',
      emailNotice: 'EmailNotice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smsNotice: 'boolean',
      noticeType: 'string',
      emailNotice: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmMonitorRequestIspCityNode extends $tea.Model {
  cityCode?: string;
  ispCode?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      ispCode: 'IspCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      ispCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmAddressPoolRequestAddr extends $tea.Model {
  value?: string;
  lbaWeight?: number;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      lbaWeight: 'LbaWeight',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      lbaWeight: 'number',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmMonitorRequestIspCityNode extends $tea.Model {
  cityCode?: string;
  ispCode?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      ispCode: 'IspCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      ispCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'ap-northeast-1': "alidns.ap-northeast-1.aliyuncs.com",
      'ap-northeast-2-pop': "dns.aliyuncs.com",
      'ap-south-1': "alidns.ap-south-1.aliyuncs.com",
      'ap-southeast-1': "alidns.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "alidns.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "alidns.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "alidns.ap-southeast-5.aliyuncs.com",
      'cn-beijing': "alidns.cn-beijing.aliyuncs.com",
      'cn-beijing-finance-1': "dns.aliyuncs.com",
      'cn-beijing-finance-pop': "dns.aliyuncs.com",
      'cn-beijing-gov-1': "dns.aliyuncs.com",
      'cn-beijing-nu16-b01': "dns.aliyuncs.com",
      'cn-chengdu': "alidns.cn-chengdu.aliyuncs.com",
      'cn-edge-1': "dns.aliyuncs.com",
      'cn-fujian': "dns.aliyuncs.com",
      'cn-haidian-cm12-c01': "dns.aliyuncs.com",
      'cn-hangzhou': "alidns.cn-hangzhou.aliyuncs.com",
      'cn-hangzhou-bj-b01': "dns.aliyuncs.com",
      'cn-hangzhou-finance': "alidns.cn-hangzhou-finance.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "dns.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "dns.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "dns.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "dns.aliyuncs.com",
      'cn-hangzhou-test-306': "dns.aliyuncs.com",
      'cn-hongkong': "alidns.cn-hongkong.aliyuncs.com",
      'cn-hongkong-finance-pop': "dns.aliyuncs.com",
      'cn-huhehaote': "alidns.cn-huhehaote.aliyuncs.com",
      'cn-huhehaote-nebula-1': "dns.aliyuncs.com",
      'cn-north-2-gov-1': "alidns.cn-north-2-gov-1.aliyuncs.com",
      'cn-qingdao': "dns.aliyuncs.com",
      'cn-qingdao-nebula': "dns.aliyuncs.com",
      'cn-shanghai': "alidns.cn-shanghai.aliyuncs.com",
      'cn-shanghai-et15-b01': "dns.aliyuncs.com",
      'cn-shanghai-et2-b01': "dns.aliyuncs.com",
      'cn-shanghai-finance-1': "alidns.cn-shanghai-finance-1.aliyuncs.com",
      'cn-shanghai-inner': "dns.aliyuncs.com",
      'cn-shanghai-internal-test-1': "dns.aliyuncs.com",
      'cn-shenzhen': "alidns.cn-shenzhen.aliyuncs.com",
      'cn-shenzhen-finance-1': "alidns.cn-shenzhen-finance-1.aliyuncs.com",
      'cn-shenzhen-inner': "dns.aliyuncs.com",
      'cn-shenzhen-st4-d01': "dns.aliyuncs.com",
      'cn-shenzhen-su18-b01': "dns.aliyuncs.com",
      'cn-wuhan': "dns.aliyuncs.com",
      'cn-wulanchabu': "dns.aliyuncs.com",
      'cn-yushanfang': "dns.aliyuncs.com",
      'cn-zhangbei': "dns.aliyuncs.com",
      'cn-zhangbei-na61-b01': "dns.aliyuncs.com",
      'cn-zhangjiakou': "alidns.cn-zhangjiakou.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "dns.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "dns.aliyuncs.com",
      'eu-central-1': "alidns.eu-central-1.aliyuncs.com",
      'eu-west-1': "alidns.eu-west-1.aliyuncs.com",
      'eu-west-1-oxs': "dns.aliyuncs.com",
      'me-east-1': "alidns.me-east-1.aliyuncs.com",
      'rus-west-1-pop': "dns.aliyuncs.com",
      'us-east-1': "alidns.us-east-1.aliyuncs.com",
      'us-west-1': "alidns.us-west-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("alidns", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async addCustomLineWithOptions(request: AddCustomLineRequest, runtime: $Util.RuntimeOptions): Promise<AddCustomLineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddCustomLineResponse>(await this.doRPCRequest("AddCustomLine", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new AddCustomLineResponse({}));
  }

  async addCustomLine(request: AddCustomLineRequest): Promise<AddCustomLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCustomLineWithOptions(request, runtime);
  }

  async addDnsCacheDomainWithOptions(request: AddDnsCacheDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddDnsCacheDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddDnsCacheDomainResponse>(await this.doRPCRequest("AddDnsCacheDomain", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new AddDnsCacheDomainResponse({}));
  }

  async addDnsCacheDomain(request: AddDnsCacheDomainRequest): Promise<AddDnsCacheDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDnsCacheDomainWithOptions(request, runtime);
  }

  async addDnsGtmAccessStrategyWithOptions(request: AddDnsGtmAccessStrategyRequest, runtime: $Util.RuntimeOptions): Promise<AddDnsGtmAccessStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddDnsGtmAccessStrategyResponse>(await this.doRPCRequest("AddDnsGtmAccessStrategy", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new AddDnsGtmAccessStrategyResponse({}));
  }

  async addDnsGtmAccessStrategy(request: AddDnsGtmAccessStrategyRequest): Promise<AddDnsGtmAccessStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDnsGtmAccessStrategyWithOptions(request, runtime);
  }

  async addDnsGtmAddressPoolWithOptions(request: AddDnsGtmAddressPoolRequest, runtime: $Util.RuntimeOptions): Promise<AddDnsGtmAddressPoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddDnsGtmAddressPoolResponse>(await this.doRPCRequest("AddDnsGtmAddressPool", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new AddDnsGtmAddressPoolResponse({}));
  }

  async addDnsGtmAddressPool(request: AddDnsGtmAddressPoolRequest): Promise<AddDnsGtmAddressPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDnsGtmAddressPoolWithOptions(request, runtime);
  }

  async addDnsGtmMonitorWithOptions(request: AddDnsGtmMonitorRequest, runtime: $Util.RuntimeOptions): Promise<AddDnsGtmMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddDnsGtmMonitorResponse>(await this.doRPCRequest("AddDnsGtmMonitor", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new AddDnsGtmMonitorResponse({}));
  }

  async addDnsGtmMonitor(request: AddDnsGtmMonitorRequest): Promise<AddDnsGtmMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDnsGtmMonitorWithOptions(request, runtime);
  }

  async addDomainWithOptions(request: AddDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddDomainResponse>(await this.doRPCRequest("AddDomain", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new AddDomainResponse({}));
  }

  async addDomain(request: AddDomainRequest): Promise<AddDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDomainWithOptions(request, runtime);
  }

  async addDomainBackupWithOptions(request: AddDomainBackupRequest, runtime: $Util.RuntimeOptions): Promise<AddDomainBackupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddDomainBackupResponse>(await this.doRPCRequest("AddDomainBackup", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new AddDomainBackupResponse({}));
  }

  async addDomainBackup(request: AddDomainBackupRequest): Promise<AddDomainBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDomainBackupWithOptions(request, runtime);
  }

  async addDomainGroupWithOptions(request: AddDomainGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddDomainGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddDomainGroupResponse>(await this.doRPCRequest("AddDomainGroup", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new AddDomainGroupResponse({}));
  }

  async addDomainGroup(request: AddDomainGroupRequest): Promise<AddDomainGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDomainGroupWithOptions(request, runtime);
  }

  async addDomainRecordWithOptions(request: AddDomainRecordRequest, runtime: $Util.RuntimeOptions): Promise<AddDomainRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddDomainRecordResponse>(await this.doRPCRequest("AddDomainRecord", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new AddDomainRecordResponse({}));
  }

  async addDomainRecord(request: AddDomainRecordRequest): Promise<AddDomainRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDomainRecordWithOptions(request, runtime);
  }

  async addGtmAccessStrategyWithOptions(request: AddGtmAccessStrategyRequest, runtime: $Util.RuntimeOptions): Promise<AddGtmAccessStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddGtmAccessStrategyResponse>(await this.doRPCRequest("AddGtmAccessStrategy", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new AddGtmAccessStrategyResponse({}));
  }

  async addGtmAccessStrategy(request: AddGtmAccessStrategyRequest): Promise<AddGtmAccessStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGtmAccessStrategyWithOptions(request, runtime);
  }

  async addGtmAddressPoolWithOptions(request: AddGtmAddressPoolRequest, runtime: $Util.RuntimeOptions): Promise<AddGtmAddressPoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddGtmAddressPoolResponse>(await this.doRPCRequest("AddGtmAddressPool", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new AddGtmAddressPoolResponse({}));
  }

  async addGtmAddressPool(request: AddGtmAddressPoolRequest): Promise<AddGtmAddressPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGtmAddressPoolWithOptions(request, runtime);
  }

  async addGtmMonitorWithOptions(request: AddGtmMonitorRequest, runtime: $Util.RuntimeOptions): Promise<AddGtmMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddGtmMonitorResponse>(await this.doRPCRequest("AddGtmMonitor", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new AddGtmMonitorResponse({}));
  }

  async addGtmMonitor(request: AddGtmMonitorRequest): Promise<AddGtmMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGtmMonitorWithOptions(request, runtime);
  }

  async addGtmRecoveryPlanWithOptions(request: AddGtmRecoveryPlanRequest, runtime: $Util.RuntimeOptions): Promise<AddGtmRecoveryPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddGtmRecoveryPlanResponse>(await this.doRPCRequest("AddGtmRecoveryPlan", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new AddGtmRecoveryPlanResponse({}));
  }

  async addGtmRecoveryPlan(request: AddGtmRecoveryPlanRequest): Promise<AddGtmRecoveryPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGtmRecoveryPlanWithOptions(request, runtime);
  }

  async bindInstanceDomainsWithOptions(request: BindInstanceDomainsRequest, runtime: $Util.RuntimeOptions): Promise<BindInstanceDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindInstanceDomainsResponse>(await this.doRPCRequest("BindInstanceDomains", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new BindInstanceDomainsResponse({}));
  }

  async bindInstanceDomains(request: BindInstanceDomainsRequest): Promise<BindInstanceDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindInstanceDomainsWithOptions(request, runtime);
  }

  async changeDomainGroupWithOptions(request: ChangeDomainGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeDomainGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeDomainGroupResponse>(await this.doRPCRequest("ChangeDomainGroup", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeDomainGroupResponse({}));
  }

  async changeDomainGroup(request: ChangeDomainGroupRequest): Promise<ChangeDomainGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeDomainGroupWithOptions(request, runtime);
  }

  async changeDomainOfDnsProductWithOptions(request: ChangeDomainOfDnsProductRequest, runtime: $Util.RuntimeOptions): Promise<ChangeDomainOfDnsProductResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChangeDomainOfDnsProductResponse>(await this.doRPCRequest("ChangeDomainOfDnsProduct", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new ChangeDomainOfDnsProductResponse({}));
  }

  async changeDomainOfDnsProduct(request: ChangeDomainOfDnsProductRequest): Promise<ChangeDomainOfDnsProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeDomainOfDnsProductWithOptions(request, runtime);
  }

  async copyGtmConfigWithOptions(request: CopyGtmConfigRequest, runtime: $Util.RuntimeOptions): Promise<CopyGtmConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CopyGtmConfigResponse>(await this.doRPCRequest("CopyGtmConfig", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new CopyGtmConfigResponse({}));
  }

  async copyGtmConfig(request: CopyGtmConfigRequest): Promise<CopyGtmConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyGtmConfigWithOptions(request, runtime);
  }

  async deleteCustomLinesWithOptions(request: DeleteCustomLinesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomLinesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCustomLinesResponse>(await this.doRPCRequest("DeleteCustomLines", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCustomLinesResponse({}));
  }

  async deleteCustomLines(request: DeleteCustomLinesRequest): Promise<DeleteCustomLinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomLinesWithOptions(request, runtime);
  }

  async deleteDnsCacheDomainWithOptions(request: DeleteDnsCacheDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDnsCacheDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDnsCacheDomainResponse>(await this.doRPCRequest("DeleteDnsCacheDomain", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDnsCacheDomainResponse({}));
  }

  async deleteDnsCacheDomain(request: DeleteDnsCacheDomainRequest): Promise<DeleteDnsCacheDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDnsCacheDomainWithOptions(request, runtime);
  }

  async deleteDnsGtmAccessStrategyWithOptions(request: DeleteDnsGtmAccessStrategyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDnsGtmAccessStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDnsGtmAccessStrategyResponse>(await this.doRPCRequest("DeleteDnsGtmAccessStrategy", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDnsGtmAccessStrategyResponse({}));
  }

  async deleteDnsGtmAccessStrategy(request: DeleteDnsGtmAccessStrategyRequest): Promise<DeleteDnsGtmAccessStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDnsGtmAccessStrategyWithOptions(request, runtime);
  }

  async deleteDnsGtmAddressPoolWithOptions(request: DeleteDnsGtmAddressPoolRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDnsGtmAddressPoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDnsGtmAddressPoolResponse>(await this.doRPCRequest("DeleteDnsGtmAddressPool", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDnsGtmAddressPoolResponse({}));
  }

  async deleteDnsGtmAddressPool(request: DeleteDnsGtmAddressPoolRequest): Promise<DeleteDnsGtmAddressPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDnsGtmAddressPoolWithOptions(request, runtime);
  }

  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDomainResponse>(await this.doRPCRequest("DeleteDomain", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDomainResponse({}));
  }

  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  async deleteDomainGroupWithOptions(request: DeleteDomainGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDomainGroupResponse>(await this.doRPCRequest("DeleteDomainGroup", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDomainGroupResponse({}));
  }

  async deleteDomainGroup(request: DeleteDomainGroupRequest): Promise<DeleteDomainGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainGroupWithOptions(request, runtime);
  }

  async deleteDomainRecordWithOptions(request: DeleteDomainRecordRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDomainRecordResponse>(await this.doRPCRequest("DeleteDomainRecord", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDomainRecordResponse({}));
  }

  async deleteDomainRecord(request: DeleteDomainRecordRequest): Promise<DeleteDomainRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainRecordWithOptions(request, runtime);
  }

  async deleteGtmAccessStrategyWithOptions(request: DeleteGtmAccessStrategyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGtmAccessStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteGtmAccessStrategyResponse>(await this.doRPCRequest("DeleteGtmAccessStrategy", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteGtmAccessStrategyResponse({}));
  }

  async deleteGtmAccessStrategy(request: DeleteGtmAccessStrategyRequest): Promise<DeleteGtmAccessStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGtmAccessStrategyWithOptions(request, runtime);
  }

  async deleteGtmAddressPoolWithOptions(request: DeleteGtmAddressPoolRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGtmAddressPoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteGtmAddressPoolResponse>(await this.doRPCRequest("DeleteGtmAddressPool", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteGtmAddressPoolResponse({}));
  }

  async deleteGtmAddressPool(request: DeleteGtmAddressPoolRequest): Promise<DeleteGtmAddressPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGtmAddressPoolWithOptions(request, runtime);
  }

  async deleteGtmRecoveryPlanWithOptions(request: DeleteGtmRecoveryPlanRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGtmRecoveryPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteGtmRecoveryPlanResponse>(await this.doRPCRequest("DeleteGtmRecoveryPlan", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteGtmRecoveryPlanResponse({}));
  }

  async deleteGtmRecoveryPlan(request: DeleteGtmRecoveryPlanRequest): Promise<DeleteGtmRecoveryPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGtmRecoveryPlanWithOptions(request, runtime);
  }

  async deleteSubDomainRecordsWithOptions(request: DeleteSubDomainRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSubDomainRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSubDomainRecordsResponse>(await this.doRPCRequest("DeleteSubDomainRecords", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSubDomainRecordsResponse({}));
  }

  async deleteSubDomainRecords(request: DeleteSubDomainRecordsRequest): Promise<DeleteSubDomainRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSubDomainRecordsWithOptions(request, runtime);
  }

  async describeBatchResultCountWithOptions(request: DescribeBatchResultCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBatchResultCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBatchResultCountResponse>(await this.doRPCRequest("DescribeBatchResultCount", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBatchResultCountResponse({}));
  }

  async describeBatchResultCount(request: DescribeBatchResultCountRequest): Promise<DescribeBatchResultCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBatchResultCountWithOptions(request, runtime);
  }

  async describeBatchResultDetailWithOptions(request: DescribeBatchResultDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBatchResultDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBatchResultDetailResponse>(await this.doRPCRequest("DescribeBatchResultDetail", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBatchResultDetailResponse({}));
  }

  async describeBatchResultDetail(request: DescribeBatchResultDetailRequest): Promise<DescribeBatchResultDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBatchResultDetailWithOptions(request, runtime);
  }

  async describeCustomLineWithOptions(request: DescribeCustomLineRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomLineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCustomLineResponse>(await this.doRPCRequest("DescribeCustomLine", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCustomLineResponse({}));
  }

  async describeCustomLine(request: DescribeCustomLineRequest): Promise<DescribeCustomLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomLineWithOptions(request, runtime);
  }

  async describeCustomLinesWithOptions(request: DescribeCustomLinesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomLinesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCustomLinesResponse>(await this.doRPCRequest("DescribeCustomLines", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCustomLinesResponse({}));
  }

  async describeCustomLines(request: DescribeCustomLinesRequest): Promise<DescribeCustomLinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomLinesWithOptions(request, runtime);
  }

  async describeDnsCacheDomainsWithOptions(request: DescribeDnsCacheDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsCacheDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnsCacheDomainsResponse>(await this.doRPCRequest("DescribeDnsCacheDomains", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnsCacheDomainsResponse({}));
  }

  async describeDnsCacheDomains(request: DescribeDnsCacheDomainsRequest): Promise<DescribeDnsCacheDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsCacheDomainsWithOptions(request, runtime);
  }

  async describeDnsGtmAccessStrategiesWithOptions(request: DescribeDnsGtmAccessStrategiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmAccessStrategiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnsGtmAccessStrategiesResponse>(await this.doRPCRequest("DescribeDnsGtmAccessStrategies", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnsGtmAccessStrategiesResponse({}));
  }

  async describeDnsGtmAccessStrategies(request: DescribeDnsGtmAccessStrategiesRequest): Promise<DescribeDnsGtmAccessStrategiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmAccessStrategiesWithOptions(request, runtime);
  }

  async describeDnsGtmAccessStrategyWithOptions(request: DescribeDnsGtmAccessStrategyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmAccessStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnsGtmAccessStrategyResponse>(await this.doRPCRequest("DescribeDnsGtmAccessStrategy", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnsGtmAccessStrategyResponse({}));
  }

  async describeDnsGtmAccessStrategy(request: DescribeDnsGtmAccessStrategyRequest): Promise<DescribeDnsGtmAccessStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmAccessStrategyWithOptions(request, runtime);
  }

  async describeDnsGtmAccessStrategyAvailableConfigWithOptions(request: DescribeDnsGtmAccessStrategyAvailableConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmAccessStrategyAvailableConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnsGtmAccessStrategyAvailableConfigResponse>(await this.doRPCRequest("DescribeDnsGtmAccessStrategyAvailableConfig", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnsGtmAccessStrategyAvailableConfigResponse({}));
  }

  async describeDnsGtmAccessStrategyAvailableConfig(request: DescribeDnsGtmAccessStrategyAvailableConfigRequest): Promise<DescribeDnsGtmAccessStrategyAvailableConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmAccessStrategyAvailableConfigWithOptions(request, runtime);
  }

  async describeDnsGtmAddrAttributeInfoWithOptions(request: DescribeDnsGtmAddrAttributeInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmAddrAttributeInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnsGtmAddrAttributeInfoResponse>(await this.doRPCRequest("DescribeDnsGtmAddrAttributeInfo", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnsGtmAddrAttributeInfoResponse({}));
  }

  async describeDnsGtmAddrAttributeInfo(request: DescribeDnsGtmAddrAttributeInfoRequest): Promise<DescribeDnsGtmAddrAttributeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmAddrAttributeInfoWithOptions(request, runtime);
  }

  async describeDnsGtmAddressPoolAvailableConfigWithOptions(request: DescribeDnsGtmAddressPoolAvailableConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmAddressPoolAvailableConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnsGtmAddressPoolAvailableConfigResponse>(await this.doRPCRequest("DescribeDnsGtmAddressPoolAvailableConfig", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnsGtmAddressPoolAvailableConfigResponse({}));
  }

  async describeDnsGtmAddressPoolAvailableConfig(request: DescribeDnsGtmAddressPoolAvailableConfigRequest): Promise<DescribeDnsGtmAddressPoolAvailableConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmAddressPoolAvailableConfigWithOptions(request, runtime);
  }

  async describeDnsGtmAvailableAlertGroupWithOptions(request: DescribeDnsGtmAvailableAlertGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmAvailableAlertGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnsGtmAvailableAlertGroupResponse>(await this.doRPCRequest("DescribeDnsGtmAvailableAlertGroup", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnsGtmAvailableAlertGroupResponse({}));
  }

  async describeDnsGtmAvailableAlertGroup(request: DescribeDnsGtmAvailableAlertGroupRequest): Promise<DescribeDnsGtmAvailableAlertGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmAvailableAlertGroupWithOptions(request, runtime);
  }

  async describeDnsGtmInstanceWithOptions(request: DescribeDnsGtmInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnsGtmInstanceResponse>(await this.doRPCRequest("DescribeDnsGtmInstance", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnsGtmInstanceResponse({}));
  }

  async describeDnsGtmInstance(request: DescribeDnsGtmInstanceRequest): Promise<DescribeDnsGtmInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmInstanceWithOptions(request, runtime);
  }

  async describeDnsGtmInstanceAddressPoolWithOptions(request: DescribeDnsGtmInstanceAddressPoolRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmInstanceAddressPoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnsGtmInstanceAddressPoolResponse>(await this.doRPCRequest("DescribeDnsGtmInstanceAddressPool", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnsGtmInstanceAddressPoolResponse({}));
  }

  async describeDnsGtmInstanceAddressPool(request: DescribeDnsGtmInstanceAddressPoolRequest): Promise<DescribeDnsGtmInstanceAddressPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmInstanceAddressPoolWithOptions(request, runtime);
  }

  async describeDnsGtmInstanceAddressPoolsWithOptions(request: DescribeDnsGtmInstanceAddressPoolsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmInstanceAddressPoolsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnsGtmInstanceAddressPoolsResponse>(await this.doRPCRequest("DescribeDnsGtmInstanceAddressPools", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnsGtmInstanceAddressPoolsResponse({}));
  }

  async describeDnsGtmInstanceAddressPools(request: DescribeDnsGtmInstanceAddressPoolsRequest): Promise<DescribeDnsGtmInstanceAddressPoolsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmInstanceAddressPoolsWithOptions(request, runtime);
  }

  async describeDnsGtmInstancesWithOptions(request: DescribeDnsGtmInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnsGtmInstancesResponse>(await this.doRPCRequest("DescribeDnsGtmInstances", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnsGtmInstancesResponse({}));
  }

  async describeDnsGtmInstances(request: DescribeDnsGtmInstancesRequest): Promise<DescribeDnsGtmInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmInstancesWithOptions(request, runtime);
  }

  async describeDnsGtmInstanceStatusWithOptions(request: DescribeDnsGtmInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmInstanceStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnsGtmInstanceStatusResponse>(await this.doRPCRequest("DescribeDnsGtmInstanceStatus", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnsGtmInstanceStatusResponse({}));
  }

  async describeDnsGtmInstanceStatus(request: DescribeDnsGtmInstanceStatusRequest): Promise<DescribeDnsGtmInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmInstanceStatusWithOptions(request, runtime);
  }

  async describeDnsGtmInstanceSystemCnameWithOptions(request: DescribeDnsGtmInstanceSystemCnameRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmInstanceSystemCnameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnsGtmInstanceSystemCnameResponse>(await this.doRPCRequest("DescribeDnsGtmInstanceSystemCname", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnsGtmInstanceSystemCnameResponse({}));
  }

  async describeDnsGtmInstanceSystemCname(request: DescribeDnsGtmInstanceSystemCnameRequest): Promise<DescribeDnsGtmInstanceSystemCnameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmInstanceSystemCnameWithOptions(request, runtime);
  }

  async describeDnsGtmLogsWithOptions(request: DescribeDnsGtmLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnsGtmLogsResponse>(await this.doRPCRequest("DescribeDnsGtmLogs", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnsGtmLogsResponse({}));
  }

  async describeDnsGtmLogs(request: DescribeDnsGtmLogsRequest): Promise<DescribeDnsGtmLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmLogsWithOptions(request, runtime);
  }

  async describeDnsGtmMonitorAvailableConfigWithOptions(request: DescribeDnsGtmMonitorAvailableConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmMonitorAvailableConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnsGtmMonitorAvailableConfigResponse>(await this.doRPCRequest("DescribeDnsGtmMonitorAvailableConfig", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnsGtmMonitorAvailableConfigResponse({}));
  }

  async describeDnsGtmMonitorAvailableConfig(request: DescribeDnsGtmMonitorAvailableConfigRequest): Promise<DescribeDnsGtmMonitorAvailableConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmMonitorAvailableConfigWithOptions(request, runtime);
  }

  async describeDnsGtmMonitorConfigWithOptions(request: DescribeDnsGtmMonitorConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmMonitorConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnsGtmMonitorConfigResponse>(await this.doRPCRequest("DescribeDnsGtmMonitorConfig", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnsGtmMonitorConfigResponse({}));
  }

  async describeDnsGtmMonitorConfig(request: DescribeDnsGtmMonitorConfigRequest): Promise<DescribeDnsGtmMonitorConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmMonitorConfigWithOptions(request, runtime);
  }

  async describeDnsProductInstanceWithOptions(request: DescribeDnsProductInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsProductInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnsProductInstanceResponse>(await this.doRPCRequest("DescribeDnsProductInstance", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnsProductInstanceResponse({}));
  }

  async describeDnsProductInstance(request: DescribeDnsProductInstanceRequest): Promise<DescribeDnsProductInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsProductInstanceWithOptions(request, runtime);
  }

  async describeDnsProductInstancesWithOptions(request: DescribeDnsProductInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsProductInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDnsProductInstancesResponse>(await this.doRPCRequest("DescribeDnsProductInstances", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDnsProductInstancesResponse({}));
  }

  async describeDnsProductInstances(request: DescribeDnsProductInstancesRequest): Promise<DescribeDnsProductInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsProductInstancesWithOptions(request, runtime);
  }

  async describeDNSSLBSubDomainsWithOptions(request: DescribeDNSSLBSubDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDNSSLBSubDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDNSSLBSubDomainsResponse>(await this.doRPCRequest("DescribeDNSSLBSubDomains", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDNSSLBSubDomainsResponse({}));
  }

  async describeDNSSLBSubDomains(request: DescribeDNSSLBSubDomainsRequest): Promise<DescribeDNSSLBSubDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDNSSLBSubDomainsWithOptions(request, runtime);
  }

  async describeDohAccountStatisticsWithOptions(request: DescribeDohAccountStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDohAccountStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDohAccountStatisticsResponse>(await this.doRPCRequest("DescribeDohAccountStatistics", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDohAccountStatisticsResponse({}));
  }

  async describeDohAccountStatistics(request: DescribeDohAccountStatisticsRequest): Promise<DescribeDohAccountStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDohAccountStatisticsWithOptions(request, runtime);
  }

  async describeDohDomainStatisticsWithOptions(request: DescribeDohDomainStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDohDomainStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDohDomainStatisticsResponse>(await this.doRPCRequest("DescribeDohDomainStatistics", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDohDomainStatisticsResponse({}));
  }

  async describeDohDomainStatistics(request: DescribeDohDomainStatisticsRequest): Promise<DescribeDohDomainStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDohDomainStatisticsWithOptions(request, runtime);
  }

  async describeDohDomainStatisticsSummaryWithOptions(request: DescribeDohDomainStatisticsSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDohDomainStatisticsSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDohDomainStatisticsSummaryResponse>(await this.doRPCRequest("DescribeDohDomainStatisticsSummary", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDohDomainStatisticsSummaryResponse({}));
  }

  async describeDohDomainStatisticsSummary(request: DescribeDohDomainStatisticsSummaryRequest): Promise<DescribeDohDomainStatisticsSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDohDomainStatisticsSummaryWithOptions(request, runtime);
  }

  async describeDohSubDomainStatisticsWithOptions(request: DescribeDohSubDomainStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDohSubDomainStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDohSubDomainStatisticsResponse>(await this.doRPCRequest("DescribeDohSubDomainStatistics", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDohSubDomainStatisticsResponse({}));
  }

  async describeDohSubDomainStatistics(request: DescribeDohSubDomainStatisticsRequest): Promise<DescribeDohSubDomainStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDohSubDomainStatisticsWithOptions(request, runtime);
  }

  async describeDohSubDomainStatisticsSummaryWithOptions(request: DescribeDohSubDomainStatisticsSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDohSubDomainStatisticsSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDohSubDomainStatisticsSummaryResponse>(await this.doRPCRequest("DescribeDohSubDomainStatisticsSummary", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDohSubDomainStatisticsSummaryResponse({}));
  }

  async describeDohSubDomainStatisticsSummary(request: DescribeDohSubDomainStatisticsSummaryRequest): Promise<DescribeDohSubDomainStatisticsSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDohSubDomainStatisticsSummaryWithOptions(request, runtime);
  }

  async describeDohUserInfoWithOptions(request: DescribeDohUserInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDohUserInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDohUserInfoResponse>(await this.doRPCRequest("DescribeDohUserInfo", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDohUserInfoResponse({}));
  }

  async describeDohUserInfo(request: DescribeDohUserInfoRequest): Promise<DescribeDohUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDohUserInfoWithOptions(request, runtime);
  }

  async describeDomainDnssecInfoWithOptions(request: DescribeDomainDnssecInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainDnssecInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainDnssecInfoResponse>(await this.doRPCRequest("DescribeDomainDnssecInfo", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainDnssecInfoResponse({}));
  }

  async describeDomainDnssecInfo(request: DescribeDomainDnssecInfoRequest): Promise<DescribeDomainDnssecInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainDnssecInfoWithOptions(request, runtime);
  }

  async describeDomainGroupsWithOptions(request: DescribeDomainGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainGroupsResponse>(await this.doRPCRequest("DescribeDomainGroups", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainGroupsResponse({}));
  }

  async describeDomainGroups(request: DescribeDomainGroupsRequest): Promise<DescribeDomainGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainGroupsWithOptions(request, runtime);
  }

  async describeDomainInfoWithOptions(request: DescribeDomainInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainInfoResponse>(await this.doRPCRequest("DescribeDomainInfo", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainInfoResponse({}));
  }

  async describeDomainInfo(request: DescribeDomainInfoRequest): Promise<DescribeDomainInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainInfoWithOptions(request, runtime);
  }

  async describeDomainLogsWithOptions(request: DescribeDomainLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainLogsResponse>(await this.doRPCRequest("DescribeDomainLogs", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainLogsResponse({}));
  }

  async describeDomainLogs(request: DescribeDomainLogsRequest): Promise<DescribeDomainLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainLogsWithOptions(request, runtime);
  }

  async describeDomainNsWithOptions(request: DescribeDomainNsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainNsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainNsResponse>(await this.doRPCRequest("DescribeDomainNs", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainNsResponse({}));
  }

  async describeDomainNs(request: DescribeDomainNsRequest): Promise<DescribeDomainNsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainNsWithOptions(request, runtime);
  }

  async describeDomainRecordInfoWithOptions(request: DescribeDomainRecordInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRecordInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainRecordInfoResponse>(await this.doRPCRequest("DescribeDomainRecordInfo", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainRecordInfoResponse({}));
  }

  async describeDomainRecordInfo(request: DescribeDomainRecordInfoRequest): Promise<DescribeDomainRecordInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRecordInfoWithOptions(request, runtime);
  }

  async describeDomainRecordsWithOptions(request: DescribeDomainRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainRecordsResponse>(await this.doRPCRequest("DescribeDomainRecords", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainRecordsResponse({}));
  }

  async describeDomainRecords(request: DescribeDomainRecordsRequest): Promise<DescribeDomainRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRecordsWithOptions(request, runtime);
  }

  async describeDomainsWithOptions(request: DescribeDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainsResponse>(await this.doRPCRequest("DescribeDomains", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainsResponse({}));
  }

  async describeDomains(request: DescribeDomainsRequest): Promise<DescribeDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  async describeDomainStatisticsWithOptions(request: DescribeDomainStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainStatisticsResponse>(await this.doRPCRequest("DescribeDomainStatistics", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainStatisticsResponse({}));
  }

  async describeDomainStatistics(request: DescribeDomainStatisticsRequest): Promise<DescribeDomainStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainStatisticsWithOptions(request, runtime);
  }

  async describeDomainStatisticsSummaryWithOptions(request: DescribeDomainStatisticsSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainStatisticsSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainStatisticsSummaryResponse>(await this.doRPCRequest("DescribeDomainStatisticsSummary", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainStatisticsSummaryResponse({}));
  }

  async describeDomainStatisticsSummary(request: DescribeDomainStatisticsSummaryRequest): Promise<DescribeDomainStatisticsSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainStatisticsSummaryWithOptions(request, runtime);
  }

  async describeGtmAccessStrategiesWithOptions(request: DescribeGtmAccessStrategiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmAccessStrategiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGtmAccessStrategiesResponse>(await this.doRPCRequest("DescribeGtmAccessStrategies", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGtmAccessStrategiesResponse({}));
  }

  async describeGtmAccessStrategies(request: DescribeGtmAccessStrategiesRequest): Promise<DescribeGtmAccessStrategiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmAccessStrategiesWithOptions(request, runtime);
  }

  async describeGtmAccessStrategyWithOptions(request: DescribeGtmAccessStrategyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmAccessStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGtmAccessStrategyResponse>(await this.doRPCRequest("DescribeGtmAccessStrategy", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGtmAccessStrategyResponse({}));
  }

  async describeGtmAccessStrategy(request: DescribeGtmAccessStrategyRequest): Promise<DescribeGtmAccessStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmAccessStrategyWithOptions(request, runtime);
  }

  async describeGtmAccessStrategyAvailableConfigWithOptions(request: DescribeGtmAccessStrategyAvailableConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmAccessStrategyAvailableConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGtmAccessStrategyAvailableConfigResponse>(await this.doRPCRequest("DescribeGtmAccessStrategyAvailableConfig", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGtmAccessStrategyAvailableConfigResponse({}));
  }

  async describeGtmAccessStrategyAvailableConfig(request: DescribeGtmAccessStrategyAvailableConfigRequest): Promise<DescribeGtmAccessStrategyAvailableConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmAccessStrategyAvailableConfigWithOptions(request, runtime);
  }

  async describeGtmAvailableAlertGroupWithOptions(request: DescribeGtmAvailableAlertGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmAvailableAlertGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGtmAvailableAlertGroupResponse>(await this.doRPCRequest("DescribeGtmAvailableAlertGroup", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGtmAvailableAlertGroupResponse({}));
  }

  async describeGtmAvailableAlertGroup(request: DescribeGtmAvailableAlertGroupRequest): Promise<DescribeGtmAvailableAlertGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmAvailableAlertGroupWithOptions(request, runtime);
  }

  async describeGtmInstanceWithOptions(request: DescribeGtmInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGtmInstanceResponse>(await this.doRPCRequest("DescribeGtmInstance", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGtmInstanceResponse({}));
  }

  async describeGtmInstance(request: DescribeGtmInstanceRequest): Promise<DescribeGtmInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmInstanceWithOptions(request, runtime);
  }

  async describeGtmInstanceAddressPoolWithOptions(request: DescribeGtmInstanceAddressPoolRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmInstanceAddressPoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGtmInstanceAddressPoolResponse>(await this.doRPCRequest("DescribeGtmInstanceAddressPool", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGtmInstanceAddressPoolResponse({}));
  }

  async describeGtmInstanceAddressPool(request: DescribeGtmInstanceAddressPoolRequest): Promise<DescribeGtmInstanceAddressPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmInstanceAddressPoolWithOptions(request, runtime);
  }

  async describeGtmInstanceAddressPoolsWithOptions(request: DescribeGtmInstanceAddressPoolsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmInstanceAddressPoolsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGtmInstanceAddressPoolsResponse>(await this.doRPCRequest("DescribeGtmInstanceAddressPools", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGtmInstanceAddressPoolsResponse({}));
  }

  async describeGtmInstanceAddressPools(request: DescribeGtmInstanceAddressPoolsRequest): Promise<DescribeGtmInstanceAddressPoolsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmInstanceAddressPoolsWithOptions(request, runtime);
  }

  async describeGtmInstancesWithOptions(request: DescribeGtmInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGtmInstancesResponse>(await this.doRPCRequest("DescribeGtmInstances", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGtmInstancesResponse({}));
  }

  async describeGtmInstances(request: DescribeGtmInstancesRequest): Promise<DescribeGtmInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmInstancesWithOptions(request, runtime);
  }

  async describeGtmInstanceStatusWithOptions(request: DescribeGtmInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmInstanceStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGtmInstanceStatusResponse>(await this.doRPCRequest("DescribeGtmInstanceStatus", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGtmInstanceStatusResponse({}));
  }

  async describeGtmInstanceStatus(request: DescribeGtmInstanceStatusRequest): Promise<DescribeGtmInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmInstanceStatusWithOptions(request, runtime);
  }

  async describeGtmInstanceSystemCnameWithOptions(request: DescribeGtmInstanceSystemCnameRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmInstanceSystemCnameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGtmInstanceSystemCnameResponse>(await this.doRPCRequest("DescribeGtmInstanceSystemCname", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGtmInstanceSystemCnameResponse({}));
  }

  async describeGtmInstanceSystemCname(request: DescribeGtmInstanceSystemCnameRequest): Promise<DescribeGtmInstanceSystemCnameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmInstanceSystemCnameWithOptions(request, runtime);
  }

  async describeGtmLogsWithOptions(request: DescribeGtmLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGtmLogsResponse>(await this.doRPCRequest("DescribeGtmLogs", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGtmLogsResponse({}));
  }

  async describeGtmLogs(request: DescribeGtmLogsRequest): Promise<DescribeGtmLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmLogsWithOptions(request, runtime);
  }

  async describeGtmMonitorAvailableConfigWithOptions(request: DescribeGtmMonitorAvailableConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmMonitorAvailableConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGtmMonitorAvailableConfigResponse>(await this.doRPCRequest("DescribeGtmMonitorAvailableConfig", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGtmMonitorAvailableConfigResponse({}));
  }

  async describeGtmMonitorAvailableConfig(request: DescribeGtmMonitorAvailableConfigRequest): Promise<DescribeGtmMonitorAvailableConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmMonitorAvailableConfigWithOptions(request, runtime);
  }

  async describeGtmMonitorConfigWithOptions(request: DescribeGtmMonitorConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmMonitorConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGtmMonitorConfigResponse>(await this.doRPCRequest("DescribeGtmMonitorConfig", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGtmMonitorConfigResponse({}));
  }

  async describeGtmMonitorConfig(request: DescribeGtmMonitorConfigRequest): Promise<DescribeGtmMonitorConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmMonitorConfigWithOptions(request, runtime);
  }

  async describeGtmRecoveryPlanWithOptions(request: DescribeGtmRecoveryPlanRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmRecoveryPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGtmRecoveryPlanResponse>(await this.doRPCRequest("DescribeGtmRecoveryPlan", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGtmRecoveryPlanResponse({}));
  }

  async describeGtmRecoveryPlan(request: DescribeGtmRecoveryPlanRequest): Promise<DescribeGtmRecoveryPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmRecoveryPlanWithOptions(request, runtime);
  }

  async describeGtmRecoveryPlanAvailableConfigWithOptions(request: DescribeGtmRecoveryPlanAvailableConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmRecoveryPlanAvailableConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGtmRecoveryPlanAvailableConfigResponse>(await this.doRPCRequest("DescribeGtmRecoveryPlanAvailableConfig", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGtmRecoveryPlanAvailableConfigResponse({}));
  }

  async describeGtmRecoveryPlanAvailableConfig(request: DescribeGtmRecoveryPlanAvailableConfigRequest): Promise<DescribeGtmRecoveryPlanAvailableConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmRecoveryPlanAvailableConfigWithOptions(request, runtime);
  }

  async describeGtmRecoveryPlansWithOptions(request: DescribeGtmRecoveryPlansRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmRecoveryPlansResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGtmRecoveryPlansResponse>(await this.doRPCRequest("DescribeGtmRecoveryPlans", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGtmRecoveryPlansResponse({}));
  }

  async describeGtmRecoveryPlans(request: DescribeGtmRecoveryPlansRequest): Promise<DescribeGtmRecoveryPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmRecoveryPlansWithOptions(request, runtime);
  }

  async describeInstanceDomainsWithOptions(request: DescribeInstanceDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceDomainsResponse>(await this.doRPCRequest("DescribeInstanceDomains", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceDomainsResponse({}));
  }

  async describeInstanceDomains(request: DescribeInstanceDomainsRequest): Promise<DescribeInstanceDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceDomainsWithOptions(request, runtime);
  }

  async describeRecordLogsWithOptions(request: DescribeRecordLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRecordLogsResponse>(await this.doRPCRequest("DescribeRecordLogs", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRecordLogsResponse({}));
  }

  async describeRecordLogs(request: DescribeRecordLogsRequest): Promise<DescribeRecordLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordLogsWithOptions(request, runtime);
  }

  async describeRecordStatisticsWithOptions(request: DescribeRecordStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRecordStatisticsResponse>(await this.doRPCRequest("DescribeRecordStatistics", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRecordStatisticsResponse({}));
  }

  async describeRecordStatistics(request: DescribeRecordStatisticsRequest): Promise<DescribeRecordStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordStatisticsWithOptions(request, runtime);
  }

  async describeRecordStatisticsSummaryWithOptions(request: DescribeRecordStatisticsSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordStatisticsSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRecordStatisticsSummaryResponse>(await this.doRPCRequest("DescribeRecordStatisticsSummary", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRecordStatisticsSummaryResponse({}));
  }

  async describeRecordStatisticsSummary(request: DescribeRecordStatisticsSummaryRequest): Promise<DescribeRecordStatisticsSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordStatisticsSummaryWithOptions(request, runtime);
  }

  async describeSubDomainRecordsWithOptions(request: DescribeSubDomainRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSubDomainRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSubDomainRecordsResponse>(await this.doRPCRequest("DescribeSubDomainRecords", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSubDomainRecordsResponse({}));
  }

  async describeSubDomainRecords(request: DescribeSubDomainRecordsRequest): Promise<DescribeSubDomainRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSubDomainRecordsWithOptions(request, runtime);
  }

  async describeSupportLinesWithOptions(request: DescribeSupportLinesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSupportLinesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSupportLinesResponse>(await this.doRPCRequest("DescribeSupportLines", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSupportLinesResponse({}));
  }

  async describeSupportLines(request: DescribeSupportLinesRequest): Promise<DescribeSupportLinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSupportLinesWithOptions(request, runtime);
  }

  async describeTagsWithOptions(request: DescribeTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTagsResponse>(await this.doRPCRequest("DescribeTags", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTagsResponse({}));
  }

  async describeTags(request: DescribeTagsRequest): Promise<DescribeTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  async describeTransferDomainsWithOptions(request: DescribeTransferDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTransferDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTransferDomainsResponse>(await this.doRPCRequest("DescribeTransferDomains", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTransferDomainsResponse({}));
  }

  async describeTransferDomains(request: DescribeTransferDomainsRequest): Promise<DescribeTransferDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTransferDomainsWithOptions(request, runtime);
  }

  async executeGtmRecoveryPlanWithOptions(request: ExecuteGtmRecoveryPlanRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteGtmRecoveryPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteGtmRecoveryPlanResponse>(await this.doRPCRequest("ExecuteGtmRecoveryPlan", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteGtmRecoveryPlanResponse({}));
  }

  async executeGtmRecoveryPlan(request: ExecuteGtmRecoveryPlanRequest): Promise<ExecuteGtmRecoveryPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeGtmRecoveryPlanWithOptions(request, runtime);
  }

  async getMainDomainNameWithOptions(request: GetMainDomainNameRequest, runtime: $Util.RuntimeOptions): Promise<GetMainDomainNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetMainDomainNameResponse>(await this.doRPCRequest("GetMainDomainName", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new GetMainDomainNameResponse({}));
  }

  async getMainDomainName(request: GetMainDomainNameRequest): Promise<GetMainDomainNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMainDomainNameWithOptions(request, runtime);
  }

  async getTxtRecordForVerifyWithOptions(request: GetTxtRecordForVerifyRequest, runtime: $Util.RuntimeOptions): Promise<GetTxtRecordForVerifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTxtRecordForVerifyResponse>(await this.doRPCRequest("GetTxtRecordForVerify", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new GetTxtRecordForVerifyResponse({}));
  }

  async getTxtRecordForVerify(request: GetTxtRecordForVerifyRequest): Promise<GetTxtRecordForVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTxtRecordForVerifyWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async modifyHichinaDomainDNSWithOptions(request: ModifyHichinaDomainDNSRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHichinaDomainDNSResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHichinaDomainDNSResponse>(await this.doRPCRequest("ModifyHichinaDomainDNS", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHichinaDomainDNSResponse({}));
  }

  async modifyHichinaDomainDNS(request: ModifyHichinaDomainDNSRequest): Promise<ModifyHichinaDomainDNSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHichinaDomainDNSWithOptions(request, runtime);
  }

  async moveDomainResourceGroupWithOptions(request: MoveDomainResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveDomainResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MoveDomainResourceGroupResponse>(await this.doRPCRequest("MoveDomainResourceGroup", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new MoveDomainResourceGroupResponse({}));
  }

  async moveDomainResourceGroup(request: MoveDomainResourceGroupRequest): Promise<MoveDomainResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveDomainResourceGroupWithOptions(request, runtime);
  }

  async moveGtmResourceGroupWithOptions(request: MoveGtmResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveGtmResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MoveGtmResourceGroupResponse>(await this.doRPCRequest("MoveGtmResourceGroup", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new MoveGtmResourceGroupResponse({}));
  }

  async moveGtmResourceGroup(request: MoveGtmResourceGroupRequest): Promise<MoveGtmResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveGtmResourceGroupWithOptions(request, runtime);
  }

  async operateBatchDomainWithOptions(request: OperateBatchDomainRequest, runtime: $Util.RuntimeOptions): Promise<OperateBatchDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OperateBatchDomainResponse>(await this.doRPCRequest("OperateBatchDomain", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new OperateBatchDomainResponse({}));
  }

  async operateBatchDomain(request: OperateBatchDomainRequest): Promise<OperateBatchDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateBatchDomainWithOptions(request, runtime);
  }

  async previewGtmRecoveryPlanWithOptions(request: PreviewGtmRecoveryPlanRequest, runtime: $Util.RuntimeOptions): Promise<PreviewGtmRecoveryPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PreviewGtmRecoveryPlanResponse>(await this.doRPCRequest("PreviewGtmRecoveryPlan", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new PreviewGtmRecoveryPlanResponse({}));
  }

  async previewGtmRecoveryPlan(request: PreviewGtmRecoveryPlanRequest): Promise<PreviewGtmRecoveryPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.previewGtmRecoveryPlanWithOptions(request, runtime);
  }

  async retrieveDomainWithOptions(request: RetrieveDomainRequest, runtime: $Util.RuntimeOptions): Promise<RetrieveDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RetrieveDomainResponse>(await this.doRPCRequest("RetrieveDomain", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new RetrieveDomainResponse({}));
  }

  async retrieveDomain(request: RetrieveDomainRequest): Promise<RetrieveDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retrieveDomainWithOptions(request, runtime);
  }

  async rollbackGtmRecoveryPlanWithOptions(request: RollbackGtmRecoveryPlanRequest, runtime: $Util.RuntimeOptions): Promise<RollbackGtmRecoveryPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RollbackGtmRecoveryPlanResponse>(await this.doRPCRequest("RollbackGtmRecoveryPlan", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new RollbackGtmRecoveryPlanResponse({}));
  }

  async rollbackGtmRecoveryPlan(request: RollbackGtmRecoveryPlanRequest): Promise<RollbackGtmRecoveryPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackGtmRecoveryPlanWithOptions(request, runtime);
  }

  async setDnsGtmAccessModeWithOptions(request: SetDnsGtmAccessModeRequest, runtime: $Util.RuntimeOptions): Promise<SetDnsGtmAccessModeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDnsGtmAccessModeResponse>(await this.doRPCRequest("SetDnsGtmAccessMode", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new SetDnsGtmAccessModeResponse({}));
  }

  async setDnsGtmAccessMode(request: SetDnsGtmAccessModeRequest): Promise<SetDnsGtmAccessModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDnsGtmAccessModeWithOptions(request, runtime);
  }

  async setDnsGtmMonitorStatusWithOptions(request: SetDnsGtmMonitorStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetDnsGtmMonitorStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDnsGtmMonitorStatusResponse>(await this.doRPCRequest("SetDnsGtmMonitorStatus", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new SetDnsGtmMonitorStatusResponse({}));
  }

  async setDnsGtmMonitorStatus(request: SetDnsGtmMonitorStatusRequest): Promise<SetDnsGtmMonitorStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDnsGtmMonitorStatusWithOptions(request, runtime);
  }

  async setDNSSLBStatusWithOptions(request: SetDNSSLBStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetDNSSLBStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDNSSLBStatusResponse>(await this.doRPCRequest("SetDNSSLBStatus", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new SetDNSSLBStatusResponse({}));
  }

  async setDNSSLBStatus(request: SetDNSSLBStatusRequest): Promise<SetDNSSLBStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDNSSLBStatusWithOptions(request, runtime);
  }

  async setDomainDnssecStatusWithOptions(request: SetDomainDnssecStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainDnssecStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDomainDnssecStatusResponse>(await this.doRPCRequest("SetDomainDnssecStatus", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new SetDomainDnssecStatusResponse({}));
  }

  async setDomainDnssecStatus(request: SetDomainDnssecStatusRequest): Promise<SetDomainDnssecStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainDnssecStatusWithOptions(request, runtime);
  }

  async setDomainRecordStatusWithOptions(request: SetDomainRecordStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainRecordStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDomainRecordStatusResponse>(await this.doRPCRequest("SetDomainRecordStatus", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new SetDomainRecordStatusResponse({}));
  }

  async setDomainRecordStatus(request: SetDomainRecordStatusRequest): Promise<SetDomainRecordStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainRecordStatusWithOptions(request, runtime);
  }

  async setGtmAccessModeWithOptions(request: SetGtmAccessModeRequest, runtime: $Util.RuntimeOptions): Promise<SetGtmAccessModeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetGtmAccessModeResponse>(await this.doRPCRequest("SetGtmAccessMode", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new SetGtmAccessModeResponse({}));
  }

  async setGtmAccessMode(request: SetGtmAccessModeRequest): Promise<SetGtmAccessModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGtmAccessModeWithOptions(request, runtime);
  }

  async setGtmMonitorStatusWithOptions(request: SetGtmMonitorStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetGtmMonitorStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetGtmMonitorStatusResponse>(await this.doRPCRequest("SetGtmMonitorStatus", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new SetGtmMonitorStatusResponse({}));
  }

  async setGtmMonitorStatus(request: SetGtmMonitorStatusRequest): Promise<SetGtmMonitorStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGtmMonitorStatusWithOptions(request, runtime);
  }

  async switchDnsGtmInstanceStrategyModeWithOptions(request: SwitchDnsGtmInstanceStrategyModeRequest, runtime: $Util.RuntimeOptions): Promise<SwitchDnsGtmInstanceStrategyModeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SwitchDnsGtmInstanceStrategyModeResponse>(await this.doRPCRequest("SwitchDnsGtmInstanceStrategyMode", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new SwitchDnsGtmInstanceStrategyModeResponse({}));
  }

  async switchDnsGtmInstanceStrategyMode(request: SwitchDnsGtmInstanceStrategyModeRequest): Promise<SwitchDnsGtmInstanceStrategyModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchDnsGtmInstanceStrategyModeWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async transferDomainWithOptions(request: TransferDomainRequest, runtime: $Util.RuntimeOptions): Promise<TransferDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TransferDomainResponse>(await this.doRPCRequest("TransferDomain", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new TransferDomainResponse({}));
  }

  async transferDomain(request: TransferDomainRequest): Promise<TransferDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferDomainWithOptions(request, runtime);
  }

  async unbindInstanceDomainsWithOptions(request: UnbindInstanceDomainsRequest, runtime: $Util.RuntimeOptions): Promise<UnbindInstanceDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindInstanceDomainsResponse>(await this.doRPCRequest("UnbindInstanceDomains", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindInstanceDomainsResponse({}));
  }

  async unbindInstanceDomains(request: UnbindInstanceDomainsRequest): Promise<UnbindInstanceDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindInstanceDomainsWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateCustomLineWithOptions(request: UpdateCustomLineRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCustomLineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCustomLineResponse>(await this.doRPCRequest("UpdateCustomLine", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCustomLineResponse({}));
  }

  async updateCustomLine(request: UpdateCustomLineRequest): Promise<UpdateCustomLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomLineWithOptions(request, runtime);
  }

  async updateDnsCacheDomainWithOptions(request: UpdateDnsCacheDomainRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDnsCacheDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDnsCacheDomainResponse>(await this.doRPCRequest("UpdateDnsCacheDomain", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDnsCacheDomainResponse({}));
  }

  async updateDnsCacheDomain(request: UpdateDnsCacheDomainRequest): Promise<UpdateDnsCacheDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDnsCacheDomainWithOptions(request, runtime);
  }

  async updateDnsCacheDomainRemarkWithOptions(request: UpdateDnsCacheDomainRemarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDnsCacheDomainRemarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDnsCacheDomainRemarkResponse>(await this.doRPCRequest("UpdateDnsCacheDomainRemark", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDnsCacheDomainRemarkResponse({}));
  }

  async updateDnsCacheDomainRemark(request: UpdateDnsCacheDomainRemarkRequest): Promise<UpdateDnsCacheDomainRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDnsCacheDomainRemarkWithOptions(request, runtime);
  }

  async updateDnsGtmAccessStrategyWithOptions(request: UpdateDnsGtmAccessStrategyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDnsGtmAccessStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDnsGtmAccessStrategyResponse>(await this.doRPCRequest("UpdateDnsGtmAccessStrategy", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDnsGtmAccessStrategyResponse({}));
  }

  async updateDnsGtmAccessStrategy(request: UpdateDnsGtmAccessStrategyRequest): Promise<UpdateDnsGtmAccessStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDnsGtmAccessStrategyWithOptions(request, runtime);
  }

  async updateDnsGtmAddressPoolWithOptions(request: UpdateDnsGtmAddressPoolRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDnsGtmAddressPoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDnsGtmAddressPoolResponse>(await this.doRPCRequest("UpdateDnsGtmAddressPool", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDnsGtmAddressPoolResponse({}));
  }

  async updateDnsGtmAddressPool(request: UpdateDnsGtmAddressPoolRequest): Promise<UpdateDnsGtmAddressPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDnsGtmAddressPoolWithOptions(request, runtime);
  }

  async updateDnsGtmInstanceGlobalConfigWithOptions(request: UpdateDnsGtmInstanceGlobalConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDnsGtmInstanceGlobalConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDnsGtmInstanceGlobalConfigResponse>(await this.doRPCRequest("UpdateDnsGtmInstanceGlobalConfig", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDnsGtmInstanceGlobalConfigResponse({}));
  }

  async updateDnsGtmInstanceGlobalConfig(request: UpdateDnsGtmInstanceGlobalConfigRequest): Promise<UpdateDnsGtmInstanceGlobalConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDnsGtmInstanceGlobalConfigWithOptions(request, runtime);
  }

  async updateDnsGtmMonitorWithOptions(request: UpdateDnsGtmMonitorRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDnsGtmMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDnsGtmMonitorResponse>(await this.doRPCRequest("UpdateDnsGtmMonitor", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDnsGtmMonitorResponse({}));
  }

  async updateDnsGtmMonitor(request: UpdateDnsGtmMonitorRequest): Promise<UpdateDnsGtmMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDnsGtmMonitorWithOptions(request, runtime);
  }

  async updateDNSSLBWeightWithOptions(request: UpdateDNSSLBWeightRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDNSSLBWeightResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDNSSLBWeightResponse>(await this.doRPCRequest("UpdateDNSSLBWeight", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDNSSLBWeightResponse({}));
  }

  async updateDNSSLBWeight(request: UpdateDNSSLBWeightRequest): Promise<UpdateDNSSLBWeightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDNSSLBWeightWithOptions(request, runtime);
  }

  async updateDomainGroupWithOptions(request: UpdateDomainGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDomainGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDomainGroupResponse>(await this.doRPCRequest("UpdateDomainGroup", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDomainGroupResponse({}));
  }

  async updateDomainGroup(request: UpdateDomainGroupRequest): Promise<UpdateDomainGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDomainGroupWithOptions(request, runtime);
  }

  async updateDomainRecordWithOptions(request: UpdateDomainRecordRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDomainRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDomainRecordResponse>(await this.doRPCRequest("UpdateDomainRecord", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDomainRecordResponse({}));
  }

  async updateDomainRecord(request: UpdateDomainRecordRequest): Promise<UpdateDomainRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDomainRecordWithOptions(request, runtime);
  }

  async updateDomainRecordRemarkWithOptions(request: UpdateDomainRecordRemarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDomainRecordRemarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDomainRecordRemarkResponse>(await this.doRPCRequest("UpdateDomainRecordRemark", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDomainRecordRemarkResponse({}));
  }

  async updateDomainRecordRemark(request: UpdateDomainRecordRemarkRequest): Promise<UpdateDomainRecordRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDomainRecordRemarkWithOptions(request, runtime);
  }

  async updateDomainRemarkWithOptions(request: UpdateDomainRemarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDomainRemarkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDomainRemarkResponse>(await this.doRPCRequest("UpdateDomainRemark", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDomainRemarkResponse({}));
  }

  async updateDomainRemark(request: UpdateDomainRemarkRequest): Promise<UpdateDomainRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDomainRemarkWithOptions(request, runtime);
  }

  async updateGtmAccessStrategyWithOptions(request: UpdateGtmAccessStrategyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGtmAccessStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateGtmAccessStrategyResponse>(await this.doRPCRequest("UpdateGtmAccessStrategy", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateGtmAccessStrategyResponse({}));
  }

  async updateGtmAccessStrategy(request: UpdateGtmAccessStrategyRequest): Promise<UpdateGtmAccessStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGtmAccessStrategyWithOptions(request, runtime);
  }

  async updateGtmAddressPoolWithOptions(request: UpdateGtmAddressPoolRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGtmAddressPoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateGtmAddressPoolResponse>(await this.doRPCRequest("UpdateGtmAddressPool", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateGtmAddressPoolResponse({}));
  }

  async updateGtmAddressPool(request: UpdateGtmAddressPoolRequest): Promise<UpdateGtmAddressPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGtmAddressPoolWithOptions(request, runtime);
  }

  async updateGtmInstanceGlobalConfigWithOptions(request: UpdateGtmInstanceGlobalConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGtmInstanceGlobalConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateGtmInstanceGlobalConfigResponse>(await this.doRPCRequest("UpdateGtmInstanceGlobalConfig", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateGtmInstanceGlobalConfigResponse({}));
  }

  async updateGtmInstanceGlobalConfig(request: UpdateGtmInstanceGlobalConfigRequest): Promise<UpdateGtmInstanceGlobalConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGtmInstanceGlobalConfigWithOptions(request, runtime);
  }

  async updateGtmMonitorWithOptions(request: UpdateGtmMonitorRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGtmMonitorResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateGtmMonitorResponse>(await this.doRPCRequest("UpdateGtmMonitor", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateGtmMonitorResponse({}));
  }

  async updateGtmMonitor(request: UpdateGtmMonitorRequest): Promise<UpdateGtmMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGtmMonitorWithOptions(request, runtime);
  }

  async updateGtmRecoveryPlanWithOptions(request: UpdateGtmRecoveryPlanRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGtmRecoveryPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateGtmRecoveryPlanResponse>(await this.doRPCRequest("UpdateGtmRecoveryPlan", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateGtmRecoveryPlanResponse({}));
  }

  async updateGtmRecoveryPlan(request: UpdateGtmRecoveryPlanRequest): Promise<UpdateGtmRecoveryPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGtmRecoveryPlanWithOptions(request, runtime);
  }

  async validateDnsGtmAttributeInfoWithOptions(request: ValidateDnsGtmAttributeInfoRequest, runtime: $Util.RuntimeOptions): Promise<ValidateDnsGtmAttributeInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ValidateDnsGtmAttributeInfoResponse>(await this.doRPCRequest("ValidateDnsGtmAttributeInfo", "2015-01-09", "HTTPS", "POST", "AK", "json", req, runtime), new ValidateDnsGtmAttributeInfoResponse({}));
  }

  async validateDnsGtmAttributeInfo(request: ValidateDnsGtmAttributeInfoRequest): Promise<ValidateDnsGtmAttributeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateDnsGtmAttributeInfoWithOptions(request, runtime);
  }

}
