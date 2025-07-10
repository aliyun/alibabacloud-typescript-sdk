// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLoadBalancersResponseBodyLoadBalancersTags } from "./ListLoadBalancersResponseBodyLoadBalancersTags";
import { ListLoadBalancersResponseBodyLoadBalancersZoneMappings } from "./ListLoadBalancersResponseBodyLoadBalancersZoneMappings";


export class ListLoadBalancersResponseBodyLoadBalancers extends $dara.Model {
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * *   **IPv4**
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
   * 2024-08-05 18:24:07
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
   * testGwlbName
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
   * The resource group ID.
   * 
   * @example
   * rg-aek26jasguy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListLoadBalancersResponseBodyLoadBalancersTags[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-uf6eg0vndlsa84n7r****
   */
  vpcId?: string;
  /**
   * @remarks
   * The mappings between zones and vSwitches. You must specify at least one zone. You can specify at most 20 zones. If the region supports two or more zones, specify at least two zones.
   */
  zoneMappings?: ListLoadBalancersResponseBodyLoadBalancersZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      createTime: 'CreateTime',
      loadBalancerBusinessStatus: 'LoadBalancerBusinessStatus',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerStatus: 'LoadBalancerStatus',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
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
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersTags },
      vpcId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersZoneMappings },
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

