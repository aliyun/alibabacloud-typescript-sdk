// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLoadBalancerAttributeResponseBodyTags } from "./GetLoadBalancerAttributeResponseBodyTags";
import { GetLoadBalancerAttributeResponseBodyZoneMappings } from "./GetLoadBalancerAttributeResponseBodyZoneMappings";


export class GetLoadBalancerAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The protocol version. Valid values:
   * 
   * *   **Ipv4**: IPv4.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The time when the resource was created. The time follows the ISO 8601 standard in the **yyyy-MM-ddTHH:mm:ssZ** format. The time is displayed in UTC.
   * 
   * @example
   * 2024-07-08T10:12:58Z
   */
  createTime?: string;
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
   * The GWLB instance ID.
   * 
   * @example
   * gwlb-9njtjmqt7zfcqm****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The GWLB instance name.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * gwlb
   */
  loadBalancerName?: string;
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
   * The request ID.
   * 
   * @example
   * B6DC5DDC-9560-59BF-80FA-ED1E5CB417DF
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmx7pmxcy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetLoadBalancerAttributeResponseBodyTags[];
  /**
   * @remarks
   * Traffic processing mode. Valid values:
   * 
   * *   **LoadBalance**: load balancing mode. GWLB forwards traffic to backend servers.
   * *   **ByPass**: bypass mode. GWLB directly returns traffic to the GWLB endpoint without forwarding it to the backend servers.
   * 
   * @example
   * LoadBalance
   */
  trafficMode?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-k1aajsbwbaq4todet****
   */
  vpcId?: string;
  /**
   * @remarks
   * The mappings between zones and vSwitches. You must specify at least one zone. You can specify at most 20 zones. If the region supports two or more zones, specify at least two zones.
   */
  zoneMappings?: GetLoadBalancerAttributeResponseBodyZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      createTime: 'CreateTime',
      loadBalancerBusinessStatus: 'LoadBalancerBusinessStatus',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerStatus: 'LoadBalancerStatus',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      trafficMode: 'TrafficMode',
      vpcId: 'VpcId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      createTime: 'string',
      loadBalancerBusinessStatus: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerStatus: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyTags },
      trafficMode: 'string',
      vpcId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyZoneMappings },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.zoneMappings)) {
      $dara.Model.validateArray(this.zoneMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

