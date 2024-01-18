// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddCustomLineRequest extends $tea.Model {
  domainName?: string;
  ipSegment?: AddCustomLineRequestIpSegment[];
  lang?: string;
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ipSegment: 'IpSegment',
      lang: 'Lang',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ipSegment: { 'type': 'array', 'itemType': AddCustomLineRequestIpSegment },
      lang: 'string',
      lineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomLineResponseBody extends $tea.Model {
  lineCode?: string;
  lineId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lineCode: 'LineCode',
      lineId: 'LineId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineCode: 'string',
      lineId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddCustomLineResponseBody;
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
      body: AddCustomLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsCacheDomainRequest extends $tea.Model {
  cacheTtlMax?: number;
  cacheTtlMin?: number;
  domainName?: string;
  instanceId?: string;
  lang?: string;
  remark?: string;
  sourceDnsServer?: AddDnsCacheDomainRequestSourceDnsServer[];
  sourceEdns?: string;
  sourceProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      cacheTtlMax: 'CacheTtlMax',
      cacheTtlMin: 'CacheTtlMin',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      lang: 'Lang',
      remark: 'Remark',
      sourceDnsServer: 'SourceDnsServer',
      sourceEdns: 'SourceEdns',
      sourceProtocol: 'SourceProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheTtlMax: 'number',
      cacheTtlMin: 'number',
      domainName: 'string',
      instanceId: 'string',
      lang: 'string',
      remark: 'string',
      sourceDnsServer: { 'type': 'array', 'itemType': AddDnsCacheDomainRequestSourceDnsServer },
      sourceEdns: 'string',
      sourceProtocol: 'string',
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
  statusCode: number;
  body: AddDnsCacheDomainResponseBody;
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
      body: AddDnsCacheDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAccessStrategyRequest extends $tea.Model {
  defaultAddrPool?: AddDnsGtmAccessStrategyRequestDefaultAddrPool[];
  defaultAddrPoolType?: string;
  defaultLatencyOptimization?: string;
  defaultLbaStrategy?: string;
  defaultMaxReturnAddrNum?: number;
  defaultMinAvailableAddrNum?: number;
  failoverAddrPool?: AddDnsGtmAccessStrategyRequestFailoverAddrPool[];
  failoverAddrPoolType?: string;
  failoverLatencyOptimization?: string;
  failoverLbaStrategy?: string;
  failoverMaxReturnAddrNum?: number;
  failoverMinAvailableAddrNum?: number;
  instanceId?: string;
  lang?: string;
  lines?: string;
  strategyMode?: string;
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      defaultAddrPool: 'DefaultAddrPool',
      defaultAddrPoolType: 'DefaultAddrPoolType',
      defaultLatencyOptimization: 'DefaultLatencyOptimization',
      defaultLbaStrategy: 'DefaultLbaStrategy',
      defaultMaxReturnAddrNum: 'DefaultMaxReturnAddrNum',
      defaultMinAvailableAddrNum: 'DefaultMinAvailableAddrNum',
      failoverAddrPool: 'FailoverAddrPool',
      failoverAddrPoolType: 'FailoverAddrPoolType',
      failoverLatencyOptimization: 'FailoverLatencyOptimization',
      failoverLbaStrategy: 'FailoverLbaStrategy',
      failoverMaxReturnAddrNum: 'FailoverMaxReturnAddrNum',
      failoverMinAvailableAddrNum: 'FailoverMinAvailableAddrNum',
      instanceId: 'InstanceId',
      lang: 'Lang',
      lines: 'Lines',
      strategyMode: 'StrategyMode',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultAddrPool: { 'type': 'array', 'itemType': AddDnsGtmAccessStrategyRequestDefaultAddrPool },
      defaultAddrPoolType: 'string',
      defaultLatencyOptimization: 'string',
      defaultLbaStrategy: 'string',
      defaultMaxReturnAddrNum: 'number',
      defaultMinAvailableAddrNum: 'number',
      failoverAddrPool: { 'type': 'array', 'itemType': AddDnsGtmAccessStrategyRequestFailoverAddrPool },
      failoverAddrPoolType: 'string',
      failoverLatencyOptimization: 'string',
      failoverLbaStrategy: 'string',
      failoverMaxReturnAddrNum: 'number',
      failoverMinAvailableAddrNum: 'number',
      instanceId: 'string',
      lang: 'string',
      lines: 'string',
      strategyMode: 'string',
      strategyName: 'string',
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
  statusCode: number;
  body: AddDnsGtmAccessStrategyResponseBody;
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
      body: AddDnsGtmAccessStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAddressPoolRequest extends $tea.Model {
  addr?: AddDnsGtmAddressPoolRequestAddr[];
  evaluationCount?: number;
  instanceId?: string;
  interval?: number;
  ispCityNode?: AddDnsGtmAddressPoolRequestIspCityNode[];
  lang?: string;
  lbaStrategy?: string;
  monitorExtendInfo?: string;
  monitorStatus?: string;
  name?: string;
  protocolType?: string;
  timeout?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      evaluationCount: 'EvaluationCount',
      instanceId: 'InstanceId',
      interval: 'Interval',
      ispCityNode: 'IspCityNode',
      lang: 'Lang',
      lbaStrategy: 'LbaStrategy',
      monitorExtendInfo: 'MonitorExtendInfo',
      monitorStatus: 'MonitorStatus',
      name: 'Name',
      protocolType: 'ProtocolType',
      timeout: 'Timeout',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': AddDnsGtmAddressPoolRequestAddr },
      evaluationCount: 'number',
      instanceId: 'string',
      interval: 'number',
      ispCityNode: { 'type': 'array', 'itemType': AddDnsGtmAddressPoolRequestIspCityNode },
      lang: 'string',
      lbaStrategy: 'string',
      monitorExtendInfo: 'string',
      monitorStatus: 'string',
      name: 'string',
      protocolType: 'string',
      timeout: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAddressPoolResponseBody extends $tea.Model {
  addrPoolId?: string;
  monitorConfigId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      monitorConfigId: 'MonitorConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      monitorConfigId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAddressPoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddDnsGtmAddressPoolResponseBody;
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
      body: AddDnsGtmAddressPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmMonitorRequest extends $tea.Model {
  addrPoolId?: string;
  evaluationCount?: number;
  interval?: number;
  ispCityNode?: AddDnsGtmMonitorRequestIspCityNode[];
  lang?: string;
  monitorExtendInfo?: string;
  protocolType?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      evaluationCount: 'EvaluationCount',
      interval: 'Interval',
      ispCityNode: 'IspCityNode',
      lang: 'Lang',
      monitorExtendInfo: 'MonitorExtendInfo',
      protocolType: 'ProtocolType',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      evaluationCount: 'number',
      interval: 'number',
      ispCityNode: { 'type': 'array', 'itemType': AddDnsGtmMonitorRequestIspCityNode },
      lang: 'string',
      monitorExtendInfo: 'string',
      protocolType: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmMonitorResponseBody extends $tea.Model {
  monitorConfigId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorConfigId: 'MonitorConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorConfigId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddDnsGtmMonitorResponseBody;
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
      body: AddDnsGtmMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainRequest extends $tea.Model {
  domainName?: string;
  groupId?: string;
  lang?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      groupId: 'GroupId',
      lang: 'Lang',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      groupId: 'string',
      lang: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainResponseBody extends $tea.Model {
  dnsServers?: AddDomainResponseBodyDnsServers;
  domainId?: string;
  domainName?: string;
  groupId?: string;
  groupName?: string;
  punyCode?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dnsServers: 'DnsServers',
      domainId: 'DomainId',
      domainName: 'DomainName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      punyCode: 'PunyCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServers: AddDomainResponseBodyDnsServers,
      domainId: 'string',
      domainName: 'string',
      groupId: 'string',
      groupName: 'string',
      punyCode: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddDomainResponseBody;
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
      body: AddDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainBackupRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  periodType?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      periodType: 'PeriodType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      periodType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainBackupResponseBody extends $tea.Model {
  domainName?: string;
  periodType?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      periodType: 'PeriodType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      periodType: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainBackupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddDomainBackupResponseBody;
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
      body: AddDomainBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainGroupRequest extends $tea.Model {
  groupName?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainGroupResponseBody extends $tea.Model {
  groupId?: string;
  groupName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddDomainGroupResponseBody;
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
      body: AddDomainGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainRecordRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  line?: string;
  priority?: number;
  RR?: string;
  TTL?: number;
  type?: string;
  userClientIp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      line: 'Line',
      priority: 'Priority',
      RR: 'RR',
      TTL: 'TTL',
      type: 'Type',
      userClientIp: 'UserClientIp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      line: 'string',
      priority: 'number',
      RR: 'string',
      TTL: 'number',
      type: 'string',
      userClientIp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainRecordResponseBody extends $tea.Model {
  recordId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddDomainRecordResponseBody;
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
      body: AddDomainRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmAccessStrategyRequest extends $tea.Model {
  accessLines?: string;
  defaultAddrPoolId?: string;
  failoverAddrPoolId?: string;
  instanceId?: string;
  lang?: string;
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      accessLines: 'AccessLines',
      defaultAddrPoolId: 'DefaultAddrPoolId',
      failoverAddrPoolId: 'FailoverAddrPoolId',
      instanceId: 'InstanceId',
      lang: 'Lang',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLines: 'string',
      defaultAddrPoolId: 'string',
      failoverAddrPoolId: 'string',
      instanceId: 'string',
      lang: 'string',
      strategyName: 'string',
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
  statusCode: number;
  body: AddGtmAccessStrategyResponseBody;
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
      body: AddGtmAccessStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmAddressPoolRequest extends $tea.Model {
  addr?: AddGtmAddressPoolRequestAddr[];
  evaluationCount?: number;
  instanceId?: string;
  interval?: number;
  ispCityNode?: AddGtmAddressPoolRequestIspCityNode[];
  lang?: string;
  minAvailableAddrNum?: number;
  monitorExtendInfo?: string;
  monitorStatus?: string;
  name?: string;
  protocolType?: string;
  timeout?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      evaluationCount: 'EvaluationCount',
      instanceId: 'InstanceId',
      interval: 'Interval',
      ispCityNode: 'IspCityNode',
      lang: 'Lang',
      minAvailableAddrNum: 'MinAvailableAddrNum',
      monitorExtendInfo: 'MonitorExtendInfo',
      monitorStatus: 'MonitorStatus',
      name: 'Name',
      protocolType: 'ProtocolType',
      timeout: 'Timeout',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': AddGtmAddressPoolRequestAddr },
      evaluationCount: 'number',
      instanceId: 'string',
      interval: 'number',
      ispCityNode: { 'type': 'array', 'itemType': AddGtmAddressPoolRequestIspCityNode },
      lang: 'string',
      minAvailableAddrNum: 'number',
      monitorExtendInfo: 'string',
      monitorStatus: 'string',
      name: 'string',
      protocolType: 'string',
      timeout: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmAddressPoolResponseBody extends $tea.Model {
  addrPoolId?: string;
  monitorConfigId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      monitorConfigId: 'MonitorConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      monitorConfigId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmAddressPoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddGtmAddressPoolResponseBody;
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
      body: AddGtmAddressPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmMonitorRequest extends $tea.Model {
  addrPoolId?: string;
  evaluationCount?: number;
  interval?: number;
  ispCityNode?: AddGtmMonitorRequestIspCityNode[];
  lang?: string;
  monitorExtendInfo?: string;
  protocolType?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      evaluationCount: 'EvaluationCount',
      interval: 'Interval',
      ispCityNode: 'IspCityNode',
      lang: 'Lang',
      monitorExtendInfo: 'MonitorExtendInfo',
      protocolType: 'ProtocolType',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      evaluationCount: 'number',
      interval: 'number',
      ispCityNode: { 'type': 'array', 'itemType': AddGtmMonitorRequestIspCityNode },
      lang: 'string',
      monitorExtendInfo: 'string',
      protocolType: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmMonitorResponseBody extends $tea.Model {
  monitorConfigId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorConfigId: 'MonitorConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorConfigId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddGtmMonitorResponseBody;
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
      body: AddGtmMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGtmRecoveryPlanRequest extends $tea.Model {
  faultAddrPool?: string;
  lang?: string;
  name?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      faultAddrPool: 'FaultAddrPool',
      lang: 'Lang',
      name: 'Name',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultAddrPool: 'string',
      lang: 'string',
      name: 'string',
      remark: 'string',
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
  statusCode: number;
  body: AddGtmRecoveryPlanResponseBody;
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
      body: AddGtmRecoveryPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindInstanceDomainsRequest extends $tea.Model {
  domainNames?: string;
  instanceId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      instanceId: 'InstanceId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      instanceId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindInstanceDomainsResponseBody extends $tea.Model {
  failedCount?: number;
  requestId?: string;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedCount: 'FailedCount',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCount: 'number',
      requestId: 'string',
      successCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindInstanceDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindInstanceDomainsResponseBody;
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
      body: BindInstanceDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDomainGroupRequest extends $tea.Model {
  domainName?: string;
  groupId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      groupId: 'GroupId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      groupId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDomainGroupResponseBody extends $tea.Model {
  groupId?: string;
  groupName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDomainGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeDomainGroupResponseBody;
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
      body: ChangeDomainGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDomainOfDnsProductRequest extends $tea.Model {
  force?: boolean;
  instanceId?: string;
  lang?: string;
  newDomain?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      instanceId: 'InstanceId',
      lang: 'Lang',
      newDomain: 'NewDomain',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      instanceId: 'string',
      lang: 'string',
      newDomain: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDomainOfDnsProductResponseBody extends $tea.Model {
  originalDomain?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      originalDomain: 'OriginalDomain',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalDomain: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDomainOfDnsProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeDomainOfDnsProductResponseBody;
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
      body: ChangeDomainOfDnsProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyGtmConfigRequest extends $tea.Model {
  copyType?: string;
  lang?: string;
  sourceId?: string;
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      copyType: 'CopyType',
      lang: 'Lang',
      sourceId: 'SourceId',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copyType: 'string',
      lang: 'string',
      sourceId: 'string',
      targetId: 'string',
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
  statusCode: number;
  body: CopyGtmConfigResponseBody;
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
      body: CopyGtmConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePdnsAppKeyRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePdnsAppKeyResponseBody extends $tea.Model {
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

export class CreatePdnsAppKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePdnsAppKeyResponseBody;
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
      body: CreatePdnsAppKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePdnsUdpIpSegmentRequest extends $tea.Model {
  ip?: string;
  lang?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      lang: 'Lang',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      lang: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePdnsUdpIpSegmentResponseBody extends $tea.Model {
  requestId?: string;
  validMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      validMessage: 'ValidMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      validMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePdnsUdpIpSegmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePdnsUdpIpSegmentResponseBody;
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
      body: CreatePdnsUdpIpSegmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomLinesRequest extends $tea.Model {
  lang?: string;
  lineIds?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      lineIds: 'LineIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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
  statusCode: number;
  body: DeleteCustomLinesResponseBody;
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
      body: DeleteCustomLinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDnsCacheDomainRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
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
  statusCode: number;
  body: DeleteDnsCacheDomainResponseBody;
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
      body: DeleteDnsCacheDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDnsGtmAccessStrategyRequest extends $tea.Model {
  lang?: string;
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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
  statusCode: number;
  body: DeleteDnsGtmAccessStrategyResponseBody;
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
      body: DeleteDnsGtmAccessStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDnsGtmAddressPoolRequest extends $tea.Model {
  addrPoolId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      lang: 'string',
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
  statusCode: number;
  body: DeleteDnsGtmAddressPoolResponseBody;
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
      body: DeleteDnsGtmAddressPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponseBody extends $tea.Model {
  domainName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDomainResponseBody;
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
      body: DeleteDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainGroupRequest extends $tea.Model {
  groupId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      lang: 'string',
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
  statusCode: number;
  body: DeleteDomainGroupResponseBody;
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
      body: DeleteDomainGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRecordRequest extends $tea.Model {
  lang?: string;
  recordId?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      recordId: 'RecordId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      recordId: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRecordResponseBody extends $tea.Model {
  recordId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDomainRecordResponseBody;
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
      body: DeleteDomainRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGtmAccessStrategyRequest extends $tea.Model {
  lang?: string;
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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
  statusCode: number;
  body: DeleteGtmAccessStrategyResponseBody;
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
      body: DeleteGtmAccessStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGtmAddressPoolRequest extends $tea.Model {
  addrPoolId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      lang: 'string',
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
  statusCode: number;
  body: DeleteGtmAddressPoolResponseBody;
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
      body: DeleteGtmAddressPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGtmRecoveryPlanRequest extends $tea.Model {
  lang?: string;
  recoveryPlanId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      recoveryPlanId: 'RecoveryPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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
  statusCode: number;
  body: DeleteGtmRecoveryPlanResponseBody;
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
      body: DeleteGtmRecoveryPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubDomainRecordsRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  RR?: string;
  type?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      RR: 'RR',
      type: 'Type',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      RR: 'string',
      type: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubDomainRecordsResponseBody extends $tea.Model {
  RR?: string;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      RR: 'RR',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RR: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSubDomainRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSubDomainRecordsResponseBody;
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
      body: DeleteSubDomainRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchResultCountRequest extends $tea.Model {
  batchType?: string;
  lang?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchType: 'BatchType',
      lang: 'Lang',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchType: 'string',
      lang: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchResultCountResponseBody extends $tea.Model {
  batchType?: string;
  failedCount?: number;
  reason?: string;
  requestId?: string;
  status?: number;
  successCount?: number;
  taskId?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      batchType: 'BatchType',
      failedCount: 'FailedCount',
      reason: 'Reason',
      requestId: 'RequestId',
      status: 'Status',
      successCount: 'SuccessCount',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchType: 'string',
      failedCount: 'number',
      reason: 'string',
      requestId: 'string',
      status: 'number',
      successCount: 'number',
      taskId: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchResultCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBatchResultCountResponseBody;
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
      body: DescribeBatchResultCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchResultDetailRequest extends $tea.Model {
  batchType?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchType: 'BatchType',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchType: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchResultDetailResponseBody extends $tea.Model {
  batchResultDetails?: DescribeBatchResultDetailResponseBodyBatchResultDetails;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      batchResultDetails: 'BatchResultDetails',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchResultDetails: DescribeBatchResultDetailResponseBodyBatchResultDetails,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchResultDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBatchResultDetailResponseBody;
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
      body: DescribeBatchResultDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLineRequest extends $tea.Model {
  lang?: string;
  lineId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      lineId: 'LineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      lineId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLineResponseBody extends $tea.Model {
  code?: string;
  domainName?: string;
  id?: number;
  ipSegmentList?: DescribeCustomLineResponseBodyIpSegmentList[];
  name?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      domainName: 'DomainName',
      id: 'Id',
      ipSegmentList: 'IpSegmentList',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      domainName: 'string',
      id: 'number',
      ipSegmentList: { 'type': 'array', 'itemType': DescribeCustomLineResponseBodyIpSegmentList },
      name: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCustomLineResponseBody;
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
      body: DescribeCustomLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLinesRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLinesResponseBody extends $tea.Model {
  customLines?: DescribeCustomLinesResponseBodyCustomLines[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      customLines: 'CustomLines',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLines: { 'type': 'array', 'itemType': DescribeCustomLinesResponseBodyCustomLines },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomLinesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCustomLinesResponseBody;
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
      body: DescribeCustomLinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDNSSLBSubDomainsRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  rr?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rr: 'Rr',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      rr: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDNSSLBSubDomainsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  slbSubDomains?: DescribeDNSSLBSubDomainsResponseBodySlbSubDomains;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      slbSubDomains: 'SlbSubDomains',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      slbSubDomains: DescribeDNSSLBSubDomainsResponseBodySlbSubDomains,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDNSSLBSubDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDNSSLBSubDomainsResponseBody;
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
      body: DescribeDNSSLBSubDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsCacheDomainsRequest extends $tea.Model {
  keyword?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
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
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeDnsCacheDomainsResponseBodyDomains },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsCacheDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnsCacheDomainsResponseBody;
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
      body: DescribeDnsCacheDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategiesRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  strategyMode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      strategyMode: 'StrategyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
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
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  strategies?: DescribeDnsGtmAccessStrategiesResponseBodyStrategies;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      strategies: 'Strategies',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      strategies: DescribeDnsGtmAccessStrategiesResponseBodyStrategies,
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnsGtmAccessStrategiesResponseBody;
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
      body: DescribeDnsGtmAccessStrategiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyRequest extends $tea.Model {
  lang?: string;
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      strategyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyResponseBody extends $tea.Model {
  accessMode?: string;
  createTime?: string;
  createTimestamp?: number;
  defaultAddrPoolGroupStatus?: string;
  defaultAddrPoolType?: string;
  defaultAddrPools?: DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPools;
  defaultAvailableAddrNum?: number;
  defaultLatencyOptimization?: string;
  defaultLbaStrategy?: string;
  defaultMaxReturnAddrNum?: number;
  defaultMinAvailableAddrNum?: number;
  effectiveAddrPoolGroupType?: string;
  failoverAddrPoolGroupStatus?: string;
  failoverAddrPoolType?: string;
  failoverAddrPools?: DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPools;
  failoverAvailableAddrNum?: number;
  failoverLatencyOptimization?: string;
  failoverLbaStrategy?: string;
  failoverMaxReturnAddrNum?: number;
  failoverMinAvailableAddrNum?: number;
  instanceId?: string;
  lines?: DescribeDnsGtmAccessStrategyResponseBodyLines;
  requestId?: string;
  strategyId?: string;
  strategyMode?: string;
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      defaultAddrPoolGroupStatus: 'DefaultAddrPoolGroupStatus',
      defaultAddrPoolType: 'DefaultAddrPoolType',
      defaultAddrPools: 'DefaultAddrPools',
      defaultAvailableAddrNum: 'DefaultAvailableAddrNum',
      defaultLatencyOptimization: 'DefaultLatencyOptimization',
      defaultLbaStrategy: 'DefaultLbaStrategy',
      defaultMaxReturnAddrNum: 'DefaultMaxReturnAddrNum',
      defaultMinAvailableAddrNum: 'DefaultMinAvailableAddrNum',
      effectiveAddrPoolGroupType: 'EffectiveAddrPoolGroupType',
      failoverAddrPoolGroupStatus: 'FailoverAddrPoolGroupStatus',
      failoverAddrPoolType: 'FailoverAddrPoolType',
      failoverAddrPools: 'FailoverAddrPools',
      failoverAvailableAddrNum: 'FailoverAvailableAddrNum',
      failoverLatencyOptimization: 'FailoverLatencyOptimization',
      failoverLbaStrategy: 'FailoverLbaStrategy',
      failoverMaxReturnAddrNum: 'FailoverMaxReturnAddrNum',
      failoverMinAvailableAddrNum: 'FailoverMinAvailableAddrNum',
      instanceId: 'InstanceId',
      lines: 'Lines',
      requestId: 'RequestId',
      strategyId: 'StrategyId',
      strategyMode: 'StrategyMode',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      defaultAddrPoolGroupStatus: 'string',
      defaultAddrPoolType: 'string',
      defaultAddrPools: DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPools,
      defaultAvailableAddrNum: 'number',
      defaultLatencyOptimization: 'string',
      defaultLbaStrategy: 'string',
      defaultMaxReturnAddrNum: 'number',
      defaultMinAvailableAddrNum: 'number',
      effectiveAddrPoolGroupType: 'string',
      failoverAddrPoolGroupStatus: 'string',
      failoverAddrPoolType: 'string',
      failoverAddrPools: DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPools,
      failoverAvailableAddrNum: 'number',
      failoverLatencyOptimization: 'string',
      failoverLbaStrategy: 'string',
      failoverMaxReturnAddrNum: 'number',
      failoverMinAvailableAddrNum: 'number',
      instanceId: 'string',
      lines: DescribeDnsGtmAccessStrategyResponseBodyLines,
      requestId: 'string',
      strategyId: 'string',
      strategyMode: 'string',
      strategyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnsGtmAccessStrategyResponseBody;
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
      body: DescribeDnsGtmAccessStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  strategyMode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      strategyMode: 'StrategyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      strategyMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBody extends $tea.Model {
  domainAddrPools?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPools;
  ipv4AddrPools?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPools;
  ipv6AddrPools?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPools;
  lines?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLines;
  requestId?: string;
  selectedDomainLines?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedDomainLines;
  selectedIpv4Lines?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv4Lines;
  selectedIpv6Lines?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv6Lines;
  suggestSetDefaultLine?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainAddrPools: 'DomainAddrPools',
      ipv4AddrPools: 'Ipv4AddrPools',
      ipv6AddrPools: 'Ipv6AddrPools',
      lines: 'Lines',
      requestId: 'RequestId',
      selectedDomainLines: 'SelectedDomainLines',
      selectedIpv4Lines: 'SelectedIpv4Lines',
      selectedIpv6Lines: 'SelectedIpv6Lines',
      suggestSetDefaultLine: 'SuggestSetDefaultLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainAddrPools: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPools,
      ipv4AddrPools: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPools,
      ipv6AddrPools: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPools,
      lines: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLines,
      requestId: 'string',
      selectedDomainLines: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedDomainLines,
      selectedIpv4Lines: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv4Lines,
      selectedIpv6Lines: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv6Lines,
      suggestSetDefaultLine: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnsGtmAccessStrategyAvailableConfigResponseBody;
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
      body: DescribeDnsGtmAccessStrategyAvailableConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddrAttributeInfoRequest extends $tea.Model {
  addrs?: string;
  lang?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      addrs: 'Addrs',
      lang: 'Lang',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrs: 'string',
      lang: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddrAttributeInfoResponseBody extends $tea.Model {
  addr?: DescribeDnsGtmAddrAttributeInfoResponseBodyAddr;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: DescribeDnsGtmAddrAttributeInfoResponseBodyAddr,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddrAttributeInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnsGtmAddrAttributeInfoResponseBody;
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
      body: DescribeDnsGtmAddrAttributeInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddressPoolAvailableConfigRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddressPoolAvailableConfigResponseBody extends $tea.Model {
  attributeInfos?: DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfos;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attributeInfos: 'AttributeInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeInfos: DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddressPoolAvailableConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnsGtmAddressPoolAvailableConfigResponseBody;
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
      body: DescribeDnsGtmAddressPoolAvailableConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAvailableAlertGroupRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAvailableAlertGroupResponseBody extends $tea.Model {
  availableAlertGroup?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableAlertGroup: 'AvailableAlertGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAlertGroup: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAvailableAlertGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnsGtmAvailableAlertGroupResponseBody;
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
      body: DescribeDnsGtmAvailableAlertGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceResponseBody extends $tea.Model {
  config?: DescribeDnsGtmInstanceResponseBodyConfig;
  createTime?: string;
  createTimestamp?: number;
  expireTime?: string;
  expireTimestamp?: number;
  instanceId?: string;
  paymentType?: string;
  requestId?: string;
  resourceGroupId?: string;
  smsQuota?: number;
  taskQuota?: number;
  usedQuota?: DescribeDnsGtmInstanceResponseBodyUsedQuota;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      expireTime: 'ExpireTime',
      expireTimestamp: 'ExpireTimestamp',
      instanceId: 'InstanceId',
      paymentType: 'PaymentType',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      smsQuota: 'SmsQuota',
      taskQuota: 'TaskQuota',
      usedQuota: 'UsedQuota',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribeDnsGtmInstanceResponseBodyConfig,
      createTime: 'string',
      createTimestamp: 'number',
      expireTime: 'string',
      expireTimestamp: 'number',
      instanceId: 'string',
      paymentType: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      smsQuota: 'number',
      taskQuota: 'number',
      usedQuota: DescribeDnsGtmInstanceResponseBodyUsedQuota,
      versionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnsGtmInstanceResponseBody;
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
      body: DescribeDnsGtmInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceAddressPoolRequest extends $tea.Model {
  addrPoolId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceAddressPoolResponseBody extends $tea.Model {
  addrCount?: number;
  addrPoolId?: string;
  addrs?: DescribeDnsGtmInstanceAddressPoolResponseBodyAddrs;
  createTime?: string;
  createTimestamp?: number;
  lbaStrategy?: string;
  monitorConfigId?: string;
  monitorStatus?: string;
  name?: string;
  requestId?: string;
  type?: string;
  updateTime?: string;
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      addrCount: 'AddrCount',
      addrPoolId: 'AddrPoolId',
      addrs: 'Addrs',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      lbaStrategy: 'LbaStrategy',
      monitorConfigId: 'MonitorConfigId',
      monitorStatus: 'MonitorStatus',
      name: 'Name',
      requestId: 'RequestId',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      addrPoolId: 'string',
      addrs: DescribeDnsGtmInstanceAddressPoolResponseBodyAddrs,
      createTime: 'string',
      createTimestamp: 'number',
      lbaStrategy: 'string',
      monitorConfigId: 'string',
      monitorStatus: 'string',
      name: 'string',
      requestId: 'string',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceAddressPoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnsGtmInstanceAddressPoolResponseBody;
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
      body: DescribeDnsGtmInstanceAddressPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceAddressPoolsRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceAddressPoolsResponseBody extends $tea.Model {
  addrPools?: DescribeDnsGtmInstanceAddressPoolsResponseBodyAddrPools;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      addrPools: 'AddrPools',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPools: DescribeDnsGtmInstanceAddressPoolsResponseBodyAddrPools,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceAddressPoolsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnsGtmInstanceAddressPoolsResponseBody;
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
      body: DescribeDnsGtmInstanceAddressPoolsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceStatusRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceStatusResponseBody extends $tea.Model {
  addrAvailableNum?: number;
  addrNotAvailableNum?: number;
  addrPoolGroupNotAvailableNum?: number;
  requestId?: string;
  strategyNotAvailableNum?: number;
  switchToFailoverStrategyNum?: number;
  static names(): { [key: string]: string } {
    return {
      addrAvailableNum: 'AddrAvailableNum',
      addrNotAvailableNum: 'AddrNotAvailableNum',
      addrPoolGroupNotAvailableNum: 'AddrPoolGroupNotAvailableNum',
      requestId: 'RequestId',
      strategyNotAvailableNum: 'StrategyNotAvailableNum',
      switchToFailoverStrategyNum: 'SwitchToFailoverStrategyNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrAvailableNum: 'number',
      addrNotAvailableNum: 'number',
      addrPoolGroupNotAvailableNum: 'number',
      requestId: 'string',
      strategyNotAvailableNum: 'number',
      switchToFailoverStrategyNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnsGtmInstanceStatusResponseBody;
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
      body: DescribeDnsGtmInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceSystemCnameRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceSystemCnameResponseBody extends $tea.Model {
  requestId?: string;
  systemCname?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      systemCname: 'SystemCname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      systemCname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceSystemCnameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnsGtmInstanceSystemCnameResponseBody;
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
      body: DescribeDnsGtmInstanceSystemCnameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstancesRequest extends $tea.Model {
  keyword?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstancesResponseBody extends $tea.Model {
  gtmInstances?: DescribeDnsGtmInstancesResponseBodyGtmInstances[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      gtmInstances: 'GtmInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gtmInstances: { 'type': 'array', 'itemType': DescribeDnsGtmInstancesResponseBodyGtmInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnsGtmInstancesResponseBody;
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
      body: DescribeDnsGtmInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmLogsRequest extends $tea.Model {
  endTimestamp?: number;
  instanceId?: string;
  keyword?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'number',
      instanceId: 'string',
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmLogsResponseBody extends $tea.Model {
  logs?: DescribeDnsGtmLogsResponseBodyLogs;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: DescribeDnsGtmLogsResponseBodyLogs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnsGtmLogsResponseBody;
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
      body: DescribeDnsGtmLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigResponseBody extends $tea.Model {
  domainIpv4IspCityNodes?: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodes;
  domainIpv6IspCityNodes?: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodes;
  ipv4IspCityNodes?: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodes;
  ipv6IspCityNodes?: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodes;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainIpv4IspCityNodes: 'DomainIpv4IspCityNodes',
      domainIpv6IspCityNodes: 'DomainIpv6IspCityNodes',
      ipv4IspCityNodes: 'Ipv4IspCityNodes',
      ipv6IspCityNodes: 'Ipv6IspCityNodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainIpv4IspCityNodes: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodes,
      domainIpv6IspCityNodes: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodes,
      ipv4IspCityNodes: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodes,
      ipv6IspCityNodes: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodes,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnsGtmMonitorAvailableConfigResponseBody;
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
      body: DescribeDnsGtmMonitorAvailableConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorConfigRequest extends $tea.Model {
  lang?: string;
  monitorConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      monitorConfigId: 'MonitorConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      monitorConfigId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorConfigResponseBody extends $tea.Model {
  createTime?: string;
  createTimestamp?: number;
  evaluationCount?: number;
  interval?: number;
  ispCityNodes?: DescribeDnsGtmMonitorConfigResponseBodyIspCityNodes;
  monitorConfigId?: string;
  monitorExtendInfo?: string;
  protocolType?: string;
  requestId?: string;
  timeout?: number;
  updateTime?: string;
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      evaluationCount: 'EvaluationCount',
      interval: 'Interval',
      ispCityNodes: 'IspCityNodes',
      monitorConfigId: 'MonitorConfigId',
      monitorExtendInfo: 'MonitorExtendInfo',
      protocolType: 'ProtocolType',
      requestId: 'RequestId',
      timeout: 'Timeout',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      evaluationCount: 'number',
      interval: 'number',
      ispCityNodes: DescribeDnsGtmMonitorConfigResponseBodyIspCityNodes,
      monitorConfigId: 'string',
      monitorExtendInfo: 'string',
      protocolType: 'string',
      requestId: 'string',
      timeout: 'number',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnsGtmMonitorConfigResponseBody;
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
      body: DescribeDnsGtmMonitorConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsProductInstanceRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsProductInstanceResponseBody extends $tea.Model {
  autoRenewal?: boolean;
  bindCount?: number;
  bindDomainCount?: number;
  bindDomainUsedCount?: number;
  bindUsedCount?: number;
  DDosDefendFlow?: number;
  DDosDefendQuery?: number;
  dnsSLBCount?: number;
  dnsSecurity?: string;
  dnsServers?: DescribeDnsProductInstanceResponseBodyDnsServers;
  domain?: string;
  domainType?: string;
  endTime?: string;
  endTimestamp?: number;
  gslb?: boolean;
  ISPLines?: string;
  ISPRegionLines?: string;
  inBlackHole?: boolean;
  inClean?: boolean;
  instanceId?: string;
  monitorFrequency?: number;
  monitorNodeCount?: number;
  monitorTaskCount?: number;
  overseaDDosDefendFlow?: number;
  overseaLine?: string;
  paymentType?: string;
  regionLines?: boolean;
  requestId?: string;
  searchEngineLines?: string;
  startTime?: string;
  startTimestamp?: number;
  subDomainLevel?: number;
  TTLMinValue?: number;
  URLForwardCount?: number;
  versionCode?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      bindCount: 'BindCount',
      bindDomainCount: 'BindDomainCount',
      bindDomainUsedCount: 'BindDomainUsedCount',
      bindUsedCount: 'BindUsedCount',
      DDosDefendFlow: 'DDosDefendFlow',
      DDosDefendQuery: 'DDosDefendQuery',
      dnsSLBCount: 'DnsSLBCount',
      dnsSecurity: 'DnsSecurity',
      dnsServers: 'DnsServers',
      domain: 'Domain',
      domainType: 'DomainType',
      endTime: 'EndTime',
      endTimestamp: 'EndTimestamp',
      gslb: 'Gslb',
      ISPLines: 'ISPLines',
      ISPRegionLines: 'ISPRegionLines',
      inBlackHole: 'InBlackHole',
      inClean: 'InClean',
      instanceId: 'InstanceId',
      monitorFrequency: 'MonitorFrequency',
      monitorNodeCount: 'MonitorNodeCount',
      monitorTaskCount: 'MonitorTaskCount',
      overseaDDosDefendFlow: 'OverseaDDosDefendFlow',
      overseaLine: 'OverseaLine',
      paymentType: 'PaymentType',
      regionLines: 'RegionLines',
      requestId: 'RequestId',
      searchEngineLines: 'SearchEngineLines',
      startTime: 'StartTime',
      startTimestamp: 'StartTimestamp',
      subDomainLevel: 'SubDomainLevel',
      TTLMinValue: 'TTLMinValue',
      URLForwardCount: 'URLForwardCount',
      versionCode: 'VersionCode',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      bindCount: 'number',
      bindDomainCount: 'number',
      bindDomainUsedCount: 'number',
      bindUsedCount: 'number',
      DDosDefendFlow: 'number',
      DDosDefendQuery: 'number',
      dnsSLBCount: 'number',
      dnsSecurity: 'string',
      dnsServers: DescribeDnsProductInstanceResponseBodyDnsServers,
      domain: 'string',
      domainType: 'string',
      endTime: 'string',
      endTimestamp: 'number',
      gslb: 'boolean',
      ISPLines: 'string',
      ISPRegionLines: 'string',
      inBlackHole: 'boolean',
      inClean: 'boolean',
      instanceId: 'string',
      monitorFrequency: 'number',
      monitorNodeCount: 'number',
      monitorTaskCount: 'number',
      overseaDDosDefendFlow: 'number',
      overseaLine: 'string',
      paymentType: 'string',
      regionLines: 'boolean',
      requestId: 'string',
      searchEngineLines: 'string',
      startTime: 'string',
      startTimestamp: 'number',
      subDomainLevel: 'number',
      TTLMinValue: 'number',
      URLForwardCount: 'number',
      versionCode: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsProductInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnsProductInstanceResponseBody;
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
      body: DescribeDnsProductInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsProductInstancesRequest extends $tea.Model {
  direction?: string;
  domainType?: string;
  lang?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  userClientIp?: string;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      domainType: 'DomainType',
      lang: 'Lang',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userClientIp: 'UserClientIp',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      domainType: 'string',
      lang: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      userClientIp: 'string',
      versionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsProductInstancesResponseBody extends $tea.Model {
  dnsProducts?: DescribeDnsProductInstancesResponseBodyDnsProducts;
  domainType?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dnsProducts: 'DnsProducts',
      domainType: 'DomainType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsProducts: DescribeDnsProductInstancesResponseBodyDnsProducts,
      domainType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsProductInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDnsProductInstancesResponseBody;
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
      body: DescribeDnsProductInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohAccountStatisticsRequest extends $tea.Model {
  endDate?: string;
  lang?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      lang: 'Lang',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      lang: 'string',
      startDate: 'string',
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
  statusCode: number;
  body: DescribeDohAccountStatisticsResponseBody;
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
      body: DescribeDohAccountStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohDomainStatisticsRequest extends $tea.Model {
  domainName?: string;
  endDate?: string;
  lang?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endDate: 'EndDate',
      lang: 'Lang',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endDate: 'string',
      lang: 'string',
      startDate: 'string',
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
  statusCode: number;
  body: DescribeDohDomainStatisticsResponseBody;
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
      body: DescribeDohDomainStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohDomainStatisticsSummaryRequest extends $tea.Model {
  domainName?: string;
  endDate?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endDate: 'EndDate',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endDate: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohDomainStatisticsSummaryResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  statistics?: DescribeDohDomainStatisticsSummaryResponseBodyStatistics[];
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      statistics: 'Statistics',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      statistics: { 'type': 'array', 'itemType': DescribeDohDomainStatisticsSummaryResponseBodyStatistics },
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohDomainStatisticsSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDohDomainStatisticsSummaryResponseBody;
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
      body: DescribeDohDomainStatisticsSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohSubDomainStatisticsRequest extends $tea.Model {
  endDate?: string;
  lang?: string;
  startDate?: string;
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      lang: 'Lang',
      startDate: 'StartDate',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      lang: 'string',
      startDate: 'string',
      subDomain: 'string',
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
  statusCode: number;
  body: DescribeDohSubDomainStatisticsResponseBody;
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
      body: DescribeDohSubDomainStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohSubDomainStatisticsSummaryRequest extends $tea.Model {
  domainName?: string;
  endDate?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endDate: 'EndDate',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endDate: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      subDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohSubDomainStatisticsSummaryResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  statistics?: DescribeDohSubDomainStatisticsSummaryResponseBodyStatistics[];
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      statistics: 'Statistics',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      statistics: { 'type': 'array', 'itemType': DescribeDohSubDomainStatisticsSummaryResponseBodyStatistics },
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohSubDomainStatisticsSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDohSubDomainStatisticsSummaryResponseBody;
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
      body: DescribeDohSubDomainStatisticsSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohUserInfoRequest extends $tea.Model {
  endDate?: string;
  lang?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      lang: 'Lang',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      lang: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohUserInfoResponseBody extends $tea.Model {
  domainCount?: number;
  pdnsId?: number;
  requestId?: string;
  subDomainCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainCount: 'DomainCount',
      pdnsId: 'PdnsId',
      requestId: 'RequestId',
      subDomainCount: 'SubDomainCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCount: 'number',
      pdnsId: 'number',
      requestId: 'string',
      subDomainCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDohUserInfoResponseBody;
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
      body: DescribeDohUserInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDnssecInfoRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDnssecInfoResponseBody extends $tea.Model {
  algorithm?: string;
  digest?: string;
  digestType?: string;
  domainName?: string;
  dsRecord?: string;
  flags?: string;
  keyTag?: string;
  publicKey?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      digest: 'Digest',
      digestType: 'DigestType',
      domainName: 'DomainName',
      dsRecord: 'DsRecord',
      flags: 'Flags',
      keyTag: 'KeyTag',
      publicKey: 'PublicKey',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      digest: 'string',
      digestType: 'string',
      domainName: 'string',
      dsRecord: 'string',
      flags: 'string',
      keyTag: 'string',
      publicKey: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDnssecInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainDnssecInfoResponseBody;
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
      body: DescribeDomainDnssecInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainGroupsRequest extends $tea.Model {
  keyWord?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyWord: 'KeyWord',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWord: 'string',
      lang: 'string',
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
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainGroups: 'DomainGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroups: DescribeDomainGroupsResponseBodyDomainGroups,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainGroupsResponseBody;
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
      body: DescribeDomainGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainInfoRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  needDetailAttributes?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      needDetailAttributes: 'NeedDetailAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      needDetailAttributes: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainInfoResponseBody extends $tea.Model {
  aliDomain?: boolean;
  availableTtls?: DescribeDomainInfoResponseBodyAvailableTtls;
  createTime?: string;
  dnsServers?: DescribeDomainInfoResponseBodyDnsServers;
  domainId?: string;
  domainLoggingSwitchStatus?: string;
  domainName?: string;
  groupId?: string;
  groupName?: string;
  inBlackHole?: boolean;
  inClean?: boolean;
  instanceId?: string;
  lineType?: string;
  minTtl?: number;
  punyCode?: string;
  recordLineTreeJson?: string;
  recordLines?: DescribeDomainInfoResponseBodyRecordLines;
  regionLines?: boolean;
  remark?: string;
  requestId?: string;
  resourceGroupId?: string;
  slaveDns?: boolean;
  subDomain?: boolean;
  versionCode?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      aliDomain: 'AliDomain',
      availableTtls: 'AvailableTtls',
      createTime: 'CreateTime',
      dnsServers: 'DnsServers',
      domainId: 'DomainId',
      domainLoggingSwitchStatus: 'DomainLoggingSwitchStatus',
      domainName: 'DomainName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      inBlackHole: 'InBlackHole',
      inClean: 'InClean',
      instanceId: 'InstanceId',
      lineType: 'LineType',
      minTtl: 'MinTtl',
      punyCode: 'PunyCode',
      recordLineTreeJson: 'RecordLineTreeJson',
      recordLines: 'RecordLines',
      regionLines: 'RegionLines',
      remark: 'Remark',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      slaveDns: 'SlaveDns',
      subDomain: 'SubDomain',
      versionCode: 'VersionCode',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliDomain: 'boolean',
      availableTtls: DescribeDomainInfoResponseBodyAvailableTtls,
      createTime: 'string',
      dnsServers: DescribeDomainInfoResponseBodyDnsServers,
      domainId: 'string',
      domainLoggingSwitchStatus: 'string',
      domainName: 'string',
      groupId: 'string',
      groupName: 'string',
      inBlackHole: 'boolean',
      inClean: 'boolean',
      instanceId: 'string',
      lineType: 'string',
      minTtl: 'number',
      punyCode: 'string',
      recordLineTreeJson: 'string',
      recordLines: DescribeDomainInfoResponseBodyRecordLines,
      regionLines: 'boolean',
      remark: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      slaveDns: 'boolean',
      subDomain: 'boolean',
      versionCode: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainInfoResponseBody;
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
      body: DescribeDomainInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainLogsRequest extends $tea.Model {
  groupId?: string;
  keyWord?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  type?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      keyWord: 'KeyWord',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      type: 'Type',
      endDate: 'endDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      keyWord: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      type: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainLogsResponseBody extends $tea.Model {
  domainLogs?: DescribeDomainLogsResponseBodyDomainLogs;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainLogs: 'DomainLogs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogs: DescribeDomainLogsResponseBodyDomainLogs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainLogsResponseBody;
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
      body: DescribeDomainLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNsRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNsResponseBody extends $tea.Model {
  allAliDns?: boolean;
  detectFailedReasonCode?: string;
  dnsServers?: DescribeDomainNsResponseBodyDnsServers;
  expectDnsServers?: DescribeDomainNsResponseBodyExpectDnsServers;
  includeAliDns?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      allAliDns: 'AllAliDns',
      detectFailedReasonCode: 'DetectFailedReasonCode',
      dnsServers: 'DnsServers',
      expectDnsServers: 'ExpectDnsServers',
      includeAliDns: 'IncludeAliDns',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allAliDns: 'boolean',
      detectFailedReasonCode: 'string',
      dnsServers: DescribeDomainNsResponseBodyDnsServers,
      expectDnsServers: DescribeDomainNsResponseBodyExpectDnsServers,
      includeAliDns: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainNsResponseBody;
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
      body: DescribeDomainNsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRecordInfoRequest extends $tea.Model {
  lang?: string;
  recordId?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      recordId: 'RecordId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      recordId: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRecordInfoResponseBody extends $tea.Model {
  domainId?: string;
  domainName?: string;
  groupId?: string;
  groupName?: string;
  line?: string;
  locked?: boolean;
  priority?: number;
  punyCode?: string;
  RR?: string;
  recordId?: string;
  remark?: string;
  requestId?: string;
  status?: string;
  TTL?: number;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      domainName: 'DomainName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      line: 'Line',
      locked: 'Locked',
      priority: 'Priority',
      punyCode: 'PunyCode',
      RR: 'RR',
      recordId: 'RecordId',
      remark: 'Remark',
      requestId: 'RequestId',
      status: 'Status',
      TTL: 'TTL',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      domainName: 'string',
      groupId: 'string',
      groupName: 'string',
      line: 'string',
      locked: 'boolean',
      priority: 'number',
      punyCode: 'string',
      RR: 'string',
      recordId: 'string',
      remark: 'string',
      requestId: 'string',
      status: 'string',
      TTL: 'number',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRecordInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainRecordInfoResponseBody;
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
      body: DescribeDomainRecordInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRecordsRequest extends $tea.Model {
  direction?: string;
  domainName?: string;
  groupId?: number;
  keyWord?: string;
  lang?: string;
  line?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  RRKeyWord?: string;
  searchMode?: string;
  status?: string;
  type?: string;
  typeKeyWord?: string;
  valueKeyWord?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      domainName: 'DomainName',
      groupId: 'GroupId',
      keyWord: 'KeyWord',
      lang: 'Lang',
      line: 'Line',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      RRKeyWord: 'RRKeyWord',
      searchMode: 'SearchMode',
      status: 'Status',
      type: 'Type',
      typeKeyWord: 'TypeKeyWord',
      valueKeyWord: 'ValueKeyWord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      domainName: 'string',
      groupId: 'number',
      keyWord: 'string',
      lang: 'string',
      line: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      RRKeyWord: 'string',
      searchMode: 'string',
      status: 'string',
      type: 'string',
      typeKeyWord: 'string',
      valueKeyWord: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRecordsResponseBody extends $tea.Model {
  domainRecords?: DescribeDomainRecordsResponseBodyDomainRecords;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainRecords: 'DomainRecords',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainRecords: DescribeDomainRecordsResponseBodyDomainRecords,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainRecordsResponseBody;
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
      body: DescribeDomainRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResolveStatisticsSummaryRequest extends $tea.Model {
  direction?: string;
  endDate?: string;
  keyword?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  searchMode?: string;
  startDate?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      endDate: 'EndDate',
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchMode: 'SearchMode',
      startDate: 'StartDate',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      endDate: 'string',
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchMode: 'string',
      startDate: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResolveStatisticsSummaryResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  statistics?: DescribeDomainResolveStatisticsSummaryResponseBodyStatistics[];
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      statistics: 'Statistics',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      statistics: { 'type': 'array', 'itemType': DescribeDomainResolveStatisticsSummaryResponseBodyStatistics },
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResolveStatisticsSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainResolveStatisticsSummaryResponseBody;
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
      body: DescribeDomainResolveStatisticsSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatisticsRequest extends $tea.Model {
  domainName?: string;
  domainType?: string;
  endDate?: string;
  lang?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainType: 'DomainType',
      endDate: 'EndDate',
      lang: 'Lang',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainType: 'string',
      endDate: 'string',
      lang: 'string',
      startDate: 'string',
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
  statusCode: number;
  body: DescribeDomainStatisticsResponseBody;
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
      body: DescribeDomainStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatisticsSummaryRequest extends $tea.Model {
  endDate?: string;
  keyword?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  searchMode?: string;
  startDate?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchMode: 'SearchMode',
      startDate: 'StartDate',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchMode: 'string',
      startDate: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatisticsSummaryResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  statistics?: DescribeDomainStatisticsSummaryResponseBodyStatistics;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      statistics: 'Statistics',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      statistics: DescribeDomainStatisticsSummaryResponseBodyStatistics,
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatisticsSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainStatisticsSummaryResponseBody;
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
      body: DescribeDomainStatisticsSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsRequest extends $tea.Model {
  groupId?: string;
  keyWord?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  searchMode?: string;
  starmark?: boolean;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      keyWord: 'KeyWord',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      searchMode: 'SearchMode',
      starmark: 'Starmark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      keyWord: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      searchMode: 'string',
      starmark: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBody extends $tea.Model {
  domains?: DescribeDomainsResponseBodyDomains;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeDomainsResponseBodyDomains,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainsResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategiesRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategiesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  strategies?: DescribeGtmAccessStrategiesResponseBodyStrategies;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      strategies: 'Strategies',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      strategies: DescribeGtmAccessStrategiesResponseBodyStrategies,
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGtmAccessStrategiesResponseBody;
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
      body: DescribeGtmAccessStrategiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyRequest extends $tea.Model {
  lang?: string;
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      strategyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyResponseBody extends $tea.Model {
  accessMode?: string;
  accessStatus?: string;
  defaultAddrPoolMonitorStatus?: string;
  defaultAddrPoolName?: string;
  defaultAddrPoolStatus?: string;
  defultAddrPoolId?: string;
  failoverAddrPoolId?: string;
  failoverAddrPoolMonitorStatus?: string;
  failoverAddrPoolName?: string;
  failoverAddrPoolStatus?: string;
  instanceId?: string;
  lines?: DescribeGtmAccessStrategyResponseBodyLines;
  requestId?: string;
  strategyId?: string;
  strategyMode?: string;
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      accessStatus: 'AccessStatus',
      defaultAddrPoolMonitorStatus: 'DefaultAddrPoolMonitorStatus',
      defaultAddrPoolName: 'DefaultAddrPoolName',
      defaultAddrPoolStatus: 'DefaultAddrPoolStatus',
      defultAddrPoolId: 'DefultAddrPoolId',
      failoverAddrPoolId: 'FailoverAddrPoolId',
      failoverAddrPoolMonitorStatus: 'FailoverAddrPoolMonitorStatus',
      failoverAddrPoolName: 'FailoverAddrPoolName',
      failoverAddrPoolStatus: 'FailoverAddrPoolStatus',
      instanceId: 'InstanceId',
      lines: 'Lines',
      requestId: 'RequestId',
      strategyId: 'StrategyId',
      strategyMode: 'StrategyMode',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      accessStatus: 'string',
      defaultAddrPoolMonitorStatus: 'string',
      defaultAddrPoolName: 'string',
      defaultAddrPoolStatus: 'string',
      defultAddrPoolId: 'string',
      failoverAddrPoolId: 'string',
      failoverAddrPoolMonitorStatus: 'string',
      failoverAddrPoolName: 'string',
      failoverAddrPoolStatus: 'string',
      instanceId: 'string',
      lines: DescribeGtmAccessStrategyResponseBodyLines,
      requestId: 'string',
      strategyId: 'string',
      strategyMode: 'string',
      strategyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGtmAccessStrategyResponseBody;
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
      body: DescribeGtmAccessStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyAvailableConfigRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyAvailableConfigResponseBody extends $tea.Model {
  addrPools?: DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPools;
  lines?: DescribeGtmAccessStrategyAvailableConfigResponseBodyLines;
  requestId?: string;
  suggestSetDefaultLine?: boolean;
  static names(): { [key: string]: string } {
    return {
      addrPools: 'AddrPools',
      lines: 'Lines',
      requestId: 'RequestId',
      suggestSetDefaultLine: 'SuggestSetDefaultLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPools: DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPools,
      lines: DescribeGtmAccessStrategyAvailableConfigResponseBodyLines,
      requestId: 'string',
      suggestSetDefaultLine: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAccessStrategyAvailableConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGtmAccessStrategyAvailableConfigResponseBody;
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
      body: DescribeGtmAccessStrategyAvailableConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAvailableAlertGroupRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAvailableAlertGroupResponseBody extends $tea.Model {
  availableAlertGroup?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableAlertGroup: 'AvailableAlertGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAlertGroup: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmAvailableAlertGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGtmAvailableAlertGroupResponseBody;
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
      body: DescribeGtmAvailableAlertGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  needDetailAttributes?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      needDetailAttributes: 'NeedDetailAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      needDetailAttributes: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceResponseBody extends $tea.Model {
  accessStrategyNum?: number;
  addressPoolNum?: number;
  alertGroup?: string;
  cname?: string;
  cnameMode?: string;
  createTime?: string;
  createTimestamp?: number;
  expireTime?: string;
  expireTimestamp?: number;
  instanceId?: string;
  instanceName?: string;
  lbaStrategy?: string;
  requestId?: string;
  resourceGroupId?: string;
  ttl?: number;
  userDomainName?: string;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      accessStrategyNum: 'AccessStrategyNum',
      addressPoolNum: 'AddressPoolNum',
      alertGroup: 'AlertGroup',
      cname: 'Cname',
      cnameMode: 'CnameMode',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      expireTime: 'ExpireTime',
      expireTimestamp: 'ExpireTimestamp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lbaStrategy: 'LbaStrategy',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      ttl: 'Ttl',
      userDomainName: 'UserDomainName',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessStrategyNum: 'number',
      addressPoolNum: 'number',
      alertGroup: 'string',
      cname: 'string',
      cnameMode: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      expireTime: 'string',
      expireTimestamp: 'number',
      instanceId: 'string',
      instanceName: 'string',
      lbaStrategy: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      ttl: 'number',
      userDomainName: 'string',
      versionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGtmInstanceResponseBody;
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
      body: DescribeGtmInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceAddressPoolRequest extends $tea.Model {
  addrPoolId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceAddressPoolResponseBody extends $tea.Model {
  addrCount?: number;
  addrPoolId?: string;
  addrs?: DescribeGtmInstanceAddressPoolResponseBodyAddrs;
  createTime?: string;
  createTimestamp?: number;
  minAvailableAddrNum?: number;
  monitorConfigId?: string;
  monitorStatus?: string;
  name?: string;
  requestId?: string;
  status?: string;
  type?: string;
  updateTime?: string;
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      addrCount: 'AddrCount',
      addrPoolId: 'AddrPoolId',
      addrs: 'Addrs',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      minAvailableAddrNum: 'MinAvailableAddrNum',
      monitorConfigId: 'MonitorConfigId',
      monitorStatus: 'MonitorStatus',
      name: 'Name',
      requestId: 'RequestId',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      addrPoolId: 'string',
      addrs: DescribeGtmInstanceAddressPoolResponseBodyAddrs,
      createTime: 'string',
      createTimestamp: 'number',
      minAvailableAddrNum: 'number',
      monitorConfigId: 'string',
      monitorStatus: 'string',
      name: 'string',
      requestId: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceAddressPoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGtmInstanceAddressPoolResponseBody;
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
      body: DescribeGtmInstanceAddressPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceAddressPoolsRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceAddressPoolsResponseBody extends $tea.Model {
  addrPools?: DescribeGtmInstanceAddressPoolsResponseBodyAddrPools;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      addrPools: 'AddrPools',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPools: DescribeGtmInstanceAddressPoolsResponseBodyAddrPools,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceAddressPoolsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGtmInstanceAddressPoolsResponseBody;
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
      body: DescribeGtmInstanceAddressPoolsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceStatusRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceStatusResponseBody extends $tea.Model {
  addrNotAvailableNum?: number;
  addrPoolNotAvailableNum?: number;
  requestId?: string;
  status?: string;
  statusReason?: string;
  strategyNotAvailableNum?: number;
  switchToFailoverStrategyNum?: number;
  static names(): { [key: string]: string } {
    return {
      addrNotAvailableNum: 'AddrNotAvailableNum',
      addrPoolNotAvailableNum: 'AddrPoolNotAvailableNum',
      requestId: 'RequestId',
      status: 'Status',
      statusReason: 'StatusReason',
      strategyNotAvailableNum: 'StrategyNotAvailableNum',
      switchToFailoverStrategyNum: 'SwitchToFailoverStrategyNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrNotAvailableNum: 'number',
      addrPoolNotAvailableNum: 'number',
      requestId: 'string',
      status: 'string',
      statusReason: 'string',
      strategyNotAvailableNum: 'number',
      switchToFailoverStrategyNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGtmInstanceStatusResponseBody;
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
      body: DescribeGtmInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceSystemCnameRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceSystemCnameResponseBody extends $tea.Model {
  requestId?: string;
  systemCname?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      systemCname: 'SystemCname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      systemCname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstanceSystemCnameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGtmInstanceSystemCnameResponseBody;
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
      body: DescribeGtmInstanceSystemCnameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstancesRequest extends $tea.Model {
  keyword?: string;
  lang?: string;
  needDetailAttributes?: boolean;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      needDetailAttributes: 'NeedDetailAttributes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      needDetailAttributes: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstancesResponseBody extends $tea.Model {
  gtmInstances?: DescribeGtmInstancesResponseBodyGtmInstances;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      gtmInstances: 'GtmInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gtmInstances: DescribeGtmInstancesResponseBodyGtmInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGtmInstancesResponseBody;
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
      body: DescribeGtmInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmLogsRequest extends $tea.Model {
  endTimestamp?: number;
  instanceId?: string;
  keyword?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'number',
      instanceId: 'string',
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmLogsResponseBody extends $tea.Model {
  logs?: DescribeGtmLogsResponseBodyLogs;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: DescribeGtmLogsResponseBodyLogs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGtmLogsResponseBody;
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
      body: DescribeGtmLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmMonitorAvailableConfigRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmMonitorAvailableConfigResponseBody extends $tea.Model {
  ispCityNodes?: DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodes;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ispCityNodes: 'IspCityNodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCityNodes: DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodes,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmMonitorAvailableConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGtmMonitorAvailableConfigResponseBody;
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
      body: DescribeGtmMonitorAvailableConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmMonitorConfigRequest extends $tea.Model {
  lang?: string;
  monitorConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      monitorConfigId: 'MonitorConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      monitorConfigId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmMonitorConfigResponseBody extends $tea.Model {
  createTime?: string;
  createTimestamp?: number;
  evaluationCount?: number;
  interval?: number;
  ispCityNodes?: DescribeGtmMonitorConfigResponseBodyIspCityNodes;
  monitorConfigId?: string;
  monitorExtendInfo?: string;
  protocolType?: string;
  requestId?: string;
  timeout?: number;
  updateTime?: string;
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      evaluationCount: 'EvaluationCount',
      interval: 'Interval',
      ispCityNodes: 'IspCityNodes',
      monitorConfigId: 'MonitorConfigId',
      monitorExtendInfo: 'MonitorExtendInfo',
      protocolType: 'ProtocolType',
      requestId: 'RequestId',
      timeout: 'Timeout',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      evaluationCount: 'number',
      interval: 'number',
      ispCityNodes: DescribeGtmMonitorConfigResponseBodyIspCityNodes,
      monitorConfigId: 'string',
      monitorExtendInfo: 'string',
      protocolType: 'string',
      requestId: 'string',
      timeout: 'number',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmMonitorConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGtmMonitorConfigResponseBody;
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
      body: DescribeGtmMonitorConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanRequest extends $tea.Model {
  lang?: string;
  recoveryPlanId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      recoveryPlanId: 'RecoveryPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      recoveryPlanId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanResponseBody extends $tea.Model {
  createTime?: string;
  createTimestamp?: number;
  faultAddrPoolNum?: number;
  faultAddrPools?: DescribeGtmRecoveryPlanResponseBodyFaultAddrPools;
  lastExecuteTime?: string;
  lastExecuteTimestamp?: number;
  lastRollbackTime?: string;
  lastRollbackTimestamp?: number;
  name?: string;
  recoveryPlanId?: number;
  remark?: string;
  requestId?: string;
  status?: string;
  updateTime?: string;
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      faultAddrPoolNum: 'FaultAddrPoolNum',
      faultAddrPools: 'FaultAddrPools',
      lastExecuteTime: 'LastExecuteTime',
      lastExecuteTimestamp: 'LastExecuteTimestamp',
      lastRollbackTime: 'LastRollbackTime',
      lastRollbackTimestamp: 'LastRollbackTimestamp',
      name: 'Name',
      recoveryPlanId: 'RecoveryPlanId',
      remark: 'Remark',
      requestId: 'RequestId',
      status: 'Status',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      faultAddrPoolNum: 'number',
      faultAddrPools: DescribeGtmRecoveryPlanResponseBodyFaultAddrPools,
      lastExecuteTime: 'string',
      lastExecuteTimestamp: 'number',
      lastRollbackTime: 'string',
      lastRollbackTimestamp: 'number',
      name: 'string',
      recoveryPlanId: 'number',
      remark: 'string',
      requestId: 'string',
      status: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGtmRecoveryPlanResponseBody;
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
      body: DescribeGtmRecoveryPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlanAvailableConfigRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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
  statusCode: number;
  body: DescribeGtmRecoveryPlanAvailableConfigResponseBody;
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
      body: DescribeGtmRecoveryPlanAvailableConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlansRequest extends $tea.Model {
  keyword?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlansResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  recoveryPlans?: DescribeGtmRecoveryPlansResponseBodyRecoveryPlans;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recoveryPlans: 'RecoveryPlans',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      recoveryPlans: DescribeGtmRecoveryPlansResponseBodyRecoveryPlans,
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmRecoveryPlansResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGtmRecoveryPlansResponseBody;
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
      body: DescribeGtmRecoveryPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDomainsRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDomainsResponseBody extends $tea.Model {
  instanceDomains?: DescribeInstanceDomainsResponseBodyInstanceDomains[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      instanceDomains: 'InstanceDomains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDomains: { 'type': 'array', 'itemType': DescribeInstanceDomainsResponseBodyInstanceDomains },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceDomainsResponseBody;
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
      body: DescribeInstanceDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheInstancesRequest extends $tea.Model {
  direction?: string;
  isp?: string;
  keyword?: string;
  lang?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      isp: 'Isp',
      keyword: 'Keyword',
      lang: 'Lang',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      isp: 'string',
      keyword: 'string',
      lang: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheInstancesResponseBody extends $tea.Model {
  ispFlushCacheInstances?: DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstances[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      ispFlushCacheInstances: 'IspFlushCacheInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispFlushCacheInstances: { 'type': 'array', 'itemType': DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIspFlushCacheInstancesResponseBody;
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
      body: DescribeIspFlushCacheInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheRemainQuotaRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheRemainQuotaResponseBody extends $tea.Model {
  requestId?: string;
  telecomRemainQuota?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      telecomRemainQuota: 'TelecomRemainQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      telecomRemainQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheRemainQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIspFlushCacheRemainQuotaResponseBody;
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
      body: DescribeIspFlushCacheRemainQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheTaskRequest extends $tea.Model {
  lang?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheTaskResponseBody extends $tea.Model {
  createTime?: string;
  createTimestamp?: number;
  domainName?: string;
  flushCacheResults?: DescribeIspFlushCacheTaskResponseBodyFlushCacheResults[];
  instanceId?: string;
  instanceName?: string;
  isp?: string;
  requestId?: string;
  taskId?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      domainName: 'DomainName',
      flushCacheResults: 'FlushCacheResults',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isp: 'Isp',
      requestId: 'RequestId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      domainName: 'string',
      flushCacheResults: { 'type': 'array', 'itemType': DescribeIspFlushCacheTaskResponseBodyFlushCacheResults },
      instanceId: 'string',
      instanceName: 'string',
      isp: 'string',
      requestId: 'string',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIspFlushCacheTaskResponseBody;
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
      body: DescribeIspFlushCacheTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheTasksRequest extends $tea.Model {
  direction?: string;
  domainName?: string;
  instanceId?: string;
  isp?: string;
  lang?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      isp: 'Isp',
      lang: 'Lang',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      domainName: 'string',
      instanceId: 'string',
      isp: 'string',
      lang: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheTasksResponseBody extends $tea.Model {
  ispFlushCacheTasks?: DescribeIspFlushCacheTasksResponseBodyIspFlushCacheTasks[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      ispFlushCacheTasks: 'IspFlushCacheTasks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispFlushCacheTasks: { 'type': 'array', 'itemType': DescribeIspFlushCacheTasksResponseBodyIspFlushCacheTasks },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIspFlushCacheTasksResponseBody;
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
      body: DescribeIspFlushCacheTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsAccountSummaryRequest extends $tea.Model {
  endDate?: string;
  lang?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      lang: 'Lang',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      lang: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsAccountSummaryResponseBody extends $tea.Model {
  data?: DescribePdnsAccountSummaryResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribePdnsAccountSummaryResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsAccountSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePdnsAccountSummaryResponseBody;
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
      body: DescribePdnsAccountSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsAppKeyRequest extends $tea.Model {
  appKeyId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      appKeyId: 'AppKeyId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKeyId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsAppKeyResponseBody extends $tea.Model {
  appKey?: DescribePdnsAppKeyResponseBodyAppKey;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: DescribePdnsAppKeyResponseBodyAppKey,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsAppKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePdnsAppKeyResponseBody;
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
      body: DescribePdnsAppKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsAppKeysRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsAppKeysResponseBody extends $tea.Model {
  appKeys?: DescribePdnsAppKeysResponseBodyAppKeys[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appKeys: 'AppKeys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKeys: { 'type': 'array', 'itemType': DescribePdnsAppKeysResponseBodyAppKeys },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsAppKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePdnsAppKeysResponseBody;
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
      body: DescribePdnsAppKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsOperateLogsRequest extends $tea.Model {
  actionType?: string;
  endDate?: string;
  keyword?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      endDate: 'EndDate',
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      endDate: 'string',
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsOperateLogsResponseBody extends $tea.Model {
  logs?: DescribePdnsOperateLogsResponseBodyLogs[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': DescribePdnsOperateLogsResponseBodyLogs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsOperateLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePdnsOperateLogsResponseBody;
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
      body: DescribePdnsOperateLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsRequestStatisticRequest extends $tea.Model {
  domainName?: string;
  endDate?: string;
  lang?: string;
  startDate?: string;
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endDate: 'EndDate',
      lang: 'Lang',
      startDate: 'StartDate',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endDate: 'string',
      lang: 'string',
      startDate: 'string',
      subDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsRequestStatisticResponseBody extends $tea.Model {
  data?: DescribePdnsRequestStatisticResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribePdnsRequestStatisticResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsRequestStatisticResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePdnsRequestStatisticResponseBody;
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
      body: DescribePdnsRequestStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsRequestStatisticsRequest extends $tea.Model {
  domainName?: string;
  endDate?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  subDomain?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endDate: 'EndDate',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      subDomain: 'SubDomain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endDate: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      subDomain: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsRequestStatisticsResponseBody extends $tea.Model {
  data?: DescribePdnsRequestStatisticsResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribePdnsRequestStatisticsResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsRequestStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePdnsRequestStatisticsResponseBody;
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
      body: DescribePdnsRequestStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsThreatLogsRequest extends $tea.Model {
  endDate?: string;
  keyword?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  threatLevel?: string;
  threatSourceIp?: string;
  threatType?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      threatLevel: 'ThreatLevel',
      threatSourceIp: 'ThreatSourceIp',
      threatType: 'ThreatType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      threatLevel: 'string',
      threatSourceIp: 'string',
      threatType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsThreatLogsResponseBody extends $tea.Model {
  logs?: DescribePdnsThreatLogsResponseBodyLogs[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': DescribePdnsThreatLogsResponseBodyLogs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsThreatLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePdnsThreatLogsResponseBody;
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
      body: DescribePdnsThreatLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsThreatStatisticRequest extends $tea.Model {
  endDate?: string;
  lang?: string;
  startDate?: string;
  threatSourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      lang: 'Lang',
      startDate: 'StartDate',
      threatSourceIp: 'ThreatSourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      lang: 'string',
      startDate: 'string',
      threatSourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsThreatStatisticResponseBody extends $tea.Model {
  data?: DescribePdnsThreatStatisticResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribePdnsThreatStatisticResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsThreatStatisticResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePdnsThreatStatisticResponseBody;
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
      body: DescribePdnsThreatStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsThreatStatisticsRequest extends $tea.Model {
  direction?: string;
  domainName?: string;
  endDate?: string;
  lang?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  subDomain?: string;
  threatLevel?: string;
  threatSourceIp?: string;
  threatType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      domainName: 'DomainName',
      endDate: 'EndDate',
      lang: 'Lang',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      subDomain: 'SubDomain',
      threatLevel: 'ThreatLevel',
      threatSourceIp: 'ThreatSourceIp',
      threatType: 'ThreatType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      domainName: 'string',
      endDate: 'string',
      lang: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      subDomain: 'string',
      threatLevel: 'string',
      threatSourceIp: 'string',
      threatType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsThreatStatisticsResponseBody extends $tea.Model {
  data?: DescribePdnsThreatStatisticsResponseBodyData[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribePdnsThreatStatisticsResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsThreatStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePdnsThreatStatisticsResponseBody;
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
      body: DescribePdnsThreatStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsUdpIpSegmentsRequest extends $tea.Model {
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsUdpIpSegmentsResponseBody extends $tea.Model {
  ipSegments?: DescribePdnsUdpIpSegmentsResponseBodyIpSegments[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipSegments: 'IpSegments',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipSegments: { 'type': 'array', 'itemType': DescribePdnsUdpIpSegmentsResponseBodyIpSegments },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsUdpIpSegmentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePdnsUdpIpSegmentsResponseBody;
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
      body: DescribePdnsUdpIpSegmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsUserInfoRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsUserInfoResponseBody extends $tea.Model {
  requestId?: string;
  userInfo?: DescribePdnsUserInfoResponseBodyUserInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userInfo: DescribePdnsUserInfoResponseBodyUserInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePdnsUserInfoResponseBody;
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
      body: DescribePdnsUserInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordLogsRequest extends $tea.Model {
  domainName?: string;
  keyWord?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  startDate?: string;
  userClientIp?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      keyWord: 'KeyWord',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      userClientIp: 'UserClientIp',
      endDate: 'endDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      keyWord: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      userClientIp: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordLogsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  recordLogs?: DescribeRecordLogsResponseBodyRecordLogs;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recordLogs: 'RecordLogs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      recordLogs: DescribeRecordLogsResponseBodyRecordLogs,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRecordLogsResponseBody;
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
      body: DescribeRecordLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordResolveStatisticsSummaryRequest extends $tea.Model {
  direction?: string;
  domainName?: string;
  domainType?: string;
  endDate?: string;
  keyword?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  searchMode?: string;
  startDate?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      domainName: 'DomainName',
      domainType: 'DomainType',
      endDate: 'EndDate',
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchMode: 'SearchMode',
      startDate: 'StartDate',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      domainName: 'string',
      domainType: 'string',
      endDate: 'string',
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchMode: 'string',
      startDate: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordResolveStatisticsSummaryResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  statistics?: DescribeRecordResolveStatisticsSummaryResponseBodyStatistics[];
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      statistics: 'Statistics',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      statistics: { 'type': 'array', 'itemType': DescribeRecordResolveStatisticsSummaryResponseBodyStatistics },
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordResolveStatisticsSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRecordResolveStatisticsSummaryResponseBody;
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
      body: DescribeRecordResolveStatisticsSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordStatisticsRequest extends $tea.Model {
  domainName?: string;
  domainType?: string;
  endDate?: string;
  lang?: string;
  rr?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainType: 'DomainType',
      endDate: 'EndDate',
      lang: 'Lang',
      rr: 'Rr',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainType: 'string',
      endDate: 'string',
      lang: 'string',
      rr: 'string',
      startDate: 'string',
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
  statusCode: number;
  body: DescribeRecordStatisticsResponseBody;
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
      body: DescribeRecordStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordStatisticsSummaryRequest extends $tea.Model {
  domainName?: string;
  domainType?: string;
  endDate?: string;
  keyword?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  searchMode?: string;
  startDate?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainType: 'DomainType',
      endDate: 'EndDate',
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchMode: 'SearchMode',
      startDate: 'StartDate',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainType: 'string',
      endDate: 'string',
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchMode: 'string',
      startDate: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordStatisticsSummaryResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  statistics?: DescribeRecordStatisticsSummaryResponseBodyStatistics;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      statistics: 'Statistics',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      statistics: DescribeRecordStatisticsSummaryResponseBodyStatistics,
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordStatisticsSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRecordStatisticsSummaryResponseBody;
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
      body: DescribeRecordStatisticsSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubDomainRecordsRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  line?: string;
  pageNumber?: number;
  pageSize?: number;
  subDomain?: string;
  type?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      line: 'Line',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      subDomain: 'SubDomain',
      type: 'Type',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      line: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      subDomain: 'string',
      type: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubDomainRecordsResponseBody extends $tea.Model {
  domainRecords?: DescribeSubDomainRecordsResponseBodyDomainRecords;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainRecords: 'DomainRecords',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainRecords: DescribeSubDomainRecordsResponseBodyDomainRecords,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubDomainRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSubDomainRecordsResponseBody;
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
      body: DescribeSubDomainRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportLinesRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
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
  statusCode: number;
  body: DescribeSupportLinesResponseBody;
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
      body: DescribeSupportLinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsRequest extends $tea.Model {
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  tags?: DescribeTagsResponseBodyTags[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tags: 'Tags',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeTagsResponseBodyTags },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTagsResponseBody;
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
      body: DescribeTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransferDomainsRequest extends $tea.Model {
  domainName?: string;
  fromUserId?: number;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  targetUserId?: number;
  transferType?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      fromUserId: 'FromUserId',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      targetUserId: 'TargetUserId',
      transferType: 'TransferType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      fromUserId: 'number',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      targetUserId: 'number',
      transferType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransferDomainsResponseBody extends $tea.Model {
  domainTransfers?: DescribeTransferDomainsResponseBodyDomainTransfers;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainTransfers: 'DomainTransfers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTransfers: DescribeTransferDomainsResponseBodyDomainTransfers,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransferDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTransferDomainsResponseBody;
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
      body: DescribeTransferDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteGtmRecoveryPlanRequest extends $tea.Model {
  lang?: string;
  recoveryPlanId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      recoveryPlanId: 'RecoveryPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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
  statusCode: number;
  body: ExecuteGtmRecoveryPlanResponseBody;
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
      body: ExecuteGtmRecoveryPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMainDomainNameRequest extends $tea.Model {
  inputString?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      inputString: 'InputString',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputString: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMainDomainNameResponseBody extends $tea.Model {
  domainLevel?: number;
  domainName?: string;
  RR?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainLevel: 'DomainLevel',
      domainName: 'DomainName',
      RR: 'RR',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLevel: 'number',
      domainName: 'string',
      RR: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMainDomainNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMainDomainNameResponseBody;
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
      body: GetMainDomainNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTxtRecordForVerifyRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTxtRecordForVerifyResponseBody extends $tea.Model {
  domainName?: string;
  RR?: string;
  requestId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      RR: 'RR',
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      RR: 'string',
      requestId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTxtRecordForVerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTxtRecordForVerifyResponseBody;
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
      body: GetTxtRecordForVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  lang?: string;
  nextToken?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
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
  statusCode: number;
  body: ListTagResourcesResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHichinaDomainDNSRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHichinaDomainDNSResponseBody extends $tea.Model {
  newDnsServers?: ModifyHichinaDomainDNSResponseBodyNewDnsServers;
  originalDnsServers?: ModifyHichinaDomainDNSResponseBodyOriginalDnsServers;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      newDnsServers: 'NewDnsServers',
      originalDnsServers: 'OriginalDnsServers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newDnsServers: ModifyHichinaDomainDNSResponseBodyNewDnsServers,
      originalDnsServers: ModifyHichinaDomainDNSResponseBodyOriginalDnsServers,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHichinaDomainDNSResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyHichinaDomainDNSResponseBody;
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
      body: ModifyHichinaDomainDNSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveDomainResourceGroupRequest extends $tea.Model {
  lang?: string;
  newResourceGroupId?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      newResourceGroupId: 'NewResourceGroupId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      newResourceGroupId: 'string',
      resourceId: 'string',
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
  statusCode: number;
  body: MoveDomainResourceGroupResponseBody;
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
      body: MoveDomainResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveGtmResourceGroupRequest extends $tea.Model {
  lang?: string;
  newResourceGroupId?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      newResourceGroupId: 'NewResourceGroupId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      newResourceGroupId: 'string',
      resourceId: 'string',
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
  statusCode: number;
  body: MoveGtmResourceGroupResponseBody;
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
      body: MoveGtmResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateBatchDomainRequest extends $tea.Model {
  domainRecordInfo?: OperateBatchDomainRequestDomainRecordInfo[];
  lang?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainRecordInfo: 'DomainRecordInfo',
      lang: 'Lang',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainRecordInfo: { 'type': 'array', 'itemType': OperateBatchDomainRequestDomainRecordInfo },
      lang: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateBatchDomainResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateBatchDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OperateBatchDomainResponseBody;
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
      body: OperateBatchDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PausePdnsServiceRequest extends $tea.Model {
  lang?: string;
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PausePdnsServiceResponseBody extends $tea.Model {
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

export class PausePdnsServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PausePdnsServiceResponseBody;
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
      body: PausePdnsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewGtmRecoveryPlanRequest extends $tea.Model {
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  recoveryPlanId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      recoveryPlanId: 'RecoveryPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      recoveryPlanId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewGtmRecoveryPlanResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  previews?: PreviewGtmRecoveryPlanResponseBodyPreviews;
  requestId?: string;
  totalItems?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      previews: 'Previews',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      previews: PreviewGtmRecoveryPlanResponseBodyPreviews,
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewGtmRecoveryPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PreviewGtmRecoveryPlanResponseBody;
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
      body: PreviewGtmRecoveryPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePdnsAppKeyRequest extends $tea.Model {
  appKeyId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      appKeyId: 'AppKeyId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKeyId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePdnsAppKeyResponseBody extends $tea.Model {
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

export class RemovePdnsAppKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemovePdnsAppKeyResponseBody;
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
      body: RemovePdnsAppKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePdnsUdpIpSegmentRequest extends $tea.Model {
  ip?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePdnsUdpIpSegmentResponseBody extends $tea.Model {
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

export class RemovePdnsUdpIpSegmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemovePdnsUdpIpSegmentResponseBody;
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
      body: RemovePdnsUdpIpSegmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumePdnsServiceRequest extends $tea.Model {
  lang?: string;
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumePdnsServiceResponseBody extends $tea.Model {
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

export class ResumePdnsServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResumePdnsServiceResponseBody;
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
      body: ResumePdnsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveDomainRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
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
  statusCode: number;
  body: RetrieveDomainResponseBody;
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
      body: RetrieveDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackGtmRecoveryPlanRequest extends $tea.Model {
  lang?: string;
  recoveryPlanId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      recoveryPlanId: 'RecoveryPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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
  statusCode: number;
  body: RollbackGtmRecoveryPlanResponseBody;
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
      body: RollbackGtmRecoveryPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDNSSLBStatusRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  line?: string;
  open?: boolean;
  subDomain?: string;
  type?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      line: 'Line',
      open: 'Open',
      subDomain: 'SubDomain',
      type: 'Type',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      line: 'string',
      open: 'boolean',
      subDomain: 'string',
      type: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDNSSLBStatusResponseBody extends $tea.Model {
  open?: boolean;
  recordCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      open: 'Open',
      recordCount: 'RecordCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      open: 'boolean',
      recordCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDNSSLBStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDNSSLBStatusResponseBody;
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
      body: SetDNSSLBStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDnsGtmAccessModeRequest extends $tea.Model {
  accessMode?: string;
  lang?: string;
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      lang: 'Lang',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      lang: 'string',
      strategyId: 'string',
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
  statusCode: number;
  body: SetDnsGtmAccessModeResponseBody;
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
      body: SetDnsGtmAccessModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDnsGtmMonitorStatusRequest extends $tea.Model {
  lang?: string;
  monitorConfigId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      monitorConfigId: 'MonitorConfigId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  statusCode: number;
  body: SetDnsGtmMonitorStatusResponseBody;
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
      body: SetDnsGtmMonitorStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainDnssecStatusRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
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
  statusCode: number;
  body: SetDomainDnssecStatusResponseBody;
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
      body: SetDomainDnssecStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainRecordStatusRequest extends $tea.Model {
  lang?: string;
  recordId?: string;
  status?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      recordId: 'RecordId',
      status: 'Status',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      recordId: 'string',
      status: 'string',
      userClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainRecordStatusResponseBody extends $tea.Model {
  recordId?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainRecordStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDomainRecordStatusResponseBody;
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
      body: SetDomainRecordStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGtmAccessModeRequest extends $tea.Model {
  accessMode?: string;
  lang?: string;
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      lang: 'Lang',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      lang: 'string',
      strategyId: 'string',
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
  statusCode: number;
  body: SetGtmAccessModeResponseBody;
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
      body: SetGtmAccessModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGtmMonitorStatusRequest extends $tea.Model {
  lang?: string;
  monitorConfigId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      monitorConfigId: 'MonitorConfigId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  statusCode: number;
  body: SetGtmMonitorStatusResponseBody;
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
      body: SetGtmMonitorStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIspFlushCacheTaskRequest extends $tea.Model {
  clientToken?: string;
  domainName?: string;
  isp?: string[];
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      domainName: 'DomainName',
      isp: 'Isp',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      domainName: 'string',
      isp: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitIspFlushCacheTaskResponseBody extends $tea.Model {
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

export class SubmitIspFlushCacheTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitIspFlushCacheTaskResponseBody;
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
      body: SubmitIspFlushCacheTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchDnsGtmInstanceStrategyModeRequest extends $tea.Model {
  instanceId?: string;
  lang?: string;
  strategyMode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      strategyMode: 'StrategyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
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
  statusCode: number;
  body: SwitchDnsGtmInstanceStrategyModeResponseBody;
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
      body: SwitchDnsGtmInstanceStrategyModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  lang?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
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
  statusCode: number;
  body: TagResourcesResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferDomainRequest extends $tea.Model {
  domainNames?: string;
  lang?: string;
  remark?: string;
  targetUserId?: number;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      lang: 'Lang',
      remark: 'Remark',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      lang: 'string',
      remark: 'string',
      targetUserId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferDomainResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TransferDomainResponseBody;
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
      body: TransferDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindInstanceDomainsRequest extends $tea.Model {
  domainNames?: string;
  instanceId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      instanceId: 'InstanceId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      instanceId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindInstanceDomainsResponseBody extends $tea.Model {
  failedCount?: number;
  requestId?: string;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedCount: 'FailedCount',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCount: 'number',
      requestId: 'string',
      successCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindInstanceDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindInstanceDomainsResponseBody;
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
      body: UnbindInstanceDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  lang?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      lang: 'Lang',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      lang: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
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
  statusCode: number;
  body: UntagResourcesResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppKeyStateRequest extends $tea.Model {
  appKeyId?: string;
  lang?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appKeyId: 'AppKeyId',
      lang: 'Lang',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKeyId: 'string',
      lang: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppKeyStateResponseBody extends $tea.Model {
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

export class UpdateAppKeyStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAppKeyStateResponseBody;
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
      body: UpdateAppKeyStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomLineRequest extends $tea.Model {
  ipSegment?: UpdateCustomLineRequestIpSegment[];
  lang?: string;
  lineId?: number;
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      ipSegment: 'IpSegment',
      lang: 'Lang',
      lineId: 'LineId',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipSegment: { 'type': 'array', 'itemType': UpdateCustomLineRequestIpSegment },
      lang: 'string',
      lineId: 'number',
      lineName: 'string',
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
  statusCode: number;
  body: UpdateCustomLineResponseBody;
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
      body: UpdateCustomLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDNSSLBWeightRequest extends $tea.Model {
  lang?: string;
  recordId?: string;
  userClientIp?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      recordId: 'RecordId',
      userClientIp: 'UserClientIp',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      recordId: 'string',
      userClientIp: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDNSSLBWeightResponseBody extends $tea.Model {
  recordId?: string;
  requestId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
      requestId: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDNSSLBWeightResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDNSSLBWeightResponseBody;
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
      body: UpdateDNSSLBWeightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsCacheDomainRequest extends $tea.Model {
  cacheTtlMax?: number;
  cacheTtlMin?: number;
  domainName?: string;
  instanceId?: string;
  lang?: string;
  sourceDnsServer?: UpdateDnsCacheDomainRequestSourceDnsServer[];
  sourceEdns?: string;
  sourceProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      cacheTtlMax: 'CacheTtlMax',
      cacheTtlMin: 'CacheTtlMin',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      lang: 'Lang',
      sourceDnsServer: 'SourceDnsServer',
      sourceEdns: 'SourceEdns',
      sourceProtocol: 'SourceProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheTtlMax: 'number',
      cacheTtlMin: 'number',
      domainName: 'string',
      instanceId: 'string',
      lang: 'string',
      sourceDnsServer: { 'type': 'array', 'itemType': UpdateDnsCacheDomainRequestSourceDnsServer },
      sourceEdns: 'string',
      sourceProtocol: 'string',
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
  statusCode: number;
  body: UpdateDnsCacheDomainResponseBody;
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
      body: UpdateDnsCacheDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsCacheDomainRemarkRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
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
  statusCode: number;
  body: UpdateDnsCacheDomainRemarkResponseBody;
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
      body: UpdateDnsCacheDomainRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmAccessStrategyRequest extends $tea.Model {
  accessMode?: string;
  defaultAddrPool?: UpdateDnsGtmAccessStrategyRequestDefaultAddrPool[];
  defaultAddrPoolType?: string;
  defaultLatencyOptimization?: string;
  defaultLbaStrategy?: string;
  defaultMaxReturnAddrNum?: number;
  defaultMinAvailableAddrNum?: number;
  failoverAddrPool?: UpdateDnsGtmAccessStrategyRequestFailoverAddrPool[];
  failoverAddrPoolType?: string;
  failoverLatencyOptimization?: string;
  failoverLbaStrategy?: string;
  failoverMaxReturnAddrNum?: number;
  failoverMinAvailableAddrNum?: number;
  lang?: string;
  lines?: string;
  strategyId?: string;
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      defaultAddrPool: 'DefaultAddrPool',
      defaultAddrPoolType: 'DefaultAddrPoolType',
      defaultLatencyOptimization: 'DefaultLatencyOptimization',
      defaultLbaStrategy: 'DefaultLbaStrategy',
      defaultMaxReturnAddrNum: 'DefaultMaxReturnAddrNum',
      defaultMinAvailableAddrNum: 'DefaultMinAvailableAddrNum',
      failoverAddrPool: 'FailoverAddrPool',
      failoverAddrPoolType: 'FailoverAddrPoolType',
      failoverLatencyOptimization: 'FailoverLatencyOptimization',
      failoverLbaStrategy: 'FailoverLbaStrategy',
      failoverMaxReturnAddrNum: 'FailoverMaxReturnAddrNum',
      failoverMinAvailableAddrNum: 'FailoverMinAvailableAddrNum',
      lang: 'Lang',
      lines: 'Lines',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      defaultAddrPool: { 'type': 'array', 'itemType': UpdateDnsGtmAccessStrategyRequestDefaultAddrPool },
      defaultAddrPoolType: 'string',
      defaultLatencyOptimization: 'string',
      defaultLbaStrategy: 'string',
      defaultMaxReturnAddrNum: 'number',
      defaultMinAvailableAddrNum: 'number',
      failoverAddrPool: { 'type': 'array', 'itemType': UpdateDnsGtmAccessStrategyRequestFailoverAddrPool },
      failoverAddrPoolType: 'string',
      failoverLatencyOptimization: 'string',
      failoverLbaStrategy: 'string',
      failoverMaxReturnAddrNum: 'number',
      failoverMinAvailableAddrNum: 'number',
      lang: 'string',
      lines: 'string',
      strategyId: 'string',
      strategyName: 'string',
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
  statusCode: number;
  body: UpdateDnsGtmAccessStrategyResponseBody;
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
      body: UpdateDnsGtmAccessStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmAddressPoolRequest extends $tea.Model {
  addr?: UpdateDnsGtmAddressPoolRequestAddr[];
  addrPoolId?: string;
  lang?: string;
  lbaStrategy?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      addrPoolId: 'AddrPoolId',
      lang: 'Lang',
      lbaStrategy: 'LbaStrategy',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': UpdateDnsGtmAddressPoolRequestAddr },
      addrPoolId: 'string',
      lang: 'string',
      lbaStrategy: 'string',
      name: 'string',
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
  statusCode: number;
  body: UpdateDnsGtmAddressPoolResponseBody;
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
      body: UpdateDnsGtmAddressPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmInstanceGlobalConfigRequest extends $tea.Model {
  alertConfig?: UpdateDnsGtmInstanceGlobalConfigRequestAlertConfig[];
  alertGroup?: string;
  cnameType?: string;
  forceUpdate?: boolean;
  instanceId?: string;
  instanceName?: string;
  lang?: string;
  publicCnameMode?: string;
  publicRr?: string;
  publicUserDomainName?: string;
  publicZoneName?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      alertGroup: 'AlertGroup',
      cnameType: 'CnameType',
      forceUpdate: 'ForceUpdate',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lang: 'Lang',
      publicCnameMode: 'PublicCnameMode',
      publicRr: 'PublicRr',
      publicUserDomainName: 'PublicUserDomainName',
      publicZoneName: 'PublicZoneName',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': UpdateDnsGtmInstanceGlobalConfigRequestAlertConfig },
      alertGroup: 'string',
      cnameType: 'string',
      forceUpdate: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      lang: 'string',
      publicCnameMode: 'string',
      publicRr: 'string',
      publicUserDomainName: 'string',
      publicZoneName: 'string',
      ttl: 'number',
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
  statusCode: number;
  body: UpdateDnsGtmInstanceGlobalConfigResponseBody;
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
      body: UpdateDnsGtmInstanceGlobalConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmMonitorRequest extends $tea.Model {
  evaluationCount?: number;
  interval?: number;
  ispCityNode?: UpdateDnsGtmMonitorRequestIspCityNode[];
  lang?: string;
  monitorConfigId?: string;
  monitorExtendInfo?: string;
  protocolType?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      evaluationCount: 'EvaluationCount',
      interval: 'Interval',
      ispCityNode: 'IspCityNode',
      lang: 'Lang',
      monitorConfigId: 'MonitorConfigId',
      monitorExtendInfo: 'MonitorExtendInfo',
      protocolType: 'ProtocolType',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationCount: 'number',
      interval: 'number',
      ispCityNode: { 'type': 'array', 'itemType': UpdateDnsGtmMonitorRequestIspCityNode },
      lang: 'string',
      monitorConfigId: 'string',
      monitorExtendInfo: 'string',
      protocolType: 'string',
      timeout: 'number',
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
  statusCode: number;
  body: UpdateDnsGtmMonitorResponseBody;
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
      body: UpdateDnsGtmMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainGroupRequest extends $tea.Model {
  groupId?: string;
  groupName?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainGroupResponseBody extends $tea.Model {
  groupId?: string;
  groupName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDomainGroupResponseBody;
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
      body: UpdateDomainGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRecordRequest extends $tea.Model {
  lang?: string;
  line?: string;
  priority?: number;
  RR?: string;
  recordId?: string;
  TTL?: number;
  type?: string;
  userClientIp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      line: 'Line',
      priority: 'Priority',
      RR: 'RR',
      recordId: 'RecordId',
      TTL: 'TTL',
      type: 'Type',
      userClientIp: 'UserClientIp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      line: 'string',
      priority: 'number',
      RR: 'string',
      recordId: 'string',
      TTL: 'number',
      type: 'string',
      userClientIp: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRecordResponseBody extends $tea.Model {
  recordId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDomainRecordResponseBody;
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
      body: UpdateDomainRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRecordRemarkRequest extends $tea.Model {
  lang?: string;
  recordId?: string;
  remark?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      recordId: 'RecordId',
      remark: 'Remark',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      recordId: 'string',
      remark: 'string',
      userClientIp: 'string',
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
  statusCode: number;
  body: UpdateDomainRecordRemarkResponseBody;
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
      body: UpdateDomainRecordRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDomainRemarkRequest extends $tea.Model {
  domainName?: string;
  lang?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
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
  statusCode: number;
  body: UpdateDomainRemarkResponseBody;
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
      body: UpdateDomainRemarkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmAccessStrategyRequest extends $tea.Model {
  accessLines?: string;
  defaultAddrPoolId?: string;
  failoverAddrPoolId?: string;
  lang?: string;
  strategyId?: string;
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      accessLines: 'AccessLines',
      defaultAddrPoolId: 'DefaultAddrPoolId',
      failoverAddrPoolId: 'FailoverAddrPoolId',
      lang: 'Lang',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLines: 'string',
      defaultAddrPoolId: 'string',
      failoverAddrPoolId: 'string',
      lang: 'string',
      strategyId: 'string',
      strategyName: 'string',
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
  statusCode: number;
  body: UpdateGtmAccessStrategyResponseBody;
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
      body: UpdateGtmAccessStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmAddressPoolRequest extends $tea.Model {
  addr?: UpdateGtmAddressPoolRequestAddr[];
  addrPoolId?: string;
  lang?: string;
  minAvailableAddrNum?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      addrPoolId: 'AddrPoolId',
      lang: 'Lang',
      minAvailableAddrNum: 'MinAvailableAddrNum',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': UpdateGtmAddressPoolRequestAddr },
      addrPoolId: 'string',
      lang: 'string',
      minAvailableAddrNum: 'number',
      name: 'string',
      type: 'string',
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
  statusCode: number;
  body: UpdateGtmAddressPoolResponseBody;
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
      body: UpdateGtmAddressPoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmInstanceGlobalConfigRequest extends $tea.Model {
  alertGroup?: string;
  cnameCustomDomainName?: string;
  cnameMode?: string;
  instanceId?: string;
  instanceName?: string;
  lang?: string;
  lbaStrategy?: string;
  ttl?: number;
  userDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      alertGroup: 'AlertGroup',
      cnameCustomDomainName: 'CnameCustomDomainName',
      cnameMode: 'CnameMode',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lang: 'Lang',
      lbaStrategy: 'LbaStrategy',
      ttl: 'Ttl',
      userDomainName: 'UserDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertGroup: 'string',
      cnameCustomDomainName: 'string',
      cnameMode: 'string',
      instanceId: 'string',
      instanceName: 'string',
      lang: 'string',
      lbaStrategy: 'string',
      ttl: 'number',
      userDomainName: 'string',
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
  statusCode: number;
  body: UpdateGtmInstanceGlobalConfigResponseBody;
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
      body: UpdateGtmInstanceGlobalConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmMonitorRequest extends $tea.Model {
  evaluationCount?: number;
  interval?: number;
  ispCityNode?: UpdateGtmMonitorRequestIspCityNode[];
  lang?: string;
  monitorConfigId?: string;
  monitorExtendInfo?: string;
  protocolType?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      evaluationCount: 'EvaluationCount',
      interval: 'Interval',
      ispCityNode: 'IspCityNode',
      lang: 'Lang',
      monitorConfigId: 'MonitorConfigId',
      monitorExtendInfo: 'MonitorExtendInfo',
      protocolType: 'ProtocolType',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationCount: 'number',
      interval: 'number',
      ispCityNode: { 'type': 'array', 'itemType': UpdateGtmMonitorRequestIspCityNode },
      lang: 'string',
      monitorConfigId: 'string',
      monitorExtendInfo: 'string',
      protocolType: 'string',
      timeout: 'number',
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
  statusCode: number;
  body: UpdateGtmMonitorResponseBody;
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
      body: UpdateGtmMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGtmRecoveryPlanRequest extends $tea.Model {
  faultAddrPool?: string;
  lang?: string;
  name?: string;
  recoveryPlanId?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      faultAddrPool: 'FaultAddrPool',
      lang: 'Lang',
      name: 'Name',
      recoveryPlanId: 'RecoveryPlanId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultAddrPool: 'string',
      lang: 'string',
      name: 'string',
      recoveryPlanId: 'number',
      remark: 'string',
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
  statusCode: number;
  body: UpdateGtmRecoveryPlanResponseBody;
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
      body: UpdateGtmRecoveryPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIspFlushCacheInstanceConfigRequest extends $tea.Model {
  instanceId?: string;
  instanceName?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIspFlushCacheInstanceConfigResponseBody extends $tea.Model {
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

export class UpdateIspFlushCacheInstanceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateIspFlushCacheInstanceConfigResponseBody;
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
      body: UpdateIspFlushCacheInstanceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateDnsGtmCnameRrCanUseRequest extends $tea.Model {
  cnameMode?: string;
  cnameRr?: string;
  cnameType?: string;
  cnameZone?: string;
  instanceId?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      cnameMode: 'CnameMode',
      cnameRr: 'CnameRr',
      cnameType: 'CnameType',
      cnameZone: 'CnameZone',
      instanceId: 'InstanceId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnameMode: 'string',
      cnameRr: 'string',
      cnameType: 'string',
      cnameZone: 'string',
      instanceId: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateDnsGtmCnameRrCanUseResponseBody extends $tea.Model {
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

export class ValidateDnsGtmCnameRrCanUseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ValidateDnsGtmCnameRrCanUseResponseBody;
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
      body: ValidateDnsGtmCnameRrCanUseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidatePdnsUdpIpSegmentRequest extends $tea.Model {
  ip?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidatePdnsUdpIpSegmentResponseBody extends $tea.Model {
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

export class ValidatePdnsUdpIpSegmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ValidatePdnsUdpIpSegmentResponseBody;
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
      body: ValidatePdnsUdpIpSegmentResponseBody,
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
  id?: string;
  lbaWeight?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lbaWeight: 'LbaWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      lbaWeight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAccessStrategyRequestFailoverAddrPool extends $tea.Model {
  id?: string;
  lbaWeight?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lbaWeight: 'LbaWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      lbaWeight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDnsGtmAddressPoolRequestAddr extends $tea.Model {
  addr?: string;
  attributeInfo?: string;
  lbaWeight?: number;
  mode?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      attributeInfo: 'AttributeInfo',
      lbaWeight: 'LbaWeight',
      mode: 'Mode',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: 'string',
      attributeInfo: 'string',
      lbaWeight: 'number',
      mode: 'string',
      remark: 'string',
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
  lbaWeight?: number;
  mode?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      lbaWeight: 'LbaWeight',
      mode: 'Mode',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lbaWeight: 'number',
      mode: 'string',
      value: 'string',
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
  batchType?: string;
  domain?: string;
  line?: string;
  newRr?: string;
  newValue?: string;
  operateDateStr?: string;
  priority?: string;
  reason?: string;
  recordId?: string;
  remark?: string;
  rr?: string;
  rrStatus?: string;
  status?: boolean;
  ttl?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      batchType: 'BatchType',
      domain: 'Domain',
      line: 'Line',
      newRr: 'NewRr',
      newValue: 'NewValue',
      operateDateStr: 'OperateDateStr',
      priority: 'Priority',
      reason: 'Reason',
      recordId: 'RecordId',
      remark: 'Remark',
      rr: 'Rr',
      rrStatus: 'RrStatus',
      status: 'Status',
      ttl: 'Ttl',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchType: 'string',
      domain: 'string',
      line: 'string',
      newRr: 'string',
      newValue: 'string',
      operateDateStr: 'string',
      priority: 'string',
      reason: 'string',
      recordId: 'string',
      remark: 'string',
      rr: 'string',
      rrStatus: 'string',
      status: 'boolean',
      ttl: 'string',
      type: 'string',
      value: 'string',
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
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'number',
      name: 'string',
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
  lineAlgorithms?: DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithms;
  open?: boolean;
  recordCount?: number;
  subDomain?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lineAlgorithms: 'LineAlgorithms',
      open: 'Open',
      recordCount: 'RecordCount',
      subDomain: 'SubDomain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineAlgorithms: DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithms,
      open: 'boolean',
      recordCount: 'number',
      subDomain: 'string',
      type: 'string',
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
  cacheTtlMax?: number;
  cacheTtlMin?: number;
  createTime?: string;
  createTimestamp?: number;
  domainId?: string;
  domainName?: string;
  expireTime?: string;
  expireTimestamp?: number;
  instanceId?: string;
  remark?: string;
  sourceDnsServers?: DescribeDnsCacheDomainsResponseBodyDomainsSourceDnsServers[];
  sourceEdns?: string;
  sourceProtocol?: string;
  updateTime?: string;
  updateTimestamp?: number;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      cacheTtlMax: 'CacheTtlMax',
      cacheTtlMin: 'CacheTtlMin',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      domainId: 'DomainId',
      domainName: 'DomainName',
      expireTime: 'ExpireTime',
      expireTimestamp: 'ExpireTimestamp',
      instanceId: 'InstanceId',
      remark: 'Remark',
      sourceDnsServers: 'SourceDnsServers',
      sourceEdns: 'SourceEdns',
      sourceProtocol: 'SourceProtocol',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheTtlMax: 'number',
      cacheTtlMin: 'number',
      createTime: 'string',
      createTimestamp: 'number',
      domainId: 'string',
      domainName: 'string',
      expireTime: 'string',
      expireTimestamp: 'number',
      instanceId: 'string',
      remark: 'string',
      sourceDnsServers: { 'type': 'array', 'itemType': DescribeDnsCacheDomainsResponseBodyDomainsSourceDnsServers },
      sourceEdns: 'string',
      sourceProtocol: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      versionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPoolsEffectiveAddrPool extends $tea.Model {
  addrCount?: number;
  id?: string;
  lbaWeight?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addrCount: 'AddrCount',
      id: 'Id',
      lbaWeight: 'LbaWeight',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      id: 'string',
      lbaWeight: 'number',
      name: 'string',
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
  groupCode?: string;
  groupName?: string;
  lineCode?: string;
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
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
  createTime?: string;
  createTimestamp?: number;
  effectiveAddrPoolGroupType?: string;
  effectiveAddrPoolType?: string;
  effectiveAddrPools?: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPools;
  effectiveLbaStrategy?: string;
  lines?: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLines;
  strategyId?: string;
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      effectiveAddrPoolGroupType: 'EffectiveAddrPoolGroupType',
      effectiveAddrPoolType: 'EffectiveAddrPoolType',
      effectiveAddrPools: 'EffectiveAddrPools',
      effectiveLbaStrategy: 'EffectiveLbaStrategy',
      lines: 'Lines',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      effectiveAddrPoolGroupType: 'string',
      effectiveAddrPoolType: 'string',
      effectiveAddrPools: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyEffectiveAddrPools,
      effectiveLbaStrategy: 'string',
      lines: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLines,
      strategyId: 'string',
      strategyName: 'string',
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

export class DescribeDnsGtmAccessStrategyResponseBodyDefaultAddrPoolsDefaultAddrPool extends $tea.Model {
  addrCount?: number;
  id?: string;
  lbaWeight?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addrCount: 'AddrCount',
      id: 'Id',
      lbaWeight: 'LbaWeight',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      id: 'string',
      lbaWeight: 'number',
      name: 'string',
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

export class DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPoolsFailoverAddrPool extends $tea.Model {
  addrCount?: number;
  id?: string;
  lbaWeight?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addrCount: 'AddrCount',
      id: 'Id',
      lbaWeight: 'LbaWeight',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      id: 'string',
      lbaWeight: 'number',
      name: 'string',
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

export class DescribeDnsGtmAccessStrategyResponseBodyLinesLine extends $tea.Model {
  groupCode?: string;
  groupName?: string;
  lineCode?: string;
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
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

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPoolsDomainAddrPool extends $tea.Model {
  addrCount?: number;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addrCount: 'AddrCount',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      id: 'string',
      name: 'string',
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
  addrCount?: number;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addrCount: 'AddrCount',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      id: 'string',
      name: 'string',
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

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPoolsIpv6AddrPool extends $tea.Model {
  addrCount?: number;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addrCount: 'AddrCount',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      id: 'string',
      name: 'string',
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

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLinesLine extends $tea.Model {
  fatherCode?: string;
  groupCode?: string;
  groupName?: string;
  lineCode?: string;
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      groupCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
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

export class DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddrAttributeInfo extends $tea.Model {
  fatherCode?: string;
  groupCode?: string;
  groupName?: string;
  lineCode?: string;
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      groupCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddr extends $tea.Model {
  addr?: string;
  attributeInfo?: DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddrAttributeInfo;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      attributeInfo: 'AttributeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: 'string',
      attributeInfo: DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddrAttributeInfo,
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
  groupCode?: string;
  groupName?: string;
  lineCode?: string;
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      groupCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
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
  dingtalkNotice?: boolean;
  emailNotice?: boolean;
  noticeType?: string;
  smsNotice?: boolean;
  static names(): { [key: string]: string } {
    return {
      dingtalkNotice: 'DingtalkNotice',
      emailNotice: 'EmailNotice',
      noticeType: 'NoticeType',
      smsNotice: 'SmsNotice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkNotice: 'boolean',
      emailNotice: 'boolean',
      noticeType: 'string',
      smsNotice: 'boolean',
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
  alertConfig?: DescribeDnsGtmInstanceResponseBodyConfigAlertConfig;
  alertGroup?: string;
  cnameType?: string;
  instanceName?: string;
  pubicZoneName?: string;
  publicCnameMode?: string;
  publicRr?: string;
  publicUserDomainName?: string;
  strategyMode?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      alertGroup: 'AlertGroup',
      cnameType: 'CnameType',
      instanceName: 'InstanceName',
      pubicZoneName: 'PubicZoneName',
      publicCnameMode: 'PublicCnameMode',
      publicRr: 'PublicRr',
      publicUserDomainName: 'PublicUserDomainName',
      strategyMode: 'StrategyMode',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: DescribeDnsGtmInstanceResponseBodyConfigAlertConfig,
      alertGroup: 'string',
      cnameType: 'string',
      instanceName: 'string',
      pubicZoneName: 'string',
      publicCnameMode: 'string',
      publicRr: 'string',
      publicUserDomainName: 'string',
      strategyMode: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceResponseBodyUsedQuota extends $tea.Model {
  dingtalkUsedCount?: number;
  emailUsedCount?: number;
  smsUsedCount?: number;
  taskUsedCount?: number;
  static names(): { [key: string]: string } {
    return {
      dingtalkUsedCount: 'DingtalkUsedCount',
      emailUsedCount: 'EmailUsedCount',
      smsUsedCount: 'SmsUsedCount',
      taskUsedCount: 'TaskUsedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkUsedCount: 'number',
      emailUsedCount: 'number',
      smsUsedCount: 'number',
      taskUsedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceAddressPoolResponseBodyAddrsAddr extends $tea.Model {
  addr?: string;
  alertStatus?: string;
  attributeInfo?: string;
  createTime?: string;
  createTimestamp?: number;
  lbaWeight?: number;
  mode?: string;
  remark?: string;
  updateTime?: string;
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      alertStatus: 'AlertStatus',
      attributeInfo: 'AttributeInfo',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      lbaWeight: 'LbaWeight',
      mode: 'Mode',
      remark: 'Remark',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: 'string',
      alertStatus: 'string',
      attributeInfo: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      lbaWeight: 'number',
      mode: 'string',
      remark: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
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
  addrCount?: number;
  addrPoolId?: string;
  createTime?: string;
  createTimestamp?: number;
  lbaStrategy?: string;
  monitorConfigId?: string;
  monitorStatus?: string;
  name?: string;
  type?: string;
  updateTime?: string;
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      addrCount: 'AddrCount',
      addrPoolId: 'AddrPoolId',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      lbaStrategy: 'LbaStrategy',
      monitorConfigId: 'MonitorConfigId',
      monitorStatus: 'MonitorStatus',
      name: 'Name',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      addrPoolId: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      lbaStrategy: 'string',
      monitorConfigId: 'string',
      monitorStatus: 'string',
      name: 'string',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
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
  dingtalkNotice?: string;
  emailNotice?: string;
  noticeType?: string;
  smsNotice?: string;
  static names(): { [key: string]: string } {
    return {
      dingtalkNotice: 'DingtalkNotice',
      emailNotice: 'EmailNotice',
      noticeType: 'NoticeType',
      smsNotice: 'SmsNotice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkNotice: 'string',
      emailNotice: 'string',
      noticeType: 'string',
      smsNotice: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstancesResponseBodyGtmInstancesConfig extends $tea.Model {
  alertConfig?: DescribeDnsGtmInstancesResponseBodyGtmInstancesConfigAlertConfig[];
  alertGroup?: string;
  cnameType?: string;
  instanceName?: string;
  publicCnameMode?: string;
  publicRr?: string;
  publicUserDomainName?: string;
  publicZoneName?: string;
  strategyMode?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      alertGroup: 'AlertGroup',
      cnameType: 'CnameType',
      instanceName: 'InstanceName',
      publicCnameMode: 'PublicCnameMode',
      publicRr: 'PublicRr',
      publicUserDomainName: 'PublicUserDomainName',
      publicZoneName: 'PublicZoneName',
      strategyMode: 'StrategyMode',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': DescribeDnsGtmInstancesResponseBodyGtmInstancesConfigAlertConfig },
      alertGroup: 'string',
      cnameType: 'string',
      instanceName: 'string',
      publicCnameMode: 'string',
      publicRr: 'string',
      publicUserDomainName: 'string',
      publicZoneName: 'string',
      strategyMode: 'string',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstancesResponseBodyGtmInstancesUsedQuota extends $tea.Model {
  dingtalkUsedCount?: number;
  emailUsedCount?: number;
  smsUsedCount?: number;
  taskUsedCount?: number;
  static names(): { [key: string]: string } {
    return {
      dingtalkUsedCount: 'DingtalkUsedCount',
      emailUsedCount: 'EmailUsedCount',
      smsUsedCount: 'SmsUsedCount',
      taskUsedCount: 'TaskUsedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkUsedCount: 'number',
      emailUsedCount: 'number',
      smsUsedCount: 'number',
      taskUsedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstancesResponseBodyGtmInstances extends $tea.Model {
  config?: DescribeDnsGtmInstancesResponseBodyGtmInstancesConfig;
  createTime?: string;
  createTimestamp?: number;
  expireTime?: string;
  expireTimestamp?: number;
  instanceId?: string;
  paymentType?: string;
  resourceGroupId?: string;
  smsQuota?: number;
  taskQuota?: number;
  usedQuota?: DescribeDnsGtmInstancesResponseBodyGtmInstancesUsedQuota;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      expireTime: 'ExpireTime',
      expireTimestamp: 'ExpireTimestamp',
      instanceId: 'InstanceId',
      paymentType: 'PaymentType',
      resourceGroupId: 'ResourceGroupId',
      smsQuota: 'SmsQuota',
      taskQuota: 'TaskQuota',
      usedQuota: 'UsedQuota',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribeDnsGtmInstancesResponseBodyGtmInstancesConfig,
      createTime: 'string',
      createTimestamp: 'number',
      expireTime: 'string',
      expireTimestamp: 'number',
      instanceId: 'string',
      paymentType: 'string',
      resourceGroupId: 'string',
      smsQuota: 'number',
      taskQuota: 'number',
      usedQuota: DescribeDnsGtmInstancesResponseBodyGtmInstancesUsedQuota,
      versionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmLogsResponseBodyLogsLog extends $tea.Model {
  content?: string;
  entityId?: string;
  entityName?: string;
  entityType?: string;
  id?: number;
  operAction?: string;
  operTime?: string;
  operTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      entityId: 'EntityId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      id: 'Id',
      operAction: 'OperAction',
      operTime: 'OperTime',
      operTimestamp: 'OperTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      entityId: 'string',
      entityName: 'string',
      entityType: 'string',
      id: 'number',
      operAction: 'string',
      operTime: 'string',
      operTimestamp: 'number',
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

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodesDomainIpv4IspCityNodeIps extends $tea.Model {
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodesDomainIpv4IspCityNode extends $tea.Model {
  cityCode?: string;
  cityName?: string;
  defaultSelected?: boolean;
  groupName?: string;
  groupType?: string;
  ips?: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodesDomainIpv4IspCityNodeIps;
  ispCode?: string;
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      cityName: 'CityName',
      defaultSelected: 'DefaultSelected',
      groupName: 'GroupName',
      groupType: 'GroupType',
      ips: 'Ips',
      ispCode: 'IspCode',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      defaultSelected: 'boolean',
      groupName: 'string',
      groupType: 'string',
      ips: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodesDomainIpv4IspCityNodeIps,
      ispCode: 'string',
      ispName: 'string',
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

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodesDomainIpv6IspCityNodeIps extends $tea.Model {
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodesDomainIpv6IspCityNode extends $tea.Model {
  cityCode?: string;
  cityName?: string;
  defaultSelected?: boolean;
  groupName?: string;
  groupType?: string;
  ips?: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodesDomainIpv6IspCityNodeIps;
  ispCode?: string;
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      cityName: 'CityName',
      defaultSelected: 'DefaultSelected',
      groupName: 'GroupName',
      groupType: 'GroupType',
      ips: 'Ips',
      ispCode: 'IspCode',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      defaultSelected: 'boolean',
      groupName: 'string',
      groupType: 'string',
      ips: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodesDomainIpv6IspCityNodeIps,
      ispCode: 'string',
      ispName: 'string',
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

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodesIpv4IspCityNodeIps extends $tea.Model {
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodesIpv4IspCityNode extends $tea.Model {
  cityCode?: string;
  cityName?: string;
  defaultSelected?: boolean;
  groupName?: string;
  groupType?: string;
  ips?: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodesIpv4IspCityNodeIps;
  ispCode?: string;
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      cityName: 'CityName',
      defaultSelected: 'DefaultSelected',
      groupName: 'GroupName',
      groupType: 'GroupType',
      ips: 'Ips',
      ispCode: 'IspCode',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      defaultSelected: 'boolean',
      groupName: 'string',
      groupType: 'string',
      ips: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodesIpv4IspCityNodeIps,
      ispCode: 'string',
      ispName: 'string',
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

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodesIpv6IspCityNodeIps extends $tea.Model {
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodesIpv6IspCityNode extends $tea.Model {
  cityCode?: string;
  cityName?: string;
  defaultSelected?: boolean;
  groupName?: string;
  groupType?: string;
  ips?: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodesIpv6IspCityNodeIps;
  ispCode?: string;
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      cityName: 'CityName',
      defaultSelected: 'DefaultSelected',
      groupName: 'GroupName',
      groupType: 'GroupType',
      ips: 'Ips',
      ispCode: 'IspCode',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      defaultSelected: 'boolean',
      groupName: 'string',
      groupType: 'string',
      ips: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodesIpv6IspCityNodeIps,
      ispCode: 'string',
      ispName: 'string',
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
  cityName?: string;
  countryCode?: string;
  countryName?: string;
  ispCode?: string;
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      cityName: 'CityName',
      countryCode: 'CountryCode',
      countryName: 'CountryName',
      ispCode: 'IspCode',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      countryCode: 'string',
      countryName: 'string',
      ispCode: 'string',
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
  autoRenewal?: boolean;
  bindCount?: number;
  bindDomainCount?: number;
  bindDomainUsedCount?: number;
  bindUsedCount?: number;
  DDosDefendFlow?: number;
  DDosDefendQuery?: number;
  dnsSLBCount?: number;
  dnsSecurity?: string;
  domain?: string;
  endTime?: string;
  endTimestamp?: number;
  gslb?: boolean;
  ISPLines?: string;
  ISPRegionLines?: string;
  inBlackHole?: boolean;
  inClean?: boolean;
  instanceId?: string;
  monitorFrequency?: number;
  monitorNodeCount?: number;
  monitorTaskCount?: number;
  overseaDDosDefendFlow?: number;
  overseaLine?: string;
  paymentType?: string;
  regionLines?: boolean;
  searchEngineLines?: string;
  startTime?: string;
  startTimestamp?: number;
  subDomainLevel?: number;
  TTLMinValue?: number;
  URLForwardCount?: number;
  versionCode?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      bindCount: 'BindCount',
      bindDomainCount: 'BindDomainCount',
      bindDomainUsedCount: 'BindDomainUsedCount',
      bindUsedCount: 'BindUsedCount',
      DDosDefendFlow: 'DDosDefendFlow',
      DDosDefendQuery: 'DDosDefendQuery',
      dnsSLBCount: 'DnsSLBCount',
      dnsSecurity: 'DnsSecurity',
      domain: 'Domain',
      endTime: 'EndTime',
      endTimestamp: 'EndTimestamp',
      gslb: 'Gslb',
      ISPLines: 'ISPLines',
      ISPRegionLines: 'ISPRegionLines',
      inBlackHole: 'InBlackHole',
      inClean: 'InClean',
      instanceId: 'InstanceId',
      monitorFrequency: 'MonitorFrequency',
      monitorNodeCount: 'MonitorNodeCount',
      monitorTaskCount: 'MonitorTaskCount',
      overseaDDosDefendFlow: 'OverseaDDosDefendFlow',
      overseaLine: 'OverseaLine',
      paymentType: 'PaymentType',
      regionLines: 'RegionLines',
      searchEngineLines: 'SearchEngineLines',
      startTime: 'StartTime',
      startTimestamp: 'StartTimestamp',
      subDomainLevel: 'SubDomainLevel',
      TTLMinValue: 'TTLMinValue',
      URLForwardCount: 'URLForwardCount',
      versionCode: 'VersionCode',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      bindCount: 'number',
      bindDomainCount: 'number',
      bindDomainUsedCount: 'number',
      bindUsedCount: 'number',
      DDosDefendFlow: 'number',
      DDosDefendQuery: 'number',
      dnsSLBCount: 'number',
      dnsSecurity: 'string',
      domain: 'string',
      endTime: 'string',
      endTimestamp: 'number',
      gslb: 'boolean',
      ISPLines: 'string',
      ISPRegionLines: 'string',
      inBlackHole: 'boolean',
      inClean: 'boolean',
      instanceId: 'string',
      monitorFrequency: 'number',
      monitorNodeCount: 'number',
      monitorTaskCount: 'number',
      overseaDDosDefendFlow: 'number',
      overseaLine: 'string',
      paymentType: 'string',
      regionLines: 'boolean',
      searchEngineLines: 'string',
      startTime: 'string',
      startTimestamp: 'number',
      subDomainLevel: 'number',
      TTLMinValue: 'number',
      URLForwardCount: 'number',
      versionCode: 'string',
      versionName: 'string',
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

export class DescribeDohAccountStatisticsResponseBodyStatistics extends $tea.Model {
  timestamp?: number;
  totalCount?: number;
  v4HttpCount?: number;
  v4HttpsCount?: number;
  v6HttpCount?: number;
  v6HttpsCount?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      totalCount: 'TotalCount',
      v4HttpCount: 'V4HttpCount',
      v4HttpsCount: 'V4HttpsCount',
      v6HttpCount: 'V6HttpCount',
      v6HttpsCount: 'V6HttpsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      totalCount: 'number',
      v4HttpCount: 'number',
      v4HttpsCount: 'number',
      v6HttpCount: 'number',
      v6HttpsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohDomainStatisticsResponseBodyStatistics extends $tea.Model {
  timestamp?: number;
  totalCount?: number;
  v4HttpCount?: number;
  v4HttpsCount?: number;
  v6HttpCount?: number;
  v6HttpsCount?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      totalCount: 'TotalCount',
      v4HttpCount: 'V4HttpCount',
      v4HttpsCount: 'V4HttpsCount',
      v6HttpCount: 'V6HttpCount',
      v6HttpsCount: 'V6HttpsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      totalCount: 'number',
      v4HttpCount: 'number',
      v4HttpsCount: 'number',
      v6HttpCount: 'number',
      v6HttpsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohDomainStatisticsSummaryResponseBodyStatistics extends $tea.Model {
  domainName?: string;
  httpCount?: number;
  httpsCount?: number;
  ipCount?: number;
  totalCount?: number;
  v4HttpCount?: number;
  v4HttpsCount?: number;
  v6HttpCount?: number;
  v6HttpsCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      httpCount: 'HttpCount',
      httpsCount: 'HttpsCount',
      ipCount: 'IpCount',
      totalCount: 'TotalCount',
      v4HttpCount: 'V4HttpCount',
      v4HttpsCount: 'V4HttpsCount',
      v6HttpCount: 'V6HttpCount',
      v6HttpsCount: 'V6HttpsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      httpCount: 'number',
      httpsCount: 'number',
      ipCount: 'number',
      totalCount: 'number',
      v4HttpCount: 'number',
      v4HttpsCount: 'number',
      v6HttpCount: 'number',
      v6HttpsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohSubDomainStatisticsResponseBodyStatistics extends $tea.Model {
  timestamp?: number;
  totalCount?: number;
  v4HttpCount?: number;
  v4HttpsCount?: number;
  v6HttpCount?: number;
  v6HttpsCount?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      totalCount: 'TotalCount',
      v4HttpCount: 'V4HttpCount',
      v4HttpsCount: 'V4HttpsCount',
      v6HttpCount: 'V6HttpCount',
      v6HttpsCount: 'V6HttpsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      totalCount: 'number',
      v4HttpCount: 'number',
      v4HttpsCount: 'number',
      v6HttpCount: 'number',
      v6HttpsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDohSubDomainStatisticsSummaryResponseBodyStatistics extends $tea.Model {
  httpCount?: number;
  httpsCount?: number;
  ipCount?: number;
  subDomain?: string;
  totalCount?: number;
  v4HttpCount?: number;
  v4HttpsCount?: number;
  v6HttpCount?: number;
  v6HttpsCount?: number;
  static names(): { [key: string]: string } {
    return {
      httpCount: 'HttpCount',
      httpsCount: 'HttpsCount',
      ipCount: 'IpCount',
      subDomain: 'SubDomain',
      totalCount: 'TotalCount',
      v4HttpCount: 'V4HttpCount',
      v4HttpsCount: 'V4HttpsCount',
      v6HttpCount: 'V6HttpCount',
      v6HttpsCount: 'V6HttpsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCount: 'number',
      httpsCount: 'number',
      ipCount: 'number',
      subDomain: 'string',
      totalCount: 'number',
      v4HttpCount: 'number',
      v4HttpsCount: 'number',
      v6HttpCount: 'number',
      v6HttpsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainGroupsResponseBodyDomainGroupsDomainGroup extends $tea.Model {
  domainCount?: number;
  groupId?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      domainCount: 'DomainCount',
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCount: 'number',
      groupId: 'string',
      groupName: 'string',
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
  lineCode?: string;
  lineDisplayName?: string;
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      lineCode: 'LineCode',
      lineDisplayName: 'LineDisplayName',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      lineCode: 'string',
      lineDisplayName: 'string',
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

export class DescribeDomainLogsResponseBodyDomainLogsDomainLog extends $tea.Model {
  action?: string;
  actionTime?: string;
  actionTimestamp?: number;
  clientIp?: string;
  domainName?: string;
  message?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionTime: 'ActionTime',
      actionTimestamp: 'ActionTimestamp',
      clientIp: 'ClientIp',
      domainName: 'DomainName',
      message: 'Message',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionTime: 'string',
      actionTimestamp: 'number',
      clientIp: 'string',
      domainName: 'string',
      message: 'string',
      zoneId: 'string',
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

export class DescribeDomainRecordsResponseBodyDomainRecordsRecord extends $tea.Model {
  createTimestamp?: number;
  domainName?: string;
  line?: string;
  locked?: boolean;
  priority?: number;
  RR?: string;
  recordId?: string;
  remark?: string;
  status?: string;
  TTL?: number;
  type?: string;
  updateTimestamp?: number;
  value?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      domainName: 'DomainName',
      line: 'Line',
      locked: 'Locked',
      priority: 'Priority',
      RR: 'RR',
      recordId: 'RecordId',
      remark: 'Remark',
      status: 'Status',
      TTL: 'TTL',
      type: 'Type',
      updateTimestamp: 'UpdateTimestamp',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      domainName: 'string',
      line: 'string',
      locked: 'boolean',
      priority: 'number',
      RR: 'string',
      recordId: 'string',
      remark: 'string',
      status: 'string',
      TTL: 'number',
      type: 'string',
      updateTimestamp: 'number',
      value: 'string',
      weight: 'number',
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

export class DescribeDomainResolveStatisticsSummaryResponseBodyStatistics extends $tea.Model {
  count?: string;
  domainName?: string;
  domainType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      domainName: 'DomainName',
      domainType: 'DomainType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      domainName: 'string',
      domainType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainStatisticsResponseBodyStatisticsStatistic extends $tea.Model {
  count?: number;
  domainName?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      domainName: 'DomainName',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      domainName: 'string',
      timestamp: 'number',
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
  count?: number;
  domainName?: string;
  domainType?: string;
  resolveAnalysisStatus?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      domainName: 'DomainName',
      domainType: 'DomainType',
      resolveAnalysisStatus: 'resolveAnalysisStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      domainName: 'string',
      domainType: 'string',
      resolveAnalysisStatus: 'string',
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

export class DescribeDomainsResponseBodyDomainsDomain extends $tea.Model {
  aliDomain?: boolean;
  createTime?: string;
  createTimestamp?: number;
  dnsServers?: DescribeDomainsResponseBodyDomainsDomainDnsServers;
  domainId?: string;
  domainLoggingSwitchStatus?: string;
  domainName?: string;
  groupId?: string;
  groupName?: string;
  instanceEndTime?: string;
  instanceExpired?: boolean;
  instanceId?: string;
  punyCode?: string;
  recordCount?: number;
  registrantEmail?: string;
  remark?: string;
  resourceGroupId?: string;
  starmark?: boolean;
  tags?: DescribeDomainsResponseBodyDomainsDomainTags;
  versionCode?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      aliDomain: 'AliDomain',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      dnsServers: 'DnsServers',
      domainId: 'DomainId',
      domainLoggingSwitchStatus: 'DomainLoggingSwitchStatus',
      domainName: 'DomainName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      instanceEndTime: 'InstanceEndTime',
      instanceExpired: 'InstanceExpired',
      instanceId: 'InstanceId',
      punyCode: 'PunyCode',
      recordCount: 'RecordCount',
      registrantEmail: 'RegistrantEmail',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      starmark: 'Starmark',
      tags: 'Tags',
      versionCode: 'VersionCode',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliDomain: 'boolean',
      createTime: 'string',
      createTimestamp: 'number',
      dnsServers: DescribeDomainsResponseBodyDomainsDomainDnsServers,
      domainId: 'string',
      domainLoggingSwitchStatus: 'string',
      domainName: 'string',
      groupId: 'string',
      groupName: 'string',
      instanceEndTime: 'string',
      instanceExpired: 'boolean',
      instanceId: 'string',
      punyCode: 'string',
      recordCount: 'number',
      registrantEmail: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      starmark: 'boolean',
      tags: DescribeDomainsResponseBodyDomainsDomainTags,
      versionCode: 'string',
      versionName: 'string',
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

export class DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine extends $tea.Model {
  groupCode?: string;
  groupName?: string;
  lineCode?: string;
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
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
  accessStatus?: string;
  createTime?: string;
  createTimestamp?: number;
  defaultAddrPoolId?: string;
  defaultAddrPoolMonitorStatus?: string;
  defaultAddrPoolName?: string;
  defaultAddrPoolStatus?: string;
  failoverAddrPoolId?: string;
  failoverAddrPoolMonitorStatus?: string;
  failoverAddrPoolName?: string;
  failoverAddrPoolStatus?: string;
  instanceId?: string;
  lines?: DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLines;
  strategyId?: string;
  strategyMode?: string;
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      accessStatus: 'AccessStatus',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      defaultAddrPoolId: 'DefaultAddrPoolId',
      defaultAddrPoolMonitorStatus: 'DefaultAddrPoolMonitorStatus',
      defaultAddrPoolName: 'DefaultAddrPoolName',
      defaultAddrPoolStatus: 'DefaultAddrPoolStatus',
      failoverAddrPoolId: 'FailoverAddrPoolId',
      failoverAddrPoolMonitorStatus: 'FailoverAddrPoolMonitorStatus',
      failoverAddrPoolName: 'FailoverAddrPoolName',
      failoverAddrPoolStatus: 'FailoverAddrPoolStatus',
      instanceId: 'InstanceId',
      lines: 'Lines',
      strategyId: 'StrategyId',
      strategyMode: 'StrategyMode',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      accessStatus: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      defaultAddrPoolId: 'string',
      defaultAddrPoolMonitorStatus: 'string',
      defaultAddrPoolName: 'string',
      defaultAddrPoolStatus: 'string',
      failoverAddrPoolId: 'string',
      failoverAddrPoolMonitorStatus: 'string',
      failoverAddrPoolName: 'string',
      failoverAddrPoolStatus: 'string',
      instanceId: 'string',
      lines: DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLines,
      strategyId: 'string',
      strategyMode: 'string',
      strategyName: 'string',
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
  groupCode?: string;
  groupName?: string;
  lineCode?: string;
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
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
  fatherCode?: string;
  groupCode?: string;
  groupName?: string;
  lineCode?: string;
  lineName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      groupCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
      status: 'string',
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
  addrId?: number;
  alertStatus?: string;
  createTime?: string;
  createTimestamp?: number;
  lbaWeight?: number;
  mode?: string;
  updateTime?: string;
  updateTimestamp?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      addrId: 'AddrId',
      alertStatus: 'AlertStatus',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      lbaWeight: 'LbaWeight',
      mode: 'Mode',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrId: 'number',
      alertStatus: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      lbaWeight: 'number',
      mode: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      value: 'string',
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
  addrCount?: number;
  addrPoolId?: string;
  createTime?: string;
  createTimestamp?: number;
  minAvailableAddrNum?: number;
  monitorConfigId?: string;
  monitorStatus?: string;
  name?: string;
  status?: string;
  type?: string;
  updateTime?: string;
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      addrCount: 'AddrCount',
      addrPoolId: 'AddrPoolId',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      minAvailableAddrNum: 'MinAvailableAddrNum',
      monitorConfigId: 'MonitorConfigId',
      monitorStatus: 'MonitorStatus',
      name: 'Name',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      addrPoolId: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      minAvailableAddrNum: 'number',
      monitorConfigId: 'string',
      monitorStatus: 'string',
      name: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
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
  accessStrategyNum?: number;
  addressPoolNum?: number;
  alertGroup?: string;
  cname?: string;
  cnameMode?: string;
  createTime?: string;
  createTimestamp?: number;
  expireTime?: string;
  expireTimestamp?: number;
  instanceId?: string;
  instanceName?: string;
  lbaStrategy?: string;
  resourceGroupId?: string;
  ttl?: number;
  userDomainName?: string;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      accessStrategyNum: 'AccessStrategyNum',
      addressPoolNum: 'AddressPoolNum',
      alertGroup: 'AlertGroup',
      cname: 'Cname',
      cnameMode: 'CnameMode',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      expireTime: 'ExpireTime',
      expireTimestamp: 'ExpireTimestamp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lbaStrategy: 'LbaStrategy',
      resourceGroupId: 'ResourceGroupId',
      ttl: 'Ttl',
      userDomainName: 'UserDomainName',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessStrategyNum: 'number',
      addressPoolNum: 'number',
      alertGroup: 'string',
      cname: 'string',
      cnameMode: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      expireTime: 'string',
      expireTimestamp: 'number',
      instanceId: 'string',
      instanceName: 'string',
      lbaStrategy: 'string',
      resourceGroupId: 'string',
      ttl: 'number',
      userDomainName: 'string',
      versionCode: 'string',
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
  content?: string;
  entityId?: string;
  entityName?: string;
  entityType?: string;
  id?: number;
  operAction?: string;
  operIp?: string;
  operTime?: string;
  operTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      entityId: 'EntityId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      id: 'Id',
      operAction: 'OperAction',
      operIp: 'OperIp',
      operTime: 'OperTime',
      operTimestamp: 'OperTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      entityId: 'string',
      entityName: 'string',
      entityType: 'string',
      id: 'number',
      operAction: 'string',
      operIp: 'string',
      operTime: 'string',
      operTimestamp: 'number',
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
  cityName?: string;
  defaultSelected?: boolean;
  groupName?: string;
  groupType?: string;
  ispCode?: string;
  ispName?: string;
  mainland?: boolean;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      cityName: 'CityName',
      defaultSelected: 'DefaultSelected',
      groupName: 'GroupName',
      groupType: 'GroupType',
      ispCode: 'IspCode',
      ispName: 'IspName',
      mainland: 'Mainland',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      defaultSelected: 'boolean',
      groupName: 'string',
      groupType: 'string',
      ispCode: 'string',
      ispName: 'string',
      mainland: 'boolean',
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
  cityName?: string;
  countryCode?: string;
  countryName?: string;
  ispCode?: string;
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      cityName: 'CityName',
      countryCode: 'CountryCode',
      countryName: 'CountryName',
      ispCode: 'IspCode',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      countryCode: 'string',
      countryName: 'string',
      ispCode: 'string',
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
  id?: number;
  mode?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      mode: 'Mode',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      mode: 'string',
      value: 'string',
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
  addrPoolId?: string;
  addrPoolName?: string;
  addrs?: DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrs;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      addrPoolName: 'AddrPoolName',
      addrs: 'Addrs',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      addrPoolName: 'string',
      addrs: DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrs,
      instanceId: 'string',
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
  instanceId?: string;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      addrPools: 'AddrPools',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPools: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPools,
      instanceId: 'string',
      instanceName: 'string',
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
  createTime?: string;
  createTimestamp?: number;
  faultAddrPoolNum?: number;
  lastExecuteTime?: string;
  lastExecuteTimestamp?: number;
  lastRollbackTime?: string;
  lastRollbackTimestamp?: number;
  name?: string;
  recoveryPlanId?: number;
  remark?: string;
  status?: string;
  updateTime?: string;
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      faultAddrPoolNum: 'FaultAddrPoolNum',
      lastExecuteTime: 'LastExecuteTime',
      lastExecuteTimestamp: 'LastExecuteTimestamp',
      lastRollbackTime: 'LastRollbackTime',
      lastRollbackTimestamp: 'LastRollbackTimestamp',
      name: 'Name',
      recoveryPlanId: 'RecoveryPlanId',
      remark: 'Remark',
      status: 'Status',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      faultAddrPoolNum: 'number',
      lastExecuteTime: 'string',
      lastExecuteTimestamp: 'number',
      lastRollbackTime: 'string',
      lastRollbackTimestamp: 'number',
      name: 'string',
      recoveryPlanId: 'number',
      remark: 'string',
      status: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
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
  createTimestamp?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstancesQuotaInfo extends $tea.Model {
  instanceQuota?: number;
  instanceQuotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      instanceQuota: 'InstanceQuota',
      instanceQuotaUsed: 'InstanceQuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceQuota: 'number',
      instanceQuotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstances extends $tea.Model {
  expireTime?: string;
  expireTimestamp?: number;
  instanceId?: string;
  instanceName?: string;
  isp?: string;
  quotaInfo?: DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstancesQuotaInfo;
  status?: string;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      expireTimestamp: 'ExpireTimestamp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isp: 'Isp',
      quotaInfo: 'QuotaInfo',
      status: 'Status',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      expireTimestamp: 'number',
      instanceId: 'string',
      instanceName: 'string',
      isp: 'string',
      quotaInfo: DescribeIspFlushCacheInstancesResponseBodyIspFlushCacheInstancesQuotaInfo,
      status: 'string',
      versionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodesAnswers extends $tea.Model {
  name?: string;
  record?: string;
  ttl?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      record: 'Record',
      ttl: 'Ttl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      record: 'string',
      ttl: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodes extends $tea.Model {
  answers?: DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodesAnswers[];
  nodeIp?: string;
  spName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      nodeIp: 'NodeIp',
      spName: 'SpName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: { 'type': 'array', 'itemType': DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodesAnswers },
      nodeIp: 'string',
      spName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheTaskResponseBodyFlushCacheResults extends $tea.Model {
  dnsNodes?: DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodes[];
  province?: string;
  static names(): { [key: string]: string } {
    return {
      dnsNodes: 'DnsNodes',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsNodes: { 'type': 'array', 'itemType': DescribeIspFlushCacheTaskResponseBodyFlushCacheResultsDnsNodes },
      province: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIspFlushCacheTasksResponseBodyIspFlushCacheTasks extends $tea.Model {
  createTime?: string;
  createTimestamp?: number;
  domainName?: string;
  instanceId?: string;
  instanceName?: string;
  isp?: string;
  taskId?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isp: 'Isp',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      domainName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isp: 'string',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsAccountSummaryResponseBodyData extends $tea.Model {
  domainCount?: number;
  httpCount?: number;
  httpsCount?: number;
  subDomainCount?: number;
  threatCount?: number;
  totalCount?: number;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      domainCount: 'DomainCount',
      httpCount: 'HttpCount',
      httpsCount: 'HttpsCount',
      subDomainCount: 'SubDomainCount',
      threatCount: 'ThreatCount',
      totalCount: 'TotalCount',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCount: 'number',
      httpCount: 'number',
      httpsCount: 'number',
      subDomainCount: 'number',
      threatCount: 'number',
      totalCount: 'number',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsAppKeyResponseBodyAppKey extends $tea.Model {
  appKeyId?: string;
  appKeySecret?: string;
  createDate?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appKeyId: 'AppKeyId',
      appKeySecret: 'AppKeySecret',
      createDate: 'CreateDate',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKeyId: 'string',
      appKeySecret: 'string',
      createDate: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsAppKeysResponseBodyAppKeys extends $tea.Model {
  appKeyId?: string;
  createDate?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appKeyId: 'AppKeyId',
      createDate: 'CreateDate',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKeyId: 'string',
      createDate: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsOperateLogsResponseBodyLogs extends $tea.Model {
  action?: string;
  operateTime?: string;
  type?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      operateTime: 'OperateTime',
      type: 'Type',
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      operateTime: 'string',
      type: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsRequestStatisticResponseBodyData extends $tea.Model {
  dohTotalCount?: number;
  httpCount?: number;
  httpsCount?: number;
  ipCount?: number;
  timestamp?: number;
  totalCount?: number;
  udpTotalCount?: number;
  v4Count?: number;
  v4HttpCount?: number;
  v4HttpsCount?: number;
  v6Count?: number;
  v6HttpCount?: number;
  v6HttpsCount?: number;
  static names(): { [key: string]: string } {
    return {
      dohTotalCount: 'DohTotalCount',
      httpCount: 'HttpCount',
      httpsCount: 'HttpsCount',
      ipCount: 'IpCount',
      timestamp: 'Timestamp',
      totalCount: 'TotalCount',
      udpTotalCount: 'UdpTotalCount',
      v4Count: 'V4Count',
      v4HttpCount: 'V4HttpCount',
      v4HttpsCount: 'V4HttpsCount',
      v6Count: 'V6Count',
      v6HttpCount: 'V6HttpCount',
      v6HttpsCount: 'V6HttpsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dohTotalCount: 'number',
      httpCount: 'number',
      httpsCount: 'number',
      ipCount: 'number',
      timestamp: 'number',
      totalCount: 'number',
      udpTotalCount: 'number',
      v4Count: 'number',
      v4HttpCount: 'number',
      v4HttpsCount: 'number',
      v6Count: 'number',
      v6HttpCount: 'number',
      v6HttpsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsRequestStatisticsResponseBodyDataThreatInfo extends $tea.Model {
  threatLevel?: string;
  threatType?: string;
  static names(): { [key: string]: string } {
    return {
      threatLevel: 'ThreatLevel',
      threatType: 'ThreatType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threatLevel: 'string',
      threatType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsRequestStatisticsResponseBodyData extends $tea.Model {
  dohTotalCount?: number;
  domainName?: string;
  httpCount?: number;
  httpsCount?: number;
  ipCount?: number;
  maxThreatLevel?: string;
  subDomain?: string;
  threatCount?: number;
  threatInfo?: DescribePdnsRequestStatisticsResponseBodyDataThreatInfo[];
  totalCount?: number;
  udpTotalCount?: number;
  v4Count?: number;
  v4HttpCount?: number;
  v4HttpsCount?: number;
  v6Count?: number;
  v6HttpCount?: number;
  v6HttpsCount?: number;
  static names(): { [key: string]: string } {
    return {
      dohTotalCount: 'DohTotalCount',
      domainName: 'DomainName',
      httpCount: 'HttpCount',
      httpsCount: 'HttpsCount',
      ipCount: 'IpCount',
      maxThreatLevel: 'MaxThreatLevel',
      subDomain: 'SubDomain',
      threatCount: 'ThreatCount',
      threatInfo: 'ThreatInfo',
      totalCount: 'TotalCount',
      udpTotalCount: 'UdpTotalCount',
      v4Count: 'V4Count',
      v4HttpCount: 'V4HttpCount',
      v4HttpsCount: 'V4HttpsCount',
      v6Count: 'V6Count',
      v6HttpCount: 'V6HttpCount',
      v6HttpsCount: 'V6HttpsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dohTotalCount: 'number',
      domainName: 'string',
      httpCount: 'number',
      httpsCount: 'number',
      ipCount: 'number',
      maxThreatLevel: 'string',
      subDomain: 'string',
      threatCount: 'number',
      threatInfo: { 'type': 'array', 'itemType': DescribePdnsRequestStatisticsResponseBodyDataThreatInfo },
      totalCount: 'number',
      udpTotalCount: 'number',
      v4Count: 'number',
      v4HttpCount: 'number',
      v4HttpsCount: 'number',
      v6Count: 'number',
      v6HttpCount: 'number',
      v6HttpsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsThreatLogsResponseBodyLogs extends $tea.Model {
  sourceIp?: string;
  subDomain?: string;
  threatLevel?: string;
  threatTime?: string;
  threatType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      subDomain: 'SubDomain',
      threatLevel: 'ThreatLevel',
      threatTime: 'ThreatTime',
      threatType: 'ThreatType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      subDomain: 'string',
      threatLevel: 'string',
      threatTime: 'string',
      threatType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsThreatStatisticResponseBodyData extends $tea.Model {
  dohTotalCount?: number;
  threatLevel?: string;
  threatType?: string;
  timestamp?: number;
  totalCount?: number;
  udpTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dohTotalCount: 'DohTotalCount',
      threatLevel: 'ThreatLevel',
      threatType: 'ThreatType',
      timestamp: 'Timestamp',
      totalCount: 'TotalCount',
      udpTotalCount: 'UdpTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dohTotalCount: 'number',
      threatLevel: 'string',
      threatType: 'string',
      timestamp: 'number',
      totalCount: 'number',
      udpTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsThreatStatisticsResponseBodyData extends $tea.Model {
  dohTotalCount?: number;
  domainCount?: number;
  domainName?: string;
  latestThreatTime?: number;
  maxThreatLevel?: string;
  sourceIp?: string;
  subDomain?: string;
  threatLevel?: string;
  threatType?: string;
  totalCount?: number;
  udpTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dohTotalCount: 'DohTotalCount',
      domainCount: 'DomainCount',
      domainName: 'DomainName',
      latestThreatTime: 'LatestThreatTime',
      maxThreatLevel: 'MaxThreatLevel',
      sourceIp: 'SourceIp',
      subDomain: 'SubDomain',
      threatLevel: 'ThreatLevel',
      threatType: 'ThreatType',
      totalCount: 'TotalCount',
      udpTotalCount: 'UdpTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dohTotalCount: 'number',
      domainCount: 'number',
      domainName: 'string',
      latestThreatTime: 'number',
      maxThreatLevel: 'string',
      sourceIp: 'string',
      subDomain: 'string',
      threatLevel: 'string',
      threatType: 'string',
      totalCount: 'number',
      udpTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsUdpIpSegmentsResponseBodyIpSegments extends $tea.Model {
  createDate?: string;
  ip?: string;
  mask?: number;
  name?: string;
  state?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      ip: 'Ip',
      mask: 'Mask',
      name: 'Name',
      state: 'State',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      ip: 'string',
      mask: 'number',
      name: 'string',
      state: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsUserInfoResponseBodyUserInfo extends $tea.Model {
  availableService?: string;
  pdnsId?: number;
  serviceType?: string;
  state?: string;
  stoppedService?: string;
  static names(): { [key: string]: string } {
    return {
      availableService: 'AvailableService',
      pdnsId: 'PdnsId',
      serviceType: 'ServiceType',
      state: 'State',
      stoppedService: 'StoppedService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableService: 'string',
      pdnsId: 'number',
      serviceType: 'string',
      state: 'string',
      stoppedService: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordLogsResponseBodyRecordLogsRecordLog extends $tea.Model {
  action?: string;
  actionTime?: string;
  actionTimestamp?: number;
  clientIp?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionTime: 'ActionTime',
      actionTimestamp: 'ActionTimestamp',
      clientIp: 'ClientIp',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionTime: 'string',
      actionTimestamp: 'number',
      clientIp: 'string',
      message: 'string',
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

export class DescribeRecordResolveStatisticsSummaryResponseBodyStatistics extends $tea.Model {
  count?: string;
  domainName?: string;
  domainType?: string;
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      domainName: 'DomainName',
      domainType: 'DomainType',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      domainName: 'string',
      domainType: 'string',
      subDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordStatisticsResponseBodyStatisticsStatistic extends $tea.Model {
  count?: number;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      timestamp: 'number',
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
  count?: number;
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      subDomain: 'string',
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
  domainName?: string;
  line?: string;
  locked?: boolean;
  priority?: number;
  RR?: string;
  recordId?: string;
  remark?: string;
  status?: string;
  TTL?: number;
  type?: string;
  value?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      line: 'Line',
      locked: 'Locked',
      priority: 'Priority',
      RR: 'RR',
      recordId: 'RecordId',
      remark: 'Remark',
      status: 'Status',
      TTL: 'TTL',
      type: 'Type',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      line: 'string',
      locked: 'boolean',
      priority: 'number',
      RR: 'string',
      recordId: 'string',
      remark: 'string',
      status: 'string',
      TTL: 'number',
      type: 'string',
      value: 'string',
      weight: 'number',
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
  lineCode?: string;
  lineDisplayName?: string;
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      lineCode: 'LineCode',
      lineDisplayName: 'LineDisplayName',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      lineCode: 'string',
      lineDisplayName: 'string',
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
  createTime?: string;
  createTimestamp?: number;
  domainName?: string;
  fromUserId?: number;
  id?: number;
  targetUserId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      domainName: 'DomainName',
      fromUserId: 'FromUserId',
      id: 'Id',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      domainName: 'string',
      fromUserId: 'number',
      id: 'number',
      targetUserId: 'number',
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
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
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
  domain?: string;
  line?: string;
  newRr?: string;
  newType?: string;
  newValue?: string;
  priority?: number;
  rr?: string;
  ttl?: number;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      line: 'Line',
      newRr: 'NewRr',
      newType: 'NewType',
      newValue: 'NewValue',
      priority: 'Priority',
      rr: 'Rr',
      ttl: 'Ttl',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      line: 'string',
      newRr: 'string',
      newType: 'string',
      newValue: 'string',
      priority: 'number',
      rr: 'string',
      ttl: 'number',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfosSwitchInfo extends $tea.Model {
  content?: string;
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      strategyName: 'string',
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
  name?: string;
  switchInfos?: PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfos;
  userDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      switchInfos: 'SwitchInfos',
      userDomainName: 'UserDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      switchInfos: PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfos,
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
  id?: string;
  lbaWeight?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lbaWeight: 'LbaWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      lbaWeight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmAccessStrategyRequestFailoverAddrPool extends $tea.Model {
  id?: string;
  lbaWeight?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lbaWeight: 'LbaWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      lbaWeight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmAddressPoolRequestAddr extends $tea.Model {
  addr?: string;
  attributeInfo?: string;
  lbaWeight?: number;
  mode?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      attributeInfo: 'AttributeInfo',
      lbaWeight: 'LbaWeight',
      mode: 'Mode',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: 'string',
      attributeInfo: 'string',
      lbaWeight: 'number',
      mode: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmInstanceGlobalConfigRequestAlertConfig extends $tea.Model {
  dingtalkNotice?: boolean;
  emailNotice?: boolean;
  noticeType?: string;
  smsNotice?: boolean;
  static names(): { [key: string]: string } {
    return {
      dingtalkNotice: 'DingtalkNotice',
      emailNotice: 'EmailNotice',
      noticeType: 'NoticeType',
      smsNotice: 'SmsNotice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkNotice: 'boolean',
      emailNotice: 'boolean',
      noticeType: 'string',
      smsNotice: 'boolean',
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
  lbaWeight?: number;
  mode?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      lbaWeight: 'LbaWeight',
      mode: 'Mode',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lbaWeight: 'number',
      mode: 'string',
      value: 'string',
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

  /**
    * The operation that you want to perform. Set the value to AddCustomLine.
    *
    * @param request AddCustomLineRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddCustomLineResponse
   */
  async addCustomLineWithOptions(request: AddCustomLineRequest, runtime: $Util.RuntimeOptions): Promise<AddCustomLineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.ipSegment)) {
      query["IpSegment"] = request.ipSegment;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lineName)) {
      query["LineName"] = request.lineName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddCustomLine",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddCustomLineResponse>(await this.callApi(params, req, runtime), new AddCustomLineResponse({}));
  }

  /**
    * The operation that you want to perform. Set the value to AddCustomLine.
    *
    * @param request AddCustomLineRequest
    * @return AddCustomLineResponse
   */
  async addCustomLine(request: AddCustomLineRequest): Promise<AddCustomLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addCustomLineWithOptions(request, runtime);
  }

  async addDnsCacheDomainWithOptions(request: AddDnsCacheDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddDnsCacheDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cacheTtlMax)) {
      query["CacheTtlMax"] = request.cacheTtlMax;
    }

    if (!Util.isUnset(request.cacheTtlMin)) {
      query["CacheTtlMin"] = request.cacheTtlMin;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.sourceDnsServer)) {
      query["SourceDnsServer"] = request.sourceDnsServer;
    }

    if (!Util.isUnset(request.sourceEdns)) {
      query["SourceEdns"] = request.sourceEdns;
    }

    if (!Util.isUnset(request.sourceProtocol)) {
      query["SourceProtocol"] = request.sourceProtocol;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddDnsCacheDomain",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDnsCacheDomainResponse>(await this.callApi(params, req, runtime), new AddDnsCacheDomainResponse({}));
  }

  async addDnsCacheDomain(request: AddDnsCacheDomainRequest): Promise<AddDnsCacheDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDnsCacheDomainWithOptions(request, runtime);
  }

  async addDnsGtmAccessStrategyWithOptions(request: AddDnsGtmAccessStrategyRequest, runtime: $Util.RuntimeOptions): Promise<AddDnsGtmAccessStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defaultAddrPool)) {
      query["DefaultAddrPool"] = request.defaultAddrPool;
    }

    if (!Util.isUnset(request.defaultAddrPoolType)) {
      query["DefaultAddrPoolType"] = request.defaultAddrPoolType;
    }

    if (!Util.isUnset(request.defaultLatencyOptimization)) {
      query["DefaultLatencyOptimization"] = request.defaultLatencyOptimization;
    }

    if (!Util.isUnset(request.defaultLbaStrategy)) {
      query["DefaultLbaStrategy"] = request.defaultLbaStrategy;
    }

    if (!Util.isUnset(request.defaultMaxReturnAddrNum)) {
      query["DefaultMaxReturnAddrNum"] = request.defaultMaxReturnAddrNum;
    }

    if (!Util.isUnset(request.defaultMinAvailableAddrNum)) {
      query["DefaultMinAvailableAddrNum"] = request.defaultMinAvailableAddrNum;
    }

    if (!Util.isUnset(request.failoverAddrPool)) {
      query["FailoverAddrPool"] = request.failoverAddrPool;
    }

    if (!Util.isUnset(request.failoverAddrPoolType)) {
      query["FailoverAddrPoolType"] = request.failoverAddrPoolType;
    }

    if (!Util.isUnset(request.failoverLatencyOptimization)) {
      query["FailoverLatencyOptimization"] = request.failoverLatencyOptimization;
    }

    if (!Util.isUnset(request.failoverLbaStrategy)) {
      query["FailoverLbaStrategy"] = request.failoverLbaStrategy;
    }

    if (!Util.isUnset(request.failoverMaxReturnAddrNum)) {
      query["FailoverMaxReturnAddrNum"] = request.failoverMaxReturnAddrNum;
    }

    if (!Util.isUnset(request.failoverMinAvailableAddrNum)) {
      query["FailoverMinAvailableAddrNum"] = request.failoverMinAvailableAddrNum;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lines)) {
      query["Lines"] = request.lines;
    }

    if (!Util.isUnset(request.strategyMode)) {
      query["StrategyMode"] = request.strategyMode;
    }

    if (!Util.isUnset(request.strategyName)) {
      query["StrategyName"] = request.strategyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddDnsGtmAccessStrategy",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDnsGtmAccessStrategyResponse>(await this.callApi(params, req, runtime), new AddDnsGtmAccessStrategyResponse({}));
  }

  async addDnsGtmAccessStrategy(request: AddDnsGtmAccessStrategyRequest): Promise<AddDnsGtmAccessStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDnsGtmAccessStrategyWithOptions(request, runtime);
  }

  async addDnsGtmAddressPoolWithOptions(request: AddDnsGtmAddressPoolRequest, runtime: $Util.RuntimeOptions): Promise<AddDnsGtmAddressPoolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addr)) {
      query["Addr"] = request.addr;
    }

    if (!Util.isUnset(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispCityNode)) {
      query["IspCityNode"] = request.ispCityNode;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lbaStrategy)) {
      query["LbaStrategy"] = request.lbaStrategy;
    }

    if (!Util.isUnset(request.monitorExtendInfo)) {
      query["MonitorExtendInfo"] = request.monitorExtendInfo;
    }

    if (!Util.isUnset(request.monitorStatus)) {
      query["MonitorStatus"] = request.monitorStatus;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddDnsGtmAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDnsGtmAddressPoolResponse>(await this.callApi(params, req, runtime), new AddDnsGtmAddressPoolResponse({}));
  }

  async addDnsGtmAddressPool(request: AddDnsGtmAddressPoolRequest): Promise<AddDnsGtmAddressPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDnsGtmAddressPoolWithOptions(request, runtime);
  }

  /**
    * ***
    *
    * @param request AddDnsGtmMonitorRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddDnsGtmMonitorResponse
   */
  async addDnsGtmMonitorWithOptions(request: AddDnsGtmMonitorRequest, runtime: $Util.RuntimeOptions): Promise<AddDnsGtmMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addrPoolId)) {
      query["AddrPoolId"] = request.addrPoolId;
    }

    if (!Util.isUnset(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispCityNode)) {
      query["IspCityNode"] = request.ispCityNode;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.monitorExtendInfo)) {
      query["MonitorExtendInfo"] = request.monitorExtendInfo;
    }

    if (!Util.isUnset(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddDnsGtmMonitor",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDnsGtmMonitorResponse>(await this.callApi(params, req, runtime), new AddDnsGtmMonitorResponse({}));
  }

  /**
    * ***
    *
    * @param request AddDnsGtmMonitorRequest
    * @return AddDnsGtmMonitorResponse
   */
  async addDnsGtmMonitor(request: AddDnsGtmMonitorRequest): Promise<AddDnsGtmMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDnsGtmMonitorWithOptions(request, runtime);
  }

  /**
    * You can check whether a domain name is valid based on the following topic:
    * [Domain name validity](https://www.alibabacloud.com/help/zh/doc-detail/67788.htm)
    *
    * @param request AddDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddDomainResponse
   */
  async addDomainWithOptions(request: AddDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddDomain",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDomainResponse>(await this.callApi(params, req, runtime), new AddDomainResponse({}));
  }

  /**
    * You can check whether a domain name is valid based on the following topic:
    * [Domain name validity](https://www.alibabacloud.com/help/zh/doc-detail/67788.htm)
    *
    * @param request AddDomainRequest
    * @return AddDomainResponse
   */
  async addDomain(request: AddDomainRequest): Promise<AddDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDomainWithOptions(request, runtime);
  }

  async addDomainBackupWithOptions(request: AddDomainBackupRequest, runtime: $Util.RuntimeOptions): Promise<AddDomainBackupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.periodType)) {
      query["PeriodType"] = request.periodType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddDomainBackup",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDomainBackupResponse>(await this.callApi(params, req, runtime), new AddDomainBackupResponse({}));
  }

  async addDomainBackup(request: AddDomainBackupRequest): Promise<AddDomainBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDomainBackupWithOptions(request, runtime);
  }

  async addDomainGroupWithOptions(request: AddDomainGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddDomainGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddDomainGroup",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDomainGroupResponse>(await this.callApi(params, req, runtime), new AddDomainGroupResponse({}));
  }

  async addDomainGroup(request: AddDomainGroupRequest): Promise<AddDomainGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDomainGroupWithOptions(request, runtime);
  }

  async addDomainRecordWithOptions(request: AddDomainRecordRequest, runtime: $Util.RuntimeOptions): Promise<AddDomainRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.line)) {
      query["Line"] = request.line;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.RR)) {
      query["RR"] = request.RR;
    }

    if (!Util.isUnset(request.TTL)) {
      query["TTL"] = request.TTL;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddDomainRecord",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDomainRecordResponse>(await this.callApi(params, req, runtime), new AddDomainRecordResponse({}));
  }

  async addDomainRecord(request: AddDomainRecordRequest): Promise<AddDomainRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDomainRecordWithOptions(request, runtime);
  }

  async addGtmAccessStrategyWithOptions(request: AddGtmAccessStrategyRequest, runtime: $Util.RuntimeOptions): Promise<AddGtmAccessStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessLines)) {
      query["AccessLines"] = request.accessLines;
    }

    if (!Util.isUnset(request.defaultAddrPoolId)) {
      query["DefaultAddrPoolId"] = request.defaultAddrPoolId;
    }

    if (!Util.isUnset(request.failoverAddrPoolId)) {
      query["FailoverAddrPoolId"] = request.failoverAddrPoolId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.strategyName)) {
      query["StrategyName"] = request.strategyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddGtmAccessStrategy",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddGtmAccessStrategyResponse>(await this.callApi(params, req, runtime), new AddGtmAccessStrategyResponse({}));
  }

  async addGtmAccessStrategy(request: AddGtmAccessStrategyRequest): Promise<AddGtmAccessStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGtmAccessStrategyWithOptions(request, runtime);
  }

  async addGtmAddressPoolWithOptions(request: AddGtmAddressPoolRequest, runtime: $Util.RuntimeOptions): Promise<AddGtmAddressPoolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addr)) {
      query["Addr"] = request.addr;
    }

    if (!Util.isUnset(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispCityNode)) {
      query["IspCityNode"] = request.ispCityNode;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.minAvailableAddrNum)) {
      query["MinAvailableAddrNum"] = request.minAvailableAddrNum;
    }

    if (!Util.isUnset(request.monitorExtendInfo)) {
      query["MonitorExtendInfo"] = request.monitorExtendInfo;
    }

    if (!Util.isUnset(request.monitorStatus)) {
      query["MonitorStatus"] = request.monitorStatus;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddGtmAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddGtmAddressPoolResponse>(await this.callApi(params, req, runtime), new AddGtmAddressPoolResponse({}));
  }

  async addGtmAddressPool(request: AddGtmAddressPoolRequest): Promise<AddGtmAddressPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGtmAddressPoolWithOptions(request, runtime);
  }

  async addGtmMonitorWithOptions(request: AddGtmMonitorRequest, runtime: $Util.RuntimeOptions): Promise<AddGtmMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addrPoolId)) {
      query["AddrPoolId"] = request.addrPoolId;
    }

    if (!Util.isUnset(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispCityNode)) {
      query["IspCityNode"] = request.ispCityNode;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.monitorExtendInfo)) {
      query["MonitorExtendInfo"] = request.monitorExtendInfo;
    }

    if (!Util.isUnset(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddGtmMonitor",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddGtmMonitorResponse>(await this.callApi(params, req, runtime), new AddGtmMonitorResponse({}));
  }

  async addGtmMonitor(request: AddGtmMonitorRequest): Promise<AddGtmMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGtmMonitorWithOptions(request, runtime);
  }

  async addGtmRecoveryPlanWithOptions(request: AddGtmRecoveryPlanRequest, runtime: $Util.RuntimeOptions): Promise<AddGtmRecoveryPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.faultAddrPool)) {
      query["FaultAddrPool"] = request.faultAddrPool;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddGtmRecoveryPlan",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddGtmRecoveryPlanResponse>(await this.callApi(params, req, runtime), new AddGtmRecoveryPlanResponse({}));
  }

  async addGtmRecoveryPlan(request: AddGtmRecoveryPlanRequest): Promise<AddGtmRecoveryPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGtmRecoveryPlanWithOptions(request, runtime);
  }

  async bindInstanceDomainsWithOptions(request: BindInstanceDomainsRequest, runtime: $Util.RuntimeOptions): Promise<BindInstanceDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindInstanceDomains",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindInstanceDomainsResponse>(await this.callApi(params, req, runtime), new BindInstanceDomainsResponse({}));
  }

  async bindInstanceDomains(request: BindInstanceDomainsRequest): Promise<BindInstanceDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindInstanceDomainsWithOptions(request, runtime);
  }

  async changeDomainGroupWithOptions(request: ChangeDomainGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeDomainGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeDomainGroup",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeDomainGroupResponse>(await this.callApi(params, req, runtime), new ChangeDomainGroupResponse({}));
  }

  async changeDomainGroup(request: ChangeDomainGroupRequest): Promise<ChangeDomainGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeDomainGroupWithOptions(request, runtime);
  }

  /**
    * >  You can call this operation to change the domain name for an Alibaba Cloud DNS instance to which a domain name is bound. You can also call this operation to bind a domain name to an Alibaba Cloud DNS instance to which no domain name is bound. If you need to unbind a domain name from an Alibaba Cloud DNS instance, you can call this operation. In this case, the NewDomain parameter must not be specified.
    *
    * @param request ChangeDomainOfDnsProductRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ChangeDomainOfDnsProductResponse
   */
  async changeDomainOfDnsProductWithOptions(request: ChangeDomainOfDnsProductRequest, runtime: $Util.RuntimeOptions): Promise<ChangeDomainOfDnsProductResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.newDomain)) {
      query["NewDomain"] = request.newDomain;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeDomainOfDnsProduct",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeDomainOfDnsProductResponse>(await this.callApi(params, req, runtime), new ChangeDomainOfDnsProductResponse({}));
  }

  /**
    * >  You can call this operation to change the domain name for an Alibaba Cloud DNS instance to which a domain name is bound. You can also call this operation to bind a domain name to an Alibaba Cloud DNS instance to which no domain name is bound. If you need to unbind a domain name from an Alibaba Cloud DNS instance, you can call this operation. In this case, the NewDomain parameter must not be specified.
    *
    * @param request ChangeDomainOfDnsProductRequest
    * @return ChangeDomainOfDnsProductResponse
   */
  async changeDomainOfDnsProduct(request: ChangeDomainOfDnsProductRequest): Promise<ChangeDomainOfDnsProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeDomainOfDnsProductWithOptions(request, runtime);
  }

  async copyGtmConfigWithOptions(request: CopyGtmConfigRequest, runtime: $Util.RuntimeOptions): Promise<CopyGtmConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.copyType)) {
      query["CopyType"] = request.copyType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CopyGtmConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CopyGtmConfigResponse>(await this.callApi(params, req, runtime), new CopyGtmConfigResponse({}));
  }

  async copyGtmConfig(request: CopyGtmConfigRequest): Promise<CopyGtmConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyGtmConfigWithOptions(request, runtime);
  }

  async createPdnsAppKeyWithOptions(request: CreatePdnsAppKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreatePdnsAppKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePdnsAppKey",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePdnsAppKeyResponse>(await this.callApi(params, req, runtime), new CreatePdnsAppKeyResponse({}));
  }

  async createPdnsAppKey(request: CreatePdnsAppKeyRequest): Promise<CreatePdnsAppKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPdnsAppKeyWithOptions(request, runtime);
  }

  async createPdnsUdpIpSegmentWithOptions(request: CreatePdnsUdpIpSegmentRequest, runtime: $Util.RuntimeOptions): Promise<CreatePdnsUdpIpSegmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePdnsUdpIpSegment",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePdnsUdpIpSegmentResponse>(await this.callApi(params, req, runtime), new CreatePdnsUdpIpSegmentResponse({}));
  }

  async createPdnsUdpIpSegment(request: CreatePdnsUdpIpSegmentRequest): Promise<CreatePdnsUdpIpSegmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPdnsUdpIpSegmentWithOptions(request, runtime);
  }

  async deleteCustomLinesWithOptions(request: DeleteCustomLinesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomLinesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lineIds)) {
      query["LineIds"] = request.lineIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomLines",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomLinesResponse>(await this.callApi(params, req, runtime), new DeleteCustomLinesResponse({}));
  }

  async deleteCustomLines(request: DeleteCustomLinesRequest): Promise<DeleteCustomLinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomLinesWithOptions(request, runtime);
  }

  async deleteDnsCacheDomainWithOptions(request: DeleteDnsCacheDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDnsCacheDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDnsCacheDomain",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDnsCacheDomainResponse>(await this.callApi(params, req, runtime), new DeleteDnsCacheDomainResponse({}));
  }

  async deleteDnsCacheDomain(request: DeleteDnsCacheDomainRequest): Promise<DeleteDnsCacheDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDnsCacheDomainWithOptions(request, runtime);
  }

  async deleteDnsGtmAccessStrategyWithOptions(request: DeleteDnsGtmAccessStrategyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDnsGtmAccessStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDnsGtmAccessStrategy",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDnsGtmAccessStrategyResponse>(await this.callApi(params, req, runtime), new DeleteDnsGtmAccessStrategyResponse({}));
  }

  async deleteDnsGtmAccessStrategy(request: DeleteDnsGtmAccessStrategyRequest): Promise<DeleteDnsGtmAccessStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDnsGtmAccessStrategyWithOptions(request, runtime);
  }

  async deleteDnsGtmAddressPoolWithOptions(request: DeleteDnsGtmAddressPoolRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDnsGtmAddressPoolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addrPoolId)) {
      query["AddrPoolId"] = request.addrPoolId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDnsGtmAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDnsGtmAddressPoolResponse>(await this.callApi(params, req, runtime), new DeleteDnsGtmAddressPoolResponse({}));
  }

  async deleteDnsGtmAddressPool(request: DeleteDnsGtmAddressPoolRequest): Promise<DeleteDnsGtmAddressPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDnsGtmAddressPoolWithOptions(request, runtime);
  }

  /**
    * *   Given the unique nature of a HiChina domain name, you are not allowed to delete the HiChina domain name by calling the Alibaba Cloud DNS API.
    * *   If the system prompts that a domain name does not exist, it is an unregistered domain name, it does not exist under the account, or its format in the request parameters is incorrect.
    *
    * @param request DeleteDomainRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDomainResponse
   */
  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomain",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainResponse>(await this.callApi(params, req, runtime), new DeleteDomainResponse({}));
  }

  /**
    * *   Given the unique nature of a HiChina domain name, you are not allowed to delete the HiChina domain name by calling the Alibaba Cloud DNS API.
    * *   If the system prompts that a domain name does not exist, it is an unregistered domain name, it does not exist under the account, or its format in the request parameters is incorrect.
    *
    * @param request DeleteDomainRequest
    * @return DeleteDomainResponse
   */
  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  /**
    * >  A domain name group can be deleted only when it contains no domain names. The default group cannot be deleted.
    *
    * @param request DeleteDomainGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDomainGroupResponse
   */
  async deleteDomainGroupWithOptions(request: DeleteDomainGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomainGroup",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainGroupResponse>(await this.callApi(params, req, runtime), new DeleteDomainGroupResponse({}));
  }

  /**
    * >  A domain name group can be deleted only when it contains no domain names. The default group cannot be deleted.
    *
    * @param request DeleteDomainGroupRequest
    * @return DeleteDomainGroupResponse
   */
  async deleteDomainGroup(request: DeleteDomainGroupRequest): Promise<DeleteDomainGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainGroupWithOptions(request, runtime);
  }

  async deleteDomainRecordWithOptions(request: DeleteDomainRecordRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomainRecord",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainRecordResponse>(await this.callApi(params, req, runtime), new DeleteDomainRecordResponse({}));
  }

  async deleteDomainRecord(request: DeleteDomainRecordRequest): Promise<DeleteDomainRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainRecordWithOptions(request, runtime);
  }

  async deleteGtmAccessStrategyWithOptions(request: DeleteGtmAccessStrategyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGtmAccessStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGtmAccessStrategy",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGtmAccessStrategyResponse>(await this.callApi(params, req, runtime), new DeleteGtmAccessStrategyResponse({}));
  }

  async deleteGtmAccessStrategy(request: DeleteGtmAccessStrategyRequest): Promise<DeleteGtmAccessStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGtmAccessStrategyWithOptions(request, runtime);
  }

  async deleteGtmAddressPoolWithOptions(request: DeleteGtmAddressPoolRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGtmAddressPoolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addrPoolId)) {
      query["AddrPoolId"] = request.addrPoolId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGtmAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGtmAddressPoolResponse>(await this.callApi(params, req, runtime), new DeleteGtmAddressPoolResponse({}));
  }

  async deleteGtmAddressPool(request: DeleteGtmAddressPoolRequest): Promise<DeleteGtmAddressPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGtmAddressPoolWithOptions(request, runtime);
  }

  async deleteGtmRecoveryPlanWithOptions(request: DeleteGtmRecoveryPlanRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGtmRecoveryPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.recoveryPlanId)) {
      query["RecoveryPlanId"] = request.recoveryPlanId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGtmRecoveryPlan",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGtmRecoveryPlanResponse>(await this.callApi(params, req, runtime), new DeleteGtmRecoveryPlanResponse({}));
  }

  async deleteGtmRecoveryPlan(request: DeleteGtmRecoveryPlanRequest): Promise<DeleteGtmRecoveryPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGtmRecoveryPlanWithOptions(request, runtime);
  }

  /**
    * If the DNS records to be deleted contain locked DNS records, locked DNS records will not be deleted.
    *
    * @param request DeleteSubDomainRecordsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteSubDomainRecordsResponse
   */
  async deleteSubDomainRecordsWithOptions(request: DeleteSubDomainRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSubDomainRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.RR)) {
      query["RR"] = request.RR;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSubDomainRecords",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSubDomainRecordsResponse>(await this.callApi(params, req, runtime), new DeleteSubDomainRecordsResponse({}));
  }

  /**
    * If the DNS records to be deleted contain locked DNS records, locked DNS records will not be deleted.
    *
    * @param request DeleteSubDomainRecordsRequest
    * @return DeleteSubDomainRecordsResponse
   */
  async deleteSubDomainRecords(request: DeleteSubDomainRecordsRequest): Promise<DeleteSubDomainRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSubDomainRecordsWithOptions(request, runtime);
  }

  async describeBatchResultCountWithOptions(request: DescribeBatchResultCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBatchResultCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.batchType)) {
      query["BatchType"] = request.batchType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBatchResultCount",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBatchResultCountResponse>(await this.callApi(params, req, runtime), new DescribeBatchResultCountResponse({}));
  }

  async describeBatchResultCount(request: DescribeBatchResultCountRequest): Promise<DescribeBatchResultCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBatchResultCountWithOptions(request, runtime);
  }

  /**
    * **Before you call this operation, make sure that the batch operation task is complete.
    *
    * @param request DescribeBatchResultDetailRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeBatchResultDetailResponse
   */
  async describeBatchResultDetailWithOptions(request: DescribeBatchResultDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBatchResultDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.batchType)) {
      query["BatchType"] = request.batchType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBatchResultDetail",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBatchResultDetailResponse>(await this.callApi(params, req, runtime), new DescribeBatchResultDetailResponse({}));
  }

  /**
    * **Before you call this operation, make sure that the batch operation task is complete.
    *
    * @param request DescribeBatchResultDetailRequest
    * @return DescribeBatchResultDetailResponse
   */
  async describeBatchResultDetail(request: DescribeBatchResultDetailRequest): Promise<DescribeBatchResultDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBatchResultDetailWithOptions(request, runtime);
  }

  async describeCustomLineWithOptions(request: DescribeCustomLineRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomLineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lineId)) {
      query["LineId"] = request.lineId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomLine",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomLineResponse>(await this.callApi(params, req, runtime), new DescribeCustomLineResponse({}));
  }

  async describeCustomLine(request: DescribeCustomLineRequest): Promise<DescribeCustomLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomLineWithOptions(request, runtime);
  }

  async describeCustomLinesWithOptions(request: DescribeCustomLinesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomLinesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomLines",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomLinesResponse>(await this.callApi(params, req, runtime), new DescribeCustomLinesResponse({}));
  }

  async describeCustomLines(request: DescribeCustomLinesRequest): Promise<DescribeCustomLinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomLinesWithOptions(request, runtime);
  }

  async describeDNSSLBSubDomainsWithOptions(request: DescribeDNSSLBSubDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDNSSLBSubDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.rr)) {
      query["Rr"] = request.rr;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDNSSLBSubDomains",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDNSSLBSubDomainsResponse>(await this.callApi(params, req, runtime), new DescribeDNSSLBSubDomainsResponse({}));
  }

  async describeDNSSLBSubDomains(request: DescribeDNSSLBSubDomainsRequest): Promise<DescribeDNSSLBSubDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDNSSLBSubDomainsWithOptions(request, runtime);
  }

  async describeDnsCacheDomainsWithOptions(request: DescribeDnsCacheDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsCacheDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnsCacheDomains",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnsCacheDomainsResponse>(await this.callApi(params, req, runtime), new DescribeDnsCacheDomainsResponse({}));
  }

  async describeDnsCacheDomains(request: DescribeDnsCacheDomainsRequest): Promise<DescribeDnsCacheDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsCacheDomainsWithOptions(request, runtime);
  }

  async describeDnsGtmAccessStrategiesWithOptions(request: DescribeDnsGtmAccessStrategiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmAccessStrategiesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.strategyMode)) {
      query["StrategyMode"] = request.strategyMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnsGtmAccessStrategies",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnsGtmAccessStrategiesResponse>(await this.callApi(params, req, runtime), new DescribeDnsGtmAccessStrategiesResponse({}));
  }

  async describeDnsGtmAccessStrategies(request: DescribeDnsGtmAccessStrategiesRequest): Promise<DescribeDnsGtmAccessStrategiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmAccessStrategiesWithOptions(request, runtime);
  }

  async describeDnsGtmAccessStrategyWithOptions(request: DescribeDnsGtmAccessStrategyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmAccessStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnsGtmAccessStrategy",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnsGtmAccessStrategyResponse>(await this.callApi(params, req, runtime), new DescribeDnsGtmAccessStrategyResponse({}));
  }

  async describeDnsGtmAccessStrategy(request: DescribeDnsGtmAccessStrategyRequest): Promise<DescribeDnsGtmAccessStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmAccessStrategyWithOptions(request, runtime);
  }

  async describeDnsGtmAccessStrategyAvailableConfigWithOptions(request: DescribeDnsGtmAccessStrategyAvailableConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmAccessStrategyAvailableConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.strategyMode)) {
      query["StrategyMode"] = request.strategyMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnsGtmAccessStrategyAvailableConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnsGtmAccessStrategyAvailableConfigResponse>(await this.callApi(params, req, runtime), new DescribeDnsGtmAccessStrategyAvailableConfigResponse({}));
  }

  async describeDnsGtmAccessStrategyAvailableConfig(request: DescribeDnsGtmAccessStrategyAvailableConfigRequest): Promise<DescribeDnsGtmAccessStrategyAvailableConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmAccessStrategyAvailableConfigWithOptions(request, runtime);
  }

  async describeDnsGtmAddrAttributeInfoWithOptions(request: DescribeDnsGtmAddrAttributeInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmAddrAttributeInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addrs)) {
      query["Addrs"] = request.addrs;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnsGtmAddrAttributeInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnsGtmAddrAttributeInfoResponse>(await this.callApi(params, req, runtime), new DescribeDnsGtmAddrAttributeInfoResponse({}));
  }

  async describeDnsGtmAddrAttributeInfo(request: DescribeDnsGtmAddrAttributeInfoRequest): Promise<DescribeDnsGtmAddrAttributeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmAddrAttributeInfoWithOptions(request, runtime);
  }

  async describeDnsGtmAddressPoolAvailableConfigWithOptions(request: DescribeDnsGtmAddressPoolAvailableConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmAddressPoolAvailableConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnsGtmAddressPoolAvailableConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnsGtmAddressPoolAvailableConfigResponse>(await this.callApi(params, req, runtime), new DescribeDnsGtmAddressPoolAvailableConfigResponse({}));
  }

  async describeDnsGtmAddressPoolAvailableConfig(request: DescribeDnsGtmAddressPoolAvailableConfigRequest): Promise<DescribeDnsGtmAddressPoolAvailableConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmAddressPoolAvailableConfigWithOptions(request, runtime);
  }

  async describeDnsGtmAvailableAlertGroupWithOptions(request: DescribeDnsGtmAvailableAlertGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmAvailableAlertGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnsGtmAvailableAlertGroup",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnsGtmAvailableAlertGroupResponse>(await this.callApi(params, req, runtime), new DescribeDnsGtmAvailableAlertGroupResponse({}));
  }

  async describeDnsGtmAvailableAlertGroup(request: DescribeDnsGtmAvailableAlertGroupRequest): Promise<DescribeDnsGtmAvailableAlertGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmAvailableAlertGroupWithOptions(request, runtime);
  }

  async describeDnsGtmInstanceWithOptions(request: DescribeDnsGtmInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnsGtmInstance",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnsGtmInstanceResponse>(await this.callApi(params, req, runtime), new DescribeDnsGtmInstanceResponse({}));
  }

  async describeDnsGtmInstance(request: DescribeDnsGtmInstanceRequest): Promise<DescribeDnsGtmInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmInstanceWithOptions(request, runtime);
  }

  async describeDnsGtmInstanceAddressPoolWithOptions(request: DescribeDnsGtmInstanceAddressPoolRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmInstanceAddressPoolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addrPoolId)) {
      query["AddrPoolId"] = request.addrPoolId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnsGtmInstanceAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnsGtmInstanceAddressPoolResponse>(await this.callApi(params, req, runtime), new DescribeDnsGtmInstanceAddressPoolResponse({}));
  }

  async describeDnsGtmInstanceAddressPool(request: DescribeDnsGtmInstanceAddressPoolRequest): Promise<DescribeDnsGtmInstanceAddressPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmInstanceAddressPoolWithOptions(request, runtime);
  }

  async describeDnsGtmInstanceAddressPoolsWithOptions(request: DescribeDnsGtmInstanceAddressPoolsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmInstanceAddressPoolsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnsGtmInstanceAddressPools",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnsGtmInstanceAddressPoolsResponse>(await this.callApi(params, req, runtime), new DescribeDnsGtmInstanceAddressPoolsResponse({}));
  }

  async describeDnsGtmInstanceAddressPools(request: DescribeDnsGtmInstanceAddressPoolsRequest): Promise<DescribeDnsGtmInstanceAddressPoolsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmInstanceAddressPoolsWithOptions(request, runtime);
  }

  async describeDnsGtmInstanceStatusWithOptions(request: DescribeDnsGtmInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmInstanceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnsGtmInstanceStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnsGtmInstanceStatusResponse>(await this.callApi(params, req, runtime), new DescribeDnsGtmInstanceStatusResponse({}));
  }

  async describeDnsGtmInstanceStatus(request: DescribeDnsGtmInstanceStatusRequest): Promise<DescribeDnsGtmInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmInstanceStatusWithOptions(request, runtime);
  }

  async describeDnsGtmInstanceSystemCnameWithOptions(request: DescribeDnsGtmInstanceSystemCnameRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmInstanceSystemCnameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnsGtmInstanceSystemCname",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnsGtmInstanceSystemCnameResponse>(await this.callApi(params, req, runtime), new DescribeDnsGtmInstanceSystemCnameResponse({}));
  }

  async describeDnsGtmInstanceSystemCname(request: DescribeDnsGtmInstanceSystemCnameRequest): Promise<DescribeDnsGtmInstanceSystemCnameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmInstanceSystemCnameWithOptions(request, runtime);
  }

  async describeDnsGtmInstancesWithOptions(request: DescribeDnsGtmInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnsGtmInstances",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnsGtmInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDnsGtmInstancesResponse({}));
  }

  async describeDnsGtmInstances(request: DescribeDnsGtmInstancesRequest): Promise<DescribeDnsGtmInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmInstancesWithOptions(request, runtime);
  }

  async describeDnsGtmLogsWithOptions(request: DescribeDnsGtmLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnsGtmLogs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnsGtmLogsResponse>(await this.callApi(params, req, runtime), new DescribeDnsGtmLogsResponse({}));
  }

  async describeDnsGtmLogs(request: DescribeDnsGtmLogsRequest): Promise<DescribeDnsGtmLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmLogsWithOptions(request, runtime);
  }

  async describeDnsGtmMonitorAvailableConfigWithOptions(request: DescribeDnsGtmMonitorAvailableConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmMonitorAvailableConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnsGtmMonitorAvailableConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnsGtmMonitorAvailableConfigResponse>(await this.callApi(params, req, runtime), new DescribeDnsGtmMonitorAvailableConfigResponse({}));
  }

  async describeDnsGtmMonitorAvailableConfig(request: DescribeDnsGtmMonitorAvailableConfigRequest): Promise<DescribeDnsGtmMonitorAvailableConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmMonitorAvailableConfigWithOptions(request, runtime);
  }

  async describeDnsGtmMonitorConfigWithOptions(request: DescribeDnsGtmMonitorConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsGtmMonitorConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.monitorConfigId)) {
      query["MonitorConfigId"] = request.monitorConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnsGtmMonitorConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnsGtmMonitorConfigResponse>(await this.callApi(params, req, runtime), new DescribeDnsGtmMonitorConfigResponse({}));
  }

  async describeDnsGtmMonitorConfig(request: DescribeDnsGtmMonitorConfigRequest): Promise<DescribeDnsGtmMonitorConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsGtmMonitorConfigWithOptions(request, runtime);
  }

  async describeDnsProductInstanceWithOptions(request: DescribeDnsProductInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsProductInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnsProductInstance",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnsProductInstanceResponse>(await this.callApi(params, req, runtime), new DescribeDnsProductInstanceResponse({}));
  }

  async describeDnsProductInstance(request: DescribeDnsProductInstanceRequest): Promise<DescribeDnsProductInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsProductInstanceWithOptions(request, runtime);
  }

  /**
    * The number of the page to return. Pages start from page **1**. Default value: **1**.
    *
    * @param request DescribeDnsProductInstancesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDnsProductInstancesResponse
   */
  async describeDnsProductInstancesWithOptions(request: DescribeDnsProductInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDnsProductInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.versionCode)) {
      query["VersionCode"] = request.versionCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDnsProductInstances",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDnsProductInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDnsProductInstancesResponse({}));
  }

  /**
    * The number of the page to return. Pages start from page **1**. Default value: **1**.
    *
    * @param request DescribeDnsProductInstancesRequest
    * @return DescribeDnsProductInstancesResponse
   */
  async describeDnsProductInstances(request: DescribeDnsProductInstancesRequest): Promise<DescribeDnsProductInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDnsProductInstancesWithOptions(request, runtime);
  }

  async describeDohAccountStatisticsWithOptions(request: DescribeDohAccountStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDohAccountStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDohAccountStatistics",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDohAccountStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeDohAccountStatisticsResponse({}));
  }

  async describeDohAccountStatistics(request: DescribeDohAccountStatisticsRequest): Promise<DescribeDohAccountStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDohAccountStatisticsWithOptions(request, runtime);
  }

  async describeDohDomainStatisticsWithOptions(request: DescribeDohDomainStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDohDomainStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDohDomainStatistics",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDohDomainStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeDohDomainStatisticsResponse({}));
  }

  async describeDohDomainStatistics(request: DescribeDohDomainStatisticsRequest): Promise<DescribeDohDomainStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDohDomainStatisticsWithOptions(request, runtime);
  }

  async describeDohDomainStatisticsSummaryWithOptions(request: DescribeDohDomainStatisticsSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDohDomainStatisticsSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDohDomainStatisticsSummary",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDohDomainStatisticsSummaryResponse>(await this.callApi(params, req, runtime), new DescribeDohDomainStatisticsSummaryResponse({}));
  }

  async describeDohDomainStatisticsSummary(request: DescribeDohDomainStatisticsSummaryRequest): Promise<DescribeDohDomainStatisticsSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDohDomainStatisticsSummaryWithOptions(request, runtime);
  }

  async describeDohSubDomainStatisticsWithOptions(request: DescribeDohSubDomainStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDohSubDomainStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.subDomain)) {
      query["SubDomain"] = request.subDomain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDohSubDomainStatistics",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDohSubDomainStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeDohSubDomainStatisticsResponse({}));
  }

  async describeDohSubDomainStatistics(request: DescribeDohSubDomainStatisticsRequest): Promise<DescribeDohSubDomainStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDohSubDomainStatisticsWithOptions(request, runtime);
  }

  async describeDohSubDomainStatisticsSummaryWithOptions(request: DescribeDohSubDomainStatisticsSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDohSubDomainStatisticsSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.subDomain)) {
      query["SubDomain"] = request.subDomain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDohSubDomainStatisticsSummary",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDohSubDomainStatisticsSummaryResponse>(await this.callApi(params, req, runtime), new DescribeDohSubDomainStatisticsSummaryResponse({}));
  }

  async describeDohSubDomainStatisticsSummary(request: DescribeDohSubDomainStatisticsSummaryRequest): Promise<DescribeDohSubDomainStatisticsSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDohSubDomainStatisticsSummaryWithOptions(request, runtime);
  }

  async describeDohUserInfoWithOptions(request: DescribeDohUserInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDohUserInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDohUserInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDohUserInfoResponse>(await this.callApi(params, req, runtime), new DescribeDohUserInfoResponse({}));
  }

  async describeDohUserInfo(request: DescribeDohUserInfoRequest): Promise<DescribeDohUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDohUserInfoWithOptions(request, runtime);
  }

  async describeDomainDnssecInfoWithOptions(request: DescribeDomainDnssecInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainDnssecInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainDnssecInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainDnssecInfoResponse>(await this.callApi(params, req, runtime), new DescribeDomainDnssecInfoResponse({}));
  }

  async describeDomainDnssecInfo(request: DescribeDomainDnssecInfoRequest): Promise<DescribeDomainDnssecInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainDnssecInfoWithOptions(request, runtime);
  }

  async describeDomainGroupsWithOptions(request: DescribeDomainGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainGroups",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainGroupsResponse>(await this.callApi(params, req, runtime), new DescribeDomainGroupsResponse({}));
  }

  async describeDomainGroups(request: DescribeDomainGroupsRequest): Promise<DescribeDomainGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainGroupsWithOptions(request, runtime);
  }

  /**
    * In this example, the domain name is bound to an instance of Alibaba Cloud DNS Enterprise Ultimate Edition. For more information about valid Domain Name System (DNS) request lines, see the return values of the RecordLines parameter.
    *
    * @param request DescribeDomainInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainInfoResponse
   */
  async describeDomainInfoWithOptions(request: DescribeDomainInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.needDetailAttributes)) {
      query["NeedDetailAttributes"] = request.needDetailAttributes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainInfoResponse>(await this.callApi(params, req, runtime), new DescribeDomainInfoResponse({}));
  }

  /**
    * In this example, the domain name is bound to an instance of Alibaba Cloud DNS Enterprise Ultimate Edition. For more information about valid Domain Name System (DNS) request lines, see the return values of the RecordLines parameter.
    *
    * @param request DescribeDomainInfoRequest
    * @return DescribeDomainInfoResponse
   */
  async describeDomainInfo(request: DescribeDomainInfoRequest): Promise<DescribeDomainInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainInfoWithOptions(request, runtime);
  }

  async describeDomainLogsWithOptions(request: DescribeDomainLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainLogs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainLogsResponse>(await this.callApi(params, req, runtime), new DescribeDomainLogsResponse({}));
  }

  async describeDomainLogs(request: DescribeDomainLogsRequest): Promise<DescribeDomainLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainLogsWithOptions(request, runtime);
  }

  /**
    * >  You can call this operation to query the authoritative servers of a domain name registry to obtain the name servers for a domain name. If the domain name is in an invalid state, such as serverHold or clientHold, an error may be returned.
    *
    * @param request DescribeDomainNsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainNsResponse
   */
  async describeDomainNsWithOptions(request: DescribeDomainNsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainNsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainNs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainNsResponse>(await this.callApi(params, req, runtime), new DescribeDomainNsResponse({}));
  }

  /**
    * >  You can call this operation to query the authoritative servers of a domain name registry to obtain the name servers for a domain name. If the domain name is in an invalid state, such as serverHold or clientHold, an error may be returned.
    *
    * @param request DescribeDomainNsRequest
    * @return DescribeDomainNsResponse
   */
  async describeDomainNs(request: DescribeDomainNsRequest): Promise<DescribeDomainNsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainNsWithOptions(request, runtime);
  }

  /**
    * ## Debugging
    * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Alidns\\&api=DescribeDomainRecordInfo\\&type=RPC\\&version=2015-01-09)
    *
    * @param request DescribeDomainRecordInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainRecordInfoResponse
   */
  async describeDomainRecordInfoWithOptions(request: DescribeDomainRecordInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRecordInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainRecordInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainRecordInfoResponse>(await this.callApi(params, req, runtime), new DescribeDomainRecordInfoResponse({}));
  }

  /**
    * ## Debugging
    * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Alidns\\&api=DescribeDomainRecordInfo\\&type=RPC\\&version=2015-01-09)
    *
    * @param request DescribeDomainRecordInfoRequest
    * @return DescribeDomainRecordInfoResponse
   */
  async describeDomainRecordInfo(request: DescribeDomainRecordInfoRequest): Promise<DescribeDomainRecordInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRecordInfoWithOptions(request, runtime);
  }

  /**
    * *   You can specify DomainName, PageNumber, and PageSize to query the DNS records of the specified domain names.
    * *   You can also specify RRKeyWord, TypeKeyWord, or ValueKeyWord to query the DNS records that contain the specified keyword.
    * *   By default, the DNS records are sorted in reverse chronological order based on the time when they were added.
    * *   You can specify GroupId to query the DNS records of the specified domain names based on the group ID. You can query the DNS records of all domain names and the domain names in the default group.
    *
    * @param request DescribeDomainRecordsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainRecordsResponse
   */
  async describeDomainRecordsWithOptions(request: DescribeDomainRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.line)) {
      query["Line"] = request.line;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.RRKeyWord)) {
      query["RRKeyWord"] = request.RRKeyWord;
    }

    if (!Util.isUnset(request.searchMode)) {
      query["SearchMode"] = request.searchMode;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.typeKeyWord)) {
      query["TypeKeyWord"] = request.typeKeyWord;
    }

    if (!Util.isUnset(request.valueKeyWord)) {
      query["ValueKeyWord"] = request.valueKeyWord;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainRecords",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainRecordsResponse>(await this.callApi(params, req, runtime), new DescribeDomainRecordsResponse({}));
  }

  /**
    * *   You can specify DomainName, PageNumber, and PageSize to query the DNS records of the specified domain names.
    * *   You can also specify RRKeyWord, TypeKeyWord, or ValueKeyWord to query the DNS records that contain the specified keyword.
    * *   By default, the DNS records are sorted in reverse chronological order based on the time when they were added.
    * *   You can specify GroupId to query the DNS records of the specified domain names based on the group ID. You can query the DNS records of all domain names and the domain names in the default group.
    *
    * @param request DescribeDomainRecordsRequest
    * @return DescribeDomainRecordsResponse
   */
  async describeDomainRecords(request: DescribeDomainRecordsRequest): Promise<DescribeDomainRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRecordsWithOptions(request, runtime);
  }

  async describeDomainResolveStatisticsSummaryWithOptions(request: DescribeDomainResolveStatisticsSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainResolveStatisticsSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchMode)) {
      query["SearchMode"] = request.searchMode;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainResolveStatisticsSummary",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainResolveStatisticsSummaryResponse>(await this.callApi(params, req, runtime), new DescribeDomainResolveStatisticsSummaryResponse({}));
  }

  async describeDomainResolveStatisticsSummary(request: DescribeDomainResolveStatisticsSummaryRequest): Promise<DescribeDomainResolveStatisticsSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainResolveStatisticsSummaryWithOptions(request, runtime);
  }

  /**
    * Real-time data is collected per hour.
    *
    * @param request DescribeDomainStatisticsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainStatisticsResponse
   */
  async describeDomainStatisticsWithOptions(request: DescribeDomainStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainStatistics",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeDomainStatisticsResponse({}));
  }

  /**
    * Real-time data is collected per hour.
    *
    * @param request DescribeDomainStatisticsRequest
    * @return DescribeDomainStatisticsResponse
   */
  async describeDomainStatistics(request: DescribeDomainStatisticsRequest): Promise<DescribeDomainStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainStatisticsWithOptions(request, runtime);
  }

  async describeDomainStatisticsSummaryWithOptions(request: DescribeDomainStatisticsSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainStatisticsSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchMode)) {
      query["SearchMode"] = request.searchMode;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainStatisticsSummary",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainStatisticsSummaryResponse>(await this.callApi(params, req, runtime), new DescribeDomainStatisticsSummaryResponse({}));
  }

  async describeDomainStatisticsSummary(request: DescribeDomainStatisticsSummaryRequest): Promise<DescribeDomainStatisticsSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainStatisticsSummaryWithOptions(request, runtime);
  }

  /**
    * *   You can specify the PageNumber and PageSize parameters to query domain names.
    * *   You can specify the KeyWord parameter to query domain names that contain the specified keyword.
    * *   By default, the domain names in a list are sorted in descending order of the time they were added.
    * *   You can specify the GroupId parameter. If you do not specify this parameter, all domain names are queried by default.
    *
    * @param request DescribeDomainsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDomainsResponse
   */
  async describeDomainsWithOptions(request: DescribeDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.searchMode)) {
      query["SearchMode"] = request.searchMode;
    }

    if (!Util.isUnset(request.starmark)) {
      query["Starmark"] = request.starmark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomains",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainsResponse>(await this.callApi(params, req, runtime), new DescribeDomainsResponse({}));
  }

  /**
    * *   You can specify the PageNumber and PageSize parameters to query domain names.
    * *   You can specify the KeyWord parameter to query domain names that contain the specified keyword.
    * *   By default, the domain names in a list are sorted in descending order of the time they were added.
    * *   You can specify the GroupId parameter. If you do not specify this parameter, all domain names are queried by default.
    *
    * @param request DescribeDomainsRequest
    * @return DescribeDomainsResponse
   */
  async describeDomains(request: DescribeDomainsRequest): Promise<DescribeDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  async describeGtmAccessStrategiesWithOptions(request: DescribeGtmAccessStrategiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmAccessStrategiesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGtmAccessStrategies",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGtmAccessStrategiesResponse>(await this.callApi(params, req, runtime), new DescribeGtmAccessStrategiesResponse({}));
  }

  async describeGtmAccessStrategies(request: DescribeGtmAccessStrategiesRequest): Promise<DescribeGtmAccessStrategiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmAccessStrategiesWithOptions(request, runtime);
  }

  async describeGtmAccessStrategyWithOptions(request: DescribeGtmAccessStrategyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmAccessStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGtmAccessStrategy",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGtmAccessStrategyResponse>(await this.callApi(params, req, runtime), new DescribeGtmAccessStrategyResponse({}));
  }

  async describeGtmAccessStrategy(request: DescribeGtmAccessStrategyRequest): Promise<DescribeGtmAccessStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmAccessStrategyWithOptions(request, runtime);
  }

  async describeGtmAccessStrategyAvailableConfigWithOptions(request: DescribeGtmAccessStrategyAvailableConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmAccessStrategyAvailableConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGtmAccessStrategyAvailableConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGtmAccessStrategyAvailableConfigResponse>(await this.callApi(params, req, runtime), new DescribeGtmAccessStrategyAvailableConfigResponse({}));
  }

  async describeGtmAccessStrategyAvailableConfig(request: DescribeGtmAccessStrategyAvailableConfigRequest): Promise<DescribeGtmAccessStrategyAvailableConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmAccessStrategyAvailableConfigWithOptions(request, runtime);
  }

  async describeGtmAvailableAlertGroupWithOptions(request: DescribeGtmAvailableAlertGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmAvailableAlertGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGtmAvailableAlertGroup",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGtmAvailableAlertGroupResponse>(await this.callApi(params, req, runtime), new DescribeGtmAvailableAlertGroupResponse({}));
  }

  async describeGtmAvailableAlertGroup(request: DescribeGtmAvailableAlertGroupRequest): Promise<DescribeGtmAvailableAlertGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmAvailableAlertGroupWithOptions(request, runtime);
  }

  async describeGtmInstanceWithOptions(request: DescribeGtmInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.needDetailAttributes)) {
      query["NeedDetailAttributes"] = request.needDetailAttributes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGtmInstance",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGtmInstanceResponse>(await this.callApi(params, req, runtime), new DescribeGtmInstanceResponse({}));
  }

  async describeGtmInstance(request: DescribeGtmInstanceRequest): Promise<DescribeGtmInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmInstanceWithOptions(request, runtime);
  }

  async describeGtmInstanceAddressPoolWithOptions(request: DescribeGtmInstanceAddressPoolRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmInstanceAddressPoolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addrPoolId)) {
      query["AddrPoolId"] = request.addrPoolId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGtmInstanceAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGtmInstanceAddressPoolResponse>(await this.callApi(params, req, runtime), new DescribeGtmInstanceAddressPoolResponse({}));
  }

  async describeGtmInstanceAddressPool(request: DescribeGtmInstanceAddressPoolRequest): Promise<DescribeGtmInstanceAddressPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmInstanceAddressPoolWithOptions(request, runtime);
  }

  async describeGtmInstanceAddressPoolsWithOptions(request: DescribeGtmInstanceAddressPoolsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmInstanceAddressPoolsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGtmInstanceAddressPools",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGtmInstanceAddressPoolsResponse>(await this.callApi(params, req, runtime), new DescribeGtmInstanceAddressPoolsResponse({}));
  }

  async describeGtmInstanceAddressPools(request: DescribeGtmInstanceAddressPoolsRequest): Promise<DescribeGtmInstanceAddressPoolsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmInstanceAddressPoolsWithOptions(request, runtime);
  }

  async describeGtmInstanceStatusWithOptions(request: DescribeGtmInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmInstanceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGtmInstanceStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGtmInstanceStatusResponse>(await this.callApi(params, req, runtime), new DescribeGtmInstanceStatusResponse({}));
  }

  async describeGtmInstanceStatus(request: DescribeGtmInstanceStatusRequest): Promise<DescribeGtmInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmInstanceStatusWithOptions(request, runtime);
  }

  async describeGtmInstanceSystemCnameWithOptions(request: DescribeGtmInstanceSystemCnameRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmInstanceSystemCnameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGtmInstanceSystemCname",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGtmInstanceSystemCnameResponse>(await this.callApi(params, req, runtime), new DescribeGtmInstanceSystemCnameResponse({}));
  }

  async describeGtmInstanceSystemCname(request: DescribeGtmInstanceSystemCnameRequest): Promise<DescribeGtmInstanceSystemCnameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmInstanceSystemCnameWithOptions(request, runtime);
  }

  async describeGtmInstancesWithOptions(request: DescribeGtmInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.needDetailAttributes)) {
      query["NeedDetailAttributes"] = request.needDetailAttributes;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGtmInstances",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGtmInstancesResponse>(await this.callApi(params, req, runtime), new DescribeGtmInstancesResponse({}));
  }

  async describeGtmInstances(request: DescribeGtmInstancesRequest): Promise<DescribeGtmInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmInstancesWithOptions(request, runtime);
  }

  async describeGtmLogsWithOptions(request: DescribeGtmLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGtmLogs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGtmLogsResponse>(await this.callApi(params, req, runtime), new DescribeGtmLogsResponse({}));
  }

  async describeGtmLogs(request: DescribeGtmLogsRequest): Promise<DescribeGtmLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmLogsWithOptions(request, runtime);
  }

  async describeGtmMonitorAvailableConfigWithOptions(request: DescribeGtmMonitorAvailableConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmMonitorAvailableConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGtmMonitorAvailableConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGtmMonitorAvailableConfigResponse>(await this.callApi(params, req, runtime), new DescribeGtmMonitorAvailableConfigResponse({}));
  }

  async describeGtmMonitorAvailableConfig(request: DescribeGtmMonitorAvailableConfigRequest): Promise<DescribeGtmMonitorAvailableConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmMonitorAvailableConfigWithOptions(request, runtime);
  }

  async describeGtmMonitorConfigWithOptions(request: DescribeGtmMonitorConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmMonitorConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.monitorConfigId)) {
      query["MonitorConfigId"] = request.monitorConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGtmMonitorConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGtmMonitorConfigResponse>(await this.callApi(params, req, runtime), new DescribeGtmMonitorConfigResponse({}));
  }

  async describeGtmMonitorConfig(request: DescribeGtmMonitorConfigRequest): Promise<DescribeGtmMonitorConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmMonitorConfigWithOptions(request, runtime);
  }

  async describeGtmRecoveryPlanWithOptions(request: DescribeGtmRecoveryPlanRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmRecoveryPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.recoveryPlanId)) {
      query["RecoveryPlanId"] = request.recoveryPlanId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGtmRecoveryPlan",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGtmRecoveryPlanResponse>(await this.callApi(params, req, runtime), new DescribeGtmRecoveryPlanResponse({}));
  }

  async describeGtmRecoveryPlan(request: DescribeGtmRecoveryPlanRequest): Promise<DescribeGtmRecoveryPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmRecoveryPlanWithOptions(request, runtime);
  }

  async describeGtmRecoveryPlanAvailableConfigWithOptions(request: DescribeGtmRecoveryPlanAvailableConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmRecoveryPlanAvailableConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGtmRecoveryPlanAvailableConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGtmRecoveryPlanAvailableConfigResponse>(await this.callApi(params, req, runtime), new DescribeGtmRecoveryPlanAvailableConfigResponse({}));
  }

  async describeGtmRecoveryPlanAvailableConfig(request: DescribeGtmRecoveryPlanAvailableConfigRequest): Promise<DescribeGtmRecoveryPlanAvailableConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmRecoveryPlanAvailableConfigWithOptions(request, runtime);
  }

  async describeGtmRecoveryPlansWithOptions(request: DescribeGtmRecoveryPlansRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGtmRecoveryPlansResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGtmRecoveryPlans",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGtmRecoveryPlansResponse>(await this.callApi(params, req, runtime), new DescribeGtmRecoveryPlansResponse({}));
  }

  async describeGtmRecoveryPlans(request: DescribeGtmRecoveryPlansRequest): Promise<DescribeGtmRecoveryPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGtmRecoveryPlansWithOptions(request, runtime);
  }

  async describeInstanceDomainsWithOptions(request: DescribeInstanceDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceDomains",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceDomainsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceDomainsResponse({}));
  }

  async describeInstanceDomains(request: DescribeInstanceDomainsRequest): Promise<DescribeInstanceDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceDomainsWithOptions(request, runtime);
  }

  async describeIspFlushCacheInstancesWithOptions(request: DescribeIspFlushCacheInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIspFlushCacheInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIspFlushCacheInstances",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIspFlushCacheInstancesResponse>(await this.callApi(params, req, runtime), new DescribeIspFlushCacheInstancesResponse({}));
  }

  async describeIspFlushCacheInstances(request: DescribeIspFlushCacheInstancesRequest): Promise<DescribeIspFlushCacheInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIspFlushCacheInstancesWithOptions(request, runtime);
  }

  async describeIspFlushCacheRemainQuotaWithOptions(request: DescribeIspFlushCacheRemainQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIspFlushCacheRemainQuotaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIspFlushCacheRemainQuota",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIspFlushCacheRemainQuotaResponse>(await this.callApi(params, req, runtime), new DescribeIspFlushCacheRemainQuotaResponse({}));
  }

  async describeIspFlushCacheRemainQuota(request: DescribeIspFlushCacheRemainQuotaRequest): Promise<DescribeIspFlushCacheRemainQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIspFlushCacheRemainQuotaWithOptions(request, runtime);
  }

  async describeIspFlushCacheTaskWithOptions(request: DescribeIspFlushCacheTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIspFlushCacheTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIspFlushCacheTask",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIspFlushCacheTaskResponse>(await this.callApi(params, req, runtime), new DescribeIspFlushCacheTaskResponse({}));
  }

  async describeIspFlushCacheTask(request: DescribeIspFlushCacheTaskRequest): Promise<DescribeIspFlushCacheTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIspFlushCacheTaskWithOptions(request, runtime);
  }

  async describeIspFlushCacheTasksWithOptions(request: DescribeIspFlushCacheTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIspFlushCacheTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIspFlushCacheTasks",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIspFlushCacheTasksResponse>(await this.callApi(params, req, runtime), new DescribeIspFlushCacheTasksResponse({}));
  }

  async describeIspFlushCacheTasks(request: DescribeIspFlushCacheTasksRequest): Promise<DescribeIspFlushCacheTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIspFlushCacheTasksWithOptions(request, runtime);
  }

  async describePdnsAccountSummaryWithOptions(request: DescribePdnsAccountSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribePdnsAccountSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePdnsAccountSummary",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePdnsAccountSummaryResponse>(await this.callApi(params, req, runtime), new DescribePdnsAccountSummaryResponse({}));
  }

  async describePdnsAccountSummary(request: DescribePdnsAccountSummaryRequest): Promise<DescribePdnsAccountSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePdnsAccountSummaryWithOptions(request, runtime);
  }

  async describePdnsAppKeyWithOptions(request: DescribePdnsAppKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribePdnsAppKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKeyId)) {
      query["AppKeyId"] = request.appKeyId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePdnsAppKey",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePdnsAppKeyResponse>(await this.callApi(params, req, runtime), new DescribePdnsAppKeyResponse({}));
  }

  async describePdnsAppKey(request: DescribePdnsAppKeyRequest): Promise<DescribePdnsAppKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePdnsAppKeyWithOptions(request, runtime);
  }

  async describePdnsAppKeysWithOptions(request: DescribePdnsAppKeysRequest, runtime: $Util.RuntimeOptions): Promise<DescribePdnsAppKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePdnsAppKeys",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePdnsAppKeysResponse>(await this.callApi(params, req, runtime), new DescribePdnsAppKeysResponse({}));
  }

  async describePdnsAppKeys(request: DescribePdnsAppKeysRequest): Promise<DescribePdnsAppKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePdnsAppKeysWithOptions(request, runtime);
  }

  async describePdnsOperateLogsWithOptions(request: DescribePdnsOperateLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePdnsOperateLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePdnsOperateLogs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePdnsOperateLogsResponse>(await this.callApi(params, req, runtime), new DescribePdnsOperateLogsResponse({}));
  }

  async describePdnsOperateLogs(request: DescribePdnsOperateLogsRequest): Promise<DescribePdnsOperateLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePdnsOperateLogsWithOptions(request, runtime);
  }

  async describePdnsRequestStatisticWithOptions(request: DescribePdnsRequestStatisticRequest, runtime: $Util.RuntimeOptions): Promise<DescribePdnsRequestStatisticResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.subDomain)) {
      query["SubDomain"] = request.subDomain;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePdnsRequestStatistic",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePdnsRequestStatisticResponse>(await this.callApi(params, req, runtime), new DescribePdnsRequestStatisticResponse({}));
  }

  async describePdnsRequestStatistic(request: DescribePdnsRequestStatisticRequest): Promise<DescribePdnsRequestStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePdnsRequestStatisticWithOptions(request, runtime);
  }

  async describePdnsRequestStatisticsWithOptions(request: DescribePdnsRequestStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePdnsRequestStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.subDomain)) {
      query["SubDomain"] = request.subDomain;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePdnsRequestStatistics",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePdnsRequestStatisticsResponse>(await this.callApi(params, req, runtime), new DescribePdnsRequestStatisticsResponse({}));
  }

  async describePdnsRequestStatistics(request: DescribePdnsRequestStatisticsRequest): Promise<DescribePdnsRequestStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePdnsRequestStatisticsWithOptions(request, runtime);
  }

  async describePdnsThreatLogsWithOptions(request: DescribePdnsThreatLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePdnsThreatLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.threatLevel)) {
      query["ThreatLevel"] = request.threatLevel;
    }

    if (!Util.isUnset(request.threatSourceIp)) {
      query["ThreatSourceIp"] = request.threatSourceIp;
    }

    if (!Util.isUnset(request.threatType)) {
      query["ThreatType"] = request.threatType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePdnsThreatLogs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePdnsThreatLogsResponse>(await this.callApi(params, req, runtime), new DescribePdnsThreatLogsResponse({}));
  }

  async describePdnsThreatLogs(request: DescribePdnsThreatLogsRequest): Promise<DescribePdnsThreatLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePdnsThreatLogsWithOptions(request, runtime);
  }

  async describePdnsThreatStatisticWithOptions(request: DescribePdnsThreatStatisticRequest, runtime: $Util.RuntimeOptions): Promise<DescribePdnsThreatStatisticResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.threatSourceIp)) {
      query["ThreatSourceIp"] = request.threatSourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePdnsThreatStatistic",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePdnsThreatStatisticResponse>(await this.callApi(params, req, runtime), new DescribePdnsThreatStatisticResponse({}));
  }

  async describePdnsThreatStatistic(request: DescribePdnsThreatStatisticRequest): Promise<DescribePdnsThreatStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePdnsThreatStatisticWithOptions(request, runtime);
  }

  async describePdnsThreatStatisticsWithOptions(request: DescribePdnsThreatStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePdnsThreatStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.subDomain)) {
      query["SubDomain"] = request.subDomain;
    }

    if (!Util.isUnset(request.threatLevel)) {
      query["ThreatLevel"] = request.threatLevel;
    }

    if (!Util.isUnset(request.threatSourceIp)) {
      query["ThreatSourceIp"] = request.threatSourceIp;
    }

    if (!Util.isUnset(request.threatType)) {
      query["ThreatType"] = request.threatType;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePdnsThreatStatistics",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePdnsThreatStatisticsResponse>(await this.callApi(params, req, runtime), new DescribePdnsThreatStatisticsResponse({}));
  }

  async describePdnsThreatStatistics(request: DescribePdnsThreatStatisticsRequest): Promise<DescribePdnsThreatStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePdnsThreatStatisticsWithOptions(request, runtime);
  }

  async describePdnsUdpIpSegmentsWithOptions(request: DescribePdnsUdpIpSegmentsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePdnsUdpIpSegmentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePdnsUdpIpSegments",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePdnsUdpIpSegmentsResponse>(await this.callApi(params, req, runtime), new DescribePdnsUdpIpSegmentsResponse({}));
  }

  async describePdnsUdpIpSegments(request: DescribePdnsUdpIpSegmentsRequest): Promise<DescribePdnsUdpIpSegmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePdnsUdpIpSegmentsWithOptions(request, runtime);
  }

  async describePdnsUserInfoWithOptions(request: DescribePdnsUserInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribePdnsUserInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePdnsUserInfo",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePdnsUserInfoResponse>(await this.callApi(params, req, runtime), new DescribePdnsUserInfoResponse({}));
  }

  async describePdnsUserInfo(request: DescribePdnsUserInfoRequest): Promise<DescribePdnsUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePdnsUserInfoWithOptions(request, runtime);
  }

  async describeRecordLogsWithOptions(request: DescribeRecordLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRecordLogs",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRecordLogsResponse>(await this.callApi(params, req, runtime), new DescribeRecordLogsResponse({}));
  }

  async describeRecordLogs(request: DescribeRecordLogsRequest): Promise<DescribeRecordLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordLogsWithOptions(request, runtime);
  }

  async describeRecordResolveStatisticsSummaryWithOptions(request: DescribeRecordResolveStatisticsSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordResolveStatisticsSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchMode)) {
      query["SearchMode"] = request.searchMode;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRecordResolveStatisticsSummary",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRecordResolveStatisticsSummaryResponse>(await this.callApi(params, req, runtime), new DescribeRecordResolveStatisticsSummaryResponse({}));
  }

  async describeRecordResolveStatisticsSummary(request: DescribeRecordResolveStatisticsSummaryRequest): Promise<DescribeRecordResolveStatisticsSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordResolveStatisticsSummaryWithOptions(request, runtime);
  }

  /**
    * Real-time data is collected per hour.
    *
    * @param request DescribeRecordStatisticsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeRecordStatisticsResponse
   */
  async describeRecordStatisticsWithOptions(request: DescribeRecordStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.rr)) {
      query["Rr"] = request.rr;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRecordStatistics",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRecordStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeRecordStatisticsResponse({}));
  }

  /**
    * Real-time data is collected per hour.
    *
    * @param request DescribeRecordStatisticsRequest
    * @return DescribeRecordStatisticsResponse
   */
  async describeRecordStatistics(request: DescribeRecordStatisticsRequest): Promise<DescribeRecordStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordStatisticsWithOptions(request, runtime);
  }

  async describeRecordStatisticsSummaryWithOptions(request: DescribeRecordStatisticsSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordStatisticsSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchMode)) {
      query["SearchMode"] = request.searchMode;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRecordStatisticsSummary",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRecordStatisticsSummaryResponse>(await this.callApi(params, req, runtime), new DescribeRecordStatisticsSummaryResponse({}));
  }

  async describeRecordStatisticsSummary(request: DescribeRecordStatisticsSummaryRequest): Promise<DescribeRecordStatisticsSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordStatisticsSummaryWithOptions(request, runtime);
  }

  async describeSubDomainRecordsWithOptions(request: DescribeSubDomainRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSubDomainRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.line)) {
      query["Line"] = request.line;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.subDomain)) {
      query["SubDomain"] = request.subDomain;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSubDomainRecords",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSubDomainRecordsResponse>(await this.callApi(params, req, runtime), new DescribeSubDomainRecordsResponse({}));
  }

  async describeSubDomainRecords(request: DescribeSubDomainRecordsRequest): Promise<DescribeSubDomainRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSubDomainRecordsWithOptions(request, runtime);
  }

  async describeSupportLinesWithOptions(request: DescribeSupportLinesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSupportLinesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSupportLines",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSupportLinesResponse>(await this.callApi(params, req, runtime), new DescribeSupportLinesResponse({}));
  }

  async describeSupportLines(request: DescribeSupportLinesRequest): Promise<DescribeSupportLinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSupportLinesWithOptions(request, runtime);
  }

  async describeTagsWithOptions(request: DescribeTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTags",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTagsResponse>(await this.callApi(params, req, runtime), new DescribeTagsResponse({}));
  }

  async describeTags(request: DescribeTagsRequest): Promise<DescribeTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagsWithOptions(request, runtime);
  }

  async describeTransferDomainsWithOptions(request: DescribeTransferDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTransferDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.fromUserId)) {
      query["FromUserId"] = request.fromUserId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    if (!Util.isUnset(request.transferType)) {
      query["TransferType"] = request.transferType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTransferDomains",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTransferDomainsResponse>(await this.callApi(params, req, runtime), new DescribeTransferDomainsResponse({}));
  }

  async describeTransferDomains(request: DescribeTransferDomainsRequest): Promise<DescribeTransferDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTransferDomainsWithOptions(request, runtime);
  }

  async executeGtmRecoveryPlanWithOptions(request: ExecuteGtmRecoveryPlanRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteGtmRecoveryPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.recoveryPlanId)) {
      query["RecoveryPlanId"] = request.recoveryPlanId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteGtmRecoveryPlan",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteGtmRecoveryPlanResponse>(await this.callApi(params, req, runtime), new ExecuteGtmRecoveryPlanResponse({}));
  }

  async executeGtmRecoveryPlan(request: ExecuteGtmRecoveryPlanRequest): Promise<ExecuteGtmRecoveryPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeGtmRecoveryPlanWithOptions(request, runtime);
  }

  async getMainDomainNameWithOptions(request: GetMainDomainNameRequest, runtime: $Util.RuntimeOptions): Promise<GetMainDomainNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.inputString)) {
      query["InputString"] = request.inputString;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMainDomainName",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMainDomainNameResponse>(await this.callApi(params, req, runtime), new GetMainDomainNameResponse({}));
  }

  async getMainDomainName(request: GetMainDomainNameRequest): Promise<GetMainDomainNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMainDomainNameWithOptions(request, runtime);
  }

  async getTxtRecordForVerifyWithOptions(request: GetTxtRecordForVerifyRequest, runtime: $Util.RuntimeOptions): Promise<GetTxtRecordForVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTxtRecordForVerify",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTxtRecordForVerifyResponse>(await this.callApi(params, req, runtime), new GetTxtRecordForVerifyResponse({}));
  }

  async getTxtRecordForVerify(request: GetTxtRecordForVerifyRequest): Promise<GetTxtRecordForVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTxtRecordForVerifyWithOptions(request, runtime);
  }

  /**
    * *   Set ResourceId.N or Tag.N that consists of Tag.N.Key and Tag.N.Value in the request to specify the object to be queried.
    * *   Tag.N is a resource tag that consists of a key-value pair. If you set only Tag.N.Key, all tag values that are assigned to the specified key are returned. If you set only Tag.N.Value, an error message is returned.
    * *   If you set both Tag.N and ResourceId.N to filter tags, ResourceId.N must match all specified key-value pairs.
    * *   If you specify multiple key-value pairs, resources that contain these key-value pairs are returned.
    *
    * @param request ListTagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
    * *   Set ResourceId.N or Tag.N that consists of Tag.N.Key and Tag.N.Value in the request to specify the object to be queried.
    * *   Tag.N is a resource tag that consists of a key-value pair. If you set only Tag.N.Key, all tag values that are assigned to the specified key are returned. If you set only Tag.N.Value, an error message is returned.
    * *   If you set both Tag.N and ResourceId.N to filter tags, ResourceId.N must match all specified key-value pairs.
    * *   If you specify multiple key-value pairs, resources that contain these key-value pairs are returned.
    *
    * @param request ListTagResourcesRequest
    * @return ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
    * If the operation succeeds, the name of the DNS server changes to that of an Alibaba Cloud DNS server (ending with hichina.com).
    * >  Before you call this operation, make sure that your domain name has been registered with Alibaba Cloud and the DNS server in use is not an Alibaba Cloud DNS server.
    *
    * @param request ModifyHichinaDomainDNSRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyHichinaDomainDNSResponse
   */
  async modifyHichinaDomainDNSWithOptions(request: ModifyHichinaDomainDNSRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHichinaDomainDNSResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHichinaDomainDNS",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHichinaDomainDNSResponse>(await this.callApi(params, req, runtime), new ModifyHichinaDomainDNSResponse({}));
  }

  /**
    * If the operation succeeds, the name of the DNS server changes to that of an Alibaba Cloud DNS server (ending with hichina.com).
    * >  Before you call this operation, make sure that your domain name has been registered with Alibaba Cloud and the DNS server in use is not an Alibaba Cloud DNS server.
    *
    * @param request ModifyHichinaDomainDNSRequest
    * @return ModifyHichinaDomainDNSResponse
   */
  async modifyHichinaDomainDNS(request: ModifyHichinaDomainDNSRequest): Promise<ModifyHichinaDomainDNSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHichinaDomainDNSWithOptions(request, runtime);
  }

  async moveDomainResourceGroupWithOptions(request: MoveDomainResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveDomainResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MoveDomainResourceGroup",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveDomainResourceGroupResponse>(await this.callApi(params, req, runtime), new MoveDomainResourceGroupResponse({}));
  }

  async moveDomainResourceGroup(request: MoveDomainResourceGroupRequest): Promise<MoveDomainResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveDomainResourceGroupWithOptions(request, runtime);
  }

  async moveGtmResourceGroupWithOptions(request: MoveGtmResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveGtmResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MoveGtmResourceGroup",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveGtmResourceGroupResponse>(await this.callApi(params, req, runtime), new MoveGtmResourceGroupResponse({}));
  }

  async moveGtmResourceGroup(request: MoveGtmResourceGroupRequest): Promise<MoveGtmResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveGtmResourceGroupWithOptions(request, runtime);
  }

  async operateBatchDomainWithOptions(request: OperateBatchDomainRequest, runtime: $Util.RuntimeOptions): Promise<OperateBatchDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainRecordInfo)) {
      query["DomainRecordInfo"] = request.domainRecordInfo;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OperateBatchDomain",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateBatchDomainResponse>(await this.callApi(params, req, runtime), new OperateBatchDomainResponse({}));
  }

  async operateBatchDomain(request: OperateBatchDomainRequest): Promise<OperateBatchDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateBatchDomainWithOptions(request, runtime);
  }

  async pausePdnsServiceWithOptions(request: PausePdnsServiceRequest, runtime: $Util.RuntimeOptions): Promise<PausePdnsServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PausePdnsService",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PausePdnsServiceResponse>(await this.callApi(params, req, runtime), new PausePdnsServiceResponse({}));
  }

  async pausePdnsService(request: PausePdnsServiceRequest): Promise<PausePdnsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pausePdnsServiceWithOptions(request, runtime);
  }

  async previewGtmRecoveryPlanWithOptions(request: PreviewGtmRecoveryPlanRequest, runtime: $Util.RuntimeOptions): Promise<PreviewGtmRecoveryPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.recoveryPlanId)) {
      query["RecoveryPlanId"] = request.recoveryPlanId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PreviewGtmRecoveryPlan",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PreviewGtmRecoveryPlanResponse>(await this.callApi(params, req, runtime), new PreviewGtmRecoveryPlanResponse({}));
  }

  async previewGtmRecoveryPlan(request: PreviewGtmRecoveryPlanRequest): Promise<PreviewGtmRecoveryPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.previewGtmRecoveryPlanWithOptions(request, runtime);
  }

  async removePdnsAppKeyWithOptions(request: RemovePdnsAppKeyRequest, runtime: $Util.RuntimeOptions): Promise<RemovePdnsAppKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKeyId)) {
      query["AppKeyId"] = request.appKeyId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemovePdnsAppKey",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemovePdnsAppKeyResponse>(await this.callApi(params, req, runtime), new RemovePdnsAppKeyResponse({}));
  }

  async removePdnsAppKey(request: RemovePdnsAppKeyRequest): Promise<RemovePdnsAppKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removePdnsAppKeyWithOptions(request, runtime);
  }

  async removePdnsUdpIpSegmentWithOptions(request: RemovePdnsUdpIpSegmentRequest, runtime: $Util.RuntimeOptions): Promise<RemovePdnsUdpIpSegmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemovePdnsUdpIpSegment",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemovePdnsUdpIpSegmentResponse>(await this.callApi(params, req, runtime), new RemovePdnsUdpIpSegmentResponse({}));
  }

  async removePdnsUdpIpSegment(request: RemovePdnsUdpIpSegmentRequest): Promise<RemovePdnsUdpIpSegmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removePdnsUdpIpSegmentWithOptions(request, runtime);
  }

  async resumePdnsServiceWithOptions(request: ResumePdnsServiceRequest, runtime: $Util.RuntimeOptions): Promise<ResumePdnsServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResumePdnsService",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumePdnsServiceResponse>(await this.callApi(params, req, runtime), new ResumePdnsServiceResponse({}));
  }

  async resumePdnsService(request: ResumePdnsServiceRequest): Promise<ResumePdnsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumePdnsServiceWithOptions(request, runtime);
  }

  async retrieveDomainWithOptions(request: RetrieveDomainRequest, runtime: $Util.RuntimeOptions): Promise<RetrieveDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RetrieveDomain",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RetrieveDomainResponse>(await this.callApi(params, req, runtime), new RetrieveDomainResponse({}));
  }

  async retrieveDomain(request: RetrieveDomainRequest): Promise<RetrieveDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retrieveDomainWithOptions(request, runtime);
  }

  async rollbackGtmRecoveryPlanWithOptions(request: RollbackGtmRecoveryPlanRequest, runtime: $Util.RuntimeOptions): Promise<RollbackGtmRecoveryPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.recoveryPlanId)) {
      query["RecoveryPlanId"] = request.recoveryPlanId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RollbackGtmRecoveryPlan",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RollbackGtmRecoveryPlanResponse>(await this.callApi(params, req, runtime), new RollbackGtmRecoveryPlanResponse({}));
  }

  async rollbackGtmRecoveryPlan(request: RollbackGtmRecoveryPlanRequest): Promise<RollbackGtmRecoveryPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackGtmRecoveryPlanWithOptions(request, runtime);
  }

  async setDNSSLBStatusWithOptions(request: SetDNSSLBStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetDNSSLBStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.line)) {
      query["Line"] = request.line;
    }

    if (!Util.isUnset(request.open)) {
      query["Open"] = request.open;
    }

    if (!Util.isUnset(request.subDomain)) {
      query["SubDomain"] = request.subDomain;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDNSSLBStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDNSSLBStatusResponse>(await this.callApi(params, req, runtime), new SetDNSSLBStatusResponse({}));
  }

  async setDNSSLBStatus(request: SetDNSSLBStatusRequest): Promise<SetDNSSLBStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDNSSLBStatusWithOptions(request, runtime);
  }

  /**
    * ****
    *
    * @param request SetDnsGtmAccessModeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetDnsGtmAccessModeResponse
   */
  async setDnsGtmAccessModeWithOptions(request: SetDnsGtmAccessModeRequest, runtime: $Util.RuntimeOptions): Promise<SetDnsGtmAccessModeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessMode)) {
      query["AccessMode"] = request.accessMode;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDnsGtmAccessMode",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDnsGtmAccessModeResponse>(await this.callApi(params, req, runtime), new SetDnsGtmAccessModeResponse({}));
  }

  /**
    * ****
    *
    * @param request SetDnsGtmAccessModeRequest
    * @return SetDnsGtmAccessModeResponse
   */
  async setDnsGtmAccessMode(request: SetDnsGtmAccessModeRequest): Promise<SetDnsGtmAccessModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDnsGtmAccessModeWithOptions(request, runtime);
  }

  async setDnsGtmMonitorStatusWithOptions(request: SetDnsGtmMonitorStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetDnsGtmMonitorStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.monitorConfigId)) {
      query["MonitorConfigId"] = request.monitorConfigId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDnsGtmMonitorStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDnsGtmMonitorStatusResponse>(await this.callApi(params, req, runtime), new SetDnsGtmMonitorStatusResponse({}));
  }

  async setDnsGtmMonitorStatus(request: SetDnsGtmMonitorStatusRequest): Promise<SetDnsGtmMonitorStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDnsGtmMonitorStatusWithOptions(request, runtime);
  }

  async setDomainDnssecStatusWithOptions(request: SetDomainDnssecStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainDnssecStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDomainDnssecStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDomainDnssecStatusResponse>(await this.callApi(params, req, runtime), new SetDomainDnssecStatusResponse({}));
  }

  async setDomainDnssecStatus(request: SetDomainDnssecStatusRequest): Promise<SetDomainDnssecStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainDnssecStatusWithOptions(request, runtime);
  }

  async setDomainRecordStatusWithOptions(request: SetDomainRecordStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainRecordStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDomainRecordStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDomainRecordStatusResponse>(await this.callApi(params, req, runtime), new SetDomainRecordStatusResponse({}));
  }

  async setDomainRecordStatus(request: SetDomainRecordStatusRequest): Promise<SetDomainRecordStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainRecordStatusWithOptions(request, runtime);
  }

  async setGtmAccessModeWithOptions(request: SetGtmAccessModeRequest, runtime: $Util.RuntimeOptions): Promise<SetGtmAccessModeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessMode)) {
      query["AccessMode"] = request.accessMode;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetGtmAccessMode",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetGtmAccessModeResponse>(await this.callApi(params, req, runtime), new SetGtmAccessModeResponse({}));
  }

  async setGtmAccessMode(request: SetGtmAccessModeRequest): Promise<SetGtmAccessModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGtmAccessModeWithOptions(request, runtime);
  }

  async setGtmMonitorStatusWithOptions(request: SetGtmMonitorStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetGtmMonitorStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.monitorConfigId)) {
      query["MonitorConfigId"] = request.monitorConfigId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetGtmMonitorStatus",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetGtmMonitorStatusResponse>(await this.callApi(params, req, runtime), new SetGtmMonitorStatusResponse({}));
  }

  async setGtmMonitorStatus(request: SetGtmMonitorStatusRequest): Promise<SetGtmMonitorStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGtmMonitorStatusWithOptions(request, runtime);
  }

  async submitIspFlushCacheTaskWithOptions(request: SubmitIspFlushCacheTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitIspFlushCacheTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitIspFlushCacheTask",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitIspFlushCacheTaskResponse>(await this.callApi(params, req, runtime), new SubmitIspFlushCacheTaskResponse({}));
  }

  async submitIspFlushCacheTask(request: SubmitIspFlushCacheTaskRequest): Promise<SubmitIspFlushCacheTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitIspFlushCacheTaskWithOptions(request, runtime);
  }

  async switchDnsGtmInstanceStrategyModeWithOptions(request: SwitchDnsGtmInstanceStrategyModeRequest, runtime: $Util.RuntimeOptions): Promise<SwitchDnsGtmInstanceStrategyModeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.strategyMode)) {
      query["StrategyMode"] = request.strategyMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchDnsGtmInstanceStrategyMode",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchDnsGtmInstanceStrategyModeResponse>(await this.callApi(params, req, runtime), new SwitchDnsGtmInstanceStrategyModeResponse({}));
  }

  async switchDnsGtmInstanceStrategyMode(request: SwitchDnsGtmInstanceStrategyModeRequest): Promise<SwitchDnsGtmInstanceStrategyModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchDnsGtmInstanceStrategyModeWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async transferDomainWithOptions(request: TransferDomainRequest, runtime: $Util.RuntimeOptions): Promise<TransferDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TransferDomain",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TransferDomainResponse>(await this.callApi(params, req, runtime), new TransferDomainResponse({}));
  }

  async transferDomain(request: TransferDomainRequest): Promise<TransferDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.transferDomainWithOptions(request, runtime);
  }

  async unbindInstanceDomainsWithOptions(request: UnbindInstanceDomainsRequest, runtime: $Util.RuntimeOptions): Promise<UnbindInstanceDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindInstanceDomains",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindInstanceDomainsResponse>(await this.callApi(params, req, runtime), new UnbindInstanceDomainsResponse({}));
  }

  async unbindInstanceDomains(request: UnbindInstanceDomainsRequest): Promise<UnbindInstanceDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindInstanceDomainsWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateAppKeyStateWithOptions(request: UpdateAppKeyStateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppKeyStateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKeyId)) {
      query["AppKeyId"] = request.appKeyId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppKeyState",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppKeyStateResponse>(await this.callApi(params, req, runtime), new UpdateAppKeyStateResponse({}));
  }

  async updateAppKeyState(request: UpdateAppKeyStateRequest): Promise<UpdateAppKeyStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppKeyStateWithOptions(request, runtime);
  }

  /**
    * In each CIDR block, the end IP address must be greater than or equal to the start IP address.
    * The CIDR blocks that are specified for all custom lines of a domain name cannot intersect.
    *
    * @param request UpdateCustomLineRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateCustomLineResponse
   */
  async updateCustomLineWithOptions(request: UpdateCustomLineRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCustomLineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ipSegment)) {
      query["IpSegment"] = request.ipSegment;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lineId)) {
      query["LineId"] = request.lineId;
    }

    if (!Util.isUnset(request.lineName)) {
      query["LineName"] = request.lineName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCustomLine",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCustomLineResponse>(await this.callApi(params, req, runtime), new UpdateCustomLineResponse({}));
  }

  /**
    * In each CIDR block, the end IP address must be greater than or equal to the start IP address.
    * The CIDR blocks that are specified for all custom lines of a domain name cannot intersect.
    *
    * @param request UpdateCustomLineRequest
    * @return UpdateCustomLineResponse
   */
  async updateCustomLine(request: UpdateCustomLineRequest): Promise<UpdateCustomLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomLineWithOptions(request, runtime);
  }

  async updateDNSSLBWeightWithOptions(request: UpdateDNSSLBWeightRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDNSSLBWeightResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.weight)) {
      query["Weight"] = request.weight;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDNSSLBWeight",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDNSSLBWeightResponse>(await this.callApi(params, req, runtime), new UpdateDNSSLBWeightResponse({}));
  }

  async updateDNSSLBWeight(request: UpdateDNSSLBWeightRequest): Promise<UpdateDNSSLBWeightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDNSSLBWeightWithOptions(request, runtime);
  }

  async updateDnsCacheDomainWithOptions(request: UpdateDnsCacheDomainRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDnsCacheDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cacheTtlMax)) {
      query["CacheTtlMax"] = request.cacheTtlMax;
    }

    if (!Util.isUnset(request.cacheTtlMin)) {
      query["CacheTtlMin"] = request.cacheTtlMin;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceDnsServer)) {
      query["SourceDnsServer"] = request.sourceDnsServer;
    }

    if (!Util.isUnset(request.sourceEdns)) {
      query["SourceEdns"] = request.sourceEdns;
    }

    if (!Util.isUnset(request.sourceProtocol)) {
      query["SourceProtocol"] = request.sourceProtocol;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDnsCacheDomain",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDnsCacheDomainResponse>(await this.callApi(params, req, runtime), new UpdateDnsCacheDomainResponse({}));
  }

  async updateDnsCacheDomain(request: UpdateDnsCacheDomainRequest): Promise<UpdateDnsCacheDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDnsCacheDomainWithOptions(request, runtime);
  }

  async updateDnsCacheDomainRemarkWithOptions(request: UpdateDnsCacheDomainRemarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDnsCacheDomainRemarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDnsCacheDomainRemark",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDnsCacheDomainRemarkResponse>(await this.callApi(params, req, runtime), new UpdateDnsCacheDomainRemarkResponse({}));
  }

  async updateDnsCacheDomainRemark(request: UpdateDnsCacheDomainRemarkRequest): Promise<UpdateDnsCacheDomainRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDnsCacheDomainRemarkWithOptions(request, runtime);
  }

  async updateDnsGtmAccessStrategyWithOptions(request: UpdateDnsGtmAccessStrategyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDnsGtmAccessStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessMode)) {
      query["AccessMode"] = request.accessMode;
    }

    if (!Util.isUnset(request.defaultAddrPool)) {
      query["DefaultAddrPool"] = request.defaultAddrPool;
    }

    if (!Util.isUnset(request.defaultAddrPoolType)) {
      query["DefaultAddrPoolType"] = request.defaultAddrPoolType;
    }

    if (!Util.isUnset(request.defaultLatencyOptimization)) {
      query["DefaultLatencyOptimization"] = request.defaultLatencyOptimization;
    }

    if (!Util.isUnset(request.defaultLbaStrategy)) {
      query["DefaultLbaStrategy"] = request.defaultLbaStrategy;
    }

    if (!Util.isUnset(request.defaultMaxReturnAddrNum)) {
      query["DefaultMaxReturnAddrNum"] = request.defaultMaxReturnAddrNum;
    }

    if (!Util.isUnset(request.defaultMinAvailableAddrNum)) {
      query["DefaultMinAvailableAddrNum"] = request.defaultMinAvailableAddrNum;
    }

    if (!Util.isUnset(request.failoverAddrPool)) {
      query["FailoverAddrPool"] = request.failoverAddrPool;
    }

    if (!Util.isUnset(request.failoverAddrPoolType)) {
      query["FailoverAddrPoolType"] = request.failoverAddrPoolType;
    }

    if (!Util.isUnset(request.failoverLatencyOptimization)) {
      query["FailoverLatencyOptimization"] = request.failoverLatencyOptimization;
    }

    if (!Util.isUnset(request.failoverLbaStrategy)) {
      query["FailoverLbaStrategy"] = request.failoverLbaStrategy;
    }

    if (!Util.isUnset(request.failoverMaxReturnAddrNum)) {
      query["FailoverMaxReturnAddrNum"] = request.failoverMaxReturnAddrNum;
    }

    if (!Util.isUnset(request.failoverMinAvailableAddrNum)) {
      query["FailoverMinAvailableAddrNum"] = request.failoverMinAvailableAddrNum;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lines)) {
      query["Lines"] = request.lines;
    }

    if (!Util.isUnset(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    if (!Util.isUnset(request.strategyName)) {
      query["StrategyName"] = request.strategyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDnsGtmAccessStrategy",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDnsGtmAccessStrategyResponse>(await this.callApi(params, req, runtime), new UpdateDnsGtmAccessStrategyResponse({}));
  }

  async updateDnsGtmAccessStrategy(request: UpdateDnsGtmAccessStrategyRequest): Promise<UpdateDnsGtmAccessStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDnsGtmAccessStrategyWithOptions(request, runtime);
  }

  async updateDnsGtmAddressPoolWithOptions(request: UpdateDnsGtmAddressPoolRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDnsGtmAddressPoolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addr)) {
      query["Addr"] = request.addr;
    }

    if (!Util.isUnset(request.addrPoolId)) {
      query["AddrPoolId"] = request.addrPoolId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lbaStrategy)) {
      query["LbaStrategy"] = request.lbaStrategy;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDnsGtmAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDnsGtmAddressPoolResponse>(await this.callApi(params, req, runtime), new UpdateDnsGtmAddressPoolResponse({}));
  }

  async updateDnsGtmAddressPool(request: UpdateDnsGtmAddressPoolRequest): Promise<UpdateDnsGtmAddressPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDnsGtmAddressPoolWithOptions(request, runtime);
  }

  async updateDnsGtmInstanceGlobalConfigWithOptions(request: UpdateDnsGtmInstanceGlobalConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDnsGtmInstanceGlobalConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertConfig)) {
      query["AlertConfig"] = request.alertConfig;
    }

    if (!Util.isUnset(request.alertGroup)) {
      query["AlertGroup"] = request.alertGroup;
    }

    if (!Util.isUnset(request.cnameType)) {
      query["CnameType"] = request.cnameType;
    }

    if (!Util.isUnset(request.forceUpdate)) {
      query["ForceUpdate"] = request.forceUpdate;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.publicCnameMode)) {
      query["PublicCnameMode"] = request.publicCnameMode;
    }

    if (!Util.isUnset(request.publicRr)) {
      query["PublicRr"] = request.publicRr;
    }

    if (!Util.isUnset(request.publicUserDomainName)) {
      query["PublicUserDomainName"] = request.publicUserDomainName;
    }

    if (!Util.isUnset(request.publicZoneName)) {
      query["PublicZoneName"] = request.publicZoneName;
    }

    if (!Util.isUnset(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDnsGtmInstanceGlobalConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDnsGtmInstanceGlobalConfigResponse>(await this.callApi(params, req, runtime), new UpdateDnsGtmInstanceGlobalConfigResponse({}));
  }

  async updateDnsGtmInstanceGlobalConfig(request: UpdateDnsGtmInstanceGlobalConfigRequest): Promise<UpdateDnsGtmInstanceGlobalConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDnsGtmInstanceGlobalConfigWithOptions(request, runtime);
  }

  async updateDnsGtmMonitorWithOptions(request: UpdateDnsGtmMonitorRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDnsGtmMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispCityNode)) {
      query["IspCityNode"] = request.ispCityNode;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.monitorConfigId)) {
      query["MonitorConfigId"] = request.monitorConfigId;
    }

    if (!Util.isUnset(request.monitorExtendInfo)) {
      query["MonitorExtendInfo"] = request.monitorExtendInfo;
    }

    if (!Util.isUnset(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDnsGtmMonitor",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDnsGtmMonitorResponse>(await this.callApi(params, req, runtime), new UpdateDnsGtmMonitorResponse({}));
  }

  async updateDnsGtmMonitor(request: UpdateDnsGtmMonitorRequest): Promise<UpdateDnsGtmMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDnsGtmMonitorWithOptions(request, runtime);
  }

  async updateDomainGroupWithOptions(request: UpdateDomainGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDomainGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDomainGroup",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDomainGroupResponse>(await this.callApi(params, req, runtime), new UpdateDomainGroupResponse({}));
  }

  async updateDomainGroup(request: UpdateDomainGroupRequest): Promise<UpdateDomainGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDomainGroupWithOptions(request, runtime);
  }

  async updateDomainRecordWithOptions(request: UpdateDomainRecordRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDomainRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.line)) {
      query["Line"] = request.line;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.RR)) {
      query["RR"] = request.RR;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.TTL)) {
      query["TTL"] = request.TTL;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDomainRecord",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDomainRecordResponse>(await this.callApi(params, req, runtime), new UpdateDomainRecordResponse({}));
  }

  async updateDomainRecord(request: UpdateDomainRecordRequest): Promise<UpdateDomainRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDomainRecordWithOptions(request, runtime);
  }

  async updateDomainRecordRemarkWithOptions(request: UpdateDomainRecordRemarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDomainRecordRemarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.userClientIp)) {
      query["UserClientIp"] = request.userClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDomainRecordRemark",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDomainRecordRemarkResponse>(await this.callApi(params, req, runtime), new UpdateDomainRecordRemarkResponse({}));
  }

  async updateDomainRecordRemark(request: UpdateDomainRecordRemarkRequest): Promise<UpdateDomainRecordRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDomainRecordRemarkWithOptions(request, runtime);
  }

  async updateDomainRemarkWithOptions(request: UpdateDomainRemarkRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDomainRemarkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDomainRemark",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDomainRemarkResponse>(await this.callApi(params, req, runtime), new UpdateDomainRemarkResponse({}));
  }

  async updateDomainRemark(request: UpdateDomainRemarkRequest): Promise<UpdateDomainRemarkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDomainRemarkWithOptions(request, runtime);
  }

  async updateGtmAccessStrategyWithOptions(request: UpdateGtmAccessStrategyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGtmAccessStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessLines)) {
      query["AccessLines"] = request.accessLines;
    }

    if (!Util.isUnset(request.defaultAddrPoolId)) {
      query["DefaultAddrPoolId"] = request.defaultAddrPoolId;
    }

    if (!Util.isUnset(request.failoverAddrPoolId)) {
      query["FailoverAddrPoolId"] = request.failoverAddrPoolId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    if (!Util.isUnset(request.strategyName)) {
      query["StrategyName"] = request.strategyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGtmAccessStrategy",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGtmAccessStrategyResponse>(await this.callApi(params, req, runtime), new UpdateGtmAccessStrategyResponse({}));
  }

  async updateGtmAccessStrategy(request: UpdateGtmAccessStrategyRequest): Promise<UpdateGtmAccessStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGtmAccessStrategyWithOptions(request, runtime);
  }

  async updateGtmAddressPoolWithOptions(request: UpdateGtmAddressPoolRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGtmAddressPoolResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addr)) {
      query["Addr"] = request.addr;
    }

    if (!Util.isUnset(request.addrPoolId)) {
      query["AddrPoolId"] = request.addrPoolId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.minAvailableAddrNum)) {
      query["MinAvailableAddrNum"] = request.minAvailableAddrNum;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGtmAddressPool",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGtmAddressPoolResponse>(await this.callApi(params, req, runtime), new UpdateGtmAddressPoolResponse({}));
  }

  async updateGtmAddressPool(request: UpdateGtmAddressPoolRequest): Promise<UpdateGtmAddressPoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGtmAddressPoolWithOptions(request, runtime);
  }

  async updateGtmInstanceGlobalConfigWithOptions(request: UpdateGtmInstanceGlobalConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGtmInstanceGlobalConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertGroup)) {
      query["AlertGroup"] = request.alertGroup;
    }

    if (!Util.isUnset(request.cnameCustomDomainName)) {
      query["CnameCustomDomainName"] = request.cnameCustomDomainName;
    }

    if (!Util.isUnset(request.cnameMode)) {
      query["CnameMode"] = request.cnameMode;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.lbaStrategy)) {
      query["LbaStrategy"] = request.lbaStrategy;
    }

    if (!Util.isUnset(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!Util.isUnset(request.userDomainName)) {
      query["UserDomainName"] = request.userDomainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGtmInstanceGlobalConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGtmInstanceGlobalConfigResponse>(await this.callApi(params, req, runtime), new UpdateGtmInstanceGlobalConfigResponse({}));
  }

  async updateGtmInstanceGlobalConfig(request: UpdateGtmInstanceGlobalConfigRequest): Promise<UpdateGtmInstanceGlobalConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGtmInstanceGlobalConfigWithOptions(request, runtime);
  }

  async updateGtmMonitorWithOptions(request: UpdateGtmMonitorRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGtmMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispCityNode)) {
      query["IspCityNode"] = request.ispCityNode;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.monitorConfigId)) {
      query["MonitorConfigId"] = request.monitorConfigId;
    }

    if (!Util.isUnset(request.monitorExtendInfo)) {
      query["MonitorExtendInfo"] = request.monitorExtendInfo;
    }

    if (!Util.isUnset(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGtmMonitor",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGtmMonitorResponse>(await this.callApi(params, req, runtime), new UpdateGtmMonitorResponse({}));
  }

  async updateGtmMonitor(request: UpdateGtmMonitorRequest): Promise<UpdateGtmMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGtmMonitorWithOptions(request, runtime);
  }

  async updateGtmRecoveryPlanWithOptions(request: UpdateGtmRecoveryPlanRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGtmRecoveryPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.faultAddrPool)) {
      query["FaultAddrPool"] = request.faultAddrPool;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.recoveryPlanId)) {
      query["RecoveryPlanId"] = request.recoveryPlanId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGtmRecoveryPlan",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGtmRecoveryPlanResponse>(await this.callApi(params, req, runtime), new UpdateGtmRecoveryPlanResponse({}));
  }

  async updateGtmRecoveryPlan(request: UpdateGtmRecoveryPlanRequest): Promise<UpdateGtmRecoveryPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGtmRecoveryPlanWithOptions(request, runtime);
  }

  async updateIspFlushCacheInstanceConfigWithOptions(request: UpdateIspFlushCacheInstanceConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIspFlushCacheInstanceConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIspFlushCacheInstanceConfig",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateIspFlushCacheInstanceConfigResponse>(await this.callApi(params, req, runtime), new UpdateIspFlushCacheInstanceConfigResponse({}));
  }

  async updateIspFlushCacheInstanceConfig(request: UpdateIspFlushCacheInstanceConfigRequest): Promise<UpdateIspFlushCacheInstanceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIspFlushCacheInstanceConfigWithOptions(request, runtime);
  }

  async validateDnsGtmCnameRrCanUseWithOptions(request: ValidateDnsGtmCnameRrCanUseRequest, runtime: $Util.RuntimeOptions): Promise<ValidateDnsGtmCnameRrCanUseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cnameMode)) {
      query["CnameMode"] = request.cnameMode;
    }

    if (!Util.isUnset(request.cnameRr)) {
      query["CnameRr"] = request.cnameRr;
    }

    if (!Util.isUnset(request.cnameType)) {
      query["CnameType"] = request.cnameType;
    }

    if (!Util.isUnset(request.cnameZone)) {
      query["CnameZone"] = request.cnameZone;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ValidateDnsGtmCnameRrCanUse",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidateDnsGtmCnameRrCanUseResponse>(await this.callApi(params, req, runtime), new ValidateDnsGtmCnameRrCanUseResponse({}));
  }

  async validateDnsGtmCnameRrCanUse(request: ValidateDnsGtmCnameRrCanUseRequest): Promise<ValidateDnsGtmCnameRrCanUseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateDnsGtmCnameRrCanUseWithOptions(request, runtime);
  }

  async validatePdnsUdpIpSegmentWithOptions(request: ValidatePdnsUdpIpSegmentRequest, runtime: $Util.RuntimeOptions): Promise<ValidatePdnsUdpIpSegmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ValidatePdnsUdpIpSegment",
      version: "2015-01-09",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidatePdnsUdpIpSegmentResponse>(await this.callApi(params, req, runtime), new ValidatePdnsUdpIpSegmentResponse({}));
  }

  async validatePdnsUdpIpSegment(request: ValidatePdnsUdpIpSegmentRequest): Promise<ValidatePdnsUdpIpSegmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validatePdnsUdpIpSegmentWithOptions(request, runtime);
  }

}
