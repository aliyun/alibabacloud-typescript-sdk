// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLayer4RulePolicyResponseBodyPriRealServers } from "./DescribeLayer4rulePolicyResponseBodyPriRealServers";
import { DescribeLayer4RulePolicyResponseBodySecRealServers } from "./DescribeLayer4rulePolicyResponseBodySecRealServers";


export class DescribeLayer4RulePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The port of the origin server.
   * 
   * @example
   * 2022
   */
  backendPort?: number;
  /**
   * @remarks
   * The mode that is used to forward service traffic. Valid values:
   * 
   * *   0: the default mode. In this mode, Anti-DDoS Pro or Anti-DDoS Premium forwards service traffic to the origin IP address that you specified when you created the port forwarding rule. You can call the [CreateNetworkRules](https://help.aliyun.com/document_detail/157482.html) operation to create a port forwarding rule.
   * *   1: the origin redundancy mode. In this mode, Anti-DDoS Pro or Anti-DDoS Premium forwards service traffic to the IP addresses of the primary or secondary origin servers. You can call the [ConfigLayer4RulePolicy](https://help.aliyun.com/document_detail/312684.html) operation to configure IP addresses.
   * 
   * @example
   * 1
   */
  bakMode?: string;
  /**
   * @remarks
   * The origin server that is used to receive service traffic. Valid values:
   * 
   * *   **1**: the primary origin server, which indicates that Anti-DDoS Pro or Anti-DDoS Premium forwards service traffic to the IP addresses of the primary origin server.
   * *   **2**: the secondary origin server, which indicates that Anti-DDoS Pro or Anti-DDoS Premium forwards service traffic to the IP addresses of the secondary origin server.
   * 
   * @example
   * 1
   */
  currentIndex?: number;
  /**
   * @remarks
   * The type of the protocol.
   * 
   * @example
   * udp
   */
  forwardProtocol?: string;
  /**
   * @remarks
   * The forwarding port.
   * 
   * @example
   * 2020
   */
  frontendPort?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ddosDip-sg-4hr2b3l****
   */
  instanceId?: string;
  /**
   * @remarks
   * An array that consists of the information about the primary origin server, including the IP addresses, forwarding protocol, and forwarding port.
   */
  priRealServers?: DescribeLayer4RulePolicyResponseBodyPriRealServers[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6E46CC51-36BE-1100-B14C-DAF8381B8F73
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the information about the secondary origin server, including the IP addresses, forwarding protocol, and forwarding port.
   */
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

