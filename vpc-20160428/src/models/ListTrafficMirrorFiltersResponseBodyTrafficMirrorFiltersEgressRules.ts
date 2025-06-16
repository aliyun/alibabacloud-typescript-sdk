// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersEgressRules extends $dara.Model {
  /**
   * @remarks
   * The action of the outbound rule. Valid values:
   * 
   * *   **accept**
   * *   **drop**
   * 
   * @example
   * accept
   */
  action?: string;
  /**
   * @remarks
   * The destination CIDR block of the outbound traffic.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The destination port range of the outbound traffic.
   * 
   * @example
   * 22/40
   */
  destinationPortRange?: string;
  ipVersion?: string;
  /**
   * @remarks
   * The priority of the outbound rule. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The protocol that is used by the outbound traffic to be mirrored. Valid values:
   * 
   * *   **ALL**
   * *   **ICMP**
   * *   **TCP**
   * *   **UDP**
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of the outbound traffic.
   * 
   * @example
   * 10.0.0.0/24
   */
  sourceCidrBlock?: string;
  /**
   * @remarks
   * The source port range of the outbound traffic.
   * 
   * @example
   * 22/40
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The direction of the network traffic. Valid values:
   * 
   * *   **egress**
   * *   **ingress**
   * 
   * @example
   * egress
   */
  trafficDirection?: string;
  /**
   * @remarks
   * The ID of the filter associated with the outbound rule.
   * 
   * @example
   * tmf-j6cmls82xnc86vtpe****
   */
  trafficMirrorFilterId?: string;
  /**
   * @remarks
   * The ID of the outbound rule.
   * 
   * @example
   * tmr-j6c89rzmtd3hhdugq****
   */
  trafficMirrorFilterRuleId?: string;
  /**
   * @remarks
   * The status of the outbound rule. Valid values:
   * 
   * *   **Creating**
   * *   **Created**
   * *   **Modifying**
   * *   **Deleting**
   * 
   * @example
   * Created
   */
  trafficMirrorFilterRuleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      destinationCidrBlock: 'DestinationCidrBlock',
      destinationPortRange: 'DestinationPortRange',
      ipVersion: 'IpVersion',
      priority: 'Priority',
      protocol: 'Protocol',
      sourceCidrBlock: 'SourceCidrBlock',
      sourcePortRange: 'SourcePortRange',
      trafficDirection: 'TrafficDirection',
      trafficMirrorFilterId: 'TrafficMirrorFilterId',
      trafficMirrorFilterRuleId: 'TrafficMirrorFilterRuleId',
      trafficMirrorFilterRuleStatus: 'TrafficMirrorFilterRuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      destinationCidrBlock: 'string',
      destinationPortRange: 'string',
      ipVersion: 'string',
      priority: 'number',
      protocol: 'string',
      sourceCidrBlock: 'string',
      sourcePortRange: 'string',
      trafficDirection: 'string',
      trafficMirrorFilterId: 'string',
      trafficMirrorFilterRuleId: 'string',
      trafficMirrorFilterRuleStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

