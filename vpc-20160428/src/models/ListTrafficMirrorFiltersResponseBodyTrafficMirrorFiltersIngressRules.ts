// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersIngressRules extends $dara.Model {
  /**
   * @remarks
   * The action of the inbound rule. Valid values:
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
   * The destination CIDR block of the inbound traffic.
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The destination port range of the inbound traffic.
   * 
   * @example
   * -1/-1
   */
  destinationPortRange?: string;
  ipVersion?: string;
  /**
   * @remarks
   * The priority of the inbound rule. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The protocol that is used by the inbound traffic to be mirrored. Valid values:
   * 
   * *   **ALL**
   * *   **ICMP**
   * *   **TCP**
   * *   **UDP**
   * 
   * @example
   * ALL
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of the inbound traffic.
   * 
   * @example
   * 0.0.0.0/0
   */
  sourceCidrBlock?: string;
  /**
   * @remarks
   * The destination port range of the inbound traffic.
   * 
   * @example
   * -1/-1
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
   * ingress
   */
  trafficDirection?: string;
  /**
   * @remarks
   * The ID of the filter associated with the inbound rule.
   * 
   * @example
   * tmf-j6cmls82xnc86vtpe****
   */
  trafficMirrorFilterId?: string;
  /**
   * @remarks
   * The ID of the inbound rule.
   * 
   * @example
   * tmr-j6cezu8e68rnpepet****
   */
  trafficMirrorFilterRuleId?: string;
  /**
   * @remarks
   * The status of the inbound rule. Valid values:
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

