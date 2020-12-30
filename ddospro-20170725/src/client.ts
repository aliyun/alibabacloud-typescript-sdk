// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ConfigSwitchPriorityRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  config?: ConfigSwitchPriorityRequestConfig[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      config: { 'type': 'array', 'itemType': ConfigSwitchPriorityRequestConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigSwitchPriorityResponseBody extends $tea.Model {
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

export class ConfigSwitchPriorityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ConfigSwitchPriorityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ConfigSwitchPriorityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCcCustomedRuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  matchingRule?: string;
  domain?: string;
  visitCount?: number;
  name?: string;
  blockingType?: string;
  interval?: number;
  blockingTime?: number;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      matchingRule: 'MatchingRule',
      domain: 'Domain',
      visitCount: 'VisitCount',
      name: 'Name',
      blockingType: 'BlockingType',
      interval: 'Interval',
      blockingTime: 'BlockingTime',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      matchingRule: 'string',
      domain: 'string',
      visitCount: 'number',
      name: 'string',
      blockingType: 'string',
      interval: 'number',
      blockingTime: 'number',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCcCustomedRuleResponseBody extends $tea.Model {
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

export class CreateCcCustomedRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCcCustomedRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCcCustomedRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  ip?: string;
  type?: string;
  ccEnable?: boolean;
  realServer?: string[];
  proxyType?: string[];
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      ip: 'Ip',
      type: 'Type',
      ccEnable: 'CcEnable',
      realServer: 'RealServer',
      proxyType: 'ProxyType',
      ips: 'Ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      ip: 'string',
      type: 'string',
      ccEnable: 'boolean',
      realServer: { 'type': 'array', 'itemType': 'string' },
      proxyType: { 'type': 'array', 'itemType': 'string' },
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBody extends $tea.Model {
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

export class CreateDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePortRuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  frontPort?: number;
  backPort?: number;
  proxyType?: string;
  realServerList?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      frontPort: 'FrontPort',
      backPort: 'BackPort',
      proxyType: 'ProxyType',
      realServerList: 'RealServerList',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      frontPort: 'number',
      backPort: 'number',
      proxyType: 'string',
      realServerList: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePortRuleResponseBody extends $tea.Model {
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

export class CreatePortRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePortRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePortRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransmitLineRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  type?: string;
  domain?: string;
  ips?: string[];
  realServers?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      type: 'Type',
      domain: 'Domain',
      ips: 'Ips',
      realServers: 'RealServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      type: 'string',
      domain: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
      realServers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransmitLineResponseBody extends $tea.Model {
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

export class CreateTransmitLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTransmitLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTransmitLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCcCustomedRuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCcCustomedRuleResponseBody extends $tea.Model {
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

export class DeleteCcCustomedRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCcCustomedRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCcCustomedRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponseBody extends $tea.Model {
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

export class DeletePortRuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  frontPort?: number;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      frontPort: 'FrontPort',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      frontPort: 'number',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePortRuleResponseBody extends $tea.Model {
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

export class DeletePortRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletePortRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePortRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransmitLineRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  line?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      line: 'Line',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      line: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTransmitLineResponseBody extends $tea.Model {
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

export class DeleteTransmitLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTransmitLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTransmitLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackSourceCidrRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  line?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      line: 'Line',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      line: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackSourceCidrResponseBody extends $tea.Model {
  requestId?: string;
  cidrList?: DescribeBackSourceCidrResponseBodyCidrList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      cidrList: 'CidrList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      cidrList: DescribeBackSourceCidrResponseBodyCidrList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackSourceCidrResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackSourceCidrResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackSourceCidrResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizFlowRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  startTime?: number;
  endTime?: number;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      startTime: 'StartTime',
      endTime: 'EndTime',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      startTime: 'number',
      endTime: 'number',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizFlowResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeBizFlowResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeBizFlowResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBizFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBizFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcEventsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  startTime?: number;
  domain?: string;
  endTime?: number;
  pageSize?: number;
  pageNo?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      startTime: 'StartTime',
      domain: 'Domain',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      startTime: 'number',
      domain: 'string',
      endTime: 'number',
      pageSize: 'number',
      pageNo: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcEventsResponseBody extends $tea.Model {
  requestId?: string;
  eventList?: DescribeCcEventsResponseBodyEventList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      eventList: 'EventList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      eventList: { 'type': 'array', 'itemType': DescribeCcEventsResponseBodyEventList },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCcEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCcEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCnameAutoStatusRequest extends $tea.Model {
  resourceOwnerId?: number;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCnameAutoStatusResponseBody extends $tea.Model {
  status?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCnameAutoStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCnameAutoStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCnameAutoStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosAttackEventsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  pageSize?: number;
  startTime?: number;
  endTime?: number;
  ip?: string;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
      ip: 'Ip',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      pageSize: 'number',
      startTime: 'number',
      endTime: 'number',
      ip: 'string',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosAttackEventsResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeDdosAttackEventsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeDdosAttackEventsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosAttackEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDdosAttackEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDdosAttackEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosAttackEventSourceIpsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  pageSize?: number;
  startTime?: number;
  endTime?: number;
  ip?: string;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
      ip: 'Ip',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      pageSize: 'number',
      startTime: 'number',
      endTime: 'number',
      ip: 'string',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosAttackEventSourceIpsResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeDdosAttackEventSourceIpsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeDdosAttackEventSourceIpsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosAttackEventSourceIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDdosAttackEventSourceIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDdosAttackEventSourceIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosAttackTypeChartRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  startTime?: number;
  endTime?: number;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      startTime: 'StartTime',
      endTime: 'EndTime',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      startTime: 'number',
      endTime: 'number',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosAttackTypeChartResponseBody extends $tea.Model {
  attckCount?: number;
  requestId?: string;
  attckType?: string;
  dropCount?: number;
  dropType?: string;
  static names(): { [key: string]: string } {
    return {
      attckCount: 'AttckCount',
      requestId: 'RequestId',
      attckType: 'AttckType',
      dropCount: 'DropCount',
      dropType: 'DropType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attckCount: 'number',
      requestId: 'string',
      attckType: 'string',
      dropCount: 'number',
      dropType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosAttackTypeChartResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDdosAttackTypeChartResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDdosAttackTypeChartResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosFlowProportionDiagramRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  startTime?: number;
  endTime?: number;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      startTime: 'StartTime',
      endTime: 'EndTime',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      startTime: 'number',
      endTime: 'number',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosFlowProportionDiagramResponseBody extends $tea.Model {
  totalBps?: number;
  requestId?: string;
  dropPps?: number;
  dropBps?: number;
  totalPps?: number;
  static names(): { [key: string]: string } {
    return {
      totalBps: 'TotalBps',
      requestId: 'RequestId',
      dropPps: 'DropPps',
      dropBps: 'DropBps',
      totalPps: 'TotalPps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalBps: 'number',
      requestId: 'string',
      dropPps: 'number',
      dropBps: 'number',
      totalPps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosFlowProportionDiagramResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDdosFlowProportionDiagramResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDdosFlowProportionDiagramResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosIpConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  index?: number;
  pageSize?: number;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      index: 'Index',
      pageSize: 'PageSize',
      ips: 'Ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      index: 'number',
      pageSize: 'number',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosIpConfigResponseBody extends $tea.Model {
  dataList?: DescribeDdosIpConfigResponseBodyDataList[];
  requestId?: string;
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
      dataList: { 'type': 'array', 'itemType': DescribeDdosIpConfigResponseBodyDataList },
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosIpConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDdosIpConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDdosIpConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosPeakFlowRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  startTime?: number;
  endTime?: number;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      startTime: 'StartTime',
      endTime: 'EndTime',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      startTime: 'number',
      endTime: 'number',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosPeakFlowResponseBody extends $tea.Model {
  peakFlow?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      peakFlow: 'PeakFlow',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peakFlow: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosPeakFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDdosPeakFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDdosPeakFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainConfigPageRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  pageSize?: number;
  pageNo?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      pageSize: 'PageSize',
      pageNo: 'PageNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      pageSize: 'number',
      pageNo: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainConfigPageResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  configList?: DescribeDomainConfigPageResponseBodyConfigList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      configList: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      configList: { 'type': 'array', 'itemType': DescribeDomainConfigPageResponseBodyConfigList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainConfigPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainConfigPageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainConfigPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSecurityConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSecurityConfigResponseBody extends $tea.Model {
  requestId?: string;
  ccInfo?: DescribeDomainSecurityConfigResponseBodyCcInfo;
  cnameEnable?: boolean;
  whiteList?: string;
  blackList?: string;
  cnameMode?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ccInfo: 'CcInfo',
      cnameEnable: 'CnameEnable',
      whiteList: 'WhiteList',
      blackList: 'BlackList',
      cnameMode: 'CnameMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ccInfo: DescribeDomainSecurityConfigResponseBodyCcInfo,
      cnameEnable: 'boolean',
      whiteList: 'string',
      blackList: 'string',
      cnameMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSecurityConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainSecurityConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainSecurityConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckConfigResponseBody extends $tea.Model {
  listeners?: DescribeHealthCheckConfigResponseBodyListeners[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': DescribeHealthCheckConfigResponseBodyListeners },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHealthCheckConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHealthCheckConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePageRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  pageSize?: number;
  currentPage?: number;
  instanceId?: string;
  line?: string;
  instanceIdList?: string[];
  ipList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      line: 'Line',
      instanceIdList: 'InstanceIdList',
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      pageSize: 'number',
      currentPage: 'number',
      instanceId: 'string',
      line: 'string',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      ipList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePageResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  instanceList?: DescribeInstancePageResponseBodyInstanceList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      instanceList: 'InstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      instanceList: { 'type': 'array', 'itemType': DescribeInstancePageResponseBodyInstanceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstancePageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstancePageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortRulePageRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  pageSize?: number;
  ip?: string;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      pageSize: 'PageSize',
      ip: 'Ip',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      pageSize: 'number',
      ip: 'string',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortRulePageResponseBody extends $tea.Model {
  ruleList?: DescribePortRulePageResponseBodyRuleList[];
  requestId?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      ruleList: 'RuleList',
      requestId: 'RequestId',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleList: { 'type': 'array', 'itemType': DescribePortRulePageResponseBodyRuleList },
      requestId: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortRulePageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePortRulePageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePortRulePageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCcCustomedRuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCcCustomedRuleResponseBody extends $tea.Model {
  totalCount?: number;
  ruleList?: ListCcCustomedRuleResponseBodyRuleList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      ruleList: 'RuleList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      ruleList: ListCcCustomedRuleResponseBodyRuleList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCcCustomedRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCcCustomedRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCcCustomedRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCcCustomStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCcCustomStatusResponseBody extends $tea.Model {
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

export class ModifyCcCustomStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCcCustomStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCcCustomStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCcStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCcStatusResponseBody extends $tea.Model {
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

export class ModifyCcStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCcStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCcStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCcTemplateRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  mode?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      mode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCcTemplateResponseBody extends $tea.Model {
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

export class ModifyCcTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCcTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCcTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDDoSProtectConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ip?: string;
  frontPort?: number;
  configJson?: string;
  lbId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ip: 'Ip',
      frontPort: 'FrontPort',
      configJson: 'ConfigJson',
      lbId: 'LbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ip: 'string',
      frontPort: 'number',
      configJson: 'string',
      lbId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDDoSProtectConfigResponseBody extends $tea.Model {
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

export class ModifyDDoSProtectConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDDoSProtectConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDDoSProtectConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainBlackWhiteListRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  black?: string[];
  white?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      black: 'Black',
      white: 'White',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      black: { 'type': 'array', 'itemType': 'string' },
      white: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainBlackWhiteListResponseBody extends $tea.Model {
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

export class ModifyDomainBlackWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDomainBlackWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDomainBlackWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainProxyRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  proxyType?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      proxyType: 'ProxyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      proxyType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainProxyResponseBody extends $tea.Model {
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

export class ModifyDomainProxyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDomainProxyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDomainProxyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticBandwidthRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  elasticBandwidth?: number;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      elasticBandwidth: 'ElasticBandwidth',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      elasticBandwidth: 'number',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticBandwidthResponseBody extends $tea.Model {
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

export class ModifyElasticBandwidthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyElasticBandwidthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyElasticBandwidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHealthCheckConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ip?: string;
  frontPort?: number;
  configJson?: string;
  lbId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ip: 'Ip',
      frontPort: 'FrontPort',
      configJson: 'ConfigJson',
      lbId: 'LbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ip: 'string',
      frontPort: 'number',
      configJson: 'string',
      lbId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHealthCheckConfigResponseBody extends $tea.Model {
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

export class ModifyHealthCheckConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyHealthCheckConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyHealthCheckConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpCnameStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  ip?: string;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      ip: 'Ip',
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      ip: 'string',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIpCnameStatusResponseBody extends $tea.Model {
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

export class ModifyIpCnameStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyIpCnameStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyIpCnameStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPersistenceTimeOutRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ip?: string;
  frontPort?: number;
  configJson?: string;
  lbId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ip: 'Ip',
      frontPort: 'FrontPort',
      configJson: 'ConfigJson',
      lbId: 'LbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ip: 'string',
      frontPort: 'number',
      configJson: 'string',
      lbId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPersistenceTimeOutResponseBody extends $tea.Model {
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

export class ModifyPersistenceTimeOutResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyPersistenceTimeOutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPersistenceTimeOutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRealServersRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  type?: string;
  domain?: string;
  line?: string;
  realServers?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      type: 'Type',
      domain: 'Domain',
      line: 'Line',
      realServers: 'RealServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      type: 'string',
      domain: 'string',
      line: 'string',
      realServers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRealServersResponseBody extends $tea.Model {
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

export class ModifyRealServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyRealServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyRealServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTransmitLineRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      ips: 'Ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTransmitLineResponseBody extends $tea.Model {
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

export class ModifyTransmitLineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyTransmitLineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyTransmitLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcCustomedRuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  matchingRule?: string;
  domain?: string;
  visitCount?: number;
  name?: string;
  blockingType?: string;
  interval?: number;
  blockingTime?: number;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      matchingRule: 'MatchingRule',
      domain: 'Domain',
      visitCount: 'VisitCount',
      name: 'Name',
      blockingType: 'BlockingType',
      interval: 'Interval',
      blockingTime: 'BlockingTime',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      matchingRule: 'string',
      domain: 'string',
      visitCount: 'number',
      name: 'string',
      blockingType: 'string',
      interval: 'number',
      blockingTime: 'number',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCcCustomedRuleResponseBody extends $tea.Model {
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

export class UpdateCcCustomedRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCcCustomedRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCcCustomedRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePortRuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  frontPort?: number;
  realServerList?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      frontPort: 'FrontPort',
      realServerList: 'RealServerList',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      frontPort: 'number',
      realServerList: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePortRuleResponseBody extends $tea.Model {
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

export class UpdatePortRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdatePortRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdatePortRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigSwitchPriorityRequestConfig extends $tea.Model {
  ip?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      priority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackSourceCidrResponseBodyCidrList extends $tea.Model {
  cidr?: string[];
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizFlowResponseBodyDataTimeScope extends $tea.Model {
  startTime?: number;
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      interval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBizFlowResponseBodyData extends $tea.Model {
  inKbps?: string[];
  outKbps?: string[];
  timeScope?: DescribeBizFlowResponseBodyDataTimeScope;
  static names(): { [key: string]: string } {
    return {
      inKbps: 'InKbps',
      outKbps: 'OutKbps',
      timeScope: 'TimeScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inKbps: { 'type': 'array', 'itemType': 'string' },
      outKbps: { 'type': 'array', 'itemType': 'string' },
      timeScope: DescribeBizFlowResponseBodyDataTimeScope,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCcEventsResponseBodyEventList extends $tea.Model {
  endTime?: string;
  startTime?: string;
  domain?: string;
  attackFinished?: boolean;
  maxQps?: number;
  duration?: number;
  blockedCount?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      domain: 'Domain',
      attackFinished: 'AttackFinished',
      maxQps: 'MaxQps',
      duration: 'Duration',
      blockedCount: 'BlockedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      domain: 'string',
      attackFinished: 'boolean',
      maxQps: 'number',
      duration: 'number',
      blockedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosAttackEventsResponseBodyDataEventList extends $tea.Model {
  endTime?: number;
  startTime?: number;
  attackType?: string;
  result?: number;
  duration?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      attackType: 'AttackType',
      result: 'Result',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      attackType: 'string',
      result: 'number',
      duration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosAttackEventsResponseBodyData extends $tea.Model {
  eventList?: DescribeDdosAttackEventsResponseBodyDataEventList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': DescribeDdosAttackEventsResponseBodyDataEventList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosAttackEventSourceIpsResponseBodyDataIpList extends $tea.Model {
  sourceIp?: string;
  inBps?: number;
  city?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      inBps: 'InBps',
      city: 'City',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      inBps: 'number',
      city: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosAttackEventSourceIpsResponseBodyData extends $tea.Model {
  ipList?: DescribeDdosAttackEventSourceIpsResponseBodyDataIpList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipList: 'IpList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: { 'type': 'array', 'itemType': DescribeDdosAttackEventSourceIpsResponseBodyDataIpList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosIpConfigResponseBodyDataList extends $tea.Model {
  status?: number;
  cleanStatus?: number;
  bandwidth?: number;
  configDomainCount?: number;
  line?: string;
  elasticBandwidth?: number;
  lbId?: string;
  configPortCount?: number;
  ip?: string;
  totalDefenseCount?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      cleanStatus: 'CleanStatus',
      bandwidth: 'Bandwidth',
      configDomainCount: 'ConfigDomainCount',
      line: 'Line',
      elasticBandwidth: 'ElasticBandwidth',
      lbId: 'LbId',
      configPortCount: 'ConfigPortCount',
      ip: 'Ip',
      totalDefenseCount: 'TotalDefenseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      cleanStatus: 'number',
      bandwidth: 'number',
      configDomainCount: 'number',
      line: 'string',
      elasticBandwidth: 'number',
      lbId: 'string',
      configPortCount: 'number',
      ip: 'string',
      totalDefenseCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainConfigPageResponseBodyConfigListInstancesRules extends $tea.Model {
  proxyTypeList?: string[];
  line?: string;
  realServers?: string[];
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      proxyTypeList: 'ProxyTypeList',
      line: 'Line',
      realServers: 'RealServers',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyTypeList: { 'type': 'array', 'itemType': 'string' },
      line: 'string',
      realServers: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainConfigPageResponseBodyConfigListInstances extends $tea.Model {
  instanceRemark?: string;
  instanceId?: string;
  rules?: DescribeDomainConfigPageResponseBodyConfigListInstancesRules[];
  static names(): { [key: string]: string } {
    return {
      instanceRemark: 'InstanceRemark',
      instanceId: 'InstanceId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRemark: 'string',
      instanceId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeDomainConfigPageResponseBodyConfigListInstancesRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainConfigPageResponseBodyConfigList extends $tea.Model {
  domain?: string;
  cname?: string;
  instances?: DescribeDomainConfigPageResponseBodyConfigListInstances[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      cname: 'Cname',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      cname: 'string',
      instances: { 'type': 'array', 'itemType': DescribeDomainConfigPageResponseBodyConfigListInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainSecurityConfigResponseBodyCcInfo extends $tea.Model {
  ccCustomRuleCount?: number;
  ccSwitch?: boolean;
  ccTemplate?: string;
  ccCustomRuleEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      ccCustomRuleCount: 'CcCustomRuleCount',
      ccSwitch: 'CcSwitch',
      ccTemplate: 'CcTemplate',
      ccCustomRuleEnable: 'CcCustomRuleEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccCustomRuleCount: 'number',
      ccSwitch: 'boolean',
      ccTemplate: 'string',
      ccCustomRuleEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckConfigResponseBodyListenersCheck extends $tea.Model {
  type?: string;
  timeout?: number;
  domain?: string;
  interval?: number;
  up?: number;
  down?: number;
  port?: number;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      timeout: 'Timeout',
      domain: 'Domain',
      interval: 'Interval',
      up: 'Up',
      down: 'Down',
      port: 'Port',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      timeout: 'number',
      domain: 'string',
      interval: 'number',
      up: 'number',
      down: 'number',
      port: 'number',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckConfigResponseBodyListenersConfigSla extends $tea.Model {
  cpsEnable?: number;
  cps?: number;
  maxConnEnable?: number;
  maxConn?: number;
  static names(): { [key: string]: string } {
    return {
      cpsEnable: 'CpsEnable',
      cps: 'Cps',
      maxConnEnable: 'MaxConnEnable',
      maxConn: 'MaxConn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpsEnable: 'number',
      cps: 'number',
      maxConnEnable: 'number',
      maxConn: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckConfigResponseBodyListenersConfigPayloadLength extends $tea.Model {
  max?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckConfigResponseBodyListenersConfigSlimit extends $tea.Model {
  cpsEnable?: number;
  cps?: number;
  maxConnEnable?: number;
  maxConn?: number;
  static names(): { [key: string]: string } {
    return {
      cpsEnable: 'CpsEnable',
      cps: 'Cps',
      maxConnEnable: 'MaxConnEnable',
      maxConn: 'MaxConn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpsEnable: 'number',
      cps: 'number',
      maxConnEnable: 'number',
      maxConn: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckConfigResponseBodyListenersConfig extends $tea.Model {
  synProxy?: string;
  persistenceTimeout?: number;
  noDataConn?: string;
  sla?: DescribeHealthCheckConfigResponseBodyListenersConfigSla;
  payloadLength?: DescribeHealthCheckConfigResponseBodyListenersConfigPayloadLength;
  slimit?: DescribeHealthCheckConfigResponseBodyListenersConfigSlimit;
  static names(): { [key: string]: string } {
    return {
      synProxy: 'SynProxy',
      persistenceTimeout: 'PersistenceTimeout',
      noDataConn: 'NoDataConn',
      sla: 'Sla',
      payloadLength: 'PayloadLength',
      slimit: 'Slimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synProxy: 'string',
      persistenceTimeout: 'number',
      noDataConn: 'string',
      sla: DescribeHealthCheckConfigResponseBodyListenersConfigSla,
      payloadLength: DescribeHealthCheckConfigResponseBodyListenersConfigPayloadLength,
      slimit: DescribeHealthCheckConfigResponseBodyListenersConfigSlimit,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHealthCheckConfigResponseBodyListeners extends $tea.Model {
  frontendPort?: number;
  check?: DescribeHealthCheckConfigResponseBodyListenersCheck;
  protocol?: string;
  backPort?: number;
  config?: DescribeHealthCheckConfigResponseBodyListenersConfig;
  static names(): { [key: string]: string } {
    return {
      frontendPort: 'FrontendPort',
      check: 'Check',
      protocol: 'Protocol',
      backPort: 'BackPort',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontendPort: 'number',
      check: DescribeHealthCheckConfigResponseBodyListenersCheck,
      protocol: 'string',
      backPort: 'number',
      config: DescribeHealthCheckConfigResponseBodyListenersConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePageResponseBodyInstanceListIpList extends $tea.Model {
  status?: number;
  line?: string;
  ip?: string;
  instanceId?: string;
  bandWidth?: number;
  elasticBandWidth?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      line: 'Line',
      ip: 'Ip',
      instanceId: 'InstanceId',
      bandWidth: 'BandWidth',
      elasticBandWidth: 'ElasticBandWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      line: 'string',
      ip: 'string',
      instanceId: 'string',
      bandWidth: 'number',
      elasticBandWidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePageResponseBodyInstanceList extends $tea.Model {
  instanceRemark?: string;
  ipList?: DescribeInstancePageResponseBodyInstanceListIpList[];
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceRemark: 'InstanceRemark',
      ipList: 'IpList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRemark: 'string',
      ipList: { 'type': 'array', 'itemType': DescribeInstancePageResponseBodyInstanceListIpList },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortRulePageResponseBodyRuleList extends $tea.Model {
  backProtocol?: string;
  backPort?: number;
  lbId?: string;
  ip?: string;
  lvsType?: string;
  realServer?: string;
  frontPort?: number;
  frontProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      backProtocol: 'BackProtocol',
      backPort: 'BackPort',
      lbId: 'LbId',
      ip: 'Ip',
      lvsType: 'LvsType',
      realServer: 'RealServer',
      frontPort: 'FrontPort',
      frontProtocol: 'FrontProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backProtocol: 'string',
      backPort: 'number',
      lbId: 'string',
      ip: 'string',
      lvsType: 'string',
      realServer: 'string',
      frontPort: 'number',
      frontProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCcCustomedRuleResponseBodyRuleListRule extends $tea.Model {
  blockingTime?: number;
  blockingType?: string;
  interval?: number;
  visitCount?: number;
  name?: string;
  uri?: string;
  matchingRule?: string;
  static names(): { [key: string]: string } {
    return {
      blockingTime: 'BlockingTime',
      blockingType: 'BlockingType',
      interval: 'Interval',
      visitCount: 'VisitCount',
      name: 'Name',
      uri: 'Uri',
      matchingRule: 'MatchingRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockingTime: 'number',
      blockingType: 'string',
      interval: 'number',
      visitCount: 'number',
      name: 'string',
      uri: 'string',
      matchingRule: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCcCustomedRuleResponseBodyRuleList extends $tea.Model {
  rule?: ListCcCustomedRuleResponseBodyRuleListRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': ListCcCustomedRuleResponseBodyRuleListRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ddospro", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async configSwitchPriorityWithOptions(request: ConfigSwitchPriorityRequest, runtime: $Util.RuntimeOptions): Promise<ConfigSwitchPriorityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ConfigSwitchPriorityResponse>(await this.doRPCRequest("ConfigSwitchPriority", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new ConfigSwitchPriorityResponse({}));
  }

  async configSwitchPriority(request: ConfigSwitchPriorityRequest): Promise<ConfigSwitchPriorityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configSwitchPriorityWithOptions(request, runtime);
  }

  async createCcCustomedRuleWithOptions(request: CreateCcCustomedRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateCcCustomedRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCcCustomedRuleResponse>(await this.doRPCRequest("CreateCcCustomedRule", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCcCustomedRuleResponse({}));
  }

  async createCcCustomedRule(request: CreateCcCustomedRuleRequest): Promise<CreateCcCustomedRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCcCustomedRuleWithOptions(request, runtime);
  }

  async createDomainWithOptions(request: CreateDomainRequest, runtime: $Util.RuntimeOptions): Promise<CreateDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDomainResponse>(await this.doRPCRequest("CreateDomain", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDomainResponse({}));
  }

  async createDomain(request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainWithOptions(request, runtime);
  }

  async createPortRuleWithOptions(request: CreatePortRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreatePortRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePortRuleResponse>(await this.doRPCRequest("CreatePortRule", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePortRuleResponse({}));
  }

  async createPortRule(request: CreatePortRuleRequest): Promise<CreatePortRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPortRuleWithOptions(request, runtime);
  }

  async createTransmitLineWithOptions(request: CreateTransmitLineRequest, runtime: $Util.RuntimeOptions): Promise<CreateTransmitLineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTransmitLineResponse>(await this.doRPCRequest("CreateTransmitLine", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTransmitLineResponse({}));
  }

  async createTransmitLine(request: CreateTransmitLineRequest): Promise<CreateTransmitLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTransmitLineWithOptions(request, runtime);
  }

  async deleteCcCustomedRuleWithOptions(request: DeleteCcCustomedRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCcCustomedRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCcCustomedRuleResponse>(await this.doRPCRequest("DeleteCcCustomedRule", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCcCustomedRuleResponse({}));
  }

  async deleteCcCustomedRule(request: DeleteCcCustomedRuleRequest): Promise<DeleteCcCustomedRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCcCustomedRuleWithOptions(request, runtime);
  }

  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDomainResponse>(await this.doRPCRequest("DeleteDomain", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDomainResponse({}));
  }

  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  async deletePortRuleWithOptions(request: DeletePortRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeletePortRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeletePortRuleResponse>(await this.doRPCRequest("DeletePortRule", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeletePortRuleResponse({}));
  }

  async deletePortRule(request: DeletePortRuleRequest): Promise<DeletePortRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePortRuleWithOptions(request, runtime);
  }

  async deleteTransmitLineWithOptions(request: DeleteTransmitLineRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTransmitLineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTransmitLineResponse>(await this.doRPCRequest("DeleteTransmitLine", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTransmitLineResponse({}));
  }

  async deleteTransmitLine(request: DeleteTransmitLineRequest): Promise<DeleteTransmitLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTransmitLineWithOptions(request, runtime);
  }

  async describeBackSourceCidrWithOptions(request: DescribeBackSourceCidrRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackSourceCidrResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackSourceCidrResponse>(await this.doRPCRequest("DescribeBackSourceCidr", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackSourceCidrResponse({}));
  }

  async describeBackSourceCidr(request: DescribeBackSourceCidrRequest): Promise<DescribeBackSourceCidrResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackSourceCidrWithOptions(request, runtime);
  }

  async describeBizFlowWithOptions(request: DescribeBizFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBizFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBizFlowResponse>(await this.doRPCRequest("DescribeBizFlow", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBizFlowResponse({}));
  }

  async describeBizFlow(request: DescribeBizFlowRequest): Promise<DescribeBizFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBizFlowWithOptions(request, runtime);
  }

  async describeCcEventsWithOptions(request: DescribeCcEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCcEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCcEventsResponse>(await this.doRPCRequest("DescribeCcEvents", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCcEventsResponse({}));
  }

  async describeCcEvents(request: DescribeCcEventsRequest): Promise<DescribeCcEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCcEventsWithOptions(request, runtime);
  }

  async describeCnameAutoStatusWithOptions(request: DescribeCnameAutoStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCnameAutoStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCnameAutoStatusResponse>(await this.doRPCRequest("DescribeCnameAutoStatus", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCnameAutoStatusResponse({}));
  }

  async describeCnameAutoStatus(request: DescribeCnameAutoStatusRequest): Promise<DescribeCnameAutoStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCnameAutoStatusWithOptions(request, runtime);
  }

  async describeDdosAttackEventsWithOptions(request: DescribeDdosAttackEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosAttackEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDdosAttackEventsResponse>(await this.doRPCRequest("DescribeDdosAttackEvents", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDdosAttackEventsResponse({}));
  }

  async describeDdosAttackEvents(request: DescribeDdosAttackEventsRequest): Promise<DescribeDdosAttackEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosAttackEventsWithOptions(request, runtime);
  }

  async describeDdosAttackEventSourceIpsWithOptions(request: DescribeDdosAttackEventSourceIpsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosAttackEventSourceIpsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDdosAttackEventSourceIpsResponse>(await this.doRPCRequest("DescribeDdosAttackEventSourceIps", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDdosAttackEventSourceIpsResponse({}));
  }

  async describeDdosAttackEventSourceIps(request: DescribeDdosAttackEventSourceIpsRequest): Promise<DescribeDdosAttackEventSourceIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosAttackEventSourceIpsWithOptions(request, runtime);
  }

  async describeDdosAttackTypeChartWithOptions(request: DescribeDdosAttackTypeChartRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosAttackTypeChartResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDdosAttackTypeChartResponse>(await this.doRPCRequest("DescribeDdosAttackTypeChart", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDdosAttackTypeChartResponse({}));
  }

  async describeDdosAttackTypeChart(request: DescribeDdosAttackTypeChartRequest): Promise<DescribeDdosAttackTypeChartResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosAttackTypeChartWithOptions(request, runtime);
  }

  async describeDdosFlowProportionDiagramWithOptions(request: DescribeDdosFlowProportionDiagramRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosFlowProportionDiagramResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDdosFlowProportionDiagramResponse>(await this.doRPCRequest("DescribeDdosFlowProportionDiagram", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDdosFlowProportionDiagramResponse({}));
  }

  async describeDdosFlowProportionDiagram(request: DescribeDdosFlowProportionDiagramRequest): Promise<DescribeDdosFlowProportionDiagramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosFlowProportionDiagramWithOptions(request, runtime);
  }

  async describeDdosIpConfigWithOptions(request: DescribeDdosIpConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosIpConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDdosIpConfigResponse>(await this.doRPCRequest("DescribeDdosIpConfig", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDdosIpConfigResponse({}));
  }

  async describeDdosIpConfig(request: DescribeDdosIpConfigRequest): Promise<DescribeDdosIpConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosIpConfigWithOptions(request, runtime);
  }

  async describeDdosPeakFlowWithOptions(request: DescribeDdosPeakFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDdosPeakFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDdosPeakFlowResponse>(await this.doRPCRequest("DescribeDdosPeakFlow", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDdosPeakFlowResponse({}));
  }

  async describeDdosPeakFlow(request: DescribeDdosPeakFlowRequest): Promise<DescribeDdosPeakFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDdosPeakFlowWithOptions(request, runtime);
  }

  async describeDomainConfigPageWithOptions(request: DescribeDomainConfigPageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainConfigPageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainConfigPageResponse>(await this.doRPCRequest("DescribeDomainConfigPage", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainConfigPageResponse({}));
  }

  async describeDomainConfigPage(request: DescribeDomainConfigPageRequest): Promise<DescribeDomainConfigPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainConfigPageWithOptions(request, runtime);
  }

  async describeDomainSecurityConfigWithOptions(request: DescribeDomainSecurityConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainSecurityConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainSecurityConfigResponse>(await this.doRPCRequest("DescribeDomainSecurityConfig", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainSecurityConfigResponse({}));
  }

  async describeDomainSecurityConfig(request: DescribeDomainSecurityConfigRequest): Promise<DescribeDomainSecurityConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainSecurityConfigWithOptions(request, runtime);
  }

  async describeHealthCheckConfigWithOptions(request: DescribeHealthCheckConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHealthCheckConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHealthCheckConfigResponse>(await this.doRPCRequest("DescribeHealthCheckConfig", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHealthCheckConfigResponse({}));
  }

  async describeHealthCheckConfig(request: DescribeHealthCheckConfigRequest): Promise<DescribeHealthCheckConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHealthCheckConfigWithOptions(request, runtime);
  }

  async describeInstancePageWithOptions(request: DescribeInstancePageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancePageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstancePageResponse>(await this.doRPCRequest("DescribeInstancePage", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstancePageResponse({}));
  }

  async describeInstancePage(request: DescribeInstancePageRequest): Promise<DescribeInstancePageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancePageWithOptions(request, runtime);
  }

  async describePortRulePageWithOptions(request: DescribePortRulePageRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortRulePageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePortRulePageResponse>(await this.doRPCRequest("DescribePortRulePage", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePortRulePageResponse({}));
  }

  async describePortRulePage(request: DescribePortRulePageRequest): Promise<DescribePortRulePageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortRulePageWithOptions(request, runtime);
  }

  async listCcCustomedRuleWithOptions(request: ListCcCustomedRuleRequest, runtime: $Util.RuntimeOptions): Promise<ListCcCustomedRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCcCustomedRuleResponse>(await this.doRPCRequest("ListCcCustomedRule", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new ListCcCustomedRuleResponse({}));
  }

  async listCcCustomedRule(request: ListCcCustomedRuleRequest): Promise<ListCcCustomedRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCcCustomedRuleWithOptions(request, runtime);
  }

  async modifyCcCustomStatusWithOptions(request: ModifyCcCustomStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCcCustomStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCcCustomStatusResponse>(await this.doRPCRequest("ModifyCcCustomStatus", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCcCustomStatusResponse({}));
  }

  async modifyCcCustomStatus(request: ModifyCcCustomStatusRequest): Promise<ModifyCcCustomStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCcCustomStatusWithOptions(request, runtime);
  }

  async modifyCcStatusWithOptions(request: ModifyCcStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCcStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCcStatusResponse>(await this.doRPCRequest("ModifyCcStatus", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCcStatusResponse({}));
  }

  async modifyCcStatus(request: ModifyCcStatusRequest): Promise<ModifyCcStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCcStatusWithOptions(request, runtime);
  }

  async modifyCcTemplateWithOptions(request: ModifyCcTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCcTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCcTemplateResponse>(await this.doRPCRequest("ModifyCcTemplate", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCcTemplateResponse({}));
  }

  async modifyCcTemplate(request: ModifyCcTemplateRequest): Promise<ModifyCcTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCcTemplateWithOptions(request, runtime);
  }

  async modifyDDoSProtectConfigWithOptions(request: ModifyDDoSProtectConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDDoSProtectConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDDoSProtectConfigResponse>(await this.doRPCRequest("ModifyDDoSProtectConfig", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDDoSProtectConfigResponse({}));
  }

  async modifyDDoSProtectConfig(request: ModifyDDoSProtectConfigRequest): Promise<ModifyDDoSProtectConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDDoSProtectConfigWithOptions(request, runtime);
  }

  async modifyDomainBlackWhiteListWithOptions(request: ModifyDomainBlackWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDomainBlackWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDomainBlackWhiteListResponse>(await this.doRPCRequest("ModifyDomainBlackWhiteList", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDomainBlackWhiteListResponse({}));
  }

  async modifyDomainBlackWhiteList(request: ModifyDomainBlackWhiteListRequest): Promise<ModifyDomainBlackWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDomainBlackWhiteListWithOptions(request, runtime);
  }

  async modifyDomainProxyWithOptions(request: ModifyDomainProxyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDomainProxyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDomainProxyResponse>(await this.doRPCRequest("ModifyDomainProxy", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDomainProxyResponse({}));
  }

  async modifyDomainProxy(request: ModifyDomainProxyRequest): Promise<ModifyDomainProxyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDomainProxyWithOptions(request, runtime);
  }

  async modifyElasticBandwidthWithOptions(request: ModifyElasticBandwidthRequest, runtime: $Util.RuntimeOptions): Promise<ModifyElasticBandwidthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyElasticBandwidthResponse>(await this.doRPCRequest("ModifyElasticBandwidth", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyElasticBandwidthResponse({}));
  }

  async modifyElasticBandwidth(request: ModifyElasticBandwidthRequest): Promise<ModifyElasticBandwidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyElasticBandwidthWithOptions(request, runtime);
  }

  async modifyHealthCheckConfigWithOptions(request: ModifyHealthCheckConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHealthCheckConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyHealthCheckConfigResponse>(await this.doRPCRequest("ModifyHealthCheckConfig", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyHealthCheckConfigResponse({}));
  }

  async modifyHealthCheckConfig(request: ModifyHealthCheckConfigRequest): Promise<ModifyHealthCheckConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHealthCheckConfigWithOptions(request, runtime);
  }

  async modifyIpCnameStatusWithOptions(request: ModifyIpCnameStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIpCnameStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyIpCnameStatusResponse>(await this.doRPCRequest("ModifyIpCnameStatus", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyIpCnameStatusResponse({}));
  }

  async modifyIpCnameStatus(request: ModifyIpCnameStatusRequest): Promise<ModifyIpCnameStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIpCnameStatusWithOptions(request, runtime);
  }

  async modifyPersistenceTimeOutWithOptions(request: ModifyPersistenceTimeOutRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPersistenceTimeOutResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPersistenceTimeOutResponse>(await this.doRPCRequest("ModifyPersistenceTimeOut", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPersistenceTimeOutResponse({}));
  }

  async modifyPersistenceTimeOut(request: ModifyPersistenceTimeOutRequest): Promise<ModifyPersistenceTimeOutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPersistenceTimeOutWithOptions(request, runtime);
  }

  async modifyRealServersWithOptions(request: ModifyRealServersRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRealServersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyRealServersResponse>(await this.doRPCRequest("ModifyRealServers", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyRealServersResponse({}));
  }

  async modifyRealServers(request: ModifyRealServersRequest): Promise<ModifyRealServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRealServersWithOptions(request, runtime);
  }

  async modifyTransmitLineWithOptions(request: ModifyTransmitLineRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTransmitLineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyTransmitLineResponse>(await this.doRPCRequest("ModifyTransmitLine", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyTransmitLineResponse({}));
  }

  async modifyTransmitLine(request: ModifyTransmitLineRequest): Promise<ModifyTransmitLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTransmitLineWithOptions(request, runtime);
  }

  async updateCcCustomedRuleWithOptions(request: UpdateCcCustomedRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCcCustomedRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCcCustomedRuleResponse>(await this.doRPCRequest("UpdateCcCustomedRule", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCcCustomedRuleResponse({}));
  }

  async updateCcCustomedRule(request: UpdateCcCustomedRuleRequest): Promise<UpdateCcCustomedRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCcCustomedRuleWithOptions(request, runtime);
  }

  async updatePortRuleWithOptions(request: UpdatePortRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePortRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdatePortRuleResponse>(await this.doRPCRequest("UpdatePortRule", "2017-07-25", "HTTPS", "POST", "AK", "json", req, runtime), new UpdatePortRuleResponse({}));
  }

  async updatePortRule(request: UpdatePortRuleRequest): Promise<UpdatePortRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePortRuleWithOptions(request, runtime);
  }

}
