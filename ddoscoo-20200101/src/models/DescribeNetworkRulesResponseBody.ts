// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkRulesResponseBodyNetworkRules extends $dara.Model {
  backendPort?: number;
  frontendPort?: number;
  instanceId?: string;
  ipMode?: string;
  isAutoCreate?: boolean;
  payloadRuleEnable?: number;
  protocol?: string;
  proxyEnable?: number;
  proxyStatus?: string;
  realServers?: string[];
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      backendPort: 'BackendPort',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      ipMode: 'IpMode',
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
      frontendPort: 'number',
      instanceId: 'string',
      ipMode: 'string',
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

export class DescribeNetworkRulesResponseBody extends $dara.Model {
  networkRules?: DescribeNetworkRulesResponseBodyNetworkRules[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkRules: 'NetworkRules',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRules: { 'type': 'array', 'itemType': DescribeNetworkRulesResponseBodyNetworkRules },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.networkRules)) {
      $dara.Model.validateArray(this.networkRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

