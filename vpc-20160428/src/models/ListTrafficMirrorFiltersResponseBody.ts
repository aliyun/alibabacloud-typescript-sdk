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

export class ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * FinanceJoshua
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

export class ListTrafficMirrorFiltersResponseBodyTrafficMirrorFilters extends $dara.Model {
  /**
   * @remarks
   * The time when the filter is created.
   * 
   * @example
   * 2023-09-05T15:26Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The information about the outbound rules.
   */
  egressRules?: ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersEgressRules[];
  /**
   * @remarks
   * The information about the inbound rules.
   */
  ingressRules?: ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersIngressRules[];
  /**
   * @remarks
   * The ID of the resource group to which the traffic mirror session belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersTags[];
  /**
   * @remarks
   * The description of the filter.
   * 
   * @example
   * This is a filter.
   */
  trafficMirrorFilterDescription?: string;
  /**
   * @remarks
   * The ID of the filter.
   * 
   * @example
   * tmf-j6cmls82xnc86vtpe****
   */
  trafficMirrorFilterId?: string;
  /**
   * @remarks
   * The filter name.
   * 
   * @example
   * abc
   */
  trafficMirrorFilterName?: string;
  /**
   * @remarks
   * The status of the filter. Valid values:
   * 
   * *   **Creating**
   * *   **Created**
   * *   **Modifying**
   * *   **Deleting**
   * 
   * @example
   * Created
   */
  trafficMirrorFilterStatus?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      egressRules: 'EgressRules',
      ingressRules: 'IngressRules',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      trafficMirrorFilterDescription: 'TrafficMirrorFilterDescription',
      trafficMirrorFilterId: 'TrafficMirrorFilterId',
      trafficMirrorFilterName: 'TrafficMirrorFilterName',
      trafficMirrorFilterStatus: 'TrafficMirrorFilterStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      egressRules: { 'type': 'array', 'itemType': ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersEgressRules },
      ingressRules: { 'type': 'array', 'itemType': ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersIngressRules },
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListTrafficMirrorFiltersResponseBodyTrafficMirrorFiltersTags },
      trafficMirrorFilterDescription: 'string',
      trafficMirrorFilterId: 'string',
      trafficMirrorFilterName: 'string',
      trafficMirrorFilterStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.egressRules)) {
      $dara.Model.validateArray(this.egressRules);
    }
    if(Array.isArray(this.ingressRules)) {
      $dara.Model.validateArray(this.ingressRules);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrafficMirrorFiltersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is the token that is used for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 739CA01C-92EB-4C69-BCC0-280149C6F41E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  /**
   * @remarks
   * The information about the filters.
   */
  trafficMirrorFilters?: ListTrafficMirrorFiltersResponseBodyTrafficMirrorFilters[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficMirrorFilters: 'TrafficMirrorFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
      trafficMirrorFilters: { 'type': 'array', 'itemType': ListTrafficMirrorFiltersResponseBodyTrafficMirrorFilters },
    };
  }

  validate() {
    if(Array.isArray(this.trafficMirrorFilters)) {
      $dara.Model.validateArray(this.trafficMirrorFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

