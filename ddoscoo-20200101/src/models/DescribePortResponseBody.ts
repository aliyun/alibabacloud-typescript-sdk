// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortResponseBodyNetworkRules extends $dara.Model {
  backendPort?: number;
  frontendPort?: number;
  frontendProtocol?: string;
  instanceId?: string;
  ipMode?: string;
  isAutoCreate?: boolean;
  realServers?: string[];
  static names(): { [key: string]: string } {
    return {
      backendPort: 'BackendPort',
      frontendPort: 'FrontendPort',
      frontendProtocol: 'FrontendProtocol',
      instanceId: 'InstanceId',
      ipMode: 'IpMode',
      isAutoCreate: 'IsAutoCreate',
      realServers: 'RealServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPort: 'number',
      frontendPort: 'number',
      frontendProtocol: 'string',
      instanceId: 'string',
      ipMode: 'string',
      isAutoCreate: 'boolean',
      realServers: { 'type': 'array', 'itemType': 'string' },
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

export class DescribePortResponseBody extends $dara.Model {
  networkRules?: DescribePortResponseBodyNetworkRules[];
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
      networkRules: { 'type': 'array', 'itemType': DescribePortResponseBodyNetworkRules },
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

