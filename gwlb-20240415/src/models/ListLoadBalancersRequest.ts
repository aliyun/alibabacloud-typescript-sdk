// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLoadBalancersRequestTag } from "./ListLoadBalancersRequestTag";


export class ListLoadBalancersRequest extends $dara.Model {
  /**
   * @remarks
   * The IP version of the NLB instance. Valid values:
   * 
   * *   **Ipv4**
   * 
   * Enumeration values:
   * 
   * *   IPv4: IPv4
   * *   DualStack: dual-stack
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The business status of the GWLB instance. Valid values:
   * 
   * *   **Normal**: running as expected
   * *   **FinancialLocked**: locked due to overdue payments
   * 
   * @example
   * Normal
   */
  loadBalancerBusinessStatus?: string;
  /**
   * @remarks
   * The GWLB instance IDs. You can query at most 20 GWLB instances in each call.
   */
  loadBalancerIds?: string[];
  /**
   * @remarks
   * The GWLB instance names. You can specify at most 20 GWLB instance names in each call.
   */
  loadBalancerNames?: string[];
  /**
   * @remarks
   * The GWLB instance status. Valid values:
   * 
   * *   **Active**: The GWLB instance is running.
   * *   **Inactive**: The GWLB instance is disabled. Listeners of GWLB instances in the Inactive state do not forward traffic.
   * *   **Provisioning**: The GWLB instance is being created.
   * *   **Configuring**: The GWLB instance is being modified.
   * 
   * @example
   * Active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 1000. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value of **NextToken** is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * WyJyb290IiwibiIsIm4iLDEsMCwxNjg1MDY1NTgyNzYwLCI2NDcwMGY2ZTc2Zjc0MWFiZGEyZjQyNzc4ZDk2MmJkOTk3ZGZmM2Nm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2htf5qsyrn****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of entries to be skipped in the call.
   * 
   * @example
   * 1
   */
  skip?: number;
  /**
   * @remarks
   * The tags. You can specify at most 20 tags in each call.
   */
  tag?: ListLoadBalancersRequestTag[];
  /**
   * @remarks
   * Specifies the traffic processing mode. Valid values:
   * 
   * *   **LoadBalance**: load balancing mode. GWLB continues to forward traffic to backend servers.
   * *   **ByPass**: bypass mode. GWLB directly returns traffic to the GWLB endpoint without forwarding it to the backend servers.
   * 
   * @example
   * LoadBalance
   */
  trafficMode?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) IDs. You can query at most 20 IDs in each call.
   */
  vpcIds?: string[];
  /**
   * @remarks
   * The zone IDs. You can query at most 20 zone IDs in each call.
   */
  zoneIds?: string[];
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      loadBalancerBusinessStatus: 'LoadBalancerBusinessStatus',
      loadBalancerIds: 'LoadBalancerIds',
      loadBalancerNames: 'LoadBalancerNames',
      loadBalancerStatus: 'LoadBalancerStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      skip: 'Skip',
      tag: 'Tag',
      trafficMode: 'TrafficMode',
      vpcIds: 'VpcIds',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      loadBalancerBusinessStatus: 'string',
      loadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      loadBalancerNames: { 'type': 'array', 'itemType': 'string' },
      loadBalancerStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      skip: 'number',
      tag: { 'type': 'array', 'itemType': ListLoadBalancersRequestTag },
      trafficMode: 'string',
      vpcIds: { 'type': 'array', 'itemType': 'string' },
      zoneIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancerIds)) {
      $dara.Model.validateArray(this.loadBalancerIds);
    }
    if(Array.isArray(this.loadBalancerNames)) {
      $dara.Model.validateArray(this.loadBalancerNames);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.vpcIds)) {
      $dara.Model.validateArray(this.vpcIds);
    }
    if(Array.isArray(this.zoneIds)) {
      $dara.Model.validateArray(this.zoneIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

