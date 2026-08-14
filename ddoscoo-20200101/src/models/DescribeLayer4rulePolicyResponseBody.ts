// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLayer4RulePolicyResponseBodyPriRealServers extends $dara.Model {
  currentIndex?: number;
  eip?: string;
  frontendPort?: number;
  instanceId?: string;
  protocol?: string;
  realServer?: string;
  static names(): { [key: string]: string } {
    return {
      currentIndex: 'CurrentIndex',
      eip: 'Eip',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
      realServer: 'RealServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentIndex: 'number',
      eip: 'string',
      frontendPort: 'number',
      instanceId: 'string',
      protocol: 'string',
      realServer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulePolicyResponseBodySecRealServers extends $dara.Model {
  currentIndex?: number;
  eip?: string;
  frontendPort?: number;
  instanceId?: string;
  protocol?: string;
  realServer?: string;
  static names(): { [key: string]: string } {
    return {
      currentIndex: 'CurrentIndex',
      eip: 'Eip',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      protocol: 'Protocol',
      realServer: 'RealServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentIndex: 'number',
      eip: 'string',
      frontendPort: 'number',
      instanceId: 'string',
      protocol: 'string',
      realServer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer4RulePolicyResponseBody extends $dara.Model {
  backendPort?: number;
  bakMode?: string;
  currentIndex?: number;
  forwardProtocol?: string;
  frontendPort?: number;
  instanceId?: string;
  priRealServers?: DescribeLayer4RulePolicyResponseBodyPriRealServers[];
  requestId?: string;
  secRealServers?: DescribeLayer4RulePolicyResponseBodySecRealServers[];
  static names(): { [key: string]: string } {
    return {
      backendPort: 'BackendPort',
      bakMode: 'BakMode',
      currentIndex: 'CurrentIndex',
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      priRealServers: 'PriRealServers',
      requestId: 'RequestId',
      secRealServers: 'SecRealServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendPort: 'number',
      bakMode: 'string',
      currentIndex: 'number',
      forwardProtocol: 'string',
      frontendPort: 'number',
      instanceId: 'string',
      priRealServers: { 'type': 'array', 'itemType': DescribeLayer4RulePolicyResponseBodyPriRealServers },
      requestId: 'string',
      secRealServers: { 'type': 'array', 'itemType': DescribeLayer4RulePolicyResponseBodySecRealServers },
    };
  }

  validate() {
    if(Array.isArray(this.priRealServers)) {
      $dara.Model.validateArray(this.priRealServers);
    }
    if(Array.isArray(this.secRealServers)) {
      $dara.Model.validateArray(this.secRealServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

