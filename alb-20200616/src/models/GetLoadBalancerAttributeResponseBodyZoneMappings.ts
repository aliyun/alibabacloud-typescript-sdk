// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses } from "./GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses";


export class GetLoadBalancerAttributeResponseBodyZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The address of the ALB instance.
   */
  loadBalancerAddresses?: GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses[];
  /**
   * @remarks
   * The zone status. Valid values:
   * 
   * - **Active**: The ALB instance is running.
   * 
   * - **Stopped**: The ALB instance is disabled. 
   * 
   * - **Shifted**: The ALB instance is removed.
   * 
   * - **Starting**: The ALB instance is starting.
   * 
   * - **Stopping**: The ALB instance is stopping.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch in the zone. You can specify only one vSwitch (subnet) in each zone of an ALB instance.
   * 
   * @example
   * vsw-bp12mw1f8k3jgy****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the ALB instance.
   * 
   * You can call the [DescribeZones](https://help.aliyun.com/document_detail/189196.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerAddresses: 'LoadBalancerAddresses',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerAddresses: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses },
      status: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancerAddresses)) {
      $dara.Model.validateArray(this.loadBalancerAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

